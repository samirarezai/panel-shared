"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _index = _interopRequireDefault(require("../rtl/index"));
var _exwino = _interopRequireDefault(require("../FontTypography/exwino"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const drawerWidth = 200;
const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});
const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  overflow: "visible",
  // width: `calc(${theme.spacing(5)} + 1px)`,
  width: "48px !important",
  [theme.breakpoints.up("sm")]: {
    width: "calc(".concat(theme.spacing(5), " + 1px)")
  }
});
const Drawer = (0, _styles.styled)(_Drawer.default, {
  shouldForwardProp: prop => prop !== "open"
})(_ref => {
  let {
    theme,
    open
  } = _ref;
  return _objectSpread(_objectSpread({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  }, open && _objectSpread(_objectSpread({}, openedMixin(theme)), {}, {
    "& .MuiDrawer-paper": openedMixin(theme)
  })), !open && _objectSpread(_objectSpread({}, closedMixin(theme)), {}, {
    "& .MuiDrawer-paper": closedMixin(theme)
  }));
});
const DrawerHeader = (0, _styles.styled)("div")(_ref2 => {
  let {
    theme
  } = _ref2;
  return _objectSpread({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    backgroundColor: "#7e94ff",
    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
  }, theme.mixins.toolbar);
});
const Sidebar = function Sidebar() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    open: true,
    children: '',
    ROOT: '',
    SidebarData: [],
    renderItemsDrawer: '',
    company_logo_white: '',
    company_logo_white_small: '',
    backIcon: '',
    onClick: () => {}
  };
  // const history = useHistory();
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _useMediaQuery.default)(theme.breakpoints.down("md"));
  // const renderItemsDrawer = React.useMemo(() => {
  //     if(props.SidebarData?.length >0)
  //     return props.SidebarData.map((item, index) => {
  //         // if (!isMobile && item.title !== "تیکت")
  //         if (!isMobile)
  //             return (
  //                 <MenuItem
  //                     menuItem={item}
  //                     open={props.open}
  //                     mobileOpen={props.mobileOpen}
  //                     key={index}
  //                 />
  //             );
  //         else if (isMobile && item.title === "تیکت")
  //             return (
  //                 <MenuItem
  //                     menuItem={item}
  //                     open={props.open}
  //                     mobileOpen={props.mobileOpen}
  //                     key={index}
  //                 />
  //             );
  //         else if (isMobile)
  //             return (
  //                 <MenuItem
  //                     menuItem={item}
  //                     open={props.open}
  //                     mobileOpen={props.mobileOpen}
  //                     key={index}
  //                 />
  //             );
  //
  //     });
  //     return '';
  // }, [props.SidebarData, props.open, props.mobileOpen, isMobile]);

  // const container = window ? (window !== undefined ? () => window.document.body : undefined) : '';

  return /*#__PURE__*/_react.default.createElement(_index.default, null, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), isMobile ? /*#__PURE__*/_react.default.createElement(_Drawer.default
  // container={container}
  , {
    variant: "temporary",
    open: props.mobileOpen,
    onClose: () => props.setMobileOpen(false),
    anchor: "right",
    className: "sidebar",
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    },

    style: {
      width: drawerWidth
    }
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    className: "toolbarLogo"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "logo",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: props.company_logo_white,
    className: "w-75"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "navDashboard ".concat(props.mobileOpen ? "overflowY" : "")
  }, props.renderItemsDrawer)) : /*#__PURE__*/_react.default.createElement(Drawer, {
    variant: "permanent",
    className: "sidebar",
    anchor: "right",
    open: props.open && !isMobile,
    theme: theme,
    sx: {
      width: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement(DrawerHeader, {
    className: "toolbarLogo",
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    className: "logo",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: props.open ? props.company_logo_white : props.company_logo_white_small,
    className: "w-75"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "drawer-design",
    dir: "ltr",
    style: {
      overflowY: props.open ? 'auto' : "visible"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navDashboard ".concat(props.open ? "overflowY" : "")
  }, props.renderItemsDrawer)), /*#__PURE__*/_react.default.createElement("button", {
    className: "btnDrawer ".concat(!props.open ? "closeBtnDrawer" : "")
    // style={{
    //     display: {xs: "none !important", md: "block !important"},
    // }}
    ,
    onClick: () => props.setOpen(state => !state),
    style: {
      backgroundImage: "url(".concat(props.backIcon, ")")
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "button-all"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-btn"
  }, /*#__PURE__*/_react.default.createElement(_exwino.default, {
    icon: "close-circle",
    classes: "color-icon-default"
  }))))));
};
var _default = Sidebar;
exports.default = _default;