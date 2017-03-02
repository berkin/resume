module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return callback();
/******/ 		}
/******/ 		callback(null, update);
/******/ 	}

/******/ 	
/******/ 	
/******/ 	// Copied from https://github.com/facebook/react/blob/bef45b0/src/shared/utils/canDefineProperty.js
/******/ 	var canDefineProperty = false;
/******/ 	try {
/******/ 		Object.defineProperty({}, "x", {
/******/ 			get: function() {}
/******/ 		});
/******/ 		canDefineProperty = true;
/******/ 	} catch(x) {
/******/ 		// IE will fail on defineProperty
/******/ 	}
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "daf0adfea9d03385a44a"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				if(canDefineProperty) {
/******/ 					Object.defineProperty(fn, name, (function(name) {
/******/ 						return {
/******/ 							configurable: true,
/******/ 							enumerable: true,
/******/ 							get: function() {
/******/ 								return __webpack_require__[name];
/******/ 							},
/******/ 							set: function(value) {
/******/ 								__webpack_require__[name] = value;
/******/ 							}
/******/ 						};
/******/ 					}(name)));
/******/ 				} else {
/******/ 					fn[name] = __webpack_require__[name];
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		function ensure(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 		if(canDefineProperty) {
/******/ 			Object.defineProperty(fn, "e", {
/******/ 				enumerable: true,
/******/ 				value: ensure
/******/ 			});
/******/ 		} else {
/******/ 			fn.e = ensure;
/******/ 		}
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}

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
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

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

/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };

