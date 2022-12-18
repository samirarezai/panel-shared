"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenuItem = void 0;
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
var _react = _interopRequireDefault(require("react"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _theme = _interopRequireDefault(require("../theme/theme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import {useLocation} from "react-router-dom";

const SubMenuItem = _ref => {
  let {
    menuItem,
    open,
    mobileOpen,
    onClick: _onClick,
    location
  } = _ref;
  // const location = useLocation();
  const isMobile = (0, _useMediaQuery.default)(_theme.default.breakpoints.down("md"));
  return menuItem.subNav && menuItem.subNav.map((subItem, index) => /*#__PURE__*/_react.default.createElement(_List.default, {
    className: "".concat(open || mobileOpen && isMobile ? "subItem" : "collapseSubItem", " ").concat((location === null || location === void 0 ? void 0 : location.pathname) && (location !== null && location !== void 0 && location.pathname.concat(location.search).startsWith(subItem.link) ? open || mobileOpen && isMobile ? "activeSubItem" : "activeCollapseSubItem" : null)),
    component: "div",
    key: "".concat(index),
    disablePadding: true
  }, /*#__PURE__*/_react.default.createElement(_ListItemButton.default, {
    sx: {
      pl: 4
    },
    onClick: () => _onClick(subItem, menuItem)
  }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    primary: subItem.title,
    className: "pr-4"
  }))));
};
exports.SubMenuItem = SubMenuItem;