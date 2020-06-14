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
export var ENTER = 'Enter';
export var SPACE = ' ';
export var ESCAPE = 'Escape';
export var TAB = 'Tab';
export var BACKSPACE = 'Backspace';
export var F2 = 'F2';
export var ARROW_DOWN = 'ArrowDown';
export var ARROW_UP = 'ArrowUp';
export var ARROW_LEFT = 'ArrowLeft';
export var ARROW_RIGHT = 'ArrowRight';
export var PAGE_UP = 'PageUp';
export var PAGE_DOWN = 'PageDown';
export var END = 'End';
export var HOME = 'Home';
export var keys;

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
})(keys || (keys = {}));