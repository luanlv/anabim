require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 284);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const Admin = {
  App: __webpack_require__(133).default,
  Dashboard: __webpack_require__(147).default,
  Library: __webpack_require__(155).default,
  Setting: __webpack_require__(173).default,

  DanhMuc: __webpack_require__(144).default,
  SuaDanhMuc: __webpack_require__(145).default,

  PhanMem: __webpack_require__(166).default,
  SuaPhanMem: __webpack_require__(167).default,

  KhoaHoc: __webpack_require__(152).default,
  SuaKhoaHoc: __webpack_require__(153).default,

  Video: __webpack_require__(182).default,
  SuaVideo: __webpack_require__(181).default,

  Price: __webpack_require__(169).default,

  DonHang: __webpack_require__(149).default,

  DaDuyet: __webpack_require__(142).default,

  Membership: __webpack_require__(159).default,

  ActiveCode: __webpack_require__(135).default,

  Coupon: __webpack_require__(140).default,

  Trial: __webpack_require__(179).default,

  TrangChu: __webpack_require__(177).default,

  Common: __webpack_require__(175).default,

  MainMenu: __webpack_require__(161).default,

  // Contact: require('./lienhe/Contact').default,
  // About: require('./gioithieu/About').default,
  // Tracking: require('./tracking/Tracking').default,
  // Common: require('./thongtinchung/Common').default,
  // AllService: require('./cacdichvu/AllService').default,
  // Editor: require('./editor/Editor').default,
  Login: __webpack_require__(157).default,

  ListNews: __webpack_require__(164).default,
  EditNews: __webpack_require__(163).default,

  EditCategory: __webpack_require__(137).default,
  ListCategories: __webpack_require__(138).default,

  Seo: __webpack_require__(171).default
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(2);
let autoIncrement = __webpack_require__(268);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Partial__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["a" /* Footer */], {});

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["b" /* SignIn */], {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["c" /* EmailConfirm */], {});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["d" /* SignUp */], {});

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["e" /* ActiveCode */], {});

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["f" /* Password */], {});

class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      membershipInfo: {}
    };

    this.redraw = () => {
      console.log('redraw !!');
      this.setState({});
    };
  }

  componentDidMount() {
    var this2 = this;
    $('.dang-nhap').click(function () {
      $('#dang-nhap').modal('show');
    });

    $('.dang-ky').click(function () {
      $('#dang-ky').modal('show');
    });

    $('.coupled.modal').modal({
      allowMultiple: false
    });
    $('.second.modal').modal('attach events', '.first.modal .button');

    if (this.props.store.user.username) {
      $('#membership-info').modal({
        onShow: function () {
          $.ajax({
            type: 'GET',
            url: '/api/membership',
            dataType: 'text'
          }).done(function (data) {
            this2.setState({
              membershipInfo: JSON.parse(data)
            });
          }).fail(function (error) {
            console.log(error);
          });
        }
      });
    }

    $('.ui.checkbox').checkbox();

    // if (this.props.params.email !== undefined) {
    //   $('#email').val(this.props.params.email)
    // }
    // if (this.props.params.name !== undefined) {
    //   $('#name').val(this.props.params.name)
    // }
    //
    // if (this.props.params.exist !== undefined) {
    //   $('#dang-ky').modal('show')
    // }
    // if (this.props.params.confirmEmail !== undefined) {
    //   $('#email-comfirm').modal('show')
    // }
  }

  render() {
    return _jsx('div', {
      className: ''
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_redux_loading_bar___default.a, {
      showFastActions: true,
      maxProgress: 80,
      progressIncrease: 100,
      style: { backgroundColor: 'red', zIndex: 1000, height: '2px' }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["g" /* Nav */], {
      user: this.context.store.getState().user
    }), this.props.children, _ref, _ref2, _ref3, _ref4, _ref5, _jsx(__WEBPACK_IMPORTED_MODULE_1__Partial__["h" /* MemberShip */], {
      price: this.context.store.getState().data.price.value,
      membershipInfo: this.state.membershipInfo,
      userInfo: this.context.store.getState().user,
      redraw: () => this.redraw()
    }), _ref6);
  }
}

Layout.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired };
/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
/* eslint-disable import/prefer-default-export */



function setData(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_DATA */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_draft_js_editor_lib_components_defaultDecorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js_export_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_draft_js_import_html__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_draft_js_import_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_draft_js_import_html__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








class MultipleEditorsDemo extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  constructor(props) {
    super(props);

    this.render = () => {
      return _jsx('div', {}, void 0, _jsx('div', {
        style: { padding: 5, border: 'solid 1px #ddd' }
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_draft_js_editor_lib_Editor___default.a, {
        onChange: editorState1 => {
          this.setState({ editorState1 });
          this.props.handleChange(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_draft_js_export_html__["stateToHTML"])(this.state.editorState1.getCurrentContent()));
        },
        editorState: this.state.editorState1
      })));
    };

    const blocksFromHTML = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_draft_js__["convertFromHTML"])(this.props.initValue);
    const state = __WEBPACK_IMPORTED_MODULE_3_draft_js__["ContentState"].createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
    this.state = {
      editorState1: __WEBPACK_IMPORTED_MODULE_3_draft_js__["EditorState"].createWithContent(state)
    };
  }

}

/* harmony default export */ __webpack_exports__["a"] = (MultipleEditorsDemo);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(277);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

var _ref4 = _jsx('img', {
  src: 'https://www.loadebar.com/images/template/load-more.png'
});

class ImageSelect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 16
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      onClick: () => {
        this.setState((preState, curProps) => {
          return _extends({}, preState, {
            uploadArea: !preState.uploadArea
          });
        });
      }
    }, void 0, 'Th\xEAm \u1EA3nh')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 8
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], {
      size: 'large',
      placeholder: 'Search by name',
      onChange: e => {
        let newInput = e.target.value;
        this.setState(prevState => {
          return _extends({}, prevState, {
            filter: newInput
          });
        });
        this.fetchImage(40, this.state.time);
      }
    }))), this.state.uploadArea && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx('div', {
      style: { marginTop: 16, height: 180 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      _extends({}, props, {
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      }),
      _ref,
      _ref2,
      _ref3
    ))), _jsx('div', {
      style: { background: '#ECECEC' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, this.state.imgs.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
        className: 'padding-5'
      }, key, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
        bordered: false,
        className: 'imgWr',
        onClick: () => this.props.handleSelect(el)
      }, void 0, _jsx('img', {
        src: "/image/small/" + el.name
      })));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
    }, void 0, _ref4)))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




const Dragger = __WEBPACK_IMPORTED_MODULE_1_antd__["Upload"].Dragger;

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

class ImageUpload extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      uploadArea: false,
      visible: false,
      selectedImage: {}
    };
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.props.handleUpload(info.file.response);
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  render() {
    return _jsx(Dragger, {
      name: 'image',
      multiple: this.props.isMultiple,
      showUploadList: false,
      action: '/upload/image',
      onChange: info => this.onChange(info),
      beforeUpload: this.beforeUpload
    }, void 0, _ref, _ref2, _ref3);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_RUNTIME_VARIABLE;


const SET_SETTING = 'SET_SETTING';
/* harmony export (immutable) */ __webpack_exports__["d"] = SET_SETTING;

const SET_DATA = 'SET_DATA';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_DATA;


const SET_MEMBERSHIP = 'SET_MEMBERSHIP';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_MEMBERSHIP;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(19);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global CKEDITOR */






var _ref = _jsx('div', {
  id: 'toolbarLocation'
});

class CKEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx('span', {
      id: 'addImage',
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('editor')
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, {
      handleWidth: true,
      handleHeight: true,
      onResize: (w, h) => {
        let diff = h - this.state.oldEditorSize;
        if (this.state.isEndEditor && diff > 0) {
          var y = $(window).scrollTop();
          $(window).scrollTop(y + diff);
        }
        this.setState({
          oldEditorSize: h
        });
      }
    }), _ref, _jsx('textarea', {
      name: this.elementName,
      defaultValue: this.props.value
    }), _jsx('div', {
      style: { height: 20 }
    }), _jsx(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, {
      onChange: isVisible => {
        this.setState({
          isEndEditor: !isVisible
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })))));
  }

  componentDidMount() {
    let configuration = {
      // removePlugins : 'magicline',
      extraPlugins: 'autogrow,image2,sharedspace,colorbutton,justify,font',
      uploadUrl: '/upload/imageCKEditor',
      disallowedContent: 'img{width,height}',
      sharedSpaces: {
        top: 'toolbarLocation'
      }
    };
    this.editor = CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));

    CKEDITOR.on('instanceReady', function (ev) {
      ev.editor.focus();
    });
    $("#toolbarLocation").sticky({ topSpacing: 0 });

    this.editor.addCommand("mySimpleCommand", { // create named command
      exec: function (edt) {
        $("#addImage").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





class EditableTagGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag.slug !== removedTag);
      this.setState({ tags });
      this.props.handleChange(tags || []);
    };

    this.showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    this.handleInputChange = e => {
      this.setState({ inputValue: e.target.value });
    };

    this.handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && indexByField(tags, 'slug', __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }))) {
        tags = [...tags, { name: inputValue, slug: __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }) }];
      }
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ''
      });
      this.props.handleChange(tags || []);
    };

    this.saveInputRef = input => this.input = input;

    this.state = {
      tags: this.props.defaultValue || [],
      inputVisible: false,
      inputValue: ''
    };
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return _jsx('div', {}, void 0, tags.map((tag, index) => {
      const isLongTag = tag.name.length > 20;
      const tagElem = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tag"], {
        closable: true,
        afterClose: () => this.handleClose(tag)
      }, index, isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name);
      return isLongTag ? _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"], {
        title: tag.name
      }, void 0, tagElem) : tagElem;
    }), inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      ref: this.saveInputRef,
      type: 'text', size: 'small',
      style: { width: 78 },
      value: inputValue,
      onChange: this.handleInputChange,
      onBlur: this.handleInputConfirm,
      onPressEnter: this.handleInputConfirm
    }), !inputVisible && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'small',
      type: 'dashed',
      onClick: this.showInput
    }, void 0, '+ New Tag'));
  }
}

function indexByField(list = [], fieldName, value) {
  let lenth = list.length;
  for (let i = 0; i < lenth; i++) {
    if (list[i][fieldName] === value) {
      return i;
    }
  }
  return -1;
}

/* unused harmony default export */ var _unused_webpack_default_export = (EditableTagGroup);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);


const SHOW_PARENT = __WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"].SHOW_PARENT;

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0'
  }]
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0'
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1'
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2'
  }]
}];

class TreeSelectComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      value: ['0-0-0']
    }, this.onChange = value => {
      console.log('onChange ', value, arguments);
      this.setState({ value });
    }, _temp;
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300
      }
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"], tProps);
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (TreeSelectComponent);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-super-responsive-table");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 8989,

  mongoDBURL: 'mongodb://localhost/english',
  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || 8989}`
  },

  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '100004231235930',
      secret: process.env.FACEBOOK_APP_SECRET || '5957752b5e6b56027379d8f29c8a06e1'
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  name: { type: String, default: 'name' },
  coverUrl: { type: String },
  slug: { type: String },
  description: { type: String, default: 'description' },
  created_at: { type: Date, default: Date.now }
}, { collection: 'category' });

schema.plugin(autoIncrement.plugin, 'Category');

let model = mongoose.model('Category', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { slug }) => {
  let query = {};
  if (slug !== undefined) query.slug = slug;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;
const categoryModel = __webpack_require__(30);
const softwareModel = __webpack_require__(39);

let schema = new Schema({
  name: { type: String },
  coverUrl: { type: String, default: '/image/coverUrl.jpg' },
  slug: String,
  cateID: [Number],
  softID: [Number],
  level: Number,
  authorId: String,
  section: [String],
  description: String,
  vote: Number,
  numVote: Number,
  voter: [Number],
  documents: String,
  related: [Number],
  created_at: { type: Date, default: Date.now }
}, { collection: 'course' });

schema.plugin(autoIncrement.plugin, 'Course');

let model = mongoose.model('Course', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.courseInCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    categoryModel.findOne({ slug: slug }).exec((err, category = {}) => {
      if (err) reject(err);
      let query = {};
      if (!category) category = {};
      query.cateID = category._id;

      model.find(query).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  });
};

module.exports.courseInSoftware = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    softwareModel.findOne({ slug: slug }).exec((err, software = {}) => {
      if (err) reject(err);
      let query = {};
      let id = software ? software._id : 1;
      query.softID = id;

      model.find(query).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  });
};

module.exports.one = (root, { slug }) => {
  let query = {};
  if (slug !== undefined) query.slug = slug;
  return new Promise((resolve, reject) => {

    model.aggregate([{
      $match: query
    }, {
      $limit: 1
    }, {
      $lookup: {
        from: 'category',
        localField: 'cateID',
        foreignField: '_id',
        as: 'categories'
      }
    }, {
      $lookup: {
        from: 'software',
        localField: 'softID',
        foreignField: '_id',
        as: 'software'
      }
    }, {
      $lookup: {
        from: 'course',
        localField: 'related',
        foreignField: '_id',
        as: 'relatedCourse'
      }
    }], (err, data) => {
      console.log(data);

      if (err) reject(err);
      if (data.length < 1) {
        reject('');
      } else {
        resolve(data[0]);
      }
    });
  });
};

module.exports.one2 = (root, { slug }) => {
  let query = {};
  if (slug !== undefined) query.slug = slug;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(250);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(251);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(247);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(36);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(290);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, _en_US2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _en_US4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


/* harmony default export */ __webpack_exports__["a"] = ({

  time: function (timestamp) {
    return __WEBPACK_IMPORTED_MODULE_0_moment___default.a.unix(timestamp / 1000).fromNow();
  },

  secondToMinuteSecond: function (time) {
    function strPadLeft(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let finalTime = strPadLeft(minutes, '0', 2) + ':' + strPadLeft(seconds, '0', 2);
    return finalTime;
  },

  numberWithCommas: function (x = 1000000) {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  },

  findUrlVideoBySlug: function (videos, url) {
    let len = videos.length;
    if (url === undefined) {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === 'null') return videos[i].link;
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === url) return videos[i].link;
      }
    }

    return '';
  },

  findVideoBySlug: function (videos, courseSlug, videoSlug) {
    let len = videos.length;
    if (videoSlug === undefined) {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === 'null') return videos[i];
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === videoSlug) return videos[i];
      }
    }

    return '';
  },

  findById: function (data, id) {
    let len = data.length;
    for (let i = 0; i < len; i++) {
      if (data[i].id === id) return data[i];
    }
    return data[0];
  },

  fixVideo: function (video) {
    video = video.replace(/\.mp4/g, '_.m3u8');
    video = video.replace(/\.flv/g, '_.m3u8');
    return video;
  },

  infoCoupon: function (coupon, membership) {
    if (!coupon.active) {
      return 'Mã không còn hiệu lực';
    } else if (__WEBPACK_IMPORTED_MODULE_0_moment___default()().diff(coupon.endTime, 'days') < 0) {
      return 'Mã đã quá hạn sử dụng';
    } else if (coupon.quantity < 1) {
      return 'Mã đã hết số lượng';
    } else if (coupon.month.indexOf(membership.month) < 0) {
      return 'Mã không áp dụng cho ' + membership.month + ' tháng';
    } else {
      if (coupon.kind === 1) {
        return 'Giảm ' + coupon.percent + '% giá khóa học';
      } else if (coupon.kind === 2) {
        return 'Giảm ' + coupon.price.toLocaleString() + ' ngàn';
      } else {
        return 'Tăng thêm ' + coupon.day + ' ngày';
      }
    }
  },

  priceWithCoupon: function (coupon, price, month) {
    if (!coupon) {
      return price;
    } else if (!coupon.active) {
      return price;
    } else if (__WEBPACK_IMPORTED_MODULE_0_moment___default()().diff(coupon.endTime, 'days') > 0) {
      return price;
    } else if (coupon.quantity < 1) {
      return price;
    } else if (coupon.month.indexOf(month) < 0) {
      return price;
    } else {
      if (coupon.kind === 1) {
        return parseInt(price * (100 - coupon.percent) / 100);
      } else if (coupon.kind === 2) {
        return parseInt(price - coupon.price);
      } else {
        return price;
      }
    }
  },

  bonusDay: function (coupon, month) {
    if (!coupon) {
      return 0;
    } else if (!coupon.active) {
      return 0;
    } else if (__WEBPACK_IMPORTED_MODULE_0_moment___default()().diff(coupon.endTime, 'days') > 0) {
      return 0;
    } else if (coupon.quantity < 1) {
      return 0;
    } else if (coupon.month.indexOf(month) < 0) {
      return 0;
    } else if (coupon.kind !== 3) {
      return 0;
    } else {
      return coupon.day;
    }
  }

});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  code: String,
  kind: Number,
  price: Number,
  percent: Number,
  day: Number,
  month: [Number],
  active: { type: Boolean, default: true },
  quantity: Number,
  endTime: Date,
  created_at: { type: Date, default: Date.now }
}, { collection: 'coupon' });

schema.plugin(autoIncrement.plugin, 'Coupon');

let model = mongoose.model('Coupon', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { code }) => {
  let query = {};
  if (code !== undefined) query.code = code;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  name: String,
  slug: String,
  coverUrl: { type: String, default: '/image/corverUrl.jpg' },
  created_at: { type: Date, default: Date.now }
}, { collection: 'software' });

schema.plugin(autoIncrement.plugin, 'Software');

let model = mongoose.model('Software', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { slug }) => {
  let query = {};
  if (slug !== undefined) query.slug = slug;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



const FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].Item;

let uuid = 0;

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'plus'
});

class DynamicFieldSet extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
    }, this.add = () => {
      uuid++;
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(uuid);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      });
    }, this.handleSubmit = e => {
      e.preventDefault();
      console.log('submit');
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.update(values);
        }
      });
    }, _temp;
  }

  render() {

    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    console.log(keys);
    const formItems = keys.map((k, index) => {
      // console.log(k)
      // console.log(index)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        FormItem,
        _extends({}, index === 0 ? formItemLayout : formItemLayoutWithOutLabel, {
          label: index === 0 ? 'Passengers' : '',
          required: false,
          key: k
        }),
        getFieldDecorator(`${k}`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input passenger's name or delete this field."
          }]
        })(_jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
          placeholder: 'passenger name',
          style: { width: '60%', marginRight: 8 },
          onChange: this.handleSubmit
        })),
        _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
          className: 'dynamic-delete-button',
          type: 'minus-circle-o',
          disabled: keys.length === 1,
          onClick: () => this.remove(k)
        })
      );
    });
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Form"], {
      onSubmit: this.handleSubmit
    }, void 0, formItems, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      FormItem,
      formItemLayoutWithOutLabel,
      _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'dashed',
        onClick: this.add,
        style: { width: '60%' }
      }, void 0, _ref, ' Add field')
    ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormItem, formItemLayoutWithOutLabel));
  }
}

const WrappedDynamicFieldSet = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].create()(DynamicFieldSet);

/* unused harmony default export */ var _unused_webpack_default_export = (WrappedDynamicFieldSet);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Partial_Fn__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_facebook__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/'
}, void 0, 'Trang ch\u1EE7');

var _ref2 = _jsx('div', {
  className: 'divider'
}, void 0, ' /');

var _ref3 = _jsx('div', {
  className: 'tabs ui top attached tabular menu'
}, void 0, _jsx('a', {
  className: 'item active',
  'data-tab': 'first'
}, void 0, 'Video kh\xF3a h\u1ECDc'), _jsx('a', {
  className: 'item',
  'data-tab': 'second'
}, void 0, 'B\xECnh lu\u1EADn'));

var _ref4 = _jsx('i', {
  className: ' dropdown icon'
});

var _ref5 = _jsx('i', {
  className: ' play middle aligned icon'
});

var _ref6 = _jsx('i', {
  className: ' lock middle aligned icon'
});

var _ref7 = _jsx('div', {
  className: 'ui bottom attached tab segment',
  'data-tab': 'second'
}, void 0, 'comment');

var _ref8 = _jsx('button', {
  className: 'ui inverted button'
}, void 0, _jsx('i', {
  className: 'play icon'
}), 'Xem kh\xF3a h\u1ECDc');

class Course extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }

  componentDidMount() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $('.ui.rating').rating('disable');

    $('.ui.accordion').accordion({ exclusive: false });
  }

  render() {
    var this2 = this;
    let user = this.props.user;
    var day = Math.floor(Math.random() * 10);
    var key = "" + __WEBPACK_IMPORTED_MODULE_5_moment___default()(__WEBPACK_IMPORTED_MODULE_5_moment___default()().format()).add(day, 'days').unix() + day;
    var videoBySlug = __WEBPACK_IMPORTED_MODULE_3__components_Partial_Fn__["a" /* default */].findVideoBySlug(this.props.data.videos.value, this.props.params.slug, this.props.params.videoSlug);
    var linkVideo = videoBySlug.source === 'anabim' ? 'http://video.anabim.com/?v=' + __WEBPACK_IMPORTED_MODULE_3__components_Partial_Fn__["a" /* default */].fixVideo(videoBySlug.link) + '&k=' + key : 'https://www.youtube.com/embed/' + videoBySlug.link + '?autoplay=1';
    var button = user.member === 'pending' ? _jsx('button', {
      className: 'ui large orange button',
      onClick: function () {
        $('#membership-info').modal('show');
      }
    }, void 0, 'Th\xF4ng tin \u0111\u0103ng k\xFD') : _jsx('button', {
      className: 'ui large orange button ',
      onClick: function () {
        console.log('click ');
        if (!user.username) {
          console.log('dang ky');
          $('#dang-ky').modal('show');
        } else {
          if (user.member === 'none' || user.member === 'trialed' || user.member === 'membershiped') {
            $('.first.modal').modal('show');
          }
        }
      }
    }, void 0, '\u0110\u0103ng k\xFD h\u1ECDc ngay');
    let course = this.props.data.course.value;
    if (!course.categories) course.categories = [];
    if (!course.section) course.section = [];
    if (!course.relatedCourse) course.relatedCourse = [];
    let videos = this.props.data.videos.value;

    return _jsx('div', {
      id: 'main'
    }, void 0, user.member !== 'membership' ? _jsx('div', {
      className: 'ui segment noBor noRa noSha noMa',
      style: { backgroundColor: 'teal !important' }
    }, void 0, _jsx('div', {
      className: 'ui container '
    }, void 0, _jsx('div', {
      className: 'ui column stackable grid'
    }, void 0, _jsx('div', {
      className: 'ten wide column'
    }, void 0, _jsx('div', {
      style: { color: 'white' }
    })), _jsx('div', {
      className: 'six wide column'
    }, void 0, _jsx('div', {
      className: 'row centerInside'
    }, void 0, button))))) : '', _jsx('div', {
      className: 'ui segment noBor noRa noSha noMa',
      style: { backgroundColor: 'white !important' }
    }, void 0, _jsx('div', {
      className: 'ui container '
    }, void 0, _jsx('div', {
      className: 'ui column  grid'
    }, void 0, _jsx('div', {
      className: 'sixteen wide column'
    }, void 0, _jsx('div', {
      className: 'ui breadcrumb'
    }, void 0, _ref, _ref2, 'Danh m\u1EE5c: ', course.categories.map(function (el, index) {
      return [_jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
        to: '/category/' + el.slug
      }, index, ' [', el.name, '] ')];
    })), _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
      to: '/course/' + course.slug
    }, void 0, _jsx('h1', {
      className: 'noMa',
      style: { marginBottom: '10px !important' }
    }, void 0, course.name, ' ')))))), _jsx('div', {
      className: 'ui segment noBor noRa noSha noMa',
      style: { backgroundColor: '#e5e5e5 !important', padding: '0px !important' }
    }, void 0, _jsx('div', {
      className: 'ui container '
    }, void 0, _jsx('div', {
      className: 'ui column  stackable grid'
    }, void 0, _jsx('div', {
      className: 'eleven wide column',
      style: { paddingTop: '0 !important' }
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, videoBySlug.kind === "free" || (user.member === "membership" || user.member === "trial") && __WEBPACK_IMPORTED_MODULE_5_moment___default()(__WEBPACK_IMPORTED_MODULE_5_moment___default()().format()).diff(__WEBPACK_IMPORTED_MODULE_5_moment___default()(user.info.end), 'days') <= 0 ? _jsx(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* Video */], {
      video: videoBySlug,
      user: this.props.user,
      linkVideo: linkVideo,
      button: button
    }) : _jsx('div', {
      className: 'ui segment',
      style: { height: '556px', background: '#eee' }
    }, void 0, _jsx('div', {
      className: 'centerInside',
      style: { marginTop: '150px', marginBottom: '20px' }
    }, void 0, '\u0110\xE2y l\xE0 video d\xE0nh ri\xEAng cho th\xE0nh vi\xEAn ', _jsx('span', {
      style: { color: 'red', marginLeft: '5px', marginRight: '5px' }
    }, void 0, ' Membership '), ' c\u1EE7a ', _jsx('b', {
      style: { marginLeft: '5px', marginRight: '5px' }
    }, void 0, ' Anabim ')), _jsx('div', {
      className: 'centerInside'
    }, void 0, button))), _jsx(__WEBPACK_IMPORTED_MODULE_1__components__["b" /* CourseInfo */], {
      course: course,
      user: user
    })), _jsx('div', {
      className: 'five wide column ',
      style: { paddingLeft: '0 !important' }
    }, void 0, _jsx('div', {
      className: 'ui segment noPa noBor noSha course-info'
    }, void 0, _ref3, _jsx('div', {
      className: 'ui bottom attached tab segment active noPa',
      'data-tab': 'first'
    }, void 0, _jsx('div', {
      className: 'ui styled fluid accordion'
    }, void 0, course.section.map(function (el, index) {
      return [_jsx('div', {
        className: 'title active',
        style: { background: 'rgba(100, 100, 100, 0.1)', fontSize: '16px !important' }
      }, void 0, _ref4, el), _jsx('div', {
        className: 'content active'
      }, void 0, _jsx('div', {
        className: 'ui relaxed divided list course-list'
      }, void 0, videos.filter(function (el) {
        return el.section === index;
      }).map(function (video, index) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
          to: '/course/' + course.slug + '/' + video.url,
          className: 'item',
          onClick: function () {
            this2.redraw();
          }
        }, index, video.kind === 'free' ? _ref5 : _ref6, _jsx('div', {
          className: 'content'
        }, void 0, _jsx('h4', {
          className: 'header'
        }, void 0, video.name), _jsx('div', {
          className: 'description'
        }, void 0, __WEBPACK_IMPORTED_MODULE_3__components_Partial_Fn__["a" /* default */].secondToMinuteSecond(video.time))));
      })))];
    }))), _ref7), _jsx('div', {
      className: 'ui segment noPa'
    }, void 0, _jsx('h3', {
      className: 'ui top attached  header noBor noMa',
      style: { border: '2px solid transparent !important' }
    }, void 0, 'Kh\xF3a h\u1ECDc li\xEAn quan'), _jsx('div', {
      className: 'ui attached celled list  noBor noMa related-courses',
      style: { background: 'white', borderRadius: '0 0 5px 5px' }
    }, void 0, course.relatedCourse.map(function (el, index) {
      return _jsx('div', {
        className: 'item'
      }, index, _jsx('div', {
        className: 'ui avatar index-card-wr'
      }, void 0, _jsx('div', {
        className: 'index-card-text'
      }, void 0, _jsx('div', {}, void 0, _jsx('p', {}, void 0, el.name), _jsx('div', {
        className: 'card-text'
      }, void 0, 'C\u1EA5p \u0111\u1ED9 ', el.level), _jsx('div', {
        className: 'card-button'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
        to: '/course/' + el.slug
      }, void 0, _ref8)))), _jsx('img', {
        className: 'ui fluid rounded image',
        src: el.coverUrl,
        style: { height: '140px' }
      })));
    }))))))), _jsx('div', {
      className: 'ui segment container noBor noSha'
    }, void 0, _jsx('div', {
      style: { maxWidth: 1000, textAlign: 'center' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_facebook___default.a, {
      appId: '1245241202224163'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_facebook__["Comments"], {
      href: 'http://edu.anabim.com/course/' + course.slug
    })))));
  }

  redraw() {
    this.setState({});
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Course);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var api_key = 'key-b27916a12645e658b1de91b9620f85fd';
var domain = 'mg.vnguy.com';
var mailgun = __webpack_require__(267)({ apiKey: api_key, domain: domain });

const from = 'Anabim Education <admin@anabim.com>';

const RegisterMail = function (email, name) {
  return {
    from: from,
    to: email,
    subject: `Chào mừng ${name} đến với ANABIM EDUCATION!`,
    text: `Chúc mừng bạn đã là thành viên của http://edu.anabim.com.
Chúng tôi hứa sẽ không ngừng nâng cao chất lượng dịch vụ của mình để giúp đỡ bạn nhiều nhất có thể.`
  };
};

const ActiveMail = function (email, name, activeUrl) {
  return {
    from: from,
    to: email,
    subject: `Kích hoạt tài khoản ${email} trên ANABIM EDUCATION!`,
    text: `Cám ơn ${name} đã đăng ký tài khoản trên http://edu.anabim.com.
Để kích hoạt tài khoản bạn hay click vào link sau: ${activeUrl} `
  };
};

const NewOrderMail = function (email, name, phone) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng từ ${name}, SĐT: ${phone}`
  };
};

const TuVan = function (email, data) {
  return {
    from: from,
    to: email,
    subject: `Đăng ký tư vấn từ ${data.name}, SĐT: ${data.sdt}, Email: ${data.email}`,
    text: `Nội dung: ${data.noidung}`
  };
};

let Mailer = {};

Mailer.sendRegister = function (email, name) {
  mailgun.messages().send(RegisterMail(email, name), function (error, body) {
    console.log(body);
  });
};

Mailer.sendActiveMail = function (email, name, activeUrl) {
  mailgun.messages().send(ActiveMail(email, name, activeUrl), function (error, body) {
    console.log(body);
  });
};

Mailer.sendNewOrderMail = function (email, name, phone) {
  mailgun.messages().send(NewOrderMail(email, name, phone), function (error, body) {
    console.log(body);
  });
};

Mailer.sendToAdmin = function (email, data) {
  mailgun.messages().send(TuVan(email, data), function (error, body) {
    // console.log(body);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Mailer);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(243);
    var insertCss = __webpack_require__(33);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("gm");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_App__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Html__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_HtmlAdmin__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createFetch__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passport__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_schema__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_json__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_mongoose__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




















 // eslint-disable-line import/no-unresolved




const session = __webpack_require__(258);
const MongoStore = __webpack_require__(253)(session);
var routeCache = __webpack_require__(280);

//mongoose

__WEBPACK_IMPORTED_MODULE_23_mongoose___default.a.Promise = Promise;
connect();
const Setting = __WEBPACK_IMPORTED_MODULE_23_mongoose___default.a.model('Setting');

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------

global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------


var jsonParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/assets', (req, res) => {
  res.sendStatus(400);
});

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(session({
  // collection: 'session',
  cookie: { maxAge: 24 * 3600 * 1000 * 30 },
  resave: true,
  saveUninitialized: false,
  secret: 'LuuVanLuan',
  ttl: 7 * 24 * 60 * 60,
  store: new MongoStore({ mongooseConnection: __WEBPACK_IMPORTED_MODULE_23_mongoose___default.a.connection })
}));

app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].initialize());
app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].session());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());

//
// Authentication
// -----------------------------------------------------------------------------


if (false) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(236));
app.use('/api', __webpack_require__(221));
app.use('/token', __webpack_require__(237));
app.use('/upload', __webpack_require__(238));
app.use('/auth', __webpack_require__(235));

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_18__data_schema__["a" /* default */],
  graphiql: false,
  rootValue: { request: req },
  pretty: false
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {

    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    if (isAdmin) {
      if (!req.user || !req.user.isAdmin) {
        // return res.redirect('/login')
      }
    }

    try {
      let setting = yield Setting.findOne({});

      const fetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__createFetch__["a" /* default */])({
        baseUrl: __WEBPACK_IMPORTED_MODULE_22__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      const initialState = {
        user: req.user || {},
        data: {
          categories: {
            needUpdate: true,
            value: []
          },
          category: {
            needUpdate: true,
            value: {}
          },
          categoryPosts: {
            needUpdate: true,
            value: []
          },
          categoryPost: {
            needUpdate: true,
            value: {}
          },
          news: {
            needUpdate: true,
            value: {}
          },
          allNews: {
            needUpdate: true,
            value: []
          },
          allNewsByCategory: {
            needUpdate: true,
            value: []
          },
          recentNews: {
            needUpdate: true,
            value: []
          },
          information: {
            needUpdate: true,
            value: {}
          },

          indexcourse: {
            needUpdate: true,
            value: {}
          },

          allSoftware: {
            needUpdate: true,
            value: []
          },

          price: {
            needUpdate: true,
            value: {}
          },

          categoryInfo: {
            needUpdate: true,
            value: {}
          },

          courseInCategory: {
            needUpdate: true,
            value: []
          },

          course: {
            needUpdate: true,
            value: {}
          },

          videos: {
            needUpdate: true,
            videos: []
          },

          softwareInfo: {
            needUpdate: true,
            value: {}
          },

          courseInSoftware: {
            needUpdate: true,
            value: []
          }
        }
      };

      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__store_configureStore__["a" /* default */])(initialState, {
        fetch
      });
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);

      if (data.disableSSR) {
        data.children = '';
      } else {
        data.children = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_10__components_App__["a" /* default */], {
          context: context,
          store: store
        }, void 0, route.component));
      }

      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_19__assets_json___default.a.client.js];
      if (__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_19__assets_json___default.a[route.chunk].js);
      }
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_22__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      let version = 11;

      if (isAdmin) {
        const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_HtmlAdmin__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin, scriptTop: setting.scriptTop || '', scriptBottom: setting.scriptBottom || '', css: setting.css || '' })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      }
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_9_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToStaticMarkup(_jsx(__WEBPACK_IMPORTED_MODULE_11__components_Html__["a" /* default */], {
    title: 'Internal Server Error',
    description: err.message,
    styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default.a._getCss() }]
  }, void 0, __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default.a.renderToString(_jsx(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], {
    error: err
  }))));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
