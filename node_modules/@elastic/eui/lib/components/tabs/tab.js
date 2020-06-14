"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTab = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTab = function EuiTab(_ref) {
  var isSelected = _ref.isSelected,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      rest = _objectWithoutProperties(_ref, ["isSelected", "children", "className", "disabled", "href", "target", "rel"]);

  var classes = (0, _classnames.default)('euiTab', className, {
    'euiTab-isSelected': isSelected,
    'euiTab-isDisabled': disabled
  }); //  <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  //  this is a button and piggyback off its disabled styles.

  if (href && !disabled) {
    var secureRel = (0, _services.getSecureRelForTarget)({
      href: href,
      target: target,
      rel: rel
    });
    return _react.default.createElement("a", _extends({
      role: "tab",
      "aria-selected": !!isSelected,
      className: classes,
      href: href,
      target: target,
      rel: secureRel
    }, rest), _react.default.createElement("span", {
      className: "euiTab__content"
    }, children));
  }

  return _react.default.createElement("button", _extends({
    role: "tab",
    "aria-selected": !!isSelected,
    type: "button",
    className: classes,
    disabled: disabled
  }, rest), _react.default.createElement("span", {
    className: "euiTab__content"
  }, children));
};

exports.EuiTab = EuiTab;
EuiTab.propTypes = {
  isSelected: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
EuiTab.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTab",
  "props": {
    "isSelected": {
      "type": {
        "name": "bool"
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
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};