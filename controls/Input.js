import Control from "../Control";

const Input = ( {
	name,
	type = 'text',
	value = '',
	placeholder = '',
	...rest
} ) => (
	<Control {...rest}>
		<input type={ type } name={ name } defaultValue={ value } placeholder={ placeholder } />
	</Control>
);

export default Input;