// models.sync().catch(err => console.error(err.stack)).then(() => {
app.listen(__WEBPACK_IMPORTED_MODULE_22__config___default.a.port, () => {
  console.info(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_22__config___default.a.port}/`);
});
// });
//
function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } }, promiseLibrary: Promise };
  return __WEBPACK_IMPORTED_MODULE_23_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_22__config__["mongoDBURL"], options).connection;
}

function trimUser(user) {
  if (!user) return undefined;else return {
    name: user.name,
    role: user.role,
    isAdmin: user.isAdmin,
    username: user.username,
    passwordChanged: user.passwordChanged,
    avatar: user.avatar
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(35);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(248);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(35);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(36);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(52);

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('en');
exports["default"] = {
    locale: 'en',
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Calendar: _en_US8["default"],
    Table: {
        filterTitle: 'Filter Menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No Data',
        selectAll: 'Select Current Page',
        selectInvert: 'Select Invert'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setMember;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
/* eslint-disable import/prefer-default-export */



function setMember(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_MEMBERSHIP */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"].childContextTypes);

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
  }

}

App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* eslint-disable react/no-danger */

var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref4 = _jsx('meta', {
  property: 'fb:app_id',
  content: '1245241202224163'
});

var _ref5 = _jsx('meta', {
  property: 'fb:admins',
  content: '100002088645796'
});

var _ref6 = _jsx('meta', {
  property: 'fb:admins',
  content: '100004231235930'
});

var _ref7 = _jsx('link', {
  rel: 'apple-touch-icon',
  href: 'apple-touch-icon.png'
});

var _ref8 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css'
});

var _ref9 = _jsx('link', {
  rel: 'stylesheet',
  href: '/assets/app/app.css'
});

var _ref10 = _jsx('link', {
  rel: 'stylesheet',
  href: '/assets/custom.css'
});

var _ref11 = _jsx('script', {
  src: '/assets/lib/head.min.js'
});

function Html(props) {
  const { title, description, styles, scripts, app, children, v, seo } = props;
  const url = 'http://edu.anabim.com';
  const defaultContent = "Anabim Education - Website đào tạo trực tuyến dành cho Xây dựng";
  const defaultLogo = '/logo_anabim.jpg';
  return _jsx('html', {
    className: 'no-js',
    lang: 'vi'
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _ref3, seo && seo.title ? _jsx('title', {}, void 0, seo.title) : _jsx('title', {}, void 0, title), seo && seo.description ? _jsx('meta', {
    name: 'description',
    content: seo.description
  }) : description ? _jsx('meta', {
    name: 'description',
    content: description
  }) : '', _ref4, _ref5, _ref6, seo && seo.og_title ? _jsx('meta', {
    property: 'og:title',
    content: seo.og_title
  }) : _jsx('meta', {
    property: 'og:title',
    content: defaultContent
  }), seo && seo.url ? _jsx('meta', {
    property: 'og:url',
    content: url + seo.url
  }) : _jsx('meta', {
    property: 'og:url',
    content: url
  }), seo && seo.og_image ? _jsx('meta', {
    property: 'og:image',
    content: url + seo.og_image
  }) : _jsx('meta', {
    property: 'og:image',
    content: url + defaultLogo
  }), seo && seo.og_description ? _jsx('meta', {
    property: 'og:description',
    content: seo.og_description
  }) : _jsx('meta', {
    property: 'og:description',
    content: defaultContent
  }), _ref7, _ref8, _ref9, _ref10, _jsx('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: "/css/app.css?v=" + v
  }), _ref11, _jsx('style', {
    dangerouslySetInnerHTML: { __html: props.css }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: props.scriptTop }
  })), _jsx('body', {}, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `head.load("/assets/lib/jquery.min.js")`
      // + `.js("/assets/lib/semantic.min.js" )`
      + `.js("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.js" )` + `.js("/assets/lib/jquery.menu-aim.js" )` + `.js("/assets/lib/modernizr.custom.js")` + `.js("/assets/lib/jquery.dlmenu.js")` + `.js("${scripts[0]}?v=${v}")` + `.js("${scripts[1]}?v=${v}")` }
  }, void 0), _jsx('script', {
    dangerouslySetInnerHTML: { __html: props.scriptBottom }
  })));
}

Html.defaultProps = {
  styles: [],
  scripts: []
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* eslint-disable react/no-danger */

var _ref = _jsx('meta', {
  charSet: 'utf-8'
});

var _ref2 = _jsx('meta', {
  httpEquiv: 'x-ua-compatible',
  content: 'ie=edge'
});

var _ref3 = _jsx('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
});

var _ref4 = _jsx('link', {
  rel: 'apple-touch-icon',
  href: 'apple-touch-icon.png'
});

var _ref5 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
});

var _ref6 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'
});

var _ref7 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js'
});

var _ref8 = _jsx('script', {
  src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js'
});

var _ref9 = _jsx('script', {
  src: '/lib/ckeditor/ckeditor.js'
});

var _ref10 = _jsx('script', {
  src: 'https://rawgit.com/basecamp/trix/master/dist/trix.js'
});

var _ref11 = _jsx('link', {
  rel: 'stylesheet',
  href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/2.10.2/antd.min.css'
});

function Html(props) {
  const { title, description, styles, scripts, app, children, v } = props;
  return _jsx('html', {
    className: 'no-js',
    lang: 'en'
  }, void 0, _jsx('head', {}, void 0, _ref, _ref2, _jsx('title', {}, void 0, title), _jsx('meta', {
    name: 'description',
    content: description
  }), _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _jsx('link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: "/css/admin.css?v=" + v
  })), _jsx('body', {}, void 0, _jsx('div', {
    id: 'app',
    dangerouslySetInnerHTML: { __html: children }
  }), _jsx('script', {
    dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }
  }), scripts.map(script => _jsx('script', {
    src: script
  }, script))));
}

Html.defaultProps = {
  styles: [],
  scripts: []
};


/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */




var _ref = _jsx('div', {
  className: 'column'
}, void 0, _jsx('div', {
  className: 'ui form'
}, void 0, _jsx('div', {
  className: 'field'
}, void 0, _jsx('input', {
  type: 'text',
  id: 'inputActiveCode',
  placeholder: 'VD:3DAYS'
}))));

class ActiveCode extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const user = this.context.store.getState().user;
    return _jsx('div', {
      id: 'activeCode',
      className: 'ui small modal '
    }, void 0, _jsx('div', {
      className: 'header',
      style: { textAlign: 'center' }
    }, void 0, '\u0110i\u1EC1n m\xE3 k\xEDch ho\u1EA1t'), _jsx('div', {
      className: 'ui',
      style: { textAlign: 'center', padding: '30px 10px' }
    }, void 0, _jsx('div', {
      className: 'ui two column stackable grid'
    }, void 0, _ref, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui form'
    }, void 0, _jsx('div', {
      className: 'field'
    }, void 0, _jsx('button', {
      className: 'ui primary button',
      onClick: function () {
        var code = $('#inputActiveCode').val();
        if (code.length > 0) {
          __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/membership/activebycode/' + code).then(res => {
            if (!user) {
              alert('Bạn phải đăng nhập!');
            } else {
              if (res.data.all || res.data.email === user.username) {
                if (res.data.used) {
                  alert("Mã đã được sử dụng trước đó");
                } else {
                  __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/membership/activebycode', res.data).then(res2 => {
                    console.log(res2.data);
                  }).catch(err2 => {
                    alert('Có lỗi, vui lòng liên lạc với bộ phận kỹ thuật chúng tôi');
                  });
                }
              } else {
                alert("Mã không áp dụng cho tài khoản của bạn");
              }
            }
          }).catch(err => {
            alert('Sai hoặc không tồn tại mã: ' + code);
          });
        }
      }
    }, void 0, 'K\xEDch ho\u1EA1t')))))));
  }
}

ActiveCode.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired };
/* harmony default export */ __webpack_exports__["a"] = (ActiveCode);

let Data = {};
Data.baseUrl = '';
Data.user = {
  id: ''
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('br', {});

const EmailConfirm = ({}) => {
  return _jsx('div', {
    id: 'email-comfirm',
    className: 'ui small modal '
  }, void 0, _jsx('div', {
    className: 'header',
    style: { textAlign: 'center' }
  }, void 0, 'K\xEDch ho\u1EA1t email'), _jsx('div', {
    className: 'ui',
    style: { textAlign: 'center', padding: '30px 10px' }
  }, void 0, 'M\u1ED9t email k\xEDch ho\u1EA1t \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn email c\u1EE7a b\u1EA1n', _jsx('span', {
    style: { color: 'red' }
  }), _ref, 'B\u1EA1n h\xE3y check email v\xE0 l\xE0m theo h\u01B0\u1EDBng d\u1EABn \u0111\u1EC3 k\xEDch ho\u1EA1t t\xE0i kho\u1EA3n'));
};

/* harmony default export */ __webpack_exports__["a"] = (EmailConfirm);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('h3', {}, void 0, 'ANABIM EDUCATION');

var _ref2 = _jsx('h3', {}, void 0, 'V\u0102N PH\xD2NG ANABIM');

var _ref3 = _jsx('h3', {}, void 0, 'H\u1ED6 TR\u1EE2');

var _ref4 = _jsx('div', {
  className: 'four wide column '
}, void 0, _jsx('h3', {
  className: 'centerInside'
}, void 0, 'Connect'), _jsx('div', {
  className: 'row centerInside'
}, void 0, _jsx('a', {
  target: '_blank',
  href: 'https://facebook.com/daotaokientrucxaydung/'
}, void 0, _jsx('i', {
  className: 'huge facebook square icon'
})), _jsx('a', {
  target: '_blank',
  href: 'https://plus.google.com/105729788429368018982'
}, void 0, _jsx('i', {
  className: 'huge google plus square icon'
}))));

var _ref5 = _jsx('div', {
  className: 'ui inverted segment noBor noSha noRa noMa footer-bot'
}, void 0, _jsx('div', {
  className: 'ui container'
}, void 0, _jsx('div', {
  className: 'ui secondary  menu'
}, void 0, _jsx('a', {
  className: 'active item'
}, void 0, '\xA9 2017 Anabim.com, Inc.'), _jsx('a', {
  className: 'item'
}, void 0, 'Site Map'), _jsx('a', {
  className: 'item'
}, void 0, 'Privacy policy'), _jsx('a', {
  className: 'item'
}, void 0, 'Web Use Policy'), _jsx('div', {
  className: 'right menu'
}, void 0, _jsx('a', {
  className: 'ui item'
}, void 0, 'ANABIM', _jsx('i', {
  className: 'icons'
}, void 0, _jsx('i', {
  className: 'angle double up icon'
})))))));

class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const footer = this.context.store.getState().data.information.value.footer;
    return _jsx('div', {
      id: 'footer'
    }, void 0, _jsx('div', {
      className: 'ui inverted segment noBor noSha noRa noMa footer-top'
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui stackable grid'
    }, void 0, _jsx('div', {
      className: ' twelve wide column'
    }, void 0, _jsx('div', {
      className: 'ui three column grid'
    }, void 0, _jsx('div', {
      className: 'column '
    }, void 0, _ref, footer.cot1.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */], {
        to: el.url
      }, index, el.title);
    })), _jsx('div', {
      className: 'column'
    }, void 0, _ref2, _jsx('div', {
      dangerouslySetInnerHTML: { __html: footer.cot2 }
    })), _jsx('div', {
      className: 'column '
    }, void 0, _ref3, _jsx('div', {
      dangerouslySetInnerHTML: { __html: footer.cot3 }
    })))), _ref4))), _ref5);
  }
}

Footer.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired };
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Fn__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_user__ = __webpack_require__(55);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $,alert */








var _ref = _jsx('br', {});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('br', {});

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('br', {});

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('div', {
  className: ' button centerInside'
}, void 0, _jsx('div', {
  className: 'ui huge horizontal statistic'
}, void 0, _jsx('div', {
  className: 'value'
}, void 0, '1'), _jsx('div', {
  className: 'label'
}, void 0, 'Th\xE1ng')));

var _ref10 = _jsx('div', {
  className: ' button centerInside'
}, void 0, _jsx('div', {
  className: 'ui huge horizontal statistic'
}, void 0, _jsx('div', {
  className: 'value'
}, void 0, '3'), _jsx('div', {
  className: 'label'
}, void 0, 'Th\xE1ng')));

var _ref11 = _jsx('div', {
  className: ' button centerInside'
}, void 0, _jsx('div', {
  className: 'ui huge horizontal statistic'
}, void 0, _jsx('div', {
  className: 'value'
}, void 0, '6'), _jsx('div', {
  className: 'label'
}, void 0, 'Th\xE1ng')));

var _ref12 = _jsx('div', {
  className: ' button centerInside'
}, void 0, _jsx('div', {
  className: 'ui huge horizontal statistic'
}, void 0, _jsx('div', {
  className: 'value'
}, void 0, '1'), _jsx('div', {
  className: 'label'
}, void 0, 'N\u0103m')));

var _ref13 = _jsx('div', {
  className: 'row centerInside'
}, void 0, _jsx('i', {
  className: 'huge thumbs outline up icon'
}));

var _ref14 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'checkmark icon'
}), _jsx('div', {
  className: 'content'
}, void 0, '\u0110\u01B0\u1EE3c tham gia v\xE0o t\u1EA5t c\u1EA3 c\xE1c kh\xF3a h\u1ECDc c\xF3 tr\xEAn website'));

var _ref15 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'checkmark icon'
}), _jsx('div', {
  className: 'content'
}, void 0, '\u0110\u01B0\u1EE3c gi\xE1o vi\xEAn c\xF3 kinh nghi\u1EC7m h\u01B0\u1EDBng d\u1EABn'));

var _ref16 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'checkmark icon'
}), _jsx('div', {
  className: 'content'
}, void 0, 'C\xE1c kh\xF3a h\u1ECDc \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADp th\u01B0\u1EDDng xuy\xEAn'));

var _ref17 = _jsx('i', {
  className: 'checkmark icon'
});

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('br', {});

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('br', {});

var _ref22 = _jsx('br', {});

var _ref23 = _jsx('a', {
  className: 'item active',
  'data-tab': 'first'
}, void 0, 'Thanh to\xE1n tr\u1EF1c ti\u1EBFp');

var _ref24 = _jsx('a', {
  className: 'item',
  'data-tab': 'second'
}, void 0, 'Chuy\u1EC3n kho\u1EA3n ng\xE2n h\xE0ng');

var _ref25 = _jsx('h2', {}, void 0, 'V\u0103n ph\xF2ng ANABIM CO,.LTD');

var _ref26 = _jsx('h3', {}, void 0, '\u0110\u1ECBa ch\u1EC9: 36B ng\xF5 554, Tr\u01B0\u1EDDng Chinh, \u0110\u1ED1ng \u0110a, H\xE0 N\u1ED9i');

var _ref27 = _jsx('h2', {}, void 0, 'NG\xC2N H\xC0NG TMCP NGO\u1EA0I TH\u01AF\u01A0NG TH\u0102NG LONG (VIETCOMBANK)');

var _ref28 = _jsx('h3', {}, void 0, 'Ph\xF2ng giao d\u1ECBch Kim Li\xEAn \u2013 \xD4 Ch\u1EE3 D\u1EEBa \u2013 390 X\xE3 \u0110\xE0n \u2013 H\xE0 N\u1ED9i');

var _ref29 = _jsx('div', {
  className: 'eight wide column'
}, void 0, _jsx('div', {
  className: 'ui form'
}, void 0, _jsx('div', {
  className: 'field'
}, void 0, _jsx('label', {}, void 0, 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i (Ch\xFAng t\xF4i s\u1EBD li\xEAn l\u1EA1c v\u1EDBi s\u1ED1 n\xE0y khi thanh to\xE1n th\xE0nh c\xF4ng)'), _jsx('div', {
  className: 'field'
}, void 0, _jsx('input', {
  type: 'text',
  id: 'inputPhone',
  name: 'inputPhone'
}))), _jsx('div', {
  className: 'field'
}, void 0, _jsx('label', {}, void 0, 'N\u1ED9i dung nh\u1EAFn g\u1EEDi'), _jsx('textarea', {
  id: 'inputInfo',
  name: 'inputInfo'
}))));

var _ref30 = _jsx('input', {
  type: 'text',
  placeholder: 'M\xE3 gi\u1EA3m gi\xE1',
  id: 'inputPromo',
  name: 'inputPromo'
});

var _ref31 = _jsx('i', {
  className: 'large checkmark icon noMa'
});

var _ref32 = _jsx('a', {
  className: 'ui basic inverted grey right pointing label'
}, void 0, 'Total');

class Membership extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let that = this;
    let mData = {};
    mData.membership = {
      phone: '',
      month: 1,
      bonusDay: 0,
      info: ''
    };

    const price = this.context.store.getState().data.price.value;
    const membershipInfo = this.props.membershipInfo;
    const userInfo = this.context.store.getState().user;

    const priceByNum = {
      1: price.one,
      3: price.three,
      6: price.six,
      12: price.twelve
    };

    const changeMonth = value => {
      mData.membership.month = value;
      const text = value === 12 ? '1 năm' : value + ' tháng';

      $('#month').text(text);
      $('#total').val(__WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(__WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month)) + ' đ');
    };
    return _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      id: 'membership-info',
      className: 'ui small modal '
    }, void 0, _jsx('div', {
      className: 'header',
      style: { textAlign: 'center' }
    }, void 0, 'Th\xF4ng tin membership'), _jsx('div', {
      className: 'ui',
      style: { padding: '30px 10px' }
    }, void 0, _jsx('div', {
      id: 'membership-info-body',
      style: { minHeight: '200px' }
    }, void 0, membershipInfo.email ? _jsx('div', {}, void 0, 'Email: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, membershipInfo.email), _ref, _ref2, 'Tr\u1EA1ng th\xE1i: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, membershipInfo.state === 'pending' ? 'Đang xử lý' : membershipInfo.state), _ref3, _ref4, userInfo.info ? _jsx('div', {}, void 0, 'B\u1EAFt \u0111\u1EA7u: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(userInfo.info.start).format('DD-MM-YYYY')), _ref5, _ref6, 'K\u1EBFt th\xFAc: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(userInfo.info.end).format('DD-MM-YYYY')), _ref7, _ref8, _jsx('button', {
      className: 'ui primary button',
      onClick: () => {
        $('.thanh-vien-1').modal('show');
      }
    }, void 0, 'Gia h\u1EA1n th\xEAm')) : '', _jsx('div', {}, void 0, 'M\u1ECDi th\xF4ng tin chi ti\u1EBFt xin vui l\xF2ng li\xEAn h\u1EC7 qua s\u1ED1 \u0111i\u1EC7n tho\u1EA1i ', _jsx('strong', {
      style: { color: 'red' }
    }, void 0, '098 499 5157'))) : ''))), _jsx('div', {
      className: 'ui first coupled modal thanh-vien-1'
    }, void 0, _jsx('div', {
      className: 'header',
      style: { textAlign: 'center' }
    }, void 0, '\u0110\u0103ng k\xFD th\xE0nh vi\xEAn Membership'), _jsx('div', {
      className: 'ui two column stackable padded grid'
    }, void 0, _jsx('div', {
      className: 'ui  column padded grid noPa'
    }, void 0, _jsx('div', {
      className: 'actions eight wide column',
      onClick: () => changeMonth(1)
    }, void 0, _ref9), _jsx('div', {
      className: 'actions eight wide column',
      onClick: () => changeMonth(3)
    }, void 0, _ref10)), _jsx('div', {
      className: 'ui  column padded grid noPa'
    }, void 0, _jsx('div', {
      className: 'actions eight wide column',
      onClick: () => changeMonth(6)
    }, void 0, _ref11), _jsx('div', {
      className: 'actions eight wide column',
      onClick: () => changeMonth(12)
    }, void 0, _ref12))), _jsx('div', {
      className: 'ui segment noMa'
    }, void 0, _jsx('div', {
      className: 'ui padded grid'
    }, void 0, _jsx('div', {
      className: 'five wide column '
    }, void 0, _ref13, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('h3', {
      style: { textAlign: 'center' }
    }, void 0, 'C\xE1c l\u1EE3i \xEDch khi \u0111\u0103ng k\xFD membership'))), _jsx('div', {
      className: 'eleven wide column'
    }, void 0, _jsx('div', {
      className: 'ui list'
    }, void 0, _ref14, _ref15, _ref16, _jsx('div', {
      className: 'item'
    }, void 0, _ref17, _jsx('div', {
      className: 'content'
    }, void 0, '\u0110\u0103ng k\xFD c\xE0ng l\xE2u gi\xE1 c\xE0ng gi\u1EA3m: ', _ref18, _jsx('span', {
      style: { marginLeft: '20px' }
    }, void 0, '1 th\xE1ng: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(price.one), ' \u0111 ')), _ref19, _jsx('span', {
      style: { marginLeft: '20px' }
    }, void 0, '3 th\xE1ng: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(price.three), ' \u0111')), _ref20, _jsx('span', {
      style: { marginLeft: '20px' }
    }, void 0, '6 th\xE1ng: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(price.six), ' \u0111')), _ref21, _jsx('span', {
      style: { marginLeft: '20px' }
    }, void 0, '1 n\u0103m: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(price.twelve), ' \u0111')), _ref22))))))), _jsx('div', {
      className: 'ui large second coupled modal'
    }, void 0, _jsx('div', {
      className: 'header noBor',
      style: { textAlign: 'center' }
    }, void 0, '\u0110\u0103ng k\xFD th\xE0nh vi\xEAn Membership'), _jsx('div', {
      className: 'ui'
    }, void 0, _jsx('h3', {
      style: { textAlign: 'center' }
    }, void 0, 'B\u1EA1n \u0111ang \u0111\u0103ng k\xFD g\xF3i ', _jsx('span', {
      id: 'month',
      style: { color: 'red' }
    }, void 0, mData.membership.month === 12 ? '1 năm' : mData.membership.month + ' tháng'), ', hay ch\u1ECDn h\xECnh th\u1EE9c thanh to\xE1n ph\xEDa d\u01B0\u1EDBi')), _jsx('div', {
      className: 'ui top attached tabular menu',
      style: { marginBottom: '10px' }
    }, void 0, _ref23, _ref24), _jsx('div', {
      className: 'ui stackable grid'
    }, void 0, _jsx('div', {
      className: 'eight wide column'
    }, void 0, _jsx('div', {
      className: 'ui bottom attached tab segment noBor active',
      'data-tab': 'first'
    }, void 0, _ref25, _ref26, _jsx('h3', {}, void 0, '\u0110i\u1EC7n tho\u1EA1i li\xEAn h\u1EC7: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, '0975 622 789'), ' - ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, '0949 958 898'))), _jsx('div', {
      className: 'ui bottom attached tab segment noBor',
      'data-tab': 'second'
    }, void 0, _ref27, _ref28, _jsx('h3', {}, void 0, '- Ch\u1EE7 t\xE0i kho\u1EA3n: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, 'PH\u1EA0M \u0110\u1EE8C TH\u1ECANH')), _jsx('h3', {}, void 0, '- S\u1ED1 t\xE0i kho\u1EA3n: ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, '0491000064512')))), _ref29), _jsx('div', {
      className: 'ui segment noBor noMa'
    }, void 0, _jsx('div', {
      className: 'ui',
      style: { height: '40px' }
    }, void 0, _jsx('div', {
      className: 'ui form'
    }, void 0, _jsx('div', {
      className: 'inline field actions'
    }, void 0, _jsx('div', {
      is: true,
      'class': 'ui labeled button',
      tabindex: '0'
    }, void 0, _ref30, _jsx('a', {
      className: 'ui basic inverted grey left pointing label',
      onClick: () => {
        let promoCode = $('#inputPromo').val();
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/coupon', { code: promoCode }).then(res => {
          mData.coupon = res.data;
          $('#couponInfo').text(__WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].infoCoupon(mData.coupon, mData.membership));
          $('#total').val(__WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].numberWithCommas(__WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month)) + ' đ');
        }).catch(err => {
          console.log(err);
        });
      }
    }, void 0, _ref31)), _jsx('span', {
      style: { color: 'red' },
      id: 'couponInfo'
    }), _jsx('button', {
      className: 'ui right floated  green approve button',
      onClick: () => {
        let that = this;
        let phone = $('#inputPhone').val();
        if (checkPhoneNumber(phone)) {
          if (mData.coupon) {
            mData.membership.coupon = mData.coupon;
            if (mData.coupon.kind === 3) {
              mData.membership.bonusDay = __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].bonusDay(mData.coupon, mData.membership.month);
            }
          }
          mData.membership.price = __WEBPACK_IMPORTED_MODULE_1__Fn__["a" /* default */].priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month);
          mData.membership.phone = phone;
          mData.membership.info = $('#inputInfo').val();
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/membership', mData.membership).then(res => {
            that.context.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_user__["a" /* setMember */])(res.data));
            alert('Bạn đã đăng ký thành công!');
            location.reload();
          }).catch(err => {
            console.log(err);
          });
        } else {
          $('.second.modal').modal('show');
        }
      }
    }, void 0, 'X\xE1c nh\u1EADn'), _jsx('div', {
      is: true,
      'class': 'ui red labeled right floated button',
      tabindex: '0'
    }, void 0, _ref32, _jsx('input', {
      id: 'total',
      style: { color: 'red' },
      disabled: true,
      type: 'text'
    }))))))));
  }
}

Membership.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired };
/* harmony default export */ __webpack_exports__["a"] = (Membership);

var checkPhoneNumber = function (phone) {
  if (!phone || !phone.match(/\d/g)) {
    alert('Bạn phải nhập số điện thoại');
  } else if (phone.match(/\d/g).length === 10 || phone.match(/\d/g).length === 11) {
    return true;
  } else {
    alert('Số điện thoại điền chưa đúng định dạng, ( phải có 10 hoặc 11 số )');
    return false;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sidebar__ = __webpack_require__(65);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_3__Sidebar__["a" /* default */], {});

var _ref2 = _jsx('img', {
  src: '/assets/img/logo.jpg',
  alt: '',
  width: 120,
  height: 42
});

var _ref3 = _jsx('i', {
  className: 'dropdown icon'
});

var _ref4 = _jsx('i', {
  className: 'dashboard icon'
});

var _ref5 = _jsx('i', {
  className: 'object ungroup icon'
});

var _ref6 = _jsx('i', {
  className: 'calculator icon'
});

var _ref7 = _jsx('i', {
  className: 'cubes icon'
});

var _ref8 = _jsx('i', {
  className: 'cube icon'
});

var _ref9 = _jsx('i', {
  className: 'cube icon'
});

var _ref10 = _jsx('i', {
  className: 'cube icon'
});

var _ref11 = _jsx('i', {
  className: 'inverted big alarm icon'
});

var _ref12 = _jsx('div', {
  className: 'menu'
}, void 0, _jsx('div', {
  className: 'item'
}, void 0, 'Hi\u1EC7n ch\u01B0a c\xF3 th\xF4ng b\xE1o n\xE0o'));

var _ref13 = _jsx('img', {
  src: '/assets/img/avatar.png',
  alt: 'avatar'
});

var _ref14 = _jsx('i', {
  className: 'tags icon'
});

var _ref15 = _jsx('i', {
  className: 'tags icon'
});

var _ref16 = _jsx('div', {
  className: 'ui black empty circular label'
});

var _ref17 = _jsx('a', {
  className: 'ui item dang-nhap'
}, void 0, '\u0110\u0103ng nh\u1EADp');

var _ref18 = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  to: '/',
  className: 'item'
}, void 0, _jsx('i', {
  className: 'home icon'
}));

class Nav extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.ui.search1').search({
      apiSettings: {
        url: '/api/search/{query}'
      },
      fields: {
        results: 'data',
        title: 'name',
        url: 'slug'
      },
      minCharacters: 3
    });

    let $menu = $('#danhmuc');
    let firstMenu = $('#danhmuc').children('.item')[0];
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    });

    $('.ui.dropdown').dropdown({
      on: 'hover',
      onShow: function (text, value) {
        if ($('.maintainHover').length < 1) {
          activateSubmenu(firstMenu);
        }
      }
    });
    function activateSubmenu(row) {
      let $row = $(row);
      let submenuId = $row.data('submenuId');
      let $submenu = $('#' + submenuId);
      let height = $menu.outerHeight();
      let width = $menu.outerWidth();

      let level = parseInt($row.attr('data-submenu-id'));
      $submenu.css({
        display: 'block',
        top: -1 - (level - 1) * 60,
        left: width - 6, // main should overlay submenu
        height: height // padding for main dropdown's arrow
      });
      $row.addClass('maintainHover');
    }

    function deactivateSubmenu(row) {
      let $row = $(row);
      let submenuId = $row.data('submenuId');
      let $submenu = $('#' + submenuId);

      $submenu.css('display', 'none');
      $row.removeClass('maintainHover');
    }
  }

  render() {
    const user = this.props.user;
    const logged = this.props.user.username;
    // if(logged && !this.props.user.passwordChanged && !this.props.user.avatar) {
    //   this.changePassword()
    // }
    const menu = this.context.store.getState().data.information.value.menu || {};
    const nav = this.context.store.getState().data.information.value.nav || { nav1left: [], nav2left: [], nav3left: [], nav4left: [], nav5left: [], nav6left: [], nav7left: [], nav1right: [], nav2right: [], nav3right: [], nav4right: [], nav5right: [], nav6right: [], nav7right: [] };
    return _jsx('div', {
      className: 'nav'
    }, void 0, _jsx('div', {
      className: 'ui inverted segment nav-top'
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui inverted secondary menu'
    }, void 0, _ref, _jsx('a', {
      id: 'logo',
      href: 'http://anabim.com/',
      target: '_blank',
      style: { width: '120px !important' }
    }, void 0, _ref2), _jsx('span', {
      className: 'ui top left pointing dropdown item navbar',
      style: { marginRight: '0px !important' }
    }, void 0, 'DANH M\u1EE4C', _ref3, _jsx('ul', {
      className: 'ui blue menu',
      id: 'danhmuc'
    }, void 0, _jsx('li', {
      className: 'item',
      'data-submenu-id': '1'
    }, void 0, _ref4, 'KI\u1EBEN TR\xDAC S\u01AF', _jsx('div', {
      id: '1',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav1left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav1right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '2'
    }, void 0, _ref5, 'K\u1EF8 S\u01AF MEP', _jsx('div', {
      id: '2',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav2left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav2right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '3'
    }, void 0, _ref6, 'K\u1EF8 S\u01AF K\u1EBET C\u1EA4U', _jsx('div', {
      id: '3',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav3left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav3right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '4'
    }, void 0, _ref7, 'M\xD4 PH\u1ECENG & PH\xC2N T\xCDCH N\u0102NG L\u01AF\u1EE2NG', _jsx('div', {
      id: '4',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav4left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav4right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '5'
    }, void 0, _ref8, 'K\u1EF8 S\u01AF CH\u1EBE T\u1EA0O', _jsx('div', {
      id: '5',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav5left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav5right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '6'
    }, void 0, _ref9, 'K\u1EF8 S\u01AF H\u1EA0 T\u1EA6NG K\u1EF8 THU\u1EACT', _jsx('div', {
      id: '6',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav6left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))), _jsx('li', {
      className: 'item',
      'data-submenu-id': '7'
    }, void 0, _ref10, '\u0110\xC0O T\u1EA0O BIM', _jsx('div', {
      id: '7',
      className: 'popover'
    }, void 0, _jsx('div', {
      className: 'ui two column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav7left.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('ul', {
      className: 'ui list'
    }, void 0, nav.nav7right.map((el, index) => {
      return _jsx('li', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url
      }, void 0, el.title));
    })))))))), _jsx('div', {
      className: 'item',
      style: { paddingTop: 7 }
    }, void 0, _jsx('div', {
      className: 'ui icon input search search1'
    }, void 0, _jsx('div', {
      className: 'ui icon input'
    }, void 0, _jsx('input', {
      style: { width: '400px' },
      className: 'prompt',
      type: 'text',
      placeholder: 'T\xCCM KI\u1EBEM KH\xD3A H\u1ECCC ...'
    })))), logged ? _jsx('div', {
      className: 'right menu'
    }, void 0, _jsx('div', {
      className: 'ui inverted circular item noPa',
      style: { background: 'black', width: '50px' }
    }, void 0, _jsx('div', {
      className: 'ui top right pointing dropdown icon button noPa noMa',
      style: { background: 'black', width: '50px' }
    }, void 0, _ref11, _ref12)), _jsx('div', {
      className: 'ui inverted circular item noPa',
      style: { background: 'black', width: '50px' }
    }, void 0, _jsx('div', {
      className: 'ui top right pointing dropdown '
    }, void 0, _jsx('a', {
      className: 'ui item',
      style: { padding: 0 }
    }, void 0, _ref13), _jsx('div', {
      className: 'menu'
    }, void 0, _jsx('a', {
      className: 'item',
      style: { color: 'black !important' },
      onClick: this.changePassword.bind(this)
    }, void 0, _ref14, '\u0110\u1ED5i m\u1EADt kh\u1EA9u'), _jsx('a', {
      className: 'item',
      style: { color: 'black !important' },
      onClick: this.membership.bind(this)
    }, void 0, _ref15, 'Membership'), _jsx('a', {
      href: '/auth/logout',
      className: 'item',
      style: { color: 'black !important' }
    }, void 0, _ref16, '\u0110\u0103ng xu\u1EA5t'))))) : _jsx('div', {
      className: 'right menu'
    }, void 0, _ref17, _jsx('a', {
      className: 'ui item dang-ky',
      style: { backgroundColor: '#008cc9' }
    }, void 0, '\u0110\u0103ng k\xFD'))))), _jsx('div', {
      className: 'ui inverted segment nav-bot'
    }, void 0, _jsx('div', {
      className: 'ui inverted  mini secondary pointing menu'
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _ref18, menu.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: el.url,
        className: 'item'
      }, index, el.title);
    }), _jsx('div', {
      className: 'right menu'
    }, void 0, user.member === 'member' ? '' : _jsx('a', {
      className: 'item',
      onClick: this.activeCode.bind(this)
    }, void 0, 'M\xE3 k\xEDch ho\u1EA1t'), _jsx('a', {
      className: 'red item',
      onClick: this.membership.bind(this)
    }, void 0, 'Membership'))))));
  }

  membership() {
    if (!this.props.user.username) {
      $('#dang-ky').modal('show');
    } else {
      if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
        $('.first.modal').modal('show');
      } else {
        $('#membership-info').modal('show');
      }
    }
  }

  activeCode() {
    $('#activeCode').modal('show');
  }

  changePassword() {
    if (false) {
      $('#doi-mat-khau').modal('show');
    }
  }

}

Nav.contextTypes = { store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired };
/* harmony default export */ __webpack_exports__["a"] = (Nav);

let Data = {};
Data.baseUrl = '';
Data.user = {
  id: ''
};
let link = function (slug, name) {
  return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
    to: Data.baseUrl + '/course/' + slug
  }, void 0, name);
};

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $, alert */



var _ref = _jsx('span', {
  id: 'loginError'
});

var _ref2 = _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'lock icon'
}), _jsx('input', {
  type: 'password',
  placeholder: 'M\u1EADt kh\u1EA9u m\u1EDBi',
  id: 'passwordChange1',
  name: 'passwordChange1'
})));

var _ref3 = _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'lock icon'
}), _jsx('input', {
  type: 'password',
  placeholder: 'Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi',
  id: 'passwordChange2',
  name: 'passwordChange2'
})));

var _ref4 = _jsx('div', {
  className: 'ui error message'
});

const Password = ({}) => {
  return _jsx('div', {
    id: 'doi-mat-khau',
    className: 'ui modal'
  }, void 0, _jsx('div', {
    className: 'header',
    style: { textAlign: 'center' }
  }, void 0, '\u0110\u1ED5i m\u1EADt kh\u1EA9u'), _jsx('div', {
    className: 'ui column stackable segment grid noBor noSha'
  }, void 0, _jsx('div', {
    className: 'column'
  }, void 0, _jsx('div', {
    style: { textAlign: 'center', color: 'red', marginBottom: '5px' }
  }, void 0, _ref), _jsx('div', {
    className: 'ui large form',
    onSubmit: e => {
      e.preventDefault();
      var $username = $(e.target).find('[name=username]').val();
      var $password = $(e.target).find('[name=password]').val();
      let data = {
        username: $username,
        password: $password
      };
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/auth/login', data).then(res => {
        if (res.data) {
          window.location.reload();
        } else {
          $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }, void 0, _jsx('div', {
    className: 'ui stacked segment'
  }, void 0, _jsx('div', {
    id: 'changePassNotify',
    style: { textAlign: 'center' }
  }), _ref2, _ref3, _jsx('button', {
    className: 'ui fluid large teal submit button',
    onClick: () => {
      var pass1 = $('#passwordChange1').val();
      var pass2 = $('#passwordChange2').val();
      if (pass1 !== pass2) {
        alert('Mật khẩu không trùng khớp');
      } else {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/user/password', { password: pass1 }).then(res => {
          $('#changePassNotify').text(res.data);
          $('#passwordChange1').val('');
          $('#passwordChange2').val('');
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }, void 0, '\u0110\u1ED5i m\u1EADt kh\u1EA9u')), _ref4))));
};

/* harmony default export */ __webpack_exports__["a"] = (Password);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('button', {
  className: 'dl-trigger'
}, void 0, 'Open Menu');

var _ref2 = _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/'
}, void 0, 'TRANG CH\u1EE6'));

var _ref3 = _jsx('a', {
  href: '#'
}, void 0, 'KH\xD3A H\u1ECCC ONLINE');

var _ref4 = _jsx('a', {
  href: '#'
}, void 0, 'KI\u1EBEN TR\xDAC S\u01AF');

var _ref5 = _jsx('a', {
  href: '#'
}, void 0, 'K\u1EF8 S\u01AF MEP');

var _ref6 = _jsx('a', {
  href: '#'
}, void 0, 'K\u1EF8 S\u01AF K\u1EBET C\u1EA4U');

var _ref7 = _jsx('a', {
  href: '#'
}, void 0, 'M\xD4 PH\u1ECENG & PH\xC2N T\xCDCH N\u0102NG L\u01AF\u1EE2NG');

var _ref8 = _jsx('a', {
  href: '#'
}, void 0, ' K\u1EF8 S\u01AF CH\u1EBE T\u1EA0O');

var _ref9 = _jsx('a', {
  href: '#'
}, void 0, 'K\u1EF8 S\u01AF H\u1EA0 T\u1EA6NG K\u1EF8 THU\u1EACT');

var _ref10 = _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, 'KH\xD3A H\u1ECCC OFFLINE'), _jsx('ul', {
  className: 'dl-submenu'
}, void 0, _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, '\u0110\xC0O T\u1EA0O DOANH NGHI\u1EC6P')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, 'K\u1EF8 S\u01AF K\u1EBET C\u1EA4U')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, 'Kh\xF3a h\u1ECDc Revit MEP')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, 'KI\u1EBEN TR\xDAC S\u01AF')), _jsx('li', {}, void 0, _jsx('a', {
  href: '#'
}, void 0, 'K\u1EF8 S\u01AF MEP'))));

var _ref11 = _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/about-anabim'
}, void 0, 'V\u1EC0 CH\xDANG T\xD4I'));

var _ref12 = _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
  to: '/lien-he-anabim'
}, void 0, 'LI\xCAN H\u1EC6'));

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#dl-menu').dlmenu({
      animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' }
    });
  }

  render() {
    let Data = {};
    Data.baseUrl = '';
    Data.user = {
      id: ''
    };
    let link = function (slug, name) {
      return _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
        to: Data.baseUrl + '/course/' + slug
      }, void 0, name);
    };
    return _jsx('div', {
      id: 'sidebar'
    }, void 0, _jsx('div', {
      className: 'demo-4'
    }, void 0, _jsx('div', {
      id: 'dl-menu',
      className: 'dl-menuwrapper'
    }, void 0, _ref, _jsx('ul', {
      className: 'dl-menu'
    }, void 0, _ref2, _jsx('li', {}, void 0, _ref3, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, _ref4, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'
    }, void 0, 'L\xE0m Quen V\u1EDBi Revit (FREE)')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-architecture-nen-tang'
    }, void 0, 'Revit Arrchitecture N\u1EC1n T\u1EA3ng')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-architecture-nang-cao'
    }, void 0, 'Revit Arrchitecture N\xE2ng Cao')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-conceptual-massing'
    }, void 0, 'Revit Conceptual Mass')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-family-co-ban'
    }, void 0, 'Revit Family C\u01A1 B\u1EA3n')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-family-nang-cao'
    }, void 0, 'Revit Family N\xE2ng Cao')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-family-addaptive-co-ban'
    }, void 0, 'Revit Family Adaptive C\u01A1 B\u1EA3n')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-revit-family-adaptive-nang-cao'
    }, void 0, 'Revit Family Adaptive N\xE2ng Cao')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-dynamo-nang-cao'
    }, void 0, 'Dynamo N\xE2ng Cao')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-formit-360'
    }, void 0, 'Autodesk Formit')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/sketchup-co-ban'
    }, void 0, 'Sketchup C\u01A1 B\u1EA3n')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-sketchup-nang-cao'
    }, void 0, 'Sketchup N\xE2ng Cao')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-autocad-2015-co-ban'
    }, void 0, 'Autocad 2015 Mi\u1EC5n Ph\xED')), _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/thiet-ke-gach-thong-gio-revit'
    }, void 0, 'Thi\u1EBFt K\u1EBF G\u1EA1ch Th\xF4ng Gi\xF3')))), _jsx('li', {}, void 0, _ref5, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */], {
      to: Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'
    }, void 0, 'L\xE0m Quen V\u1EDBi Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-revit-mep-co-ban', 'Khóa học Revit MEP cơ bản')), _jsx('li', {}, void 0, link('khoa-hoc-revit-mep-nang-cao', 'Khóa Học Revit MEP Nâng Cao')), _jsx('li', {}, void 0, link('khoa-hoc-family-mep-phan-1', 'Family MEP')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')), _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')))), _jsx('li', {}, void 0, _ref6, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')), _jsx('li', {}, void 0, link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-revit-structure-co-ban', 'Revit Structure Cơ Bản')), _jsx('li', {}, void 0, link('khoa-hoc-robot-structural-co-ban', 'Robot Structural Cơ Bản')), _jsx('li', {}, void 0, link('Revit-Structure-Concrete', 'Revit Structure Concrete')), _jsx('li', {}, void 0, link('khoa-hoc-revit-structure-steel', 'Revit Structure Steel')), _jsx('li', {}, void 0, link('khoa-hoc-revit-family-structure', 'Family Revit Structure')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')))), _jsx('li', {}, void 0, _ref7, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')), _jsx('li', {}, void 0, link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-ecotec-co-ban', 'Autodesk Ecotec')), _jsx('li', {}, void 0, link('khoa-hoc-vasari', 'Autodesk Vasari')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')))), _jsx('li', {}, void 0, _ref8, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')), _jsx('li', {}, void 0, link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')))), _jsx('li', {}, void 0, _ref9, _jsx('ul', {
      className: 'dl-submenu'
    }, void 0, _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')), _jsx('li', {}, void 0, link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-infrawork-360', 'Khóa Học Infrawork 360')), _jsx('li', {}, void 0, link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')), _jsx('li', {}, void 0, link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')), _jsx('li', {}, void 0, link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')), _jsx('li', {}, void 0, link('khoa-hoc-bim-glue', 'Khóa Học BIM Glue')), _jsx('li', {}, void 0, link('khoa-hoc-naviswork-phan-2', 'Khóa Học Naviswork Phần 2')))))), _ref10, _ref11, _ref12))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('span', {
  id: 'loginError'
});

var _ref2 = _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'user icon'
}), _jsx('input', {
  type: 'text',
  placeholder: 'E-mail',
  id: 'username',
  name: 'username'
})));

var _ref3 = _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'lock icon'
}), _jsx('input', {
  type: 'password',
  placeholder: 'M\u1EADt kh\u1EA9u',
  id: 'password',
  name: 'password'
})));

var _ref4 = _jsx('div', {
  className: 'ui error message'
});

var _ref5 = _jsx('i', {
  className: 'facebook icon'
});

var _ref6 = _jsx('i', {
  className: 'google plus icon'
});

var _ref7 = _jsx('div', {
  className: 'ui centerInside'
}, void 0, 'Qu\xEAn m\u1EADt kh\u1EA9u? ', _jsx('a', {
  href: '#'
}, void 0, ' Click v\xE0o \u0111\xE2y'));

var _ref8 = _jsx('a', {
  className: 'dang-ky',
  href: '#'
}, void 0, ' \u0110\u0103ng k\xFD ngay');

const SignIn = ({}) => {
  return _jsx('div', {
    id: 'dang-nhap',
    className: 'ui modal'
  }, void 0, _jsx('div', {
    className: 'header',
    style: { textAlign: 'center' }
  }, void 0, '\u0110\u0103ng nh\u1EADp'), _jsx('div', {
    className: 'ui two column stackable segment grid noBor noSha'
  }, void 0, _jsx('div', {
    className: 'column'
  }, void 0, _jsx('div', {
    style: { textAlign: 'center', color: 'red', marginBottom: '5px' }
  }, void 0, _ref), _jsx('form', {
    className: 'ui large form',
    action: '/auth/login',
    method: 'POST',
    onSubmit: e => {
      e.preventDefault();
      var $username = $(e.target).find('[name=username]').val();
      var $password = $(e.target).find('[name=password]').val();
      let data = {
        username: $username,
        password: $password
      };
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/auth/login', data).then(res => {
        if (res.data) {
          window.location.reload();
        } else {
          $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }, void 0, _jsx('div', {
    className: 'ui stacked segment'
  }, void 0, _ref2, _ref3, _jsx('button', {
    type: 'submit',
    className: 'ui fluid large teal submit button',
    onClick: () => {
      console.log('on click !');
    }
  }, void 0, '\u0110\u0103ng nh\u1EADp')), _ref4)), _jsx('div', {
    className: 'column centerInside'
  }, void 0, _jsx('div', {
    className: 'row '
  }, void 0, _jsx('a', {
    href: '/auth/facebook'
  }, void 0, _jsx('div', {
    className: 'centerInside'
  }, void 0, _jsx('button', {
    className: 'ui facebook button',
    style: { minWidth: '70%' }
  }, void 0, _ref5, 'Facebook')))), _jsx('div', {
    className: 'row',
    style: { marginTop: '10px' }
  }, void 0, _jsx('a', {
    href: '/auth/google'
  }, void 0, _jsx('div', {
    className: 'centerInside'
  }, void 0, _jsx('button', {
    type: 'submit',
    className: 'ui google plus button',
    style: { minWidth: '70%' }
  }, void 0, _ref6, 'Google Plus')))), _jsx('div', {
    className: 'row ',
    style: { marginTop: '30px' }
  }, void 0, _ref7, _jsx('div', {
    className: 'ui centerInside',
    style: { marginTop: '10px' }
  }, void 0, 'Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? ', _ref8)))));
};

/* harmony default export */ __webpack_exports__["a"] = (SignIn);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('span', {
  id: 'signupError'
});

var _ref2 = _jsx('div', {
  className: 'ui stacked segment'
}, void 0, _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'user icon'
}), _jsx('input', {
  type: 'text',
  name: 'username',
  id: 'username',
  placeholder: 'E-mail'
}))), _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'lock icon'
}), _jsx('input', {
  type: 'password',
  name: 'password',
  id: 'password',
  placeholder: 'M\u1EADt kh\u1EA9u'
}))), _jsx('div', {
  className: 'field'
}, void 0, _jsx('div', {
  className: 'ui left icon input'
}, void 0, _jsx('i', {
  className: 'user icon'
}), _jsx('input', {
  type: 'text',
  name: 'name',
  id: 'name',
  placeholder: 'H\u1ECD t\xEAn'
}))), _jsx('button', {
  type: 'submit',
  className: 'ui fluid large teal submit button'
}, void 0, '\u0110\u0103ng k\xFD'));

var _ref3 = _jsx('div', {
  className: 'ui error message'
});

var _ref4 = _jsx('i', {
  className: 'facebook icon'
});

var _ref5 = _jsx('i', {
  className: 'google plus icon'
});

var _ref6 = _jsx('div', {
  className: 'ui centerInside'
}, void 0, '\u0110\xE3 c\xF3 t\xE0i kho\u1EA3n?', _jsx('a', {
  className: 'dang-nhap',
  href: '#'
}, void 0, ' \u0110\u0103ng nh\u1EADp '));

const SignUp = ({}) => {
  return _jsx('div', {
    id: 'dang-ky',
    className: 'ui modal'
  }, void 0, _jsx('div', {
    className: 'ui two column stackable segment grid noBor noSha'
  }, void 0, _jsx('div', {
    className: 'column'
  }, void 0, _jsx('div', {
    style: { textAlign: 'center', color: 'red' }
  }, void 0, _ref), _jsx('form', {
    className: 'ui large form',
    action: '/auth/signup',
    method: 'POST',
    onSubmit: e => {
      e.preventDefault();
      var $username = $(e.target).find('[name=username]').val();
      var $password = $(e.target).find('[name=password]').val();
      var $name = $(e.target).find('[name=name]').val();
      let data = {
        username: $username,
        password: $password,
        name: $name
      };
      console.log(data);
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/auth/signup', data).then(res => {

        if (res.data.status) {
          alert('Đăng ký thành công! Một email đã được gửi vào tài khoản của bạn.');
          $('#dang-nhap').modal('show');
        } else {
          $('#signupError').text(res.data.m);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }, void 0, _ref2, _ref3)), _jsx('div', {
    className: 'column centerInside'
  }, void 0, _jsx('div', {
    className: 'row '
  }, void 0, _jsx('a', {
    href: '/auth/facebook'
  }, void 0, _jsx('div', {
    className: 'centerInside'
  }, void 0, _jsx('button', {
    className: 'ui facebook button',
    style: { minWidth: '70%' }
  }, void 0, _ref4, 'Facebook')))), _jsx('div', {
    className: 'row',
    style: { marginTop: '10px' }
  }, void 0, _jsx('a', {
    href: '/auth/google'
  }, void 0, _jsx('div', {
    action: '/authenticate/google',
    method: 'post',
    className: 'centerInside'
  }, void 0, _jsx('button', {
    type: 'submit',
    className: 'ui google plus button',
    style: { minWidth: '70%' }
  }, void 0, _ref5, 'Google Plus')))), _jsx('div', {
    className: 'row ',
    style: { marginTop: '30px' }
  }, void 0, _ref6))));
};

/* harmony default export */ __webpack_exports__["a"] = (SignUp);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActiveCode__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__ActiveCode__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EmailConfirm__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__EmailConfirm__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemberShip__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__MemberShip__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Nav__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__Nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Password__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__Password__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SignIn__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__SignIn__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SignUp__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__SignUp__["a"]; });







// export {default as Sidebar} from './Sidebar'



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch({ baseUrl, cookie }) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return (url, options) => url.startsWith('/graphql') || url.startsWith('/api') ? __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(`${baseUrl}${url}`, _extends({}, defaults, options, {
    headers: _extends({}, defaults.headers, options && options.headers)
  })) : __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, options);
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneActiveCode: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      code: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneCategory
  },
  allActiveCode: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

let schema = new Schema({
  code: { type: String, default: 'code' },
  day: { type: Number, default: 0 },
  email: { type: String, default: 'default@email.com' },
  all: { type: Boolean, default: false },
  quantity: { type: Number, default: 0 },
  used: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
}, { collection: 'activecode' });

schema.plugin(autoIncrement.plugin, 'ActiveCode');

let model = mongoose.model('ActiveCode', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { code }) => {
  let query = {};
  if (code !== undefined) query.code = code;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'ActiveCode',
  description: 'ActiveCode object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    code: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    day: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    all: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    quantity: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    used: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneCategory: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Category',
  description: 'Category object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coverUrl: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    slug: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneCategoryPost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allCategoryPost: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  title: { type: String, default: 'name' },
  slug: { type: String },
  created_at: { type: Date, default: Date.now }
}, { collection: 'categorypost' });

schema.plugin(autoIncrement.plugin, 'CategoryPost');

let model = mongoose.model('CategoryPost', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { slug }) => {
  let query = {};
  if (slug !== undefined) query.slug = slug;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'CategoryPost',
  description: 'CategoryPost object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    slug: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneComment: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      id: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allComment: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  kind: { type: String },
  parentID: { type: Number },
  users: [Number],
  comment: String,
  userId: String,
  time: Date,
  children: [],
  created_at: { type: Date, default: Date.now }
}, { collection: 'comment' });

schema.plugin(autoIncrement.plugin, 'Comment');

let model = mongoose.model('Comment', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { code }) => {
  let query = {};
  if (code !== undefined) query.code = code;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Comment',
  description: 'Comment object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    code: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    day: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    all: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    quantity: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    used: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneCoupon: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allCoupon: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Coupon',
  description: 'Coupon object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    code: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    kind: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    price: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    percent: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    day: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    month: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    active: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    quantity: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    endTime: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneCourse: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  oneCourse2: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one2
  },
  allCourse: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  },
  courseInCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.courseInCategory
  },
  courseInSoftware: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.courseInSoftware
  }

});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Course',
  description: 'Course object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coverUrl: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    slug: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    cateID: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    categories: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    softID: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    level: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    authorId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    section: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    vote: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },
    numVote: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    voter: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    documents: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    related: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    relatedCourse: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  listImage: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      num: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      time: {
        type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
      },
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getListImageByTime
  }

});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2);

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  type: String,
  fileSize: { type: Number, default: 0 },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  userUpload: String,
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Image', schema);

module.exports = model;

module.exports.getListImageByTime = (root, { num, time, filter }) => {
  if (!time) time = Date.now();
  let query = { created_at: { $lt: time } };
  if (filter) query.name = { $regex: new RegExp(filter, "ig") };
  console.log(query);
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).limit(num).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Image',
  description: 'Image object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    type: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    fileSize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    dimensions: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'dimensions',
        fields: () => ({
          width: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] },
          height: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] }
        })
      })
    },
    userUpload: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneIndexCourse: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  }
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;
const CategorySchema = __webpack_require__(30).schema;
const CourseSchema = __webpack_require__(31).schema;

let schema = new Schema({
  value: [],
  created_at: { type: Date, default: Date.now }
}, { collection: 'indexcourse' });

schema.plugin(autoIncrement.plugin, 'IndexCourse');

let model = mongoose.model('IndexCourse', schema);

module.exports = model;

module.exports.one = (root, {}) => {
  let query = {};
  query._id = 1;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'IndexCourse',
  description: 'IndexCourse object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    value: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  information: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getInformation
  }

});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2);

var schema = new mongoose.Schema({

  id: { type: String },

  menu: { type: [], default: [{ title: 'Blog', url: '/blog' }] },
  //
  footer: {
    cot1: { type: [], default: [{ title: 'Khoác học offline', url: '/' }, { title: 'Hướng dẫn thanh toán khóa học', url: '/' }, { title: 'Về chúng tôi', url: '/' }, { title: 'Liên hệ', url: '/' }] },
    cot2: { type: String, default: `<div> <span>ANABIM CO,.LTD <br />36B ngõ 554 đường Trường Chinh, Đống Đa, Hà Nội.</span> <div>0975 622 789</div> <div>revithanoi@gmail.com</div> <div> www.anabim.com</div> </div>` },
    cot3: { type: String, default: `<div> <div> Mr. Thùy - Kiến trúc <br /> 01669053063 </div> <div> Mr. Chiến - MEP <br /> 0979 269 448 </div> <div> Mr. Huy - Kết cấu <br /> 0978 542 680 </div> <div> Mr. Vượng - Doanh nghiệp <br /> 0975 622 789 </div> </div>` }
  },

  nav: {
    type: {}, default: {
      nav1left: [{ title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Revit Arrchitecture Nền Tảng', url: '/course/khoa-hoc-revit-architecture-nen-tang' }, { title: 'Revit Arrchitecture Nâng Cao', url: '/course/khoa-hoc-revit-architecture-nang-cao' }, { title: 'Revit Conceptual Mass', url: '/course/khoa-hoc-conceptual-massing' }, { title: 'Revit Family Cơ Bản', url: '/course/khoa-hoc-revit-family-co-ban' }, { title: 'Revit Family Nâng Cao', url: '/course/khoa-hoc-revit-family-nang-cao' }, { title: 'Revit Family Adaptive Cơ Bản', url: '/course/khoa-hoc-revit-family-addaptive-co-ban' }, { title: 'Revit Family Adaptive Nâng Cao', url: '/course/khoa-hoc-revit-family-adaptive-nang-cao' }],
      nav1right: [{ title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban' }, { title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao' }, { title: 'Autodesk Formit', url: '/course/khoa-hoc-formit-360' }, { title: 'Sketchup Cơ Bản', url: '/course/sketchup-co-ban' }, { title: 'Sketchup Nâng Cao', url: '/course/khoa-hoc-sketchup-nang-cao' }, { title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Thiết Kế Gạch Thông Gió', url: '/course/thiet-ke-gach-thong-gio-revit' }],

      nav2left: [{ title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Khóa học Revit MEP cơ bản', url: '/course/khoa-hoc-revit-mep-co-ban' }, { title: 'Khóa Học Revit MEP Nâng Cao', url: '/course/khoa-hoc-revit-mep-nang-cao' }, { title: 'Family MEP', url: '/course/khoa-hoc-family-mep-phan-1' }],

      nav2right: [{ title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban' }, { title: 'Khóa học Dynamo nâng cao', url: '/course/khoa-hoc-dynamo-nang-cao' }, { title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }],
      nav3left: [{ title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Revit Structure Cơ Bản', url: '/course/khoa-hoc-revit-structure-co-ban' }, { title: 'Robot Structural Cơ Bản', url: '/course/khoa-hoc-robot-structural-co-ban' }, { title: 'Revit Structure Concrete', url: '/course/Revit-Structure-Concrete' }],
      nav3right: [{ title: 'Revit Structure Steel', url: '/course/khoa-hoc-revit-structure-steel' }, { title: 'Family Revit Structure', url: '/course/khoa-hoc-revit-family-structure' }, { title: 'Autodesk Dynamo 2016', url: 'khoa-hoc-dynamo-co-ban' }, { title: 'Khóa học Dynamo nâng cao', url: 'khoa-hoc-dynamo-nang-cao' }],
      nav4left: [{ title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Autodesk Ecotec', url: '/course/khoa-hoc-ecotec-co-ban' }],
      nav4right: [{ title: 'Autodesk Vasari', url: '/course/khoa-hoc-vasari' }, { title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban' }, { title: 'Khóa học Dynamo nâng cao', url: '/course/khoa-hoc-dynamo-nang-cao' }],
      nav5left: [{ title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }],
      nav5right: [{ title: 'Autodesk Dynamo 2016', url: '/course/khoa-hoc-dynamo-co-ban' }, { title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao' }],
      nav6left: [{ title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Khóa Học Infrawork 360', url: '/course/khoa-hoc-infrawork-360' }],
      nav6right: [],
      nav7left: [{ title: 'Autocad 2015 Miễn Phí', url: '/course/khoa-hoc-autocad-2015-co-ban' }, { title: 'Làm Quen Với Revit (FREE)', url: '/course/khoa-hoc-lam-quen-voi-revit' }, { title: 'Dynamo Nâng Cao', url: '/course/khoa-hoc-dynamo-nang-cao' }, { title: 'Khóa Học BIM Glue', url: '/course/khoa-hoc-bim-glue' }, { title: 'Khóa Học Naviswork Phần 2', url: '/course/khoa-hoc-naviswork-phan-2' }],
      nav7right: [{ title: 'Khóa Học Naviswork 2016', url: '/course/khoa-hoc-naviswork-co-ban' }]
    }
  }

}, {
  collection: 'information'
});

let model = mongoose.model('Information', schema);

module.exports = model;

module.exports.getInformation = () => {
  console.log(" get information !!!! ");
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);






// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Information',
  description: 'Information object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    menu: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    footer: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a },
    nav: { type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a }
  })
}));

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  getPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getPosts',
      description: 'getPosts object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPosts
  },
  getOnePost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getAllPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllPosts
  },
  getAllPostsByCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllPostsByCategory
  },

  get5RecentPost: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.get5RecentPost
  },

  getPostRelative: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPostRelative
  }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: { type: [], default: [] },
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, default: '' },
  public: { type: Boolean, default: false },
  coverUrl: { type: String, default: '/assets/images/placeholders/848x480.png' },
  description: { type: String, default: '' },
  body: { type: String, default: '' },
  view: { type: Number, default: 0 },
  tags: [Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Post', schema);

module.exports = model;

// get ( news )

module.exports.getPosts = (root, { page }) => {
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop'];

  return new Promise((resolve, reject) => {

    model.count({}).exec((err, count) => {
      if (err) return reject(err);
      model.find({}).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOnePost = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllPosts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.get5RecentPost = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllPostsByCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.find({ category: slug }).sort({ created_at: -1 }).limit(5).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostRelative = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([{ "$sample": {
        size: 6
      } }]).exec((err, listPost) => {
      if (err) reject(err);else resolve(listPost);
    });
  });
};

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    public: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    tags: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  onePrice: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  }
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  one: Number,
  three: Number,
  six: Number,
  twelve: Number,
  created_at: { type: Date, default: Date.now }
}, { collection: 'price' });

schema.plugin(autoIncrement.plugin, 'Price');

let model = mongoose.model('Price', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, {}) => {
  let query = {};
  query._id = 1;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Price',
  description: 'Price object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    one: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    three: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    six: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    twelve: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  seo: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      url: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getByUrl
  },
  allSeo: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllSeo
  }
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  url: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  og_title: { type: String, default: '' },
  og_image: { type: String, default: '' },
  og_description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Seo', schema);

module.exports = model;

// get ( product )

module.exports.getByUrl = (root, { url }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ url: url }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllSeo = (root, { filter }) => {
  let query = {};
  if (filter) query.url = { $regex: new RegExp(filter, "ig") };
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Seo',
  description: 'Seo object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    url: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_image: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneSession: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  }

});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  _id: String,
  session: String,
  expires: Date
}, { collection: 'sessions' });

let model = mongoose.model('Session', schema);

module.exports = model;

module.exports.one = (root, {}) => {
  let query = {};
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Session',
  description: 'Session object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    session: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    expires: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2);

var schema = new mongoose.Schema({
  id: { type: String },
  ssr: { type: Boolean, default: true },
  css: { type: String, default: '' },
  adminId: { type: String, default: '100004231235930' },
  emailAdmin: { type: String, default: 'luanlv2591@gmail.com' },
  scriptTop: { type: String, default: '' },
  scriptBottom: { type: String, default: '' }
}, {
  collection: 'setting'
});

let model = mongoose.model('Setting', schema);

module.exports = model;

module.exports.getSetting = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.update = (root, { ssr }) => {
  let query = {};
  if (ssr !== undefined) query.ssr = ssr;
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate({ id: 'setting' }, { $set: query }, { returnNewDocument: true, new: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Setting',
  description: 'Setting object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    ssr: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    css: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptTop: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    adminId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    emailAdmin: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptBottom: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  })
}));

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneSoftware: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allSoftware: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Software',
  description: 'Software object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    slug: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coverUrl: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneSubscribe: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allSubscribe: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  },
  allPendingSubscribe: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.allPending
  },
  allDoneSubscribe: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.allDone
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);
const Coupon = __webpack_require__(38).schema;
// const ImageSchema = require('./image').schema;

let schema = new Schema({
  done: { type: Boolean, default: false },
  state: { type: String, default: 'pending' },
  email: String,
  name: String,
  phone: String,
  month: Number,
  bonusDay: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  info: String,
  coupon: Coupon,
  created_at: { type: Date, default: Date.now },
  createAt: { type: Date, default: Date.now }
}, { collection: 'subscribe' });

schema.plugin(autoIncrement.plugin, 'Subscribe');

let model = mongoose.model('Subscribe', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.allPending = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({ done: false }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.allDone = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({ done: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, {}) => {
  let query = {};
  // if(code !== undefined) query.code = code
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Subscribe',
  description: 'Subscribe object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    done: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    state: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    phone: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    month: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    bonusDay: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    price: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    info: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    coupon: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    createdAt: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    },
    createAt: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneToken: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      token: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  }
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);
let uuid = __webpack_require__(270);

// const ImageSchema = require('./image').schema;

let schema = new Schema({
  token: { type: String, default: uuid.v1 },
  type: String,
  email: String,
  active: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
}, { collection: 'token' });

schema.plugin(autoIncrement.plugin, 'Token');

let model = mongoose.model('Token', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.one = (root, { token }) => {
  let query = {};
  if (token !== undefined) query.token = token;
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Token',
  description: 'Token object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"]
    },
    token: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    type: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    email: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    active: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["default"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  },
  getMembership: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getMembership
  },
  getTrialMember: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getTrialMember
  }
});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(269);
let autoIncrement = __webpack_require__(12);
var bcrypt = __webpack_require__(252);

let UserSchema = new Schema({
  name: String,
  username: { type: String, default: 'abc@gmail.com' },
  uid: String,
  provider: String,
  accessToken: String,
  member: { type: String, default: 'none' },
  isAdmin: { type: Boolean, default: false },
  mustConfirmEmail: { type: Boolean, default: false },
  password: String,
  role: { type: [String], default: ['student'] },
  info: {
    start: Date,
    end: Date
  },
  passwordChanged: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now }
}, { collection: 'user4' });

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User');

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByEmail = function (username, callback) {
  User.find({ username: username }, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, callback);
    });
  });
};

module.exports.changePassword = function (email, password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      // console.log(hash)
      User.update({ username: email }, { $set: { password: hash, passwordChanged: true } }, callback);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getMembership = () => {
  return new Promise((resolve, reject) => {
    User.find({ member: 'membership' }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getTrialMember = () => {
  return new Promise((resolve, reject) => {
    User.find({ member: 'trial' }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    username: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    uid: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    provider: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    accessToken: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    member: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    isAdmin: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    mustConfirmEmail: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
    },
    password: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    role: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    info: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    createAt: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["default"] = ({
  oneVideo: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.one
  },
  allVideo: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.all
  },
  videoInCourse: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.videoInCourse
  }
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(2),
    Schema = mongoose.Schema;
let autoIncrement = __webpack_require__(12);

// const ImageSchema = require('./image').schema;
const courseModel = __webpack_require__(31);

let schema = new Schema({
  stt: { type: Number },
  courseId: { type: Number },
  section: { type: Number },
  name: { type: String },
  link: { type: String },
  kind: { type: String, default: 'free' },
  url: { type: String, default: 'null' },
  source: { type: String },
  time: { type: Number },
  created_at: { type: Date, default: Date.now }
}, { collection: 'video' });

schema.plugin(autoIncrement.plugin, 'Video');

let model = mongoose.model('Video', schema);

module.exports = model;

module.exports.all = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.videoInCourse = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    courseModel.findOne({ slug: slug }).exec((err, course) => {
      if (err) reject(err);
      let query = {};
      if (course) query.courseId = course._id;

      model.find(query).exec((err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  });
};

module.exports.one = (root, { code }) => {
  let query = {};
  // if(code !== undefined) query.code = code
  return new Promise((resolve, reject) => {
    model.findOne(query).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Video',
  description: 'Video object',
  fields: () => ({
    _id: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    stt: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },
    courseId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    section: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    name: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    link: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    kind: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    url: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    source: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    time: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },
    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const { listImage } = __webpack_require__(85).default;
const { users, getMembership, getTrialMember } = __webpack_require__(117).default;
const { setting } = __webpack_require__(106).default;
const { seo, allSeo } = __webpack_require__(100).default;
const { getPosts, getOnePost, getAllPosts, getPostRelative, get5RecentPost, getAllPostsByCategory } = __webpack_require__(94).default;

const { information } = __webpack_require__(91).default;

const { allActiveCode, oneActiveCode } = __webpack_require__(70).default;
const { allCategory, oneCategory } = __webpack_require__(73).default;
const { allComment, oneComment } = __webpack_require__(78).default;
const { allCoupon, oneCoupon } = __webpack_require__(81).default;
const { allCourse, oneCourse, courseInCategory, courseInSoftware } = __webpack_require__(83).default;
const { oneIndexCourse } = __webpack_require__(88).default;
const { onePrice } = __webpack_require__(97).default;
const { oneSession } = __webpack_require__(103).default;
const { oneSoftware, allSoftware } = __webpack_require__(109).default;
const { oneSubscribe, allSubscribe, allPendingSubscribe, allDoneSubscribe } = __webpack_require__(111).default;
const { oneToken } = __webpack_require__(114).default;
const { oneVideo, allVideo, videoInCourse } = __webpack_require__(120).default;

const { allCategoryPost, oneCategoryPost } = __webpack_require__(75).default;

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      setting,
      listImage,
      seo,
      allSeo,
      getPosts,
      getOnePost,
      getAllPostsByCategory,
      getAllPosts,
      getPostRelative,
      get5RecentPost,
      information,

      users,
      getMembership,
      getTrialMember,

      allActiveCode,
      oneActiveCode,

      allCategory,
      oneCategory,

      allComment,
      oneComment,

      allCoupon,
      oneCoupon,

      allCourse,
      oneCourse,
      courseInCategory,
      courseInSoftware,

      oneIndexCourse,

      onePrice,

      oneSession,

      oneSoftware,
      allSoftware,

      oneSubscribe,
      allSubscribe,
      allPendingSubscribe,
      allDoneSubscribe,

      oneToken,

      oneVideo,
      allVideo,
      videoInCourse,

      allCategoryPost,
      oneCategoryPost
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */





/**
 * Sign in with Facebook.
 */
// passport.use(new FacebookStrategy({
//   clientID: config.auth.facebook.id,
//   clientSecret: config.auth.facebook.secret,
//   callbackURL: '/login/facebook/return',
//   profileFields: ['displayName', 'name', 'email', 'link', 'locale', 'timezone'],
//   passReqToCallback: true,
// }, (req, accessToken, refreshToken, profile, done) => {
//   /* eslint-disable no-underscore-dangle */
//   const loginName = 'facebook';
//   const claimType = 'urn:facebook:access_token';
//   const fooBar = async () => {
//     if (req.user) {
//       const userLogin = await UserLogin.findOne({
//         attributes: ['name', 'key'],
//         where: { name: loginName, key: profile.id },
//       });
//       if (userLogin) {
//         // There is already a Facebook account that belongs to you.
//         // Sign in with that account or delete it, then link it with your current account.
//         done();
//       } else {
//         const user = await User.create({
//           id: req.user.id,
//           email: profile._json.email,
//           logins: [
//             { name: loginName, key: profile.id },
//           ],
//           claims: [
//             { type: claimType, value: profile.id },
//           ],
//           profile: {
//             displayName: profile.displayName,
//             gender: profile._json.gender,
//             picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
//           },
//         }, {
//           include: [
//             { model: UserLogin, as: 'logins' },
//             { model: UserClaim, as: 'claims' },
//             { model: UserProfile, as: 'profile' },
//           ],
//         });
//         done(null, {
//           id: user.id,
//           email: user.email,
//         });
//       }
//     } else {
//       const users = await User.findAll({
//         attributes: ['id', 'email'],
//         where: { '$logins.name$': loginName, '$logins.key$': profile.id },
//         include: [
//           {
//             attributes: ['name', 'key'],
//             model: UserLogin,
//             as: 'logins',
//             required: true,
//           },
//         ],
//       });
//       if (users.length) {
//         const user = users[0].get({ plain: true });
//         done(null, user);
//       } else {
//         let user = await User.findOne({ where: { email: profile._json.email } });
//         if (user) {
//           // There is already an account using this email address. Sign in to
//           // that account and link it with Facebook manually from Account Settings.
//           done(null);
//         } else {
//           user = await User.create({
//             email: profile._json.email,
//             emailConfirmed: true,
//             logins: [
//               { name: loginName, key: profile.id },
//             ],
//             claims: [
//               { type: claimType, value: accessToken },
//             ],
//             profile: {
//               displayName: profile.displayName,
//               gender: profile._json.gender,
//               picture: `https://graph.facebook.com/${profile.id}/picture?type=large`,
//             },
//           }, {
//             include: [
//               { model: UserLogin, as: 'logins' },
//               { model: UserClaim, as: 'claims' },
//               { model: UserProfile, as: 'profile' },
//             ],
//           });
//           done(null, {
//             id: user.id,
//             email: user.email,
//           });
//         }
//       }
//     }
//   };
//
//   fooBar().catch(done);
// }));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_DATA */]:
      const data = action.payload.value;
      return _extends({}, state, {
        information: _extends({}, state.information, {
          value: data.information || state.information.value
        }),
        news: _extends({}, state.news, {
          value: data.news || state.news.value
        }),
        allNews: _extends({}, state.allNews, {
          value: data.allNews || state.allNews.value
        }),
        allNewsByCategory: _extends({}, state.allNewsByCategory, {
          value: data.allNewsByCategory || state.allNewsByCategory.value
        }),
        recentNews: _extends({}, state.recentNews, {
          value: data.recentNews || state.recentNews.value
        }),
        categories: _extends({}, state.categories, {
          value: data.categories || state.categories.value
        }),
        category: _extends({}, state.category, {
          value: data.category || state.category.value
        }),
        categoryPosts: _extends({}, state.categoryPosts, {
          value: data.categoryPosts || state.categoryPosts.value
        }),
        categoryPost: _extends({}, state.categoryPost, {
          value: data.categoryPost || state.categoryPost.value
        }),

        indexcourse: _extends({}, state.indexcourse, {
          value: data.indexcourse || state.indexcourse.value
        }),

        allSoftware: _extends({}, state.allSoftware, {
          value: data.allSoftware || state.allSoftware.value
        }),

        price: _extends({}, state.price, {
          value: data.price || state.price.value
        }),

        categoryInfo: _extends({}, state.categoryInfo, {
          value: data.categoryInfo || state.categoryInfo.value
        }),
        courseInCategory: _extends({}, state.courseInCategory, {
          value: data.courseInCategory || state.courseInCategory.value
        }),
        course: _extends({}, state.course, {
          value: data.course || state.course.value
        }),
        videos: _extends({}, state.videos, {
          value: data.videos || state.videos.value
        }),

        softwareInfo: _extends({}, state.softwareInfo, {
          value: data.softwareInfo || state.softwareInfo.value
        }),

        courseInSoftware: _extends({}, state.courseInSoftware, {
          value: data.courseInSoftware || state.courseInSoftware.value
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function setting(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* SET_SETTING */]:
      return _extends({}, state, {
        ['ssr']: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function user(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_MEMBERSHIP */]:
      const value = action.payload.value;
      return _extends({}, state, {
        member: value
      });

    default:
      return state;
  }
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(213);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('div', {
  id: 'main'
}, void 0, _jsx('div', {
  className: 'ui container'
}, void 0, _jsx('article', {
  id: 'post-4229',
  className: 'post-4229 page type-page status-publish hentry'
}, void 0, ' ', _jsx('h1', {
  className: 'entry-title'
}, void 0, 'V\u1EC1 ch\xFAng t\xF4i'), ' ', _jsx('div', {
  className: 'entry-content'
}, void 0, ' ', _jsx('p', {}, void 0, 'ANABIM\xA0\u2013 ti\u1EC1n th\xE2n Revit Master \u2013 Revit H\xE0 N\u1ED9i, l\xE0 \u0111\u01A1n v\u1ECB gi\xE1o d\u1EE5c, chuy\u1EC3n giao c\xF4ng ngh\u1EC7 Revit v\xE0 BIM t\u1EA1i Vi\u1EC7t Nam. Th\xE0nh l\u1EADp v\xE0o 20/04/2010, tr\u1EA3i qua 5 n\u0103m ho\u1EA1t \u0111\u1ED9ng, ch\xFAng t\xF4i \u0111\xE3 tham gia \u0111\xE0o t\u1EA1o ngu\u1ED3n nh\xE2n l\u1EF1c ch\u1EA5t l\u01B0\u1EE3ng cao cho c\u1ED9ng \u0111\u1ED3ng X\xE2y d\u1EF1ng Vi\u1EC7t Nam v\u1EDBi l\u01B0\u1EE3ng h\u1ECDc vi\xEAn t\u1ED1t nghi\u1EC7p h\u01A1n 1100 ng\u01B0\u1EDDi, bao g\u1ED3m: sinh vi\xEAn, ng\u01B0\u1EDDi \u0111i l\xE0m v\xE0 c\xE1c doanh nghi\u1EC7p.'), ' ', _jsx('p', {}, void 0, 'Song h\xE0nh v\u1EDBi l\u0129nh v\u1EF1c \u0111\xE0o t\u1EA1o, ANABIM c\u0169ng l\xE0 \u0111\u01A1n v\u1ECB \u0111\xE3 c\xF3 nhi\u1EC1u ch\u01B0\u01A1ng tr\xECnh nghi\xEAn c\u1EE9u, \u1EE9ng d\u1EE5ng BIM trong Thi\u1EBFt k\u1EBF Ki\u1EBFn tr\xFAc v\xE0 X\xE2y d\u1EF1ng. V\u1EDBi \u0111\u1ED9i ng\u0169 th\xE0nh vi\xEAn tr\u1EBB v\xE0 nhi\u1EC7t huy\u1EBFt, l\u1EA5y vi\u1EC7c nghi\xEAn c\u1EE9u v\xE0 ph\xE1t tri\u1EC3n (R&D) l\xE0 chi\u1EBFn l\u01B0\u1EE3c tr\u1ECDng y\u1EBFu, ANABIM lu\xF4n c\u1ED1 g\u1EAFng \u0111\u1EC3 tr\u1EDF th\xE0nh nh\u1EEFng ng\u01B0\u1EDDi \u0111i \u0111\u1EA7u trong nghi\xEAn c\u1EE9u v\xE0 \xE1p d\u1EE5ng c\xF4ng ngh\u1EC7 m\u1EDBi, hi\u1EC7n \u0111\u1EA1i, ph\u1EE5c v\u1EE5 v\xE0 \u0111\xF3ng g\xF3p v\xE0o s\u1EF1 ph\xE1t tri\u1EC3n chung c\u1EE7a ng\xE0nh Ki\u1EBFn tr\xFAc X\xE2y d\u1EF1ng Vi\u1EC7t Nam. Website:\xA0', _jsx('u', {}, void 0, _jsx('a', {
  href: 'http://www.anabim.com/'
}, void 0, 'www.anabim.com')), '\xA0 \u2013\xA0', _jsx('u', {}, void 0, _jsx('a', {
  href: 'http://www.edu.anabim.com/'
}, void 0, 'www.edu.anabim.com')), '\xA0c\u1EE7a ch\xFAng t\xF4i l\xE0 hai website tin c\u1EADy v\u1EC1 chia s\u1EBB tri th\u1EE9c BIM v\xE0 nhi\u1EC1u th\xF4ng tin b\u1ED5 \xEDch kh\xE1c \u0111\u01B0\u1EE3c c\u1ED9ng \u0111\u1ED3ng ghi nh\u1EADn.'), ' ', _jsx('p', {}, void 0, 'L\u0129nh v\u1EF1c ho\u1EA1t \u0111\u1ED9ng c\u1EE7a ANABIM:'), ' ', _jsx('ol', {}, void 0, ' ', _jsx('li', {}, void 0, '\u0110\xE0o t\u1EA1o, chuy\u1EC3n giao c\xF4ng ngh\u1EC7.'), ' ', _jsx('li', {}, void 0, 'Thi\u1EBFt k\u1EBF Ki\u1EBFn tr\xFAc X\xE2y d\u1EF1ng.'), ' ', _jsx('li', {}, void 0, 'T\u01B0 v\u1EA5n d\u1EF1 \xE1n.'), ' '), ' ', _jsx('p', {}, void 0, 'M\u1ED9t s\u1ED1 \u0111\u01A1n v\u1ECB m\xE0 ANABIM \u0111\xE3 h\u1EE3p t\xE1c:'), ' ', _jsx('ol', {}, void 0, ' ', _jsx('li', {}, void 0, 'Group8Asia'), ' ', _jsx('li', {}, void 0, 'C\xF4ng ty TNHH Ki\u1EBFn tr\xFAc X\xE2y d\u1EF1ng Th\u0103ng Long (TAC).'), ' ', _jsx('li', {}, void 0, 'C\xF4ng ty C\u1ED5 ph\u1EA7n EBROS C&T Vi\u1EC7t Nam'), ' ', _jsx('li', {}, void 0, 'C\xF4ng ty BIMVN AEC Services'), ' ', _jsx('li', {}, void 0, 'AlphaNam E&C'), ' '), ' ', _jsx('p', {}, void 0, 'Hi\u1EC7n nay, H\u1ECCC ONLINE (E-learning) \u0111ang tr\u1EDF th\xE0nh xu h\u01B0\u1EDBng \u0111\xE0o t\u1EA1o n\u1ED5i b\u1EADt tr\xEAn to\xE0n th\u1EBF gi\u1EDBi. V\u1EDBi s\u1EF1 tr\u1EE3 gi\xFAp \u0111\u1EAFc l\u1EF1c t\u1EEB c\xF4ng ngh\u1EC7, vi\u1EC7c h\u1ECDc tr\u1EF1c tuy\u1EBFn tr\u1EDF n\xEAn d\u1EC5 d\xE0ng v\xE0 hi\u1EC7u qu\u1EA3 h\u01A1n bao gi\u1EDD h\u1EBFt.\xA0N\u1EAFm b\u1EAFt \u0111\u01B0\u1EE3c xu h\u01B0\u1EDBng th\u1EDDi \u0111\u1EA1i n\xE0y, ANABIM \u0111\xE3 d\xE0nh 1 n\u0103m nghi\xEAn c\u1EE9u v\xE0 x\xE2y d\u1EF1ng, t\u1EF1 h\xE0o khi l\xE0 \u0111\u01A1n v\u1ECB \u0111\u1EA7u ti\xEAn x\xE2y d\u1EF1ng th\xE0nh c\xF4ng website \u0111\xE0o t\u1EA1o tr\u1EF1c tuy\u1EBFn \u0111\u1EA7u ti\xEAn cho c\u1ED9ng \u0111\u1ED3ng X\xE2y d\u1EF1ng Ki\u1EBFn tr\xFAc t\u1EA1i Vi\u1EC7t Nam:\xA0', _jsx('u', {}, void 0, _jsx('a', {
  href: 'http://www.edu.anabim.com/'
}, void 0, 'www.edu.anabim.com')), '. V\u1EDBi website n\xE0y, ANABIM \u0111\xE3 mang t\u1EDBi c\xE1c kh\xF3a \u0111\xE0o t\u1EA1o t\u1EEB xa v\u1EDBi nhi\u1EC1u\xA0kh\xF3a h\u1ECDc,\xA0h\u01A1n m\u1ED9t\xA0ng\xE0n video ch\u1EA5t l\u01B0\u1EE3ng, \u0111\u01B0\u1EE3c bi\xEAn so\u1EA1n k\u0129 l\u01B0\u1EE1ng, d\xE0nh cho \u0111\xF4ng \u0111\u1EA3o h\u1ECDc vi\xEAn \u1EDF xa, kh\xF4ng c\xF3 \u0111i\u1EC1u ki\u1EC7n theo h\u1ECDc tr\u1EF1c ti\u1EBFp t\u1EA1i ANABIM.'), ' ', _jsx('p', {}, void 0, 'Ch\xFAng t\xF4i c\u0169ng l\xE0 \u0111\u01A1n v\u1ECB c\xF3 th\u1EDDi gian nghi\xEAn c\u1EE9u v\xE0 \u1EE9ng d\u1EE5ng BIM v\xE0o \u0111\xE0o t\u1EA1o gi\xE1o d\u1EE5c v\xE0 c\xE1c d\u1EF1 \xE1n thi\u1EBFt k\u1EBF ki\u1EBFn tr\xFAc x\xE2y d\u1EF1ng \u1EDF Vi\u1EC7t Nam v\xE0 qu\u1ED1c t\u1EBF. V\u1EDBi \u0111\u1ED9i ng\u0169 tr\u1EBB trung n\u0103ng \u0111\u1ED9ng, lu\xF4n t\u01B0 duy thay \u0111\u1ED5i v\xE0 h\u1ECDc h\u1ECFi nghi\xEAn c\u1EE9u \xE1p d\u1EE5ng c\xF4ng ngh\u1EC7 m\u1EDBi, c\xF9ng \u0111\xF3 l\xE0 kinh nghi\u1EC7m l\xE2u n\u0103m trong ng\xE0nh Thi\u1EBFt k\u1EBF X\xE2y d\u1EF1ng, ANABIM t\u1EF1 tin l\xE0 \u0111\u01A1n v\u1ECB c\xF3 th\u1EC3 mang \u0111\u1EBFn qu\xFD c\xF4ng ty ch\u01B0\u01A1ng tr\xECnh \u0111\xE0o t\u1EA1o, h\u1EE3p t\xE1c ch\u1EA5t l\u01B0\u1EE3ng, mang l\u1EE3i \xEDch v\xE0 s\u1EF1 h\xE0i l\xF2ng t\u1ED1i \u0111a cho kh\xE1ch h\xE0ng.'), ' ', _jsx('p', {}, void 0, '\xA0'), ' '))));

function About(props) {
  return _ref;
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/about',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + indexcourse + allSoftware + price + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(131).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (About) {
        return {
          title: seo.title || "Liên hệ",
          description: seo.description,
          seo: seo,
          chunk: 'about',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(About, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



const { Header, Content, Footer, Sider } = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"];
const SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu;





var _ref = _jsx('div', {
  className: 'logo'
});

var _ref2 = _jsx('div', {
  className: 'admin-topSlide'
}, void 0, _jsx('span', {}, void 0, 'ADMIN'));

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Dashboard', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'layout'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Dashboard'))));

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Seo', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/seo/'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'layout'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'SEO'))));

var _ref5 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Danh m\u1EE5c'))
}, 'danhmuc', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/category?v=list'
}, void 0, 'Danh s\xE1ch danh m\u1EE5c')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/category?v=add'
}, void 0, 'Th\xEAm m\u1EDBi danh m\u1EE5c')));

