function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Control from "./Control";

const Select = ({
  id = '',
  name = '',
  value = '',
  placeholder = '-',
  options,
  onChange,
  ...rest
}) => /*#__PURE__*/React.createElement(Control, _extends({
  id: id
}, rest), /*#__PURE__*/React.createElement("select", {
  id: id,
  name: name,
  defaultValue: value,
  onChange: onChange
}, /*#__PURE__*/React.createElement("option", {
  value: ""
}, placeholder), Array.isArray(options) ? options.map(item => item.options ? /*#__PURE__*/React.createElement("optgroup", {
  key: item.label,
  label: item.label
}, Array.isArray(item.options) ? item.options.map(option => /*#__PURE__*/React.createElement("option", {
  key: option.value,
  value: option.value
}, option.label)) : Object.entries(item.options).map(([value, label]) => /*#__PURE__*/React.createElement("option", {
  key: value,
  value: value
}, label))) : /*#__PURE__*/React.createElement("option", {
  key: item.value,
  value: item.value
}, item.label)) : Object.entries(options).map(([value, label]) => /*#__PURE__*/React.createElement("option", {
  key: value,
  value: value
}, label))));

export default Select;