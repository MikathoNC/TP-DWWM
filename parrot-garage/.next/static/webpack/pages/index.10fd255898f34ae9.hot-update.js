"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footer.module.css */ \"./styles/footer.module.css\");\n/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Footer() {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"plus\");\n    const hours = [\n        \"Lun.: 08:45 - 12:00, 14:00 - 18:00\",\n        \"Mar.: 08:45 - 12:00, 14:00 - 18:00\",\n        \"Mer.: 08:45 - 12:00, 14:00 - 18:00\",\n        \"Jeu.: 08:45 - 12:00, 14:00 - 18:00\",\n        \"Ven.: 08:45 - 12:00, 14:00 - 18:00\",\n        \"Sam.: 08:45 - 12:00\",\n        \"Dim.: Ferm\\xe9\"\n    ];\n    function handleButtonClick() {\n        setDisplay(!display);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                onClick: ()=>{\n                    setDisplay(!display);\n                },\n                children: \"Voir plus\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            display && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Horaires d'ouverture\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    hours.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().hoursLine),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: line\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n                            lineNumber: 29,\n                            columnNumber: 19\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n                lineNumber: 26,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mikak\\\\Documents\\\\GitHub\\\\TP-DWWM\\\\parrot-garage\\\\components\\\\footer.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Footer, \"VwpjdMD/wLkPGUle8px4Jqg6uEE=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUztBQUVqQyxTQUFTRzs7SUFFbEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNTyxRQUFRO1FBQ1I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDTDtJQUdELFNBQVNDO1FBQ0hKLFdBQVcsQ0FBQ0Q7SUFDbEI7SUFFTixxQkFDSSw4REFBQ007UUFBSUMsV0FBV1QsZ0ZBQW9COzswQkFDbEMsOERBQUNXO2dCQUFFRixXQUFXVCx5RUFBYTtnQkFBRWEsU0FBUztvQkFBT1YsV0FBVyxDQUFDRDtnQkFBUTswQkFBRzs7Ozs7O1lBQ25FQSx5QkFBVyw4REFBQ007Z0JBQUlDLFdBQVdULDBFQUFjOztrQ0FDcEMsOERBQUNlO2tDQUFHOzs7Ozs7b0JBQ0hULE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDWiw4REFBQ1Y7NEJBQWdCQyxXQUFXVCw0RUFBZ0I7c0NBQ3RDLDRFQUFDVzswQ0FBR007Ozs7OzsyQkFEQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBaEN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyLmpzP2IxNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG5cclxuICAgICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAgIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKFwicGx1c1wiKVxyXG4gICAgICBjb25zdCBob3VycyA9IFtcclxuICAgICAgICAgICAgXCJMdW4uOiAwODo0NSAtIDEyOjAwLCAxNDowMCAtIDE4OjAwXCIsXHJcbiAgICAgICAgICAgIFwiTWFyLjogMDg6NDUgLSAxMjowMCwgMTQ6MDAgLSAxODowMFwiLFxyXG4gICAgICAgICAgICBcIk1lci46IDA4OjQ1IC0gMTI6MDAsIDE0OjAwIC0gMTg6MDBcIixcclxuICAgICAgICAgICAgXCJKZXUuOiAwODo0NSAtIDEyOjAwLCAxNDowMCAtIDE4OjAwXCIsXHJcbiAgICAgICAgICAgIFwiVmVuLjogMDg6NDUgLSAxMjowMCwgMTQ6MDAgLSAxODowMFwiLFxyXG4gICAgICAgICAgICBcIlNhbS46IDA4OjQ1IC0gMTI6MDBcIixcclxuICAgICAgICAgICAgXCJEaW0uOiBGZXJtw6lcIiBcclxuICAgICAgXVxyXG5cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5KCFkaXNwbGF5KVxyXG4gICAgICB9XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7c2V0RGlzcGxheSghZGlzcGxheSl9fT5Wb2lyIHBsdXM8L3A+XHJcbiAgICAgIHtkaXNwbGF5ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxoMj5Ib3JhaXJlcyBkJ291dmVydHVyZTwvaDI+XHJcbiAgICAgICAgICAgIHtob3Vycy5tYXAoKGxpbmUsIGluZGV4KSA9PihcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5ob3Vyc0xpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bGluZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRm9vdGVyIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsImhvdXJzIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluQ29udGFpbmVyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb250ZW50IiwiaDIiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJob3Vyc0xpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer.js\n"));

/***/ })

});