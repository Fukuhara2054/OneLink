"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page2",{

/***/ "./pages/page2.tsx":
/*!*************************!*\
  !*** ./pages/page2.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Page2 = function() {\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_2__.app);\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var onchangeQuestioner = function(e) {\n        setQuestioner(e.target.value);\n    };\n    var onchangeTimeStamp = function(e) {\n        setTimeStamp(e.target.value);\n    };\n    var onchangeBookmark = function(e) {\n        setBookmark(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref1, userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(userDataRef, (ref = auth.currentUser) === null || ref === void 0 ? void 0 : ref.uid), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: (ref1 = auth.currentUser) === null || ref1 === void 0 ? void 0 : ref1.displayName,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Hello CodeSandbox\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Start editing to see some magic happen!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.AppBar, {\n                        position: \"sticky\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    variant: \"h6\",\n                                    children: \"News\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    color: \"inherit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"投稿\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"title\",\n                            type: \"text\",\n                            placeholder: \"命題\",\n                            onChange: onchangeTitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"content\",\n                            type: \"text\",\n                            placeholder: \"詳細\",\n                            onChange: onchangeContent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"timeStamp\",\n                            type: \"text\",\n                            placeholder: \"投稿時間\",\n                            onChange: onchangeTimeStamp\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"bookmark\",\n                            type: \"text\",\n                            placeholder: \"いいね\",\n                            onChange: onchangeBookmark\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: handleClickAddFieldButton,\n                            children: \"投稿\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsZ0JBQWdCOzs7OztpQ0FBRztzQ0FDbEYsOERBQUNtQixRQUFNOzRCQUFDQyxPQUFPLEVBQUVuQix5QkFBeUI7c0NBQUUsSUFBRTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDakQ7OEJBQ04sOERBQUNLLEtBQUc7OEJBQ0YsNEVBQUNlLEdBQUM7a0NBQUV0QyxLQUFLOzs7Ozs2QkFBSzs7Ozs7eUJBQ1Y7Ozs7OztpQkFHRjs7Ozs7YUFDQSxDQUNQO0NBQ0Y7R0FoRUtGLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQWtFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2UyLnRzeD9jMmM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vQXBwYmFyIHBvc2l0aW9uIHN0aWNreeOBruODhuOCueODiFxuLy/lvozjgafnva7jgY3mj5vjgYhcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2ZpcmViYXNlXCJcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IGRiIGZyb20gXCIuL2ZpcmViYXNlXCJcblxuY29uc3QgUGFnZTI6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpLy9cbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcXVlc3Rpb25lciwgc2V0UXVlc3Rpb25lcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbdGltZVN0YW1wLCBzZXRUaW1lU3RhbXBdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2Jvb2ttYXJrLCBzZXRCb29rbWFya10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBvbmNoYW5nZVRpdGxlID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpXG4gIH0pXG4gIGNvbnN0IG9uY2hhbmdlQ29udGVudCA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKVxufSlcbmNvbnN0IG9uY2hhbmdlUXVlc3Rpb25lciA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgc2V0UXVlc3Rpb25lcihlLnRhcmdldC52YWx1ZSlcbn0pXG5jb25zdCBvbmNoYW5nZVRpbWVTdGFtcCA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgc2V0VGltZVN0YW1wKGUudGFyZ2V0LnZhbHVlKVxufSlcbmNvbnN0IG9uY2hhbmdlQm9va21hcmsgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gIHNldEJvb2ttYXJrKGUudGFyZ2V0LnZhbHVlKVxufSlcbiAgY29uc3QgaGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbiA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKS8vbXlkYXRhUmVm44GrZGLjga5teWRhdGHjgrPjg6zjgq/jgrfjg6fjg7PjgpLmjIflrppcbiAgICBhd2FpdCBzZXREb2MoZG9jKHVzZXJEYXRhUmVmLCBhdXRoLmN1cnJlbnRVc2VyPy51aWQpLHsvL3NldGRvY+OBruesrOS6jOW8leaVsOOBjOODieOCreODpeODoeODs+ODiOWQjeOAgeesrOS4ieOBr+WFpeOCjOOBn+OBhOODh+ODvOOCv1xuICAgICAgMDp7XG4gICAgICAgIHRpdGxlOnRpdGxlLFxuICAgICAgICBjb250ZW50OmNvbnRlbnQsXG4gICAgICAgIHF1ZXN0aW9uZXI6YXV0aC5jdXJyZW50VXNlcj8uZGlzcGxheU5hbWUsIC8v6LOq5ZWP6ICF44Gv44Om44O844K244O85ZCNXG4gICAgICAgIHRpbWVTdGFtcDp0aW1lU3RhbXAsXG4gICAgICAgIGJvb2ttYXJrOmJvb2ttYXJrLFxuICAgICAgfSxcbiAgXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2PlxuICAgICAgPGgxPkhlbGxvIENvZGVTYW5kYm94PC9oMT5cbiAgICAgIDxoMj5TdGFydCBlZGl0aW5nIHRvIHNlZSBzb21lIG1hZ2ljIGhhcHBlbiE8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TmV3czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsPuaKleeovzwvbGFiZWw+XG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuWRvemhjFwiIG9uQ2hhbmdlPXtvbmNoYW5nZVRpdGxlfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cImNvbnRlbnRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6Kmz57SwXCIgb25DaGFuZ2U9e29uY2hhbmdlQ29udGVudH0vPlxuICAgICAgPGlucHV0IG5hbWU9XCJ0aW1lU3RhbXBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5oqV56i/5pmC6ZaTXCIgb25DaGFuZ2U9e29uY2hhbmdlVGltZVN0YW1wfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cImJvb2ttYXJrXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuOBhOOBhOOBrVwiIG9uQ2hhbmdlPXtvbmNoYW5nZUJvb2ttYXJrfS8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQWRkRmllbGRCdXR0b259PuaKleeovzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICBcbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlMjsiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXV0aCIsIlJlYWN0IiwidXNlU3RhdGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXREb2MiLCJkYiIsIlBhZ2UyIiwiYXV0aCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInF1ZXN0aW9uZXIiLCJzZXRRdWVzdGlvbmVyIiwidGltZVN0YW1wIiwic2V0VGltZVN0YW1wIiwiYm9va21hcmsiLCJzZXRCb29rbWFyayIsIm9uY2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbmNoYW5nZUNvbnRlbnQiLCJvbmNoYW5nZVF1ZXN0aW9uZXIiLCJvbmNoYW5nZVRpbWVTdGFtcCIsIm9uY2hhbmdlQm9va21hcmsiLCJoYW5kbGVDbGlja0FkZEZpZWxkQnV0dG9uIiwidXNlckRhdGFSZWYiLCJjdXJyZW50VXNlciIsInVpZCIsImRpc3BsYXlOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsInBvc2l0aW9uIiwidmFyaWFudCIsImNvbG9yIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});