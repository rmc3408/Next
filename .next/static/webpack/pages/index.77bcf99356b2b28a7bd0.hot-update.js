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
    href: "/article/".concat(article.id),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: [article.title, " \u2192"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: article.excerpt
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

/***/ "./components/ArticleList.js":
/*!***********************************!*\
  !*** ./components/ArticleList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleItem */ "./components/ArticleItem.js");
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Article.module.css */ "./styles/Article.module.css");
/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\molin\\OneDrive\\Documents\\Next\\traversy\\components\\ArticleList.js",
    _this = undefined;




var ArticleList = function ArticleList(_ref) {
  var articles = _ref.articles;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.grid,
    children: articles.map(function (article) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        article: article
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = ArticleList;
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

var _c;

$RefreshReg$(_c, "ArticleList");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Article.module.css":
/*!***********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/Article.module.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Article_grid__2WPYc {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 800px;\r\n    margin-top: 3rem;\r\n  }\r\n  \r\n  .Article_card__2DgoW {\r\n    margin: 1rem;\r\n    flex-basis: 45%;\r\n    padding: 1.5rem;\r\n    text-align: left;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 10px;\r\n    transition: color 0.15s ease, border-color 0.15s ease;\r\n  }\r\n  \r\n  .Article_card__2DgoW:hover,\r\n  .Article_card__2DgoW:focus,\r\n  .Article_card__2DgoW:active {\r\n    color: #0070f3;\r\n    border-color: #0070f3;\r\n  }\r\n  \r\n  .Article_card__2DgoW h3 {\r\n    margin: 0 0 1rem 0;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .Article_card__2DgoW p {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .Article_logo__p8cMG {\r\n    height: 1em;\r\n  }\r\n  \r\n  @media (max-width: 600px) {\r\n    .Article_grid__2WPYc {\r\n      width: 100%;\r\n      flex-direction: column;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://styles/Article.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,qDAAqD;EACvD;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE;MACE,WAAW;MACX,sBAAsB;IACxB;EACF","sourcesContent":[".grid {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    max-width: 800px;\r\n    margin-top: 3rem;\r\n  }\r\n  \r\n  .card {\r\n    margin: 1rem;\r\n    flex-basis: 45%;\r\n    padding: 1.5rem;\r\n    text-align: left;\r\n    color: inherit;\r\n    text-decoration: none;\r\n    border: 1px solid #eaeaea;\r\n    border-radius: 10px;\r\n    transition: color 0.15s ease, border-color 0.15s ease;\r\n  }\r\n  \r\n  .card:hover,\r\n  .card:focus,\r\n  .card:active {\r\n    color: #0070f3;\r\n    border-color: #0070f3;\r\n  }\r\n  \r\n  .card h3 {\r\n    margin: 0 0 1rem 0;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card p {\r\n    margin: 0;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .logo {\r\n    height: 1em;\r\n  }\r\n  \r\n  @media (max-width: 600px) {\r\n    .grid {\r\n      width: 100%;\r\n      flex-direction: column;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grid": "Article_grid__2WPYc",
	"card": "Article_card__2DgoW",
	"logo": "Article_logo__p8cMG"
};
module.exports = ___CSS_LOADER_EXPORT___;


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
  var _this = this;

  //console.log(props.articles);
  var x = 10;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-145436143",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-145436143" + " " + 'title',
      children: "Hello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "145436143",
      children: ".title.jsx-145436143{color:".concat(x > 3 ? 'red' : ' blue', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9saW5cXE9uZURyaXZlXFxEb2N1bWVudHNcXE5leHRcXHRyYXZlcnN5XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVMsQUFFZ0QsbUNBQ3JDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbW9saW5cXE9uZURyaXZlXFxEb2N1bWVudHNcXE5leHRcXHRyYXZlcnN5XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFydGljbGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZUxpc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgLy9jb25zb2xlLmxvZyhwcm9wcy5hcnRpY2xlcyk7XG4gIGNvbnN0IHggPSAxMDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+SGVsbG88L2gxPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyB4ID4gMyA/ICdyZWQnIDogJyBibHVlJ307XG4gICAgICAgICAgfWBcbiAgICAgICAgfVxuXG4gICAgICA8L3N0eWxlPlxuICAgICAge3Byb3BzLmFydGljbGVzLm1hcChwID0+IDxoMyBrZXk9e3AuaWR9PntwLm5hbWV9PC9oMz4pfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzP19saW1pdD0yJyk7XG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFydGljbGVzXG4gICAgfVxuICB9O1xuXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\molin\\\\OneDrive\\\\Documents\\\\Next\\\\traversy\\\\pages\\\\index.js */")
    }, void 0, false, void 0, this), props.articles.map(function (p) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "jsx-145436143",
        children: p.name
      }, p.id, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 32
      }, _this);
    })]
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

