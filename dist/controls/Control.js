function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { RawHTML } from "@wordpress/element";
import clsx from "clsx";
import Tooltip from "../components/Tooltip";

const Control = ({
  label = '',
  required = false,
  tooltip = '',
  description = '',
  id = '',
  className = '',
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("div", _extends({
  className: clsx('ef-control', className)
}, rest), label && /*#__PURE__*/React.createElement("label", {
  className: "ef-control__label",
  htmlFor: id
}, label.includes('<') ? /*#__PURE__*/React.createElement(RawHTML, null, label) : label, required && /*#__PURE__*/React.createElement("span", {
  className: "ef-control__required"
}, "*"), tooltip && /*#__PURE__*/React.createElement(Tooltip, {
  content: tooltip
})), /*#__PURE__*/React.createElement("div", {
  className: "ef-control__input"
}, children, description && /*#__PURE__*/React.createElement(RawHTML, {
  className: "ef-control__description"
}, description)));

export default Control;