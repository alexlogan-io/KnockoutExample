/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/knockout/build/output/knockout-latest.debug.js from dll-reference vendor_1f9d6a88d9603d06dbd3 ***!
  \******************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(5);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5kZWJ1Zy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzFmOWQ2YTg4ZDk2MDNkMDZkYmQzP2NiMjEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xZjlkNmE4OGQ5NjAzZDA2ZGJkM1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/*!**********************************************!*\
  !*** external "vendor_1f9d6a88d9603d06dbd3" ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("module.exports = vendor_1f9d6a88d9603d06dbd3;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl8xZjlkNmE4OGQ5NjAzZDA2ZGJkM1wiPzljOTgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfMWY5ZDZhODhkOTYwM2QwNmRiZDM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfMWY5ZDZhODhkOTYwM2QwNmRiZDNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendor_1f9d6a88d9603d06dbd3 ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(1);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzFmOWQ2YTg4ZDk2MDNkMDZkYmQzPzg1MzMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl8xZjlkNmE4OGQ5NjAzZDA2ZGJkM1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_1f9d6a88d9603d06dbd3 ***!
  \*****************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(19);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfMWY5ZDZhODhkOTYwM2QwNmRiZDM/OWNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXzFmOWQ2YTg4ZDk2MDNkMDZkYmQzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./Client/ts/Question.ts ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar $ = __webpack_require__(/*! jquery */ 3);\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nvar Question = (function () {\r\n    function Question(name, optionsUrl, answersUrl, options, answers) {\r\n        var _this = this;\r\n        this.populateColumn = function (column, url) {\r\n            var self = _this;\r\n            $.getJSON(url, function (data) {\r\n                var t = [];\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var item = data_1[_i];\r\n                    t.push(item);\r\n                }\r\n                if (column === \"options\") {\r\n                    self.options = ko.observableArray(t);\r\n                    self.options.sort();\r\n                }\r\n                else {\r\n                    self.answers = ko.observableArray(t);\r\n                    self.answers.sort();\r\n                }\r\n            });\r\n        };\r\n        this.removeFromSelectedAnswers = function (item) {\r\n            _this.selectedOptions.remove(item);\r\n            _this.selectedOptions.sort();\r\n        };\r\n        this.addToSelectedAnswers = function (item) {\r\n            if (_this.selectedOptions.indexOf(item) < 0) {\r\n                _this.selectedOptions.push(item);\r\n                _this.selectedOptions.sort();\r\n            }\r\n        };\r\n        this.isCorrect = function (item) {\r\n            if (_this.showAnswers()) {\r\n                if (_this.answers().indexOf(item) > -1) {\r\n                    return true;\r\n                }\r\n                else {\r\n                    return false;\r\n                }\r\n            }\r\n            return false;\r\n        };\r\n        this.isFalse = function (item) {\r\n            if (_this.showAnswers()) {\r\n                if (_this.answers().indexOf(item) === -1) {\r\n                    return true;\r\n                }\r\n                else {\r\n                    return false;\r\n                }\r\n            }\r\n            return false;\r\n        };\r\n        this.getScore = function () {\r\n            if (!_this.showAnswers()) {\r\n                _this.showAnswers(true);\r\n                var score = 0;\r\n                for (var _i = 0, _a = _this.selectedOptions(); _i < _a.length; _i++) {\r\n                    var answer = _a[_i];\r\n                    if (_this.isCorrect(answer)) {\r\n                        score += 1;\r\n                    }\r\n                    else {\r\n                        score -= 1;\r\n                    }\r\n                }\r\n                _this.score(score);\r\n            }\r\n        };\r\n        this.name = name;\r\n        this.selectedOptions = ko.observableArray([]);\r\n        if (optionsUrl) {\r\n            this.options = ko.observableArray([]);\r\n            this.populateColumn(\"options\", optionsUrl);\r\n        }\r\n        else {\r\n            this.options = ko.observableArray(options);\r\n        }\r\n        if (answersUrl) {\r\n            this.answers = ko.observableArray([]);\r\n            this.populateColumn(\"answers\", answersUrl);\r\n        }\r\n        else {\r\n            this.answers = ko.observableArray(answers);\r\n        }\r\n        this.showAnswers = ko.observable(false);\r\n        this.score = ko.observable(0);\r\n    }\r\n    return Question;\r\n}());\r\nexports.Question = Question;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUXVlc3Rpb24udHM/NjM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IHRvUGFzY2FsIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xyXG4gICAgc2VsZWN0ZWRPcHRpb25zOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xyXG4gICAgYW5zd2VyczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuICAgIHNob3dBbnN3ZXJzOiBLbm9ja291dE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBzY29yZTogS25vY2tvdXRPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvcHRpb25zVXJsPzogc3RyaW5nLCBhbnN3ZXJzVXJsPzogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nW10sIGFuc3dlcnM/OiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9uc1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlQ29sdW1uKFwib3B0aW9uc1wiLCBvcHRpb25zVXJsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5zd2Vyc1VybCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlQ29sdW1uKFwiYW5zd2Vyc1wiLCBhbnN3ZXJzVXJsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoYW5zd2Vycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dBbnN3ZXJzID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVDb2x1bW4gPSAoY29sdW1uOiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sdW1uID09PSBcIm9wdGlvbnNcIikge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zID0ga28ub2JzZXJ2YWJsZUFycmF5KHQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnNvcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYW5zd2VycyA9IGtvLm9ic2VydmFibGVBcnJheSh0KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYW5zd2Vycy5zb3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVNlbGVjdGVkQW5zd2VycyA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1NlbGVjdGVkQW5zd2VycyA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2YoaXRlbSkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLnNvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb3JyZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaG93QW5zd2VycygpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuc3dlcnMoKS5pbmRleE9mKGl0ZW0pID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGYWxzZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0Fuc3dlcnMoKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbnN3ZXJzKCkuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2NvcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dBbnN3ZXJzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QW5zd2Vycyh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuc2VsZWN0ZWRPcHRpb25zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdChhbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgLT0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY29yZShzY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaWVudC90cy9RdWVzdGlvbi50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBR0E7QUFRQTtBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTFGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXdFQTtBQUFBO0FBcEdBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./Client/ts/QuizController.ts ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nvar QuizController = (function () {\r\n    function QuizController() {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.setTitle();\r\n        };\r\n        this.next = function () {\r\n            _this.selectedIndex(_this.selectedIndex() + 1);\r\n            _this.setTitle();\r\n        };\r\n        this.previous = function () {\r\n            _this.selectedIndex(_this.selectedIndex() - 1);\r\n            _this.setTitle();\r\n        };\r\n        this.addQuestion = function () {\r\n            var question = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                question[_i] = arguments[_i];\r\n            }\r\n            for (var _a = 0, question_1 = question; _a < question_1.length; _a++) {\r\n                var item = question_1[_a];\r\n                _this.questionArray.push(item);\r\n            }\r\n        };\r\n        this.submit = function () {\r\n            console.log(\"submit\");\r\n        };\r\n        this.setTitle = function () {\r\n            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.questionArray().length) {\r\n                _this.title(_this.questionArray()[_this.selectedIndex()].name);\r\n            }\r\n            else {\r\n                _this.title(\"\");\r\n            }\r\n        };\r\n        this.selectedIndex = ko.observable(0);\r\n        this.questionArray = ko.observableArray([]);\r\n        this.title = ko.observable(\"\");\r\n        this.totalScore = ko.computed(function () {\r\n            var score = 0;\r\n            for (var _i = 0, _a = this.questionArray(); _i < _a.length; _i++) {\r\n                var question = _a[_i];\r\n                score += question.score();\r\n            }\r\n            return score;\r\n        }, this);\r\n    }\r\n    return QuizController;\r\n}());\r\nexports.QuizController = QuizController;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUXVpekNvbnRyb2xsZXIudHM/ZWM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgdG9QYXNjYWwgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCIuLi90cy9RdWVzdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXpDb250cm9sbGVyIHtcclxuICAgIHF1ZXN0aW9uQXJyYXk6IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PFF1ZXN0aW9uPjtcclxuICAgIHNlbGVjdGVkSW5kZXg6IEtub2Nrb3V0T2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgdGl0bGU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgdG90YWxTY29yZTogS25vY2tvdXRDb21wdXRlZDxudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbkFycmF5ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsU2NvcmUgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHF1ZXN0aW9uIG9mIHRoaXMucXVlc3Rpb25BcnJheSgpKSB7XHJcbiAgICAgICAgICAgICAgICBzY29yZSArPSBxdWVzdGlvbi5zY29yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2NvcmU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KCkgKyAxKTtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCgpIC0gMSk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFF1ZXN0aW9uID0gKC4uLnF1ZXN0aW9uKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBxdWVzdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCgpID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4KCkgPCB0aGlzLnF1ZXN0aW9uQXJyYXkoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSh0aGlzLnF1ZXN0aW9uQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXgoKV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGllbnQvdHMvUXVpekNvbnRyb2xsZXIudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFJQTtBQU1BO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBa0NBO0FBQUE7QUFyREE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/expose-loader?$!./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"$\"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./jquery.js */ 10);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 2)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzPzdkZmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCIkXCJdID0gcmVxdWlyZShcIi0hQzpcXFxcVXNlcnNcXFxcYWxleGxcXFxcZ2l0XFxcXGFsZXhsb2dhbi1pbyBnaXRcXFxcS25vY2tvdXRFeGFtcGxlXFxcXEtub2Nrb3V0RXhhbXBsZVxcXFxub2RlX21vZHVsZXNcXFxcZXhwb3NlLWxvYWRlclxcXFxpbmRleC5qcz9qUXVlcnkhLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/JCEuL34vZXhwb3NlLWxvYWRlcj9qUXVlcnkhLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./Client/css/site.css ***!
  \*****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9jc3Mvc2l0ZS5jc3M/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50L2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./Client/css/lessTest.less ***!
  \**********************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9jc3MvbGVzc1Rlc3QubGVzcz9mZDFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnQvY3NzL2xlc3NUZXN0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./Client/ts/app.ts ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar $ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ 6);\r\nvar ko = __webpack_require__(/*! knockout */ 0);\r\nvar QuizController_1 = __webpack_require__(/*! ./QuizController */ 5);\r\nvar Question_1 = __webpack_require__(/*! ./Question */ 4);\r\n//page specific css here \r\n__webpack_require__(/*! ../css/site.css */ 7);\r\n__webpack_require__(/*! ../css/lessTest.less */ 8);\r\n($(function () {\r\n    var controller = new QuizController_1.QuizController();\r\n    var goals = new Question_1.Question(\"Players Who Have Scored Over 100 Goals for Manchester United\", null, null, [\"Wayne Rooney\", \"Juan Mata\", \"Ruud Van Nistelrooy\", \"Michael Carrick\", \"Roy Keane\", \"Denis Law\"], [\"Wayne Rooney\", \"Ruud Van Nistelrooy\", \"Denis Law\"]);\r\n    var champ = new Question_1.Question(\"Players Who Have Won the Champions League with Manchester United\", null, null, [\"Bobby Charlton\", \"Eric Cantona\", \"Steve Bruce\", \"Anderson\", \"Wes Brown\", \"Robin Van Persie\"], [\"Bobby Charlton\", \"Anderson\", \"Wes Brown\"]);\r\n    var sentOff = new Question_1.Question(\"Players Who Have Been Sent Off for Manchester United\", null, null, [\"Ryan Giggs\", \"Edwin Van De Sar\", \"Juan Mata\", \"Chris Smalling\", \"Phil Jones\", \"Bryan Robson\"], [\"Juan Mata\", \"Chris Smalling\", \"Bryan Robson\"]);\r\n    controller.addQuestion(goals, champ, sentOff);\r\n    controller.init();\r\n    ko.applyBindings(controller, document.getElementById(\"mainQuiz\"));\r\n    //let addNewColumn = new AddNewColumn(controller);\r\n    //ko.applyBindings(addNewColumn, document.getElementById(\"addNewColumn\"));\r\n}));\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvYXBwLnRzP2UzMmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgJCA9IHJlcXVpcmUoJ2V4cG9zZS1sb2FkZXI/JCFleHBvc2UtbG9hZGVyP2pRdWVyeSFqcXVlcnknKTtcclxuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IFF1aXpDb250cm9sbGVyIH0gZnJvbSBcIi4vUXVpekNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwiLi9RdWVzdGlvblwiO1xyXG4vL2ltcG9ydCB7IEFkZE5ld0NvbHVtbiB9IGZyb20gXCIuL0FkZE5ld0NvbHVtblwiO1xyXG5pbXBvcnQgeyB0b1Bhc2NhbCB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG4vL3BhZ2Ugc3BlY2lmaWMgY3NzIGhlcmUgXHJcbnJlcXVpcmUoJy4uL2Nzcy9zaXRlLmNzcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvbGVzc1Rlc3QubGVzcycpO1xyXG5cclxuKCQoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBRdWl6Q29udHJvbGxlcigpO1xyXG5cclxuICAgIGNvbnN0IGdvYWxzID0gbmV3IFF1ZXN0aW9uKFwiUGxheWVycyBXaG8gSGF2ZSBTY29yZWQgT3ZlciAxMDAgR29hbHMgZm9yIE1hbmNoZXN0ZXIgVW5pdGVkXCIsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFtcIldheW5lIFJvb25leVwiLCBcIkp1YW4gTWF0YVwiLCBcIlJ1dWQgVmFuIE5pc3RlbHJvb3lcIiwgXCJNaWNoYWVsIENhcnJpY2tcIiwgXCJSb3kgS2VhbmVcIiwgXCJEZW5pcyBMYXdcIl0sXHJcbiAgICAgICAgW1wiV2F5bmUgUm9vbmV5XCIsIFwiUnV1ZCBWYW4gTmlzdGVscm9veVwiLCBcIkRlbmlzIExhd1wiXSk7XHJcblxyXG4gICAgY29uc3QgY2hhbXAgPSBuZXcgUXVlc3Rpb24oXCJQbGF5ZXJzIFdobyBIYXZlIFdvbiB0aGUgQ2hhbXBpb25zIExlYWd1ZSB3aXRoIE1hbmNoZXN0ZXIgVW5pdGVkXCIsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFtcIkJvYmJ5IENoYXJsdG9uXCIsIFwiRXJpYyBDYW50b25hXCIsIFwiU3RldmUgQnJ1Y2VcIiwgXCJBbmRlcnNvblwiLCBcIldlcyBCcm93blwiLCBcIlJvYmluIFZhbiBQZXJzaWVcIl0sXHJcbiAgICAgICAgW1wiQm9iYnkgQ2hhcmx0b25cIiwgXCJBbmRlcnNvblwiLCBcIldlcyBCcm93blwiXSk7XHJcbiAgICBjb25zdCBzZW50T2ZmID0gbmV3IFF1ZXN0aW9uKFwiUGxheWVycyBXaG8gSGF2ZSBCZWVuIFNlbnQgT2ZmIGZvciBNYW5jaGVzdGVyIFVuaXRlZFwiLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBbXCJSeWFuIEdpZ2dzXCIsIFwiRWR3aW4gVmFuIERlIFNhclwiLCBcIkp1YW4gTWF0YVwiLCBcIkNocmlzIFNtYWxsaW5nXCIsIFwiUGhpbCBKb25lc1wiLCBcIkJyeWFuIFJvYnNvblwiXSxcclxuICAgICAgICBbXCJKdWFuIE1hdGFcIiwgXCJDaHJpcyBTbWFsbGluZ1wiLCBcIkJyeWFuIFJvYnNvblwiXSk7XHJcblxyXG4gICAgY29udHJvbGxlci5hZGRRdWVzdGlvbihnb2FscywgY2hhbXAsIHNlbnRPZmYpO1xyXG4gICAgY29udHJvbGxlci5pbml0KCk7XHJcblxyXG4gICAga28uYXBwbHlCaW5kaW5ncyhjb250cm9sbGVyLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5RdWl6XCIpKTtcclxuXHJcbiAgICAvL2xldCBhZGROZXdDb2x1bW4gPSBuZXcgQWRkTmV3Q29sdW1uKGNvbnRyb2xsZXIpO1xyXG4gICAgLy9rby5hcHBseUJpbmRpbmdzKGFkZE5ld0NvbHVtbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdDb2x1bW5cIikpO1xyXG59KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaWVudC90cy9hcHAudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQTtBQUtBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"jQuery\"] = __webpack_require__(/*! -!./jquery.js */ 3);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 2)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qcz8zOThiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wialF1ZXJ5XCJdID0gcmVxdWlyZShcIi0hLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/alF1ZXJ5IS4vfi9qcXVlcnkvZGlzdC9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map