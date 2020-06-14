"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositionFromStop = exports.getStopFromMouseLocation = exports.calculateScale = exports.isInvalid = exports.isStopInvalid = exports.isColorInvalid = exports.addStop = exports.addDefinedStop = exports.removeStop = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _utils = require("../utils");

var _services = require("../../../services");

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
var EUI_THUMB_SIZE = 16; // Same as $euiRangeThumbHeight & $euiRangeThumbWidth

var removeStop = function removeStop(colorStops, index) {
  if (colorStops.length === 1) {
    return colorStops;
  }

  return [].concat((0, _toConsumableArray2.default)(colorStops.slice(0, index)), (0, _toConsumableArray2.default)(colorStops.slice(index + 1)));
};

exports.removeStop = removeStop;

var addDefinedStop = function addDefinedStop(colorStops, stop) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _services.DEFAULT_VISUALIZATION_COLOR;
  var newStop = {
    stop: stop,
    color: color
  };
  return [].concat((0, _toConsumableArray2.default)(colorStops), [newStop]);
};

exports.addDefinedStop = addDefinedStop;

var addStop = function addStop(colorStops) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _services.DEFAULT_VISUALIZATION_COLOR;
  var max = arguments.length > 2 ? arguments[2] : undefined;
  var index = colorStops.length ? colorStops.length - 1 : 0;
  var stops = colorStops.map(function (el) {
    return el.stop;
  });
  var currentStop = stops[index] != null ? stops[index] : max;
  var delta = 1;

  if (index !== 0) {
    var prevStop = stops[index - 1];
    delta = currentStop - prevStop;
  }

  var stop = currentStop + delta;

  if (stop > max) {
    stop = max;
  } // We've reached the max, so start working backwards


  while (stops.indexOf(stop) > -1) {
    stop--;
  }

  var newStop = {
    stop: stop,
    color: color
  };
  return [].concat((0, _toConsumableArray2.default)(colorStops.slice(0, index + 1)), [newStop], (0, _toConsumableArray2.default)(colorStops.slice(index + 1)));
};

exports.addStop = addStop;

var isColorInvalid = function isColorInvalid(color) {
  var showAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _utils.getChromaColor)(color, showAlpha) == null || color === '';
};

exports.isColorInvalid = isColorInvalid;

var isStopInvalid = function isStopInvalid(stop) {
  return stop == null || isNaN(stop);
};

exports.isStopInvalid = isStopInvalid;

var isInvalid = function isInvalid(colorStops) {
  var showAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return colorStops.some(function (colorStop) {
    return isColorInvalid(colorStop.color, showAlpha) || isStopInvalid(colorStop.stop);
  });
};

exports.isInvalid = isInvalid;

var calculateScale = function calculateScale(trackWidth) {
  var thumbToTrackRatio = EUI_THUMB_SIZE / trackWidth;
  return (1 - thumbToTrackRatio) * 100;
};

exports.calculateScale = calculateScale;

var getStopFromMouseLocation = function getStopFromMouseLocation(location, ref, min, max) {
  var box = (0, _utils.getEventPosition)(location, ref);
  return Math.round(box.left / box.width * (max - min) + min);
};

exports.getStopFromMouseLocation = getStopFromMouseLocation;

var getPositionFromStop = function getPositionFromStop(stop, ref, min, max) {
  // For wide implementations, integer percentages can be visually off.
  // Use 1 decimal place for more accuracy
  return parseFloat(((stop - min) / (max - min) * calculateScale(ref ? ref.clientWidth : 100)).toFixed(1));
};

exports.getPositionFromStop = getPositionFromStop;