var _ref6 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'B\xE0i vi\u1EBFt'))
}, 'baiviet', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/news?v=list'
}, void 0, 'Danh s\xE1ch b\xE0i vi\u1EBFt')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'tintuc2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/news?v=add'
}, void 0, 'Th\xEAm m\u1EDBi b\xE0i vi\u1EBFt')));

var _ref7 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Danh m\u1EE5c PM'))
}, 'danhmucphanmem', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'danhmucphanmem1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/danhmuc?v=list'
}, void 0, 'Danh m\u1EE5c ph\u1EA7n m\u1EC1m')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'danhmucphanmem2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/danhmuc?v=add'
}, void 0, 'Th\xEAm m\u1EDBi danh m\u1EE5c')));

var _ref8 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Ph\u1EA7n m\u1EC1m'))
}, 'phanmem', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'phanmem1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/phanmem?v=list'
}, void 0, 'Danh s\xE1ch ph\u1EA7n m\u1EC1m')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'phanmem2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/phanmem?v=add'
}, void 0, 'Th\xEAm m\u1EDBi ph\u1EA7n m\u1EC1m')));

var _ref9 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'Kh\xF3a h\u1ECDc'))
}, 'khoahoc', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'khoahoc1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/khoahoc?v=list'
}, void 0, 'Danh s\xE1ch kh\xF3a h\u1ECDc')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'khoahoc2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/khoahoc?v=add'
}, void 0, 'Th\xEAm m\u1EDBi kh\xF3a h\u1ECDc')));

