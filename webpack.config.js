const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		path: './build/',
		filename: 'index.js'
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('./styles.css', {
			allChunks: true
		})
	],
	resolve: {
		extensions: ['', '.js', '.json', '.scss']
	}
};
