"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiProgress = exports.POSITIONS = exports.COLORS = exports.SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _predicate = require("../../services/predicate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  xs: 'euiProgress--xs',
  s: 'euiProgress--s',
  m: 'euiProgress--m',
  l: 'euiProgress--l'
};
var SIZES = Object.keys(sizeToClassNameMap);
exports.SIZES = SIZES;
var colorToClassNameMap = {
  primary: 'euiProgress--primary',
  secondary: 'euiProgress--secondary',
  danger: 'euiProgress--danger',
  subdued: 'euiProgress--subdued',
  accent: 'euiProgress--accent'
};
var COLORS = Object.keys(colorToClassNameMap);
exports.COLORS = COLORS;
var positionsToClassNameMap = {
  fixed: 'euiProgress--fixed',
  absolute: 'euiProgress--absolute',
  static: ''
};
var POSITIONS = Object.keys(positionsToClassNameMap);
exports.POSITIONS = POSITIONS;

var EuiProgress = function EuiProgress(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'static' : _ref$position,
      max = _ref.max,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["className", "color", "size", "position", "max", "value"]);

  var determinate = !(0, _predicate.isNil)(max);
  var classes = (0, _classnames.default)('euiProgress', {
    'euiProgress--indeterminate': !determinate,
    'euiProgress--native': determinate
  }, sizeToClassNameMap[size], colorToClassNameMap[color], positionsToClassNameMap[position], className); // Because of a Firefox animation issue, indeterminate progress needs to not use <progress />.
  // See https://css-tricks.com/html5-progress-element/

  if (determinate) {
    return _react.default.createElement("progress", _extends({
      className: classes,
      max: max,
      value: value
    }, rest));
  } else {
    return _react.default.createElement("div", _extends({
      className: classes
    }, rest));
  }
};

exports.EuiProgress = EuiProgress;
EuiProgress.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  size: _propTypes.default.oneOf(["xs", "s", "m", "l"]),
  color: _propTypes.default.oneOf(["primary", "secondary", "danger", "subdued", "accent"]),
  position: _propTypes.default.oneOf(["fixed", "absolute", "static"]),
  max: _propTypes.default.number
};
EuiProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiProgress",
  "props": {
    "color": {
      "defaultValue": {
        "value": "'secondary'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"primary\"",
          "computed": false
        }, {
          "value": "\"secondary\"",
          "computed": false
        }, {
          "value": "\"danger\"",
          "computed": false
        }, {
          "value": "\"subdued\"",
          "computed": false
        }, {
          "value": "\"accent\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
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
        }, {
          "value": "\"l\"",
          "computed": false
        }]
      },
      "required": false,
      "description": ""
    },
    "position": {
      "defaultValue": {
        "value": "'static'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"fixed\"",
          "computed": false
        }, {
          "value": "\"absolute\"",
          "computed": false
        }, {
          "value": "\"static\"",
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
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    }
  }
};