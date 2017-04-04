import 'newrelic';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));
server.use(express.static(__dirname));
server.get('/', (req, res) => {
	const appString = renderToString(<App />);

	res.send(template({
		body: appString,
		title: 'Berkin Berkcan Çırak\'s Resume'
	}));
});

const app = server.listen(process.env.PORT || 3444, '0.0.0.0', function() {
	console.log('Listening on port %d', app.address().port);
});
