const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
				test: /\.hjson$/,
				loader: 'hjson-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel?presets[]=es2015,presets[]=react']
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
		extensions: ['', '.js', '.scss', '.css'],
		alias: {
			pure: path.join(__dirname, './node_modules/purecss/build/pure.css')
		}
	}
};
