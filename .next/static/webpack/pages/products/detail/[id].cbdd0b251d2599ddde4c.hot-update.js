webpackHotUpdate_N_E("pages/products/detail/[id]",{

/***/ "./components/CustomModal.tsx":
/*!************************************!*\
  !*** ./components/CustomModal.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomModal; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");



var _jsxFileName = "D:\\React\\next-struc\\components\\CustomModal.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function CustomModal(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      email = _React$useState4[0],
      setemail = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      user = _React$useState6[0],
      setUser = _React$useState6[1];

  var handleClose = function handleClose() {
    setOpen(false);
    props.handleClose(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setOpen(props.open);
  }, [props.open]);

  var handleSubmit = function handleSubmit() {
    // if (email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/)) {
    setOpen(false);
    props.handleSubmit(user); // }
  };

  var handleChange = function handleChange(value, label) {
    var userData = _objectSpread({}, user);

    userData[label] = value;
    setUser(userData);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Subscribe"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "To subscribe to this website, please enter your email address here."), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Name",
    type: "text",
    fullWidth: true,
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'name');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "email",
    label: "Email Address",
    type: "email",
    fullWidth: true,
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'email');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "address",
    label: "Address",
    type: "text",
    fullWidth: true,
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'address');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    autoFocus: true,
    margin: "dense",
    id: "coupon",
    label: "Counpon",
    type: "text",
    fullWidth: true,
    onChange: function onChange(e) {
      return handleChange(e.target.value, 'coupon');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleSubmit,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Subscribe"))));
}

_s(CustomModal, "xvlqh2/9qo3yOqlVxr8VLmk2HbM=");

_c = CustomModal;

var _c;

$RefreshReg$(_c, "CustomModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/products/detail/[id].tsx":
/*!****************************************!*\
  !*** ./pages/products/detail/[id].tsx ***!
  \****************************************/
/*! exports provided: __N_SSP, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/OfflineBolt */ "./node_modules/@material-ui/icons/OfflineBolt.js");
/* harmony import */ var _material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CustomModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/CustomModal */ "./components/CustomModal.tsx");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/amp */ "./node_modules/next/amp.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
    _jsxFileName = "D:\\React\\next-struc\\pages\\products\\detail\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    root: {
      display: "block",
      textTransform: 'uppercase'
    },
    card: {
      maxWidth: 400,
      margin: "auto",
      // height: '120px',
      transition: "0.3s",
      // backgroundColor: "#792141",
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    content: {
      textAlign: "left",
      // padding: 20,
      fontSize: '15px',
      fontWeight: 600 // textTransform: 'uppercase'

    },
    rootContainer: {
      display: "inline-flex",
      width: "100%",
      padding: "17px 40px 17px 22px",
      marginBottom: 10,
      height: 400
    },
    cardpadding: {
      padding: '0 30px 0 0',
      '&:last-child': {
        padding: '0 30px 0 0'
      }
    },
    media: {
      height: 250,
      width: 300,
      // paddingTop: '56.25%', // 16:9,
      backgroundSize: 'cover'
    },
    button: {
      margin: '8px'
    }
  };
});
var __N_SSP = true;
var config = {
  amp: 'hybrid'
};

