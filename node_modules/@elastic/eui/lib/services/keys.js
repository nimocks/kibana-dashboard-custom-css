"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = exports.HOME = exports.END = exports.PAGE_DOWN = exports.PAGE_UP = exports.ARROW_RIGHT = exports.ARROW_LEFT = exports.ARROW_UP = exports.ARROW_DOWN = exports.F2 = exports.BACKSPACE = exports.TAB = exports.ESCAPE = exports.SPACE = exports.ENTER = void 0;

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
var ENTER = 'Enter';
exports.ENTER = ENTER;
var SPACE = ' ';
exports.SPACE = SPACE;
var ESCAPE = 'Escape';
exports.ESCAPE = ESCAPE;
var TAB = 'Tab';
exports.TAB = TAB;
var BACKSPACE = 'Backspace';
exports.BACKSPACE = BACKSPACE;
var F2 = 'F2';
exports.F2 = F2;
var ARROW_DOWN = 'ArrowDown';
exports.ARROW_DOWN = ARROW_DOWN;
var ARROW_UP = 'ArrowUp';
exports.ARROW_UP = ARROW_UP;
var ARROW_LEFT = 'ArrowLeft';
exports.ARROW_LEFT = ARROW_LEFT;
var ARROW_RIGHT = 'ArrowRight';
exports.ARROW_RIGHT = ARROW_RIGHT;
var PAGE_UP = 'PageUp';
exports.PAGE_UP = PAGE_UP;
var PAGE_DOWN = 'PageDown';
exports.PAGE_DOWN = PAGE_DOWN;
var END = 'End';
exports.END = END;
var HOME = 'Home';
exports.HOME = HOME;
var keys;
exports.keys = keys;

(function (keys) {
  keys["ENTER"] = "Enter";
  keys["SPACE"] = " ";
  keys["ESCAPE"] = "Escape";
  keys["TAB"] = "Tab";
  keys["BACKSPACE"] = "Backspace";
  keys["F2"] = "F2";
  keys["ARROW_DOWN"] = "ArrowDown";
  keys["ARROW_UP"] = "ArrowUp";
  keys["ARROW_LEFT"] = "ArrowLeft";
  keys["ARROW_RIGHT"] = "ArrowRight";
  keys["PAGE_UP"] = "PageUp";
  keys["PAGE_DOWN"] = "PageDown";
  keys["END"] = "End";
  keys["HOME"] = "Home";
})(keys || (exports.keys = keys = {}));