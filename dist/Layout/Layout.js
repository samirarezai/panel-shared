"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Layout = props => {
  const styles = {
    container: {
      backgroundColor: "#0A1930",
      color: "#fff",
      width: "100%",
      margin: "auto",
      minHeight: "100vh"
    },
    children: {
      textAlign: "right",
      direction: "rtl",
      height: "100%",
      paddingBottom: "64px"
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: styles.container
  }, props.children);
};
var _default = Layout;
exports.default = _default;