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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __ = wp.i18n.__;\n\nvar Pagination =\n/*#__PURE__*/\nfunction () {\n  function Pagination(currentPage, totalPages) {\n    _classCallCheck(this, Pagination);\n\n    this.pages = [];\n    this.currentPage = currentPage;\n    this.totalPages = totalPages;\n    this.generate();\n  }\n\n  _createClass(Pagination, [{\n    key: \"generate\",\n    value: function generate() {\n      var neighbours = 3;\n      var visible = 1 + 2 * neighbours;\n      var prevPage = this.currentPage - 1;\n      var nextPage = this.currentPage + 1;\n      var hellipStart = '';\n      var hellipEnd = '';\n      var onFirstPage = false;\n      var onLastPage = false; // On the first page.\n\n      if (this.currentPage === 1) {\n        onFirstPage = true;\n        var max = this.totalPages < visible ? this.totalPages : visible;\n\n        for (var i = 0; i < max; i++) {\n          if (i + 1 > this.totalPages) {\n            hellipEnd = '';\n            break;\n          }\n\n          this.pages[i] = {};\n          this.pages[i].page = i + 1;\n\n          if (this.currentPage === this.pages[i].page) {\n            this.pages[i].active = true;\n          }\n        } // On the last page\n\n      } else if (this.currentPage === this.totalPages) {\n        hellipEnd = '';\n        onLastPage = true;\n\n        if (this.totalPages <= visible) {\n          hellipStart = '';\n\n          for (var _i = 0; _i < this.totalPages; _i++) {\n            this.pages[_i] = {};\n            this.pages[_i].page = _i + 1;\n\n            if (this.currentPage === this.pages[_i].page) {\n              this.pages[_i].active = true;\n            }\n          }\n        } else {\n          var start = this.totalPages - visible + 1;\n\n          for (var _i2 = start; _i2 <= this.totalPages; _i2++) {\n            this.pages[_i2] = {};\n            this.pages[_i2].page = _i2;\n\n            if (this.currentPage === this.pages[_i2].page) {\n              this.pages[_i2].active = true;\n            }\n          }\n        } // Any other page\n\n      } else {\n        var _start = this.currentPage - neighbours;\n\n        var end = this.currentPage + neighbours;\n\n        if (_start <= 1) {\n          _start = 1;\n          hellipStart = '';\n        }\n\n        if (end >= this.totalPages) {\n          end = this.totalPages;\n          _start = _start - (this.currentPage + neighbours - this.totalPages);\n\n          if (_start <= 1) {\n            _start = 1;\n            hellipStart = '';\n          }\n\n          hellipEnd = '';\n        } // Display max number of pages.\n\n\n        var maxPages = _start + (visible - 1);\n\n        if (maxPages <= this.totalPages) {\n          for (var _i3 = _start; _i3 <= maxPages; _i3++) {\n            this.pages[_i3] = {};\n            this.pages[_i3].page = _i3;\n\n            if (this.currentPage === this.pages[_i3].page) {\n              this.pages[_i3].active = true;\n            }\n          }\n        } else {\n          for (var _i4 = _start; _i4 <= end; _i4++) {\n            this.pages[_i4] = {};\n            this.pages[_i4].page = _i4;\n\n            if (this.currentPage === this.pages[_i4].page) {\n              this.pages[_i4].active = true;\n            }\n          }\n        }\n      }\n\n      if (prevPage === 0) {\n        prevPage = '';\n      }\n\n      if (nextPage > this.totalPages) {\n        nextPage = '';\n      }\n      /*eslint-disable */\n\n\n      this.on_first_page = onFirstPage;\n      this.on_last_page = onLastPage;\n      this.first_page = 1;\n      this.last_page = this.totalPages;\n      this.hellip_start = hellipStart;\n      this.hellip_end = hellipEnd;\n      this.next_page = nextPage;\n      this.prev_page = prevPage;\n      this.hash = '';\n      this.page_link = '#';\n      /*eslint-enable */\n\n      this.S = {\n        start: __('Start', 'dustpress'),\n        next: __('Next', 'dustpress'),\n        prev: __('Previous', 'dustpress'),\n        end: __('End', 'dustpress')\n      };\n    }\n  }]);\n\n  return Pagination;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/pagination.js?");

/***/ }),

/***/ "./assets/js/table.js":
/*!****************************!*\
  !*** ./assets/js/table.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Table; });\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ \"./assets/js/pagination.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar $ = window.jQuery;\nvar dust = window.dust;\n/**\n *Table instance\n *\n * @export\n * @class Table\n */\n\nvar Table =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Constructor\n   * @param {*} el Element from which to create to table.\n   * @memberof Table\n   */\n  function Table(el) {\n    _classCallCheck(this, Table);\n\n    this.templates = {};\n    this.initial = false;\n    this.id = $(el).data('id');\n    this.el = el;\n    this.dataEl = $(el).find('.dpt-table-data');\n    this.filterEl = $(el).find('.dpt-table-filters');\n    this.searchEl = $(el).find('.dpt-table-search');\n    this.config = window['dptConfig_' + this.id];\n    this.endpoint = this.config.data;\n    this.perPage = this.config.per_page;\n    this.config.filters.map(function (filter) {\n      if (typeof filter.options !== 'string') {\n        var handledOptions = [];\n\n        for (var _i = 0, _Object$entries = Object.entries(filter.options); _i < _Object$entries.length; _i++) {\n          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n              key = _Object$entries$_i[0],\n              value = _Object$entries$_i[1];\n\n          handledOptions.push({\n            key: key,\n            value: value\n          });\n        }\n\n        filter.options = handledOptions;\n      } else {\n        filter.endpoint = filter.options;\n        filter.options = [];\n      }\n\n      return filter;\n    });\n    this.page = 1;\n    this.filters = {}; // Dust templates\n\n    this.templates.table = dust.loadSource(window.dptTemplates && window.dptTemplates.table || __webpack_require__(/*! ../../partials/dpt-table-inner.dust */ \"./partials/dpt-table-inner.dust\"));\n    this.templates.pagination = dust.loadSource(window.dptTemplates && window.dptTemplates.pagination || __webpack_require__(/*! ../../partials/dpt-pagination.dust */ \"./partials/dpt-pagination.dust\"));\n    this.templates.filterWrapper = dust.loadSource(window.dptTemplates && window.dptTemplates.filterWrapper || __webpack_require__(/*! ../../partials/dpt-filter-wrapper.dust */ \"./partials/dpt-filter-wrapper.dust\"));\n    this.templates.filterSelect = dust.loadSource(window.dptTemplates && window.dptTemplates.filterSelect || __webpack_require__(/*! ../../partials/dpt-filter-select.dust */ \"./partials/dpt-filter-select.dust\"));\n    this.templates.filterCheckbox = dust.loadSource(window.dptTemplates && window.dptTemplates.filterCheckbox || __webpack_require__(/*! ../../partials/dpt-filter-checkbox.dust */ \"./partials/dpt-filter-checkbox.dust\"));\n    this.renderFilters();\n    this.render();\n    this.bindEvents();\n  }\n  /**\n   * Render the table.\n   *\n   * @param {*} args Arguments for the rendering.\n   * @memberof Table\n   */\n\n\n  _createClass(Table, [{\n    key: \"render\",\n    value: function () {\n      var _render = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2(args) {\n        var _this = this;\n\n        var defaults, dpArgs;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.getFilterValues();\n                defaults = {\n                  page: this.page,\n                  perPage: this.perPage,\n                  filters: this.filters,\n                  search: this.search\n                };\n                dpArgs = Object.assign(defaults, args);\n\n                if (typeof dp === 'function') {\n                  dp(this.endpoint, {\n                    tidy: true,\n                    args: dpArgs\n                  }).then(\n                  /*#__PURE__*/\n                  function () {\n                    var _ref = _asyncToGenerator(\n                    /*#__PURE__*/\n                    regeneratorRuntime.mark(function _callee(data) {\n                      var renderData, handledColumns, _i2, _Object$entries2, _Object$entries2$_i, key, value;\n\n                      return regeneratorRuntime.wrap(function _callee$(_context) {\n                        while (1) {\n                          switch (_context.prev = _context.next) {\n                            case 0:\n                              renderData = data.success[Object.keys(data.success)[0]];\n                              renderData.pagination = new _pagination__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_this.page, parseInt(renderData.total / _this.perPage));\n                              handledColumns = [];\n\n                              for (_i2 = 0, _Object$entries2 = Object.entries(renderData.columns); _i2 < _Object$entries2.length; _i2++) {\n                                _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];\n                                handledColumns.push({\n                                  key: key,\n                                  value: value\n                                });\n                              }\n\n                              renderData.columns = handledColumns;\n                              dust.render(_this.templates.table, _this.clone(renderData), function (err, out) {\n                                if (err) {\n                                  console.err(err);\n                                } else {\n                                  $(_this.dataEl).html(out);\n                                }\n                              });\n\n                            case 6:\n                            case \"end\":\n                              return _context.stop();\n                          }\n                        }\n                      }, _callee);\n                    }));\n\n                    return function (_x2) {\n                      return _ref.apply(this, arguments);\n                    };\n                  }())[\"catch\"](function (error) {\n                    console.error(error);\n                  });\n                } else {\n                  console.error('No DustPress.js present');\n                }\n\n              case 4:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function render(_x) {\n        return _render.apply(this, arguments);\n      }\n\n      return render;\n    }()\n  }, {\n    key: \"renderFilters\",\n    value: function () {\n      var _renderFilters = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee3() {\n        var _this2 = this;\n\n        var _loop, index;\n\n        return regeneratorRuntime.wrap(function _callee3$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (!this.initial) {\n                  this.initFilters();\n                }\n\n                _loop =\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _loop(index) {\n                  var filter, optionArgs, disabled, dependValue, dIndex, _dependValue, options, handledOptions, _i3, _Object$entries3, _Object$entries3$_i, key, value, template;\n\n                  return regeneratorRuntime.wrap(function _loop$(_context3) {\n                    while (1) {\n                      switch (_context3.prev = _context3.next) {\n                        case 0:\n                          filter = _this2.config.filters[index];\n\n                          if (!(typeof filter.endpoint !== 'undefined')) {\n                            _context3.next = 17;\n                            break;\n                          }\n\n                          optionArgs = {\n                            tidy: true\n                          };\n                          disabled = false;\n\n                          if (filter.depends) {\n                            if (typeof filter.depends === 'string') {\n                              dependValue = _this2.filterEl.find('select[name=\"' + filter.depends + '\"]').find('option:selected').val();\n\n                              if (!dependValue) {\n                                disabled = true;\n                              } else {\n                                optionArgs[filter.depends] = dependValue;\n                              }\n                            } else if (_typeof(filter.depends) === 'object') {\n                              for (dIndex in filter.depends) {\n                                _dependValue = _this2.filterEl.find('select[name=\"' + filter.depends[dIndex] + '\"]').find('option:selected').val();\n\n                                if (!_dependValue) {\n                                  disabled = true;\n                                } else {\n                                  optionArgs[filter.depends[dIndex]] = _dependValue;\n                                }\n                              }\n                            }\n                          }\n\n                          if (!disabled) {\n                            _context3.next = 9;\n                            break;\n                          }\n\n                          _this2.config.filters[index].disabled = true;\n                          _context3.next = 17;\n                          break;\n\n                        case 9:\n                          _context3.next = 11;\n                          return dp(filter.endpoint, optionArgs);\n\n                        case 11:\n                          options = _context3.sent;\n                          options = options.success[Object.keys(options.success)[0]];\n                          handledOptions = [];\n\n                          for (_i3 = 0, _Object$entries3 = Object.entries(options); _i3 < _Object$entries3.length; _i3++) {\n                            _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2), key = _Object$entries3$_i[0], value = _Object$entries3$_i[1];\n                            handledOptions.push({\n                              key: key,\n                              value: value\n                            });\n                          }\n\n                          _this2.config.filters[index].disabled = false;\n                          _this2.config.filters[index].options = handledOptions;\n\n                        case 17:\n                          _this2.config.filters[index].options.map(function (option) {\n                            if (option.key === _this2.filters[filter.field]) {\n                              option.active = true;\n                            }\n\n                            return option;\n                          });\n\n                          template = void 0;\n                          _context3.t0 = filter.type;\n                          _context3.next = _context3.t0 === 'select' ? 22 : _context3.t0 === 'checkbox' ? 24 : 26;\n                          break;\n\n                        case 22:\n                          template = _this2.templates.filterSelect;\n                          return _context3.abrupt(\"break\", 26);\n\n                        case 24:\n                          template = _this2.templates.filterCheckbox;\n                          return _context3.abrupt(\"break\", 26);\n\n                        case 26:\n                          dust.render(template, _this2.clone(_this2.config.filters[index]), function (err, out) {\n                            if (err) {\n                              console.err(err);\n                            } else {\n                              $(_this2.filterEl).find('#dpt-table-filter-' + filter.field).html(out);\n                            }\n                          });\n\n                        case 27:\n                        case \"end\":\n                          return _context3.stop();\n                      }\n                    }\n                  }, _loop);\n                });\n                _context4.t0 = regeneratorRuntime.keys(this.config.filters);\n\n              case 3:\n                if ((_context4.t1 = _context4.t0()).done) {\n                  _context4.next = 8;\n                  break;\n                }\n\n                index = _context4.t1.value;\n                return _context4.delegateYield(_loop(index), \"t2\", 6);\n\n              case 6:\n                _context4.next = 3;\n                break;\n\n              case 8:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function renderFilters() {\n        return _renderFilters.apply(this, arguments);\n      }\n\n      return renderFilters;\n    }()\n  }, {\n    key: \"initFilters\",\n    value: function initFilters() {\n      var _this3 = this;\n\n      this.initial = true;\n\n      for (var index in this.config.filters) {\n        var filter = this.config.filters[index];\n        dust.render(this.templates.filterWrapper, filter, function (err, out) {\n          $(_this3.filterEl).append(out);\n        });\n      }\n    }\n  }, {\n    key: \"clone\",\n    value: function clone(data) {\n      return JSON.parse(JSON.stringify(data));\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this4 = this;\n\n      this.dataEl.on('click', 'a.paginate.clickable', function (e) {\n        _this4.page = $(e.target).data('page');\n\n        _this4.render();\n      });\n      this.filterEl.on('change', 'select', function () {\n        _this4.render();\n      });\n      this.searchEl.on('change', 'input', function (e) {\n        var searchValue = $(e.target).val();\n\n        if (searchValue.length > 1) {\n          _this4.render();\n        }\n      });\n    }\n  }, {\n    key: \"getFilterValues\",\n    value: function getFilterValues() {\n      var _this5 = this;\n\n      this.filterEl.find('select').each(function (index, filter) {\n        var name = $(filter).attr('name');\n        var selectedEl = $(filter).find('option:selected');\n        var value = selectedEl.val();\n\n        if (value.length > 0) {\n          _this5.filters[name] = value;\n        }\n      });\n      var searchValue = this.searchEl.find('input').val();\n\n      if (searchValue.length > 1) {\n        this.search = searchValue;\n      }\n    }\n  }]);\n\n  return Table;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/js/table.js?");

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/main.scss?");

/***/ }),

