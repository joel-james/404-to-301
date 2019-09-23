pluginWebpack([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(3);
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
	name: 'SettingsApp',
	data() {
		return {
			alert: false,
			alertType: 'success',
			labels: {
				general: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('General', '404-to-301'),
				email: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Email', '404-to-301'),
				logs: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Logs', '404-to-301')
			}
		};
	},

	computed: {
		noticeClass: function () {
			return {
				'notice-success': this.alertType === 'success',
				'notice-error': this.alertType === 'error',
				'notice-warning': this.alertType === 'warning',
				'notice-info': this.alertType === 'info'
			};
		}
	},

	methods: {
		/**
   * Show an alter message on top of the page.
   *
   * Alter messages uses WP's admin notice classes.
   *
   * @param {string} message Altert content.
   * @param {string} alertType Alert type (error, success, warning, info).
   * @param {boolean} autoHide Should hide automatically.
            *
            * @since 4.0.0
   *
   * @returns {boolean}
   */
		showAlert: function (message, alertType = 'success', autoHide = true) {
			this.alert = message;
			this.alertType = alertType;

			if (autoHide) {
				setTimeout(() => {
					this.alert = false;
					this.alertType = 'success';
				}, 3000);
			}
		}
	}
});

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__);
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

	name: 'General',

	data() {
		return {
			alert: false,
			redirectType: '301',
			redirectTo: 'link',
			redirectPage: 'link',
			redirectLink: 'http://google.com',
			redirectLog: 1,
			disableGuessing: 1,
			excludePaths: '',
			waiting: false,
			labels: {
				redirectType: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Redirect type', '404-to-301'),
				redirectTo: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Redirect to', '404-to-301'),
				redirectPage: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Select the page', '404-to-301'),
				redirectLink: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Custom URL', '404-to-301'),
				redirectLog: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Log 404 Errors', '404-to-301'),
				disableGuessing: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Disable URL guessing', '404-to-301'),
				excludePaths: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Exclude paths', '404-to-301')
			}
		};
	},

	methods: {
		/**
   * Handle settings for submit.
   *
   * Validate the form before submitting it.
   *
   * @param e Event.
   *
   * @returns {boolean}
   */
		submitForm: function (e) {
			this.showSuccess();
			this.waiting = true;

			Object(__WEBPACK_IMPORTED_MODULE_1__helpers_utils__["restRequest"])({ path: 'settings' }).then(response => {
				console.log(response);
			});

			// Do not submit form.
			e.preventDefault();
		},

		showSuccess: function () {
			this.$parent.showAlert(Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Thanks for the message, Joel.', '404-to-301'), 'info');
		}
	}
});

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(3);
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

	name: 'Email',

	data() {
		return {
			emailNotify: 0,
			emailRecipient: 'joel@joel.com',
			waiting: false,
			labels: {
				emailNotify: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Email notifications', '404-to-301'),
				emailRecipient: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Email address', '404-to-301')
			}
		};
	},

	methods: {
		/**
   * Handle settings for submit.
   *
   * Validate the form before submitting it.
   *
   * @param e Event.
   *
   * @returns {boolean}
   */
		submitForm: function (e) {
			this.showSuccess();
			this.waiting = true;

			// Do not submit form.
			e.preventDefault();
		},

		showSuccess: function () {
			this.$parent.alert = Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])('Thanks for the message, Joel.');

			setTimeout(() => {
				this.$parent.alert = false;
				this.waiting = false;
			}, 3000);
		}
	}
});

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _SettingsApp = __webpack_require__(36);

var _SettingsApp2 = _interopRequireDefault(_SettingsApp);

