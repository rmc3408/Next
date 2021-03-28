webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ArticleItem.js":
/*!***********************************!*\
  !*** ./components/ArticleItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Article.module.css */ "./styles/Article.module.css");
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\molin\\OneDrive\\Documents\\Next\\traversy\\components\\ArticleItem.js",
    _this = undefined;




var ArticleItem = function ArticleItem(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/articles/[id]",
    as: "/articles/".concat(article.id),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: [article.name, " \u2192"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: article.website
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = ArticleItem;
/* harmony default export */ __webpack_exports__["default"] = (ArticleItem);

var _c;

$RefreshReg$(_c, "ArticleItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ArticleList */ "./components/ArticleList.js");

var _jsxFileName = "C:\\Users\\molin\\OneDrive\\Documents\\Next\\traversy\\pages\\index.js";

//import Head from 'next/head'
//import styles from '../styles/Home.module.css'

var __N_SSG = true;
function Home(props) {
  //console.log(props.articles);
  var x = 10;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-145436143",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-145436143" + " " + 'title',
      children: "Hello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "145436143",
      children: ".title.jsx-145436143{color:".concat(x > 3 ? 'red' : ' blue', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9saW5cXE9uZURyaXZlXFxEb2N1bWVudHNcXE5leHRcXHRyYXZlcnN5XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1MsQUFFZ0QsbUNBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9saW5cXE9uZURyaXZlXFxEb2N1bWVudHNcXE5leHRcXHRyYXZlcnN5XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgLy9jb25zb2xlLmxvZyhwcm9wcy5hcnRpY2xlcyk7XG4gIGNvbnN0IHggPSAxMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPkhlbGxvPC9oMT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgIC50aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogJHsgeCA+IDMgPyAncmVkJyA6ICcgYmx1ZSd9O1xuICAgICAgICAgIH1gXG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8QXJ0aWNsZUxpc3QgYXJ0aWNsZXM9e3Byb3BzLmFydGljbGVzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycz9fbGltaXQ9OCcpO1xuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlc1xuICAgIH1cbiAgfTtcblxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\molin\\\\OneDrive\\\\Documents\\\\Next\\\\traversy\\\\pages\\\\index.js */")
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      articles: props.articles
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXJ0aWNsZUl0ZW0iLCJhcnRpY2xlIiwiaWQiLCJhcnRpY2xlU3R5bGVzIiwiY2FyZCIsIm5hbWUiLCJ3ZWJzaXRlIiwiSG9tZSIsInByb3BzIiwieCIsImFydGljbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNuQyxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUE0QixNQUFFLHNCQUFlQSxPQUFPLENBQUNDLEVBQXZCLENBQTlCO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVDLGlFQUFhLENBQUNDLElBQTVCO0FBQUEsOEJBQ0U7QUFBQSxtQkFBS0gsT0FBTyxDQUFDSSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBSUosT0FBTyxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztLQUFNTixXO0FBV1NBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2xDO0FBQ0EsTUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxzQkFDRTtBQUFBO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBLHFEQUlrQkEsQ0FBQyxHQUFHLENBQUosR0FBUSxLQUFSLEdBQWdCLE9BSmxDO0FBQUEsa0RBUUUscUVBQUMsK0RBQUQ7QUFBYSxjQUFRLEVBQUVELEtBQUssQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0FmdUJILEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZkOWRiNmQ1YTgzODI4MDYxMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGFydGljbGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFydGljbGVJdGVtID0gKHsgYXJ0aWNsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9Jy9hcnRpY2xlcy9baWRdJyBhcz17YC9hcnRpY2xlcy8ke2FydGljbGUuaWR9YH0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZVN0eWxlcy5jYXJkfT5cclxuICAgICAgICA8aDM+e2FydGljbGUubmFtZX0gJnJhcnI7PC9oMz5cclxuICAgICAgICA8cD57YXJ0aWNsZS53ZWJzaXRlfTwvcD5cclxuICAgICAgPC9hPlxyXG4gICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlSXRlbSIsIi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAvL2NvbnNvbGUubG9nKHByb3BzLmFydGljbGVzKTtcbiAgY29uc3QgeCA9IDEwO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+SGVsbG88L2gxPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyB4ID4gMyA/ICdyZWQnIDogJyBibHVlJ307XG4gICAgICAgICAgfWBcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxBcnRpY2xlTGlzdCBhcnRpY2xlcz17cHJvcHMuYXJ0aWNsZXN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzP19saW1pdD04Jyk7XG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzXG4gICAgfVxuICB9O1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==