import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
	const appString = renderToString(<App />);

	res.send(template({
		body: appString,
		title: 'Berkin Berkcan Çırak\'s Resume'
	}));
});

server.listen(3444);
console.log('listening 3444');
