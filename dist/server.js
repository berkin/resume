module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _template = __webpack_require__(9);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));

	server.get('/', function (req, res) {
		var appString = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));

		res.send((0, _template2.default)({
			body: appString,
			title: 'Berkin Berkcan Çırak\'s Resume'
		}));
	});

	server.listen(3444);
	console.log('listening 3444');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _marked = __webpack_require__(5);

	var _marked2 = _interopRequireDefault(_marked);

	var _resume = __webpack_require__(6);

	var _resume2 = _interopRequireDefault(_resume);

	var _reactInlinesvg = __webpack_require__(7);

	var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
		return _react2.default.createElement(
			'div',
			{ className: 'main-container pure-g' },
			_react2.default.createElement(
				'div',
				{ className: 'pure-u-1 main-content' },
				_react2.default.createElement(
					'div',
					{ className: 'box' },
					_react2.default.createElement(
						'figure',
						{ className: 'avatar' },
						_react2.default.createElement('img', { src: _resume2.default.avatar, alt: _resume2.default.name })
					),
					_react2.default.createElement(
						'h1',
						{ className: 'header' },
						_react2.default.createElement(
							'strong',
							null,
							_resume2.default.name
						)
					),
					_react2.default.createElement(
						'h2',
						{ className: 'sub-header' },
						_resume2.default.title
					),
					_react2.default.createElement(
						'ul',
						{ className: 'horizontal-list' },
						_react2.default.createElement(
							'li',
							{ className: 'item-line' },
							_react2.default.createElement(
								'a',
								{ href: 'tel: ' + _resume2.default.phone },
								_react2.default.createElement(_reactInlinesvg2.default, { src: 'assets/img/social/phone-square.svg' }),
								_react2.default.createElement(
									'span',
									{ className: 'text' },
									_resume2.default.phone
								)
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'item-line' },
							_react2.default.createElement(
								'a',
								{ href: 'email: ' + _resume2.default.email },
								_react2.default.createElement(_reactInlinesvg2.default, { src: 'assets/img/social/envelope-square.svg' }),
								_react2.default.createElement(
									'span',
									{ className: 'text' },
									_resume2.default.email
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: _resume2.default.social.linkedin },
								_react2.default.createElement(_reactInlinesvg2.default, { src: 'assets/img/social/linkedin-square.svg' }),
								_react2.default.createElement(
									'span',
									{ className: 'text' },
									'Linked In'
								)
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'a',
								{ href: _resume2.default.social.github },
								_react2.default.createElement(_reactInlinesvg2.default, { src: 'assets/img/social/github-square.svg' }),
								_react2.default.createElement(
									'span',
									{ className: 'text' },
									'Github'
								)
							)
						)
					),
					_react2.default.createElement('div', { className: 'summary', dangerouslySetInnerHTML: { __html: (0, _marked2.default)(_resume2.default.summary) } })
				),
				_react2.default.createElement(
					'h1',
					null,
					'Education'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'general-list' },
					_resume2.default.education.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'div',
								{ className: 'label' },
								_react2.default.createElement(
									'span',
									{ className: 'date' },
									item.end
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'content' },
								_react2.default.createElement(
									'h2',
									{ className: 'title' },
									item.school
								),
								item.faculty
							)
						);
					})
				),
				_react2.default.createElement(
					'h1',
					null,
					'Experiences'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'general-list' },
					_resume2.default.experiences.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'div',
								{ className: 'label' },
								_react2.default.createElement(
									'span',
									{ className: 'date' },
									item.begin
								),
								_react2.default.createElement(
									'span',
									{ className: 'date' },
									item.end
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'content' },
								_react2.default.createElement(
									'h2',
									{ className: 'company' },
									item.company
								),
								_react2.default.createElement(
									'h3',
									{ className: 'title' },
									item.title
								),
								_react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: (0, _marked2.default)(item.description) } })
							)
						);
					})
				),
				_react2.default.createElement(
					'h1',
					null,
					'Conferences'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'general-list' },
					_resume2.default.conferences.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'div',
								{ className: 'label' },
								_react2.default.createElement(
									'span',
									{ className: 'date' },
									item.date
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'content' },
								_react2.default.createElement(
									'h2',
									{ className: 'company' },
									item.title
								),
								_react2.default.createElement(
									'h3',
									{ className: 'title' },
									item.location
								)
							)
						);
					})
				)
			)
		);
	};

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Berkin Berkcan Çırak",
		"title": "Front-End Developer",
		"avatar": "assets/img/berkin-berkcan-cirak.jpg",
		"phone": "+90 507 498 8240",
		"email": "berkin@kuyabiye.com",
		"social": {
			"linkedin": "https://tr.linkedin.com/in/berkincirak",
			"github": "https://github.com/berkin"
		},
		"summary": "- 8+ years experience in interactive design & development\n- Specialized in hand-written oo JavaScript, standards-compliant XHTML/HTML and CSS with an emphasis on semantics, accessibility, performance, scalability, user experience and seo.\n- An aptitude for developing user interfaces across a variety of platforms from mobile apps to large scale websites.\n- Experienced in mobile technologies. Designed and developed cross-platforms, large scale mobile websites from smart phones to low-end feature phones.",
		"education": [
			{
				"title": "Bachelor",
				"school": "Hacettepe University",
				"faculty": "Physics Engineering",
				"end": 2004
			}
		],
		"experiences": [
			{
				"begin": "March 2016",
				"end": "Present",
				"company": "Come On!",
				"title": "Senior Front-End Developer",
				"description": "- ComeOn is a Swedish online gaming, betting and casino portal.\n- Modern workflow techniques including React, ES6, Webpack, Sass, Gulp\n- Developing the company’s mobile gaming platform from scratch with React"
			},
			{
				"begin": "July 2013",
				"end": "March 2016",
				"company": "Garanti Technology",
				"title": "Senior Front-End Developer",
				"description": "- Responsible for the front-end architecture of a large scale single-page CRM application.\n- Developed re-usable modules and javascript plugins.\n- Performed cross browser testing and debugging to eliminate UI/JavaScript bugs and memory leaks.\n- Mentored the backend and front-end developers about developing javascript applications.\n- Always stick to modern workflow techniques including automation via grunt, CSS preprocessor implementation via sass/compass, mvvm framework implementation via knockout.js, integration of amd via require.js.\n- Developed SPA single-page applications for pension system and credit cards application."
			},
			{
				"begin": "April 2011",
				"end": "July 2013",
				"company": "Nexum Boğaziçi",
				"title": "Senior Front-End Developer",
				"description": "- Developed standards-compliant HTML, CSS and JavaScript for various clients including Akbank, Turkcell, Sony, BSH and Lenovo, focusing on mobile and desktop.\n- Built the front-end for Turkcell's mobile web site m.turkcell.com with jQuery Mobile. Utilized graceful degradation and progressive enhancement to support all mobile web browsers from iPhone, Android and Blackberry.\n- Designed and built the front-end of wap.turkcell.com for low-end feature phones.\n- Responsible for design and front-end development of Sony's dealer portal Sony1 which is active in 36 countries.\n- Lead front-end developer of large-scale, cutting-edge websites of Turkcell including Turkcell Store, Turkcell Online Services, Turkcell E-Bill and Turkcell E-Bill Mobile.\n- Designed and developed an administration theme which is used in every project of the company. Also used as a stand-alone project of BSH's work order system BSH MIP.\n- Added features to the application of Sony's Tablet."
			},
			{
				"begin": "April 2010",
				"end": "April 2011",
				"company": "Haberturk",
				"title": "Full Stack Developer",
				"description": "- Leading media company in Turkey\\n- Maintenance of backend and frontend for the multisite network on daily basis.\n- Adding new pages and features, performance optimization and bug fixing.\n- Perform cross browser testing and debugging to eliminate UI/JavaScript bugs in supported browsers (IE 6-7-8-9, Firefox, Chrome & Safari).\n- As part of the migration the front-end of haberturk.com has been completely re-architectured and re-developed from scratch, minimizing the cross-browser issues, and optimization.\n- Lead front-end developer and backend developer on the launch of the bloomberght.com.\n- Directly responsible for all front-end development of the haberturk.com (including the sub-sites), bloomberght.com.\n- Responsible of the ads integration to the multi-site network. Researching and developing new ad features and optimization of the ads.\n- Directly responsible of SEO. Monitoring google analytics, web master tools and developing for seo purposes on daily basis.\n- Back-end and front-end developer of Referendum 2010 sub-site. Parse and serve data of the results for TV and website.\n- Developer of the video portal re-design video.haberturk.com."
			},
			{
				"begin": "January 2010",
				"end": "July 2013",
				"company": "Freelance",
				"title": "Full Stack Developer",
				"description": "- Work as a front-end developer for the new design of [(ING BANK Turkey)](http://ingbank.com.tr).\n- Developed a javascript framework for calculation tools.\n- Various forms of calculations could be created easily using the framework [ex. Loan Calculator](https://www.ingbank.com.tr/en/knowledge-base/loans#ihtiyac-kredisi).\n- Front-end developer of the internet banking website of ING BANK Turkey [e-bank website](https://internetsubesi.ingbank.com.tr/). It is the first responsive internet banking website in Turkey. Developed custom plugins like virtual keyboard, responsive tables.\n- Designed and developed Erdoganlar Bisiklet (erdoganlarbisiklet.com). It is an online bike store which is based on magento.\n- Lead front-end and back-end developer of the video tutorial website [\"The Maths Tutor\"](http://themathstutor.com.au). It is a responsive website which is based on wordpress."
			},
			{
				"begin": 2008,
				"end": 2010,
				"company": "Siyah Balık",
				"title": "Full Stack Developer",
				"description": "- Focused on e-commerce. Built couple of e-commerce websites using open source e-commerce platforms including osCommerce, Zen-cart, Magento.\n- Worked on e-commerce platform's administration panel to improve UX and design.\n- Integrated credit card payment solutions for Magento and Zen-Cart.\\n- Designed and Developed erdoganlarbisiklet.com with Magento.\n- Experienced with Joomla. Developed fulbright.org.tr, emtains.com, armapr.com\n- Developed company projects (storemia.com, kuyabiye.com and criball.com) from scratch using Symfony Framework and Doctrine."
			},
			{
				"begin": 2005,
				"end": 2007,
				"company": "Mor-Tel",
				"title": "Full Stack Developer",
				"description": "- Built applications like instant messaging, sms services by using Telsim's sms gateway.\n- Developed a smart portal which includes news, social network, calendar, affiliate system from scratch using technologies asp, MsSql and native javascript."
			},
			{
				"begin": 2004,
				"end": 2005,
				"company": "Erasmus Information Technology",
				"title": "Web Designer",
				"description": "- Focused on e-commerce, designed online book store."
			}
		],
		"conferences": [
			{
				"title": "Fluent",
				"date": 2014,
				"location": "San Fransisco"
			},
			{
				"title": "Jsist",
				"date": 2014,
				"location": "İstanbul"
			},
			{
				"title": "UX Alive",
				"date": 2015,
				"location": "İstanbul"
			},
			{
				"title": "Node Interactive",
				"date": 2016,
				"location": "Amsterdam"
			}
		]
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-inlinesvg");

/***/ },
/* 8 */
/***/ function(module, exports) {

	

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (_ref) {
		var body = _ref.body,
		    title = _ref.title;

		return "\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"UTF-8\">\n\t\t<title>" + title + "</title>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<link rel=\"stylesheet\" href=\"/assets/styles.css\" />\n\t </head>\n\t<body>\n\t\t<div id=\"app\">" + body + "</div>\n\t</body>\n\t<script src=\"/assets/bundle.js\"></script>\n</html>\n  ";
	};

/***/ }
/******/ ]);