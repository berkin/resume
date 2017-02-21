webpackHotUpdate(0,{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(179);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _reactInlinesvg = __webpack_require__(180);
	
	var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);
	
	var _resume = __webpack_require__(196);
	
	var _resume2 = _interopRequireDefault(_resume);
	
	__webpack_require__(197);
	
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
						_react2.default.createElement('img', { src: __webpack_require__(198)("./" + _resume2.default.avatar), alt: _resume2.default.name })
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
								_react2.default.createElement(
									'span',
									{ 'class': 'isvg' },
									_react2.default.createElement('img', { src: __webpack_require__(205) })
								),
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
								_react2.default.createElement(_reactInlinesvg2.default, { src: '../assets/img/social/envelope-square.svg' }),
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
								_react2.default.createElement(_reactInlinesvg2.default, { src: '../assets/img/social/linkedin-square.svg' }),
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
								_react2.default.createElement(_reactInlinesvg2.default, { src: '../assets/img/social/github-square.svg' }),
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

/***/ }

})
//# sourceMappingURL=0.f487f1338c5d39b45918.hot-update.js.map