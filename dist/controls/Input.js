function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Control from "./Control";

const Input = ({
  type = 'text',
  id = '',
  name = '',
  value = '',
  placeholder = '',
  onChange,
  ...rest
}) => /*#__PURE__*/React.createElement(Control, _extends({
  id: id
}, rest), /*#__PURE__*/React.createElement("input", {
  type: type,
  id: id,
  name: name,
  defaultValue: value,
  placeholder: placeholder,
  onChange: onChange
}));

export default Input;