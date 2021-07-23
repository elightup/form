export const Control = ( {
	label,
	children,
} ) => (
	<div className="ef-control">
		<div className="ef-control__label">
			{ label }
		</div>
		<div className="ef-control__inpu">
			{ children }
		</div>
	</div>
);