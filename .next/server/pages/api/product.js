module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middlewares/database.js":
/*!*********************************!*\
  !*** ./middlewares/database.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {
  isConnected:  false || 0
};

const database = async (req, res, next) => {
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set("debug", true);
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) return next();
  await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://ecomtest:qwer@1234@cluster0.dtlxe.mongodb.net/ecom?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }); // connection.isConnected = db.connections[0].readyState;
  // console.log(connection.isConnected, '-------isConnected----',);
  // req.db = process.env.DB_NAME;
  // req.dbClient = db;

  return next();
};

/* harmony default export */ __webpack_exports__["default"] = (database);

/***/ }),

/***/ "./middlewares/middleware.js":
/*!***********************************!*\
  !*** ./middlewares/middleware.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./middlewares/database.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session */ "./middlewares/session.js");



const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
middleware.use(_database__WEBPACK_IMPORTED_MODULE_1__["default"]); // .use(session);

/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./middlewares/session.js":
/*!********************************!*\
  !*** ./middlewares/session.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-session */ "next-session");
/* harmony import */ var next_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connect-mongo */ "connect-mongo");
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



const MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_1___default()({
  Store: next_session__WEBPACK_IMPORTED_MODULE_0__["Store"],
  MemoryStore: next_session__WEBPACK_IMPORTED_MODULE_0__["MemoryStore"]
});
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    // see how we use req.dbClient from the previous step
    stringify: false,
    mongooseConnection: mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection
  });
  return Object(next_session__WEBPACK_IMPORTED_MODULE_0__["session"])({
    store: Object(next_session__WEBPACK_IMPORTED_MODULE_0__["promisifyStore"])(mongoStore)
  })(req, res, next);
});

/***/ }),

/***/ "./module/Product/product.js":
/*!***********************************!*\
  !*** ./module/Product/product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// const mongoose = ('mongoose');

const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  title: {
    type: String
  },
  category: {
    type: String
  },
  image: String,
  price: Number,
  description: String,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.updated;
  return obj;
}; //Export user module


/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Product || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('Product', ProductSchema));

/***/ }),

/***/ "./pages/api/product.js":
/*!******************************!*\
  !*** ./pages/api/product.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/middleware */ "./middlewares/middleware.js");
