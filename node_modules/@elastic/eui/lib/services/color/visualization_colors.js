"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_VISUALIZATION_COLOR = exports.VISUALIZATION_COLORS = void 0;

var _eui_palettes = require("../../services/color/eui_palettes");

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
// Array of color-blind safe colors to use in visualizations or other
// spots that need a large range of varied, qualitative colors.
var VISUALIZATION_COLORS = (0, _eui_palettes.euiPaletteColorBlind)();
exports.VISUALIZATION_COLORS = VISUALIZATION_COLORS;
var DEFAULT_VISUALIZATION_COLOR = VISUALIZATION_COLORS[1];
exports.DEFAULT_VISUALIZATION_COLOR = DEFAULT_VISUALIZATION_COLOR;