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
import dateMath from '@elastic/datemath';
import { parseRelativeParts, toRelativeStringFromParts } from './relative_utils';
export var DATE_MODES = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  NOW: 'now'
};
export function getDateMode(value) {
  if (value === 'now') {
    return DATE_MODES.NOW;
  }

  if (value.includes('now')) {
    return DATE_MODES.RELATIVE;
  }

  return DATE_MODES.ABSOLUTE;
}
export function toAbsoluteString(value) {
  var roundUp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var valueAsMoment = dateMath.parse(value, {
    roundUp: roundUp
  });

  if (!valueAsMoment) {
    return value;
  }

  return valueAsMoment.toISOString();
}
export function toRelativeString(value) {
  return toRelativeStringFromParts(parseRelativeParts(value));
}