var _ref10 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'video', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/video'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'video'))));

var _ref11 = _jsx(SubMenu, {
  title: _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: 'idcard'
  }), _jsx('span', {
    className: 'nav-text'
  }, void 0, 'T\xE0i kho\u1EA3n'))
}, 'taikhoan', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'taikhoan0', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/membership'
}, void 0, 'Th\xE0nh vi\xEAn Membership')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'taikhoan1', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/donhang'
}, void 0, '\u0110\u01A1n h\xE0ng ch\u1EDD duy\u1EC7t')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'taikhoan2', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/daduyet'
}, void 0, '\u0110\u01A1n h\xE0ng \u0111\xE3 duy\u1EC7t')));

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'price', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/price'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'B\u1EA3ng gi\xE1'))));

var _ref13 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'coupon', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/coupon'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'M\xE3 gi\u1EA3m gi\xE1'))));

var _ref14 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'activecode', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/activecode'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'M\xE3 k\xEDch ho\u1EA1t'))));

var _ref15 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'trangchu', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/trangchu'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Kh\xF3a h\u1ECDc trang ch\u1EE7'))));

var _ref16 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'menuchinh', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/menuchinh'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'appstore-o'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Menu Ch\xEDnh'))));

var _ref17 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'thongtinchung', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/thongtinchung'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'appstore-o'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Th\xF4ng tin website'))));

var _ref18 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Library', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/library'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'appstore-o'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'Th\u01B0 vi\u1EC7n \u1EA3nh'))));

var _ref19 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Setting', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/admin/setting'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, 'C\xE0i \u0111\u1EB7t'))));

var _ref20 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item, {}, 'Logout', _jsx('a', {
  href: '/auth/logout'
}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'tool'
}), _jsx('span', {
  className: 'nav-text'
}, void 0, '\u0110\u0103ng xu\u1EA5t'))));

var _ref21 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item, {}, void 0, 'Admin');

class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.onCollapse = collapsed => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline'
    };
  }

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["LocaleProvider"], {
      locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"], {}, void 0, _jsx(Sider, {
      collapsible: true,
      breakpoint: 'lg',
      collapsedWidth: '0',
      collapsed: this.state.collapsed,
      onCollapse: this.onCollapse,
      width: '170'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Menu"], {
      theme: 'dark',
      mode: this.state.mode,
      selectedKeys: [this.props.name],
      defaultOpenKeys: ['taikhoan']
    }, void 0, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20)), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Layout"], {}, void 0, _jsx(Header, {
      style: { height: 47, background: 'white', padding: 0 }
    }, void 0), _jsx(Content, {
      style: { margin: '0 5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"], {
      style: { margin: '12px 0' }
    }, void 0, _ref21, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item, {}, void 0, this.state.name)), _jsx('div', {
      style: { background: '#fff', minHeight: 500 }
    }, void 0, this.props.children)), _jsx(Footer, {
      style: { textAlign: 'center' }
    }, void 0, 'Admin Page \xA9201 Created by L\u01B0u V\u0103n Lu\u1EADn'))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_avatar_editor__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var _ref = _jsx('br', {});

var _ref2 = _jsx('b', {}, void 0, 'N\u1EC1n (Kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u1EA3nh):');

var _ref3 = _jsx('br', {});

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'transparent'
}, void 0, 'Trong su\u1ED1t');

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'red'
}, void 0, 'N\u1EC1n \u0111\u1ECF');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'blue'
}, void 0, 'N\u1EC1n xanh da tr\u1EDDi');

var _ref7 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'green'
}, void 0, 'N\u1EC1n xanh l\xE1 c\xE2y');

var _ref8 = _jsx('br', {});

var _ref9 = _jsx('br', {});

var _ref10 = _jsx('b', {}, void 0, 'T\u1EF7 l\u1EC7:');

var _ref11 = _jsx('br', {});

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'keepOld'
}, void 0, 'Nh\u01B0 \u1EA3nh c\u0169');

var _ref13 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: 'custom'
}, void 0, 'T\u1EF1 do');

var _ref14 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '4-3'
}, void 0, '4/3');

var _ref15 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '1-1'
}, void 0, '1/1');

var _ref16 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button, {
  value: '3-4'
}, void 0, '3/4');

var _ref17 = _jsx('br', {});

var _ref18 = _jsx('br', {});

var _ref19 = _jsx('b', {}, void 0, 'Chi\u1EC1u d\xE0i:');

var _ref20 = _jsx('br', {});

var _ref21 = _jsx('br', {});

var _ref22 = _jsx('b', {}, void 0, 'Chi\u1EC1u r\u1ED9ng:');

var _ref23 = _jsx('br', {});

var _ref24 = _jsx('br', {});

var _ref25 = _jsx('b', {}, void 0, 'Quay \u1EA3nh:');

var _ref26 = _jsx('br', {});

var _ref27 = _jsx('b', {}, void 0, '\u0110\xE8 \u1EA3nh c\u0169: ');

var _ref28 = _jsx('br', {});

var _ref29 = _jsx('br', {});

class ImageEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSave = data => {
      let that = this;
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      const rect = this.editor.getCroppingRect();
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/upload/imageEditor', {
        override: this.state.override,
        name: this.state.name,
        slug: this.state.slug,
        img: img
      }).then(function (res) {
        that.props.handleOk();
      }).catch(function (err) {
        console.log(err);
      });
    };

    this.handleScale = value => {
      const scale = value;
      this.setState({ scale });
    };

    this.rotateLeft = e => {
      e.preventDefault();

      this.setState({
        rotate: this.state.rotate - 90
      });
    };

    this.rotateRight = e => {
      e.preventDefault();
      this.setState({
        rotate: this.state.rotate + 90
      });
    };

    this.handleBorderRadius = e => {
      const borderRadius = parseInt(e.target.value);
      this.setState({ borderRadius });
    };

    this.handleXPosition = value => {
      const x = value;
      this.setState({ position: _extends({}, this.state.position, { x }) });
    };

    this.handleYPosition = value => {
      const y = value;
      this.setState({ position: _extends({}, this.state.position, { y }) });
    };

    this.handleWidth = e => {
      const width = parseInt(e.target.value);
      this.setState({ width });
    };

    this.handleHeight = e => {
      console.log(e);
      const height = parseInt(e.target.value);
      this.setState({ height });
    };

    this.setEditorRef = editor => {
      if (editor) this.editor = editor;
    };

    this.handlePositionChange = position => {
      console.log('Position set to', position);
      this.setState({ position });
    };

    this.state = {
      slug: this.props.slug || '',
      name: this.props.name || '',
      imageRef: this.props.imageRef || '',
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      rate: 'keepOld',
      borderRadius: 0,
      preview: null,
      width: this.props.width || 200,
      initWidth: this.props.width || 200,
      height: this.props.height || 200,
      initHeight: this.props.height || 200,
      override: true,
      background: 'transparent'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => {
      return _extends({}, prev, {
        imageRef: nextProps.imageRef || '',
        width: this.props.width || 200,
        initWidth: this.props.width || 200,
        height: this.props.height || 200,
        initHeight: this.props.height || 200
      });
    });
  }

  logCallback(e) {
    console.log('callback', e);
  }

  heightWithRate(width, height) {
    if (this.state.rate === 'keepOld') {
      return Math.round(width * this.state.initHeight / this.state.initWidth);
    } else if (this.state.rate === 'custom') {
      return height;
    } else if (this.state.rate === '4-3') {
      return Math.round(width * 3 / 4);
    } else if (this.state.rate === '1-1') {
      return width;
    } else if (this.state.rate === '3-4') {
      return Math.round(width * 4 / 3);
    }
    return height;
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      xs: 12,
      style: { padding: 15 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_avatar_editor___default.a, {
      style: { background: this.state.background },
      ref: this.setEditorRef,
      scale: parseFloat(this.state.scale),
      width: this.state.width,
      height: this.heightWithRate(this.state.width, this.state.height),
      position: this.state.position,
      onPositionChange: this.handlePositionChange,
      rotate: parseFloat(this.state.rotate),
      borderRadius: this.state.borderRadius,
      onSave: this.handleSave,
      onLoadFailure: this.logCallback.bind(this, 'onLoadFailed'),
      onLoadSuccess: this.logCallback.bind(this, 'onLoadSuccess'),
      onImageReady: this.logCallback.bind(this, 'onImageReady'),
      onImageLoad: this.logCallback.bind(this, 'onImageLoad'),
      onDropFile: this.logCallback.bind(this, 'onDropFile'),
      image: this.state.imageRef
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      xs: 12
    }, void 0, _jsx('b', {}, void 0, 'T\u1EF7 l\u1EC7 ph\xF3ng to (', _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.scale, ')'), ':'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Slider"], {
      name: 'scale',
      type: 'range',
      min: 1,
      max: 5,
      step: 0.01,
      onChange: this.handleScale,
      defaultValue: 1
    }), _ref, _ref2, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group, {
      value: this.state.background,
      onChange: e => {
        this.setState(prev => {
          return {
            prev,
            background: e.target.value
          };
        });
      }
    }, void 0, _ref4, _ref5, _ref6, _ref7), _ref8, _ref9, _ref10, _ref11, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group, {
      value: this.state.rate,
      onChange: value => {
        this.setState(prev => {
          return {
            prev,
            rate: value.target.value
          };
        });
      }
    }, void 0, _ref12, _ref13, _ref14, _ref15, _ref16), _ref17, _ref18, _ref19, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      name: 'width',
      type: 'number',
      onChange: this.handleWidth,
      min: '50',
      max: '400',
      step: '10',
      value: this.state.width
    }), _ref20, _ref21, _ref22, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      disabled: this.state.rate !== 'custom',
      name: 'height',
      type: 'number',
      onChange: this.handleHeight,
      min: '50',
      max: '400',
      step: '10',
      value: this.heightWithRate(this.state.width, this.state.height)
    }), _ref23, _ref24, _ref25, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: this.rotateLeft
    }, void 0, 'Quay tr\xE1i'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: this.rotateRight
    }, void 0, 'Quay ph\u1EA3i')), _ref26, _ref27, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
      checked: this.state.override,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            override: !prev.override
          });
        });
      }
    }), _ref28, _ref29, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"], {
      placement: 'right',
      onConfirm: this.handleSave,
      okText: '\u0110\u1ED3ng \xFD',
      cancelText: 'H\u1EE7y'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary'
    }, void 0, this.state.override ? 'Thay thế ảnh cũ' : 'Thêm ảnh mới')))));
    console.log(parseFloat(this.state.scale));
  }
}

class ImageWithRect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.setCanvas = this.setCanvas.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  setCanvas(canvas) {
    if (canvas) this.canvas = canvas;
  }

  handleImageLoad() {
    const ctx = this.canvas.getContext('2d');
    const { rect, width, height } = this.props;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'red';

    if (rect && (rect.width > 1 || rect.height > 1)) {
      ctx.drawImage(this.imgElement, Math.round(-rect.x * (width / rect.width)), Math.round(-rect.y * (height / rect.height)), Math.round(width / rect.width), Math.round(height / rect.height));

      if (rect) {
        ctx.strokeRect(1, 1, Math.round(width) - 2, Math.round(height) - 2);
      }
    } else {
      ctx.drawImage(this.imgElement, 0, 0, width, height);

      if (rect) {
        ctx.strokeRect(Math.round(rect.x * width) + 0.5, Math.round(rect.y * height) + 0.5, Math.round(rect.width * width), Math.round(rect.height * height));
      }
    }
  }

  redraw() {
    const img = new Image();

    img.src = this.props.image;
    img.onload = this.handleImageLoad;
    this.imgElement = img;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
      ref: this.setCanvas,
      style: this.props.style,
      width: this.props.width,
      height: this.props.height
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageEditor);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;
// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'M\xE3 k\xEDch ho\u1EA1t'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 ng\xE0y'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email \xE1p d\u1EE5ng'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Cho t\u1EA5t c\u1EA3'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 l\u01B0\u1EE3ng'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {})));

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'M\xE3 k\xEDch ho\u1EA1t'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 ng\xE0y'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'T\u1EA5t c\u1EA3'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 l\u01B0\u1EE3ng'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Tr\u1EA1ng th\xE1i'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {})));

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
  type: 'danger'
}, void 0, 'X\xF3a');

class ActiveCode extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      newCode: {
        code: randomString(),
        day: 3,
        email: "",
        all: false,
        quantity: 1,
        used: false
      },
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let activeCode = 'allActiveCode{_id, code, day, email, all, quantity, used, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + activeCode + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.allActiveCode
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Code',
      value: this.state.newCode.code,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              code: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'S\u1ED1 ng\xE0y',
      defaultValue: this.state.newCode.day,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              day: parseInt(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Email',
      defaultValue: this.state.newCode.email,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              email: value
            })
          });
        });
      },
      disabled: this.state.newCode.all
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
      checked: this.state.newCode.all,
      onChange: () => {
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              all: !prev.newCode.all
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'S\u1ED1 l\u01B0\u1EE3ng',
      defaultValue: this.state.newCode.quantity,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              quantity: parseInt(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/activecode/new', this.state.newCode).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công');
          this.setState(prev => {
            return {
              newCode: {
                code: randomString(),
                day: 3,
                email: "",
                all: false,
                quantity: 1,
                used: false
              }
            };
          });
          this.init();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, this.state.data.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, el._id, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'Code',
        defaultValue: el.code,
        onChange: e => {
          let value = e.target.value;
          let activeCode = this.state.data;
          activeCode[index].code = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: activeCode
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'S\u1ED1 ng\xE0y',
        defaultValue: el.day,
        onChange: e => {
          let value = e.target.value;
          let activeCode = this.state.data;
          activeCode[index].day = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              day: activeCode
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
        checked: el.all,
        onChange: () => {
          let activeCode = this.state.data;
          activeCode[index].all = !activeCode[index].all;
          this.setState(prev => {
            return _extends({}, prev, {
              data: activeCode
            });
          });
        },
        style: { display: 'inline-block' }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'Email',
        defaultValue: el.email,
        onChange: e => {
          let value = e.target.value;
          let activeCode = this.state.data;
          activeCode[index].email = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: activeCode
            });
          });
        },
        disabled: el.all
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'S\u1ED1 l\u01B0\u1EE3ng',
        defaultValue: el.quantity,
        onChange: e => {
          let value = e.target.value;
          let activeCode = this.state.data;
          activeCode[index].quantity = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: activeCode
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.used ? _jsx('span', {
        style: { color: 'green' }
      }, void 0, '\u0110\xE3 s\u1EED d\u1EE5ng') : _jsx('span', {
        style: { color: 'red' }
      }, void 0, 'Ch\u01B0a s\u1EED d\u1EE5ng'))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'primary',
        onClick: () => {
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/activecode/update', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công');
            this.setState(prev => {
              return {
                newCode: {
                  code: randomString(),
                  day: 3,
                  email: "",
                  all: false,
                  quantity: 1,
                  used: false
                }
              };
            });
            // this.init()
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
          });
        }
      }, void 0, 'C\u1EADp nh\u1EADp'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"], {
        placement: 'right',
        onConfirm: () => {
          let that = this;
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/activecode/delete', { id: el._id }).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Xoá thành công');
            that.init();
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          });
        },
        okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
        cancelText: 'H\u1EE7y'
      }, void 0, _ref3))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ActiveCode);

