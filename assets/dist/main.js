/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./assets/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ \"./assets/js/table.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Require main style file here for concatenation.\n\n\nvar $ = window.jQuery;\n\nvar DustPressTable =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Constructor\n   * @memberof DustPressTable\n   */\n  function DustPressTable() {\n    _classCallCheck(this, DustPressTable);\n\n    this.findTables();\n  }\n  /**\n   * Find the DustPressTable tables from the document\n   *\n   * @memberof DustPressTable\n   */\n\n\n  _createClass(DustPressTable, [{\n    key: \"findTables\",\n    value: function findTables() {\n      var _this = this;\n\n      var tables = $('.dpt-table');\n      this.tables = [];\n      tables.each(function (index, table) {\n        _this.tables.push(new _table__WEBPACK_IMPORTED_MODULE_1__[\"default\"](table));\n      });\n    }\n  }]);\n\n  return DustPressTable;\n}();\n\n$(document).ready(function () {\n  new DustPressTable();\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/pagination.js":
/*!*********************************!*\
  !*** ./assets/js/pagination.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __ = wp.i18n.__;\n\nvar Pagination =\n/*#__PURE__*/\nfunction () {\n  function Pagination(currentPage, totalPages) {\n    _classCallCheck(this, Pagination);\n\n    this.pages = [];\n    this.currentPage = currentPage;\n    this.totalPages = totalPages;\n    this.generate();\n  }\n\n  _createClass(Pagination, [{\n    key: \"generate\",\n    value: function generate() {\n      var neighbours = 3;\n      var visible = 1 + 2 * neighbours;\n      var prevPage = this.currentPage - 1;\n      var nextPage = this.currentPage + 1;\n      var hellipStart = '';\n      var hellipEnd = '';\n      var onFirstPage = false;\n      var onLastPage = false; // On the first page.\n\n      if (this.currentPage === 1) {\n        onFirstPage = true;\n        var max = this.totalPages < visible ? this.totalPages : visible;\n\n        for (var i = 0; i < max; i++) {\n          if (i + 1 > this.totalPages) {\n            hellipEnd = '';\n            break;\n          }\n\n          this.pages[i] = {};\n          this.pages[i].page = i + 1;\n\n          if (this.currentPage === this.pages[i].page) {\n            this.pages[i].active = true;\n          }\n        }\n      } else if (this.currentPage === this.totalPages) {\n        hellipEnd = '';\n        onLastPage = true;\n\n        if (this.totalPages <= visible) {\n          hellipStart = '';\n\n          for (var _i = 0; _i < this.totalPages; _i++) {\n            this.pages[_i] = {};\n            this.pages[_i].page = _i + 1;\n\n            if (this.currentPage === this.pages[_i].page) {\n              this.pages[_i].active = true;\n            }\n          }\n        } else {\n          var start = this.totalPages - visible + 1;\n\n          for (var _i2 = start; _i2 <= this.totalPages; _i2++) {\n            this.pages[_i2] = {};\n            this.pages[_i2].page = _i2;\n\n            if (this.currentPage === this.pages[_i2].page) {\n              this.pages[_i2].active = true;\n            }\n          }\n        }\n      } else {\n        var _start = this.currentPage - neighbours;\n\n        var end = this.currentPage + neighbours;\n\n        if (_start <= 1) {\n          _start = 1;\n          hellipStart = '';\n        }\n\n        if (end >= this.totalPages) {\n          end = this.totalPages;\n          _start = _start - (this.currentPage + neighbours - this.totalPages);\n\n          if (_start <= 1) {\n            _start = 1;\n            hellipStart = '';\n          }\n\n          hellipEnd = '';\n        } // Display max number of pages.\n\n\n        var maxPages = _start + (visible - 1);\n\n        if (maxPages <= this.totalPages) {\n          for (var _i3 = _start; _i3 <= maxPages; _i3++) {\n            this.pages[_i3] = {};\n            this.pages[_i3].page = _i3;\n\n            if (this.currentPage === this.pages[_i3].page) {\n              this.pages[_i3].active = true;\n            }\n          }\n        } else {\n          for (var _i4 = _start; _i4 <= end; _i4++) {\n            this.pages[_i4] = {};\n            this.pages[_i4].page = _i4;\n\n            if (this.currentPage === this.pages[_i4].page) {\n              this.pages[_i4].active = true;\n            }\n          }\n        }\n      }\n\n      if (prevPage === 0) {\n        prevPage = '';\n      }\n\n      if (nextPage > this.totalPages) {\n        nextPage = '';\n      }\n      /*eslint-disable */\n\n\n      this.on_first_page = onFirstPage;\n      this.on_last_page = onLastPage;\n      this.first_page = 1;\n      this.last_page = this.totalPages;\n      this.hellip_start = hellipStart;\n      this.hellip_end = hellipEnd;\n      this.next_page = nextPage;\n      this.prev_page = prevPage;\n      this.hash = '';\n      this.page_link = '#';\n      /*eslint-enable */\n\n      this.S = {\n        start: __('Start', 'dustpress'),\n        next: __('Next', 'dustpress'),\n        prev: __('Previous', 'dustpress'),\n        end: __('End', 'dustpress')\n      };\n    }\n  }]);\n\n  return Pagination;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/pagination.js?");

/***/ }),

/***/ "./assets/js/table.js":
/*!****************************!*\
  !*** ./assets/js/table.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Table; });\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ \"./assets/js/pagination.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar $ = window.jQuery;\nvar dust = window.dust;\n/**\n *Table instance\n *\n * @export\n * @class Table\n */\n\nvar Table =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Constructor\n   * @param {*} el Element from which to create to table.\n   * @memberof Table\n   */\n  function Table(el) {\n    _classCallCheck(this, Table);\n\n    this.templates = {};\n    this.id = $(el).attr('id');\n    this.el = el;\n    this.dataEl = $(el).find('.dpt-table-data');\n    this.endpoint = $(el).data('endpoint');\n    this.perPage = $(el).data('perpage');\n    this.page = 1; // Dust templates\n\n    this.templates.table = dust.loadSource(__webpack_require__(/*! ../../partials/dpt-table-inner.dust */ \"./partials/dpt-table-inner.dust\"));\n    this.templates.pagination = dust.loadSource(__webpack_require__(/*! ../../partials/dpt-pagination.dust */ \"./partials/dpt-pagination.dust\"));\n    this.render({\n      page: 1\n    });\n    this.bindEvents();\n  }\n  /**\n   * Render the table.\n   *\n   * @param {*} args Arguments for the rendering.\n   * @memberof Table\n   */\n\n\n  _createClass(Table, [{\n    key: \"render\",\n    value: function render(args) {\n      var _this = this;\n\n      var page = args.page || 1;\n\n      if (typeof dp === 'function') {\n        dp(this.endpoint, {\n          tidy: true,\n          args: {\n            'page': page,\n            'perPage': this.perPage\n          }\n        }).then(function (data) {\n          var renderData = data.success[Object.keys(data.success)[0]];\n          console.log(renderData.total, _this.perPage, parseInt(renderData.total / _this.perPage));\n          renderData.pagination = new _pagination__WEBPACK_IMPORTED_MODULE_0__[\"default\"](page, parseInt(renderData.total / _this.perPage));\n          dust.render(_this.templates.table, renderData, function (err, out) {\n            $(_this.dataEl).html(out);\n          });\n        })[\"catch\"](function (error) {\n          console.error(error);\n        });\n      } else {\n        console.error('No DustPress.js present');\n      }\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this2 = this;\n\n      this.dataEl.on('click', 'a.paginate.clickable', function (e) {\n        var page = $(e.target).data('page');\n\n        _this2.render({\n          page: page\n        });\n      });\n    }\n  }]);\n\n  return Table;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/table.js?");

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/main.scss?");

/***/ }),

