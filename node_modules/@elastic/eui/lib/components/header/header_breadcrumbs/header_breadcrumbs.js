"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderBreadcrumbs = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _breadcrumbs = require("../../breadcrumbs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiHeaderBreadcrumbs = function EuiHeaderBreadcrumbs(_ref) {
  var className = _ref.className,
      breadcrumbs = _ref.breadcrumbs,
      rest = _objectWithoutProperties(_ref, ["className", "breadcrumbs"]);

  var classes = (0, _classnames.default)('euiHeaderBreadcrumbs', className);
  return _react.default.createElement(_breadcrumbs.EuiBreadcrumbs, _extends({
    max: 4,
    truncate: true,
    breadcrumbs: breadcrumbs,
    className: classes
  }, rest));
};

exports.EuiHeaderBreadcrumbs = EuiHeaderBreadcrumbs;
EuiHeaderBreadcrumbs.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Hides left most breadcrumbs as window gets smaller
     */
  responsive: _propTypes.default.bool,

  /**
     * Forces all breadcrumbs to single line and
     * truncates each breadcrumb to a particular width,
     * except for the last item
     */
  truncate: _propTypes.default.bool,

  /**
     * Condenses the inner items past the maximum set here
     * into a single ellipses item
     */
  max: _propTypes.default.number,

  /**
     * Allows the hidden breadcrumbs to be shown when
     * a `max` is set and the ellipsis is clicked in responsive mode.
     */
  showMaxPopover: _propTypes.default.bool,

  /**
     * The array of individual breadcrumbs, takes the following props.
     * `text` (node) (required): visible label of the breadcrumb,
     * `href` or `onClick`: provide only one (last breadcrumb will not apply either),
     * `truncate` (bool): Force a max-width on the breadcrumb text
     */
  breadcrumbs: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,
    text: _propTypes.default.node.isRequired,
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,
    truncate: _propTypes.default.bool
  }).isRequired).isRequired, _propTypes.default.arrayOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,
    text: _propTypes.default.node.isRequired,
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,
    truncate: _propTypes.default.bool
  }).isRequired).isRequired]).isRequired
};
EuiHeaderBreadcrumbs.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiHeaderBreadcrumbs",
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
    },
    "responsive": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.bool"
      },
      "required": false,
      "description": "Hides left most breadcrumbs as window gets smaller"
    },
    "truncate": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.bool"
      },
      "required": false,
      "description": "Forces all breadcrumbs to single line and\ntruncates each breadcrumb to a particular width,\nexcept for the last item"
    },
    "max": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.number"
      },
      "required": false,
      "description": "Condenses the inner items past the maximum set here\ninto a single ellipses item"
    },
    "showMaxPopover": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.bool"
      },
      "required": false,
      "description": "Allows the hidden breadcrumbs to be shown when\na `max` is set and the ellipsis is clicked in responsive mode."
    },
    "breadcrumbs": {
      "type": {
        "name": "union",
        "value": [{
          "name": "arrayOf",
          "value": {
            "name": "shape",
            "value": {
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              },
              "text": {
                "name": "node",
                "required": true
              },
              "href": {
                "name": "string",
                "required": false
              },
              "onClick": {
                "name": "func",
                "required": false
              },
              "truncate": {
                "name": "bool",
                "required": false
              }
            }
          }
        }, {
          "name": "arrayOf",
          "value": {
            "name": "shape",
            "value": {
              "className": {
                "name": "string",
                "required": false
              },
              "aria-label": {
                "name": "string",
                "required": false
              },
              "data-test-subj": {
                "name": "string",
                "required": false
              },
              "text": {
                "name": "node",
                "required": true
              },
              "href": {
                "name": "string",
                "required": false
              },
              "onClick": {
                "name": "func",
                "required": false
              },
              "truncate": {
                "name": "bool",
                "required": false
              }
            }
          }
        }]
      },
      "required": true,
      "description": "The array of individual breadcrumbs, takes the following props.\n`text` (node) (required): visible label of the breadcrumb,\n`href` or `onClick`: provide only one (last breadcrumb will not apply either),\n`truncate` (bool): Force a max-width on the breadcrumb text"
    }
  }
};