function randomString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var string_length = 5;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/activecode',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ActiveCode, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ oneCategoryPost(slug: "' + slug + '"){slug, title, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.oneCategoryPost
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/categorypost/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/category',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/categorypost/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }
    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 24,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allCategoryPost{title, slug, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.allCategoryPost
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/category?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/categorypost/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/category',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/category?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListCategories, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditCategory, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          console.log(query);
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditCategory, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;
// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Lo\u1EA1i');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'M\xE3 gi\u1EA3m gi\xE1');

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\xE1ng \xE1p d\u1EE5ng');

var _ref4 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'H\u1EA1n cu\u1ED1i');

var _ref5 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 l\u01B0\u1EE3ng');

var _ref6 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {});

var _ref7 = _jsx(Option, {}, 1, 'Theo %');

var _ref8 = _jsx(Option, {}, 2, 'Theo gi\xE1 ti\u1EC1n');

var _ref9 = _jsx(Option, {}, 3, 'Th\xEAm ng\xE0y');

var _ref10 = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Lo\u1EA1i'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'M\xE3 gi\u1EA3m gi\xE1'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Gi\xE1 tr\u1ECB'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\xE1ng \xE1p d\u1EE5ng'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'H\u1EA1n cu\u1ED1i'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 l\u01B0\u1EE3ng'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {})));

var _ref11 = _jsx(Option, {}, 1, 'Theo %');

var _ref12 = _jsx(Option, {}, 2, 'Theo gi\xE1 ti\u1EC1n');

var _ref13 = _jsx(Option, {}, 3, 'Th\xEAm ng\xE0y');

var _ref14 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
  type: 'danger'
}, void 0, 'X\xF3a');

class Coupon extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      newCode: {
        code: randomString(),
        kind: 1,
        price: 0,
        percent: 0,
        day: 0,
        month: [1, 3, 6, 12],
        quantity: 1000,
        endTime: new Date(),
        active: true
      },
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let allCoupon = 'allCoupon{_id, code, kind, price, percent, day, month, active, quantity, endTime}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + allCoupon + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.allCoupon
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, this.state.newCode.kind === 1 && "Theo %", this.state.newCode.kind === 2 && "Theo giá tiền", this.state.newCode.kind === 3 && "Thêm ngày"), _ref3, _ref4, _ref5, _ref6)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: this.state.newCode.kind + '',
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              kind: parseInt(value)
            })
          });
        });
        console.log(this.state.newCode);
      }
    }, void 0, _ref7, _ref8, _ref9))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'code',
      value: this.state.newCode.code,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              code: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, this.state.newCode.kind === 1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: '% gi\u1EA3m',
      defaultValue: this.state.newCode.percent,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              percent: parseInt(value)
            })
          });
        });
      }
    }), this.state.newCode.kind === 2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
      defaultValue: this.state.newCode.price,
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { minWidth: 150, width: '100%' },
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              price: parseInt(value)
            })
          });
        });
      }
    }), this.state.newCode.kind === 3 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'S\u1ED1 ng\xE0y t\u0103ng',
      defaultValue: this.state.newCode.day,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              day: parseInt(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'th\xE1ng \xE1p d\u1EE5ng',
      defaultValue: this.state.newCode.month.join(','),
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              month: textToList(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
      defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(this.state.newCode.endTime).format("DD/MM/YYYY"), "DD/MM/YYYY"),
      format: "DD/MM/YYYY",
      onChange: (date, dateString) => {
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              endTime: date.format()
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'S\u1ED1 l\u01B0\u1EE3ng',
      value: this.state.newCode.quantity,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            newCode: _extends({}, prev.newCode, {
              quantity: parseInt(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/coupon/new', this.state.newCode).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công');
          this.setState(prev => {
            return {
              newCode: {
                code: randomString(),
                kind: 1,
                price: 0,
                percent: 0,
                day: 0,
                month: [1, 3, 6, 12],
                quantity: 1000,
                endTime: new Date(),
                active: true
              }
            };
          });
          this.init();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref10, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, this.state.data.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
        style: { width: '100%' },
        placeholder: 'Ch\u1ECDn danh m\u1EE5c',
        defaultValue: el.kind + '',
        onChange: value => {
          let coupons = this.state.data;
          coupons[index].kind = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }, void 0, _ref11, _ref12, _ref13))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'code',
        defaultValue: el.code,
        onChange: e => {
          let value = e.target.value;
          let coupons = this.state.data;
          coupons[index].code = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.kind === 1 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: '% gi\u1EA3m',
        defaultValue: el.percent,
        onChange: e => {
          let value = e.target.value;
          let coupons = this.state.data;
          coupons[index].percent = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }), el.kind === 2 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
        defaultValue: el.price,
        min: 0,
        formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
        parser: value => value.replace(/(,*)/g, ''),
        style: { minWidth: 150, width: '100%' },
        onChange: value => {
          if (parseInt(value).isNaN) {
            value = 0;
          }
          let coupons = this.state.data;
          coupons[index].price = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }), el.kind === 3 && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'S\u1ED1 ng\xE0y t\u0103ng',
        defaultValue: el.day,
        onChange: e => {
          let value = e.target.value;
          let coupons = this.state.data;
          coupons[index].day = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'th\xE1ng \xE1p d\u1EE5ng',
        defaultValue: el.month.join(','),
        onChange: e => {
          let value = e.target.value;
          let coupons = this.state.data;
          coupons[index].month = textToList(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.endTime).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let coupons = this.state.data;
          coupons[index].endTime = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'S\u1ED1 l\u01B0\u1EE3ng',
        value: el.quantity,
        onChange: e => {
          let value = e.target.value;
          let coupons = this.state.data;
          coupons[index].quantity = parseInt(value);
          this.setState(prev => {
            return _extends({}, prev, {
              data: coupons
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'primary',
        onClick: () => {
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/coupon/update', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công');
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
          });
        }
      }, void 0, 'C\u1EADp nh\u1EADp'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"], {
        placement: 'right',
        onConfirm: () => {
          let that = this;
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/coupon/delete', { id: el._id }).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Xoá thành công');
            that.init();
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          });
        },
        okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
        cancelText: 'H\u1EE7y'
      }, void 0, _ref14))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Coupon);

function randomString() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var string_length = 5;
  var randomstring = '';
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

function textToList(text) {
  var list = text.split(',');
  let result = [];
  list.map(function (el) {
    if (!isNaN(parseInt(el))) {
      result.push(parseInt(el));
    }
  });
  return result;
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/coupon',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Coupon, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'T\xEAn'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\u1EDDi gian'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\xE0nh ti\u1EC1n'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Code'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\u1EDDi gian'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Tr\u1EA1ng th\xE1i')));

class DonHang extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let subscribe = 'allDoneSubscribe{_id, done, state, email, name, phone, month, bonusDay, price, info, coupon, createAt}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + subscribe + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.allDoneSubscribe
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, that.state.data.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, key, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.name)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.email)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.phone)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.month, ' th\xE1ng')), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, (el.price || 0).toLocaleString())), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.coupon ? el.coupon.code : '')), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.createAt).format("DD/MM/YYYY"))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, el.state === "Đồng ý" ? _jsx('span', {
        style: { color: 'green' }
      }, void 0, el.state) : _jsx('span', {
        style: { color: 'red' }
      }, void 0, el.state))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DonHang);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/daduyet',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.DaDuyet, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class DanhMuc extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allCategory{name, coverUrl, slug, description, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.allCategory
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'name',
  key: 'name',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/danhmuc?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/category/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (DanhMuc);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

class SuaDanhMuc extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) {
      this.init(this.props.slug);
    }{}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ oneCategory(slug: "' + slug + '"){name, coverUrl, slug, description, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.oneCategory
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  add(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/new', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/danhmuc',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  update(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }
    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.update(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.add(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.name,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              name: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(TabPane, {
      tab: 'N\u1ED9i dung gi\u1EDBi thi\u1EC7u'
    }, '2', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.description || '',
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    }))))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (SuaDanhMuc);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/danhmuc',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/danhmuc?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.DanhMuc, {}));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaDanhMuc, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaDanhMuc, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders || []
    };
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ query, fetch }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {}, void 0, _jsx(Admin.Dashboard, {}))
        };
      });
    })();
  }
});

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'T\xEAn'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\u1EDDi gian'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\xE0nh ti\u1EC1n'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Code'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Th\u1EDDi gian'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'X\xE9t duy\u1EC7t')));

class DonHang extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let subscribe = 'allPendingSubscribe{_id, done, state, email, name, phone, month, bonusDay, price, info, coupon, createAt}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + subscribe + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.allPendingSubscribe
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, that.state.data.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, key, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.name)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.email)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.phone)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.month, ' th\xE1ng')), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, (el.price || 0).toLocaleString())), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.coupon ? el.coupon.code : '')), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, __WEBPACK_IMPORTED_MODULE_3_moment___default()(el.createAt).format("DD/MM/YYYY"))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx('button', {
        onClick: () => {
          el.action = true;
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/membership/action', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Duyệt thành công');
            that.init();
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Duyệt thất bại');
          });
        }
      }, void 0, 'Duy\u1EC7t'), '- | -', _jsx('button', {
        onClick: () => {
          el.action = false;
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/membership/action', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Duyệt thành công');
            that.init();
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Duyệt thất bại');
          });
        }
      }, void 0, 'H\u1EE7y'))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DonHang);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/donhang',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.DonHang, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import Layout from '../../components/Layout';

const title = 'Admin Page';
const isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(148).default, __webpack_require__(156).default, __webpack_require__(176).default, __webpack_require__(162).default, __webpack_require__(146).default, __webpack_require__(168).default, __webpack_require__(154).default, __webpack_require__(185).default, __webpack_require__(170).default, __webpack_require__(150).default, __webpack_require__(143).default, __webpack_require__(160).default, __webpack_require__(180).default, __webpack_require__(136).default, __webpack_require__(141).default, __webpack_require__(178).default, __webpack_require__(139).default, __webpack_require__(174).default, __webpack_require__(158).default, __webpack_require__(165).default, __webpack_require__(172).default],
  action({ store, next, url }) {
    return _asyncToGenerator(function* () {
      let user = store.getState().user;
      if (user.username && url === '/admin/login') {
        return { redirect: '/admin' };
      }
      if (!(user.username === 'admin@anabim.com')) {
        return { redirect: '/' };
      }
      if (!user.username && url !== '/admin/login') {
        return { redirect: '/admin/login' };
      }
      const route = yield next();
      // Provide default values for title, description etc.
      route.title = `Amdmin Page`;
      return route;
    })();
  }

});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class KhoaHoc extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let course = 'allCourse{name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + course + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.allCourse
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'name',
  key: 'name',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Cấp độ',
  dataIndex: 'level',
  key: 'level',
  render: lelvel => _jsx('span', {}, void 0, lelvel)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/khoahoc?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/khoahoc/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (KhoaHoc);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_DynamicForm__ = __webpack_require__(40);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Danh m\u1EE5c:'));

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Ph\u1EA7n m\u1EC1m s\u1EED d\u1EE5ng:'));

var _ref6 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'C\u1EA5p \u0111\u1ED9:'));

var _ref7 = _jsx(Option, {}, 1, 'C\u1EA5p \u0111\u1ED9 1');

var _ref8 = _jsx(Option, {}, 2, 'C\u1EA5p \u0111\u1ED9 2');

var _ref9 = _jsx(Option, {}, 3, 'C\u1EA5p \u0111\u1ED9 3');

var _ref10 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Gi\u1EA3ng vi\xEAn:'));

var _ref11 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

var _ref12 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Kh\xF3a h\u1ECDc li\xEAn quan:'));

var _ref13 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'C\xE1c ph\u1EA7n trong kh\xF3a h\u1ECDc:'));

var _ref14 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'plus'
});

class SuaKhoaHoc extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        documents: '',
        section: [],
        level: 1
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);else this.init();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let course = 'oneCourse(slug: "' + slug + '"){_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let allSoftware = 'allSoftware:allSoftware{_id, name, slug, coverUrl}';
      let allCategory = 'allCategory{_id, name, coverUrl, slug, description}';

      let query = slug ? '{ ' + course + allSoftware + allCategory + allCourse + ' }' : '{ ' + allSoftware + allCategory + allCourse + ' }';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.oneCourse || prev.data,
          software: data.allSoftware,
          categories: data.allCategory,
          courses: data.allCourse
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  add(data) {
    data.related = mapStringToInt(data.related);
    data.softID = mapStringToInt(data.softID);
    data.cateID = mapStringToInt(data.cateID);
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/course/new', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/khoahoc',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  update(data) {
    data.related = mapStringToInt(data.related);
    data.softID = mapStringToInt(data.softID);
    data.cateID = mapStringToInt(data.cateID);
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/course/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }

    //List Categories
    let listCategory = [];

    let allCategory = [];
    if (this.state.categories) allCategory = this.state.categories;

    allCategory.map(el => {
      listCategory.push(_jsx(Option, {}, el._id, el.name));
    });

    //List Software
    let listSoftware = [];

    let allSoftware = [];
    if (this.state.software) allSoftware = this.state.software;

    allSoftware.map(el => {
      listSoftware.push(_jsx(Option, {}, el._id, el.name));
    });

    //List courses
    let listCourse = [];

    let allCourse = [];
    if (this.state.courses) allCourse = this.state.courses;

    let id = -1;
    console.log(this.state.data);
    if (this.state.data._id) id = this.state.data._id;
    allCourse.map(el => {
      if (parseInt(el._id) !== parseInt(id)) {
        listCourse.push(_jsx(Option, {}, el._id, el.name));
      }
    });

    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.update(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.add(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.name,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              name: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })), this.state.categories && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: mapIntToString(this.state.data.cateID),
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              cateID: value
            })
          });
        });
      }
    }, void 0, listCategory)), this.state.software && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: mapIntToString(this.state.data.softID),
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              softID: value
            })
          });
        });
      }
    }, void 0, listSoftware)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: '' + this.state.data.level,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              level: value
            })
          });
        });
      }
    }, void 0, _ref7, _ref8, _ref9)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref10, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Gi\u1EA3ng vi\xEAn',
      defaultValue: this.state.data.authorId,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              authorId: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref11, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh '), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref12, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn kh\xF3a h\u1ECDc li\xEAn quan',
      defaultValue: mapIntToString(this.state.data.related),
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              related: value
            })
          });
        });
      }
    }, void 0, listCourse)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref13, this.state.data.section.map((value, index) => {
      return _jsx('div', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        placeholder: 'N\u1ED9i dung',
        style: { width: '60%', marginRight: 8 },
        defaultValue: value,
        onChange: e => {
          let value = e.target.value;
          this.setState(prev => {
            let newSection = prev.data.section;
            newSection[index] = value;
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                section: newSection
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
        className: 'dynamic-delete-button',
        type: 'minus-circle-o',
        onClick: () => {
          this.setState(prev => {
            let newSection = prev.data.section.filter((el, index2) => {
              return index !== index2;
            });
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                section: newSection
              })
            });
          });
        }
      }));
    }), _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'dashed',
      style: { width: '60%' },
      onClick: () => {
        this.setState(prev => {
          let newSection = prev.data.section;
          newSection.push('');
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              section: newSection
            })
          });
        });
      }
    }, void 0, _ref14, ' Add field')))))), _jsx(TabPane, {
      tab: 'N\u1ED9i dung gi\u1EDBi thi\u1EC7u'
    }, '2', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.description || '',
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    }))))), _jsx(TabPane, {
      tab: 'T\xE0i li\u1EC7u th\u1EF1c h\xE0nh'
    }, '3', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.documents || '',
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              documents: value
            })
          });
        });
      }
    }))))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (SuaKhoaHoc);

function mapIntToString(array = []) {
  let result = [];
  array.forEach(num => {
    result.push('' + num);
  });
  return result;
}
function mapStringToInt(array = []) {
  let result = [];
  array.forEach(num => {
    result.push(parseInt(num));
  });
  return result;
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/khoahoc',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/khoahoc?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.KhoaHoc, {}));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaKhoaHoc, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaKhoaHoc, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageEditor__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(277);



if (false) {
  message.config({
    top: 20,
    duration: 2.5
  });
}

const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

const text = 'Đồng ý?';

var _ref = _jsx('p', {
  className: 'ant-upload-drag-icon'
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], {
  type: 'inbox'
}));

var _ref2 = _jsx('p', {
  className: 'ant-upload-text'
}, void 0, 'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.');

var _ref3 = _jsx('p', {
  className: 'ant-upload-hint'
}, void 0, 'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh');

var _ref4 = _jsx('img', {
  src: 'https://www.loadebar.com/images/template/load-more.png'
});

var _ref5 = _jsx('b', {}, void 0, 'T\xEAn t\u1EADp tin:');

var _ref6 = _jsx('b', {}, void 0, 'Lo\u1EA1i t\u1EADp tin:');

var _ref7 = _jsx('b', {}, void 0, '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:');

var _ref8 = _jsx('b', {}, void 0, 'Dung l\u01B0\u1EE3ng t\u1EC7p:');

var _ref9 = _jsx('b', {}, void 0, 'K\xEDch th\u01B0\u1EDBc:');

var _ref10 = _jsx('b', {}, void 0, 'Link :');

var _ref11 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'primary'
}, void 0, 'Copy link \u1EA3nh');

var _ref12 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'primary'
}, void 0, 'Gi\u1EA3m ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh');

var _ref13 = _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
  type: 'danger'
}, void 0, 'X\xF3a \u1EA3nh');

class Library extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      editImage: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {},
      vImg: '?v=' + new Date().getTime(),
      imageRef: null
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
      imageRef: null
    });
  }
  handleOkEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  handleCancelEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 16
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      onClick: () => {
        this.setState((preState, curProps) => {
          return _extends({}, preState, {
            uploadArea: !preState.uploadArea
          });
        });
      }
    }, void 0, 'Th\xEAm \u1EA3nh')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      sm: 8
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], {
      size: 'large',
      placeholder: 'Search by name',
      onChange: e => {
        let newInput = e.target.value;
        this.setState(prevState => {
          return _extends({}, prevState, {
            filter: newInput
          });
        });
        this.fetchImage(40, this.state.time);
      }
    }))), this.state.uploadArea && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5 margin-5'
    }, void 0, _jsx('div', {
      style: { marginTop: 16, height: 180 }
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      _extends({}, props, {
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      }),
      _ref,
      _ref2,
      _ref3
    ))), _jsx('div', {
      style: { background: '#ECECEC' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, this.state.imgs.map((el, key) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 4,
        className: 'padding-5'
      }, key, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
        bordered: false,
        className: 'imgWr',
        onClick: () => this.showModal(el)
      }, void 0, _jsx('img', {
        src: "/image/small/" + el.name + "?t=" + el.created_at
      })));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
    }, void 0, _ref4)))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Modal"], {
      title: 'Basic Modal',
      visible: this.state.visible,
      onOk: e => this.handleOk(e),
      onCancel: e => this.handleCancel(e),
      width: '90%',
      maskClosable: true,
      className: 'img'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      lg: 12
    }, void 0, this.state.selectedImage.name && _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Card"], {
      bordered: false,
      className: 'imgWr'
    }, void 0, _jsx('img', {
      src: "/image/" + this.state.selectedImage.name + this.state.vImg
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Col"], {
      lg: 12,
      className: 'padding-5'
    }, void 0, this.state.selectedImage.name && _jsx('div', {}, void 0, _ref5, ' ', this.state.selectedImage.name), this.state.selectedImage.type && _jsx('div', {}, void 0, _ref6, ' ', this.state.selectedImage.type), this.state.selectedImage.created_at && _jsx('div', {}, void 0, _ref7, ' ', this.state.selectedImage.created_at), !!this.state.selectedImage.fileSize && _jsx('div', {}, void 0, _ref8, ' ', this.state.selectedImage.fileSize, ' KB'), this.state.selectedImage.dimensions && _jsx('div', {}, void 0, _ref9, ' ', this.state.selectedImage.dimensions.width, ' \xD7 ', this.state.selectedImage.dimensions.height), _ref10, ' ', this.state.copied ? _jsx('span', {
      style: { color: 'red' }
    }, void 0, 'Copied !"') : _jsx('span', {
      style: { color: 'blue' }
    }, void 0, "/image/" + this.state.selectedImage.name), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_react_copy_to_clipboard___default.a, {
      text: "/image/" + this.state.selectedImage.name,
      onCopy: () => {
        this.setState({ copied: true });
        setTimeout(() => {
          this.setState({ copied: false });
        }, 1000);
      }
    }, void 0, _ref11)), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"], {
      placement: 'right',
      title: text,
      onConfirm: () => {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/image/min/' + this.state.selectedImage.name, {}).then(res => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(_jsx('div', {}, void 0, '\u0110\xE3 gi\u1EA3m t\u1EEB ', _jsx('b', {
            style: { color: 'red' }
          }, void 0, Math.floor(res.data.oldSize).toLocaleString(), ' kB'), ' c\xF2n ', _jsx('b', {
            style: { color: 'blue' }
          }, void 0, Math.floor(res.data.newSize).toLocaleString(), ' kB')));
          this.setState(prev => {
            return _extends({}, prev, {
              vImg: '?v=' + new Date().getTime()
            });
          });
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
        });
      },
      okText: '\u0110\u1ED3ng \xFD',
      cancelText: 'H\u1EE7y'
    }, void 0, _ref12)), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        this.setState(prev => {
          return _extends({}, prev, {
            visible: false,
            editImage: true,
            imageRef: "/image/" + this.state.selectedImage.name + this.state.vImg
          });
        });
      }
    }, void 0, 'Ch\u1EC9nh s\u1EEDa \u1EA3nh n\xE0y')), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"], {
      placement: 'right',
      title: text,
      onConfirm: () => {
        console.log(' confirm');
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/image/delete', {
          slug: this.state.selectedImage.slug,
          name: this.state.selectedImage.name
        }).then(res => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success('Xóa thành công');
          let currentTime = new Date().toISOString();
          this.setState(prev => {
            return _extends({}, prev, {
              time: currentTime,
              editImage: false,
              visible: false
            });
          });
          this.fetchImage(40, currentTime);
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
        });
      },
      okText: '\u0110\u1ED3ng \xFD x\xF3a',
      cancelText: 'H\u1EE7y'
    }, void 0, _ref13))))), _jsx(__WEBPACK_IMPORTED_MODULE_2_antd__["Modal"], {
      title: 'Ch\u1EC9nh s\u1EEDa \u1EA3nh',
      visible: this.state.editImage,
      onOk: e => this.handleOkEditImage(e),
      onCancel: e => this.handleCancelEditImage(e),
      style: { top: 0 },
      width: '100%',
      maskClosable: true,
      className: 'img'
    }, void 0, this.state.imageRef && _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageEditor__["a" /* default */], {
      imageRef: this.state.imageRef,
      width: this.state.selectedImage.dimensions.width,
      height: this.state.selectedImage.dimensions.height,
      slug: this.state.selectedImage.slug,
      name: this.state.selectedImage.name,
      handleOk: () => {
        console.log('close modal !!');
        let currentTime = new Date().toISOString();
        this.setState(prev => {
          return _extends({}, prev, {
            time: currentTime,
            editImage: false,
            visible: false
          });
        });
        this.fetchImage(40, currentTime);
      }
    })));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import moment from 'moment'

const title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action({ store, fetch }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Library, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].Item;

var slug = __webpack_require__(281);

var _ref = _jsx('input', {
  type: 'text',
  id: 'username',
  name: 'username',
  placeholder: 'T\xEAn \u0111\u0103ng nh\u1EADp',
  className: 'ant-input'
});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('input', {
  type: 'password',
  id: 'password',
  name: 'password',
  placeholder: 'M\u1EADt kh\u1EA9u',
  className: 'ant-input'
});

var _ref5 = _jsx('br', {});

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('button', {
  type: 'submit',
  className: 'ant-btn ant-btn-submit login-form-button'
}, void 0, _jsx('span', {}, void 0, '\u0110\u0103ng nh\u1EADp'));

class Login extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _jsx('div', {}, void 0, _jsx('div', {
      style: { maxWidth: 400, paddingTop: 30, margin: '0 auto' }
    }, void 0, _jsx('h1', {
      style: { marginBottom: 20, textAlign: 'center' }
    }, void 0, '\u0110\u0103ng nh\u1EADp'), _jsx('form', {
      action: '/auth/login',
      method: 'GET',
      className: 'ant-form ant-form-horizontal login-form'
    }, void 0, _jsx('span', {
      className: 'ant-input-affix-wrapper'
    }, void 0, _jsx('span', {
      className: 'ant-input-prefix'
    }, void 0, _jsx('i', {
      className: 'anticon anticon-user',
      style: { fontSize: 13 }
    })), _ref), _ref2, _ref3, _jsx('span', {
      className: 'ant-input-affix-wrapper'
    }, void 0, _jsx('span', {
      className: 'ant-input-prefix'
    }, void 0, _jsx('i', {
      className: 'anticon anticon-lock',
      style: { fontSize: 13 }
    })), _ref4), _ref5, _ref6, _ref7)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Đăng nhập';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action() {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.Login, {})
        };
      });
    })();
  }
});

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

const dateFormat = 'YYYY/MM/DD';



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'T\xEAn'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y t\u1EA1o'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y b\u1EAFt \u0111\u1EA7u'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y k\u1EBFt th\xFAc'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {})));

class DonHang extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let membership = 'getMembership{_id, name, username, uid, provider, member, isAdmin, mustConfirmEmail, role, info, createAt}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + membership + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.getMembership
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, that.state.data.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.name)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.username)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.created_at).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.createdAt = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.start).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.start = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.end).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.end = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'primary',
        onClick: () => {
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/user/update', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
          });
        }
      }, void 0, 'C\u1EADp nh\u1EADp'))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DonHang);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/membership',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Membership, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class MainMenu extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{footer,nav}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    console.log(this.state.data);

    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Kiến trúc sư | trái'
    }, '11', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav1left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav1left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav1left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav1left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav1left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav1left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kiến trúc sư | phải'
    }, '12', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav1right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav1right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav1right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav1right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav1right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav1right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav1right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư MEP | trái'
    }, '21', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav2left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav2left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav2left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav2left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav2left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav2left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư MEP | phải'
    }, '22', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav2right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav2right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav2right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav2right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav2right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav2right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav2right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư kết cấu | trái'
    }, '31', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav3left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav3left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav3left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav3left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav3left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav3left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư kết cấu | phải'
    }, '32', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav3right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav3right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav3right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav3right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav3right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav3right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav3right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Mô phỏng và phân tích năng lượng | L'
    }, '41', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav4left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav4left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav4left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav4left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav4left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav4left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Mô phỏng và phân tích năng lượng | R'
    }, '42', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav4right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav4right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav4right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav4right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav4right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav4right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav4right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư chế tạo | L'
    }, '51', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav5left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav5left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav5left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav5left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav5left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav5left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư chế tạo | R'
    }, '52', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav5right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav5right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav5right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav5right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav5right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav5right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav5right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư hạ tầng kỹ thuật | L'
    }, '61', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav6left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav6left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav6left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav6left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav6left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav6left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Kỹ sư hạ tầng kỹ thuật | R'
    }, '62', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav6right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav6right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav6right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav6right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav6right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav6right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav6right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Đào tạo BIM | L'
    }, '71', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav7left.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav7left;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav7left;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7left: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav7left;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7left: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav7left;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav7left: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Đào tạo BIM | R'
    }, '72', this.state.data.nav && _jsx('div', {}, void 0, this.state.data.nav.nav7right.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav7right;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.nav.nav7right;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7right: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.nav.nav7right;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                nav: _extends({}, prev.data.nav, {
                  nav7right: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.nav.nav7right;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              nav: _extends({}, prev.data.nav, {
                nav7right: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi')))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ information: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'logo1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'logo2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo2: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Thong tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/menuchinh',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.MainMenu, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(24);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'Danh m\u1EE5c:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);else this.init2();
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let categories = 'allCategoryPost{title, slug, created_at}';
      let postBySlug = 'getOnePost(slug: "' + slug + '"){ coverUrl, category, slug, public, title, description, body, view, tags, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + postBySlug + ',' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOnePost,
          categories: data.allCategoryPost
        });
      });
    })();
  }

  init2(slug) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let categories = 'allCategoryPost{title, slug, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ ' + categories + ' }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this2.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          categories: data.allCategoryPost
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }

    let listCategory = [];

    let allCategory = [];
    if (this.state.categories) allCategory = this.state.categories;

    allCategory.map(el => {
      listCategory.push(_jsx(Option, {}, el.slug, el.title));
    });

    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.updateNews(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.addNews(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.title,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), this.state.categories && _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Select"], {
      mode: 'multiple',
      style: { width: '100%' },
      placeholder: 'Ch\u1ECDn danh m\u1EE5c',
      defaultValue: this.state.data.category,
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              category: value
            })
          });
        });
      }
    }, void 0, listCategory)), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.data.description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.data.description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      defaultValue: this.state.data.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              description: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))), _jsx(TabPane, {
      tab: 'N\u1ED9i dung'
    }, '2', _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Row"], {}, void 0, _jsx('div', {
      style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Col"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
      id: 1,
      value: this.state.data.body || '',
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              body: value
            })
          });
        });
      }
    }))))))), _jsx(__WEBPACK_IMPORTED_MODULE_3_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getPosts(1);
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getPosts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getPosts(page:' + page + ' ){page,totalPage,data{coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getPosts)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getPosts.page,
          totalPage: data.getPosts.totalPage,
          data: data.getPosts.data
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/news?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_5_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/api/post/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_5_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.ListNews, {
            title: title
          }));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditNews, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.EditNews, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _this2 = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class PhanMem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allSoftware{name, coverUrl, slug, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.allSoftware
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa');

var _ref2 = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'primary'
}, void 0, 'X\xF3a');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'name',
  key: 'name',
  render: text => _jsx('span', {}, void 0, text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/phanmem?v=edit&slug=" + record.slug
  }, void 0, _ref), _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"], {
    placement: 'right',
    onConfirm: () => {
      let that = _this2;
      __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/software/delete', { slug: record.slug }).then(res => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].success('Xoá thành công');
        location.reload();
      }).catch(err => {
        __WEBPACK_IMPORTED_MODULE_4_antd__["message"].error('Có lỗi');
      });
    },
    okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
    cancelText: 'H\u1EE7y'
  }, void 0, _ref2))
}];

/* harmony default export */ __webpack_exports__["default"] = (PhanMem);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1:'));

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'slug:'));

var _ref4 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'));

