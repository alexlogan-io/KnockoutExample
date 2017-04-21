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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/knockout/build/output/knockout-latest.debug.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \******************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(4);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5kZWJ1Zy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwPzM4NjQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/*!**********************************************!*\
  !*** external "vendor_c016f18ee1b153e476b0" ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("module.exports = vendor_c016f18ee1b153e476b0;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFwiP2JiNWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjBcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* exports provided: toPascal */
/* exports used: toPascal */
/*!****************************!*\
  !*** ./Client/ts/Utils.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = toPascal;\nfunction toPascal(str) {\r\n    return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvVXRpbHMudHM/MWZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdG9QYXNjYWwoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxcdykoXFx3KikvZyxcclxuICAgICAgICBmdW5jdGlvbiAoZzAsIGcxLCBnMikgeyByZXR1cm4gZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaWVudC90cy9VdGlscy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(1);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwP2NkMWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMDE2ZjE4ZWUxYjE1M2U0NzZiMFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_c016f18ee1b153e476b0 ***!
  \*****************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(1))(19);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzAxNmYxOGVlMWIxNTNlNDc2YjA/ZDM1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MwMTZmMThlZTFiMTUzZTQ3NmIwXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* exports provided: AddNewColumn */
/* exports used: AddNewColumn */
/*!***********************************!*\
  !*** ./Client/ts/AddNewColumn.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReportingBaseVM__ = __webpack_require__(/*! ./ReportingBaseVM */ 6);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AddNewColumn; });\n\r\n\r\nvar AddNewColumn = (function () {\r\n    function AddNewColumn(reportingController) {\r\n        var _this = this;\r\n        this.toggleForm = function () {\r\n            _this.showForm() ? _this.showForm(false) : _this.showForm(true);\r\n        };\r\n        this.addColumn = function () {\r\n            _this.newColumns.push(_this.newColumnName());\r\n            _this.newColumnName(\"\");\r\n        };\r\n        this.submit = function () {\r\n            if (_this.title().length > 0 && _this.newColumns().length > 0) {\r\n                var newReportingVm = new __WEBPACK_IMPORTED_MODULE_1__ReportingBaseVM__[\"a\" /* ReportingBaseVM */](_this.title(), null, _this.newColumns());\r\n                _this.reportingController.addViewModel(newReportingVm);\r\n                _this.newColumns([]);\r\n                _this.title(\"\");\r\n            }\r\n        };\r\n        this.title = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n        this.newColumns = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observableArray\"]([]);\r\n        this.newColumnName = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n        this.showForm = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](false);\r\n        this.reportingController = reportingController;\r\n    }\r\n    return AddNewColumn;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvQWRkTmV3Q29sdW1uLnRzPzQyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IFJlcG9ydGluZ0Jhc2VWTSB9IGZyb20gXCIuL1JlcG9ydGluZ0Jhc2VWTVwiO1xyXG5pbXBvcnQgeyBSZXBvcnRpbmdDb250cm9sbGVyIH0gZnJvbSBcIi4vUmVwb3J0aW5nQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZE5ld0NvbHVtbiB7XHJcblxyXG4gICAgdGl0bGU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgbmV3Q29sdW1uczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuICAgIG5ld0NvbHVtbk5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgc2hvd0Zvcm06IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIHJlcG9ydGluZ0NvbnRyb2xsZXI6IFJlcG9ydGluZ0NvbnRyb2xsZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVwb3J0aW5nQ29udHJvbGxlcjogUmVwb3J0aW5nQ29udHJvbGxlcikge1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICB0aGlzLm5ld0NvbHVtbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgIHRoaXMubmV3Q29sdW1uTmFtZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVwb3J0aW5nQ29udHJvbGxlciA9IHJlcG9ydGluZ0NvbnRyb2xsZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93Rm9ybSgpID8gdGhpcy5zaG93Rm9ybShmYWxzZSkgOiB0aGlzLnNob3dGb3JtKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbHVtbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5ld0NvbHVtbnMucHVzaCh0aGlzLm5ld0NvbHVtbk5hbWUoKSk7XHJcbiAgICAgICAgdGhpcy5uZXdDb2x1bW5OYW1lKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy50aXRsZSgpLmxlbmd0aCA+IDAgJiYgdGhpcy5uZXdDb2x1bW5zKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSZXBvcnRpbmdWbSA9IG5ldyBSZXBvcnRpbmdCYXNlVk0odGhpcy50aXRsZSgpLCBudWxsLCB0aGlzLm5ld0NvbHVtbnMoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0aW5nQ29udHJvbGxlci5hZGRWaWV3TW9kZWwobmV3UmVwb3J0aW5nVm0pO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0NvbHVtbnMoW10pO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL0FkZE5ld0NvbHVtbi50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFRQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9CQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */
/* exports provided: ReportingBaseVM */
/* exports used: ReportingBaseVM */
/*!**************************************!*\
  !*** ./Client/ts/ReportingBaseVM.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(/*! knockout */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(/*! ./Utils */ 2);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ReportingBaseVM; });\n\r\n\r\n\r\nvar ReportingBaseVM = (function () {\r\n    function ReportingBaseVM(name, url, columns) {\r\n        var _this = this;\r\n        this.populateColumn = function (url) {\r\n            var self = _this;\r\n            __WEBPACK_IMPORTED_MODULE_0_jquery__[\"getJSON\"](url, function (data) {\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var item = data_1[_i];\r\n                    self.columns.push(item);\r\n                }\r\n                self.columns.sort();\r\n            });\r\n        };\r\n        this.removeFromSelectedColumns = function (item) {\r\n            _this.selectedColumns.remove(item);\r\n            _this.selectedColumns.sort();\r\n        };\r\n        this.addToSelectedColumns = function (item) {\r\n            if (_this.selectedColumns.indexOf(item) < 0) {\r\n                _this.selectedColumns.push(item);\r\n                _this.selectedColumns.sort();\r\n            }\r\n        };\r\n        this.name = name;\r\n        this.selectedColumns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.modelName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Utils__[\"a\" /* toPascal */])(this.name);\r\n        if (url) {\r\n            this.columns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n            this.populateColumn(url);\r\n        }\r\n        else {\r\n            this.columns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"](columns);\r\n        }\r\n    }\r\n    return ReportingBaseVM;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUmVwb3J0aW5nQmFzZVZNLnRzPzU2Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyB0b1Bhc2NhbCB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0aW5nQmFzZVZNIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1vZGVsTmFtZTogc3RyaW5nO1xyXG4gICAgY29sdW1uczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuICAgIHNlbGVjdGVkQ29sdW1uczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHVybD86IHN0cmluZywgY29sdW1ucz86IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbE5hbWUgPSB0b1Bhc2NhbCh0aGlzLm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVDb2x1bW4odXJsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoY29sdW1ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBvcHVsYXRlQ29sdW1uID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb2x1bW5zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5jb2x1bW5zLnNvcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tU2VsZWN0ZWRDb2x1bW5zID0gKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucy5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMuc29ydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvU2VsZWN0ZWRDb2x1bW5zID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENvbHVtbnMuaW5kZXhPZihpdGVtKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMuc29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGllbnQvdHMvUmVwb3J0aW5nQmFzZVZNLnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/* exports provided: ReportingController */
/* exports used: ReportingController */
/*!******************************************!*\
  !*** ./Client/ts/ReportingController.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utils__ = __webpack_require__(/*! ./Utils */ 2);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ReportingController; });\n\r\n\r\nvar ReportingController = (function () {\r\n    function ReportingController() {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.setTitle();\r\n        };\r\n        this.next = function () {\r\n            _this.selectedIndex(_this.selectedIndex() + 1);\r\n            _this.setTitle();\r\n        };\r\n        this.previous = function () {\r\n            _this.selectedIndex(_this.selectedIndex() - 1);\r\n            _this.setTitle();\r\n        };\r\n        this.addViewModel = function () {\r\n            var vm = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                vm[_i] = arguments[_i];\r\n            }\r\n            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {\r\n                var item = vm_1[_a];\r\n                _this.vmArray.push(item);\r\n            }\r\n        };\r\n        this.submit = function () {\r\n            var data = {};\r\n            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {\r\n                var item = _a[_i];\r\n                var name_1 = item.modelName;\r\n                var arr = item.selectedColumns().map(function (a) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Utils__[\"a\" /* toPascal */])(a); });\r\n                data[name_1] = arr;\r\n            }\r\n            $.post(\"/reporting/submit\", { columns: JSON.stringify(data) }, function (res) {\r\n                alert(res);\r\n            });\r\n        };\r\n        this.setTitle = function () {\r\n            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {\r\n                _this.title(_this.vmArray()[_this.selectedIndex()].name);\r\n            }\r\n            else {\r\n                _this.title(\"Review\");\r\n            }\r\n        };\r\n        this.selectedIndex = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](0);\r\n        this.vmArray = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observableArray\"]([]);\r\n        this.title = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n    }\r\n    return ReportingController;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUmVwb3J0aW5nQ29udHJvbGxlci50cz8xMGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyB0b1Bhc2NhbCB9IGZyb20gXCIuL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0aW5nQ29udHJvbGxlciB7XHJcbiAgICB2bUFycmF5O1xyXG4gICAgc2VsZWN0ZWRJbmRleDtcclxuICAgIHRpdGxlO1xyXG4gICAganNvblRvU3VibWl0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy52bUFycmF5ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCgpICsgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgoKSAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWaWV3TW9kZWwgPSAoLi4udm0pID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHZtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudm1BcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudm1BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5tb2RlbE5hbWU7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBpdGVtLnNlbGVjdGVkQ29sdW1ucygpLm1hcChhID0+IHRvUGFzY2FsKGEpKTtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IGFycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQucG9zdChcIi9yZXBvcnRpbmcvc3VibWl0XCIsIHsgY29sdW1uczogSlNPTi5zdHJpbmdpZnkoZGF0YSkgfSwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBhbGVydChyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCgpID49IDAgJiYgdGhpcy5zZWxlY3RlZEluZGV4KCkgPCB0aGlzLnZtQXJyYXkoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSh0aGlzLnZtQXJyYXkoKVt0aGlzLnNlbGVjdGVkSW5kZXgoKV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlKFwiUmV2aWV3XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGllbnQvdHMvUmVwb3J0aW5nQ29udHJvbGxlci50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0FBQ0E7QUFDQTtBQUNBO0FBMkNBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/expose-loader?$!./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"$\"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./jquery.js */ 11);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzPzdkZmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCIkXCJdID0gcmVxdWlyZShcIi0hQzpcXFxcVXNlcnNcXFxcYWxleGxcXFxcZ2l0XFxcXGNvZGVFeGFtcGxlc1xcXFxLbm9ja291dEV4YW1wbGVcXFxcS25vY2tvdXRFeGFtcGxlXFxcXG5vZGVfbW9kdWxlc1xcXFxleHBvc2UtbG9hZGVyXFxcXGluZGV4LmpzP2pRdWVyeSEuXFxcXGpxdWVyeS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXhwb3NlLWxvYWRlcj8kIS4vfi9leHBvc2UtbG9hZGVyP2pRdWVyeSEuL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./Client/css/site.css ***!
  \*****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9jc3Mvc2l0ZS5jc3M/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50L2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./Client/ts/app.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ReportingController__ = __webpack_require__(/*! ./ReportingController */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ReportingBaseVM__ = __webpack_require__(/*! ./ReportingBaseVM */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AddNewColumn__ = __webpack_require__(/*! ./AddNewColumn */ 5);\nvar $ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ 8);\r\n\r\n\r\n\r\n\r\n//page specific css here \r\n__webpack_require__(/*! ../css/site.css */ 9);\r\n($(function () {\r\n    var controller = new __WEBPACK_IMPORTED_MODULE_1__ReportingController__[\"a\" /* ReportingController */]();\r\n    var employeeColumnsVM = new __WEBPACK_IMPORTED_MODULE_2__ReportingBaseVM__[\"a\" /* ReportingBaseVM */](\"Employee\", \"/reporting/getEmployeeColumns\");\r\n    var dataCodesVM = new __WEBPACK_IMPORTED_MODULE_2__ReportingBaseVM__[\"a\" /* ReportingBaseVM */](\"Data Codes\", \"/reporting/getDataCodeColumns\");\r\n    var absenseVM = new __WEBPACK_IMPORTED_MODULE_2__ReportingBaseVM__[\"a\" /* ReportingBaseVM */](\"Absense\", \"/reporting/getAbsenseColumns\");\r\n    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);\r\n    controller.init();\r\n    __WEBPACK_IMPORTED_MODULE_0_knockout__[\"applyBindings\"](controller, document.getElementById(\"employeeColumns\"));\r\n    var addNewColumn = new __WEBPACK_IMPORTED_MODULE_3__AddNewColumn__[\"a\" /* AddNewColumn */](controller);\r\n    __WEBPACK_IMPORTED_MODULE_0_knockout__[\"applyBindings\"](addNewColumn, document.getElementById(\"addNewColumn\"));\r\n}));\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2xpZW50L3RzL2FwcC50cz9lMzJlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICQgPSByZXF1aXJlKCdleHBvc2UtbG9hZGVyPyQhZXhwb3NlLWxvYWRlcj9qUXVlcnkhanF1ZXJ5Jyk7XHJcbmltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyBSZXBvcnRpbmdDb250cm9sbGVyIH0gZnJvbSBcIi4vUmVwb3J0aW5nQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBSZXBvcnRpbmdCYXNlVk0gfSBmcm9tIFwiLi9SZXBvcnRpbmdCYXNlVk1cIjtcclxuaW1wb3J0IHsgQWRkTmV3Q29sdW1uIH0gZnJvbSBcIi4vQWRkTmV3Q29sdW1uXCI7XHJcbmltcG9ydCB7IHRvUGFzY2FsIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8vcGFnZSBzcGVjaWZpYyBjc3MgaGVyZSBcclxucmVxdWlyZSgnLi4vY3NzL3NpdGUuY3NzJyk7XHJcblxyXG4oJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29udHJvbGxlciA9IG5ldyBSZXBvcnRpbmdDb250cm9sbGVyKCk7XHJcbiAgICBsZXQgZW1wbG95ZWVDb2x1bW5zVk0gPSBuZXcgUmVwb3J0aW5nQmFzZVZNKFwiRW1wbG95ZWVcIiwgXCIvcmVwb3J0aW5nL2dldEVtcGxveWVlQ29sdW1uc1wiKTtcclxuICAgIGxldCBkYXRhQ29kZXNWTSA9IG5ldyBSZXBvcnRpbmdCYXNlVk0oXCJEYXRhIENvZGVzXCIsIFwiL3JlcG9ydGluZy9nZXREYXRhQ29kZUNvbHVtbnNcIik7XHJcbiAgICBsZXQgYWJzZW5zZVZNID0gbmV3IFJlcG9ydGluZ0Jhc2VWTShcIkFic2Vuc2VcIiwgXCIvcmVwb3J0aW5nL2dldEFic2Vuc2VDb2x1bW5zXCIpO1xyXG4gICAgY29udHJvbGxlci5hZGRWaWV3TW9kZWwoZW1wbG95ZWVDb2x1bW5zVk0sIGRhdGFDb2Rlc1ZNLCBhYnNlbnNlVk0pO1xyXG4gICAgY29udHJvbGxlci5pbml0KCk7XHJcbiAgICBrby5hcHBseUJpbmRpbmdzKGNvbnRyb2xsZXIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1wbG95ZWVDb2x1bW5zXCIpKTtcclxuXHJcbiAgICBsZXQgYWRkTmV3Q29sdW1uID0gbmV3IEFkZE5ld0NvbHVtbihjb250cm9sbGVyKTtcclxuICAgIGtvLmFwcGx5QmluZGluZ3MoYWRkTmV3Q29sdW1uLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld0NvbHVtblwiKSk7XHJcbn0pKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL2FwcC50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"jQuery\"] = __webpack_require__(/*! -!./jquery.js */ 4);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qcz8zOThiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wialF1ZXJ5XCJdID0gcmVxdWlyZShcIi0hLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/alF1ZXJ5IS4vfi9qcXVlcnkvZGlzdC9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map