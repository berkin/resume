const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';
const productionPluginDefine = isProduction ? [
	new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
] : [];

const clientLoaders = isProduction ? productionPluginDefine.concat([
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

module.exports = [{
	entry: './src/server.js',
	output: {
		path: './dist',
		filename: 'server.js',
		libraryTarget: 'commonjs2',
		publicPath: '/'
	},
	target: 'node',
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
	},
	externals: nodeExternals(),
	plugins: productionPluginDefine,
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
				loader: 'ignore-loader'
			}
		]
	}
},
{
	entry: './src/client.js',
	output: {
		path: path.join(__dirname, '/dist/assets'),
		filename: 'bundle.js',
		publicPath: '/'
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
	plugins: clientLoaders.concat([
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('./styles.css', {
			allChunks: true
		})
	]),
	resolve: {
		extensions: ['', '.js', '.scss', '.css'],
		alias: {
			pure: path.join(__dirname, './node_modules/purecss/build/pure.css')
		}
	}
}];
