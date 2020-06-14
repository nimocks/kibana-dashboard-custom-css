"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiText = exports.TEXT_SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _text_color = require("./text_color");

var _text_align = require("./text_align");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textSizeToClassNameMap = {
  xs: 'euiText--extraSmall',
  s: 'euiText--small',
  m: 'euiText--medium'
};
var TEXT_SIZES = (0, _common.keysOf)(textSizeToClassNameMap);
exports.TEXT_SIZES = TEXT_SIZES;

var EuiText = function EuiText(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      color = _ref.color,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      textAlign = _ref.textAlign,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["size", "color", "grow", "textAlign", "children", "className"]);

  var classes = (0, _classnames.default)('euiText', textSizeToClassNameMap[size], className, {
    'euiText--constrainedWidth': !grow
  });
  var optionallyAlteredText;

  if (color) {
    optionallyAlteredText = _react.default.createElement(_text_color.EuiTextColor, {
      color: color,
      component: "div"
    }, children);
  }

  if (textAlign) {
    optionallyAlteredText = _react.default.createElement(_text_align.EuiTextAlign, {
      textAlign: textAlign
    }, optionallyAlteredText || children);
  }

  return _react.default.createElement("div", _extends({
    className: classes
  }, rest), optionallyAlteredText || children);
};

exports.EuiText = EuiText;
EuiText.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  textAlign: _propTypes.default.oneOf(["left", "right", "center"]),
  size: _propTypes.default.oneOf(["xs", "s", "m"]),
  color: _propTypes.default.oneOf(["default", "subdued", "secondary", "accent", "danger", "warning", "ghost"]),
  grow: _propTypes.default.bool
};
EuiText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiText",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"xs\"",
          "computed": false
        }, {
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
    "grow": {
      "defaultValue": {
        "value": "true",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
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
    },
    "textAlign": {
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "color": {
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
    }
  }
};