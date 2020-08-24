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
    console.log(user, '888888888888888888888');
    setOpen(false);
    props.handleSubmit(user); // }
  };

  var handleChange = function handleChange(value, label) {
    var userData = _objectSpread({}, user);

    userData[label] = value;
    console.log(userData, '00000000000000000000');
    setUser(userData);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Subscribe"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 52,
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
      lineNumber: 61,
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
      lineNumber: 70,
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
      lineNumber: 79,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleSubmit,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21Nb2RhbC50c3giXSwibmFtZXMiOlsiQ3VzdG9tTW9kYWwiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImVtYWlsIiwic2V0ZW1haWwiLCJ1c2VyIiwic2V0VXNlciIsImhhbmRsZUNsb3NlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwibGFiZWwiLCJ1c2VyRGF0YSIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlDO0FBQUE7O0FBQUEsd0JBQ3BCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURvQjtBQUFBO0FBQUEsTUFDckNDLElBRHFDO0FBQUEsTUFDL0JDLE9BRCtCOztBQUFBLHlCQUVsQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGa0I7QUFBQTtBQUFBLE1BRXJDRyxLQUZxQztBQUFBLE1BRTlCQyxRQUY4Qjs7QUFBQSx5QkFHcEJMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSG9CO0FBQUE7QUFBQSxNQUdyQ0ssSUFIcUM7QUFBQSxNQUcvQkMsT0FIK0I7O0FBSTVDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUosU0FBSyxDQUFDUyxXQUFOLENBQWtCLEtBQWxCO0FBQ0gsR0FIRDs7QUFLQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pOLFdBQU8sQ0FBQ0osS0FBSyxDQUFDRyxJQUFQLENBQVA7QUFDSCxHQUZRLEVBRU4sQ0FBQ0gsS0FBSyxDQUFDRyxJQUFQLENBRk0sQ0FBVDs7QUFJ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QTtBQUFBO0FBQUE7QUFBQSxJQS9CSixDQUZKLEVBMkNJLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUVOLFdBQWpCO0FBQThCLFNBQUssRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFJSSxNQUFDLGdFQUFEO0FBQVEsV0FBTyxFQUFFRSxZQUFqQjtBQUErQixTQUFLLEVBQUMsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixDQTNDSixDQURKLENBREo7QUF3REg7O0dBcEZ1QlosVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9kZXRhaWwvW2lkXS40MDRkMDY4OGMzMTJkOTI3N2I0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBjb3Vwb246IHN0cmluZztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21Nb2RhbChwcm9wczogYW55KSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldGVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKHt9IGFzIElWYWx1ZXMpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4ocHJvcHMub3BlbilcclxuICAgIH0sIFtwcm9wcy5vcGVuXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKGVtYWlsLm1hdGNoKC9eW2EtejAtOS5fJSstXStAW2EtejAtOS4tXStcXC5bYS16XXsyLCA0fSQvKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIsICc4ODg4ODg4ODg4ODg4ODg4ODg4ODgnKTtcclxuXHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgcHJvcHMuaGFuZGxlU3VibWl0KHVzZXIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGE6IGFueSA9IHsgLi4udXNlciB9O1xyXG4gICAgICAgIHVzZXJEYXRhW2xhYmVsXSA9IHZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhLCAnMDAwMDAwMDAwMDAwMDAwMDAwMDAnKTtcclxuXHJcbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlN1YnNjcmliZTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIHN1YnNjcmliZSB0byB0aGlzIHdlYnNpdGUsIHBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgaGVyZS5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgJ25hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnYWRkcmVzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvdXBvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnBvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnY291cG9uJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==