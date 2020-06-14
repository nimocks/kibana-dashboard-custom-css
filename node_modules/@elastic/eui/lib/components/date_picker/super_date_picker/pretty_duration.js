"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTimeString = formatTimeString;
exports.prettyDuration = prettyDuration;
exports.showPrettyDuration = showPrettyDuration;
exports.commonDurationRanges = void 0;

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _moment = _interopRequireDefault(require("moment"));

var _time_units = require("./time_units");

var _date_modes = require("./date_modes");

var _relative_utils = require("./relative_utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// eslint-disable-line import/named
var ISO_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
var commonDurationRanges = [{
  start: 'now/d',
  end: 'now/d',
  label: 'Today'
}, {
  start: 'now/w',
  end: 'now/w',
  label: 'This week'
}, {
  start: 'now/M',
  end: 'now/M',
  label: 'This month'
}, {
  start: 'now/y',
  end: 'now/y',
  label: 'This year'
}, {
  start: 'now-1d/d',
  end: 'now-1d/d',
  label: 'Yesterday'
}, {
  start: 'now/w',
  end: 'now',
  label: 'Week to date'
}, {
  start: 'now/M',
  end: 'now',
  label: 'Month to date'
}, {
  start: 'now/y',
  end: 'now',
  label: 'Year to date'
}];
exports.commonDurationRanges = commonDurationRanges;

function cantLookup(timeFrom, timeTo, dateFormat) {
  var displayFrom = formatTimeString(timeFrom, dateFormat);
  var displayTo = formatTimeString(timeTo, dateFormat, true);
  return "".concat(displayFrom, " to ").concat(displayTo);
}

function isRelativeToNow(timeFrom, timeTo) {
  var fromDateMode = (0, _date_modes.getDateMode)(timeFrom);
  var toDateMode = (0, _date_modes.getDateMode)(timeTo);
  var isLast = fromDateMode === _date_modes.DATE_MODES.RELATIVE && toDateMode === _date_modes.DATE_MODES.NOW;
  var isNext = fromDateMode === _date_modes.DATE_MODES.NOW && toDateMode === _date_modes.DATE_MODES.RELATIVE;
  return isLast || isNext;
}

function formatTimeString(timeString, dateFormat) {
  var roundUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var locale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'en';
  var timeAsMoment = (0, _moment.default)(timeString, ISO_FORMAT, true);

  if (timeAsMoment.isValid()) {
    return timeAsMoment.locale(locale).format(dateFormat);
  }

  if (timeString === 'now') {
    return 'now';
  }

  var tryParse = _datemath.default.parse(timeString, {
    roundUp: roundUp
  });

  if (_moment.default.isMoment(tryParse)) {
    return "~ ".concat(tryParse.locale(locale).fromNow());
  }

  return timeString;
}

function prettyDuration(timeFrom, timeTo) {
  var quickRanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var dateFormat = arguments.length > 3 ? arguments[3] : undefined;
  var matchingQuickRange = quickRanges.find(function (_ref) {
    var quickFrom = _ref.start,
        quickTo = _ref.end;
    return timeFrom === quickFrom && timeTo === quickTo;
  });

  if (matchingQuickRange && matchingQuickRange.label) {
    return matchingQuickRange.label;
  }

  if (isRelativeToNow(timeFrom, timeTo)) {
    var timeTense;
    var relativeParts;

    if ((0, _date_modes.getDateMode)(timeTo) === _date_modes.DATE_MODES.NOW) {
      timeTense = 'Last';
      relativeParts = (0, _relative_utils.parseRelativeParts)(timeFrom);
    } else {
      timeTense = 'Next';
      relativeParts = (0, _relative_utils.parseRelativeParts)(timeTo);
    }

    var countTimeUnit = relativeParts.unit.substring(0, 1);
    var countTimeUnitFullName = relativeParts.count > 1 ? _time_units.timeUnitsPlural[countTimeUnit] : _time_units.timeUnits[countTimeUnit];
    var text = "".concat(timeTense, " ").concat(relativeParts.count, " ").concat(countTimeUnitFullName);

    if (relativeParts.round && relativeParts.roundUnit) {
      text += " rounded to the ".concat(_time_units.timeUnits[relativeParts.roundUnit]);
    }

    return text;
  }

  return cantLookup(timeFrom, timeTo, dateFormat);
}

function showPrettyDuration(timeFrom, timeTo) {
  var quickRanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var matchingQuickRange = quickRanges.find(function (_ref2) {
    var quickFrom = _ref2.start,
        quickTo = _ref2.end;
    return timeFrom === quickFrom && timeTo === quickTo;
  });

  if (matchingQuickRange) {
    return true;
  }

  return isRelativeToNow(timeFrom, timeTo);
}