"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDateLike = exports.isDate = exports.isMoment = exports.isNil = exports.isNull = exports.isUndefined = exports.never = exports.always = void 0;

var _moment = _interopRequireDefault(require("moment"));

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
var always = function always(_value) {
  return true;
};

exports.always = always;

var never = function never(_value) {
  return false;
};

exports.never = never;

var isUndefined = function isUndefined(value) {
  return value === undefined;
};

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var isNil = function isNil(value) {
  return isUndefined(value) || isNull(value);
};

exports.isNil = isNil;

var isMoment = function isMoment(value) {
  return _moment.default.isMoment(value);
};

exports.isMoment = isMoment;

var isDate = function isDate(value) {
  return _moment.default.isDate(value);
};

exports.isDate = isDate;

var isDateLike = function isDateLike(value) {
  return isMoment(value) || isDate(value);
};

exports.isDateLike = isDateLike;