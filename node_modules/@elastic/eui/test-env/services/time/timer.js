"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
var Timer = // In a browser this is a number, but in node it's a NodeJS.Time (a
// class). We don't care about this difference.
function Timer(callback, timeMs) {
  var _this = this;

  (0, _classCallCheck2.default)(this, Timer);
  (0, _defineProperty2.default)(this, "id", void 0);
  (0, _defineProperty2.default)(this, "callback", void 0);
  (0, _defineProperty2.default)(this, "finishTime", void 0);
  (0, _defineProperty2.default)(this, "timeRemaining", void 0);
  (0, _defineProperty2.default)(this, "pause", function () {
    clearTimeout(_this.id);
    _this.id = undefined;
    _this.timeRemaining = (_this.finishTime || 0) - Date.now();
  });
  (0, _defineProperty2.default)(this, "resume", function () {
    _this.id = setTimeout(_this.finish, _this.timeRemaining);
    _this.finishTime = Date.now() + (_this.timeRemaining || 0);
    _this.timeRemaining = undefined;
  });
  (0, _defineProperty2.default)(this, "clear", function () {
    clearTimeout(_this.id);
    _this.id = undefined;
    _this.callback = undefined;
    _this.finishTime = undefined;
    _this.timeRemaining = undefined;
  });
  (0, _defineProperty2.default)(this, "finish", function () {
    if (_this.callback) {
      _this.callback();
    }

    _this.clear();
  });
  this.id = setTimeout(this.finish, timeMs);
  this.callback = callback;
  this.finishTime = Date.now() + timeMs;
  this.timeRemaining = undefined;
};

exports.Timer = Timer;