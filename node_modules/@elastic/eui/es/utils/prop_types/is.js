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
import { isNil } from '../../services/predicate';
export var is = function is(expectedValue) {
  var validator = function validator(props, propName, componentName) {
    var compName = componentName || 'ANONYMOUS';
    var value = props[propName];

    if (value !== expectedValue) {
      return new Error("[".concat(propName, "] property in [").concat(compName, "] component is expected to equal [").concat(expectedValue, "] but\n         [").concat(value, "] was provided instead."));
    }

    return null;
  };

  validator.isRequired = function (props, propName, componentName) {
    var compName = componentName || 'ANONYMOUS';
    var value = props[propName];

    if (isNil(value)) {
      return new Error("[".concat(propName, "] property in [").concat(compName, "] component is required but seems to be missing"));
    }

    return validator(props, propName, componentName);
  };

  return validator;
};