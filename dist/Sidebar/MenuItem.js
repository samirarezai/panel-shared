"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _Collapse = _interopRequireDefault(require("@mui/material/Collapse"));
var _KeyboardArrowUpRounded = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowUpRounded"));
var _KeyboardArrowDownRounded = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDownRounded"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _SubMenuItem = require("./SubMenuItem");
var _material = require("@mui/material");
var _exwino = _interopRequireDefault(require("./../FontTypography/exwino"));
var _theme = _interopRequireDefault(require("../theme/theme"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MenuItem = _ref => {
  let {
    selectedItem,
    menuItem,
    onClick,
    open,
    mobileOpen,
    collapseOpenBoolean,
    onClickSubMenu,
    location
  } = _ref;
  const isMobile = (0, _useMediaQuery.default)(_theme.default.breakpoints.down("md"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ListItemButton.default, {
    dir: "rtl",
    style: {
      position: "relative"
    }
    // id={location.pathname.startsWith(menuItem.link) ? "active" : ""}
    ,
    className: "".concat(selectedItem === menuItem.elementNo ? menuItem.subNav && menuItem.subNav.length > 0 ? "activeItem" : "activeItem activeItem_none_submenu" : "disActiveItem"),
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement(_ListItemIcon.default, null, selectedItem === menuItem.elementNo ?
  /*#__PURE__*/
  // <img id="icon" src={menuItem.activeIcon} width={24} />
  _react.default.createElement(_exwino.default, {
    icon: menuItem.icon,
    classes: "text-primary"
  }) : /*#__PURE__*/_react.default.createElement(_exwino.default, {
    icon: menuItem.icon,
    classes: "color-icon-default ".concat(menuItem.title === "تیکت" ? "disActiveEmailIcon" : "")
  })
  // <img
  //   id="icon"
  //   src={menuItem.icon}
  //   className={`${
  //     menuItem.title === "تیکت" ? "disActiveEmailIcon" : ""
  //   }`}
  //   width={24}
  // />
  ), /*#__PURE__*/_react.default.createElement(_ListItemText.default, {
    className: open || mobileOpen && isMobile ? "display-block" : "display-none",
    primary: menuItem.title
  }), menuItem.subNav && menuItem.subNav.length ? collapseOpenBoolean ? /*#__PURE__*/_react.default.createElement(_KeyboardArrowUpRounded.default, {
    className: "subItem-icon-open\n                ".concat(open || mobileOpen && isMobile ? "display-block" : "display-none")
  }) : /*#__PURE__*/_react.default.createElement(_KeyboardArrowDownRounded.default, {
    className: "subItem-icon-open\n                ".concat(open || mobileOpen && isMobile ? "display-block" : "display-none")
  }) : menuItem.subNav && menuItem.subNav.length === 0 && selectedItem !== menuItem.elementNo ? /*#__PURE__*/_react.default.createElement(_KeyboardArrowDownRounded.default, {
    className: "subItem-icon-open\n              ".concat(open || mobileOpen && isMobile ? "display-block" : "display-none")
  }) : null, !open && menuItem.subNav && menuItem.subNav.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popover ".concat(open ? "display-none" : "hoverPopover")
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      padding: 12,
      margin: 0
    }
  }, menuItem.title), /*#__PURE__*/_react.default.createElement(_material.Divider, null), /*#__PURE__*/_react.default.createElement(_SubMenuItem.SubMenuItem, {
    open: open,
    mobileOpen: mobileOpen,
    menuItem: menuItem,
    location: location
  })) : !open ? /*#__PURE__*/_react.default.createElement("div", {
    className: "popover ".concat(open ? "display-none" : "hoverPopover")
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      padding: 12,
      margin: 0
    }
  }, menuItem.title)) : null), (open || mobileOpen && isMobile) &&
  // selectedItem === menuItem.elementNo &&
  collapseOpenBoolean && menuItem.subNav && menuItem.subNav.length && /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    className: open || mobileOpen && isMobile ? "display-block" : "display-none",
    in: (open || mobileOpen && isMobile) &&
    // selectedItem === menuItem.elementNo &&
    collapseOpenBoolean && menuItem.subNav && menuItem.subNav.length,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react.default.createElement(_SubMenuItem.SubMenuItem, {
    open: open,
    mobileOpen: mobileOpen,
    menuItem: menuItem,
    onClick: onClickSubMenu,
    location: location
  })));
};
var _default = MenuItem;
exports.default = _default;