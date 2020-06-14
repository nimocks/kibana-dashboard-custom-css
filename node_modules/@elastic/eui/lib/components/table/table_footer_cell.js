"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableFooterCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableFooterCell = function EuiTableFooterCell(_ref) {
  var children = _ref.children,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? _services.LEFT_ALIGNMENT : _ref$align,
      className = _ref.className,
      width = _ref.width,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["children", "align", "className", "width", "style"]);

  var classes = (0, _classnames.default)('euiTableFooterCell', className);
  var contentClasses = (0, _classnames.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });
  var styleObj = (0, _utils.resolveWidthAsStyle)(style, width);
  return _react.default.createElement("td", _extends({
    className: classes,
    style: styleObj
  }, rest), _react.default.createElement("div", {
    className: contentClasses
  }, _react.default.createElement("span", {
    className: "euiTableCellContent__text"
  }, children)));
};

exports.EuiTableFooterCell = EuiTableFooterCell;
EuiTableFooterCell.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  align: _propTypes.default.oneOf(["left", "right", "center"]),
  width: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired])
};
EuiTableFooterCell.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableFooterCell",
  "props": {
    "align": {
      "defaultValue": {
        "value": "LEFT_ALIGNMENT",
        "computed": true
      },
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.oneOf([\"left\", \"right\", \"center\"])"
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
    "width": {
      "type": {
        "name": "union",
        "value": [{
          "name": "string"
        }, {
          "name": "number"
        }]
      },
      "required": false,
      "description": ""
    }
  }
};