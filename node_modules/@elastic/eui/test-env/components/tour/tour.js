"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTour = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _useEuiTour3 = require("./useEuiTour");

var _propTypes = _interopRequireDefault(require("prop-types"));

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
var EuiTour = function EuiTour(_ref) {
  var children = _ref.children,
      steps = _ref.steps,
      initialState = _ref.initialState;

  var _useEuiTour = (0, _useEuiTour3.useEuiTour)(steps, initialState),
      _useEuiTour2 = (0, _slicedToArray2.default)(_useEuiTour, 3),
      stepProps = _useEuiTour2[0],
      actions = _useEuiTour2[1],
      state = _useEuiTour2[2];

  return children(stepProps, actions, state);
};

exports.EuiTour = EuiTour;
EuiTour.propTypes = {
  children: _propTypes.default.func.isRequired,
  steps: _propTypes.default.arrayOf(_propTypes.default.any.isRequired).isRequired,
  initialState: _propTypes.default.shape({
    currentTourStep: _propTypes.default.number.isRequired,
    isTourActive: _propTypes.default.bool.isRequired,
    tourPopoverWidth: _propTypes.default.number.isRequired,
    tourSubtitle: _propTypes.default.string.isRequired
  }).isRequired
};