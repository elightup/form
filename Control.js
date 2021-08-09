import { RawHTML } from "@wordpress/element";
import classNames from "classnames";
import Tooltip from "./components/Tooltip";

const Control = ( {
	label,
	required = false,
	tooltip = '',
	description = '',
	id = '',
	className = '',
	children,
	...rest
} ) => (
	<div className={ classNames( 'ef-control', className ) } { ...rest }>
		{
			label &&
			<label className="ef-control__label" htmlFor={ id }>
				{ label.includes( '<' ) ? <RawHTML>{ label }</RawHTML> : label }
				{ required && <span className="ef-control__required">*</span> }
				{ tooltip && <Tooltip content={ tooltip } /> }
			</label>
		}
		<div className="ef-control__input">
			{ children }
			{ description && <RawHTML className="ef-control__description">{ description }</RawHTML> }
		</div>
	</div>
);

export default Control;