import { Dashicon, Tooltip as T } from "@wordpress/components";

const Tooltip = ({
  content
}) => /*#__PURE__*/React.createElement(T, {
  text: content
}, /*#__PURE__*/React.createElement("span", {
  className: "ef-control__tooltip"
}, /*#__PURE__*/React.createElement(Dashicon, {
  icon: "editor-help"
})));

export default Tooltip;