const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

const productionPluginDefine = isProduction ? [
	new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production'), PORT: port } })
] : [];

const clientLoaders = isProduction ? productionPluginDefine.concat([
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

module.exports = [
	{
		name: 'client',
		entry: './src/assets/client.js',
		output: {
			path: path.join(__dirname, 'dist/assets'),
			filename: 'bundle.js',
			publicPath: '/assets/'
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
				},
				{
					test: /.*\.(gif|png|jpe?g)$/i,
					loaders: [
						'file?hash=sha512&digest=hex&name=img/[name].[ext]',
						'image-webpack'
					]
				},
				{
					test: /\.svg$/,
					loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
				}
			]
		},
		imageWebpackLoader: {
			mozjpeg: {
				quality: 65
			},
			pngquant: {
				quality: '65-90',
				speed: 4
			},
			svgo: {
				plugins: [
					{
						removeViewBox: false
					},
					{
						removeEmptyAttrs: false
					}
				]
			}
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
	},
	{
		name: 'server',
		entry: './src/server.js',
		output: {
			path: path.join(__dirname, 'dist/'),
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
				},
				{
					test: /.*\.(gif|png|jpe?g)$/i,
					loaders: [
						'file?hash=sha512&digest=hex&name=assets/img/[name].[ext]',
						'image-webpack'
					]
				},
				{
					test: /\.svg$/,
					loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
				}
			]
		}
	}
];
