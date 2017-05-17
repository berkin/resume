import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

const productionPluginDefine = isProduction ? [
	new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production'), PORT: port } })
] : [];

const clientLoaders = isProduction ? productionPluginDefine.concat([new webpack.optimize.UglifyJsPlugin({
	compress: { warnings: false },
	sourceMap: true
})]) : [];

export default [
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
			rules: [
				{
					test: /\.hjson$/,
					use: 'hjson-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader?presets[]=es2015,presets[]=react'
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						loader: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
									minimize: true,
									discardComments: {
										removeAll: true
									}
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				},
				{
					test: /\.svg$/,
					use: [{
						loader: 'babel-loader?presets[]=es2015,presets[]=react'
					}, {
						loader: 'svg-react-loader'
					}]
				},
				{
					test: /\.(gif|png|jpe?g)$/i,
					use: [
						'file-loader?name=assets/img/[name].[ext]',
						{
							loader: 'image-webpack-loader?bypassOnDebug',
							query: {
								mozjpeg: {
									progressive: true
								},
								gifsicle: {
									interlaced: false
								},
								optipng: {
									optimizationLevel: 4
								},
								pngquant: {
									quality: '75-90',
									speed: 3
								}
							}
						}
					]
				}
			]
		},


		plugins: clientLoaders.concat([
			new webpack.HotModuleReplacementPlugin(),
			new ExtractTextPlugin({
				filename: './styles.css',
				allChunks: true
			})
		]),
		resolve: {
			extensions: ['.js', '.scss', '.css'],
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
			rules: [
				{
					test: /\.hjson$/,
					use: 'hjson-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader?presets[]=es2015,presets[]=react'
				},
				{
					test: /\.scss$/,
					use: 'ignore-loader'
				},
				{
					test: /.*\.(gif|png|jpe?g)$/i,
					use: [
						'file-loader?name=assets/img/[name].[ext]',
						'image-webpack-loader?bypassOnDebug'
					]
				},
				{
					test: /\.svg$/,
					use: [{
						loader: 'babel-loader?presets[]=es2015,presets[]=react'
					}, {
						loader: 'svg-react-loader'
					}]
				}
			]
		}
	}
];