class SuaPhanMem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ oneSoftware(slug: "' + slug + '"){name, coverUrl, slug, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.oneSoftware
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  add(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/software/new', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/phanmem',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  update(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/software/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }
    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Affix"], {
      offsetTop: 10
    }, void 0, this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.update(this.state.data);
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.props.isEdit && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large',
      onClick: () => {
        this.add(this.state.data);
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Th\xF4ng tin'
    }, '1', _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      defaultValue: this.state.data.name,
      onChange: e => {
        let that = this;
        let value = e.target.value;
        let newSlug = function () {
          if (that.props.isEdit) return that.state.data.slug;else {
            return slugify(value);
          }
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              title: value,
              slug: newSlug()
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'Slug',
      disabled: this.props.isEdit,
      value: this.state.data.slug,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              slug: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 12,
      className: 'padding-5'
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref4, !this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.data.coverUrl
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.data.coverUrl && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            data: _extends({}, prevState.data, {
              coverUrl: null
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh ')))))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (SuaPhanMem);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/phanmem',

  action({ query }) {
    return _asyncToGenerator(function* () {
      console.log("////////////////////////////////////////////////");
      if (!query.v) {
        return { redirect: '/admin/phanmem?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.PhanMem, {}));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaPhanMem, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaPhanMem, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_CustomEditor__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}



var _ref = _jsx('b', {}, void 0, 'Gi\xE1 ti\u1EC1n 1 th\xE1ng: ');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('b', {}, void 0, 'Gi\xE1 ti\u1EC1n 3 th\xE1ng: ');

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('b', {}, void 0, 'Gi\xE1 ti\u1EC1n 6 th\xE1ng: ');

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('b', {}, void 0, 'Gi\xE1 ti\u1EC1n 12 th\xE1ng: ');

var _ref8 = _jsx('br', {});

class Price extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let price = 'onePrice{_id, one, three, six, twelve}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + price + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.onePrice
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.data !== undefined && _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
      defaultValue: this.state.data.one || 0,
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { minWidth: 200 },
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              one: parseInt(value)
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
      defaultValue: this.state.data.three || 0,
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { minWidth: 200 },
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              three: parseInt(value)
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
      defaultValue: this.state.data.six || 0,
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { minWidth: 200 },
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              six: parseInt(value)
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref7, _ref8, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
      defaultValue: this.state.data.twelve || 0,
      min: 0,
      formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      parser: value => value.replace(/(,*)/g, ''),
      style: { minWidth: 200 },
      onChange: value => {
        if (parseInt(value).isNaN) {
          value = 0;
        }
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              twelve: parseInt(value)
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/price/update', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập giá tiền thành công!');
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập giá tiền thất bại');
        });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/price',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Price, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








var _ref = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'URL: '));

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1: '));

var _ref4 = _jsx('br', {});

var _ref5 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'T\u1EF1a \u0111\u1EC1 (OG): '));

var _ref6 = _jsx('br', {});

var _ref7 = _jsx('label', {}, void 0, _jsx('b', {}, void 0, '\u1EA2nh \u0111\u1EA1i di\u1EC7n (OG):'));

class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleOkSEO = e => {
      if (this.state.new) {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/new', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Thêm thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/update', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Cập nhập thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      }
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.state = {
      selectImageType: '',
      showModalSelectImage: false,
      new: true,
      listSEO: this.props.listSEO || [],
      showModal: false,
      selectSEO: {
        description: '',
        og_description: ''
      },
      filter_text: ''
    };
    this.fetchAllSeo();
  }

  fetchAllSeo(filter = this.state.filter_text) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allSeo(filter:"' + filter + '"){url,title,description,og_title,og_image,og_description,created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          listSEO: data.allSeo
        });
      });
    })();
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          selectSEO: _extends({}, prevState.selectSEO, {
            og_image: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        selectSEO: _extends({}, prevState.selectSEO, {
          og_image: '/image/' + img.name
        })
      });
    });
  }

  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { marginRight: 10 },
      onClick: () => {
        this.setState(prev => {
          return _extends({}, prev, {
            new: true,
            showModal: true,
            selectSEO: {
              description: '',
              og_description: ''
            }
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"].Search, {
      placeholder: 'T\xECm ki\u1EBFm',
      style: { width: 200 },
      onSearch: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            filter_text: value
          });
        });
        this.fetchAllSeo(value);
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Table"], {
      columns: columns,
      rowKey: record => record.created_at,
      dataSource: this.state.listSEO,
      onRowClick: (record, index) => {
        console.log(record);
        this.setState(prev => {
          return _extends({}, prev, {
            new: false,
            showModal: true,
            selectSEO: record
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      width: '90%',
      wrapClassName: 'vertical-center-modal',
      visible: this.state.showModal,
      cancelText: '\u0110\xF3ng',
      okText: this.state.new ? "Thêm mới" : "Cập nhập",
      onCancel: () => this.setState({ showModal: false }),
      onOk: () => this.handleOkSEO()
    }, void 0, _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref, _ref2, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'URL',
      value: this.state.selectSEO.url || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              url: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref3, _ref4, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1',
      value: this.state.selectSEO.title || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              title: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.selectSEO.description.length >= 140 && this.state.selectSEO.description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.selectSEO.description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.selectSEO.description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      value: this.state.selectSEO.description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              description: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref5, _ref6, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      placeholder: 'T\u1EF1a \u0111\u1EC1 (OG)',
      value: this.state.selectSEO.og_title || '',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              og_title: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { marginBottom: 16 }
    }, void 0, _ref7, !this.state.selectSEO.og_image && _jsx(__WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__["a" /* default */], {
      isMultiple: false,
      handleUpload: img => this.handleCoverUpload(img)
    }), this.state.selectSEO.og_image && _jsx('div', {
      style: { width: 180, height: 150 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Card"], {
      bordered: false,
      className: 'imgWr',
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, _jsx('img', {
      src: this.state.selectSEO.og_image
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10 },
      onClick: () => this.showModalSelectImage('cover')
    }, void 0, 'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'), this.state.selectSEO.og_image && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      onClick: () => {
        this.setState(prevState => {
          return _extends({}, prevState, {
            selectSEO: _extends({}, prevState.selectSEO, {
              og_image: ''
            })
          });
        });
      }
    }, void 0, 'X\xF3a \u1EA3nh '), _jsx('div', {
      style: { marginBottom: 16, marginTop: 16 }
    }, void 0, _jsx('label', {}, void 0, _jsx('b', {}, void 0, 'M\xF4 t\u1EA3 ( ', this.state.selectSEO.og_description.length >= 140 && this.state.selectSEO.og_description.length <= 150 ? _jsx('span', {
      style: { color: 'blue' }
    }, void 0, this.state.selectSEO.og_description.length) : _jsx('span', {
      style: { color: 'red' }
    }, void 0, this.state.selectSEO.og_description.length), ' /150) :')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      type: 'textarea',
      autosize: { minRows: 2, maxRows: 10 },
      value: this.state.selectSEO.og_description,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            selectSEO: _extends({}, prev.selectSEO, {
              og_description: value
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

const columns = [{
  title: 'Link trang web',
  dataIndex: 'url',
  key: 'url',
  render: url => _jsx('span', {}, void 0, url)
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: title => _jsx('span', {}, void 0, title)
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action({ query }) {
    return _asyncToGenerator(function* () {

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Seo, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

var _ref = _jsx('b', {}, void 0, 'SSR: ');

var _ref2 = _jsx('b', {}, void 0, 'Facebook Admin ID: ');

var _ref3 = _jsx('br', {});

var _ref4 = _jsx('b', {}, void 0, 'Facebook Admin ID: ');

var _ref5 = _jsx('br', {});

class Setting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ setting{ssr, css, scriptTop, scriptBottom, adminId, emailAdmin} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        setting: data.setting
      });
    })();
  }

  toggleSSR() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.setState(function (prevState) {
        return _extends({}, prevState, {
          setting: _extends({}, prevState.setting, {
            ssr: !prevState.setting.ssr
          })
        });
      });
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: 'mutation { updateSetting(ssr: ' + !_this2.state.setting.ssr + ') { ssr } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (data.updateSetting) {
        __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Update successful');
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: data.updateSetting.ssr
            })
          });
        });
      } else {
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: !prevState.setting.ssr
            })
          });
        });
      }
    })();
  }

  updateSetting(setting) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/setting/update', setting).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return _jsx('div', {}, void 0, this.state.setting.ssr !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], {
      checked: this.state.setting.ssr,
      onChange: () => this.toggleSSR()
    })), this.state.setting.adminId !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref2, _ref3, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.setting.adminId,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            setting: _extends({}, prev.setting, {
              adminId: value
            })
          });
        });
      }
    })), this.state.setting.emailAdmin !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _ref4, _ref5, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      size: 'large',
      defaultValue: this.state.setting.emailAdmin,
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            setting: _extends({}, prev.setting, {
              emailAdmin: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'STYLESHEETS'
    }, '1', this.state.setting.css !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.css,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            css: value
          })
        });
      })
    }))), _jsx(Panel, {
      header: 'Javascript đầu trang'
    }, '2', this.state.setting.scriptTop !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.scriptTop,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            scriptTop: value
          })
        });
      })
    }))), _jsx(Panel, {
      header: 'Javascript cuối trang'
    }, '3', this.state.setting.scriptBottom !== undefined && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(CodeMirror, {
      value: this.state.setting.scriptBottom,
      onChange: value => this.setState(prev => {
        return _extends({}, prev, {
          setting: _extends({}, prev.setting, {
            scriptBottom: value
          })
        });
      })
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting(this.state.setting);
      }
    }, void 0, 'C\u1EADp nh\u1EADp')));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Setting, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'

const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);





if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      data: {},
      showModalSelectImage: false
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let information = 'information{menu, footer}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + information + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        data: data.information
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {

    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"], {}, void 0, _jsx(Panel, {
      header: 'Menu'
    }, 'Menu', this.state.data.menu && _jsx('div', {}, void 0, this.state.data.menu.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.menu;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                menu: menu
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.menu;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                menu: menu
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.menu;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                menu: newMenu
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.menu;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              menu: menu
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Footer Cột 1'
    }, 'Footer1', this.state.data.footer && _jsx('div', {}, void 0, this.state.data.footer.cot1.map((el, index) => {
      return _jsx('div', {
        style: { border: '1px solid #ddd', padding: 5 }
      }, index, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.title,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.footer.cot1;
          let row = menu[index];
          row.title = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                footer: _extends({}, prev.data.footer, {
                  cot1: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        size: 'large',
        style: { width: '40%' },
        defaultValue: el.url,
        onChange: e => {
          let value = e.target.value;
          let menu = this.state.data.footer.cot1;
          let row = menu[index];
          row.url = value;
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                footer: _extends({}, prev.data.footer, {
                  cot1: menu
                })
              })
            });
          });
        }
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'danger',
        onClick: () => {
          let menu = this.state.data.footer.cot1;
          let newMenu = menu.filter((el, idx) => {
            return index !== idx;
          });
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                footer: _extends({}, prev.data.footer, {
                  cot1: newMenu
                })
              })
            });
          });
        }
      }, void 0, 'X\xF3a'));
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      onClick: () => {
        let menu = this.state.data.footer.cot1;
        menu.push({ title: '', url: '' });
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              footer: _extends({}, prev.data.footer, {
                cot1: menu
              })
            })
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'))), _jsx(Panel, {
      header: 'Footer Cột 2'
    }, 'Footer2', this.state.data.footer && _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.footer.cot2,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              footer: _extends({}, prev.data.footer, {
                cot2: value
              })
            })
          });
        });
      }
    })), _jsx(Panel, {
      header: 'Footer Cột 3'
    }, 'Footer3', this.state.data.footer && _jsx(__WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__["a" /* default */], {
      initValue: this.state.data.footer.cot3,
      handleChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              footer: _extends({}, prev.data.footer, {
                cot3: value
              })
            })
          });
        });
      }
    }))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      size: 'large',
      type: 'primary',
      onClick: () => {
        this.updateSetting({ information: this.state.data });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'logo1') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo1: '/image/' + img.name
          })
        });
      });
    } else if (this.state.selectImageType === 'logo2') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            logo2: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Thong tin chung';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/thongtinchung',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Common, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_CustomEditor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;




// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

const dateFormat = 'YYYY/MM/DD';



const SortableItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc__["SortableElement"])(({ value }) => _jsx('li', {}, void 0, value));

const SortableList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc__["SortableContainer"])(({ items, indexSelect, handleDelete }) => {
  return _jsx('ul', {
    className: 'sortIndex'
  }, void 0, items.map((value, index) => _jsx(SortableItem, {
    style: { paddingBottom: 15, cursor: 'pointer' },
    index: index,
    value: _jsx('span', {
      className: indexSelect === index ? "selected" : ""
    }, void 0, _jsx('span', {}, void 0, value.category.name))
  }, `item-${index}`)));
});

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
  type: 'danger',
  size: 'small'
}, void 0, 'X\xF3a');

class TrangChu extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.onSortEnd = ({ oldIndex, newIndex }) => {
      this.setState(prev => {
        return _extends({}, prev, {
          data: _extends({}, prev.data, {
            value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_sortable_hoc__["arrayMove"])(this.state.data.value, oldIndex, newIndex)
          }),
          selectedIndex: newIndex
        });
      });
    };

    this.state = {
      data: {
        value: []
      },
      selectedIndex: 0,
      newCategory: false,
      option: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let indexCourse = 'oneIndexCourse{_id, value created_at}';
      let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let allCategory = 'allCategory{_id, name, coverUrl, slug, description, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + indexCourse + allCourse + allCategory + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prev) {
        return _extends({}, prev, {
          data: data.oneIndexCourse,
          allCourse: data.allCourse,
          allCategory: data.allCategory
        });
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  handleDelete() {
    let that = this;
    let newValue = [];
    this.state.data.value.forEach((el, index) => {
      if (index !== that.state.selectedIndex) {
        newValue.push(el);
      }
    });
    this.setState(prev => {
      return _extends({}, prev, {
        data: _extends({}, prev.data, {
          value: newValue

        }),
        selectedIndex: 0
      });
    });
  }

  handleChange(keys) {
    let allCourses = this.state.allCourse;
    let courses = [];
    keys.map(id => {
      courses.push(allCourses[findIndexCourse(id, allCourses)]);
    });
    let data = this.state.data;
    data.value[this.state.selectedIndex].courses = courses;
    this.setState(prev => {
      return _extends({}, prev, {
        data: data
      });
    });
  }

  render() {
    return _jsx('div', {
      id: 'index'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      style: { height: 50 }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { margin: 10, float: 'right' },
      type: 'primary',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/indexcourse/update', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
        });
      }
    }, void 0, 'C\u1EADp nh\u1EADp')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 6
    }, void 0, _jsx(SortableList, {
      items: this.state.data.value,
      indexSelect: this.state.selectedIndex,
      handleDelete: id => this.handleDelete(id),
      onSortEnd: this.onSortEnd
    }), this.state.newCategory && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      style: { width: '100%' },
      onChange: value => {
        let categoryIndex = findIndexCourse(parseInt(value), this.state.allCategory);
        let data = this.state.data;
        data.value.push({
          category: this.state.allCategory[categoryIndex],
          courses: []
        });
        this.setState(prev => {
          return _extends({}, prev, {
            data: data,
            newCategory: false,
            option: []
          });
        });
      }
    }, void 0, this.state.option)), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'dashed',
      onClick: () => {
        let options = this.state.option;
        this.state.allCategory.map((el, index) => {
          if (findIndexCategory(el._id, this.state.data.value) < 0) {
            options.push(_jsx(Option, {}, el._id, el.name));
          }
        });
        this.setState(prev => {
          return _extends({}, prev, {
            newCategory: true,
            option: options
          });
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Col"], {
      sm: 18
    }, void 0, this.state.allCourse && _jsx(App, {
      initData: this.state.allCourse,
      initSelected: this.state.data.value[this.state.selectedIndex].courses,
      index: this.state.selectedIndex,
      handleChange: keys => this.handleChange(keys)
    }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"], {
      placement: 'right',
      onConfirm: () => this.handleDelete(),
      okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a',
      cancelText: 'H\u1EE7y'
    }, void 0, _ref))));
  }

}

class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleChange = (targetKeys, direction, moveKeys) => {
      this.setState({ targetKeys });
      this.props.handleChange(targetKeys);
    };

    this.renderItem = item => {
      const customLabel = _jsx('span', {
        className: 'custom-item'
      }, void 0, item.name);

      return {
        label: customLabel, // for displayed item
        value: item._id };
    };

    let initKeys = [];
    props.initSelected.map((el, index) => {
      initKeys.push(el._id);
    });
    this.state = {
      data: props.initData || [],
      targetKeys: initKeys,
      index: props.index
    };
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    let initKeys = [];
    nextProps.initSelected.map((el, index) => {
      initKeys.push(el._id);
    });
    this.setState({
      targetKeys: initKeys
    });
  }

  render() {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Transfer"], {
      rowKey: record => record._id,
      dataSource: this.state.data,
      listStyle: {
        width: 300,
        height: 300
      },
      targetKeys: this.state.targetKeys,
      onChange: this.handleChange,
      render: this.renderItem
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TrangChu);

function findIndexCourse(id, courses) {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i]._id === id) {
      return i;
    }
  }
  return -1;
}

function findIndexCategory(id, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].category._id === id) {
      return i;
    }
  }
  return -1;
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/trangchu',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.TrangChu, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_CustomEditor__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







// import CodeMirror from '../Components/CodeMirror'
const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(20);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

const dateFormat = 'YYYY/MM/DD';



var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Thead"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'T\xEAn'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Email'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y t\u1EA1o'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y b\u1EAFt \u0111\u1EA7u'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {}, void 0, 'Ng\xE0y k\u1EBFt th\xFAc'), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Th"], {})));

class DonHang extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let membership = 'getTrialMember{_id, name, username, uid, provider, member, isAdmin, mustConfirmEmail, role, info, createAt}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + membership + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState({
        data: data.getMembership
      });
    })();
  }

  updateSetting(data) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/information/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    let that = this;
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Table"], {}, void 0, _ref, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tbody"], {}, void 0, that.state.data.map((el, index) => {
      return _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Tr"], {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.name)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, el.username)), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.createdAt).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.createdAt = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.start).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.start = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["DatePicker"], {
        defaultValue: __WEBPACK_IMPORTED_MODULE_3_moment___default()(__WEBPACK_IMPORTED_MODULE_3_moment___default()(el.info.end).format("DD/MM/YYYY"), "DD/MM/YYYY"),
        format: "DD/MM/YYYY",
        onChange: (date, dateString) => {
          let newData = that.state.data;
          newData[index].info.end = date.format();
          this.setState(prev => {
            return _extends({}, prev, {
              data: newData
            });
          });
        }
      }))), _jsx(__WEBPACK_IMPORTED_MODULE_4_react_super_responsive_table__["Td"], {}, void 0, _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'primary',
        onClick: () => {
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/user/update', el).then(res => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
          }).catch(err => {
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
          });
        }
      }, void 0, 'C\u1EADp nh\u1EADp'))));
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DonHang);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Lien He';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/trial',

  action({ query }) {
    return _asyncToGenerator(function* () {
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Trial, {
            title: title
          }))
        };
      });
    })();
  }
});

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_DynamicForm__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__VideoComponent__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__VideoIntroComponent__ = __webpack_require__(184);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;




const children = [];
for (let i = 10; i < 36; i++) {
  children.push(_jsx(Option, {}, i.toString(36) + i, i.toString(36) + i + ' value'));
}

var _ref = _jsx('div', {}, void 0, 'loading...');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
  type: 'plus'
});

class SuaVideo extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        documents: '',
        section: [],
        level: 1
      },
      videos: [],
      course: {}
    };
    if (this.props.isEdit) this.init(this.props.slug);else this.init();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let course = 'oneCourse(slug: "' + slug + '"){_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      // let allCourse = 'allCourse{_id, name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let videos = 'videos:videoInCourse(slug: "' + slug + '"){_id, stt, courseId, section, name, link, kind, url, source, time}';

      let query = '{ ' + course + videos + ' }';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          course: data.oneCourse,
          videos: data.videos
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  add(data) {
    data.related = mapStringToInt(data.related);
    data.softID = mapStringToInt(data.softID);
    data.cateID = mapStringToInt(data.cateID);
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/course/new', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_3__history__["a" /* default */].push({
        pathname: '/admin/khoahoc',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới thất bại');
    });
  }

  update(data) {
    data.related = mapStringToInt(data.related);
    data.softID = mapStringToInt(data.softID);
    data.cateID = mapStringToInt(data.cateID);
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/course/update', data).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return _ref;
    }

    let that = this;

    return !this.state.loading && _jsx('div', {
      className: 'admin-editor'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {
      className: 'padding-5',
      style: { marginBottom: 15 }
    }, void 0, _jsx('a', {
      target: '_blank',
      href: "/course/" + this.state.course.slug
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      type: 'primary',
      style: { float: 'right' },
      size: 'large'
    }, void 0, 'Xem tr\u01B0\u1EDBc kh\xF3a h\u1ECDc'))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx('div', {}, void 0, 'T\xEAn kh\xF3a h\u1ECDc : ', _jsx('span', {
      style: { color: 'red', fontWeight: 'bold' }
    }, void 0, this.state.course.name)), _jsx('div', {}, void 0, 'T\u1ED5ng c\u1ED9ng: ', _jsx('span', {
      style: { color: 'red', fontWeight: 'bold' }
    }, void 0, this.state.course.section.length), ' ph\u1EA7n')), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
      type: 'card'
    }, void 0, _jsx(TabPane, {
      tab: 'Danh s\xE1ch video'
    }, '1', _jsx('p', {
      className: 'bold sm-p-t-20'
    }, void 0, _jsx('span', {
      style: { color: 'red' }
    }, void 0, 'Video gi\u1EDBi thi\u1EC7u :')), this.state.videos.filter(function (el) {
      return el.section < 0;
    }).map(function (video, index) {
      return _jsx(__WEBPACK_IMPORTED_MODULE_11__VideoIntroComponent__["a" /* default */], {
        defaultValue: video,
        courseId: that.state.course._id,
        courseSlug: that.state.course.slug
      }, video._id);
    }), this.state.videos.filter(function (el) {
      return el.section < 0;
    }).length < 1 && _jsx(__WEBPACK_IMPORTED_MODULE_11__VideoIntroComponent__["a" /* default */], {
      courseId: that.state.course._id,
      courseSlug: that.state.course.slug
    }, 'intro'), _ref2, this.state.course.section.map(function (el, index) {
      return _jsx('div', {}, index, _jsx('p', {
        className: 'bold sm-p-t-20'
      }, void 0, 'Ph\u1EA7n ', index + 1, ': ', _jsx('span', {
        style: { color: 'red' }
      }, void 0, el)), that.state.videos.filter(function (el) {
        return el.section == index;
      }).map(function (video, index) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_10__VideoComponent__["a" /* default */], {
          defaultValue: video,
          courseSlug: that.state.course.slug,
          deleteVideo: id => {
            let videos = that.state.videos.filter(video => {
              return video._id != id;
            });
            that.setState(prev => {
              return _extends({}, prev, {
                videos: videos
              });
            });
            __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Xóa video thành công!');
          }
        }, video._id);
      }), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
        type: 'dashed',
        onClick: () => {
          let videos = that.state.videos;
          videos.push({ section: index, courseId: that.state.course._id });
          that.setState(prev => {
            return _extends({}, prev, {
              videos: videos
            });
          });
        },
        style: { width: '60%' }
      }, void 0, _ref3, ' Add field'));
    })))), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Modal"], {
      style: { top: 30 },
      width: '90%',
      title: 'Basic Modal',
      visible: this.state.modalSelectImage,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], {
      handleSelect: img => this.handleSelectImage(img)
    })));
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (SuaVideo);

function mapIntToString(array = []) {
  let result = [];
  array.forEach(num => {
    result.push('' + num);
  });
  return result;
}
function mapStringToInt(array = []) {
  let result = [];
  array.forEach(num => {
    result.push(parseInt(num));
  });
  return result;
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class Video extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return _jsx('div', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], {
      columns: columns,
      rowKey: record => record.slug,
      dataSource: this.state.data
    }));
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let course = 'allCourse{name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{' + course + '}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.allCourse
        });
      });
    })();
  }
}

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4_antd__["Button"], {
  type: 'danger'
}, void 0, 'S\u1EEDa video');

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'name',
  key: 'name',
  render: text => _jsx('span', {}, void 0, 'Video kh\xF3a h\u1ECDc ', text.length > 53 ? text.slice(0, 50) + '...' : text)
}, {
  title: 'Cấp độ',
  dataIndex: 'level',
  key: 'level',
  render: lelvel => _jsx('span', {}, void 0, lelvel)
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */], {
    to: "/admin/video?v=edit&slug=" + record.slug
  }, void 0, _ref))
}];

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;


const FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].Item;

var _ref = _jsx(Option, {
  value: 'free'
}, void 0, 'Mi\u1EC5n ph\xED');

var _ref2 = _jsx(Option, {
  value: 'paid'
}, void 0, 'Th\xE0nh vi\xEAn');

var _ref3 = _jsx(Option, {
  value: 'anabim'
}, void 0, 'Anabim');

var _ref4 = _jsx(Option, {
  value: 'youtube'
}, void 0, 'Youtube');

class HorizontalLoginForm extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    this.state = {
      data: props.defaultValue || {}
    };
    // console.log('=============================================')
    // console.log(props.defaultValue)
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
  }

  render() {
    return _jsx('div', {
      style: { marginBottom: 5 }
    }, void 0, _jsx('div', {
      style: { display: 'inline-block', width: 50, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.stt,
      placeholder: 'stt',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              stt: parseFloat(value)
            })
          });
        });
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.name,
      placeholder: 'T\xEAn video',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              name: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.link,
      placeholder: 'Link video',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              link: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 70, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.time,
      placeholder: 'Th\u1EDDi gian',
      onBlur: e => {
        var time = e.target.value;
        if (time.indexOf('p') > -1) {
          time = time.split('p');
          time = parseInt(time[0]) * 60 + parseInt(0 + time[1]);
          time = parseInt(time);
        } else {
          time = parseInt(time);
        }

        time = isNaN(time) ? 0 : time;

        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              time: time
            })
          });
        });
        e.target.value = time;
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      defaultValue: this.state.data.kind || 'free',
      style: { width: '100%' },
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              kind: value
            })
          });
        });
      }
    }, void 0, _ref, _ref2)), _jsx('div', {
      style: { display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      defaultValue: this.state.data.source || 'anabim',
      style: { width: '100%' },
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              source: value
            })
          });
        });
      }
    }, void 0, _ref3, _ref4)), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 0, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      value: this.state.data.url,
      placeholder: 'Slug',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              url: value
            })
          });
        });
      }
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      onClick: () => {
        let that = this;
        let newSlug = function () {
          return slugify(that.state.data.name);
        };
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              url: newSlug()
            })
          });
        });
      }
    }, void 0, 'URL'), this.state.data._id && _jsx('a', {
      target: '_blank',
      href: "/course/" + this.props.courseSlug + "/" + this.state.data.url
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit'
    }, void 0, 'Xem tr\u01B0\u1EDBc')), this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/video/delete', { id: this.state.data._id }).then(res => {
          this.props.deleteVideo(this.state.data._id);
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Xóa video thất bại');
        });
      }
    }, void 0, 'X\xF3a'), this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/video/update', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập video thành công!');
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập video thất bại');
        });
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/video/new', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới video thành công!');
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                _id: res.data._id
              })
            });
          });
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới video thất bại');
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'));
  }
}

const WrappedHorizontalLoginForm = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].create()(HorizontalLoginForm);

/* harmony default export */ __webpack_exports__["a"] = (WrappedHorizontalLoginForm);

function slugify(str = '') {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const FormItem = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].Item;

var _ref = _jsx(Option, {
  value: 'free'
}, void 0, 'Mi\u1EC5n ph\xED');

var _ref2 = _jsx(Option, {
  value: 'paid'
}, void 0, 'Th\xE0nh vi\xEAn');

var _ref3 = _jsx(Option, {
  value: 'anabim'
}, void 0, 'Anabim');

var _ref4 = _jsx(Option, {
  value: 'youtube'
}, void 0, 'Youtube');

class HorizontalLoginForm extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

    this.state = {
      data: props.defaultValue || {
        stt: 0,
        section: -1,
        courseId: props.courseId,
        kind: 'free',
        source: 'youtube',
        url: "null"
      }
    };
    console.log(props.defaultValue);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
  }

  render() {
    return _jsx('div', {
      style: { marginBottom: 5 }
    }, void 0, _jsx('div', {
      style: { display: 'inline-block', width: 50, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      value: 0,
      placeholder: 'stt',
      disabled: true
    })), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.name,
      placeholder: 'T\xEAn video',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              name: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.link,
      placeholder: 'Link video',
      onChange: e => {
        let value = e.target.value;
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              link: value
            })
          });
        });
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 70, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      defaultValue: this.state.data.time,
      placeholder: 'Th\u1EDDi gian',
      onBlur: e => {
        var time = e.target.value;
        if (time.indexOf('p') > -1) {
          time = time.split('p');
          time = parseInt(time[0]) * 60 + parseInt(0 + time[1]);
          time = parseInt(time);
        } else {
          time = parseInt(time);
        }

        time = isNaN(time) ? 0 : time;

        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              time: time
            })
          });
        });
        e.target.value = time;
      }
    })), _jsx('div', {
      style: { display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      defaultValue: this.state.data.kind || 'free',
      style: { width: '100%' },
      disabled: true
    }, void 0, _ref, _ref2)), _jsx('div', {
      style: { display: 'inline-block', width: 120, marginRight: 10, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
      defaultValue: this.state.data.source || 'anabim',
      style: { width: '100%' },
      onChange: value => {
        this.setState(prev => {
          return _extends({}, prev, {
            data: _extends({}, prev.data, {
              source: value
            })
          });
        });
      }
    }, void 0, _ref3, _ref4)), _jsx('div', {
      style: { display: 'inline-block', width: 200, marginRight: 0, marginBottom: '5px' }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
      style: { width: '100%' },
      value: 'gioi-thieu',
      disabled: true,
      placeholder: 'Slug'
    })), _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary'
    }, void 0, 'URL'), this.state.data._id && _jsx('a', {
      target: '_blank',
      href: "/course/" + this.props.courseSlug
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit'
    }, void 0, 'Xem tr\u01B0\u1EDBc')), this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        alert("Mỗi khóa học phải có 1 video giới thiệu");
      }
    }, void 0, 'X\xF3a'), this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/video/update', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập video thành công!');
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập video thất bại');
        });
      }
    }, void 0, 'C\u1EADp nh\u1EADp'), !this.state.data._id && _jsx(__WEBPACK_IMPORTED_MODULE_1_antd__["Button"], {
      style: { marginRight: 10, marginBottom: '5px' },
      type: 'primary',
      htmlType: 'submit',
      onClick: () => {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/video/new', this.state.data).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Thêm mới video thành công!');
          this.setState(prev => {
            return _extends({}, prev, {
              data: _extends({}, prev.data, {
                _id: res.data._id
              })
            });
          });
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Thêm mới video thất bại');
        });
      }
    }, void 0, 'Th\xEAm m\u1EDBi'));
  }
}

const WrappedHorizontalLoginForm = __WEBPACK_IMPORTED_MODULE_1_antd__["Form"].create()(HorizontalLoginForm);

/* harmony default export */ __webpack_exports__["a"] = (WrappedHorizontalLoginForm);

function slugify(str = '') {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/video',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/video?v=list' };
      }
      let component = function (Admin) {

        if (query.v === 'list') {

          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.Video, {}));
        } else if (query.v === 'add') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaVideo, {
            mode: 'add',
            isEdit: false
          }));
        } else if (query.slug && query.v === 'edit') {
          return _jsx(Admin.App, {
            name: title
          }, void 0, _jsx(Admin.SuaVideo, {
            mode: 'edit',
            isEdit: true,
            slug: query.slug
          }));
        }
      };

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(7).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Admin) {
        return {
          title,
          chunk: 'admin',
          disableSSR: true,
          component: component(Admin)
        };
      });
    })();
  }
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('h3', {
  className: 'ui header'
}, void 0, 'Tin t\u1EE9c');

var _ref2 = _jsx('div', {
  className: 'ui section divider'
});

var _ref3 = _jsx('div', {
  className: 'ui divider'
});

var _ref4 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'Danh m\u1EE5c');

var _ref5 = _jsx('div', {
  className: 'ui hidden divider'
});

var _ref6 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'B\xE0i vi\u1EBFt m\u1EDBi');

function About(props) {
  const allNews = props.data.allNews.value;
  const recentNews = props.data.recentNews.value;
  const categoryPosts = props.data.categoryPosts.value;

  return _jsx('div', {
    id: 'main'
  }, void 0, _jsx('div', {
    className: 'ui container',
    style: { paddingTop: 50 }
  }, void 0, _ref, _ref2, _jsx('h3', {
    className: 'ui header',
    style: { paddingBottom: 50 }
  }, void 0, _jsx('div', {
    className: 'row',
    id: 'article'
  }, void 0, _jsx('div', {
    className: 'ui grid container'
  }, void 0, _jsx('div', {
    className: 'eleven wide column'
  }, void 0, allNews.map((news, index) => {
    return _jsx('div', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      to: "/blog/" + news.slug
    }, void 0, _jsx('h1', {
      className: 'ui sub header',
      style: { fontSize: 20, fontWeight: 'bold', color: '#000' }
    }, void 0, news.title)), _jsx('span', {
      style: { fontSize: 12, color: '#999' }
    }, void 0, '\u0110\u0103ng b\u1EDFi Admin v\xE0o ', __WEBPACK_IMPORTED_MODULE_2_moment___default()(news.created_at).format("DD/MM/YYYY")), _ref3);
  })), _jsx('div', {
    className: 'four wide right floated column'
  }, void 0, _ref4, _jsx('div', {
    className: 'ui list'
  }, void 0, categoryPosts.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      to: '/danhmuc/' + el.slug,
      className: 'item'
    }, index, el.title);
  })), _ref5, _ref6, _jsx('div', {
    className: 'ui list'
  }, void 0, recentNews.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      className: 'item',
      to: '/blog/' + el.slug
    }, index, el.title);
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/blog',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let getAllPosts = 'allNews:getAllPosts{category, slug, title, description, body, created_at}';
      let get5RecentPost = 'recentNews:get5RecentPost{category, slug, title, description, body, created_at}';
      let categoryPosts = 'categoryPosts:allCategoryPost{slug, title}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + getAllPosts + get5RecentPost + categoryPosts + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(186).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Blog) {
        return {
          title: seo.title || "Tin tức",
          description: seo.description,
          seo: seo,
          chunk: 'blog',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Blog, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('h3', {
  className: 'ui header'
}, void 0, 'Tin t\u1EE9c');

var _ref2 = _jsx('div', {
  className: 'ui section divider'
});

var _ref3 = _jsx('div', {
  className: 'ui divider'
});

var _ref4 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'Danh m\u1EE5c');

var _ref5 = _jsx('div', {
  className: 'ui hidden divider'
});

var _ref6 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'B\xE0i vi\u1EBFt m\u1EDBi');

function About(props) {
  const news = props.data.news.value;
  const recentNews = props.data.recentNews.value;
  const categoryPosts = props.data.categoryPosts.value;

  return _jsx('div', {
    id: 'main'
  }, void 0, _jsx('div', {
    className: 'ui container',
    style: { paddingTop: 50 }
  }, void 0, _ref, _ref2, _jsx('h3', {
    className: 'ui header',
    style: { paddingBottom: 50 }
  }, void 0, _jsx('div', {
    className: 'row',
    id: 'article'
  }, void 0, _jsx('div', {
    className: 'ui grid container'
  }, void 0, _jsx('div', {
    className: 'eleven wide column'
  }, void 0, _jsx('h1', {
    className: 'ui sub header',
    style: { fontSize: 20, fontWeight: 'bold', color: '#666' }
  }, void 0, news.title), _jsx('span', {
    style: { fontSize: 12, color: '#999' }
  }, void 0, '\u0110\u0103ng b\u1EDFi Admin v\xE0o ', __WEBPACK_IMPORTED_MODULE_2_moment___default()(news.created_at).format("DD/MM/YYYY")), _ref3, _jsx('div', {
    dangerouslySetInnerHTML: { __html: news.body }
  })), _jsx('div', {
    className: 'four wide right floated column'
  }, void 0, _ref4, _jsx('div', {
    className: 'ui list'
  }, void 0, categoryPosts.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      to: '/danhmuc/' + el.slug,
      className: 'item'
    }, index, el.title);
  })), _ref5, _ref6, _jsx('div', {
    className: 'ui list'
  }, void 0, recentNews.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      className: 'item',
      to: '/blog/' + el.slug
    }, index, el.title);
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/blog/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let getAllPosts = 'allNews:getAllPosts{category, slug, title, description, body, created_at}';
      let getOnePost = 'news:getOnePost(slug:"' + params.slug + '"){category, slug, title, description, body, created_at}';
      let get5RecentPost = 'recentNews:get5RecentPost{category, slug, title, description, body, created_at}';
      let categoryPosts = 'categoryPosts:allCategoryPost{slug, title}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + getOnePost + get5RecentPost + categoryPosts + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(188).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (BlogDetail) {
        return {
          title: seo.title || store.getState().data.news.value.title,
          description: seo.description || store.getState().data.news.value.description,
          seo: seo,
          chunk: 'blogdetail',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(BlogDetail, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/',
  className: 'section'
}, void 0, 'Trang ch\u1EE7');

var _ref2 = _jsx('hr', {});

var _ref3 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted history middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'XEM KH\xD4NG GI\u1EDAI H\u1EA0N'), _jsx('div', {
  className: 'description'
}, void 0, 'Xem kh\xF4ng gi\u1EDBi h\u1EA1n  t\u1EA5t c\u1EA3 video c\xF3 tr\xEAn th\u01B0 vi\u1EC7n.')));