/***/ "./partials/dpt-filter-checkbox.dust":
/*!*******************************************!*\
  !*** ./partials/dpt-filter-checkbox.dust ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function(dust){dust.register(\"dpt-filter-checkbox\",body_0);function body_0(chk,ctx){return chk.w(\"<fieldset><legend>\").f(ctx.get([\"name\"], false),ctx,\"h\").w(\"</legend>\").s(ctx.get([\"options\"], false),ctx,{\"block\":body_1},{}).w(\"</fieldset>\");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(\"<div><input type=\\\"checkbox\\\" id=\\\"\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"-\").f(ctx.get([\"key\"], false),ctx,\"h\").w(\"\\\" name=\\\"\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"\\\" value=\\\"\").f(ctx.get([\"key\"], false),ctx,\"h\").w(\"\\\"\").x(ctx.get([\"active\"], false),ctx,{\"block\":body_2},{}).w(\"><label for=\\\"\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"-\").f(ctx.get([\"key\"], false),ctx,\"h\").w(\"\\\">\").f(ctx.get([\"value\"], false),ctx,\"h\").w(\"</label></div>\");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(\" checked\");}body_2.__dustBody=!0;return body_0}(dust));\n\n//# sourceURL=webpack:///./partials/dpt-filter-checkbox.dust?");

/***/ }),