/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
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

	var _template = __webpack_require__(20);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var server = (0, _express2.default)();

	server.use('/assets', _express2.default.static('assets'));
	server.use(_express2.default.static(__dirname));
	server.get('/', function (req, res) {
		var appString = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));

		res.send((0, _template2.default)({
			body: appString,
			title: 'Berkin Berkcan Çırak\'s Resume'
		}));
	});
	var app = server.listen(3444, function () {
		console.log('Listening on port %d', app.address().port);
	});

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

	__webpack_require__(7);

	var _phoneSquare = __webpack_require__(8);

	var _phoneSquare2 = _interopRequireDefault(_phoneSquare);

	var _envelopeSquare = __webpack_require__(11);

	var _envelopeSquare2 = _interopRequireDefault(_envelopeSquare);

	var _linkedinSquare = __webpack_require__(12);

	var _linkedinSquare2 = _interopRequireDefault(_linkedinSquare);

	var _githubSquare = __webpack_require__(13);

	var _githubSquare2 = _interopRequireDefault(_githubSquare);

	var _filePdfO = __webpack_require__(14);

	var _filePdfO2 = _interopRequireDefault(_filePdfO);

	var _print = __webpack_require__(15);

	var _print2 = _interopRequireDefault(_print);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
		return _react2.default.createElement(
			'div',
			{ className: 'main-container pure-g' },
			_react2.default.createElement(
				'div',
				{ className: 'pure-u-1 main-content' },
				_react2.default.createElement(
					'ul',
					{ className: 'horizontal-list download-links' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'assets/berkin.berkcan.cirak-resume.pdf' },
							_react2.default.createElement(
								'span',
								{ className: 'isvg' },
								_react2.default.createElement(_filePdfO2.default, null)
							),
							_react2.default.createElement(
								'span',
								{ className: 'text' },
								'Download as pdf'
							)
						)
					),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'assets/berkin.berkcan.cirak-resume.pdf' },
							_react2.default.createElement(
								'span',
								{ className: 'isvg' },
								_react2.default.createElement(_print2.default, null)
							),
							_react2.default.createElement(
								'span',
								{ className: 'text' },
								'Print'
							)
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'box' },
					_react2.default.createElement(
						'figure',
						{ className: 'avatar' },
						_react2.default.createElement('img', { src: __webpack_require__(16)("./" + _resume2.default.avatar), alt: _resume2.default.name })
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
									{ className: 'isvg' },
									_react2.default.createElement(_phoneSquare2.default, null)
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
								_react2.default.createElement(
									'span',
									{ className: 'isvg' },
									_react2.default.createElement(_envelopeSquare2.default, null)
								),
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
								_react2.default.createElement(
									'span',
									{ className: 'isvg' },
									_react2.default.createElement(_linkedinSquare2.default, null)
								),
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
								_react2.default.createElement(
									'span',
									{ className: 'isvg' },
									_react2.default.createElement(_githubSquare2.default, null)
								),
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
		"avatar": "berkin-berkcan-cirak.jpg",
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

	

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "PhoneSquare",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M1408 1193q0-11-2-16-3-8-38.5-29.5t-88.5-49.5l-53-29q-5-3-19-13t-25-15-21-5q-18 0-47 32.5t-57 65.5-44 33q-7 0-16.5-3.5t-15.5-6.5-17-9.5-14-8.5q-99-55-170.5-126.5t-126.5-170.5q-2-3-8.5-14t-9.5-17-6.5-15.5-3.5-16.5q0-13 20.5-33.5t45-38.5 45-39.5 20.5-36.5q0-10-5-21t-15-25-13-19q-3-6-15-28.5t-25-45.5-26.5-47.5-25-40.5-16.5-18-16-2q-48 0-101 22-46 21-80 94.5t-34 130.5q0 16 2.5 34t5 30.5 9 33 10 29.5 12.5 33 11 30q60 164 216.5 320.5t320.5 216.5q6 2 30 11t33 12.5 29.5 10 33 9 30.5 5 34 2.5q57 0 130.5-34t94.5-80q22-53 22-101zm256-777v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("svg-react-loader/helpers");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "EnvelopeSquare",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960zm32 1056v-436q-31 35-64 55-34 22-132.5 85t-151.5 99q-98 69-164 69t-164-69q-46-32-141.5-92.5t-142.5-92.5q-12-8-33-27t-31-27v436q0 40 28 68t68 28h832q40 0 68-28t28-68zm0-573q0-41-27.5-70t-68.5-29h-832q-40 0-68 28t-28 68q0 37 30.5 76.5t67.5 64.5q47 32 137.5 89t129.5 83q3 2 17 11.5t21 14 21 13 23.5 13 21.5 9.5 22.5 7.5 20.5 2.5 20.5-2.5 22.5-7.5 21.5-9.5 23.5-13 21-13 21-14 17-11.5l267-174q35-23 66.5-62.5t31.5-73.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "LinkedinSquare",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "GithubSquare",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "FilePdfO",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-514-593q33 26 84 56 59-7 117-7 147 0 177 49 16 22 2 52 0 1-1 2l-2 2v1q-6 38-71 38-48 0-115-20t-130-53q-221 24-392 83-153 262-242 262-15 0-28-7l-24-12q-1-1-6-5-10-10-6-36 9-40 56-91.5t132-96.5q14-9 23 6 2 2 2 4 52-85 107-197 68-136 104-262-24-82-30.5-159.5t6.5-127.5q11-40 42-40h22q23 0 35 15 18 21 9 68-2 6-4 8 1 3 1 8v30q-2 123-14 192 55 164 146 238zm-576 411q52-24 137-158-51 40-87.5 84t-49.5 74zm398-920q-15 42-2 132 1-7 7-44 0-3 7-43 1-4 4-8-1-1-1-2t-.5-1.5-.5-1.5q-1-22-13-36 0 1-1 2v2zm-124 661q135-54 284-81-2-1-13-9.5t-16-13.5q-76-67-127-176-27 86-83 197-30 56-45 83zm646-16q-24-24-140-24 76 28 124 28 14 0 18-1 0-1-2-3z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "Print",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./berkin-berkcan-cirak.jpg": 17,
		"./berkin-berkcan.cirak-2.jpg": 18,
		"./file-pdf-o.svg": 14,
		"./print.svg": 15,
		"./social/dribbble.svg": 19,
		"./social/envelope-square.svg": 11,
		"./social/github-square.svg": 13,
		"./social/linkedin-square.svg": 12,
		"./social/phone-square.svg": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/img/berkin-berkcan-cirak.jpg";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/img/berkin-berkcan.cirak-2.jpg";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var helpers = __webpack_require__(9)(__webpack_require__(10));

	module.exports = React.createClass({

	    displayName: "Dribbble",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "1792", "height": "1792", "viewBox": "0 0 1792 1792", "xmlns": "http://www.w3.org/2000/svg" };
	    },
	    componentDidMount: function componentDidMount() {
	        helpers.applyXmlAttributes(this);
	    },
	    render: function render() {
	        var props = this.props;
	        var children = props.children;

	        return React.createElement(
	            'svg',
	            this.props,
	            React.createElement('path', { d: 'M1152 1500q-42-241-140-498h-2l-2 1q-16 6-43 16.5t-101 49-137 82-131 114.5-103 148l-15-11q184 150 418 150 132 0 256-52zm-185-607q-21-49-53-111-311 93-673 93-1 7-1 21 0 124 44 236.5t124 201.5q50-89 123.5-166.5t142.5-124.5 130.5-81 99.5-48l37-13q4-1 13-3.5t13-4.5zm-107-212q-120-213-244-378-138 65-234 186t-128 272q302 0 606-80zm684 319q-210-60-409-29 87 239 128 469 111-75 185-189.5t96-250.5zm-805-741q-1 0-2 1 1-1 2-1zm590 145q-185-164-433-164-76 0-155 19 131 170 246 382 69-26 130-60.5t96.5-61.5 65.5-57 37.5-40.5zm223 485q-3-232-149-410l-1 1q-9 12-19 24.5t-43.5 44.5-71 60.5-100 65-131.5 64.5q25 53 44 95 2 6 6.5 17.5t7.5 16.5q36-5 74.5-7t73.5-2 69 1.5 64 4 56.5 5.5 48 6.5 36.5 6 25 4.5zm112 7q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z' }),
	            React.Children.map(children, function (c) {
	                return c;
	            })
	        );
	    }
	});

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (_ref) {
		var body = _ref.body,
		    title = _ref.title;

		return "\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"UTF-8\">\n\t\t<title>" + title + "</title>\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<link rel=\"stylesheet\" href=\"assets/styles.css\" />\n\t </head>\n\t<body>\n\t\t<div id=\"app\">" + body + "</div>\n\t</body>\n\t<script src=\"assets/bundle.js\"></script>\n</html>\n  ";
	};

/***/ }
/******/ ]);