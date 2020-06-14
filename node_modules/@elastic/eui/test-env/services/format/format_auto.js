"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAuto = void 0;

var _predicate = require("../predicate");

var _format_boolean = require("./format_boolean");

var _format_date = require("./format_date");

var _format_number = require("./format_number");

var _format_text = require("./format_text");

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
var formatAuto = function formatAuto(value) {
  if ((0, _predicate.isNil)(value) || (0, _predicate.isNaN)(value)) {
    return '';
  }

  if ((0, _predicate.isString)(value)) {
    return (0, _format_text.formatText)(value);
  }

  if ((0, _predicate.isDate)(value)) {
    return (0, _format_date.formatDate)(value);
  }

  if ((0, _predicate.isBoolean)(value)) {
    return (0, _format_boolean.formatBoolean)(value);
  }

  if ((0, _predicate.isNumber)(value)) {
    return (0, _format_number.formatNumber)(value);
  }

  if ((0, _predicate.isArray)(value)) {
    return Array.isArray(value) ? value.map(function (item) {
      return formatAuto(item);
    }).join(', ') : formatAuto(value);
  } // TODO not sure if we want that.. the (+) is that we show something, the (-) is that it's very technical


  return JSON.stringify(value);
};

exports.formatAuto = formatAuto;