webpackHotUpdate_N_E("pages/article/[id]",{

/***/ "./pages/article/[id]/index.js":
/*!*************************************!*\
  !*** ./pages/article/[id]/index.js ***!
  \*************************************/
/*! exports provided: getStaticPasth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPasth", function() { return getStaticPasth; });
/* harmony import */ var C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\molin\\OneDrive\\Documents\\Next\\traversy\\pages\\article\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var unit = function unit(_ref) {
  _s();

  var user = _ref.user;
  console.log(user.email);
  var rt = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
      children: ["USER ", rt.query.id]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: ["name : ", user.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
      children: ["email : ", user.email]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
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

_s(unit, "KT04S7lQEBR8J8rUrnLs+YWpq/o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

var getStaticPasth = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result, user;
    return C_Users_molin_OneDrive_Documents_Next_traversy_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://jsonplaceholder.typicode.com/users/".concat(context.params.id));

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            user = _context.sent;
            return _context.abrupt("return", {
              props: {
                user: user
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStaticPasth() {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Everytime enter in the user ID , fetch the user information
 */
// export const getServerSideProps = async (context) => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const user = await result.json();
//     return { props: { user }}
// }

/**
 * Save all articles at building. GIVE AN ERROR BECAUSE is selecting ID
 */
// export const getStaticProps = async() => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
//     const user = await result.json();
//     return { props: { user }}
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS8vaW5kZXguanMiXSwibmFtZXMiOlsidW5pdCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJydCIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwicGhvbmUiLCJnZXRTdGF0aWNQYXN0aCIsImZldGNoIiwiY29udGV4dCIsInBhcmFtcyIsInJlc3VsdCIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEtBQWpCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQyw2REFBUyxFQUFwQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSwwQkFBVUQsRUFBRSxDQUFDRSxLQUFILENBQVNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSw0QkFBV1AsSUFBSSxDQUFDUSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQUEsNkJBQVlSLElBQUksQ0FBQ0csS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFJSTtBQUFBLDZCQUFZSCxJQUFJLENBQUNTLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUgsQ0FaRDs7R0FBTVYsSTtVQUVTTSxxRDs7O0FBWVIsSUFBTUssY0FBYztBQUFBLHFUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0xDLEtBQUssc0RBQStDQyxPQUFPLENBQUNDLE1BQVIsQ0FBZU4sRUFBOUQsRUFEQTs7QUFBQTtBQUNwQk8sa0JBRG9CO0FBQUE7QUFBQSxtQkFFUEEsTUFBTSxDQUFDQyxJQUFQLEVBRk87O0FBQUE7QUFFcEJmLGdCQUZvQjtBQUFBLDZDQUduQjtBQUFFZ0IsbUJBQUssRUFBRTtBQUFFaEIsb0JBQUksRUFBSkE7QUFBRjtBQUFULGFBSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRVLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7QUFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS2VYLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGUvW2lkXS5iZGI4Nzg4YmQ3YmVlNzA4MjExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB1bml0ID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcclxuICAgIGNvbnN0IHJ0ID0gdXNlUm91dGVyKCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlVTRVIge3J0LnF1ZXJ5LmlkfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPm5hbWUgOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPHA+ZW1haWwgOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDxwPnBob25lIDoge3VzZXIucGhvbmV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGFzdGggPSBhc3luYygpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtjb250ZXh0LnBhcmFtcy5pZH1gKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlciB9fVxyXG59XHJcblxyXG4vKipcclxuICogRXZlcnl0aW1lIGVudGVyIGluIHRoZSB1c2VyIElEICwgZmV0Y2ggdGhlIHVzZXIgaW5mb3JtYXRpb25cclxuICovXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke2NvbnRleHQucGFyYW1zLmlkfWApO1xyXG4vLyAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcbi8vICAgICByZXR1cm4geyBwcm9wczogeyB1c2VyIH19XHJcbi8vIH1cclxuXHJcbi8qKlxyXG4gKiBTYXZlIGFsbCBhcnRpY2xlcyBhdCBidWlsZGluZy4gR0lWRSBBTiBFUlJPUiBCRUNBVVNFIGlzIHNlbGVjdGluZyBJRFxyXG4gKi9cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7XHJcbi8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7Y29udGV4dC5wYXJhbXMuaWR9YCk7XHJcbi8vICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuLy8gICAgIHJldHVybiB7IHByb3BzOiB7IHVzZXIgfX1cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdW5pdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9