/***/ "./partials/dpt-pagination.dust":
/*!**************************************!*\
  !*** ./partials/dpt-pagination.dust ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function(dust){dust.register(\"dpt-pagination\",body_0);function body_0(chk,ctx){return chk.x(ctx.get([\"pages\"], false),ctx,{\"block\":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(\"<div class=\\\"pagination-centered\\\"><ul class=\\\"pagination\\\" role=\\\"menubar\\\" aria-label=\\\"Sivutus\\\"><li class=\\\"arrow arrow-first arrow-left\").x(ctx.get([\"on_first_page\"], false),ctx,{\"block\":body_2},{}).w(\"\\\" aria-disabled=\\\"true\\\"><a class=\\\"paginate\\\" href=\\\"\").f(ctx.get([\"page_link\"], false),ctx,\"h\").w(\"1\").f(ctx.get([\"hash\"], false),ctx,\"h\").w(\"\\\" data-page=\\\"\").f(ctx.get([\"first_page\"], false),ctx,\"h\").w(\"\\\">&laquo; \").f(ctx.getPath(false, [\"S\",\"start\"]),ctx,\"h\").w(\"</a></li>\").x(ctx.get([\"prev_page\"], false),ctx,{\"block\":body_3},{}).x(ctx.get([\"hellip_start\"], false),ctx,{\"block\":body_4},{}).s(ctx.get([\"pages\"], false),ctx,{\"block\":body_5},{}).x(ctx.get([\"hellip_end\"], false),ctx,{\"block\":body_8},{}).x(ctx.get([\"next_page\"], false),ctx,{\"block\":body_9},{}).w(\"<li class=\\\"arrow arrow-last arrow-right\").x(ctx.get([\"on_last_page\"], false),ctx,{\"block\":body_10},{}).w(\"\\\" aria-disabled=\\\"true\\\"><a class=\\\"paginate\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"last_page\"], false),ctx,\"h\").w(\"\\\">\").f(ctx.getPath(false, [\"S\",\"end\"]),ctx,\"h\").w(\" &raquo;</a></li></ul></div>\");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(\" unavailable not-used\");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(\"<li class=\\\"arrow arrow-left\\\"><a class=\\\"paginate\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"prev_page\"], false),ctx,\"h\").w(\"\\\">&laquo; \").f(ctx.getPath(false, [\"S\",\"prev\"]),ctx,\"h\").w(\"</a></li><li class=\\\"arrow arrow-left-mobile\\\"><a class=\\\"paginate\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"prev_page\"], false),ctx,\"h\").w(\"\\\">&laquo;</a></li>\");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w(\"<li class=\\\"unavailable\\\" aria-disabled=\\\"true\\\"><a class=\\\"paginate hellip\\\" href=\\\"#\\\">&hellip;</a></li>\");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w(\"<li \").x(ctx.get([\"active\"], false),ctx,{\"block\":body_6},{}).w(\"><a class=\\\"paginate\").nx(ctx.get([\"active\"], false),ctx,{\"block\":body_7},{}).w(\"\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"page\"], false),ctx,\"h\").w(\"\\\">\").f(ctx.get([\"page\"], false),ctx,\"h\").w(\"</a></li>\");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w(\"class=\\\"current unavailable\\\"\");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w(\" clickable\");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w(\"<li class=\\\"unavailable\\\" aria-disabled=\\\"true\\\"><a class=\\\"paginate hellip\\\" href=\\\"#\\\">&hellip;</a></li>\");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w(\"<li class=\\\"arrow arrow-right\\\"><a class=\\\"paginate\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"next_page\"], false),ctx,\"h\").w(\"\\\">\").f(ctx.getPath(false, [\"S\",\"next\"]),ctx,\"h\").w(\" &raquo;</a></li><li class=\\\"arrow arrow-right-mobile\\\"><a class=\\\"paginate\\\" href=\\\"#\\\" data-page=\\\"\").f(ctx.get([\"next_page\"], false),ctx,\"h\").w(\"\\\">&raquo;</a></li>\");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w(\" unavailable not-used\");}body_10.__dustBody=!0;return body_0}(dust));\n\n//# sourceURL=webpack:///./partials/dpt-pagination.dust?");

/***/ }),

