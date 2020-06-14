"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHorizontalRule = exports.MARGINS = exports.SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  full: 'euiHorizontalRule--full',
  half: 'euiHorizontalRule--half',
  quarter: 'euiHorizontalRule--quarter'
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;
var marginToClassNameMap = {
  none: null,
  xs: 'euiHorizontalRule--marginXSmall',
  s: 'euiHorizontalRule--marginSmall',
  m: 'euiHorizontalRule--marginMedium',
  l: 'euiHorizontalRule--marginLarge',
  xl: 'euiHorizontalRule--marginXLarge',
  xxl: 'euiHorizontalRule--marginXXLarge'
};
var MARGINS = Object.keys(marginToClassNameMap);
exports.MARGINS = MARGINS;

var EuiHorizontalRule = function EuiHorizontalRule(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'full' : _ref$size,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 'l' : _ref$margin,
      rest = _objectWithoutProperties(_ref, ["className", "size", "margin"]);

  var classes = (0, _classnames.default)('euiHorizontalRule', sizeToClassNameMap[size], marginToClassNameMap[margin], className);
  return _react.default.createElement("hr", _extends({
    className: classes
  }, rest));
};

exports.EuiHorizontalRule = EuiHorizontalRule;
EuiHorizontalRule.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Defines the width of the HR.
     */
  size: _propTypes.default.oneOf(["full", "half", "quarter"]),
  margin: _propTypes.default.oneOf(["none", "xs", "s", "m", "l", "xl", "xxl"])
};
EuiHorizontalRule.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHorizontalRule",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'full'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"full\"",
          "computed": false
        }, {
          "value": "\"half\"",
          "computed": false
        }, {
          "value": "\"quarter\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Defines the width of the HR."
    },
    "margin": {
      "defaultValue": {
        "value": "'l'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"none\"",
          "computed": false
        }, {
          "value": "\"xs\"",
          "computed": false
        }, {
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }, {
          "value": "\"xxl\"",
          "computed": false
        }]
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
    }
  }
};