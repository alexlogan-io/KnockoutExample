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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/*!**********************************************!*\
  !*** external "vendor_c016f18ee1b153e476b0" ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("module.exports = vendor_c016f18ee1b153e476b0;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFwiP2JiNWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjBcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* exports provided: toPascal */
/* exports used: toPascal */
/*!****************************!*\
  !*** ./Client/ts/Utils.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = toPascal;\nfunction toPascal(str) {\r\n    return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvVXRpbHMudHM/MWZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9QYXNjYWwoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcdykoXFx3KikvZyxcclxuICAgICAgICBmdW5jdGlvbiAoZzAsIGcxLCBnMikgeyByZXR1cm4gZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaWVudC90cy9VdGlscy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/knockout/build/output/knockout-latest.debug.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \******************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(4);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5kZWJ1Zy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwPzM4NjQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(1);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwP2NkMWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \*****************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(19);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjA/ZDM1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* exports provided: ReportingBaseVM */
/* exports used: ReportingBaseVM */
/*!*********************************!*\
  !*** ./Client/ts/ViewModels.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(/*! knockout */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(/*! ./Utils */ 1);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ReportingBaseVM; });\n\r\n\r\n\r\nvar ReportingBaseVM = (function () {\r\n    function ReportingBaseVM(name, url) {\r\n        var _this = this;\r\n        this.populateColumn = function (url) {\r\n            var self = _this;\r\n            __WEBPACK_IMPORTED_MODULE_0_jquery__[\"getJSON\"](url, function (data) {\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var item = data_1[_i];\r\n                    self.columns.push(item);\r\n                }\r\n                self.columns.sort();\r\n            });\r\n        };\r\n        this.removeFromSelectedColumns = function (item) {\r\n            _this.selectedColumns.remove(item);\r\n            _this.selectedColumns.sort();\r\n        };\r\n        this.addToSelectedColumns = function (item) {\r\n            if (_this.selectedColumns.indexOf(item) < 0) {\r\n                _this.selectedColumns.push(item);\r\n                _this.selectedColumns.sort();\r\n            }\r\n        };\r\n        this.name = name;\r\n        this.columns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.selectedColumns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.populateColumn(url);\r\n        this.modelName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__[\"a\" /* toPascal */])(this.name);\r\n    }\r\n    return ReportingBaseVM;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvVmlld01vZGVscy50cz83ODdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgdG9QYXNjYWwgfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcG9ydGluZ0Jhc2VWTSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtb2RlbE5hbWU6IHN0cmluZztcclxuICAgIGNvbHVtbnM6IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHN0cmluZz47XHJcbiAgICBzZWxlY3RlZENvbHVtbnM6IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PHN0cmluZz47XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNvbHVtbih1cmwpO1xyXG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gdG9QYXNjYWwodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZUNvbHVtbiA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29sdW1ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuY29sdW1ucy5zb3J0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbVNlbGVjdGVkQ29sdW1ucyA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5zLnNvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb1NlbGVjdGVkQ29sdW1ucyA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDb2x1bW5zLmluZGV4T2YoaXRlbSkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5zLnNvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL1ZpZXdNb2RlbHMudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdUJBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/expose-loader?$!./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"$\"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./jquery.js */ 9);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzPzdkZmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCIkXCJdID0gcmVxdWlyZShcIi0hQzpcXFxcVXNlcnNcXFxcYWxleGxcXFxcZ2l0XFxcXGNvZGVFeGFtcGxlc1xcXFxLbm9ja291dEV4YW1wbGVcXFxcS25vY2tvdXRFeGFtcGxlXFxcXG5vZGVfbW9kdWxlc1xcXFxleHBvc2UtbG9hZGVyXFxcXGluZGV4LmpzP2pRdWVyeSEuXFxcXGpxdWVyeS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXhwb3NlLWxvYWRlcj8kIS4vfi9leHBvc2UtbG9hZGVyP2pRdWVyeSEuL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

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
/* exports provided: ReportingController */
/* all exports used */
/*!********************************!*\
  !*** ./Client/ts/Reporting.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModels__ = __webpack_require__(/*! ./ViewModels */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(/*! ./Utils */ 1);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReportingController\", function() { return ReportingController; });\n//import * as $ from \"jquery\";\r\n//needed for jquery to be available on page\r\nvar $ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ 6);\r\n\r\n\r\n\r\n//page specific css here \r\n__webpack_require__(/*! ../css/site.css */ 7);\r\n($(function () {\r\n    var controller = new ReportingController();\r\n    var employeeColumnsVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Employee\", \"/reporting/getEmployeeColumns\");\r\n    var dataCodesVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Data Codes\", \"/reporting/getDataCodeColumns\");\r\n    var absenseVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Absense\", \"/reporting/getAbsenseColumns\");\r\n    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);\r\n    controller.init();\r\n    __WEBPACK_IMPORTED_MODULE_0_knockout__[\"applyBindings\"](controller);\r\n}));\r\nvar ReportingController = (function () {\r\n    function ReportingController() {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.setTitle();\r\n        };\r\n        this.next = function () {\r\n            _this.selectedIndex(_this.selectedIndex() + 1);\r\n            _this.setTitle();\r\n        };\r\n        this.previous = function () {\r\n            _this.selectedIndex(_this.selectedIndex() - 1);\r\n            _this.setTitle();\r\n        };\r\n        this.addViewModel = function () {\r\n            var vm = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                vm[_i] = arguments[_i];\r\n            }\r\n            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {\r\n                var item = vm_1[_a];\r\n                _this.vmArray.push(item);\r\n            }\r\n        };\r\n        this.submit = function () {\r\n            var data = {};\r\n            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {\r\n                var item = _a[_i];\r\n                var name_1 = item.modelName;\r\n                var arr = item.selectedColumns().map(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__[\"a\" /* toPascal */])(a); });\r\n                data[name_1] = arr;\r\n            }\r\n            $.post(\"/reporting/submit\", { columns: JSON.stringify(data) }, function (res) {\r\n                alert(res);\r\n            });\r\n        };\r\n        this.setTitle = function () {\r\n            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {\r\n                _this.title(_this.vmArray()[_this.selectedIndex()].name);\r\n            }\r\n            else {\r\n                _this.title(\"Review\");\r\n            }\r\n        };\r\n        this.selectedIndex = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](0);\r\n        this.vmArray = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observableArray\"]([]);\r\n        this.title = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n    }\r\n    return ReportingController;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUmVwb3J0aW5nLnRzP2MxNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuLy9uZWVkZWQgZm9yIGpxdWVyeSB0byBiZSBhdmFpbGFibGUgb24gcGFnZVxyXG5jb25zdCAkID0gcmVxdWlyZSgnZXhwb3NlLWxvYWRlcj8kIWV4cG9zZS1sb2FkZXI/alF1ZXJ5IWpxdWVyeScpO1xyXG5pbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgUmVwb3J0aW5nQmFzZVZNIH0gZnJvbSBcIi4vVmlld01vZGVsc1wiO1xyXG5pbXBvcnQgeyB0b1Bhc2NhbCB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG4vL3BhZ2Ugc3BlY2lmaWMgY3NzIGhlcmUgXHJcbnJlcXVpcmUoJy4uL2Nzcy9zaXRlLmNzcycpO1xyXG5cclxuKCQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgUmVwb3J0aW5nQ29udHJvbGxlcigpO1xyXG4gICAgbGV0IGVtcGxveWVlQ29sdW1uc1ZNID0gbmV3IFJlcG9ydGluZ0Jhc2VWTShcIkVtcGxveWVlXCIsIFwiL3JlcG9ydGluZy9nZXRFbXBsb3llZUNvbHVtbnNcIik7XHJcbiAgICBsZXQgZGF0YUNvZGVzVk0gPSBuZXcgUmVwb3J0aW5nQmFzZVZNKFwiRGF0YSBDb2Rlc1wiLCBcIi9yZXBvcnRpbmcvZ2V0RGF0YUNvZGVDb2x1bW5zXCIpO1xyXG4gICAgbGV0IGFic2Vuc2VWTSA9IG5ldyBSZXBvcnRpbmdCYXNlVk0oXCJBYnNlbnNlXCIsIFwiL3JlcG9ydGluZy9nZXRBYnNlbnNlQ29sdW1uc1wiKTtcclxuICAgIGNvbnRyb2xsZXIuYWRkVmlld01vZGVsKGVtcGxveWVlQ29sdW1uc1ZNLCBkYXRhQ29kZXNWTSwgYWJzZW5zZVZNKTtcclxuICAgIGNvbnRyb2xsZXIuaW5pdCgpO1xyXG4gICAga28uYXBwbHlCaW5kaW5ncyhjb250cm9sbGVyKTtcclxufSkpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcG9ydGluZ0NvbnRyb2xsZXIge1xyXG4gICAgdm1BcnJheTtcclxuICAgIHNlbGVjdGVkSW5kZXg7XHJcbiAgICB0aXRsZTtcclxuICAgIGpzb25Ub1N1Ym1pdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBrby5vYnNlcnZhYmxlKDApO1xyXG4gICAgICAgIHRoaXMudm1BcnJheSA9IGtvLm9ic2VydmFibGVBcnJheShbXSlcclxuICAgICAgICB0aGlzLnRpdGxlID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgoKSArIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KCkgLSAxKTtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVmlld01vZGVsID0gKC4uLnZtKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB2bSkge1xyXG4gICAgICAgICAgICB0aGlzLnZtQXJyYXkucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZtQXJyYXkoKSkge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGl0ZW0ubW9kZWxOYW1lO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gaXRlbS5zZWxlY3RlZENvbHVtbnMoKS5tYXAoYSA9PiB0b1Bhc2NhbChhKSk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSBhcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLnBvc3QoXCIvcmVwb3J0aW5nL3N1Ym1pdFwiLCB7IGNvbHVtbnM6IEpTT04uc3RyaW5naWZ5KGRhdGEpIH0sIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXgoKSA+PSAwICYmIHRoaXMuc2VsZWN0ZWRJbmRleCgpIDwgdGhpcy52bUFycmF5KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUodGhpcy52bUFycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4KCldLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZShcIlJldmlld1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL1JlcG9ydGluZy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQUNBO0FBQ0E7QUFDQTtBQTJDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"jQuery\"] = __webpack_require__(/*! -!./jquery.js */ 4);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzPzM5OGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJqUXVlcnlcIl0gPSByZXF1aXJlKFwiLSEuXFxcXGpxdWVyeS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXhwb3NlLWxvYWRlcj9qUXVlcnkhLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
//# sourceMappingURL=reporting.js.map