"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeExecution = timeExecution;
exports.benchmarkFunction = benchmarkFunction;

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
function timeExecution(fn) {
  var start = process.hrtime();
  fn();

  var _process$hrtime = process.hrtime(start),
      _process$hrtime2 = (0, _slicedToArray2.default)(_process$hrtime, 2),
      seconds = _process$hrtime2[0],
      nanoseconds = _process$hrtime2[1];

  var milliseconds = seconds * 1000 + nanoseconds / 1000000;
  return milliseconds;
}

function benchmarkFunction(fn) {
  var warmupRuns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var benchmarkRuns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  // warmup v8 optimizations, cache, etc
  for (var i = 0; i < warmupRuns; i++) {
    fn();
  }

  var runTimes = [];

  for (var _i = 0; _i < benchmarkRuns; _i++) {
    runTimes.push(timeExecution(fn));
  }

  return Math.min.apply(null, runTimes);
}