/***/ }),

/***/ "./styles/Article.module.css":
/*!***********************************!*\
  !*** ./styles/Article.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Article.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Article.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Article.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Article.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Article.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Article.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlSXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FydGljbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9BcnRpY2xlLm1vZHVsZS5jc3M/Y2ViZCJdLCJuYW1lcyI6WyJBcnRpY2xlSXRlbSIsImFydGljbGUiLCJpZCIsImFydGljbGVTdHlsZXMiLCJjYXJkIiwidGl0bGUiLCJleGNlcnB0IiwiQXJ0aWNsZUxpc3QiLCJhcnRpY2xlcyIsImdyaWQiLCJtYXAiLCJIb21lIiwicHJvcHMiLCJ4IiwicCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ25DLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxxQkFBY0EsT0FBTyxDQUFDQyxFQUF0QixDQUFWO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVDLGlFQUFhLENBQUNDLElBQTVCO0FBQUEsOEJBQ0U7QUFBQSxtQkFBS0gsT0FBTyxDQUFDSSxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSxrQkFBSUosT0FBTyxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztLQUFNTixXO0FBV1NBLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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MEIsbUJBQU8sQ0FBQywwVEFBMEs7O0FBRTVNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLDBUQUEwSztBQUNoTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDBUQUEwSzs7QUFFcE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43N2JjZjk5MzU2YjJiMjhhN2JkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgYXJ0aWNsZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQXJ0aWNsZUl0ZW0gPSAoeyBhcnRpY2xlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9hcnRpY2xlLyR7YXJ0aWNsZS5pZH1gfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXthcnRpY2xlU3R5bGVzLmNhcmR9PlxyXG4gICAgICAgIDxoMz57YXJ0aWNsZS50aXRsZX0gJnJhcnI7PC9oMz5cclxuICAgICAgICA8cD57YXJ0aWNsZS5leGNlcnB0fTwvcD5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUl0ZW0iLCJpbXBvcnQgQXJ0aWNsZUl0ZW0gZnJvbSAnLi9BcnRpY2xlSXRlbSdcclxuaW1wb3J0IGFydGljbGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEFydGljbGVMaXN0ID0gKHsgYXJ0aWNsZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YXJ0aWNsZVN0eWxlcy5ncmlkfT5cclxuICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgIDxBcnRpY2xlSXRlbSBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3QiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXJ0aWNsZV9ncmlkX18yV1BZYyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BcnRpY2xlX2NhcmRfXzJEZ29XIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBmbGV4LWJhc2lzOiA0NSU7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BcnRpY2xlX2NhcmRfXzJEZ29XOmhvdmVyLFxcclxcbiAgLkFydGljbGVfY2FyZF9fMkRnb1c6Zm9jdXMsXFxyXFxuICAuQXJ0aWNsZV9jYXJkX18yRGdvVzphY3RpdmUge1xcclxcbiAgICBjb2xvcjogIzAwNzBmMztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXJ0aWNsZV9jYXJkX18yRGdvVyBoMyB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5BcnRpY2xlX2NhcmRfXzJEZ29XIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkFydGljbGVfbG9nb19fcDhjTUcge1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5BcnRpY2xlX2dyaWRfXzJXUFljIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9BcnRpY2xlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscURBQXFEO0VBQ3ZEOztFQUVBOzs7SUFHRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsc0JBQXNCO0lBQ3hCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgZmxleC1iYXNpczogNDUlO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZDpob3ZlcixcXHJcXG4gIC5jYXJkOmZvY3VzLFxcclxcbiAgLmNhcmQ6YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6ICMwMDcwZjM7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcmQgaDMge1xcclxcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2FyZCBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuZ3JpZCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdyaWRcIjogXCJBcnRpY2xlX2dyaWRfXzJXUFljXCIsXG5cdFwiY2FyZFwiOiBcIkFydGljbGVfY2FyZF9fMkRnb1dcIixcblx0XCJsb2dvXCI6IFwiQXJ0aWNsZV9sb2dvX19wOGNNR1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy9pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlTGlzdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAvL2NvbnNvbGUubG9nKHByb3BzLmFydGljbGVzKTtcbiAgY29uc3QgeCA9IDEwO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5IZWxsbzwvaDE+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YCAudGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICR7IHggPiAzID8gJ3JlZCcgOiAnIGJsdWUnfTtcbiAgICAgICAgICB9YFxuICAgICAgICB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgICB7cHJvcHMuYXJ0aWNsZXMubWFwKHAgPT4gPGgzIGtleT17cC5pZH0+e3AubmFtZX08L2gzPil9XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/X2xpbWl0PTInKTtcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXNcbiAgICB9XG4gIH07XG5cbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0FydGljbGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vQXJ0aWNsZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vQXJ0aWNsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=