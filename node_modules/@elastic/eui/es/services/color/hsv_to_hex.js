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
import { hsvToRgb } from './hsv_to_rgb';
import { rgbToHex } from './rgb_to_hex';
export function hsvToHex(_ref) {
  var h = _ref.h,
      s = _ref.s,
      v = _ref.v;

  var _hsvToRgb = hsvToRgb({
    h: h,
    s: s,
    v: v
  }),
      r = _hsvToRgb.r,
      g = _hsvToRgb.g,
      b = _hsvToRgb.b;

  return rgbToHex("rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")"));
}