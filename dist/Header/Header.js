"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _theme = _interopRequireDefault(require("../theme/theme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const drawerWidth = 180;
const AppBar = (0, _styles.styled)(_AppBar.default, {
  shouldForwardProp: prop => prop !== "open"
})(_ref => {
  let {
    theme,
    open,
    isMobile
  } = _ref;
  return _objectSpread(_objectSpread({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, open && !isMobile && {
    marginRight: drawerWidth,
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }), isMobile && {
    width: "100%"
  });
});
const Header = function Header() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    open: true,
    children: ''
  };
  const isMobile = (0, _useMediaQuery.default)(_theme.default.breakpoints.down("md"));
  return /*#__PURE__*/_react.default.createElement(AppBar, {
    position: "fixed"
    // sx={{
    //   width: { sm: `calc(100% - ${drawerWidth}px)` },
    //   ml: { sm: `${drawerWidth}px` },
    // }}
    ,
    className: "appBar",
    open: props.open,
    theme: _theme.default,
    isMobile: isMobile,
    style: {
      paddingRight: 0
    }
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, null, props.children));
};
var _default = Header;
exports.default = _default;