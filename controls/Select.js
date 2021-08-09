import Control from "../Control";

const Select = ( {
	id = '',
	name = '',
	value = '',
	placeholder = '-',
	options,
	...rest
} ) => (
	<Control { ...rest }>
		<select id={ id } name={ name } defaultValue={ value }>
			<option value="">{ placeholder }</option>
			{
				Array.isArray( options )
					? options.map( item => item.options
						? <optgroup key={ item.label } label={ item.label }>
							{
								item.options.map( option => <option key={ option.value } value={ option.value }>{ option.label }</option> )
							}
						</optgroup>
						: <option key={ item.value } value={ item.value }>{ item.label }</option>
					)
					: Object.entries( options ).map( ( [ value, label ] ) => <option key={ value } value={ value }>{ label }</option> )
			}
		</select>
	</Control>
);

export default Select;