/* harmony import */ var _module_Product_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/Product/product */ "./module/Product/product.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middlewares_middleware__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(async (req, res) => {
  try {
    const {
      value
    } = req.query;
    const query = value ? {
      name: value
    } : {};
    const product = await _module_Product_product__WEBPACK_IMPORTED_MODULE_2__["default"].find(query);
    res.status(200).send([...product]);
  } catch (error) {
    console.log(error, 'error');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "next-session":
/*!*******************************!*\
  !*** external "next-session" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-session");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZXMvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZXMvbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlcy9zZXNzaW9uLmpzIiwid2VicGFjazovLy8uL21vZHVsZS9Qcm9kdWN0L3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdC1tb25nb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZXNzaW9uXCIiXSwibmFtZXMiOlsiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwibW9uZ29vc2UiLCJzZXQiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJ1c2UiLCJNb25nb1N0b3JlIiwiY29ubmVjdE1vbmdvIiwiU3RvcmUiLCJNZW1vcnlTdG9yZSIsIm1vbmdvU3RvcmUiLCJjbGllbnQiLCJkYkNsaWVudCIsInN0cmluZ2lmeSIsIm1vbmdvb3NlQ29ubmVjdGlvbiIsInNlc3Npb24iLCJzdG9yZSIsInByb21pc2lmeVN0b3JlIiwiUHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsImNhdGVnb3J5IiwiaW1hZ2UiLCJwcmljZSIsIk51bWJlciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwidXBkYXRlZCIsIm1ldGhvZHMiLCJ0b0pTT04iLCJvYmoiLCJ0b09iamVjdCIsIm1vZGVscyIsIlByb2R1Y3QiLCJtb2RlbCIsImhhbmRsZXIiLCJnZXQiLCJ2YWx1ZSIsInF1ZXJ5IiwibmFtZSIsInByb2R1Y3QiLCJmaW5kIiwic3RhdHVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLFVBQVUsR0FBRztBQUNmQyxhQUFXLEVBQUUsTUFBSyxJQUFJO0FBRFAsQ0FBbkI7O0FBR0EsTUFBTUMsUUFBUSxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDdkNDLGlEQUFRLENBQUNDLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLElB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RUFBRUY7QUFBUixLQUFILEdBQXFCLEVBQXhDO0FBQ0EsVUFBTUcsT0FBTyxHQUFHLE1BQU1QLCtEQUFPLENBQUNRLElBQVIsQ0FBYUgsS0FBYixDQUF0QjtBQUNBbkQsT0FBRyxDQUFDdUQsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLENBQUMsR0FBR0gsT0FBSixDQUFyQjtBQUNILEdBTEQsQ0FLRSxPQUFPSSxLQUFQLEVBQWM7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosRUFBbUIsT0FBbkI7QUFDSDtBQUNKLENBVEQ7QUFXZVQsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsMEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvYXBpL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wcm9kdWN0LmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuY29uc3QgY29ubmVjdGlvbiA9IHtcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UgfHwgMFxufVxuY29uc3QgZGF0YWJhc2UgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBtb25nb29zZS5zZXQoXCJkZWJ1Z1wiLCB0cnVlKTtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIG5leHQoKTtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkLCAnLS0tLS0tLWlzQ29ubmVjdGVkLS0tLScsKTtcbiAgICAvLyByZXEuZGIgPSBwcm9jZXNzLmVudi5EQl9OQU1FO1xuICAgIC8vIHJlcS5kYkNsaWVudCA9IGRiO1xuICAgIHJldHVybiBuZXh0KCk7XG59XG5leHBvcnQgZGVmYXVsdCBkYXRhYmFzZTsiLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcbmltcG9ydCBkYXRhYmFzZSBmcm9tICcuL2RhdGFiYXNlJztcbmltcG9ydCBzZXNzaW9uIGZyb20gJy4vc2Vzc2lvbic7XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xubWlkZGxld2FyZVxuICAgIC51c2UoZGF0YWJhc2UpO1xuLy8gLnVzZShzZXNzaW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZTsiLCJpbXBvcnQge1xuICAgIHNlc3Npb24sIHByb21pc2lmeVN0b3JlLCBTdG9yZSwgTWVtb3J5U3RvcmUsXG59IGZyb20gJ25leHQtc2Vzc2lvbic7XG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJ2Nvbm5lY3QtbW9uZ28nO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuY29uc3QgTW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyh7IFN0b3JlLCBNZW1vcnlTdG9yZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc3QgbW9uZ29TdG9yZSA9IG5ldyBNb25nb1N0b3JlKHtcbiAgICAgICAgY2xpZW50OiByZXEuZGJDbGllbnQsIC8vIHNlZSBob3cgd2UgdXNlIHJlcS5kYkNsaWVudCBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHN0cmluZ2lmeTogZmFsc2UsXG4gICAgICAgIG1vbmdvb3NlQ29ubmVjdGlvbjogbW9uZ29vc2UuY29ubmVjdGlvblxuICAgIH0pO1xuICAgIHJldHVybiBzZXNzaW9uKHtcbiAgICAgICAgc3RvcmU6IHByb21pc2lmeVN0b3JlKG1vbmdvU3RvcmUpLFxuICAgIH0pKHJlcSwgcmVzLCBuZXh0KTtcbn0iLCIvLyBjb25zdCBtb25nb29zZSA9ICgnbW9uZ29vc2UnKTtcclxuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIlxyXG5cclxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGltYWdlOiBTdHJpbmcsXHJcbiAgICBwcmljZTogTnVtYmVyLFxyXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICAgIGNyZWF0ZWQ6IHtcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZDoge1xyXG4gICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3dcclxuICAgIH1cclxufSk7XHJcblxyXG5Qcm9kdWN0U2NoZW1hLm1ldGhvZHMudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG9iaiA9IHRoaXMudG9PYmplY3QoKTtcclxuICAgIGRlbGV0ZSBvYmoudXBkYXRlZDtcclxuICAgIHJldHVybiBvYmo7XHJcbn07XHJcblxyXG4vL0V4cG9ydCB1c2VyIG1vZHVsZVxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb2RlbCgnUHJvZHVjdCcsIFByb2R1Y3RTY2hlbWEpOyIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbWlkZGxld2FyZXMvbWlkZGxld2FyZSc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi9tb2R1bGUvUHJvZHVjdC9wcm9kdWN0JztcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xuaGFuZGxlci51c2UobWlkZGxld2FyZSk7XG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSByZXEucXVlcnk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdmFsdWUgPyB7IG5hbWU6IHZhbHVlIH0gOiB7fTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZChxdWVyeSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFsuLi5wcm9kdWN0XSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsICdlcnJvcicpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbW9uZ29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9