import { RawHTML } from "@wordpress/element";
import { Tooltip } from "./components/Tooltip";

export const Control = ( {
	label,
	required = false,
	tooltip = '',
	description = '',
	id = '',
	className = '',
	children,
	...rest
} ) => (
	<div className={ `ef-control ${ className }` } { ...rest }>
		{
			label &&
			<label className="ef-control__label" htmlFor={ id }>
				<RawHTML>{ label }</RawHTML>
				{ required && <span class="ef-control__required">*</span> }
				{ tooltip && <Tooltip content={ tooltip } /> }
			</label>
		}
		<div className="ef-control__input">
			{ children }
			{ description && <RawHTML className="ef-control__description">{ description }</RawHTML> }
		</div>
	</div>
);