/***/ "./partials/dpt-table-inner.dust":
/*!***************************************!*\
  !*** ./partials/dpt-table-inner.dust ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function(dust){dust.register(\"dpt-table-inner\",body_0);function body_0(chk,ctx){return chk.w(\"<table><thead><tr>\").s(ctx.get([\"columns\"], false),ctx,{\"block\":body_1},{}).w(\"</tr></thead><tbody>\").s(ctx.get([\"data\"], false),ctx,{\"block\":body_2},{}).w(\"</tbody></table>\").s(ctx.get([\"pagination\"], false),ctx,{\"block\":body_4},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(\"<th data-key=\\\"\").f(ctx.get([\"key\"], false),ctx,\"h\").w(\"\\\">\").f(ctx.get([\"value\"], false),ctx,\"h\").w(\"</th>\");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(\"<tr>\").s(ctx.getPath(true, []),ctx,{\"block\":body_3},{}).w(\"</tr>\");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(\"<td>\").f(ctx.getPath(true, []),ctx,\"h\").w(\"</td>\");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.nx(ctx.get([\"template\"], false),ctx,{\"else\":body_5,\"block\":body_7},{});}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.p(body_6,ctx,ctx,{});}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.f(ctx.get([\"template\"], false),ctx,\"h\");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.p(\"dpt-pagination\",ctx,ctx,{});}body_7.__dustBody=!0;return body_0}(dust));\n\n//# sourceURL=webpack:///./partials/dpt-table-inner.dust?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./assets/js/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/miika/Work/Pipeline/kivakoulu/web/app/plugins/dustpress-table/assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/main.js?");

/***/ })

/******/ });