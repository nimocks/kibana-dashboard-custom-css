"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omit = exports.get = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// wrap the lodash functions to avoid having lodash's TS type definition from being
// exported, which can conflict with the lodash namespace if other versions are used
var get = function get(object, path, defaultValue) {
  return (0, _get2.default)(object, path, defaultValue);
};

exports.get = get;

var omit = function omit(object, paths) {
  return (0, _omit2.default)(object, paths);
};

exports.omit = omit;