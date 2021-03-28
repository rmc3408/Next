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
  console.log(user.email);
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
 * Everytime 
 * @returns 
 */
// export const getServerSideProps = async (context) => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const user = await result.json();
//     return { props: { user }}
// }


_s(unit, "KT04S7lQEBR8J8rUrnLs+YWpq/o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsidW5pdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJydCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwicGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLDZEQUFTLEVBQXBCO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDBCQUFVRCxFQUFFLENBQUNFLEtBQUgsQ0FBU0MsRUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLDRCQUFXUCxJQUFJLENBQUNRLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0k7QUFBQSw2QkFBWVIsSUFBSSxDQUFDRyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQUlJO0FBQUEsNkJBQVlILElBQUksQ0FBQ1MsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFRSCxDQVpEO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F0Qk1WLEk7VUFFU00scUQ7Ozs7QUE2QkFOLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGUvW2lkXS5mYTE5Y2RiZThiNzEzNDFmYmU0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB1bml0ID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcclxuICAgIGNvbnN0IHJ0ID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlVTRVIge3J0LnF1ZXJ5LmlkfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPm5hbWUgOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+ZW1haWwgOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDxwPnBob25lIDoge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbi8qKlxyXG4gKiBFdmVyeXRpbWUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke2NvbnRleHQucGFyYW1zLmlkfWApO1xyXG4vLyAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbi8vICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyIH19XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke2NvbnRleHQucGFyYW1zLmlkfWApO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbiAgICByZXR1cm4geyBwcm9wczogeyB1c2VyIH19XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1bml0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=