webpackJsonp([2],{

/***/ 1368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(97);
var _jsxFileName = '/Users/mac/Workspace/anabim/src/routes/contact/components/BreadCrumb.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BreadCrumb = function (_React$Component) {
  _inherits(BreadCrumb, _React$Component);

  function BreadCrumb() {
    _classCallCheck(this, BreadCrumb);

    return _possibleConstructorReturn(this, (BreadCrumb.__proto__ || Object.getPrototypeOf(BreadCrumb)).apply(this, arguments));
  }

  _createClass(BreadCrumb, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'breadcrumbs', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
              { className: 'home', to: '/', title: 'Go to CargoPress.', rel: 'v:url', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              },
              'Trang ch\u1EE7'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              this.props.title
            )
          )
        )
      );
    }
  }]);

  return BreadCrumb;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),

/***/ 1369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Workspace/anabim/src/routes/contact/components/Form.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'form', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h3',
          { className: 'widget-title margin-top-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: this
          },
          this.props.header
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.body }, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { 'data-toggle': 'validator', method: 'post', action: 'form.php', className: 'aSubmit', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { display: 'none' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'maximus', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'theSubject', defaultValue: 'CargoPress: Contact Request', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12 col-md-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'First Name*', 'aria-invalid': 'false', 'aria-required': 'true', size: 40, name: 'your-name', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12 col-md-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Last Name*', 'aria-invalid': 'false', 'aria-required': 'true', size: 40, name: 'last-name', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12 col-md-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', placeholder: 'E-mail address*', 'aria-invalid': 'false', 'aria-required': 'true', size: 40, name: 'your-email', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12 col-md-4', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'tel', placeholder: 'Phone Number', 'aria-invalid': 'false', 'aria-required': 'true', size: 40, name: 'your-phone', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12 col-md-8', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'Subject*', 'aria-invalid': 'false', size: 40, name: 'your-subject', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { placeholder: 'Message*', 'aria-invalid': 'false', rows: 10, cols: 40, name: 'your-message', required: true, defaultValue: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', className: 'btn btn-primary', defaultValue: 'G\u1EEDi tin nh\u1EAFn', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/mac/Workspace/anabim/src/routes/contact/components/Title.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "main-title", __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "container", __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h1",
            { className: "main-title__primary", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            { className: "main-title__secondary", __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            this.props.description
          )
        )
      );
    }
  }]);

  return Title;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/mac/Workspace/anabim/src/routes/contact/components/Widget.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Widget = function (_React$Component) {
  _inherits(Widget, _React$Component);

  function Widget() {
    _classCallCheck(this, Widget);

    return _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments));
  }

  _createClass(Widget, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "widget_black-studio-tinymce", __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "featured-widget", __source: {
                fileName: _jsxFileName,
                lineNumber: 8
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h3",
              { className: "widget-title", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "span",
                { className: "widget-title__inline", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                  },
                  __self: this
                },
                "OLD FASHIONED CONTACT"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "strong",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: this
                },
                "CargoPress, Itd."
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              }),
              "227 Marion Street",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              }),
              "Columbia, SC 29201"
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "p",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              "1-888-123-4567",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              }),
              "1-888-123-4568",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "a",
                { href: "mailto:info@cargopress.com", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                "info@cargopress.com"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "widget_pw_opening_time", __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "featured-widget", __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "h3",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon icons-ornament-left", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              }),
              "OPENING TIME",
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon icons-ornament-right", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day ", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                "Monday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day  light-bg", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  },
                  __self: this
                },
                "Tuesday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day ", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  },
                  __self: this
                },
                "Wednesday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day  light-bg", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: this
                },
                "Thursday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day ", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                "Friday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day  light-bg", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  },
                  __self: this
                },
                "Saturday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: this
                },
                "8:00 - 16:00"
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "dl",
              { className: "week-day  closed today", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dt",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                "Sunday"
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "dd",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  },
                  __self: this
                },
                "CLOSED"
              )
            )
          )
        )
      );
    }
  }]);

  return Widget;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Widget);

/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(1370);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(1368);
/* unused harmony reexport BreadCrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Widget__ = __webpack_require__(1371);
/* unused harmony reexport Widget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(1369);
/* unused harmony reexport FormEmail */





/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(1372);
var _jsxFileName = '/Users/mac/Workspace/anabim/src/routes/contact/Contact.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'main', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ui container', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ui stackable two column grid', __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'post-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'strong',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { style: { fontFamily: 'georgia, palatino, serif' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'C\xD4NG TY C\u1ED4 PH\u1EA6N T\u01AF V\u1EA4N THI\u1EBET K\u1EBE & CHUY\u1EC2N GIAO C\xD4NG NGH\u1EC6\xA0ANABIM'
                    )
                  )
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontFamily: 'georgia, palatino, serif' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      '\u0110\u1ECBa ch\u1EC9'
                    ),
                    ':\xA036/554\xA0Tr\u01B0\u1EDDng Chinh\xA0\u2013 \u0110\u1ED1ng \u0110a \u2013 H\xE0 N\u1ED9i \u2013 Vi\u1EC7t Nam'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontFamily: 'georgia, palatino, serif' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'Website'
                    ),
                    ':\xA0',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'a',
                      { href: 'http://anabim.com/', target: '_blank', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'anabim.com'
                    ),
                    '\xA0\u2013 edu.anabim.com',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    }),
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'Mail'
                    ),
                    ':\xA0revithanoi@gmail.com'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontFamily: 'georgia, palatino, serif' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'Di \u0111\u1ED9ng'
                    ),
                    ': 0975 622 789 \u2013\xA00978542680'
                  )
                ),
                ' ',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { color: '#000000' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'TH\xD4NG TIN CHUY\u1EC2N KHO\u1EA2N THANH TO\xC1N KH\xD3A H\u1ECCC:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontSize: '15px; color: #ff0000' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'NG\xC2N H\xC0NG TMCP NGO\u1EA0I TH\u01AF\u01A0NG TH\u0102NG LONG (VIETCOMBANK)'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontSize: '15px', color: '#ff0000' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      'Ph\xF2ng giao d\u1ECBch Kim Li\xEAn \u2013 \xD4 Ch\u1EE3 D\u1EEBa \u2013 390 X\xE3 \u0110\xE0n \u2013 H\xE0 N\u1ED9i'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontSize: '15px', color: '#ff0000' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      '\u2013 Ch\u1EE7 t\xE0i kho\u1EA3n: PH\u1EA0M \u0110\u1EE8C TH\u1ECANH'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12
                    },
                    __self: this
                  }),
                  ' ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { style: { fontSize: '15px', color: '#ff0000' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'strong',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 12
                        },
                        __self: this
                      },
                      '\u2013 S\u1ED1 t\xE0i kho\u1EA3n: 0491000064512'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'column', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { width: '600', height: '450', frameBorder: '0', style: { border: 0 },
                src: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXtq4oarNTERv8VdXIWBXa4&key=AIzaSyAKFv2ylCaZgWqvWCyDmXRBzPSjZN3_Auc', allowFullScreen: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

});
//# sourceMappingURL=contact.chunk.js.map