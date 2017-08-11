webpackJsonp([7],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsxFileName = '/home/luan/Workspace/anabim/src/routes/blog/Blog.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var allNews = this.props.data.allNews.value;
      var recentNews = this.props.data.recentNews.value;
      var categoryPosts = this.props.data.categoryPosts.value;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'main', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ui container', style: { paddingTop: 50 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'ui header', __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            'Tin t\u1EE9c'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui section divider', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'ui header', style: { paddingBottom: 50 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', id: 'article', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui grid container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'eleven wide column', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: this
                  },
                  allNews.map(function (news, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: "/blog/" + news.slug, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h1',
                          { className: 'ui sub header',
                            style: { fontSize: 20, fontWeight: 'bold', color: '#000' },
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 24
                            },
                            __self: _this2
                          },
                          news.title
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        {
                          style: { fontSize: 12, color: '#999' },
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                          },
                          __self: _this2
                        },
                        '\u0110\u0103ng b\u1EDFi Admin v\xE0o ',
                        __WEBPACK_IMPORTED_MODULE_2_moment___default()(news.created_at).format("DD/MM/YYYY")
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui divider', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        },
                        __self: _this2
                      })
                    );
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'four wide right floated column', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { className: 'ui header', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    'Danh m\u1EE5c'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui list', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                      },
                      __self: this
                    },
                    categoryPosts.map(function (el, index) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { to: '/danhmuc/' + el.slug, className: 'item', key: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                          },
                          __self: _this2
                        },
                        el.title
                      );
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui hidden divider', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { className: 'ui header', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    'B\xE0i vi\u1EBFt m\u1EDBi'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui list', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      },
                      __self: this
                    },
                    recentNews.map(function (el, index) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                        { key: index, className: 'item',
                          to: '/blog/' + el.slug,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                          },
                          __self: _this2
                        },
                        el.title
                      );
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

});
//# sourceMappingURL=blog.chunk.js.map