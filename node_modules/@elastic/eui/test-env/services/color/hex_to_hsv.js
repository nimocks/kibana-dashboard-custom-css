"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToHsv = hexToHsv;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _hex_to_rgb = require("./hex_to_rgb");

var _rgb_to_hsv = require("./rgb_to_hsv");

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
function hexToHsv(hex) {
  var _hexToRgb = (0, _hex_to_rgb.hexToRgb)(hex),
      _hexToRgb2 = (0, _slicedToArray2.default)(_hexToRgb, 3),
      r = _hexToRgb2[0],
      g = _hexToRgb2[1],
      b = _hexToRgb2[2];

  return (0, _rgb_to_hsv.rgbToHsv)({
    r: r,
    g: g,
    b: b
  });
}