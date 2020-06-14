"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFormControlLayoutClearButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../../icon");

var _i18n = require("../../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFormControlLayoutClearButton = function EuiFormControlLayoutClearButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "onClick"]);

  var classes = (0, _classnames.default)('euiFormControlLayoutClearButton', className);
  return _react.default.createElement(_i18n.EuiI18n, {
    token: "euiFormControlLayoutClearButton.label",
    default: "Clear input"
  }, function (label) {
    return _react.default.createElement("button", _extends({
      type: "button",
      className: classes,
      onClick: onClick,
      "aria-label": label
    }, rest), _react.default.createElement(_icon.EuiIcon, {
      className: "euiFormControlLayoutClearButton__icon",
      type: "cross"
    }));
  });
};

exports.EuiFormControlLayoutClearButton = EuiFormControlLayoutClearButton;
EuiFormControlLayoutClearButton.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiFormControlLayoutClearButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiFormControlLayoutClearButton",
  "props": {
    "className": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "aria-label": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "data-test-subj": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    }
  }
};