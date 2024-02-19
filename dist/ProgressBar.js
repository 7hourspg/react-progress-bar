"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./ProgressBar.css");
var _star = require("./star.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProgressBar = function ProgressBar(_ref) {
  var steps = _ref.steps,
    icon = _ref.icon,
    currentStep = _ref.currentStep,
    height = _ref.height,
    completedColor = _ref.completedColor,
    incompleteColor = _ref.incompleteColor,
    stepContainerSize = _ref.stepContainerSize,
    stepContainerActiveColor = _ref.stepContainerActiveColor,
    stepContainerInactiveColor = _ref.stepContainerInactiveColor,
    stepCompleteTextColor = _ref.stepCompleteTextColor,
    stepInCompleteTextColor = _ref.stepInCompleteTextColor,
    stepFont = _ref.stepFont;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    progressWidth = _useState2[0],
    setProgressWidth = _useState2[1];
  (0, _react.useEffect)(function () {
    var newProgressWidth = 100 / (steps.length - 1) * currentStep;
    setProgressWidth(newProgressWidth);
  }, [currentStep, steps.length]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-relative custom-w-80 custom-flex custom-flex-col-reverse custom-gap-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-relative custom-w-95 custom-mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-absolute custom-rounded-lg custom-w-full custom-top-1-2 custom-transform custom--translate-y-1-2",
    style: {
      height: height,
      backgroundColor: incompleteColor
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-absolute custom-top-1-2 custom-transform custom--translate-y-1-2 custom-rounded-lg custom-transition-all custom-duration-300 custom-ease-in-out",
    style: {
      width: "".concat(progressWidth, "%"),
      height: height,
      backgroundColor: completedColor
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-flex custom-justify-between"
  }, steps.map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "custom-relative custom-flex custom-flex-col custom-items-center ".concat(index < currentStep ? "custom-text-green-500" : "custom-text-gray-400")
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-rounded-full custom-z-10 custom-flex custom-items-center custom-justify-center ".concat(index < currentStep + 1 ? "custom-bg-green-500" : "custom-bg-gray-300"),
      style: {
        width: stepContainerSize,
        height: stepContainerSize,
        backgroundColor: index < currentStep + 1 ? stepContainerActiveColor : stepContainerInactiveColor
      }
    }, icon && icon));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-flex custom-justify-between"
  }, steps.map(function (step, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "custom-font-medium custom-text-sm custom-text-center ".concat(index < currentStep + 1 ? "custom-text-green-500" : "custom-text-gray-400"),
      style: _objectSpread({
        color: index < currentStep + 1 ? stepCompleteTextColor : stepInCompleteTextColor
      }, stepFont)
    }, step);
  })));
};
ProgressBar.propTypes = {
  steps: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  currentStep: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number,
  completedColor: _propTypes["default"].string,
  incompleteColor: _propTypes["default"].string,
  icon: _propTypes["default"].element,
  stepContainerSize: _propTypes["default"].number,
  stepContainerActiveColor: _propTypes["default"].string,
  stepContainerInactiveColor: _propTypes["default"].string,
  stepCompleteTextColor: _propTypes["default"].string,
  stepInCompleteTextColor: _propTypes["default"].string,
  stepFont: _propTypes["default"].object
};
ProgressBar.defaultProps = {
  height: 6,
  completedColor: "green",
  incompleteColor: "gray",
  icon: /*#__PURE__*/_react["default"].createElement(_star.ReactComponent, {
    width: 16,
    color: "white"
  }),
  stepContainerSize: 24,
  stepContainerActiveColor: "green",
  stepContainerInactiveColor: "gray",
  stepCompleteTextColor: "green",
  stepInCompleteTextColor: "gray",
  stepFont: {
    fontFamily: "roboto",
    fontSize: "14px",
    fontBold: "bold"
  }
};
var _default = exports["default"] = ProgressBar;