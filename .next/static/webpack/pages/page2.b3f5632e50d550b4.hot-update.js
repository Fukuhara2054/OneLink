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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Page2 = function() {\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_2__.app);\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var onchangeQuestioner = function(e) {\n        setQuestioner(e.target.value);\n    };\n    var onchangeTimeStamp = function(e) {\n        setTimeStamp(e.target.value);\n    };\n    var onchangeBookmark = function(e) {\n        setBookmark(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref1, userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(userDataRef, (ref = auth.currentUser) === null || ref === void 0 ? void 0 : ref.uid), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: (ref1 = auth.currentUser) === null || ref1 === void 0 ? void 0 : ref1.displayName,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Hello CodeSandbox\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Start editing to see some magic happen!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.AppBar, {\n                        position: \"sticky\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    variant: \"h6\",\n                                    children: \"News\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    color: \"inherit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: \"投稿\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"title\",\n                            type: \"text\",\n                            placeholder: \"命題\",\n                            onChange: onchangeTitle\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"content\",\n                            type: \"text\",\n                            placeholder: \"詳細\",\n                            onChange: onchangeContent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"timeStamp\",\n                            type: \"text\",\n                            placeholder: \"投稿時間\",\n                            onChange: onchangeTimeStamp\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"bookmark\",\n                            type: \"text\",\n                            placeholder: \"いいね\",\n                            onChange: onchangeBookmark\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: handleClickAddFieldButton,\n                            children: \"投稿\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: questioner\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: timeStamp\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: bookmark\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsZ0JBQWdCOzs7OztpQ0FBRztzQ0FDbEYsOERBQUNtQixRQUFNOzRCQUFDQyxPQUFPLEVBQUVuQix5QkFBeUI7c0NBQUUsSUFBRTs7Ozs7aUNBQVM7Ozs7Ozt5QkFDakQ7OEJBQ04sOERBQUNLLEtBQUc7O3NDQUNGLDhEQUFDZSxHQUFDO3NDQUFFdEMsS0FBSzs7Ozs7aUNBQUs7c0NBQ2QsOERBQUNzQyxHQUFDO3NDQUFFcEMsT0FBTzs7Ozs7aUNBQUs7c0NBQ2hCLDhEQUFDb0MsR0FBQztzQ0FBRWxDLFVBQVU7Ozs7O2lDQUFLO3NDQUNuQiw4REFBQ2tDLEdBQUM7c0NBQUVoQyxTQUFTOzs7OztpQ0FBSztzQ0FDbEIsOERBQUNnQyxHQUFDO3NDQUFFOUIsUUFBUTs7Ozs7aUNBQUs7Ozs7Ozt5QkFDYjs7Ozs7O2lCQUdGOzs7OzthQUNBLENBQ1A7Q0FDRjtHQXBFS1YsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBc0VYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZTIudHN4P2MyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BcHBiYXIgcG9zaXRpb24gc3RpY2t544Gu44OG44K544OIXG4vL+W+jOOBp+e9ruOBjeaPm+OBiFxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4vZmlyZWJhc2VcIlxuXG5jb25zdCBQYWdlMjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcClcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJykvL1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtxdWVzdGlvbmVyLCBzZXRRdWVzdGlvbmVyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0aW1lU3RhbXAsIHNldFRpbWVTdGFtcF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYm9va21hcmssIHNldEJvb2ttYXJrXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IG9uY2hhbmdlVGl0bGUgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfSlcbiAgY29uc3Qgb25jaGFuZ2VDb250ZW50ID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VRdWVzdGlvbmVyID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRRdWVzdGlvbmVyKGUudGFyZ2V0LnZhbHVlKVxufSlcbmNvbnN0IG9uY2hhbmdlVGltZVN0YW1wID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRUaW1lU3RhbXAoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VCb29rbWFyayA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgc2V0Qm9va21hcmsoZS50YXJnZXQudmFsdWUpXG59KVxuICBjb25zdCBoYW5kbGVDbGlja0FkZEZpZWxkQnV0dG9uID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGFSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLy9teWRhdGFSZWbjgatkYuOBrm15ZGF0YeOCs+ODrOOCr+OCt+ODp+ODs+OCkuaMh+WumlxuICAgIGF3YWl0IHNldERvYyhkb2ModXNlckRhdGFSZWYsIGF1dGguY3VycmVudFVzZXI/LnVpZCksey8vc2V0ZG9j44Gu56ys5LqM5byV5pWw44GM44OJ44Kt44Ol44Oh44Oz44OI5ZCN44CB56ys5LiJ44Gv5YWl44KM44Gf44GE44OH44O844K/XG4gICAgICAwOntcbiAgICAgICAgdGl0bGU6dGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6Y29udGVudCxcbiAgICAgICAgcXVlc3Rpb25lcjphdXRoLmN1cnJlbnRVc2VyPy5kaXNwbGF5TmFtZSwgLy/os6rllY/ogIXjga/jg6bjg7zjgrbjg7zlkI1cbiAgICAgICAgdGltZVN0YW1wOnRpbWVTdGFtcCxcbiAgICAgICAgYm9va21hcms6Ym9va21hcmssXG4gICAgICB9LFxuICBcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG8gQ29kZVNhbmRib3g8L2gxPlxuICAgICAgPGgyPlN0YXJ0IGVkaXRpbmcgdG8gc2VlIHNvbWUgbWFnaWMgaGFwcGVuITwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RpY2t5XCI+XG4gICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5OZXdzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWw+5oqV56i/PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5ZG96aGMXCIgb25DaGFuZ2U9e29uY2hhbmdlVGl0bGV9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwiY29udGVudFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLoqbPntLBcIiBvbkNoYW5nZT17b25jaGFuZ2VDb250ZW50fS8+XG4gICAgICA8aW5wdXQgbmFtZT1cInRpbWVTdGFtcFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmipXnqL/mmYLplpNcIiBvbkNoYW5nZT17b25jaGFuZ2VUaW1lU3RhbXB9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwiYm9va21hcmtcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi44GE44GE44GtXCIgb25DaGFuZ2U9e29uY2hhbmdlQm9va21hcmt9Lz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbn0+5oqV56i/PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgIDxwPntjb250ZW50fTwvcD5cbiAgICAgICAgPHA+e3F1ZXN0aW9uZXJ9PC9wPlxuICAgICAgICA8cD57dGltZVN0YW1wfTwvcD5cbiAgICAgICAgPHA+e2Jvb2ttYXJrfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgXG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTI7Il0sIm5hbWVzIjpbImFwcCIsImdldEF1dGgiLCJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0RG9jIiwiZGIiLCJQYWdlMiIsImF1dGgiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJxdWVzdGlvbmVyIiwic2V0UXVlc3Rpb25lciIsInRpbWVTdGFtcCIsInNldFRpbWVTdGFtcCIsImJvb2ttYXJrIiwic2V0Qm9va21hcmsiLCJvbmNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25jaGFuZ2VDb250ZW50Iiwib25jaGFuZ2VRdWVzdGlvbmVyIiwib25jaGFuZ2VUaW1lU3RhbXAiLCJvbmNoYW5nZUJvb2ttYXJrIiwiaGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbiIsInVzZXJEYXRhUmVmIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJwb3NpdGlvbiIsInZhcmlhbnQiLCJjb2xvciIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});