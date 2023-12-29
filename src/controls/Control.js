import clsx from "clsx";

const Control = ( {
	label = '',
	required = false,
	tooltip = '',
	description = '',
	id = '',
	className = '',
	children,
} ) => (
	<div className={ clsx( 'ef-control', className ) }>
		{
			label &&
			<label className="ef-control__label" htmlFor={ id }>
				{ label.includes( '<' ) ? <div dangerouslySetInnerHTML={ { __html: label } } /> : label }
				{ required && <span className="ef-control__required">*</span> }
			</label>
		}
		<div className="ef-control__input">
			{ children }
			{ description && <div className="ef-control__description" dangerouslySetInnerHTML={ { __html: description } } /> }
		</div>
	</div>
);

export default Control;