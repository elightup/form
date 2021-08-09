const path = require( 'path' );
const webpack = require( 'webpack' );

const commonModules = {
	rules: [
		{
			test: /\.js/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [ '@babel/preset-react' ],
				},
			},
		},
		{
			test: /\.scss$/i,
			use: [
				// Creates `style` nodes from JS strings
				"style-loader",
				// Translates CSS into CommonJS
				"css-loader",
				// Compiles Sass to CSS
				"sass-loader",
			],
		},
	],
};

const config = {
	entry: './index.js',
	output: {
		filename: 'build.js',
		path: path.resolve( __dirname ),
	},
	module: commonModules,
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'@wordpress/element': 'wp.element',
		'@wordpress/components': 'wp.components',
	},
};

module.exports = [ config ];
