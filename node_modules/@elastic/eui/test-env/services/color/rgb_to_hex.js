"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbToHex = rgbToHex;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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
function asHex(value) {
  var hex = parseInt(value, 10).toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}

function rgbToHex(rgb) {
  var withoutWhitespace = rgb.replace(/\s+/g, '');
  var rgbMatch = withoutWhitespace.match(/^rgba?\((\d+),(\d+),(\d+)(?:,(?:1(?:\.0*)?|0(?:\.\d+)?))?\)$/i);

  if (!rgbMatch) {
    return '';
  }

  var _rgbMatch = (0, _slicedToArray2.default)(rgbMatch, 4),
      r = _rgbMatch[1],
      g = _rgbMatch[2],
      b = _rgbMatch[3];

  return "#".concat(asHex(r)).concat(asHex(g)).concat(asHex(b));
}