var Detail = function Detail(data) {
  _s();

  var classes = useStyles();
  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_6__["useAmp"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var user = sessionStorage.getItem('user');
  var session = sessionStorage.getItem('cart');
  var cart = session !== null ? JSON.parse(session) : [];

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var openModal = function openModal(val) {
    if (!user) setOpen(val);else handleSubmit(user);
  };

  var handleSubmit = function handleSubmit(user) {
    if (user) {
      if (cart.length) {
        if (cart.find(function (item) {
          return item._id === data._id;
        })) {
          cart.forEach(function (element, i) {
            if (element._id === data._id) {
              cart[i]['qty'] = Number(element.qty) + 1;
            }
          });
          console.log(cart);
          sessionStorage.setItem('cart', JSON.stringify(cart));
        } else {
          var newAdd = JSON.parse(JSON.stringify(data));
          newAdd['qty'] = 1;
          cart.push(newAdd);
          sessionStorage.setItem('cart', JSON.stringify(cart));
        }
      }
    } else {
      setOpen(false);
      sessionStorage.setItem('user', user);

      var _cart = JSON.parse(JSON.stringify([data]));

      _cart[0]['qty'] = 1;
      sessionStorage.setItem('cart', JSON.stringify(_cart));
    }
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Detail",
    center: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    container: true,
    direction: "row",
    justify: "space-between",
    className: classes.rootContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, isAmp ? __jsx("amp-img", {
    "class": "card-img-top",
    src: item.image,
    alt: "Card image cap",
    width: "250px",
    height: "250px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 30
    }
  }) : __jsx("img", {
    src: data.image,
    alt: "src",
    style: {
      maxHeight: 400
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 136
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    orientation: "vertical",
    flexItem: true,
    style: {
      height: '100%',
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    style: {
      textTransform: 'uppercase'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }, data.category), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, data.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, "$", data.price)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  }, data.description)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    startIcon: __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 40
      }
    }),
    onClick: function onClick() {
      return openModal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, " Add to Cart"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    startIcon: __jsx(_material_ui_icons_OfflineBolt__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 40
      }
    }),
    onClick: function onClick() {
      return openModal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, "Buy Now")))), open ? __jsx(_components_CustomModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    handleSubmit: handleSubmit,
    handleClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }) : '');
};

_s(Detail, "OXkrR5WMJ+2TLiyJuxSboXwJTGw=", false, function () {
  return [useStyles, next_amp__WEBPACK_IMPORTED_MODULE_6__["useAmp"]];
});

_c = Detail;
/* harmony default export */ __webpack_exports__["default"] = (Detail);

var _c;

