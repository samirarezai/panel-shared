"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _theme = _interopRequireDefault(require("../theme/theme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const drawerWidth = "200px";
const styles = {
  children: {
    textAlign: "right",
    direction: "rtl",
    height: "100%",
    paddingBottom: "64px"
  }
};
const Main = _ref => {
  let {
    open,
    children,
    className = ''
  } = _ref;
  const isMobile = (0, _useMediaQuery.default)(_theme.default.breakpoints.down("md"));
  return /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "main",
    sx: {
      flexGrow: 1,
      p: '1.6rem 1rem',
      width: !isMobile && open ? "calc(100% - ".concat(drawerWidth, ")") : isMobile ? "100%" : "calc(100% - 48px)"
    },
    style: styles.children,
    className: className
  }, children);
};
var _default = Main;
exports.default = _default;