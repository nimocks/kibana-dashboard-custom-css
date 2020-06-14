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
import numeral from 'numeral';
import { isNil, isString } from '../predicate';
var numberFormatAliases = {
  decimal1: '0,0.0',
  decimal2: '0,0.00',
  decimal3: '0,0.000',
  ordinal: '0o',
  integer: '0,0'
};
export var formatNumber = function formatNumber(value) {
  var numberFormatOrConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var format;
  var nil = '';
  var round;

  if (isString(numberFormatOrConfig)) {
    format = numberFormatOrConfig;
  } else {
    format = numberFormatOrConfig.format;
    nil = numberFormatOrConfig.nil || '';
    round = numberFormatOrConfig.round;
  }

  if (!format) {
    return isNil(value) ? nil : value.toString();
  }

  var roundingFunc = round ? Math.round : Math.floor;
  var numberFormat = numberFormatAliases[format] || format;
  return isNil(value) ? nil : numeral(value).format(numberFormat, roundingFunc);
};