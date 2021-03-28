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
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["name : ", user.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["email : ", user.email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["phone : ", user.phone]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
/**
 * If wanna save during building path, save all articles using getStaticProps
 * and get all params ID using getStaticPaths
 *
 * However, you cannot add users, posts, dynamically
 * because it saved during build time
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsidW5pdCIsInVzZXIiLCJydCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw2REFBUyxFQUFwQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwwQkFBVUQsRUFBRSxDQUFDRSxLQUFILENBQVNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw0QkFBV0osSUFBSSxDQUFDSyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsNkJBQVlMLElBQUksQ0FBQ00sS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFBLDZCQUFZTixJQUFJLENBQUNPLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FaRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FuQk1SLEk7VUFFT0cscUQ7OztBQXVDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlL1tpZF0uMDEyNTE2YzU0MmEzNGVkOWU5YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB1bml0ID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcclxuICBjb25zdCBydCA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPlVTRVIge3J0LnF1ZXJ5LmlkfTwvaDI+XHJcbiAgICAgIDxwPm5hbWUgOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgPHA+ZW1haWwgOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgIDxwPnBob25lIDoge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLyoqXHJcbiAqIElmIHdhbm5hIHNhdmUgZHVyaW5nIGJ1aWxkaW5nIHBhdGgsIHNhdmUgYWxsIGFydGljbGVzIHVzaW5nIGdldFN0YXRpY1Byb3BzXHJcbiAqIGFuZCBnZXQgYWxsIHBhcmFtcyBJRCB1c2luZyBnZXRTdGF0aWNQYXRoc1xyXG4gKlxyXG4gKiBIb3dldmVyLCB5b3UgY2Fubm90IGFkZCB1c2VycywgcG9zdHMsIGR5bmFtaWNhbGx5XHJcbiAqIGJlY2F1c2UgaXQgc2F2ZWQgZHVyaW5nIGJ1aWxkIHRpbWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7Y29udGV4dC5wYXJhbXMuaWR9YFxyXG4gICk7XHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9IH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzYCk7XHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICBjb25zdCBpZHMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IHVzZXIuaWQpO1xyXG4gIGNvbnN0IHBhdGhzID0gaWRzLm1hcCgoaSkgPT4gKHsgcGFyYW1zOiB7IGlkOiBpLnRvU3RyaW5nKCkgfSB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG4gIC8vcmV0dXJuIHsgcGF0aDogeyBpZDogJzEnLCBpZDogJzInIH19IC8vbXVzdCBnZXQgYSBhcnJheSBvZiBhbGwgaWQgaXMgdGhpcyBmb3JtYXRcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFdmVyeXRpbWUgZW50ZXIgaW4gdGhlIHVzZXIgSUQgLCBmZXRjaCB0aGUgdXNlciBpbmZvcm1hdGlvblxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7Y29udGV4dC5wYXJhbXMuaWR9YCk7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuLy8gICAgIHJldHVybiB7IHByb3BzOiB7IHVzZXIgfX1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdW5pdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==