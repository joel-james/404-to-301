pluginWebpack([0],Array(20).concat([
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'LogsApp'
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_table_Table_vue__ = __webpack_require__(83);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'Logs',

	/**
  * Required components in this component.
  *
  * @since 4.0.0
  */
	components: {
		Table: __WEBPACK_IMPORTED_MODULE_0__list_table_Table_vue__["a" /* default */]
	},

	/**
  * Get the default set of data for the template.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	data() {
		return {
			columns: {
				'path': {
					label: 'Path',
					sortable: true
				},
				'date': {
					label: 'Date'
				},
				'referral': {
					label: 'Referral',
					sortable: true
				},
				'ip': {
					label: 'IP Address'
				},
				'ua': {
					label: 'User Agent',
					sortable: true
				}
			},
			rows: [{
				id: 1,
				path: 'test',
				date: '20/12/2091',
				referral: 'none',
				ip: '127.0.0.1',
				ua: 'none'
			}, {
				id: 2,
				path: 'test',
				date: '20/12/2091',
				referral: 'none',
				ip: '127.0.0.1',
				ua: 'none'
			}],
			bulkActions: [{
				key: 'trash',
				label: 'Move to Trash'
			}]
		};
	}
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'NavTop',

	/**
  * Define properties of this component.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	props: {
		bulkActions: {
			type: Array,
			required: false,
			default: []
		},
		extraActions: {
			type: Array,
			required: false,
			default: []
		}
	},

	/**
  * Dynamic methods to handle table.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	computed: {
		/**
   * Is there bulk actions available.
   *
   * @since 4.0.0
   *
   * @returns {object}
   */
		hasBulkActions() {
			return this.bulkActions.length > 0;
		},

		/**
   * Is there extra actions available.
   *
   * @since 4.0.0
   *
   * @returns {object}
   */
		hasExtraActions() {
			return this.extraActions.length > 0;
		}
	},

	data() {
		return {
			bulkAction: -1
		};
	}
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Settings',

    data() {
        return {};
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Row_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavTop_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NavBottom_vue__ = __webpack_require__(80);
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'Table',

	/**
  * Required components in this component.
  *
  * @since 4.0.0
  */
	components: {
		Header: __WEBPACK_IMPORTED_MODULE_0__Header_vue__["a" /* default */], Row: __WEBPACK_IMPORTED_MODULE_1__Row_vue__["a" /* default */], NavTop: __WEBPACK_IMPORTED_MODULE_2__NavTop_vue__["a" /* default */], NavBottom: __WEBPACK_IMPORTED_MODULE_3__NavBottom_vue__["a" /* default */]
	},

	/**
  * Define properties of this component.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	props: {
		columns: {
			type: Object,
			required: true,
			default: {}
		},
		rows: {
			type: Array,
			required: true,
			default: []
		},
		tableClass: {
			type: String,
			default: 'wp-list-table widefat fixed striped'
		},
		totalItems: {
			type: Number,
			default: 0
		},
		totalPages: {
			type: Number,
			default: 1
		},
		perPage: {
			type: Number,
			default: 20
		},
		currentPage: {
			type: Number,
			default: 1
		},
		sortBy: {
			type: String,
			default: null
		},
		sortOrder: {
			type: String,
			default: 'asc'
		},
		showCb: {
			type: Boolean,
			default: true
		},
		bulkActions: {
			type: Array,
			required: false,
			default: []
		}
	}
});

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Column_vue__ = __webpack_require__(109);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'Row',

	/**
  * Required components in this component.
  *
  * @since 4.0.0
  */
	components: {
		Column: __WEBPACK_IMPORTED_MODULE_0__Column_vue__["a" /* default */]
	},

	/**
  * Define properties of this component.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	props: {
		id: {
			type: Number,
			required: true
		},
		columns: {
			type: Object,
			required: true,
			default: {}
		},
		row: {
			type: Object,
			required: true,
			default: {}
		},
		showCb: {
			type: Boolean,
			default: true
		}
	},

	/**
  * Get the default set of data for the template.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	data() {
		return {
			checkedItems: []
		};
	}
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Settings',

    data() {
        return {};
    }
});

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _LogsApp = __webpack_require__(73);

var _LogsApp2 = _interopRequireDefault(_LogsApp);

var _router = __webpack_require__(76);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
	el: '#dd404-logs-app',
	router: _router2.default,
	render: function render(h) {
		return h(_LogsApp2.default);
	}
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LogsApp_vue__ = __webpack_require__(20);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e77ba77e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LogsApp_vue__ = __webpack_require__(75);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_LogsApp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e77ba77e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LogsApp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/LogsApp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e77ba77e", Component.options)
  } else {
    hotAPI.reload("data-v-e77ba77e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "dd404-admin-logs" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e77ba77e", esExports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(5);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Logs = __webpack_require__(77);

var _Logs2 = _interopRequireDefault(_Logs);

var _Settings = __webpack_require__(90);

var _Settings2 = _interopRequireDefault(_Settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
	routes: [{
		path: '/',
		name: 'Logs',
		component: _Logs2.default
	}, {
		path: '/settings',
		name: 'Settings',
		component: _Settings2.default
	}]
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logs_vue__ = __webpack_require__(21);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ed40d97_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logs_vue__ = __webpack_require__(89);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ed40d97_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/Logs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ed40d97", Component.options)
  } else {
    hotAPI.reload("data-v-7ed40d97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavTop_vue__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21bb3a6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavTop_vue__ = __webpack_require__(79);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavTop_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_21bb3a6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavTop_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/NavTop.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21bb3a6a", Component.options)
  } else {
    hotAPI.reload("data-v-21bb3a6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tablenav top" },
    [
      _vm.hasBulkActions
        ? _c("div", { staticClass: "alignleft actions bulkactions" }, [
            _c(
              "label",
              {
                staticClass: "screen-reader-text",
                attrs: { for: "bulk-action-selector-top" }
              },
              [_vm._v("Select bulk action")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bulkAction,
                    expression: "bulkAction"
                  }
                ],
                attrs: { name: "action", id: "bulk-action-selector-top" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.bulkAction = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "-1" } }, [
                  _vm._v("Bulk Actions")
                ]),
                _vm._v(" "),
                _vm._l(_vm.bulkActions, function(action) {
                  return _c("option", { domProps: { value: action.key } }, [
                    _vm._v(_vm._s(action.label))
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _vm.hasBulkActions
              ? _c("input", {
                  staticClass: "button action",
                  attrs: { type: "submit", id: "doaction", value: "Apply" }
                })
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.extraActions, function(action) {
        return _vm.hasExtraActions
          ? _c("div", { staticClass: "alignleft actions bulkactions" }, [
              _vm._m(0, true),
              _vm._v(" "),
              _c("input", {
                staticClass: "button",
                attrs: {
                  type: "submit",
                  name: "filter_action",
                  id: "post-query",
                  value: "Apply"
                }
              })
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("br", { staticClass: "clear" })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "select",
      { staticClass: "404_group_by", attrs: { name: "group_by_top" } },
      [
        _c("option", { attrs: { value: "" } }, [_vm._v("Group by")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "url" } }, [_vm._v("404 Path")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "ref" } }, [_vm._v("From")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "ip" } }, [_vm._v("IP Address")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "ua" } }, [_vm._v("User Agent")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tablenav-pages" }, [
      _c("span", { staticClass: "displaying-num" }, [_vm._v("4 items")]),
      _vm._v(" "),
      _c("span", { staticClass: "pagination-links" }, [
        _c(
          "span",
          {
            staticClass: "tablenav-pages-navspan button disabled",
            attrs: { "aria-hidden": "true" }
          },
          [_vm._v("«")]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "tablenav-pages-navspan button disabled",
            attrs: { "aria-hidden": "true" }
          },
          [_vm._v("‹")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "paging-input" }, [
          _c(
            "label",
            {
              staticClass: "screen-reader-text",
              attrs: { for: "current-page-selector" }
            },
            [_vm._v("Current Page")]
          ),
          _vm._v(" "),
          _c("input", {
            staticClass: "current-page",
            attrs: {
              id: "current-page-selector",
              type: "text",
              name: "paged",
              value: "1",
              size: "1",
              "aria-describedby": "table-paging"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "tablenav-paging-text" }, [
            _vm._v(" of "),
            _c("span", { staticClass: "total-pages" }, [_vm._v("2")])
          ])
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "next-page button",
            attrs: {
              href:
                "//localhost:3000/development/wordpress/wp_404/wp-admin/edit.php?post_type=page&paged=2"
            }
          },
          [
            _c("span", { staticClass: "screen-reader-text" }, [
              _vm._v("Next page")
            ]),
            _vm._v(" "),
            _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("›")])
          ]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "tablenav-pages-navspan button disabled",
            attrs: { "aria-hidden": "true" }
          },
          [_vm._v("»")]
        )
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21bb3a6a", esExports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavBottom_vue__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37c7c926_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavBottom_vue__ = __webpack_require__(82);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37c7c926"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_NavBottom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_37c7c926_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_NavBottom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/NavBottom.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37c7c926", Component.options)
  } else {
    hotAPI.reload("data-v-37c7c926", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tablenav bottom" }, [
      _c("div", { staticClass: "alignleft actions bulkactions" }, [
        _c(
          "label",
          {
            staticClass: "screen-reader-text",
            attrs: { for: "bulk-action-selector-bottom" }
          },
          [_vm._v("Select bulk action")]
        ),
        _c(
          "select",
          { attrs: { name: "action2", id: "bulk-action-selector-bottom" } },
          [
            _c("option", { attrs: { value: "-1" } }, [_vm._v("Bulk Actions")]),
            _vm._v(" "),
            _c(
              "option",
              { staticClass: "hide-if-no-js", attrs: { value: "edit" } },
              [_vm._v("Edit")]
            ),
            _vm._v(" "),
            _c("option", { attrs: { value: "trash" } }, [
              _vm._v("Move to Trash")
            ])
          ]
        ),
        _vm._v(" "),
        _c("input", {
          staticClass: "button action",
          attrs: { type: "submit", id: "doaction2", value: "Apply" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "alignleft actions" }),
      _vm._v(" "),
      _c("div", { staticClass: "tablenav-pages" }, [
        _c("span", { staticClass: "displaying-num" }, [_vm._v("4 items")]),
        _vm._v(" "),
        _c("span", { staticClass: "pagination-links" }, [
          _c(
            "span",
            {
              staticClass: "tablenav-pages-navspan button disabled",
              attrs: { "aria-hidden": "true" }
            },
            [_vm._v("«")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "tablenav-pages-navspan button disabled",
              attrs: { "aria-hidden": "true" }
            },
            [_vm._v("‹")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "screen-reader-text" }, [
            _vm._v("Current Page")
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "paging-input", attrs: { id: "table-paging" } },
            [
              _c("span", { staticClass: "tablenav-paging-text" }, [
                _vm._v("1 of "),
                _c("span", { staticClass: "total-pages" }, [_vm._v("2")])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "next-page button",
              attrs: {
                href:
                  "//localhost:3000/development/wordpress/wp_404/wp-admin/edit.php?post_type=page&paged=2"
              }
            },
            [
              _c("span", { staticClass: "screen-reader-text" }, [
                _vm._v("Next page")
              ]),
              _c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("›")])
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "tablenav-pages-navspan button disabled",
              attrs: { "aria-hidden": "true" }
            },
            [_vm._v("»")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("br", { staticClass: "clear" })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37c7c926", esExports)
  }
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ae94874_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__ = __webpack_require__(88);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Table_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ae94874_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/Table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ae94874", Component.options)
  } else {
    hotAPI.reload("data-v-9ae94874", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Row_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f6c8bd2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Row_vue__ = __webpack_require__(87);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Row_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f6c8bd2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Row_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/Row.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f6c8bd2", Component.options)
  } else {
    hotAPI.reload("data-v-4f6c8bd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tr",
    [
      _vm.showCb
        ? _c(
            "Column",
            {
              attrs: {
                columnClass: ["check-column"],
                isHead: true,
                scope: "row"
              }
            },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.checkedItems,
                    expression: "checkedItems"
                  }
                ],
                attrs: { type: "checkbox", name: "item[]" },
                domProps: {
                  value: _vm.id,
                  checked: Array.isArray(_vm.checkedItems)
                    ? _vm._i(_vm.checkedItems, _vm.id) > -1
                    : _vm.checkedItems
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.checkedItems,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = _vm.id,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.checkedItems = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.checkedItems = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.checkedItems = $$c
                    }
                  }
                }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.columns, function(value, key) {
        return _c(
          "Column",
          { attrs: { columnClass: ["column", key], isHead: false } },
          [_vm._v("\n        " + _vm._s(_vm.row[key]) + "\n    ")]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f6c8bd2", esExports)
  }
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    { attrs: { method: "post" } },
    [
      _c("NavTop", { attrs: { bulkActions: _vm.bulkActions } }),
      _vm._v(" "),
      _c(
        "table",
        { class: _vm.tableClass },
        [
          _c("Header", { attrs: { columns: _vm.columns, showCb: _vm.showCb } }),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.rows, function(row) {
              return _c("Row", {
                attrs: {
                  row: row,
                  id: row.id,
                  columns: _vm.columns,
                  showCb: _vm.showCb
                }
              })
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("NavBottom")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9ae94874", esExports)
  }
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "poststuff" } }, [
    _c("div", { attrs: { id: "post-body" } }, [
      _c("div", { attrs: { id: "post-body-content" } }, [
        _c(
          "div",
          { staticClass: "meta-box-sortables ui-sortable" },
          [
            _c("Table", {
              attrs: {
                columns: _vm.columns,
                rows: _vm.rows,
                "bulk-actions": _vm.bulkActions
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ed40d97", esExports)
  }
}

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__ = __webpack_require__(27);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47ecc20b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47ecc20b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Settings_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47ecc20b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Settings_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/Settings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47ecc20b", Component.options)
  } else {
    hotAPI.reload("data-v-47ecc20b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-settings" }, [
    _vm._v("\n    The Settings Page\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47ecc20b", esExports)
  }
}

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Column_vue__ = __webpack_require__(109);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'Header',

	/**
  * Required components in this component.
  *
  * @since 4.0.0
  */
	components: {
		Column: __WEBPACK_IMPORTED_MODULE_0__Column_vue__["a" /* default */]
	},

	/**
  * Define properties of this component.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	props: {
		columns: {
			type: Object,
			required: true,
			default: {}
		},
		showCb: {
			type: Boolean,
			default: true
		}
	},

	/**
  * Dynamic methods to handle table.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	computed: {
		/**
   * Select and unselect all child items.
   *
   * @since 4.0.0
   *
   * @returns {object}
   */
		selectAll: {
			get: function () {},
			set: function () {}
		}
	}
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(105);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_710b0e45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(107);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_710b0e45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-710b0e45", Component.options)
  } else {
    hotAPI.reload("data-v-710b0e45", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("thead", [
    _c(
      "tr",
      [
        _vm.showCb
          ? _c(
              "Column",
              {
                attrs: {
                  columnClass: ["manage-column", "column-cb", "check-column"]
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectAll,
                      expression: "selectAll"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.selectAll)
                      ? _vm._i(_vm.selectAll, null) > -1
                      : _vm.selectAll
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.selectAll,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.selectAll = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.selectAll = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.selectAll = $$c
                      }
                    }
                  }
                })
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.columns, function(value, key) {
          return _c("Column", { attrs: { columnClass: ["column", key] } }, [
            _vm._v("\n        " + _vm._s(value.label) + "\n    ")
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-710b0e45", esExports)
  }
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

	/**
  * Current component name.
  *
  * @since 4.0.0
  */
	name: 'Column',

	/**
  * Define properties of this component.
  *
  * @since 4.0.0
  *
  * @returns {object}
  */
	props: {
		isHead: {
			type: Boolean,
			default: false
		},
		columnClass: {
			type: Array,
			default: ['column']
		},
		scope: {
			type: String,
			default: null
		}
	}
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Column_vue__ = __webpack_require__(108);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dad728e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Column_vue__ = __webpack_require__(113);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Column_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dad728e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Column_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/logs/components/list-table/Column.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dad728e", Component.options)
  } else {
    hotAPI.reload("data-v-7dad728e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isHead
    ? _c(
        "th",
        { class: _vm.columnClass, attrs: { scope: _vm.scope } },
        [_vm._t("default")],
        2
      )
    : _c(
        "td",
        { class: _vm.columnClass, attrs: { scope: _vm.scope } },
        [_vm._t("default")],
        2
      )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7dad728e", esExports)
  }
}

/***/ })
]),[72]);