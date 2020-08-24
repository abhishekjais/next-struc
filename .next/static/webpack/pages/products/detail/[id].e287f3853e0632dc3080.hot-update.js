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

  var handleSubmit = function handleSubmit(userdata) {
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
      console.log(userdata, '</a>');
      setOpen(false);
      sessionStorage.setItem('user', JSON.stringify(userdata));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvZGV0YWlsLy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwidGV4dFRyYW5zZm9ybSIsImNhcmQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb250ZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwicm9vdENvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImNhcmRwYWRkaW5nIiwibWVkaWEiLCJiYWNrZ3JvdW5kU2l6ZSIsImJ1dHRvbiIsImNvbmZpZyIsImFtcCIsIkRldGFpbCIsImRhdGEiLCJjbGFzc2VzIiwiaXNBbXAiLCJ1c2VBbXAiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb24iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2xvc2UiLCJvcGVuTW9kYWwiLCJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJ1c2VyZGF0YSIsImxlbmd0aCIsImZpbmQiLCJpdGVtIiwiX2lkIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpIiwiTnVtYmVyIiwicXR5IiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJuZXdBZGQiLCJwdXNoIiwiaW1hZ2UiLCJtYXhIZWlnaHQiLCJjYXRlZ29yeSIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFBQSxTQUFPO0FBQ2hDQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFLE9BRFA7QUFFRkMs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QUFBLGFBQU1tQixTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBUUksTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFBQyxXQURaO0FBRUksU0FBSyxFQUFDLFdBRlY7QUFHSSxhQUFTLEVBQUVkLE9BQU8sQ0FBQ0wsTUFIdkI7QUFJSSxhQUFTLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmY7QUFLSSxXQUFPLEVBQUU7QUFBQSxhQUFNbUIsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLENBbkJKLENBUkosQ0FESixFQStDUVYsSUFBSSxHQUNBLE1BQUMsK0RBQUQ7QUFDSSxRQUFJLEVBQUVBLElBRFY7QUFFSSxnQkFBWSxFQUFFWSxZQUZsQjtBQUdJLGVBQVcsRUFBRUgsV0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEdBTUUsRUFyRGQsQ0FESjtBQTJESCxDQXhHRDs7R0FBTWYsTTtVQUNjekIsUyxFQUNGNkIsK0M7OztLQUZaSixNO0FBeUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9kZXRhaWwvW2lkXS5lMjg3ZjM4NTNlMDYzMmRjMzA4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgRGl2aWRlciwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi9tb2R1bGUvUHJvZHVjdC9wcm9kdWN0XCI7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnO1xyXG5pbXBvcnQgT2ZmbGluZUJvbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdCc7XHJcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DdXN0b21Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIC8vIGhlaWdodDogJzEyMHB4JyxcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc5MjE0MVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDE2cHggNzBweCAtMTIuMTI1cHggcmdiYSgwLDAsMCwwLjMpXCIsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMTZweCA3MHB4IC0xMi4xMjVweCByZ2JhKDAsMCwwLDAuMylcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAvLyBwYWRkaW5nOiAyMCxcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAvLyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xyXG4gICAgfSxcclxuICAgIHJvb3RDb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTdweCA0MHB4IDE3cHggMjJweFwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgIH0sXHJcbiAgICBjYXJkcGFkZGluZzoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcwIDMwcHggMCAwJyxcclxuICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMCAzMHB4IDAgMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAvLyBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OSxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICdoeWJyaWQnIH07XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgICdhbXAtaW1nJzogYW55O1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IERldGFpbCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlzQW1wID0gdXNlQW1wKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICBjb25zdCBjYXJ0OiBhbnkgPSBzZXNzaW9uICE9PSBudWxsID8gSlNPTi5wYXJzZShzZXNzaW9uKSA6IFtdO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKHZhbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmICghdXNlcilcclxuICAgICAgICAgICAgc2V0T3Blbih2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0KHVzZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHVzZXJkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBpZiAoY2FydC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJ0LmZpbmQoKGl0ZW06IGFueSkgPT4gaXRlbS5faWQgPT09IGRhdGEuX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnQuZm9yRWFjaCgoZWxlbWVudDogYW55LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuX2lkID09PSBkYXRhLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FydFtpXVsncXR5J10gPSBOdW1iZXIoZWxlbWVudC5xdHkpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdBZGQ6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FkZFsncXR5J10gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnQucHVzaChuZXdBZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcmRhdGEsICc8L2E+Jyk7XHJcblxyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJkYXRhKSk7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0OiBhbnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFtkYXRhXSkpO1xyXG4gICAgICAgICAgICBjYXJ0WzBdWydxdHknXSA9IDE7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiRGV0YWlsXCIgY2VudGVyPXt0cnVlfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fSA+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gPGFtcC1pbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpdGVtLmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIyNTBweFwiIC8+IDogPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGFsdD1cInNyY1wiIHN0eWxlPXt7IG1heEhlaWdodDogNDAwIH19IC8+fVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBmbGV4SXRlbSBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ZGF0YS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxTaG9wcGluZ0NhcnRJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IEFkZCB0byBDYXJ0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PE9mZmxpbmVCb2x0SWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPkJ1eSBOb3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb3BlbiA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbU1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgcmVxID0gY3R4Py5yZXEgYXMgTmV4dEFwaVJlcXVlc3Q7XHJcbiAgICBjb25zdCByZXMgPSBjdHg/LnJlcyBhcyBOZXh0QXBpUmVzcG9uc2U7XHJcbiAgICBhd2FpdCBtaWRkbGV3YXJlLmFwcGx5KHJlcSwgcmVzKTtcclxuICAgIGNvbnN0IHZhbHVlID0gY3R4Py5xdWVyeT8uaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhjdHgucXVlcnkpO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gdmFsdWUgPyB7IF9pZDogdmFsdWUgfSA6IHt9O1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZE9uZShxdWVyeSk7XHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwcm9kdWN0KSkgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==