$RefreshReg$(_c, "Detail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21Nb2RhbC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL2RldGFpbC8udHN4Il0sIm5hbWVzIjpbIkN1c3RvbU1vZGFsIiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJlbWFpbCIsInNldGVtYWlsIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVDbG9zZSIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwibGFiZWwiLCJ1c2VyRGF0YSIsImUiLCJ0YXJnZXQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJ0ZXh0VHJhbnNmb3JtIiwiY2FyZCIsIm1heFdpZHRoIiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJyb290Q29udGFpbmVyIiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiY2FyZHBhZGRpbmciLCJtZWRpYSIsImJhY2tncm91bmRTaXplIiwiYnV0dG9uIiwiY29uZmlnIiwiYW1wIiwiRGV0YWlsIiwiZGF0YSIsImNsYXNzZXMiLCJpc0FtcCIsInVzZUFtcCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb24iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwib3Blbk1vZGFsIiwidmFsIiwibGVuZ3RoIiwiZmluZCIsIml0ZW0iLCJfaWQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJOdW1iZXIiLCJxdHkiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm5ld0FkZCIsInB1c2giLCJpbWFnZSIsIm1heEhlaWdodCIsImNhdGVnb3J5IiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1h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QjtBQUlJLGFBQVMsRUFBRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKZjtBQUtJLFdBQU8sRUFBRTtBQUFBLGFBQU1jLFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFRSSxNQUFDLHdEQUFEO0FBQ0ksV0FBTyxFQUFDLFdBRFo7QUFFSSxTQUFLLEVBQUMsV0FGVjtBQUdJLGFBQVMsRUFBRVQsT0FBTyxDQUFDTCxNQUh2QjtBQUlJLGFBQVMsRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKZjtBQUtJLFdBQU8sRUFBRTtBQUFBLGFBQU1jLFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixDQW5CSixDQVJKLENBREosRUErQ1FuRCxJQUFJLEdBQ0EsTUFBQywrREFBRDtBQUNJLFFBQUksRUFBRUEsSUFEVjtBQUVJLGdCQUFZLEVBQUVRLFlBRmxCO0FBR0ksZUFBVyxFQUFFRixXQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsR0FNRSxFQXJEZCxDQURKO0FBMkRILENBdEdEOztHQUFNa0MsTTtVQUNjekIsUyxFQUNGNkIsK0M7OztLQUZaSixNO0FBdUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9kZXRhaWwvW2lkXS5jYmRkMGIyNTFkMjU5OWRkZGU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBjb3Vwb246IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21Nb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHt9IGFzIElWYWx1ZXMpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4ocHJvcHMub3BlbilcclxuICAgIH0sIFtwcm9wcy5vcGVuXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKGVtYWlsLm1hdGNoKC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLCA0fSQvKSkge1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgIHByb3BzLmhhbmRsZVN1Ym1pdCh1c2VyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhOiBhbnkgPSB7IC4uLnVzZXIgfTtcclxuICAgICAgICB1c2VyRGF0YVtsYWJlbF0gPSB2YWx1ZTtcclxuICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+U3Vic2NyaWJlPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gc3Vic2NyaWJlIHRvIHRoaXMgd2Vic2l0ZSwgcGxlYXNlIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyBoZXJlLlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnbmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsICdhZGRyZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291cG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VucG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZS50YXJnZXQudmFsdWUsICdjb3Vwb24nKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBEaXZpZGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSBcIi4uLy4uLy4uL21pZGRsZXdhcmVzL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL21vZHVsZS9Qcm9kdWN0L3Byb2R1Y3RcIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCc7XHJcbmltcG9ydCBPZmZsaW5lQm9sdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0JztcclxuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0N1c3RvbU1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFtcCB9IGZyb20gJ25leHQvYW1wJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTIwcHgnLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxyXG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCIjNzkyMTQxXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgMTZweCA3MHB4IC0xMi4xMjVweCByZ2JhKDAsMCwwLDAuMylcIixcclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxNnB4IDcwcHggLTEyLjEyNXB4IHJnYmEoMCwwLDAsMC4zKVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIC8vIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXHJcbiAgICB9LFxyXG4gICAgcm9vdENvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxN3B4IDQwcHggMTdweCAyMnB4XCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICBoZWlnaHQ6IDQwMFxyXG4gICAgfSxcclxuICAgIGNhcmRwYWRkaW5nOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzAgMzBweCAwIDAnLFxyXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHggMCAwJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5LFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogJ2h5YnJpZCcgfTtcclxuZGVjbGFyZSBuYW1lc3BhY2UgSlNYIHtcclxuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XHJcbiAgICAgICAgJ2FtcC1pbWcnOiBhbnk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgRGV0YWlsID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaXNBbXAgPSB1c2VBbXAoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB1c2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGNvbnN0IGNhcnQ6IGFueSA9IHNlc3Npb24gIT09IG51bGwgPyBKU09OLnBhcnNlKHNlc3Npb24pIDogW107XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAodmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyKVxyXG4gICAgICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQodXNlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgaWYgKGNhcnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydC5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uX2lkID09PSBkYXRhLl9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0LmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ll9pZCA9PT0gZGF0YS5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRbaV1bJ3F0eSddID0gTnVtYmVyKGVsZW1lbnQucXR5KSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWRkOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdBZGRbJ3F0eSddID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0LnB1c2gobmV3QWRkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdXNlcik7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0OiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFtkYXRhXSkpO1xyXG4gICAgICAgICAgICBjYXJ0WzBdWydxdHknXSA9IDE7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiRGV0YWlsXCIgY2VudGVyPXt0cnVlfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fSA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gPGFtcC1pbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpdGVtLmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIyNTBweFwiIC8+IDogPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGFsdD1cInNyY1wiIHN0eWxlPXt7IG1heEhlaWdodDogNDAwIH19IC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBmbGV4SXRlbSBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0YS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTaG9wcGluZ0NhcnRJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IEFkZCB0byBDYXJ0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PE9mZmxpbmVCb2x0SWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkJ1eSBOb3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVxID0gY3R4Py5yZXEgYXMgTmV4dEFwaVJlcXVlc3Q7XHJcbiAgICBjb25zdCByZXMgPSBjdHg/LnJlcyBhcyBOZXh0QXBpUmVzcG9uc2U7XHJcbiAgICBhd2FpdCBtaWRkbGV3YXJlLmFwcGx5KHJlcSwgcmVzKTtcclxuICAgIGNvbnN0IHZhbHVlID0gY3R4Py5xdWVyeT8uaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhjdHgucXVlcnkpO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gdmFsdWUgPyB7IF9pZDogdmFsdWUgfSA6IHt9O1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZE9uZShxdWVyeSk7XHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9kdWN0KSkgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==