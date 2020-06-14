"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatBoolean = void 0;

var _predicate = require("../predicate");

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
var formatBoolean = function formatBoolean(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$yes = _ref.yes,
      yes = _ref$yes === void 0 ? 'Yes' : _ref$yes,
      _ref$no = _ref.no,
      no = _ref$no === void 0 ? 'No' : _ref$no,
      _ref$nil = _ref.nil,
      nil = _ref$nil === void 0 ? '' : _ref$nil;

  if ((0, _predicate.isNil)(value)) {
    return nil;
  }

  return value ? yes : no;
};

exports.formatBoolean = formatBoolean;