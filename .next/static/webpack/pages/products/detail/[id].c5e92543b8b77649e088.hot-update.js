webpackHotUpdate_N_E("pages/products/detail/[id]",{

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
      console.log(user, '</a>');
      setOpen(false);
      sessionStorage.setItem('user', JSON.stringify(user));

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
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 114,
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
      lineNumber: 114,
      columnNumber: 136
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 25
    }
  }, data.category), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, data.title)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "$", data.price)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, data.description)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
        lineNumber: 144,
        columnNumber: 40
      }
    }),
    onClick: function onClick() {
      return openModal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
        lineNumber: 151,
        columnNumber: 40
      }
    }),
    onClick: function onClick() {
      return openModal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, "Buy Now")))), open ? __jsx(_components_CustomModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    handleSubmit: handleSubmit,
    handleClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvZGV0YWlsLy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwidGV4dFRyYW5zZm9ybSIsImNhcmQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb250ZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwicm9vdENvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImNhcmRwYWRkaW5nIiwibWVkaWEiLCJiYWNrZ3JvdW5kU2l6ZSIsImJ1dHRvbiIsImNvbmZpZyIsImFtcCIsIkRldGFpbCIsImRhdGEiLCJjbGFzc2VzIiwiaXNBbXAiLCJ1c2VBbXAiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb24iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2xvc2UiLCJvcGVuTW9kYWwiLCJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJsZW5ndGgiLCJmaW5kIiwiaXRlbSIsIl9pZCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsIk51bWJlciIsInF0eSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibmV3QWRkIiwicHVzaCIsImltYWdlIiwibWF4SGVpZ2h0IiwiY2F0ZWdvcnkiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQUEsU0FBTztBQUNoQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxPQURQO0FBRUZDLG1CQUFhLEVBQUU7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LFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFRSSxNQUFDLHdEQUFEO0FBQ0ksV0FBTyxFQUFDLFdBRFo7QUFFSSxTQUFLLEVBQUMsV0FGVjtBQUdJLGFBQVMsRUFBRWQsT0FBTyxDQUFDTCxNQUh2QjtBQUlJLGFBQVMsRUFBRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKZjtBQUtJLFdBQU8sRUFBRTtBQUFBLGFBQU1tQixTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkosQ0FuQkosQ0FSSixDQURKLEVBK0NRVixJQUFJLEdBQ0EsTUFBQywrREFBRDtBQUNJLFFBQUksRUFBRUEsSUFEVjtBQUVJLGdCQUFZLEVBQUVZLFlBRmxCO0FBR0ksZUFBVyxFQUFFSCxXQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsR0FNRSxFQXJEZCxDQURKO0FBMkRILENBeEdEOztHQUFNZixNO1VBQ2N6QixTLEVBQ0Y2QiwrQzs7O0tBRlpKLE07QUF5R1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2RldGFpbC9baWRdLmM1ZTkyNTQzYjhiNzc2NDllMDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBEaXZpZGVyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSBcIi4uLy4uLy4uL21pZGRsZXdhcmVzL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uLy4uL21vZHVsZS9Qcm9kdWN0L3Byb2R1Y3RcIjtcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCc7XHJcbmltcG9ydCBPZmZsaW5lQm9sdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09mZmxpbmVCb2x0JztcclxuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0N1c3RvbU1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFtcCB9IGZyb20gJ25leHQvYW1wJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xyXG4gICAgfSxcclxuICAgIGNhcmQ6IHtcclxuICAgICAgICBtYXhXaWR0aDogNDAwLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAnMTIwcHgnLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxyXG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogXCIjNzkyMTQxXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIjAgMTZweCA3MHB4IC0xMi4xMjVweCByZ2JhKDAsMCwwLDAuMylcIixcclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxNnB4IDcwcHggLTEyLjEyNXB4IHJnYmEoMCwwLDAsMC4zKVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6IDIwLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIC8vIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXHJcbiAgICB9LFxyXG4gICAgcm9vdENvbnRhaW5lcjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxN3B4IDQwcHggMTdweCAyMnB4XCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgICBoZWlnaHQ6IDQwMFxyXG4gICAgfSxcclxuICAgIGNhcmRwYWRkaW5nOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzAgMzBweCAwIDAnLFxyXG4gICAgICAgICcmOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHggMCAwJyxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5LFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luOiAnOHB4JyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogJ2h5YnJpZCcgfTtcclxuZGVjbGFyZSBuYW1lc3BhY2UgSlNYIHtcclxuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XHJcbiAgICAgICAgJ2FtcC1pbWcnOiBhbnk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgRGV0YWlsID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaXNBbXAgPSB1c2VBbXAoKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCB1c2VyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGNvbnN0IGNhcnQ6IGFueSA9IHNlc3Npb24gIT09IG51bGwgPyBKU09OLnBhcnNlKHNlc3Npb24pIDogW107XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAodmFsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyKVxyXG4gICAgICAgICAgICBzZXRPcGVuKHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQodXNlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgaWYgKGNhcnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydC5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uX2lkID09PSBkYXRhLl9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0LmZvckVhY2goKGVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ll9pZCA9PT0gZGF0YS5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcnRbaV1bJ3F0eSddID0gTnVtYmVyKGVsZW1lbnQucXR5KSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWRkOiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdBZGRbJ3F0eSddID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0LnB1c2gobmV3QWRkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIsICc8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgbGV0IGNhcnQ6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoW2RhdGFdKSk7XHJcbiAgICAgICAgICAgIGNhcnRbMF1bJ3F0eSddID0gMTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJEZXRhaWxcIiBjZW50ZXI9e3RydWV9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9ID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBbXAgPyA8YW1wLWltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjI1MHB4XCIgLz4gOiA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwic3JjXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiA0MDAgfX0gLz59XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNob3BwaW5nQ2FydEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gQWRkIHRvIENhcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8T2ZmbGluZUJvbHRJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+QnV5IE5vdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXEgPSBjdHg/LnJlcSBhcyBOZXh0QXBpUmVxdWVzdDtcclxuICAgIGNvbnN0IHJlcyA9IGN0eD8ucmVzIGFzIE5leHRBcGlSZXNwb25zZTtcclxuICAgIGF3YWl0IG1pZGRsZXdhcmUuYXBwbHkocmVxLCByZXMpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBjdHg/LnF1ZXJ5Py5pZDtcclxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeSk7XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB2YWx1ZSA/IHsgX2lkOiB2YWx1ZSB9IDoge307XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kT25lKHF1ZXJ5KTtcclxuICAgIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICAgIHJldHVybiB7IHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9