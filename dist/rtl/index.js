"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _jss = require("jss");
var _jssRtl = _interopRequireDefault(require("jss-rtl"));
var _styles = require("@mui/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Configure JSS
const jss = (0, _jss.create)({
  plugins: [...(0, _styles.jssPreset)().plugins, (0, _jssRtl.default)()]
});
function RTL(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.StylesProvider, {
    jss: jss
  }, props.children);
}
var _default = RTL;
exports.default = _default;