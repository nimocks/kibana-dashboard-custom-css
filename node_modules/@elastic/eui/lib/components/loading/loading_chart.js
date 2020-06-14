"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiLoadingChart = exports.SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  m: 'euiLoadingChart--medium',
  l: 'euiLoadingChart--large',
  xl: 'euiLoadingChart--xLarge'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiLoadingChart = function EuiLoadingChart(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$mono = _ref.mono,
      mono = _ref$mono === void 0 ? false : _ref$mono,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["size", "mono", "className"]);

  var classes = (0, _classnames.default)('euiLoadingChart', {
    'euiLoadingChart--mono': mono
  }, className, sizeToClassNameMap[size]);
  return _react.default.createElement("span", _extends({
    className: classes
  }, rest), _react.default.createElement("span", {
    className: "euiLoadingChart__bar"
  }), _react.default.createElement("span", {
    className: "euiLoadingChart__bar"
  }), _react.default.createElement("span", {
    className: "euiLoadingChart__bar"
  }), _react.default.createElement("span", {
    className: "euiLoadingChart__bar"
  }));
};

exports.EuiLoadingChart = EuiLoadingChart;
EuiLoadingChart.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
         * Makes the loader animation black and white
         */
  mono: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["m", "l", "xl"])
};
EuiLoadingChart.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiLoadingChart",
  "props": {
    "size": {
      "defaultValue": {
        "value": "'m'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"m\"",
          "computed": false
        }, {
          "value": "\"l\"",
          "computed": false
        }, {
          "value": "\"xl\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "mono": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Makes the loader animation black and white"
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