"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateMode = getDateMode;
exports.toAbsoluteString = toAbsoluteString;
exports.toRelativeString = toRelativeString;
exports.DATE_MODES = void 0;

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

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
var DATE_MODES = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  NOW: 'now'
};
exports.DATE_MODES = DATE_MODES;

function getDateMode(value) {
  if (value === 'now') {
    return DATE_MODES.NOW;
  }

  if (value.includes('now')) {
    return DATE_MODES.RELATIVE;
  }

  return DATE_MODES.ABSOLUTE;
}

function toAbsoluteString(value) {
  var roundUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var valueAsMoment = _datemath.default.parse(value, {
    roundUp: roundUp
  });

  if (!valueAsMoment) {
    return value;
  }

  return valueAsMoment.toISOString();
}

function toRelativeString(value) {
  return (0, _relative_utils.toRelativeStringFromParts)((0, _relative_utils.parseRelativeParts)(value));
}