/***/ "./partials/dpt-filter-select.dust":
/*!*****************************************!*\
  !*** ./partials/dpt-filter-select.dust ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function(dust){dust.register(\"dpt-filter-select\",body_0);function body_0(chk,ctx){return chk.w(\"<select name=\\\"\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"\\\"\").x(ctx.get([\"disabled\"], false),ctx,{\"block\":body_1},{}).w(\"><option value=\\\"\\\" disabled selected>\").f(ctx.get([\"name\"], false),ctx,\"h\").w(\"</option>\").s(ctx.get([\"options\"], false),ctx,{\"block\":body_2},{}).w(\"</select>\");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w(\" disabled\");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(\"<option value=\\\"\").f(ctx.get([\"key\"], false),ctx,\"h\").w(\"\\\"\").x(ctx.get([\"active\"], false),ctx,{\"block\":body_3},{}).w(\">\").f(ctx.get([\"value\"], false),ctx,\"h\").w(\"</option>\");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w(\" selected\");}body_3.__dustBody=!0;return body_0}(dust));\n\n//# sourceURL=webpack:///./partials/dpt-filter-select.dust?");

/***/ }),

/***/ "./partials/dpt-filter-wrapper.dust":
/*!******************************************!*\
  !*** ./partials/dpt-filter-wrapper.dust ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (function(dust){dust.register(\"dpt-filter-wrapper\",body_0);function body_0(chk,ctx){return chk.w(\"<div class=\\\"dpt-table-filter dpt-table-filter-\").f(ctx.get([\"type\"], false),ctx,\"h\").w(\"\\\" id=\\\"dpt-table-filter-\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"\\\" data-field=\\\"\").f(ctx.get([\"field\"], false),ctx,\"h\").w(\"\\\"></div>\");}body_0.__dustBody=!0;return body_0}(dust));\n\n//# sourceURL=webpack:///./partials/dpt-filter-wrapper.dust?");

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

eval("module.exports = __webpack_require__(/*! /Users/teris/Projects/client-uniarts/web/app/plugins/dustpress-table/assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/main.js?");

/***/ })

/******/ });