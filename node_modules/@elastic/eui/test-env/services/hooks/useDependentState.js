"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDependentState = useDependentState;

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
function useDependentState(valueFn, deps) {
  var _useState = (0, _react.useState)(valueFn),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // use ref instead of a state to avoid causing an unnecessary re-render


  var hasMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    // don't call setState on initial mount
    if (hasMounted.current === true) {
      setState(valueFn);
    } else {
      hasMounted.current = true;
    } // purposefully omitting `updateCount.current` and `valueFn`
    // this means updating only the valueFn has no effect, but allows for more natural feeling hook use
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, deps);
  return [state, setState];
}