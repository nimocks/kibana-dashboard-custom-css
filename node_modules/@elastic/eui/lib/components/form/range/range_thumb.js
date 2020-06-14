"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeThumb = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiRangeThumb = function EuiRangeThumb(_ref) {
  var className = _ref.className,
      min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      disabled = _ref.disabled,
      showInput = _ref.showInput,
      showTicks = _ref.showTicks,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      tabIndex = _ref.tabIndex,
      rest = _objectWithoutProperties(_ref, ["className", "min", "max", "value", "disabled", "showInput", "showTicks", "onClick", "onMouseDown", "tabIndex"]);

  var classes = (0, _classnames.default)('euiRangeThumb', {
    'euiRangeThumb--hasTicks': showTicks
  }, className);
  var commonAttrs = {
    className: classes,
    role: 'slider',
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': Number(value),
    'aria-disabled': !!disabled,
    tabIndex: showInput || !!disabled ? -1 : tabIndex || 0
  };
  return onClick || onMouseDown ? _react.default.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseDown: onMouseDown,
    disabled: disabled
  }, commonAttrs, rest)) : _react.default.createElement("div", _extends({}, commonAttrs, rest));
};

exports.EuiRangeThumb = EuiRangeThumb;
EuiRangeThumb.propTypes = {
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),
  disabled: _propTypes.default.bool,
  showInput: _propTypes.default.bool,
  showTicks: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiRangeThumb.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiRangeThumb",
  "props": {
    "min": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "max": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "value": {
      "type": {
        "name": "union",
        "value": [{
          "name": "number"
        }, {
          "name": "string"
        }]
      },
      "required": false,
      "description": ""
    },
    "disabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "showInput": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "showTicks": {
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
    }
  }
};