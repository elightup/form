function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Input from "./Input";

const Text = props => /*#__PURE__*/React.createElement(Input, _extends({
  type: "text"
}, props));

export default Text;