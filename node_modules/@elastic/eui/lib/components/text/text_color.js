"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTextColor = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorsToClassNameMap = {
  default: 'euiTextColor--default',
  subdued: 'euiTextColor--subdued',
  secondary: 'euiTextColor--secondary',
  accent: 'euiTextColor--accent',
  danger: 'euiTextColor--danger',
  warning: 'euiTextColor--warning',
  ghost: 'euiTextColor--ghost'
};
var COLORS = (0, _common.keysOf)(colorsToClassNameMap);
exports.COLORS = COLORS;

var EuiTextColor = function EuiTextColor(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      className = _ref.className,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'span' : _ref$component,
      rest = _objectWithoutProperties(_ref, ["children", "color", "className", "component"]);

  var classes = (0, _classnames.default)('euiTextColor', colorsToClassNameMap[color], className);
  return _react.default.createElement(Component, _extends({
    className: classes
  }, rest), children);
};

exports.EuiTextColor = EuiTextColor;
EuiTextColor.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  color: _propTypes.default.oneOf(["default", "subdued", "secondary", "accent", "danger", "warning", "ghost"]),

  /**
       * Determines the root element
       */
  component: _propTypes.default.oneOf(["div", "span"])
};
EuiTextColor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTextColor",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'default'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"default\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"warning\"",
          "computed": false
        }, {
          "value": "\"ghost\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "component": {
      "defaultValue": {
        "value": "'span'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"div\"",
          "computed": false
        }, {
          "value": "\"span\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Determines the root element"
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
    }
  }
};