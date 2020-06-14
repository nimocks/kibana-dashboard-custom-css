"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNotificationBadge = exports.SIZES = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassMap = {
  accent: null,
  subdued: 'euiNotificationBadge--subdued'
};
var COLORS = (0, _common.keysOf)(colorToClassMap);
exports.COLORS = COLORS;
var sizeToClassNameMap = {
  s: null,
  m: 'euiNotificationBadge--medium'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiNotificationBadge = function EuiNotificationBadge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 's' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'accent' : _ref$color,
      rest = _objectWithoutProperties(_ref, ["children", "className", "size", "color"]);

  var classes = (0, _classnames.default)('euiNotificationBadge', sizeToClassNameMap[size], colorToClassMap[color], className);
  return _react.default.createElement("span", _extends({
    className: classes
  }, rest), children);
};

exports.EuiNotificationBadge = EuiNotificationBadge;
EuiNotificationBadge.propTypes = {
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.oneOf(["s", "m"]),
  color: _propTypes.default.oneOf(["accent", "subdued"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiNotificationBadge.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiNotificationBadge",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "color": {
      "defaultValue": {
        "value": "'accent'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"accent\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": true,
      "description": ""
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