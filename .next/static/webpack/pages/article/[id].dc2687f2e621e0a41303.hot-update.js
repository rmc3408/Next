webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\molin\\OneDrive\\Documents\\Next\\traversy\\pages\\article\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var unit = function unit(_ref) {
  _s();

  var user = _ref.user;
  //console.log(user.email);
  var rt = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: ["USER ", rt.query.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["name : ", user.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["email : ", user.email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["phone : ", user.phone]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};
/**
 * If wanna save during building path, save all articles using getStaticProps
 * and get all params ID using getStaticPaths
 * 
 */


_s(unit, "KT04S7lQEBR8J8rUrnLs+YWpq/o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

/**
 * Everytime enter in the user ID , fetch the user information
 */
// export const getServerSideProps = async (context) => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const user = await result.json();
//     return { props: { user }}
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (unit);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsidW5pdCIsInVzZXIiLCJydCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw2REFBUyxFQUFwQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSwwQkFBVUQsRUFBRSxDQUFDRSxLQUFILENBQVNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSw0QkFBV0osSUFBSSxDQUFDSyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUEsNkJBQVlMLElBQUksQ0FBQ00sS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFJSTtBQUFBLDZCQUFZTixJQUFJLENBQUNPLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FaRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQWpCTVIsSTtVQUVTRyxxRDs7O0FBbUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUWVILG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGUvW2lkXS5kYzI2ODdmMmU2MjFlMGE0MTMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB1bml0ID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHVzZXIuZW1haWwpO1xyXG4gICAgY29uc3QgcnQgPSB1c2VSb3V0ZXIoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+VVNFUiB7cnQucXVlcnkuaWR9PC9oMj5cclxuICAgICAgICAgICAgPHA+bmFtZSA6IHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5lbWFpbCA6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPHA+cGhvbmUgOiB7dXNlci5waG9uZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuLyoqXHJcbiAqIElmIHdhbm5hIHNhdmUgZHVyaW5nIGJ1aWxkaW5nIHBhdGgsIHNhdmUgYWxsIGFydGljbGVzIHVzaW5nIGdldFN0YXRpY1Byb3BzXHJcbiAqIGFuZCBnZXQgYWxsIHBhcmFtcyBJRCB1c2luZyBnZXRTdGF0aWNQYXRoc1xyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9fVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc2ApO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGlkcyA9IHVzZXJzLm1hcCh1c2VyID0+IHVzZXIuaWQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBpZHMubWFwKGkgPT4gKHsgcGFyYW1zOiB7IGlkOiBpLnRvU3RyaW5nKCkgfSB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxuICAgIC8vcmV0dXJuIHsgcGF0aDogeyBpZDogJzEnLCBpZDogJzInIH19IC8vbXVzdCBnZXQgYSBhcnJheSBvZiBhbGwgaWQgaXMgdGhpcyBmb3JtYXRcclxufVxyXG5cclxuLyoqXHJcbiAqIEV2ZXJ5dGltZSBlbnRlciBpbiB0aGUgdXNlciBJRCAsIGZldGNoIHRoZSB1c2VyIGluZm9ybWF0aW9uXHJcbiAqL1xyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKTtcclxuLy8gICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4vLyAgICAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9fVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bml0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=