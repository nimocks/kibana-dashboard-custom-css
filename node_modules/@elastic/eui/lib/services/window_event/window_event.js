"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiWindowEvent = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EuiWindowEvent =
/*#__PURE__*/
function (_Component) {
  _inherits(EuiWindowEvent, _Component);

  function EuiWindowEvent() {
    _classCallCheck(this, EuiWindowEvent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EuiWindowEvent).apply(this, arguments));
  }

  _createClass(EuiWindowEvent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addEvent(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.event !== this.props.event || prevProps.handler !== this.props.handler) {
        this.removeEvent(prevProps);
        this.addEvent(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvent(this.props);
    }
  }, {
    key: "addEvent",
    value: function addEvent(_ref) {
      var event = _ref.event,
          handler = _ref.handler;
      window.addEventListener(event, handler);
    }
  }, {
    key: "removeEvent",
    value: function removeEvent(_ref2) {
      var event = _ref2.event,
          handler = _ref2.handler;
      window.removeEventListener(event, handler);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return EuiWindowEvent;
}(_react.Component);

exports.EuiWindowEvent = EuiWindowEvent;
EuiWindowEvent.propTypes = {
  event: _propTypes.default.any.isRequired,
  handler: _propTypes.default.func.isRequired
};
EuiWindowEvent.__docgenInfo = {
  "description": "",
  "methods": [{
    "name": "addEvent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{\n  event,\n  handler\n}",
      "type": null
    }],
    "returns": null
  }, {
    "name": "removeEvent",
    "docblock": null,
    "modifiers": [],
    "params": [{
      "name": "{\n  event,\n  handler\n}",
      "type": null
    }],
    "returns": null
  }],
  "displayName": "EuiWindowEvent",
  "props": {
    "event": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": ""
    },
    "handler": {
      "type": {
        "name": "func"
      },
      "required": true,
      "description": ""
    }
  }
};