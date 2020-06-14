"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMouseEvent = isMouseEvent;
exports.useMouseMove = useMouseMove;
exports.getFixedLinearGradient = exports.getLinearGradient = exports.getChromaColor = exports.chromaValid = exports.parseColor = exports.RGB_JOIN = exports.RGB_FALLBACK = exports.HSV_FALLBACK = exports.HEX_FALLBACK = exports.throttle = exports.getEventPosition = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = require("react");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

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
var getEventPosition = function getEventPosition(location, container) {
  var x = location.x,
      y = location.y;

  var _container$getBoundin = container.getBoundingClientRect(),
      width = _container$getBoundin.width,
      height = _container$getBoundin.height,
      left = _container$getBoundin.left,
      top = _container$getBoundin.top;

  var leftPos = x - (left + window.pageXOffset);
  var topPos = y - (top + window.pageYOffset);

  if (leftPos < 0) {
    leftPos = 0;
  } else if (leftPos > width) {
    leftPos = width;
  }

  if (topPos < 0) {
    topPos = 0;
  } else if (topPos > height) {
    topPos = height;
  }

  return {
    left: leftPos,
    top: topPos,
    width: width,
    height: height
  };
};

exports.getEventPosition = getEventPosition;

var throttle = function throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn.apply(void 0, arguments);
      time = Date.now();
    }
  };
};

exports.throttle = throttle;

function isMouseEvent(event) {
  return (0, _typeof2.default)(event) === 'object' && 'pageX' in event && 'pageY' in event;
}

function useMouseMove(handleChange) {
  var interactionConditional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  (0, _react.useEffect)(function () {
    return unbindEventListeners;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleInteraction = function handleInteraction(e, isFirstInteraction) {
    if (e) {
      if (interactionConditional) {
        var x = isMouseEvent(e) ? e.pageX : e.touches[0].pageX;
        var y = isMouseEvent(e) ? e.pageY : e.touches[0].pageY;
        handleChange({
          x: x,
          y: y
        }, isFirstInteraction);
      }
    }
  };

  var handleMouseMove = throttle(function (e) {
    handleChange({
      x: e.pageX,
      y: e.pageY
    }, false);
  });

  var handleMouseDown = function handleMouseDown(e) {
    handleInteraction(e, true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', unbindEventListeners);
  };

  var unbindEventListeners = function unbindEventListeners() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', unbindEventListeners);
  };

  return [handleMouseDown, handleInteraction];
}

var HEX_FALLBACK = '';
exports.HEX_FALLBACK = HEX_FALLBACK;
var HSV_FALLBACK = [0, 0, 0];
exports.HSV_FALLBACK = HSV_FALLBACK;
var RGB_FALLBACK = [NaN, NaN, NaN, 1];
exports.RGB_FALLBACK = RGB_FALLBACK;
var RGB_JOIN = ', '; // Given a string, this attempts to return a format that can be consumed by chroma-js

exports.RGB_JOIN = RGB_JOIN;

var parseColor = function parseColor(input) {
  var parsed;
  if (!input) return null;

  if (input.indexOf(',') > 0) {
    if (!/^[\s,.0-9]*$/.test(input)) {
      return null;
    }

    var rgb = input.trim().split(',').filter(function (n) {
      return n !== '';
    }).map(Number);
    parsed = rgb.length > 2 && rgb.length < 5 ? rgb : HEX_FALLBACK;
  } else {
    parsed = input;
  }

  return parsed;
}; // Returns whether the given input will return a valid chroma-js object when designated as one of
// the acceptable formats: hex, rgb, rgba


exports.parseColor = parseColor;

var chromaValid = function chromaValid(color) {
  var parsed = color;

  if (typeof color === 'string') {
    parsed = parseColor(color);
  }

  if (!parsed) return false;

  if ((0, _typeof2.default)(parsed) === 'object') {
    return _chromaJs.default.valid(parsed, 'rgb') || _chromaJs.default.valid(parsed, 'rgba');
  }

  return _chromaJs.default.valid(color, 'hex');
}; // Given an input and opacity configuration, this returns a valid chroma-js object


exports.chromaValid = chromaValid;

var getChromaColor = function getChromaColor(input) {
  var allowOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parsed = parseColor(input);

  if (parsed && chromaValid(parsed)) {
    // type guard for the function overload
    var chromaColor = (0, _typeof2.default)(parsed) === 'object' ? (0, _chromaJs.default)(parsed) : (0, _chromaJs.default)(parsed);

    if (!allowOpacity && chromaColor.alpha() < 1) {
      return null;
    }

    return chromaColor;
  }

  return null;
}; // Given an array of objects with key value pairs stop/color returns a css linear-gradient
// Or given an array of hex colors returns a css linear-gradient


exports.getChromaColor = getChromaColor;

var getLinearGradient = function getLinearGradient(palette) {
  var intervals = palette.length;
  var linearGradient;
  var paletteHasStops = palette.some(function (item) {
    return (0, _typeof2.default)(item) === 'object';
  });

  if (paletteHasStops) {
    var paletteColorStop = palette;
    linearGradient = "linear-gradient(to right, ".concat(paletteColorStop[0].color, " 0%,");
    var decimal = 100 / paletteColorStop[paletteColorStop.length - 1].stop;

    for (var i = 1; i < intervals - 1; i++) {
      linearGradient = "".concat(linearGradient, " ").concat(paletteColorStop[i].color, " ").concat(Math.floor(paletteColorStop[i].stop * decimal), "%,");
    }

    var linearGradientStyle = "".concat(linearGradient, " ").concat(paletteColorStop[palette.length - 1].color, " 100%)");
    return linearGradientStyle;
  } else {
    linearGradient = "linear-gradient(to right, ".concat(palette[0], " 0%,");

    for (var _i = 1; _i < intervals - 1; _i++) {
      linearGradient = "".concat(linearGradient, " ").concat(palette[_i], " ").concat(Math.floor(100 * _i / (intervals - 1)), "%,");
    }

    var _linearGradientStyle = "".concat(linearGradient, " ").concat(palette[palette.length - 1], " 100%)");

    return _linearGradientStyle;
  }
}; // Given an array of hex colors returns a css linear-gradient with individual color blocks


exports.getLinearGradient = getLinearGradient;

var getFixedLinearGradient = function getFixedLinearGradient(palette) {
  var intervals = palette.length;
  var fixedLinearGradient;

  for (var i = 0; i < intervals; i++) {
    var initialColorStop = "".concat(palette[0], " 0%, ").concat(palette[0], " ").concat(Math.floor(100 * 1 / intervals), "%");
    var colorStop = "".concat(palette[i], " ").concat(Math.floor(100 * i / intervals), "%, ").concat(palette[i], " ").concat(Math.floor(100 * (i + 1) / intervals), "%");

    if (i === 0) {
      fixedLinearGradient = "linear-gradient(to right, ".concat(initialColorStop, ",");
    } else if (i === palette.length - 1) {
      fixedLinearGradient = "".concat(fixedLinearGradient, " ").concat(colorStop, ")");
    } else {
      fixedLinearGradient = "".concat(fixedLinearGradient, " ").concat(colorStop, ",");
    }
  }

  return fixedLinearGradient;
};

exports.getFixedLinearGradient = getFixedLinearGradient;