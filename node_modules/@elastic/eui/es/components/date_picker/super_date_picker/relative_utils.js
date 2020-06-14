function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import dateMath from '@elastic/datemath';
import moment from 'moment';
import { get } from '../../../services/objects';
import { isString } from '../../../services/predicate';
import { relativeUnitsFromLargestToSmallest } from './relative_options';
var ROUND_DELIMETER = '/';
export function parseRelativeParts(value) {
  var matches = isString(value) && value.match(/now(([\-\+])([0-9]+)([smhdwMy])(\/[smhdwMy])?)?/);
  var operator = matches && matches[2];
  var count = matches && matches[3];
  var unit = matches && matches[4];
  var roundBy = matches && matches[5];

  if (count && unit) {
    var isRounded = roundBy ? true : false;
    var roundUnit = isRounded && roundBy ? roundBy.replace(ROUND_DELIMETER, '') : undefined;
    return _objectSpread({
      count: parseInt(count, 10),
      unit: operator === '+' ? "".concat(unit, "+") : unit,
      round: isRounded
    }, roundUnit ? {
      roundUnit: roundUnit
    } : {});
  }

  var results = {
    count: 0,
    unit: 's',
    round: false
  };
  var duration = moment.duration(moment().diff(dateMath.parse(value)));
  var unitOp = '';

  for (var i = 0; i < relativeUnitsFromLargestToSmallest.length; i++) {
    var asRelative = duration.as(relativeUnitsFromLargestToSmallest[i]);
    if (asRelative < 0) unitOp = '+';

    if (Math.abs(asRelative) > 1) {
      results.count = Math.round(Math.abs(asRelative));
      results.unit = relativeUnitsFromLargestToSmallest[i] + unitOp;
      results.round = false;
      break;
    }
  }

  return results;
}
export var toRelativeStringFromParts = function toRelativeStringFromParts(relativeParts) {
  var count = get(relativeParts, 'count', 0);
  var isRounded = get(relativeParts, 'round', false);

  if (count === 0 && !isRounded) {
    return 'now';
  }

  var matches = get(relativeParts, 'unit', 's').match(/([smhdwMy])(\+)?/);
  var unit = matches[1];
  var operator = matches && matches[2] ? matches[2] : '-';
  var round = isRounded ? "".concat(ROUND_DELIMETER).concat(unit) : '';
  return "now".concat(operator).concat(count).concat(unit).concat(round);
};