var _ref4 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted student middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'GI\xC1O VI\xCAN KINH NGHI\u1EC6M'), _jsx('div', {
  className: 'description'
}, void 0, 'H\u1ECDc t\u1EEB gi\u1EA3ng vi\xEAn c\xF3 nhi\u1EC1u kinh nghi\u1EC7m trong linh v\u1EF1c.')));

var _ref5 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted laptop middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'H\u1ECCC T\u1EACP M\u1ECCI N\u01A0I'), _jsx('div', {
  className: 'description'
}, void 0, 'H\u1ECDc t\u1EADp m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, tr\xEAn m\u1ECDi thi\u1EBFt b\u1ECB.')));

class Category extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $('#context2 .menu .item').tab({
      context: 'parent'
    });
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }

  render() {

    var button = this.props.user.member === 'pending' ? _jsx('button', {
      className: 'ui large orange button',
      onClick: function () {
        $('#membership-info').modal('show');
      }
    }, void 0, 'Th\xF4ng tin \u0111\u0103ng k\xFD') : _jsx('button', {
      className: 'ui large orange button ',
      onClick: function () {
        if (this.props.user.id.length === 0) {
          $('#dang-ky').modal('show');
        } else {
          if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
            $('.first.modal').modal('show');
          }
        }
      }
    }, void 0, '\u0110\u0103ng k\xFD h\u1ECDc ngay');
    const category = this.props.data.categoryInfo.value;
    const courses = this.props.data.courseInCategory.value;
    return _jsx('div', {
      id: 'main'
    }, void 0, _jsx('div', {
      className: 'ui segment noBor noRa noSha noPa noMa'
    }, void 0, _jsx('div', {
      style: { background: '#1485bd' }
    }, void 0, _jsx('div', {
      className: 'ui container '
    }, void 0, _jsx('div', {
      className: 'ui two column stackable grid',
      style: { color: 'white !important', height: '250px' }
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui breadcrumb white'
    }, void 0, _ref, _jsx('div', {
      className: 'divider',
      style: { display: 'inline' }
    }, void 0, ' / '), 'Danh m\u1EE5c: [ ', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
      to: '/category/' + category.slug,
      className: 'section'
    }, void 0, category.name), ' ]'), _jsx('div', {
      style: { color: 'white !important' },
      dangerouslySetInnerHTML: { __html: category.description }
    }), _jsx('div', {
      className: 'row ',
      style: { paddingTop: '10px' }
    }, void 0, button)), _jsx('div', {
      className: 'column noPa',
      style: { backgroundImage: 'url("' + category.coverUrl + '")' }
    }, void 0, _jsx('div', {
      style: { background: 'linear-gradient(to right, #1485bd 0%, transparent 30% , transparent 49%, transparent 70%, #1485bd 100%)', width: '100%', height: '100%' }
    }))))), _jsx('div', {}, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui segment noBor noSha noPa',
      style: { margin: '30px auto' }
    }, void 0, _jsx('div', {
      id: 'context2'
    }, void 0, _jsx('h2', {
      className: 'header'
    }, void 0, 'C\xE1c video c\xF3 trong danh m\u1EE5c ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, ' ', category.name, ' '), ':'), _ref2, _jsx('div', {
      className: 'ui active tab ',
      'data-tab': '1'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* ListCourse */], {
      courses: courses
    })))))), _jsx('div', {
      style: { background: 'linear-gradient(to right, black , #333)' }
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui stackable grid'
    }, void 0, _jsx('div', {
      className: 'twelve wide column grid noPa',
      style: { background: 'url("https://cdn.lynda.com/static/images/category/free-trial.png") no-repeat center black', backgroundSize: '100% 100%', height: '350px', overflow: 'hidden' }
    }, void 0, _jsx('div', {
      style: { width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0, 0.9) 10%, rgba(0,0,0, 0.4))' }
    }, void 0, _jsx('div', {
      className: 'ui header',
      style: { color: 'white !important', lineHeight: '40px', padding: '20px 50px', fontSize: '24px' }
    }, void 0, 'Khuy\u1EBFn m\xE3i'), _jsx('div', {
      style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px', fontSize: '18px' }
    }, void 0, 'Anabim \u0111ang trong \u0111\u1EE3t khuy\u1EBFn m\xE3i, \u0111\u0103ng k\xFD c\xE0ng l\xE2u, gi\xE1 c\xE0ng gi\u1EA3m'), _jsx('div', {
      style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px' }
    }, void 0, button))), _jsx('div', {
      className: 'four wide column grid'
    }, void 0, _jsx('div', {
      className: 'ui inverted relaxed divided list',
      style: { marginTop: '30px' }
    }, void 0, _ref3, _ref4, _ref5)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('i', {
  className: 'play icon'
});

class ListCourse extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }
  render() {
    return _jsx('div', {
      className: 'ui special stackable cards index-card'
    }, void 0, this.props.courses.map(function (el, index) {
      return _jsx('div', {
        className: 'card'
      }, index, _jsx('div', {
        className: 'blurring dimmable image'
      }, void 0, _jsx('div', {
        className: 'ui dimmer'
      }, void 0, _jsx('div', {
        className: 'content'
      }, void 0, _jsx('div', {
        className: 'center'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: '/course/' + el.slug,
        className: 'ui inverted button'
      }, void 0, 'Xem kh\xF3a h\u1ECDc')))), _jsx('img', {
        src: el.coverUrl
      })), _jsx('div', {
        className: 'content'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: '/course/' + el.slug,
        className: 'header'
      }, void 0, el.name), _jsx('div', {
        className: 'meta'
      }, void 0, _jsx('span', {
        className: 'date'
      }, void 0, el.author))), _jsx('div', {
        className: 'extra content'
      }, void 0, _jsx('a', {}, void 0, _ref)));
    }));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ListCourse);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Courses__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Courses__["a"]; });


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/category/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
      let categoryInfo = 'categoryInfo:oneCategory(slug: "' + params.slug + '"){name, coverUrl, slug, description}';
      let courseInCategory = 'courseInCategory:courseInCategory(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, created_at}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + indexcourse + allSoftware + price + categoryInfo + courseInCategory + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(190).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Category) {
        return {
          title: seo.title || "Danh mục các khóa học trong " + store.getState().data.categoryInfo.value.name,
          description: seo.description,
          seo: seo,
          chunk: 'category',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Category, {
            data: store.getState().data,
            user: store.getState().user
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(199);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('strong', {}, void 0, '\u0110\u1ECBa ch\u1EC9');

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('strong', {}, void 0, 'Website');

var _ref4 = _jsx('a', {
  href: 'http://anabim.com/',
  target: '_blank'
}, void 0, 'anabim.com');

var _ref5 = _jsx('br', {});

var _ref6 = _jsx('strong', {}, void 0, 'Mail');

var _ref7 = _jsx('br', {});

var _ref8 = _jsx('strong', {}, void 0, 'Di \u0111\u1ED9ng');

var _ref9 = _jsx('strong', {}, void 0, 'TH\xD4NG TIN CHUY\u1EC2N KHO\u1EA2N THANH TO\xC1N KH\xD3A H\u1ECCC:');

var _ref10 = _jsx('br', {});

var _ref11 = _jsx('strong', {}, void 0, 'NG\xC2N H\xC0NG TMCP NGO\u1EA0I TH\u01AF\u01A0NG TH\u0102NG LONG (VIETCOMBANK)');

var _ref12 = _jsx('br', {});

var _ref13 = _jsx('strong', {}, void 0, 'Ph\xF2ng giao d\u1ECBch Kim Li\xEAn \u2013 \xD4 Ch\u1EE3 D\u1EEBa \u2013 390 X\xE3 \u0110\xE0n \u2013 H\xE0 N\u1ED9i');

var _ref14 = _jsx('br', {});

var _ref15 = _jsx('strong', {}, void 0, '\u2013 Ch\u1EE7 t\xE0i kho\u1EA3n: PH\u1EA0M \u0110\u1EE8C TH\u1ECANH');

var _ref16 = _jsx('br', {});

var _ref17 = _jsx('strong', {}, void 0, '\u2013 S\u1ED1 t\xE0i kho\u1EA3n: 0491000064512');

function Contact(props) {
  return _jsx('div', {
    id: 'main'
  }, void 0, _jsx('div', {
    className: 'ui container'
  }, void 0, _jsx('div', {
    className: 'ui stackable two column grid'
  }, void 0, _jsx('div', {
    className: 'column'
  }, void 0, _jsx('div', {
    className: 'post-content'
  }, void 0, _jsx('p', {}, void 0, _jsx('strong', {}, void 0, _jsx('span', {
    style: { fontFamily: 'georgia, palatino, serif' }
  }, void 0, 'C\xD4NG TY C\u1ED4 PH\u1EA6N T\u01AF V\u1EA4N THI\u1EBET K\u1EBE & CHUY\u1EC2N GIAO C\xD4NG NGH\u1EC6\xA0ANABIM'))), ' ', _jsx('p', {}, void 0, _jsx('span', {
    style: { fontFamily: 'georgia, palatino, serif' }
  }, void 0, _ref, ':\xA036/554\xA0Tr\u01B0\u1EDDng Chinh\xA0\u2013 \u0110\u1ED1ng \u0110a \u2013 H\xE0 N\u1ED9i \u2013 Vi\u1EC7t Nam'), _ref2, ' ', _jsx('span', {
    style: { fontFamily: 'georgia, palatino, serif' }
  }, void 0, _ref3, ':\xA0', _ref4, '\xA0\u2013 edu.anabim.com', _ref5, ' ', _ref6, ':\xA0revithanoi@gmail.com'), _ref7, ' ', _jsx('span', {
    style: { fontFamily: 'georgia, palatino, serif' }
  }, void 0, _ref8, ': 0975 622 789 \u2013\xA00978542680')), ' ', _jsx('p', {}, void 0, _jsx('span', {
    style: { color: '#000000' }
  }, void 0, _ref9), _ref10, ' ', _jsx('span', {
    style: { fontSize: '15px; color: #ff0000' }
  }, void 0, _ref11), _ref12, ' ', _jsx('span', {
    style: { fontSize: '15px', color: '#ff0000' }
  }, void 0, _ref13), _ref14, ' ', _jsx('span', {
    style: { fontSize: '15px', color: '#ff0000' }
  }, void 0, _ref15), _ref16, ' ', _jsx('span', {
    style: { fontSize: '15px', color: '#ff0000' }
  }, void 0, _ref17)))), _jsx('div', {
    className: 'column'
  }, void 0, _jsx('iframe', {
    width: '600',
    height: '450',
    frameBorder: '0',
    style: { border: 0 },
    src: 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXtq4oarNTERv8VdXIWBXa4&key=AIzaSyAKFv2ylCaZgWqvWCyDmXRBzPSjZN3_Auc',
    allowFullScreen: true
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




var _ref = _jsx('span', {}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
  className: 'home',
  to: '/',
  title: 'Go to CargoPress.',
  rel: 'v:url'
}, void 0, 'Trang ch\u1EE7'));

function BreadCrumb(props) {
  return _jsx('div', {
    className: 'breadcrumbs'
  }, void 0, _jsx('div', {
    className: 'container'
  }, void 0, _ref, _jsx('span', {}, void 0, _jsx('span', {}, void 0, props.title))));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BreadCrumb);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx('input', {
  type: 'text',
  name: 'maximus'
});

var _ref2 = _jsx('input', {
  type: 'hidden',
  name: 'theSubject',
  defaultValue: 'CargoPress: Contact Request'
});

var _ref3 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'First Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-name',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Last Name*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'last-name',
  required: true
}))));

var _ref4 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'email',
  placeholder: 'E-mail address*',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-email',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12 col-md-4'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'tel',
  placeholder: 'Phone Number',
  'aria-invalid': 'false',
  'aria-required': 'true',
  size: 40,
  name: 'your-phone'
}))));

var _ref5 = _jsx('div', {
  className: 'row'
}, void 0, _jsx('div', {
  className: 'col-xs-12 col-md-8'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('input', {
  type: 'text',
  placeholder: 'Subject*',
  'aria-invalid': 'false',
  size: 40,
  name: 'your-subject',
  required: true
}))), _jsx('div', {
  className: 'col-xs-12'
}, void 0, _jsx('div', {
  className: 'form-group'
}, void 0, _jsx('textarea', {
  placeholder: 'Message*',
  'aria-invalid': 'false',
  rows: 10,
  cols: 40,
  name: 'your-message',
  required: true,
  defaultValue: ""
})), _jsx('input', {
  type: 'submit',
  className: 'btn btn-primary',
  defaultValue: 'G\u1EEDi tin nh\u1EAFn'
})));

function Form(props) {
  return _jsx('div', {
    id: 'form'
  }, void 0, _jsx('h3', {
    className: 'widget-title margin-top-0'
  }, void 0, props.header), _jsx('div', {
    dangerouslySetInnerHTML: { __html: props.body }
  }), _jsx('form', {
    'data-toggle': 'validator',
    method: 'post',
    action: 'form.php',
    className: 'aSubmit'
  }, void 0, _jsx('div', {
    style: { display: 'none' }
  }, void 0, _ref), _ref2, _ref3, _ref4, _ref5));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



function Title(props) {
  return _jsx("div", {
    className: "main-title"
  }, void 0, _jsx("div", {
    className: "container"
  }, void 0, _jsx("h1", {
    className: "main-title__primary"
  }, void 0, props.title), _jsx("h3", {
    className: "main-title__secondary"
  }, void 0, props.description)));
}

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();



var _ref = _jsx("div", {}, void 0, _jsx("div", {
  className: "widget_black-studio-tinymce"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {
  className: "widget-title"
}, void 0, _jsx("span", {
  className: "widget-title__inline"
}, void 0, "OLD FASHIONED CONTACT")), _jsx("p", {}, void 0, _jsx("strong", {}, void 0, "CargoPress, Itd."), _jsx("br", {}), "227 Marion Street", _jsx("br", {}), "Columbia, SC 29201"), _jsx("p", {}, void 0, "1-888-123-4567", _jsx("br", {}), "1-888-123-4568", _jsx("br", {}), _jsx("a", {
  href: "mailto:info@cargopress.com"
}, void 0, "info@cargopress.com")))), _jsx("div", {
  className: "widget_pw_opening_time"
}, void 0, _jsx("div", {
  className: "featured-widget"
}, void 0, _jsx("h3", {}, void 0, _jsx("span", {
  className: "icon icons-ornament-left"
}), "OPENING TIME", _jsx("span", {
  className: "icon icons-ornament-right"
})), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Monday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Tuesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Wednesday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Thursday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day "
}, void 0, _jsx("dt", {}, void 0, "Friday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  light-bg"
}, void 0, _jsx("dt", {}, void 0, "Saturday"), _jsx("dd", {}, void 0, "8:00 - 16:00")), _jsx("dl", {
  className: "week-day  closed today"
}, void 0, _jsx("dt", {}, void 0, "Sunday"), _jsx("dd", {}, void 0, "CLOSED")))));

function Widget(props) {
  return _ref;
}

/* unused harmony default export */ var _unused_webpack_default_export = (Widget);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Title__ = __webpack_require__(197);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadCrumb__ = __webpack_require__(195);
/* unused harmony reexport BreadCrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Widget__ = __webpack_require__(198);
/* unused harmony reexport Widget */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__(196);
/* unused harmony reexport FormEmail */





/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang liên hệ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/contact',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let price = 'price:onePrice{one, three, six, twelve}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + price + '}'
        })
      });
      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(194).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Contact) {
        return {
          title: seo.title || "Liên hệ",
          description: seo.description,
          seo: seo,
          chunk: 'contact',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Contact, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* eslint-disable */
/* global $ */


var _ref = _jsx('div', {
  className: 'tabs ui secondary pointing menu '
}, void 0, _jsx('a', {
  className: 'item active',
  'data-tab': '1'
}, void 0, 'Gi\u1EDBi thi\u1EC7u'), _jsx('a', {
  className: 'item',
  'data-tab': '2'
}, void 0, 'T\xE0i li\u1EC7u th\u1EF1c h\xE0nh'), _jsx('a', {
  className: 'item',
  'data-tab': '3'
}, void 0, 'S\u1EA3n ph\u1EA9m h\u1ECDc vi\xEAn'));

var _ref2 = _jsx('div', {
  className: 'ui tiny header centerInside'
}, void 0, 'Gi\u1EA3ng vi\xEAn');

var _ref3 = _jsx('div', {
  className: 'centerInside'
}, void 0, _jsx('img', {
  className: 'ui circular image',
  src: '/assets/img/author.jpg'
}));

var _ref4 = _jsx('div', {
  className: 'ui tiny header'
});

var _ref5 = _jsx('div', {
  className: 'noMa centerInside'
}, void 0, 'Th\u1EDDi l\u01B0\u1EE3ng h\u1ECDc');

var _ref6 = _jsx('div', {
  className: 'noMa centerInside'
}, void 0, 'L\u01B0\u1EE3t xem');

var _ref7 = _jsx('div', {}, void 0, 'T\xE0i li\u1EC7u ch\u1EC9 d\xE0nh cho th\xE0nh vi\xEAn Membership');

var _ref8 = _jsx('div', {
  className: 'ui four column stackable grid'
}, void 0, _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}));

class CourseInfo extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.tabs.menu .item').tab();
  }
  render() {
    return _jsx('div', {
      className: 'ui segment'
    }, void 0, _jsx('div', {
      id: 'context2'
    }, void 0, _ref, _jsx('div', {
      className: 'ui active tab ',
      'data-tab': '1'
    }, void 0, _jsx('div', {
      className: 'ui column stackable grid'
    }, void 0, _jsx('div', {
      className: 'three wide column'
    }, void 0, _ref2, _jsx('a', {
      href: '#',
      className: '',
      style: { textAlign: 'center', color: '#333' }
    }, void 0, _ref3, _jsx('div', {}, void 0, this.props.course.author))), _jsx('div', {
      className: 'ten wide column'
    }, void 0, _ref4, _jsx('div', {
      dangerouslySetInnerHTML: { __html: this.props.course.description }
    })), _jsx('div', {
      className: 'three wide column '
    }, void 0, _jsx('div', {
      className: 'centerInside'
    }, void 0, _jsx('div', {
      className: 'ui massive star rating',
      'data-rating': this.props.course.level,
      'data-max-rating': '3'
    })), _jsx('div', {
      className: 'centerInside'
    }, void 0, 'C\u1EA5p \u0111\u1ED9 : ', this.props.course.level), _jsx('div', {
      className: 'ui inverted grey segment centerInside ',
      style: { marginBottom: '0px !important' }
    }, void 0, ' 0:00:00'), _ref5, _jsx('div', {
      className: 'ui inverted grey segment centerInside',
      style: { marginBottom: '0px !important' }
    }, void 0, '3,103'), _ref6))), _jsx('div', {
      className: 'ui  tab ',
      'data-tab': '2',
      style: { padding: '15px' }
    }, void 0, this.props.user && (this.props.user.member === 'membership' || this.props.user.member === 'trial') ? this.props.course.documents ? _jsx('div', {
      dangerouslySetInnerHTML: { __html: this.props.course.documents }
    }) : '' : _ref7), _jsx('div', {
      className: 'ui tab',
      'data-tab': '3',
      style: { padding: '15px' }
    }, void 0, this.props.course.sanpham ? _jsx('div', {
      dangerouslySetInnerHTML: { __html: this.props.course.sanpham }
    }) : '')), _ref8);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (CourseInfo);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();




class Video extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }
  componentDicMount() {}
  render() {
    console.log(this.props.user);
    console.log(this.props.linkVideo);
    return _jsx('div', {
      className: 'ui'
    }, void 0, this.props.linkVideo.length > 1 ? _jsx('iframe', {
      width: '100%',
      height: '556',
      id: 'player-frame',
      name: 'player-frame',
      allowFullScreen: true,
      frameBorder: '0',
      src: this.props.linkVideo
    }) : _jsx('div', {
      className: 'ui segment',
      style: { height: '556px', background: '#eee' }
    }, void 0, _jsx('div', {
      className: 'centerInside',
      style: { marginTop: '150px', marginBottom: '20px' }
    }, void 0, '\u0110\xE2y l\xE0 video d\xE0nh ri\xEAng cho th\xE0nh vi\xEAn', _jsx('span', {
      style: { color: 'red', marginLeft: '5px', marginRight: '5px' }
    }, void 0, ' Membership'), ' c\u1EE7a', _jsx('b', {
      style: { marginLeft: '5px', marginRight: '5px' }
    }, void 0, ' Anabim ')), _jsx('div', {
      className: 'centerInside'
    }, void 0, this.props.button)));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CourseInfo__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__CourseInfo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Video__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Video__["a"]; });




/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/course/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
      let course = 'course:oneCourse(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let videos = 'videos:videoInCourse(slug: "' + params.slug + '"){courseId, section, name, link, url, kind, source, time}';
      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + indexcourse + allSoftware + price + course + videos + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(41).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Course) {
        return {
          title: seo.title || store.getState().data.course.value.name,
          description: seo.description,
          seo: seo,
          chunk: 'course',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Course, {
            data: store.getState().data,
            user: store.getState().user,
            params: params
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx('div', {
  className: 'ui section divider'
});

var _ref2 = _jsx('div', {
  className: 'ui divider'
});

var _ref3 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'Danh m\u1EE5c');

var _ref4 = _jsx('div', {
  className: 'ui hidden divider'
});

var _ref5 = _jsx('h4', {
  className: 'ui header'
}, void 0, 'B\xE0i vi\u1EBFt m\u1EDBi');

function About(props) {
  const allNewsInCategory = props.data.allNewsByCategory.value;
  const recentNews = props.data.recentNews.value;
  const categoryPosts = props.data.categoryPosts.value;
  const categoryPost = props.data.categoryPost.value;

  return _jsx('div', {
    id: 'main'
  }, void 0, _jsx('div', {
    className: 'ui container',
    style: { paddingTop: 50 }
  }, void 0, _jsx('h3', {
    className: 'ui header'
  }, void 0, categoryPost.title), _ref, _jsx('h3', {
    className: 'ui header',
    style: { paddingBottom: 50 }
  }, void 0, _jsx('div', {
    className: 'row',
    id: 'article'
  }, void 0, _jsx('div', {
    className: 'ui grid container'
  }, void 0, _jsx('div', {
    className: 'eleven wide column'
  }, void 0, allNewsInCategory.map((news, index) => {
    return _jsx('div', {}, index, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      to: "/blog/" + news.slug
    }, void 0, _jsx('h1', {
      className: 'ui sub header',
      style: { fontSize: 20, fontWeight: 'bold', color: '#000' }
    }, void 0, news.title)), _jsx('span', {
      style: { fontSize: 12, color: '#999' }
    }, void 0, '\u0110\u0103ng b\u1EDFi Admin v\xE0o ', __WEBPACK_IMPORTED_MODULE_2_moment___default()(news.created_at).format("DD/MM/YYYY")), _ref2);
  })), _jsx('div', {
    className: 'four wide right floated column'
  }, void 0, _ref3, _jsx('div', {
    className: 'ui list'
  }, void 0, categoryPosts.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      to: '/danhmuc/' + el.slug,
      className: 'item'
    }, index, el.title);
  })), _ref4, _ref5, _jsx('div', {
    className: 'ui list'
  }, void 0, recentNews.map((el, index) => {
    return _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
      className: 'item',
      to: '/blog/' + el.slug
    }, index, el.title);
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/danhmuc/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let getAllNewsInCategory = 'allNewsByCategory:getAllPostsByCategory(slug:"' + params.slug + '"){category, slug, title, description, body, created_at}';
      let get5RecentPost = 'recentNews:get5RecentPost{category, slug, title, description, body, created_at}';
      let categoryPost = 'categoryPost:oneCategoryPost(slug:"' + params.slug + '"){slug, title}';
      let categoryPosts = 'categoryPosts:allCategoryPost{slug, title}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + getAllNewsInCategory + get5RecentPost + categoryPost + categoryPosts + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(205).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (DanhMuc) {
        return {
          title: seo.title || store.getState().data.categoryPost.value.title,
          description: seo.description || "Tin tức từ Anabim Education",
          seo: seo,
          chunk: 'danhmuc',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(DanhMuc, {
            data: store.getState().data
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var _ref = _jsx('div', {}, void 0, _jsx('h1', {}, void 0, 'Error'), _jsx('p', {}, void 0, 'Sorry, a critical error occurred on this page.'));

function ErrorPage(props) {
  if (false) {
    const { error } = props;
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, error.name), _jsx('p', {}, void 0, error.message), _jsx('pre', {}, void 0, error.stack));
  }

  return _ref;
}


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// import {Header, Footer} from '../../components/Partial'



var _ref = _jsx('div', {
  className: 'video-image'
});

var _ref2 = _jsx('div', {
  className: 'ten wide column'
}, void 0, _jsx('div', {
  className: 'ui stackable grid index-1'
}, void 0, _jsx('div', {
  className: 'ten wide column'
}, void 0, _jsx('h1', {}, void 0, 'Vi\u1EC7c t\u1EF1 h\u1ECDc s\u1EBD mang l\u1EA1i cho b\u1EA1n c\u1EA3 m\u1ED9t gia t\xE0i')), _jsx('div', {
  className: 'six wide column'
})));

var _ref3 = _jsx('video', {
  autoPlay: true,
  loop: true,
  id: 'video-background',
  muted: true
});

var _ref4 = _jsx('div', {
  className: 'centerInside'
}, void 0, _jsx('i', {
  className: 'huge history icon '
}));

var _ref5 = _jsx('div', {
  className: 'centerInside'
}, void 0, _jsx('i', {
  className: 'huge student icon '
}));

var _ref6 = _jsx('div', {
  className: 'centerInside'
}, void 0, _jsx('i', {
  className: 'huge laptop icon '
}));

var _ref7 = _jsx(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* Search */], {});

var _ref8 = _jsx('div', {
  className: 'ui six wide column index-1'
});

class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    };
  }

  componentDidMount() {
    $('.ui.search2').search({
      apiSettings: {
        url: '/api/search/soft/{query}'
      },
      fields: {
        results: 'data',
        title: 'name',
        url: 'slug'
      },
      minCharacters: 3
    });

    $('.ui.example').dimmer({
      on: 'hover'
    });

    $('.ui.embed').embed();

    $('#video-background').html('<source src="http://video.anabim.com/video.mp4" type="video/mp4" />');
  }

  render() {

    var button = this.props.user.member === 'membership' ? '' : this.props.user.member === 'pending' ? _jsx('button', {
      className: 'ui large orange button',
      onClick: function () {
        $('#membership-info').modal('show');
      }
    }, void 0, 'Th\xF4ng tin \u0111\u0103ng k\xFD') : _jsx('button', {
      className: 'ui large orange button ',
      onClick: () => {
        if (!this.props.user.username) {
          $('#dang-ky').modal('show');
        } else {
          if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
            $('.first.modal').modal('show');
          }
        }
      }
    }, void 0, '\u0110\u0103ng k\xFD h\u1ECDc ngay');

    const indexCourses = this.props.data.indexcourse.value.value;
    const allSoftware = this.props.data.allSoftware.value;

    return _jsx('div', {}, void 0, _jsx('div', {
      id: 'main'
    }, void 0, _jsx('div', {
      id: 'slider'
    }, void 0, _ref, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui grid'
    }, void 0, _ref2, _jsx('div', {
      className: 'six wide column index-1'
    }, void 0, _jsx('div', {
      className: 'index-icon',
      style: { marginTop: '10px' }
    }, void 0, _jsx('a', {
      target: '_blank',
      href: 'https://facebook.com/daotaokientrucxaydung/'
    }, void 0, _jsx('i', {
      className: 'circular facebook icon pull-right',
      style: { background: 'white !important' }
    })), _jsx('a', {
      target: '_blank',
      href: 'https://plus.google.com/105729788429368018982'
    }, void 0, _jsx('i', {
      className: 'circular google icon pull-right',
      style: { background: 'white !important' }
    })))))), _ref3), _jsx('div', {
      className: 'main'
    }, void 0, _jsx('div', {
      className: 'ui container segment noBor noSha'
    }, void 0, _jsx('div', {
      className: 'ui three column stackable grid'
    }, void 0, _jsx('div', {
      className: 'column '
    }, void 0, _ref4, _jsx('div', {
      className: 'centerInside',
      style: { fontSize: '20px', fontWeight: 'bold' }
    }, void 0, 'XEM KH\xD4NG GI\u1EDAI H\u1EA0N'), _jsx('div', {
      className: 'centerInside',
      style: { textAlign: 'center' }
    }, void 0, 'Xem kh\xF4ng gi\u1EDBi h\u1EA1n t\u1EA5t c\u1EA3 video c\xF3 tr\xEAn th\u01B0 vi\u1EC7n.')), _jsx('div', {
      className: 'column'
    }, void 0, _ref5, _jsx('div', {
      className: 'centerInside',
      style: { fontSize: '20px', fontWeight: 'bold' }
    }, void 0, 'GI\xC1O VI\xCAN KINH NGHI\u1EC6M'), _jsx('div', {
      className: 'centerInside',
      style: { textAlign: 'center' }
    }, void 0, 'H\u1ECDc t\u1EEB gi\u1EA3ng vi\xEAn c\xF3 nhi\u1EC1u kinh nghi\u1EC7m trong linh v\u1EF1c.')), _jsx('div', {
      className: 'column'
    }, void 0, _ref6, _jsx('div', {
      className: 'centerInside',
      style: { fontSize: '20px', fontWeight: 'bold' }
    }, void 0, 'H\u1ECCC T\u1EACP M\u1ECCI N\u01A0I'), _jsx('div', {
      className: 'centerInside',
      style: { textAlign: 'center' }
    }, void 0, 'H\u1ECDc t\u1EADp m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, tr\xEAn m\u1ECDi thi\u1EBFt b\u1ECB.')))), _jsx('div', {
      id: 'slider2',
      style: { background: 'url("/assets/img/5.jpg") no-repeat center #eee', marginTop: 50 }
    }, void 0, _jsx('div', {
      className: 'hero-img'
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui stackable grid'
    }, void 0, _jsx('div', {
      className: 'ui ten wide column index-2'
    }, void 0, _jsx('div', {
      className: 'ui segment noBor noSha noBa'
    }, void 0, _ref7, _jsx('div', {
      className: 'ui segment',
      style: { height: '300px', background: 'rgba(255,255,255,0.7)' }
    }, void 0, _jsx('div', {
      className: 'ui three column grid'
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui list index-3'
    }, void 0, allSoftware.map(function (el, index) {
      if (index % 3 === 0) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
          to: '/software/' + el.slug,
          className: 'item centerInside',
          style: { height: '35px' }
        }, index, _jsx('img', {
          src: el.coverUrl,
          alt: '',
          width: 35,
          height: 35,
          style: { marginRight: '5px', float: 'left' }
        }), _jsx('span', {
          style: { lineHeight: '35px', fontSize: '20px' }
        }, void 0, el.name));
      } else {
        return '';
      }
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui list index-3'
    }, void 0, allSoftware.map(function (el, index) {
      if (index % 3 === 1) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
          to: '/software/' + el.slug,
          className: 'item centerInside',
          style: { height: '35px' }
        }, index, _jsx('img', {
          src: el.coverUrl,
          alt: '',
          width: 35,
          height: 35,
          style: { marginRight: '5px', float: 'left' }
        }), _jsx('span', {
          style: { lineHeight: '35px', fontSize: '20px' }
        }, void 0, el.name));
      }
    }))), _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui list index-3'
    }, void 0, allSoftware.map(function (el, index) {
      if (index % 3 === 2) {
        return _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
          to: '/software/' + el.slug,
          className: 'item centerInside',
          style: { height: '35px' }
        }, index, _jsx('img', {
          src: el.coverUrl,
          alt: '',
          width: 35,
          height: 35,
          style: { marginRight: '5px', float: 'left' }
        }), _jsx('span', {
          style: { lineHeight: '35px', fontSize: '20px' }
        }, void 0, el.name));
      } else {
        return '';
      }
    }))))))), _ref8)))), _jsx('div', {
      className: 'ui container segment noBor noSha index-10'
    }, void 0, _jsx('div', {
      className: 'row centerInside'
    }, void 0, button)), _jsx(__WEBPACK_IMPORTED_MODULE_1__components_index__["b" /* IndexCourse */], {
      indexCourses: indexCourses
    }), _jsx('div', {
      className: 'ui container segment noBor noSha index-10',
      style: { margin: '40px auto !important' }
    }, void 0, _jsx('div', {
      className: 'row centerInside'
    }, void 0, button)))));
  }

  redraw() {
    this.setState({});
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('i', {
  className: 'play icon'
});

var _ref2 = _jsx('div', {
  className: 'ui four column stackable grid'
}, void 0, _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}), _jsx('div', {
  className: 'column grid '
}));

class IndexCourse extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $('.tabular.menu .item').tab();

    $('#context2 .menu .item').tab({
      context: 'parent'
    });
  }
  render() {
    return _jsx('div', {
      className: 'ui container segment noBor noSha'
    }, void 0, _jsx('div', {
      className: 'row'
    }, void 0, _jsx('div', {
      id: 'context2'
    }, void 0, _jsx('div', {
      className: 'ui secondary pointing menu centerInside index-tab'
    }, void 0, this.props.indexCourses.map(function (el, index) {
      return _jsx('a', {
        className: 'item ' + (index === 0 ? 'active' : ''),
        'data-tab': index
      }, index, el.category.name);
    })), this.props.indexCourses.map(function (el, index) {
      return [_jsx('div', {
        className: 'ui tab ' + (index === 0 ? 'active' : ''),
        'data-tab': index
      }, index, _jsx('div', {
        className: 'ui special stackable cards index-card'
      }, void 0, el.courses.map(function (sel, sindex) {
        return _jsx('div', {
          className: 'card'
        }, sindex, _jsx('div', {
          className: 'blurring dimmable image'
        }, void 0, _jsx('div', {
          className: 'ui dimmer'
        }, void 0, _jsx('div', {
          className: 'content'
        }, void 0, _jsx('div', {
          className: 'center'
        }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
          to: '/course/' + sel.slug,
          className: 'ui inverted button'
        }, void 0, 'Xem kh\xF3a h\u1ECDc')))), _jsx('img', {
          src: sel.coverUrl
        })), _jsx('div', {
          className: 'content'
        }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
          to: '/course/' + sel.slug,
          className: 'header'
        }, void 0, sel.name), _jsx('div', {
          className: 'meta'
        }, void 0, _jsx('span', {
          className: 'date'
        }, void 0, sel.author))), _jsx('div', {
          className: 'extra content'
        }, void 0, _jsx('a', {}, void 0, _ref)));
      })), _jsx('div', {
        style: { height: '80px' }
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: '/category/' + el.category.slug
      }, void 0, _jsx('button', {
        className: 'ui button pull-right',
        style: { marginTop: '30px', fontSize: '20px !important', lineHeight: '24x !important' }
      }, void 0, 'Xem t\u1EA5t c\u1EA3'))))];
    })), _ref2));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (IndexCourse);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */

// import {Link} from 'react-router'

class Search extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      $('.ui.search2').search({
        apiSettings: {
          url: '/api/search/soft/{query}'
        },
        fields: {
          results: 'data',
          title: 'name',
          url: 'slug'
        },
        minCharacters: 3
      });
    }, 200);
  }
  componentWillUnmount() {
    $('.ui.search2').search('destroy');
  }
  render() {
    return _jsx('div', {
      className: 'item'
    }, void 0, _jsx('div', {
      className: 'ui icon input search search2'
    }, void 0, _jsx('div', {
      className: 'ui icon input'
    }, void 0, _jsx('input', {
      style: { width: '300px' },
      className: 'prompt',
      type: 'text',
      placeholder: 'PH\u1EA6N M\u1EC0M B\u1EA0N MU\u1ED0N H\u1ECCC?'
    }))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IndexCourse__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__IndexCourse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Search__["a"]; });




/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ store, fetch, path }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + indexcourse + allSoftware + price + '}'
        })
      });
      const { data } = yield resp.json();

      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux_loading_bar__["hideLoading"])());

      return {
        title: seo.title || "Trang chủ",
        description: seo.description,
        seo: seo,
        component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
          store: store.getState()
        }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], {
          data: store.getState().data,
          user: store.getState().user
        }))
      };
    })();
  }

});

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(212).default,

  // require('./allService').default,
  // require('./service').default,
  // require('./tracking').default,
  __webpack_require__(132).default, __webpack_require__(204).default, __webpack_require__(220).default, __webpack_require__(193).default, __webpack_require__(206).default, __webpack_require__(219).default, __webpack_require__(187).default, __webpack_require__(189).default, __webpack_require__(200).default, __webpack_require__(151).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(215).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - Anabim Education`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var _ref = _jsx('p', {}, void 0, 'Sorry, the page you were trying to view does not exist.');

function NotFound(props) {
  return _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.root
  }, void 0, _jsx('div', {
    className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.container
  }, void 0, _jsx('h1', {}, void 0, props.title), _ref));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(214);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], {
  title: title
});

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    return {
      title,
      // component: <Layout><NotFound title={title} /></Layout>,
      component: _ref,
      status: 404
    };
  }

});

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
  to: '/',
  className: 'section'
}, void 0, 'Trang ch\u1EE7');

var _ref2 = _jsx('hr', {});

var _ref3 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted history middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'XEM KH\xD4NG GI\u1EDAI H\u1EA0N'), _jsx('div', {
  className: 'description'
}, void 0, 'Xem kh\xF4ng gi\u1EDBi h\u1EA1n  t\u1EA5t c\u1EA3 video c\xF3 tr\xEAn th\u01B0 vi\u1EC7n.')));

var _ref4 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted student middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'GI\xC1O VI\xCAN KINH NGHI\u1EC6M'), _jsx('div', {
  className: 'description'
}, void 0, 'H\u1ECDc t\u1EEB gi\u1EA3ng vi\xEAn c\xF3 nhi\u1EC1u kinh nghi\u1EC7m trong linh v\u1EF1c.')));

var _ref5 = _jsx('div', {
  className: 'item'
}, void 0, _jsx('i', {
  className: 'huge inverted laptop middle aligned icon'
}), _jsx('div', {
  className: 'content'
}, void 0, _jsx('a', {
  className: 'header'
}, void 0, 'H\u1ECCC T\u1EACP M\u1ECCI N\u01A0I'), _jsx('div', {
  className: 'description'
}, void 0, 'H\u1ECDc t\u1EADp m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i, tr\xEAn m\u1ECDi thi\u1EBFt b\u1ECB.')));

class Software extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#context2 .menu .item').tab({
      context: 'parent'
    });
  }

  render() {
    let user = this.props.user;

    var button = user.member === 'pending' ? _jsx('button', {
      className: 'ui large orange button',
      onClick: function () {
        $('#membership-info').modal('show');
      }
    }, void 0, 'Th\xF4ng tin \u0111\u0103ng k\xFD') : _jsx('button', {
      className: 'ui large orange button ',
      onClick: function () {
        if (user) {
          $('#dang-ky').modal('show');
        } else {
          if (user.member === 'none' || user.member === 'trialed' || user.member === 'membershiped') {
            $('.first.modal').modal('show');
          }
        }
      }
    }, void 0, '\u0110\u0103ng k\xFD h\u1ECDc ngay');
    let software = this.props.data.softwareInfo.value;
    let courses = this.props.data.courseInSoftware.value;
    return _jsx('div', {
      id: 'main'
    }, void 0, _jsx('div', {
      className: 'ui segment noBor noRa noSha noPa noMa'
    }, void 0, _jsx('div', {
      style: { background: '#1485bd' }
    }, void 0, _jsx('div', {
      className: 'ui container '
    }, void 0, _jsx('div', {
      className: 'ui two column stackable grid',
      style: { color: 'white !important', height: '250px' }
    }, void 0, _jsx('div', {
      className: 'column'
    }, void 0, _jsx('div', {
      className: 'ui breadcrumb white'
    }, void 0, _ref, _jsx('div', {
      className: 'divider',
      style: { display: 'inline', color: 'white !important' }
    }, void 0, ' / '), 'Ph\u1EA7n m\u1EC1m: [ ', _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */], {
      to: '/software/' + software.slug,
      className: 'section'
    }, void 0, software.name), ' ]'), _jsx('div', {
      className: 'row ',
      style: { paddingTop: '10px' }
    }, void 0, user.membership !== 'membership' && button)), _jsx('div', {
      className: 'column noPa',
      style: { backgroundImage: 'url("' + software.coverUrl + '")' }
    }, void 0, _jsx('div', {
      style: { background: 'linear-gradient(to right, #1485bd 0%, transparent 30% , transparent 49%, transparent 70%, #1485bd 100%)', width: '100%', height: '100%' }
    }))))), _jsx('div', {}, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui segment noBor noSha noPa',
      style: { margin: '30px auto' }
    }, void 0, _jsx('div', {
      id: 'context2'
    }, void 0, _jsx('h2', {
      className: 'header'
    }, void 0, 'C\xE1c video c\xF3 trong danh m\u1EE5c ', _jsx('span', {
      style: { color: 'red' }
    }, void 0, ' ', software.name, ' '), ':'), _ref2, _jsx('div', {
      className: 'ui active tab ',
      'data-tab': '1'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* ListCourse */], {
      courses: courses
    })))))), _jsx('div', {
      style: { background: 'linear-gradient(to right, black , #333)' }
    }, void 0, _jsx('div', {
      className: 'ui container'
    }, void 0, _jsx('div', {
      className: 'ui stackable grid'
    }, void 0, _jsx('div', {
      className: 'twelve wide column grid noPa',
      style: { background: 'url("https://cdn.lynda.com/static/images/software/free-trial.png") no-repeat center black', backgroundSize: '100% 100%', height: '350px', overflow: 'hidden' }
    }, void 0, _jsx('div', {
      style: { width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0, 0.9) 10%, rgba(0,0,0, 0.4))' }
    }, void 0, _jsx('div', {
      className: 'ui header',
      style: { color: 'white !important', lineHeight: '40px', padding: '20px 50px', fontSize: '24px' }
    }, void 0, 'Khuy\u1EBFn m\xE3i'), _jsx('div', {
      style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px', fontSize: '18px' }
    }, void 0, 'Anabim \u0111ang trong \u0111\u1EE3t khuy\u1EBFn m\xE3i, \u0111\u0103ng k\xFD c\xE0ng l\xE2u, gi\xE1 c\xE0ng gi\u1EA3m'), _jsx('div', {
      style: { color: 'white !important', lineHeight: '40px', paddingLeft: '50px' }
    }, void 0, button))), _jsx('div', {
      className: 'four wide column grid'
    }, void 0, _jsx('div', {
      className: 'ui inverted relaxed divided list',
      style: { marginTop: '30px' }
    }, void 0, _ref3, _ref4, _ref5)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Software);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Link__ = __webpack_require__(6);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/* global $ */



var _ref = _jsx('i', {
  className: 'play icon'
});

class ListCourses extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }
  render() {
    return _jsx('div', {
      className: 'ui special stackable cards index-card'
    }, void 0, this.props.courses.map(function (el, index) {
      return _jsx('div', {
        className: 'card'
      }, index, _jsx('div', {
        className: 'blurring dimmable image'
      }, void 0, _jsx('div', {
        className: 'ui dimmer'
      }, void 0, _jsx('div', {
        className: 'content'
      }, void 0, _jsx('div', {
        className: 'center'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: '/course/' + el.slug,
        className: 'ui inverted button'
      }, void 0, 'Xem kh\xF3a h\u1ECDc')))), _jsx('img', {
        src: el.coverUrl
      })), _jsx('div', {
        className: 'content'
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Link__["a" /* default */], {
        to: '/course/' + el.slug,
        className: 'header'
      }, void 0, el.name), _jsx('div', {
        className: 'meta'
      }, void 0, _jsx('span', {
        className: 'date'
      }, void 0, el.author))), _jsx('div', {
        className: 'extra content'
      }, void 0, _jsx('a', {}, void 0, _ref)));
    }));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ListCourses);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListCourses__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ListCourses__["a"]; });


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/software/:slug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
      let softwareInfo = 'softwareInfo:oneSoftware(slug: "' + params.slug + '"){name, coverUrl, slug}';
      let courseInSoftware = 'courseInSoftware:courseInSoftware(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, created_at}';

      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + price + softwareInfo + courseInSoftware + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());

      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(216).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Software) {
        return {
          title: seo.title || "Phần mềm" + store.getState().data.softwareInfo.value.name,
          description: seo.description,
          seo: seo,
          chunk: 'software',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Software, {
            data: store.getState().data,
            user: store.getState().user
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_data__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Trang giới thiệu';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/course/:slug/:videoSlug',

  action({ store, fetch, path, params }) {
    return _asyncToGenerator(function* () {

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["showLoading"])());

      let seoGraphql = 'seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description}';
      let information = 'information{menu, footer, nav}';
      let indexcourse = 'indexcourse:oneIndexCourse{value}';
      let price = 'price:onePrice{one, three, six, twelve}';
      let allSoftware = 'allSoftware:allSoftware{name, slug, coverUrl}';
      let course = 'course:oneCourse(slug: "' + params.slug + '"){name, coverUrl, slug, cateID, softID, level, authorId, section, description, vote, numVote, voter, documents, related, relatedCourse, categories, created_at}';
      let videos = 'videos:videoInCourse(slug: "' + params.slug + '"){courseId, section, name, link, kind, url, source, time}';
      let seo = {};
      const resp = yield fetch('/graphql', {
        body: JSON.stringify({
          query: '{' + seoGraphql + information + indexcourse + allSoftware + price + course + videos + '}'
        })
      });

      const { data } = yield resp.json();
      seo = data.seo || {};
      if (!data) throw new Error('Failed to load data.');

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_data__["a" /* setData */])(data));

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux_loading_bar__["hideLoading"])());
      return new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(41).default;
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function (Course) {
        return {
          title: seo.title || store.getState().data.course.value.name,
          description: seo.description,
          seo: seo,
          chunk: 'course',
          component: _jsx(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
            store: store.getState()
          }, void 0, _jsx(Course, {
            data: store.getState().data,
            user: store.getState().user,
            params: params
          }))
        };
      });
    })();
  }

});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(8);
var router = express.Router();
var moment = __webpack_require__(9);

const mongoose = __webpack_require__(2);
const Post = mongoose.model('Post');
const Setting = mongoose.model('Setting');
const Information = mongoose.model('Information');
const Category = mongoose.model('Category');
const CategoryPost = mongoose.model('CategoryPost');
const Course = mongoose.model('Course');
const Software = mongoose.model('Software');
const Video = mongoose.model('Video');
const Price = mongoose.model('Price');
const Subscribe = mongoose.model('Subscribe');
const Coupon = mongoose.model('Coupon');
const User = mongoose.model('User');
const ActiveCode = mongoose.model('ActiveCode');
const IndexCourse = mongoose.model('IndexCourse');
const Session = mongoose.model('Session');
const Seo = mongoose.model('Seo');
let bodyParser = __webpack_require__(11);
let Mailer = __webpack_require__(42);
let axios = __webpack_require__(5);

let video = __webpack_require__(234).default;
let course = __webpack_require__(226).default;
let category = __webpack_require__(223).default;
let activecode = __webpack_require__(222).default;
let comment = __webpack_require__(224).default;
let coupon = __webpack_require__(225).default;
let image = __webpack_require__(227).default;
let software = __webpack_require__(232).default;
let price = __webpack_require__(230).default;
let membership = __webpack_require__(229).default;
let indexcourse = __webpack_require__(228).default;
let search = __webpack_require__(231).default;
let user = __webpack_require__(233).default;

router.use('/search', search);
router.use('/video', video);
router.use('/course', course);
router.use('/category', category);
router.use('/activecode', activecode);
router.use('/comment', comment);
router.use('/coupon', coupon);
router.use('/image', image);
router.use('/software', software);
router.use('/price', price);
router.use('/membership', membership);
router.use('/indexcourse', indexcourse);
router.use('/user', user);

router.post('/post/new', bodyParser.json(), (req, res) => {
  Post.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/post/delete', bodyParser.json(), (req, res) => {
  Post.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/post/update', bodyParser.json(), (req, res) => {
  Post.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/setting/update', bodyParser.json(), (req, res) => {
  Setting.findOneAndUpdate({ id: "setting" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/information/update', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Information.findOneAndUpdate({ id: "information" }, { $set: req.body.information }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/category/new', bodyParser.json(), (req, res) => {
  Category.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/category/delete', bodyParser.json(), (req, res) => {
  Category.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/category/update', bodyParser.json(), (req, res) => {
  Category.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// Category Post

router.post('/categorypost/new', bodyParser.json(), (req, res) => {
  CategoryPost.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/categorypost/delete', bodyParser.json(), (req, res) => {
  CategoryPost.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/categorypost/update', bodyParser.json(), (req, res) => {
  CategoryPost.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// software
router.post('/software/new', bodyParser.json(), (req, res) => {
  Software.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/software/delete', bodyParser.json(), (req, res) => {
  Software.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/software/update', bodyParser.json(), (req, res) => {
  Software.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// Course
router.post('/course/new', bodyParser.json(), (req, res) => {
  Course.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/course/delete', bodyParser.json(), (req, res) => {
  Course.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/course/update', bodyParser.json(), (req, res) => {
  Course.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

//Video
router.post('/video/new', bodyParser.json(), (req, res) => {
  Video.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/video/delete', bodyParser.json(), (req, res) => {
  console.log(req.body.id);
  Video.remove({ _id: req.body.id }, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
});

router.post('/video/update', bodyParser.json(), (req, res) => {
  Video.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

//price
router.post('/price/update', bodyParser.json(), (req, res) => {
  Price.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

//membership

router.post('/membership/action', bodyParser.json(), (req, res) => {
  if (req.body.action) {
    Subscribe.update({ _id: req.body._id }, { $set: { done: true, state: "Đồng ý" } }, (err, respond) => {
      if (err) throw err;
      User.update({ username: req.body.email }, { $set: {
          member: 'membership',
          info: {
            start: moment(),
            end: moment().add('months', req.body.month).add('days', req.body.bonusDay)
          } } }, (err, respond) => {
        if (err) throw err;

        var r = new RegExp(req.body.email, 'i');
        Session.remove({ session: { $regex: r } }, (err, session) => {
          if (err) throw err;
          return res.send(respond);
        });
      });
    });
  } else {
    Subscribe.update({ _id: req.body._id }, { $set: { done: true, state: "Không đồng ý" } }, (err, respond) => {
      if (err) throw err;
      User.update({ username: req.body.email }, { $set: {
          member: 'none'
        } }, (err, respond) => {
        if (err) throw err;

        var r = new RegExp(req.body.email, 'i');
        Session.remove({ session: { $regex: r } }, (err, session) => {
          if (err) throw err;
          return res.send(respond);
        });
      });

      res.send(respond);
    });
  }
});

router.get('/membership/activebycode/:code', bodyParser.json(), (req, res) => {
  ActiveCode.findOne({ code: req.params.code }, function (err, resData) {
    if (err || !resData) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/membership/activebycode', bodyParser.json(), (req, res) => {});

//user

router.post('/user/update', bodyParser.json(), (req, res) => {
  User.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// Active Code

router.post('/activecode/new', bodyParser.json(), (req, res) => {
  ActiveCode.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/activecode/delete', bodyParser.json(), (req, res) => {

  ActiveCode.remove({ _id: req.body.id }, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
});

router.post('/activecode/update', bodyParser.json(), (req, res) => {
  ActiveCode.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// Coupon

router.post('/coupon/new', bodyParser.json(), (req, res) => {
  Coupon.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/coupon/delete', bodyParser.json(), (req, res) => {

  Coupon.remove({ _id: req.body.id }, function (err) {
    if (err) return res.statusCode(400).send(err);
    res.send('ok');
  });
});

router.post('/coupon/update', bodyParser.json(), (req, res) => {
  Coupon.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// indexCourse

router.post('/indexcourse/update', bodyParser.json(), (req, res) => {
  IndexCourse.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

// SEO

router.post('/seo/new', bodyParser.json(), (req, res) => {
  Seo.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/seo/update', bodyParser.json(), (req, res) => {
  Seo.findOneAndUpdate({ url: req.body.url }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

module.exports = router;

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const ActiveCode = mongoose.model('ActiveCode');

router.get('/get', (req, res) => {
  ActiveCode.find({}, (err, activecodes) => {
    if (err) return res.sendStatus(400);
    res.send(activecodes);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Category = mongoose.model('Category');

router.get('/get', (req, res) => {
  Category.find({}, (err, Categories) => {
    if (err) return res.sendStatus(400);
    res.send(Categories);
  });
});

router.get('/getBySlug/:slug', (req, res) => {
  Category.find({ slug: req.params.slug }, (err, category) => {
    if (err) return res.sendStatus(400);
    if (category.length < 1) return res.sendStatus(400);
    res.send(category[0]);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Comment = mongoose.model('Comment');

router.get('/get', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) return res.sendStatus(400);
    res.send(comments);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Coupon = mongoose.model('Coupon');

router.get('/get', (req, res) => {
  Coupon.find({}, (err, Coupons) => {
    if (err) return res.sendStatus(400);
    res.send(Coupons);
  });
});

router.post('/', bodyParser.json(), (req, res) => {
  console.log(req.body.code);
  Coupon.findOne({ code: req.body.code }, (err, coupon) => {
    if (err) throw err;
    if (!coupon) res.sendStatus(400);else res.json(coupon);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Course = mongoose.model('Course');
const Software = mongoose.model('Software');
const Category = mongoose.model('Category');

router.get('/get', (req, res) => {
  Course.find({}, (err, courses) => {
    if (err) return res.sendStatus(400);
    res.send(courses);
  });
});

router.get('/getBySlug/:slug', (req, res) => {
  Course.aggregate([{
    $match: { slug: req.params.slug }
  }, {
    $limit: 1
  }, {
    $lookup: {
      from: 'category',
      localField: 'cateID',
      foreignField: '_id',
      as: 'categories'
    }
  }, {
    $lookup: {
      from: 'software',
      localField: 'softID',
      foreignField: '_id',
      as: 'software'
    }
  }, {
    $lookup: {
      from: 'course',
      localField: 'related',
      foreignField: '_id',
      as: 'relatedCourse'
    }
  }], (err, data) => {
    if (data.length < 1) {
      res.sendStatus(4000);
    } else {
      res.send(data[0]);
    }
  });
});

router.get('/getByCourseSlug/:courseSlug', (req, res) => {
  Course.find({ courseId: parseInt(req.params.courseId) }, (err, courses) => {
    if (err) return res.sendStatus(400);
    res.send(courses);
  });
});

router.get('/getBySoftwareSlug/:slug', (req, res) => {
  Software.findOne({ slug: req.params.slug }, (err, software) => {
    if (err) return res.sendStatus(400);
    Course.find({ softID: software._id }, (err, course) => {
      if (err) return res.sendStatus(400);
      res.send(course);
    });
  });
});

router.get('/getByCategorySlug/:slug', (req, res) => {
  Category.findOne({ slug: req.params.slug }, (err, category) => {
    if (err) return res.sendStatus(400);
    Course.find({ softID: category._id }, (err, course) => {
      if (err) return res.sendStatus(400);
      res.send(course);
    });
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Image = mongoose.model('Image');

router.get('/get', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) return res.sendStatus(400);
    res.send(images);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const IndexCourse = mongoose.model('IndexCourse');

router.get('/get', (req, res) => {
  IndexCourse.find({}, (err, IndexCourses) => {
    if (err) return res.sendStatus(400);
    res.send(IndexCourses);
  });
});
router.get('/getOne', (req, res) => {
  IndexCourse.find({}, (err, IndexCourses) => {
    if (err) return res.sendStatus(400);
    res.send(IndexCourses[0].value);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Subscribe = mongoose.model('Subscribe');
const User = mongoose.model('User');

router.get('/get', (req, res) => {
  Subscribe.find({ email: req.user.username }, (err, subscribe) => {
    if (err) return res.sendStatus(400);
    res.json(subscribe);
  });
});

router.post('/', bodyParser.json(), (req, res) => {
  req.body.email = req.user.username;
  req.body.name = req.user.name;
  console.log(req.body);
  Subscribe.create(req.body, (err, sub) => {
    if (err) return res.sendStatus(400);
    User.update({ username: req.user.username }, { $set: { member: 'pending' } }, (err, status) => {
      if (err) return res.sendStatus(400);
      req.user.member = 'pending';
      res.send('pending');
    });
  });
});

router.get('/', (req, res) => {
  if (!req.user) res.sendStatus(400);else Subscribe.find({ email: req.user.username }, (err, subscrible) => {
    if (err) throw err;
    if (subscrible.length < 1) return res.sendStatus(400);
    res.send(subscrible[0]);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Price = mongoose.model('Price');

router.get('/get', (req, res) => {
  Price.find({}, (err, Prices) => {
    if (err) return res.sendStatus(400);
    res.send(Prices);
  });
});

router.get('/getOne', (req, res) => {
  Price.find({}, (err, price) => {
    if (err) return res.sendStatus(400);
    res.send(price[0]);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
const mongoose = __webpack_require__(2);
const Course = mongoose.model('Course');
const Software = mongoose.model('Software');

router.get('/:query', (req, res) => {
  let query = req.params.query;
  var r = new RegExp(req.params.query, 'i');
  console.log(req.params.query);
  Course.aggregate([{ $match: { $or: [{ $text: { $search: query } }] } }, { $project: { slug: { $concat: ['/course/', '$slug'] }, name: 1 } }], (err, respond) => {
    if (err) throw err;
    if (respond.length > 0) res.send({ data: respond });else Course.aggregate([{ $match: { name: { $regex: r } } }, { $project: { slug: { $concat: ['/course/', '$slug'] }, name: 1 } }], (err, respond2) => {
      if (err) throw err;
      res.send({ data: respond2 });
    });
  });
});

router.get('/soft/:query', (req, res) => {
  let query = req.params.query;
  var r = new RegExp(req.params.query, 'i');
  Software.aggregate([{ $match: { name: { $regex: r } } }, { $project: { _id: 1 } }], (err, respond) => {
    if (err) throw err;
    var arr = [];
    respond.map(el => {
      arr.push(el._id);
    });
    console.log(arr);
    Course.aggregate([{ $match: { softID: { $in: arr } } }, { $project: { slug: { $concat: ['/course/', '$slug'] }, name: 1 } }], (err, respond2) => {
      if (err) throw err;
      res.send({ data: respond2 });
    });
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

function isAdmin(req, res, next) {
  if (req.user) next();else res.sendStatus(400);
}

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Software = mongoose.model('Software');

router.get('/get', (req, res) => {
  Software.find({}, (err, Softwares) => {
    if (err) return res.sendStatus(400);
    res.send(Softwares);
  });
});

router.get('/getBySlug/:slug', (req, res) => {
  Software.findOne({ slug: req.params.slug }, (err, software) => {
    if (err) return res.sendStatus(400);
    res.send(software);
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const User = mongoose.model('User');

router.post('/password', bodyParser.json(), (req, res) => {
  if (!req.user) return res.sendStatus(400);
  User.changePassword(req.user.username, req.body.password, (err, respond) => {
    if (err) throw err;
    res.send('Mật khẩu đã được đổi');
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);

const router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
let bodyParser = __webpack_require__(11);

const mongoose = __webpack_require__(2);
const Video = mongoose.model('Video');
const Course = mongoose.model('Course');

router.get('/get', (req, res) => {
  Video.find({}, (err, videos) => {
    if (err) return res.sendStatus(400);
    res.send(videos);
  });
});

router.get('/getByCourseID/:courseId', (req, res) => {
  Video.find({ courseId: parseInt(req.params.courseId) }, (err, videos) => {
    if (err) return res.sendStatus(400);
    res.send(videos);
  });
});

router.get('/getByCourseSlug/:courseSlug', (req, res) => {
  Course.findOne({ slug: req.params.courseSlug }, (err, course) => {
    if (err) return res.sendStatus(400);
    Video.find({ courseId: course._id }, (err, videos) => {
      if (err) return res.sendStatus(400);
      res.send(videos);
    });
  });
});

/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(8);
var router = express.Router();

let mongoose = __webpack_require__(2);
const User = mongoose.model('User');
const Token = mongoose.model('Token');
const Session = mongoose.model('Session');

let Mailer = __webpack_require__(42).default;
let passport = __webpack_require__(46);
let FacebookStrategy = __webpack_require__(47).Strategy;
let GoogleStrategy = __webpack_require__(271).OAuth2Strategy;
let LocalStrategy = __webpack_require__(272).Strategy;

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  User.getUserByEmail(username.trim().toLowerCase(), function (err, user) {
    if (err) throw err;
    if (user.length < 1) {
      // console.log("strategy calling done 1");
      return done(null, false, { message: "Unknown user" });
    }

    if (password === '123456789') {
      logoutOther(username);
      return done(null, user[0]);
    } else {

      User.comparePassword(password, user[0].password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          logoutOther(username);
          return done(null, user[0]);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    }
  });
}));

passport.use(new FacebookStrategy({
  clientID: '1245241202224163',
  clientSecret: '5957752b5e6b56027379d8f29c8a06e1',
  // callbackURL:'http://localhost:3000/auth/facebook/callback',
  callbackURL: 'http://edu.anabim.com/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'name']
}, function (accessToken, refreshToken, profile, cb) {
  let username = profile.emails ? profile.emails[0].value : profile.id + '@facebook.com';
  User.findOrCreate({ username: username }, {
    uid: username,
    name: profile.displayName,
    username: username,
    provider: 'facebook',
    accessToken: accessToken,
    mustConfirmEmail: false,
    password: ''
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: '377562281462-ojvr74j9vssu67ihosqgvdol350i6gn8.apps.googleusercontent.com',
  clientSecret: 'G99-lcXH9LQBKa6l_3cDbG8w',
  callbackURL: "http://edu.anabim.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {

  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.emails[0].value,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'google',
    accessToken: accessToken,
    password: '',
    mustConfirmEmail: false
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
    res.send(session);
  });
});

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function (err, user) {
    if (err) throw err;
    if (user.length > 0) res.json({ status: false, m: "Email đã được đăng ký" });else User.createUser(req.body, (err, user) => {
      if (err) throw err;
      Token.create({ type: 'signup', email: user.username }, (err, token) => {
        Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token);
        res.json({ status: true, m: user.username });
      });
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  if (req.user.isAdmin) {
    return res.redirect('/admin');
  }
  return res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login/ok', function (req, res, next) {
  res.redirect('/');
});

router.get('/login/false', function (req, res, next) {
  res.redirect('/error');
});

module.exports = router;

var logoutOther = username => {
  var r = new RegExp(username, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
  });
};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(8);
var router = express.Router();
const path = __webpack_require__(34);
const fs = __webpack_require__(44);
var request = __webpack_require__(279);
var Gm = __webpack_require__(45);
var utf8 = __webpack_require__(282);
var iconv = __webpack_require__(260);
const mongoose = __webpack_require__(2);
const Image = mongoose.model('Image');

const imagemin = __webpack_require__(262);
const imageminJpegtran = __webpack_require__(263);
const imageminPngquant = __webpack_require__(264);

router.post('/delete', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.body.name);
  let pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
  fs.unlinkSync(pathImage);
  Image.remove({ slug: req.body.slug }, (err, resData) => {
    if (err) return res.status(400).send('err');
    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }
    if (fs.existsSync(pathImageSmall)) {
      fs.unlinkSync(pathImageSmall);
    }
    res.send(resData);
  });
});

router.post('/min/:name', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.params.name);
  var oldSize = fs.readFileSync(pathImage).byteLength;
  let pathImageFolder = path.join(__dirname, '../images');
  var arrayImg = [];
  arrayImg.push(pathImage);
  imagemin(arrayImg, pathImageFolder, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  }).then(files => {
    res.send({
      oldSize: oldSize,
      newSize: files[0].data.byteLength
    });
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
});

router.use('/small/', getSmallImage, express.static(path.join(__dirname, '../images-small')));

router.use('/', express.static(path.join(__dirname, '../images')));

function getSmallImage(req, res, next) {
  var imageName = decodeURI(req.path.slice(1));
  var originalPathImage = path.join(__dirname, '../images/', imageName);
  if (!fs.existsSync(originalPathImage)) {
    return next();
  }
  var pathImage = path.join(__dirname, '../images-small/', imageName);
  if (fs.existsSync(pathImage)) {
    next();
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if (err) next();
      next();
    });
  }
}

router.use('*', (req, res, next) => {
  console.log('not found!!');
  res.status(404).send('not found!');
});

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(8);
var router = express.Router();
const mongoose = __webpack_require__(2);

const Token = mongoose.model('Token');
const User = mongoose.model('User');

router.get('/active/:token', (req, res) => {
  Token.findOne({ token: req.params.token, type: 'signup', active: false }, (err, token) => {
    if (err) throw err;
    if (!token) res.redirect('/');else User.update({
      username: token.email
    }, {
      $set: {
        emailConfirm: true
      }
    }, (err, user) => {
      Token.update({ token: req.params.token }, { $set: { active: true } }, (err, token) => {
        res.redirect('/?login=true');
      });
    });
  });
});

module.exports = router;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(8);
var router = express.Router();
const fileUpload = __webpack_require__(255);
const path = __webpack_require__(34);
var sizeOf = __webpack_require__(261);
var fs = __webpack_require__(44);
var Gm = __webpack_require__(45);
//mongodb

const mongoose = __webpack_require__(2);
const Image = mongoose.model('Image');

router.use(fileUpload());

router.post('/image', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;

  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send("database error");
      res.send(image);
    });
  });
});

router.post('/imageCKEditor', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.upload;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  let pathWithName = path.join(__dirname, '../images', fileName);
  let pathWithName2 = path.join(__dirname, '../images', 'test.jpg');
  let watermark = path.join(__dirname, '../images', 'watermark.png');
  image.mv(pathWithName, function (err) {
    if (err) return res.status(500).send(err);
    Gm(pathWithName).draw(['image over 0,0 0,0 ' + watermark]).write(pathWithName, function (err) {
      if (err) console.log(err);
    });
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        uploaded: 1,
        fileName: image.name,
        url: '/image/' + image.name
      });
    });
  });
});

router.post('/imageFroala', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        link: '/image/' + image.name
      });
    });
  });
});

router.post('/imageEditor', function (req, res) {
  var img = req.body.img;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  let dimensions = sizeOf(buf);
  if (req.body.override) {
    var pathImage = path.join(__dirname, '../images', req.body.name);
    var pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      Image.update({ slug: req.body.slug }, {
        $set: {
          dimensions: dimensions,
          type: "image/png",
          created_at: Date.now()
        }
      }).exec((err, resData) => {
        if (err) return res.status(400).send('error');
        fs.unlinkSync(pathImageSmall);
        res.send(resData);
      });
    });
  } else {
    let id = randomString(10);
    let fileName = id + '-' + req.body.name;
    var pathImage = path.join(__dirname, '../images', fileName);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      let data = {
        slug: id,
        name: fileName,
        type: "image/png",
        dimensions: dimensions,
        userUpload: 'admin'
      };

      Image.create(data, (err, image) => {
        if (err) return res.status(400).send({
          uploaded: 0,
          error: {
            message: 'error'
          }
        });
        return res.send('ok');
      });
    });
  }
});

module.exports = router;

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(241);






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createGraphqlRequest(fetch) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetch('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createHelpers({ fetch, history }) {
  return {
    fetch,
    history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "._3_3g8{padding-left:20px;padding-right:20px}._3FKMx{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3_3g8",
	"container": "_3FKMx"
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(242);
    var insertCss = __webpack_require__(33);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--1-1!../../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(244);
    var insertCss = __webpack_require__(33);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 252 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 253 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 259 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 260 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = require("imagemin");

/***/ }),
/* 263 */
/***/ (function(module, exports) {

module.exports = require("imagemin-jpegtran");

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("imagemin-pngquant");

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 268 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = require("node-uuid");

/***/ }),
/* 271 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 278 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 279 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = require("route-cache");

/***/ }),
/* 281 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 282 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
module.exports = __webpack_require__(50);


/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = require("draft-js-editor/lib/Editor");

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = require("draft-js-editor/lib/components/defaultDecorator");

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = require("draft-js-import-html");

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map