var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	  contentBase: 'build',
	  hot: true,
	  filename: 'index.js',
	  publicPath: '/',
	  stats: {
		      colors: true,
		    },
});
server.listen(3333, 'localhost', function() {});
