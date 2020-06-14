"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableSortMobileItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _context_menu = require("../../context_menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiTableSortMobileItem = function EuiTableSortMobileItem(_ref) {
  var children = _ref.children,
      onSort = _ref.onSort,
      isSorted = _ref.isSorted,
      isSortAscending = _ref.isSortAscending,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      rest = _objectWithoutProperties(_ref, ["children", "onSort", "isSorted", "isSortAscending", "className", "ariaLabel"]);

  var sortIcon = 'empty';

  if (isSorted) {
    sortIcon = isSortAscending ? 'sortUp' : 'sortDown';
  }

  var buttonClasses = (0, _classnames.default)('euiTableSortMobileItem', className, {
    'euiTableSortMobileItem-isSorted': isSorted
  });
  var columnTitle = ariaLabel ? ariaLabel : children;
  var statefulAriaLabel = "Sort ".concat(columnTitle, " ").concat(isSortAscending ? 'descending' : 'ascending');
  return _react.default.createElement(_context_menu.EuiContextMenuItem, _extends({
    className: buttonClasses,
    icon: sortIcon,
    onClick: onSort,
    "aria-label": statefulAriaLabel
  }, rest), children);
};

exports.EuiTableSortMobileItem = EuiTableSortMobileItem;
EuiTableSortMobileItem.propTypes = {
  /**
     * Callback to know when an item has been clicked
     */
  onSort: _propTypes.default.func,

  /**
     * Indicates current option is the sorted on column
     */
  isSorted: _propTypes.default.bool,

  /**
     * Indicates which direction the current column is sorted on
     */
  isSortAscending: _propTypes.default.bool,
  ariaLabel: _propTypes.default.string,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};
EuiTableSortMobileItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiTableSortMobileItem",
  "props": {
    "onSort": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": "Callback to know when an item has been clicked"
    },
    "isSorted": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates current option is the sorted on column"
    },
    "isSortAscending": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Indicates which direction the current column is sorted on"
    },
    "ariaLabel": {
      "type": {
        "name": "string"
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