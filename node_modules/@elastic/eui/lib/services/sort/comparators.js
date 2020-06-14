"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comparators = void 0;

var _sort_direction = require("./sort_direction");

var _objects = require("../objects");

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
var Comparators = Object.freeze({
  default: function _default() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _sort_direction.SortDirection.ASC;
    return function (v1, v2) {
      // JavaScript's comparison of null/undefined (and some others not handled here) values always returns `false`
      // (https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison)
      // resulting in cases where v1 < v2 and v1 > v2 are both false.
      // This leads to unpredictable sorting results in multiple JS engine sorting algorithms
      // which causes unpredictable user experiences.
      // Instead:
      // * 1. push undefined/null values to the end of the sorted list, _regardless of sort direction_
      //    (non-sortable values always appear at the end, and sortable values are sorted at the top)
      // * 2. report undefined/null values as equal
      // * 3. when both values are comparable they are sorted normally
      var v1IsComparable = v1 != null;
      var v2IsComparable = v2 != null; // * 1.

      if (v1IsComparable && !v2IsComparable) {
        return -1;
      }

      if (!v1IsComparable && v2IsComparable) {
        return 1;
      } // * 2.


      if (!v1IsComparable && !v2IsComparable) {
        return 0;
      } // * 3.


      if (v1 === v2) {
        return 0;
      }

      var result = v1 > v2 ? 1 : -1;
      return _sort_direction.SortDirection.isAsc(direction) ? result : -1 * result;
    };
  },
  reverse: function reverse(comparator) {
    return function (v1, v2) {
      return comparator(v2, v1);
    };
  },
  value: function (_value) {
    function value(_x, _x2) {
      return _value.apply(this, arguments);
    }

    value.toString = function () {
      return _value.toString();
    };

    return value;
  }(function (valueCallback, comparator) {
    if (!comparator) {
      comparator = this.default(_sort_direction.SortDirection.ASC);
    }

    return function (o1, o2) {
      return comparator(valueCallback(o1), valueCallback(o2));
    };
  }),
  property: function property(prop, comparator) {
    return this.value(function (value) {
      return (0, _objects.get)(value, prop);
    }, comparator);
  }
});
exports.Comparators = Comparators;