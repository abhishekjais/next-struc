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
    console.log(userData, '00000000000000000000');
    setUser(userData);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Subscribe"), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 50,
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
      lineNumber: 59,
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
      lineNumber: 68,
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
      lineNumber: 77,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleSubmit,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21Nb2RhbC50c3giXSwibmFtZXMiOlsiQ3VzdG9tTW9kYWwiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImVtYWlsIiwic2V0ZW1haWwiLCJ1c2VyIiwic2V0VXNlciIsImhhbmRsZUNsb3NlIiwidXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJsYWJlbCIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQWlDO0FBQUE7O0FBQUEsd0JBQ3BCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURvQjtBQUFBO0FBQUEsTUFDckNDLElBRHFDO0FBQUEsTUFDL0JDLE9BRCtCOztBQUFBLHlCQUVsQkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FGa0I7QUFBQTtBQUFBLE1BRXJDRyxLQUZxQztBQUFBLE1BRTlCQyxRQUY4Qjs7QUFBQSx5QkFHcEJMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSG9CO0FBQUE7QUFBQSxNQUdyQ0ssSUFIcUM7QUFBQSxNQUcvQkMsT0FIK0I7O0FBSTVDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUosU0FBSyxDQUFDUyxXQUFOLENBQWtCLEtBQWxCO0FBQ0gsR0FIRDs7QUFLQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pOLFdBQU8sQ0FBQ0osS0FBSyxDQUFDRyxJQUFQLENBQVA7QUFDSCxHQUZRLEVBRU4sQ0FBQ0gsS0FBSyxDQUFDRyxJQUFQLENBRk0sQ0FBVDs7QUFJ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnRUFBRDtBQUFRLFdBQU8sRUFBRUosV0FBakI7QUFBOEIsU0FBSyxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUlJLE1BQUMsZ0VBQUQ7QUFBUSxXQUFPLEVBQUVFLFlBQWpCO0FBQStCLFNBQUssRUFBQyxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLENBM0NKLENBREosQ0FESjtBQXdESDs7R0FsRnVCWixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2RldGFpbC9baWRdLmE3NTI2ZDIwNTM0MTFhZGQ0MzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZXMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIGNvdXBvbjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbU1vZGFsKHByb3BzOiBhbnkpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoe30gYXMgSVZhbHVlcyk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBwcm9wcy5oYW5kbGVDbG9zZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbihwcm9wcy5vcGVuKVxyXG4gICAgfSwgW3Byb3BzLm9wZW5dKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAoZW1haWwubWF0Y2goL15bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dK1xcLlthLXpdezIsIDR9JC8pKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgcHJvcHMuaGFuZGxlU3VibWl0KHVzZXIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGE6IGFueSA9IHsgLi4udXNlciB9O1xyXG4gICAgICAgIHVzZXJEYXRhW2xhYmVsXSA9IHZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhLCAnMDAwMDAwMDAwMDAwMDAwMDAwMDAnKTtcclxuXHJcbiAgICAgICAgc2V0VXNlcih1c2VyRGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlN1YnNjcmliZTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIHN1YnNjcmliZSB0byB0aGlzIHdlYnNpdGUsIHBsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MgaGVyZS5cclxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgJ25hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLnRhcmdldC52YWx1ZSwgJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnYWRkcmVzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvdXBvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnBvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlLCAnY291cG9uJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3Vic2NyaWJlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==