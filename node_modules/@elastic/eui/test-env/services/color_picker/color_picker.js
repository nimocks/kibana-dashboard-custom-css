"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorPickerState = exports.useColorStopsState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

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
var generateRandomColor = function generateRandomColor() {
  return (// https://www.paulirish.com/2009/random-hex-color-code-snippets/
    "#".concat(Math.floor(Math.random() * 16777215).toString(16))
  );
};

var useColorStopsState = function useColorStopsState() {
  var useRandomColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var initialColorStops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{
    stop: 20,
    color: '#54B399'
  }, {
    stop: 50,
    color: '#D36086'
  }, {
    stop: 65,
    color: '#9170B8'
  }];

  var _useState = (0, _react.useState)(generateRandomColor()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      addColor = _useState2[0],
      setAddColor = _useState2[1];

  var _useState3 = (0, _react.useState)(initialColorStops),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      colorStops = _useState4[0],
      setColorStops = _useState4[1];

  var updateColorStops = function updateColorStops(colorStops) {
    setColorStops(colorStops);

    if (useRandomColor) {
      setAddColor(generateRandomColor());
    }
  };

  return [colorStops, updateColorStops, addColor];
};

exports.useColorStopsState = useColorStopsState;

var useColorPickerState = function useColorPickerState() {
  var initialColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _useState5 = (0, _react.useState)(initialColor),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      color = _useState6[0],
      setColorValue = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isValid = _useState8[0],
      setIsValid = _useState8[1];

  var setColor = function setColor(text, _ref) {
    var isValid = _ref.isValid;
    setColorValue(text);
    setIsValid(isValid);
  };

  var errors = (0, _react.useMemo)(function () {
    var hasErrors = !isValid;
    return hasErrors ? ['Provide a valid color value'] : null;
  }, [isValid]);
  return [color, setColor, errors];
};

exports.useColorPickerState = useColorPickerState;