import { Control } from "../Control";

export const Input = ( {
	label,
	name,
	type = 'text',
	value = '',
	placeholder = '',
} ) => (
	<Control label={ label }>
		<input type={ type } name={ name } value={ value } placeholder={ placeholder } />
	</Control>
);