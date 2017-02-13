const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index.js',
		publicPath: '/build/'
	},
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3333,
		hot: true
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
		new webpack.HotModuleReplacementPlugin(),
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
