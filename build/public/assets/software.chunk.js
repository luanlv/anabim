webpackJsonp([3],{

/***/ 1378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(85);
var _jsxFileName = '/home/luan/Workspace/anabim/src/routes/software/components/ListCourses.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global $ */



var ListCourses = function (_React$Component) {
  _inherits(ListCourses, _React$Component);

  function ListCourses(props) {
    _classCallCheck(this, ListCourses);

    return _possibleConstructorReturn(this, (ListCourses.__proto__ || Object.getPrototypeOf(ListCourses)).call(this, props));
  }

  _createClass(ListCourses, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.special.cards .image').dimmer({
        on: 'hover'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'ui special stackable cards index-card', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        this.props.courses.map(function (el, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card', key: index, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'blurring dimmable image', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui dimmer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'content', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                      { to: '/course/' + el.slug, className: 'ui inverted button', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        },
                        __self: this
                      },
                      'Xem kh\xF3a h\u1ECDc'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */],
                { to: '/course/' + el.slug, className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                el.name
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'meta', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'date', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 34
                    },
                    __self: this
                  },
                  el.author
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'extra content', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'play icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                  },
                  __self: this
                })
              )
            )
          );
        })
      );
    }
  }]);

  return ListCourses;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ListCourses);

/***/ }),

/***/ 1379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListCourses__ = __webpack_require__(1378);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ListCourses__["a"]; });


/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(1379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(85);
var _jsxFileName = '/home/luan/Workspace/anabim/src/routes/software/Software.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Software = function (_React$Component) {
  _inherits(Software, _React$Component);

  function Software(props) {
    _classCallCheck(this, Software);

    return _possibleConstructorReturn(this, (Software.__proto__ || Object.getPrototypeOf(Software)).call(this, props));
  }

  _createClass(Software, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('#context2 .menu .item').tab({
        context: 'parent'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      var button = user.member === 'pending' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'ui large orange button',
          onClick: function onClick() {
            $('#membership-info').modal('show');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        'Th\xF4ng tin \u0111\u0103ng k\xFD'
      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'ui large orange button ',
          onClick: function onClick() {
            if (user) {
              $('#dang-ky').modal('show');
            } else {
              if (user.member === 'none' || user.member === 'trialed' || user.member === 'membershiped') {
                $('.first.modal').modal('show');
              }
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        '\u0110\u0103ng k\xFD h\u1ECDc ngay'
      );
      var software = this.props.data.softwareInfo.value;
      var courses = this.props.data.courseInSoftware.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'main', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ui segment noBor noRa noSha noPa noMa', __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { background: '#1485bd' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ui container ', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui two column stackable grid', style: { color: 'white !important', height: '250px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'column', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui breadcrumb white', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                      { to: '/', className: 'section', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 52
                        },
                        __self: this
                      },
                      'Trang ch\u1EE7'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'divider', style: { display: 'inline', color: 'white !important' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 53
                        },
                        __self: this
                      },
                      ' / '
                    ),
                    'Ph\u1EA7n m\u1EC1m: [ ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                      { to: '/software/' + software.slug, className: 'section', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 54
                        },
                        __self: this
                      },
                      software.name
                    ),
                    ' ]'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row ', style: { paddingTop: '10px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      },
                      __self: this
                    },
                    user.membership !== 'membership' && button
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'column noPa', style: { backgroundImage: 'url("' + software.coverUrl + '")' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { background: 'linear-gradient(to right, #1485bd 0%, transparent 30% , transparent 49%, transparent 70%, #1485bd 100%)', width: '100%', height: '100%' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ui container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui segment noBor noSha noPa', style: { margin: '30px auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { id: 'context2', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'header', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                      },
                      __self: this
                    },
                    'C\xE1c video c\xF3 trong danh m\u1EE5c ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { style: { color: 'red' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        },
                        __self: this
                      },
                      ' ',
                      software.name,
                      ' '
                    ),
                    ':'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui active tab ', 'data-tab': '1', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* ListCourse */], { courses: courses, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { background: 'linear-gradient(to right, black , #333)' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ui container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui stackable grid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'twelve wide column grid noPa', style: { background: 'url("https://cdn.lynda.com/static/images/software/free-trial.png") no-repeat center black', backgroundSize: '100% 100%', height: '350px', overflow: 'hidden' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      style: { width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0, 0.9) 10%, rgba(0,0,0, 0.4))' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'ui header', style: { color: 'white !important', lineHeight: '40px', padding: '20px 50px', fontSize: '24px' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 87
                        },
                        __self: this
                      },
                      'Khuy\u1EBFn m\xE3i'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px', fontSize: '18px' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 90
                        },
                        __self: this
                      },
                      'Anabim \u0111ang trong \u0111\u1EE3t khuy\u1EBFn m\xE3i, \u0111\u0103ng k\xFD c\xE0ng l\xE2u, gi\xE1 c\xE0ng gi\u1EA3m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 93
                        },
                        __self: this
                      },
                      button
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'four wide column grid', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'ui inverted relaxed divided list', style: { marginTop: '30px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'item', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'huge inverted history middle aligned icon', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { className: 'header', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 104
                            },
                            __self: this
                          },
                          'XEM KH\xD4NG GI\u1EDAI H\u1EA0N'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'description', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 105
                            },
                            __self: this
                          },
                          'Xem kh\xF4ng gi\u1EDBi h\u1EA1n  t\u1EA5t c\u1EA3 video c\xF3 tr\xEAn th\u01B0 vi\u1EC7n.'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'item', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 109
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'huge inverted student middle aligned icon', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 110
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { className: 'header', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 112
                            },
                            __self: this
                          },
                          'GI\xC1O VI\xCAN KINH NGHI\u1EC6M'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'description', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 113
                            },
                            __self: this
                          },
                          'H\u1ECDc t\u1EEB gi\u1EA3ng vi\xEAn c\xF3 nhi\u1EC1u kinh nghi\u1EC7m trong linh v\u1EF1c.'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'item', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 116
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'huge inverted laptop middle aligned icon', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 117
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 118
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'a',
                          { className: 'header', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 119
                            },
                            __self: this
                          },
                          'H\u1ECCC T\u1EACP M\u1ECCI N\u01A0I'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'description', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120
                            },
                            __self: this
                          },
                          'H\u1ECDc t\u1EADp m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, tr\xEAn m\u1ECDi thi\u1EBFt b\u1ECB.'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Software;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Software);

/***/ })

});
//# sourceMappingURL=software.chunk.js.map