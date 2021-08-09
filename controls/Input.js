import Control from "../Control";

const Input = ( {
	type = 'text',
	id = '',
	name = '',
	value = '',
	placeholder = '',
	...rest
} ) => (
	<Control { ...rest }>
		<input type={ type } id={ id } name={ name } defaultValue={ value } placeholder={ placeholder } />
	</Control>
);

export default Input;