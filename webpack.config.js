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
					plugins: [ '@babel/plugin-transform-react-jsx' ],
				},
			},
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
		'@wordpress/i18n': 'wp.i18n',
		'@wordpress/element': 'wp.element',
		'@wordpress/components': 'wp.components',
	},
};

module.exports = [ config ];
