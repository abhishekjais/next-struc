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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvZGV0YWlsLy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwidGV4dFRyYW5zZm9ybSIsImNhcmQiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb250ZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwicm9vdENvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImNhcmRwYWRkaW5nIiwibWVkaWEiLCJiYWNrZ3JvdW5kU2l6ZSIsImJ1dHRvbiIsImNvbmZpZyIsImFtcCIsIkRldGFpbCIsImRhdGEiLCJjbGFzc2VzIiwiaXNBbXAiLCJ1c2VBbXAiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb24iLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQ2xvc2UiLCJvcGVuTW9kYWwiLCJ2YWwiLCJoYW5kbGVTdWJtaXQiLCJsZW5ndGgiLCJmaW5kIiwiaXRlbSIsIl9pZCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsIk51bWJlciIsInF0eSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibmV3QWRkIiwicHVzaCIsImltYWdlIiwibWF4SGVpZ2h0IiwiY2F0ZWdvcnkiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQUEsU0FBTztBQUNoQ0MsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxPQURQO0FBRUZDLG1CQUFhLEVBQUU7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QUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBUUksTUFBQyx3REFBRDtBQUNJLFdBQU8sRUFBQyxXQURaO0FBRUksU0FBSyxFQUFDLFdBRlY7QUFHSSxhQUFTLEVBQUVkLE9BQU8sQ0FBQ0wsTUFIdkI7QUFJSSxhQUFTLEVBQUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmY7QUFLSSxXQUFPLEVBQUU7QUFBQSxhQUFNbUIsU0FBUyxDQUFDLElBQUQsQ0FBZjtBQUFBLEtBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLENBbkJKLENBUkosQ0FESixFQStDUVYsSUFBSSxHQUNBLE1BQUMsK0RBQUQ7QUFDSSxRQUFJLEVBQUVBLElBRFY7QUFFSSxnQkFBWSxFQUFFWSxZQUZsQjtBQUdJLGVBQVcsRUFBRUgsV0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEdBTUUsRUFyRGQsQ0FESjtBQTJESCxDQXRHRDs7R0FBTWYsTTtVQUNjekIsUyxFQUNGNkIsK0M7OztLQUZaSixNO0FBdUdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9kZXRhaWwvW2lkXS4wMjA3Y2U5YmNiYThiOTk5MmM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgRGl2aWRlciwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcywgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlcy9taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi9tb2R1bGUvUHJvZHVjdC9wcm9kdWN0XCI7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnO1xyXG5pbXBvcnQgT2ZmbGluZUJvbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9PZmZsaW5lQm9sdCc7XHJcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DdXN0b21Nb2RhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgICAgbWF4V2lkdGg6IDQwMCxcclxuICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgIC8vIGhlaWdodDogJzEyMHB4JyxcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIjAuM3NcIixcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc5MjE0MVwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDE2cHggNzBweCAtMTIuMTI1cHggcmdiYSgwLDAsMCwwLjMpXCIsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMTZweCA3MHB4IC0xMi4xMjVweCByZ2JhKDAsMCwwLDAuMylcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAvLyBwYWRkaW5nOiAyMCxcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAvLyB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xyXG4gICAgfSxcclxuICAgIHJvb3RDb250YWluZXI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTdweCA0MHB4IDE3cHggMjJweFwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgIH0sXHJcbiAgICBjYXJkcGFkZGluZzoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcwIDMwcHggMCAwJyxcclxuICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMCAzMHB4IDAgMCcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTAsXHJcbiAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAvLyBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OSxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpbjogJzhweCcsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICdoeWJyaWQnIH07XHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgICdhbXAtaW1nJzogYW55O1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IERldGFpbCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGlzQW1wID0gdXNlQW1wKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgdXNlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICBjb25zdCBjYXJ0OiBhbnkgPSBzZXNzaW9uICE9PSBudWxsID8gSlNPTi5wYXJzZShzZXNzaW9uKSA6IFtdO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKHZhbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmICghdXNlcilcclxuICAgICAgICAgICAgc2V0T3Blbih2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0KHVzZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHVzZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXJ0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhcnQuZmluZCgoaXRlbTogYW55KSA9PiBpdGVtLl9pZCA9PT0gZGF0YS5faWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydC5mb3JFYWNoKChlbGVtZW50OiBhbnksIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJ0W2ldWydxdHknXSA9IE51bWJlcihlbGVtZW50LnF0eSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2FydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FkZDogYW55ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QWRkWydxdHknXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydC5wdXNoKG5ld0FkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgbGV0IGNhcnQ6IGFueSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoW2RhdGFdKSk7XHJcbiAgICAgICAgICAgIGNhcnRbMF1bJ3F0eSddID0gMTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJEZXRhaWxcIiBjZW50ZXI9e3RydWV9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9ID5cclxuICAgICAgICAgICAgICAgICAgICB7aXNBbXAgPyA8YW1wLWltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjI1MHB4XCIgLz4gOiA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwic3JjXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiA0MDAgfX0gLz59XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGZsZXhJdGVtIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMScgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PFNob3BwaW5nQ2FydEljb24gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gQWRkIHRvIENhcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8T2ZmbGluZUJvbHRJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+QnV5IE5vdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICBjb25zdCByZXEgPSBjdHg/LnJlcSBhcyBOZXh0QXBpUmVxdWVzdDtcclxuICAgIGNvbnN0IHJlcyA9IGN0eD8ucmVzIGFzIE5leHRBcGlSZXNwb25zZTtcclxuICAgIGF3YWl0IG1pZGRsZXdhcmUuYXBwbHkocmVxLCByZXMpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBjdHg/LnF1ZXJ5Py5pZDtcclxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeSk7XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB2YWx1ZSA/IHsgX2lkOiB2YWx1ZSB9IDoge307XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kT25lKHF1ZXJ5KTtcclxuICAgIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICAgIHJldHVybiB7IHByb3BzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9