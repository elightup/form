# @elightup/form

Common uncontrolled form controls for React

## Installing

Clone this repo to a local folder and build it:

```bash
git clone git@github.com:elightup/form.git
npm install
npm start
```

To start using this package in your project, first make this project as a link, so whenever you update it locally, all local changes will apply to your project. To make it a link, run this command inside the `@elightup/form` package folder:

```bash
npm link
```

Then add `@elightup/form` to the list of your project's dependencies in the `package.json` file:

```json
"dependencies": {
	"@elightup/form": "file:../../../../form",
}
```
Don't forget to change the path to the folder of the `@elightup/form` repo that you cloned earlier.

This will add `@elightup/form` to your `node_modules` folder, however, to make it link to the local folder, run:

```bash
npm link @elightup/form
```
## Usage

### Control

```js
import { Control } from "@elightup/form";

const MyInput = props => (
	<Control {...props}>
		<input type="text" name="name" />
		<div className="my-custom">Some custom text</div>
	</Control>
);
```

Props:

Name|Description
---|---
`label`|The label, can be text or HTML. Optional. If empty, then the input will take full width.
`id`|The `id` attribute for the input, used for the `for` attribute for the label. Optional.
`description`|The description text. Optional.
`required`|Whether the field is required. If `true`, then output a red asterisk (*) next to the label. Default `false`. Optional.
`tooltip`|The tooltip for the field. Optional.
`className`|Additional class name(s) for the control. Optional.

### Input

```js
import { Input } from "@elightup/form";

const MyInput = props => <Input {...props} />;
```

Props:

Inherits all props from `Control`, and:

Name|Description
---|---
`type`|The input type. Optional. Default `text`.
`name`|The `name` attribute for the input. Optional.
`value`|The default value. Optional.
`placeholder`|The placeholder text. Optional.
`onChange`|The callback for the `change` event. Optional.

### Text

The same as `Input` with `type` is set to `text`.

### Select


```js
import { Select } from "@elightup/form";

const MyInput = props => <Select {...props} />;
```

Props:

Inherits all props from `Control`, and:

Name|Description
---|---
`name`|The `name` attribute for the input. Optional.
`value`|The default value. Optional.
`placeholder`|The placeholder text. Optional.
`onChange`|The callback for the `change` event. Optional.
`options`|The select options. Required.

`options` can be defined as:

```js
import { Select } from "@elightup/form";

// Simple value: label pairs.
const options1 = {
	value1: 'Label 1',
	value2: 'Label 2',
};
const Select1 = props => <Select options={ options1 } {...props} />;

// Explicit array of { value, label } pairs.
const options2 = [
	{
		value: 'value1',
		label: 'Label 1',
	},
	{
		value: 'value2',
		label: 'Label 2',
	},
};
const Select2 = props => <Select options={ options2 } {...props} />;

// With <optgroup>
const options3 = [
	{
		value: 'group1',
		label: 'Group 1',
		// Options can be simple value: label pairs.
		options: {
			value1: 'Label 1',
			value2: 'Label 2',
		}
	},
	{
		value: 'group2',
		label: 'Group 2',
		// Options also can be an explicit array of { value, label } pairs.
		options: [
			{
				value: 'value1',
				label: 'Label 1',
			},
			{
				value: 'value2',
				label: 'Label 2',
			},
		],
	},
};
const Select3 = props => <Select options={ options3 } {...props} />;
```

## Styling

`@elightup/form` does not include any style loading by default. Default stylesheets are provided and can be included in your application if desired.

### Webpack

When using webpack and with `sass-loader` you can simply import the default stylesheet.

```js
import '@elightup/form/style/form.scss';
```

### SASS

When using SASS you can easily import the default styles:

```sass
@import '../../path/to/node_modules/@elightup/form/style/form.scss';
```