var _router = __webpack_require__(47);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
	el: '#dd404-settings-app',
	router: _router2.default,
	render: function render(h) {
		return h(_SettingsApp2.default);
	}
});

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingsApp_vue__ = __webpack_require__(10);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_309372c1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsApp_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingsApp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_309372c1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsApp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/settings/SettingsApp.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-309372c1", Component.options)
  } else {
    hotAPI.reload("data-v-309372c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "dd404-admin-settings" } },
    [
      _vm.alert
        ? _c(
            "div",
            { staticClass: "notice is-dismissible", class: _vm.noticeClass },
            [_c("p", [_vm._v(_vm._s(_vm.alert))])]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "nav",
        { staticClass: "nav-tab-wrapper" },
        [
          _c(
            "router-link",
            { staticClass: "nav-tab", attrs: { to: "/", exact: "" } },
            [
              _c("span", { staticClass: "dashicons dashicons-admin-generic" }),
              _vm._v(
                "\n            " + _vm._s(_vm.labels.general) + "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "nav-tab", attrs: { to: "/email" } },
            [
              _c("span", { staticClass: "dashicons dashicons-email" }),
              _vm._v("\n            " + _vm._s(_vm.labels.email) + "\n        ")
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
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
    require("vue-hot-reload-api")      .rerender("data-v-309372c1", esExports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(5);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _General = __webpack_require__(48);

var _General2 = _interopRequireDefault(_General);

var _Email = __webpack_require__(66);

var _Email2 = _interopRequireDefault(_Email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
	linkActiveClass: 'nav-tab-active',
	routes: [{
		path: '/',
		name: 'General',
		component: _General2.default
	}, {
		path: '/email',
		name: 'Email',
		component: _Email2.default
	}]
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_General_vue__ = __webpack_require__(11);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f5e8988_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_General_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f5e8988"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_General_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f5e8988_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_General_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/settings/components/General.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f5e8988", Component.options)
  } else {
    hotAPI.reload("data-v-1f5e8988", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRequest = restRequest;

var _apiFetch = __webpack_require__(12);

var _apiFetch2 = _interopRequireDefault(_apiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Send API rest request using apiFetch.
 *
 * This is a wrapper function to include nonce and
 * our custom route base url.
 *
 * @param {object} options apiFetch options.
 *
 * @since 4.0.0
 *
 * @return {string}
 **/
function restRequest(options) {
  _apiFetch2.default.use(_apiFetch2.default.createNonceMiddleware(window.dd404.rest_nonce));
  _apiFetch2.default.use(_apiFetch2.default.createRootURLMiddleware(window.dd404.rest_url));

  return (0, _apiFetch2.default)(options);
}

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "general-settings", method: "post" },
      on: { submit: _vm.submitForm }
    },
    [
      _c("table", { staticClass: "form-table" }, [
        _c("tbody", [
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "redirectType" } }, [
                _vm._v(_vm._s(_vm.labels.redirectType))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.redirectType,
                      expression: "redirectType"
                    }
                  ],
                  attrs: { id: "redirectType" },
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
                      _vm.redirectType = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "301" } }, [
                    _vm._v("301 Redirect (SEO)")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "302" } }, [
                    _vm._v("302 Redirect")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "307" } }, [
                    _vm._v("307 Redirect")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "redirectTo" } }, [
                _vm._v(_vm._s(_vm.labels.redirectTo))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.redirectTo,
                      expression: "redirectTo"
                    }
                  ],
                  attrs: { id: "redirectTo" },
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
                      _vm.redirectTo = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "page" } }, [
                    _vm._v("Existing Page")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "link" } }, [
                    _vm._v("Custom URL")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "none" } }, [
                    _vm._v("No Redirect")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          "page" === _vm.redirectTo
            ? _c("tr", [
                _c("th", [
                  _c("label", { attrs: { for: "redirectPage" } }, [
                    _vm._v(_vm._s(_vm.labels.redirectPage))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.redirectPage,
                          expression: "redirectPage"
                        }
                      ],
                      attrs: { id: "redirectPage" },
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
                          _vm.redirectPage = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "page" } }, [
                        _vm._v("Existing Page")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "link" } }, [
                        _vm._v("Custom URL")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "none" } }, [
                        _vm._v("No Redirect")
                      ])
                    ]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          "link" === _vm.redirectTo
            ? _c("tr", [
                _c("th", [
                  _c("label", { attrs: { for: "redirectLink" } }, [
                    _vm._v(_vm._s(_vm.labels.redirectLink))
                  ])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.redirectLink,
                        expression: "redirectLink"
                      }
                    ],
                    attrs: { type: "url", id: "redirectLink" },
                    domProps: { value: _vm.redirectLink },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.redirectLink = $event.target.value
                      }
                    }
                  })
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "redirectLog" } }, [
                _vm._v(_vm._s(_vm.labels.redirectLog))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.redirectLog,
                    expression: "redirectLog"
                  }
                ],
                attrs: { type: "checkbox", id: "redirectLog" },
                domProps: {
                  checked: Array.isArray(_vm.redirectLog)
                    ? _vm._i(_vm.redirectLog, null) > -1
                    : _vm.redirectLog
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.redirectLog,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.redirectLog = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.redirectLog = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.redirectLog = $$c
                    }
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "disableGuessing" } }, [
                _vm._v(_vm._s(_vm.labels.disableGuessing))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.disableGuessing,
                    expression: "disableGuessing"
                  }
                ],
                attrs: { type: "checkbox", id: "disableGuessing" },
                domProps: {
                  checked: Array.isArray(_vm.disableGuessing)
                    ? _vm._i(_vm.disableGuessing, null) > -1
                    : _vm.disableGuessing
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.disableGuessing,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.disableGuessing = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.disableGuessing = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.disableGuessing = $$c
                    }
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "excludePaths" } }, [
                _vm._v(_vm._s(_vm.labels.excludePaths))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.excludePaths,
                    expression: "excludePaths"
                  }
                ],
                attrs: { id: "excludePaths" },
                domProps: { value: _vm.excludePaths },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.excludePaths = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", { attrs: { colspan: "2" } }, [
              _c("input", {
                staticClass: "button button-primary",
                attrs: {
                  type: "submit",
                  name: "submit",
                  value: "Save Changes",
                  disabled: _vm.waiting
                }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "spinner",
                class: { "is-active": _vm.waiting }
              })
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1f5e8988", esExports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Email_vue__ = __webpack_require__(17);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce397a20_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Email_vue__ = __webpack_require__(68);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ce397a20"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Email_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce397a20_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Email_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/src/js/admin/settings/components/Email.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce397a20", Component.options)
  } else {
    hotAPI.reload("data-v-ce397a20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "email-settings", method: "post" },
      on: { submit: _vm.submitForm }
    },
    [
      _c("table", { staticClass: "form-table" }, [
        _c("tbody", [
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "emailNotify" } }, [
                _vm._v(_vm._s(_vm.labels.emailNotify))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.emailNotify,
                    expression: "emailNotify"
                  }
                ],
                attrs: { type: "checkbox", id: "emailNotify", value: "1" },
                domProps: {
                  checked: Array.isArray(_vm.emailNotify)
                    ? _vm._i(_vm.emailNotify, "1") > -1
                    : _vm.emailNotify
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.emailNotify,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = "1",
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.emailNotify = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.emailNotify = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.emailNotify = $$c
                    }
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [
              _c("label", { attrs: { for: "emailRecipient" } }, [
                _vm._v(_vm._s(_vm.labels.emailRecipient))
              ])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.emailRecipient,
                    expression: "emailRecipient"
                  }
                ],
                attrs: { type: "email", id: "emailRecipient" },
                domProps: { value: _vm.emailRecipient },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.emailRecipient = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", { attrs: { colspan: "2" } }, [
              _c("input", {
                staticClass: "button button-primary",
                attrs: {
                  type: "submit",
                  name: "submit",
                  value: "Save Changes",
                  disabled: _vm.waiting
                }
              })
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ce397a20", esExports)
  }
}

/***/ })

},[35]);