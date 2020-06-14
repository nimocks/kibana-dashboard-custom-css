"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFormLabel = function EuiFormLabel(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'label' : _ref$type,
      isFocused = _ref.isFocused,
      isInvalid = _ref.isInvalid,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["type", "isFocused", "isInvalid", "children", "className"]);

  var classes = (0, _classnames.default)('euiFormLabel', className, {
    'euiFormLabel-isFocused': isFocused,
    'euiFormLabel-isInvalid': isInvalid
  });

  if (type === 'legend') {
    return _react.default.createElement("legend", _extends({
      className: classes
    }, rest), children);
  } else {
    return _react.default.createElement("label", _extends({
      className: classes
    }, rest), children);
  }
};

exports.EuiFormLabel = EuiFormLabel;
EuiFormLabel.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Default type is a `label` but can be changed to a `legend`
     * if using inside a `fieldset`.
     */

  /**
     * Default type is a `label` but can be changed to a `legend`
     * if using inside a `fieldset`.
     */
  type: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["label"]), _propTypes.default.oneOf(["label", "legend"])]), _propTypes.default.oneOfType([_propTypes.default.oneOf(["legend"]).isRequired, _propTypes.default.oneOf(["label", "legend"])])]),
  isFocused: _propTypes.default.bool,
  isInvalid: _propTypes.default.bool
};
EuiFormLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFormLabel",
  "props": {
    "type": {
      "defaultValue": {
        "value": "'label'",
        "computed": false
      },
      "type": {
        "name": "union",
        "value": [{
          "name": "union",
          "value": [{
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }]
          }, {
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }, {
              "value": "\"legend\"",
              "computed": false
            }]
          }]
        }, {
          "name": "union",
          "value": [{
            "name": "enum",
            "value": [{
              "value": "\"legend\"",
              "computed": false
            }]
          }, {
            "name": "enum",
            "value": [{
              "value": "\"label\"",
              "computed": false
            }, {
              "value": "\"legend\"",
              "computed": false
            }]
          }]
        }]
      },
      "required": false,
      "description": "Default type is a `label` but can be changed to a `legend`\nif using inside a `fieldset`."
    },
    "className": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "isFocused": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "isInvalid": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};