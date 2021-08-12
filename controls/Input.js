import Control from "../Control";

const Input = ( {
	type = 'text',
	id = '',
	name = '',
	value = '',
	placeholder = '',
	onChange,
	...rest
} ) => (
	<Control { ...rest }>
		<input type={ type } id={ id } name={ name } defaultValue={ value } placeholder={ placeholder } onChange={ onChange } />
	</Control>
);

export default Input;