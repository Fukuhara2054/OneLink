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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Page2 = function() {\n    _s();\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var onchangeQuestioner = function(e) {\n        setQuestioner(e.target.value);\n    };\n    var onchangeTimeStamp = function(e) {\n        setTimeStamp(e.target.value);\n    };\n    var onchangeBookmark = function(e) {\n        setBookmark(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(userDataRef, \"postDoc\"), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: questioner,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"投稿\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"name\",\n                        type: \"text\",\n                        placeholder: \"氏名\",\n                        onChange: onChangeName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"mail\",\n                        type: \"text\",\n                        placeholder: \"メールアドレス\",\n                        onChange: onChangeMail\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"title\",\n                        type: \"text\",\n                        placeholder: \"命題\",\n                        onChange: onchangeTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"content\",\n                        type: \"text\",\n                        placeholder: \"詳細\",\n                        onChange: onchangeContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"questioner\",\n                        type: \"text\",\n                        placeholder: \"質問者\",\n                        onChange: onchangeQuestioner\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"timeStamp\",\n                        type: \"text\",\n                        placeholder: \"投稿時間\",\n                        onChange: onchangeTimeStamp\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"bookmark\",\n                        type: \"text\",\n                        placeholder: \"いいね\",\n                        onChange: onchangeBookmark\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleClickAddFieldButton,\n                        children: \"投稿\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello CodeSandbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Start editing to see some magic happen!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                    position: \"sticky\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"h6\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                color: \"inherit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MscURBQVU7Z0NBQUMwQyxPQUFPLEVBQUMsSUFBSTswQ0FBQyxNQUFJOzs7OztxQ0FBYTswQ0FDMUMsOERBQUN6QyxpREFBTTtnQ0FBQzBDLEtBQUssRUFBQyxTQUFTOzBDQUFDLE9BQUs7Ozs7O3FDQUFTOzs7Ozs7NkJBQzlCOzs7Ozt5QkFDSDs7Ozs7cUJBRUw7Ozs7OzthQUNGLENBQ1A7Q0FDRjtHQTVES3JDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQThEWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2UyLnRzeD9jMmM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vQXBwYmFyIHBvc2l0aW9uIHN0aWNreeOBruODhuOCueODiFxuLy/lvozjgafnva7jgY3mj5vjgYhcblxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU2V0U3RhdGVBY3Rpb24gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBkb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBkYiBmcm9tIFwiLi9maXJlYmFzZVwiXG5cbmNvbnN0IFBhZ2UyOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJykvL1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtxdWVzdGlvbmVyLCBzZXRRdWVzdGlvbmVyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFt0aW1lU3RhbXAsIHNldFRpbWVTdGFtcF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbYm9va21hcmssIHNldEJvb2ttYXJrXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IG9uY2hhbmdlVGl0bGUgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgfSlcbiAgY29uc3Qgb25jaGFuZ2VDb250ZW50ID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VRdWVzdGlvbmVyID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRRdWVzdGlvbmVyKGUudGFyZ2V0LnZhbHVlKVxufSlcbmNvbnN0IG9uY2hhbmdlVGltZVN0YW1wID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRUaW1lU3RhbXAoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VCb29rbWFyayA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgc2V0Qm9va21hcmsoZS50YXJnZXQudmFsdWUpXG59KVxuICBjb25zdCBoYW5kbGVDbGlja0FkZEZpZWxkQnV0dG9uID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGFSZWYgPSBjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLy9teWRhdGFSZWbjgatkYuOBrm15ZGF0YeOCs+ODrOOCr+OCt+ODp+ODs+OCkuaMh+WumlxuICAgIGF3YWl0IHNldERvYyhkb2ModXNlckRhdGFSZWYsXCJwb3N0RG9jXCIpLHsvL3NldGRvY+OBruesrOS6jOW8leaVsOOBjOODieOCreODpeODoeODs+ODiOWQjeOAgeesrOS4ieOBr+WFpeOCjOOBn+OBhOODh+ODvOOCv1xuICAgICAgMDp7XG4gICAgICAgIHRpdGxlOnRpdGxlLFxuICAgICAgICBjb250ZW50OmNvbnRlbnQsXG4gICAgICAgIHF1ZXN0aW9uZXI6cXVlc3Rpb25lcixcbiAgICAgICAgdGltZVN0YW1wOnRpbWVTdGFtcCxcbiAgICAgICAgYm9va21hcms6Ym9va21hcmssXG4gICAgICB9LFxuICBcbiAgICB9KVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWw+5oqV56i/PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmsI/lkI1cIiBvbkNoYW5nZT17b25DaGFuZ2VOYW1lfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cIm1haWxcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi44Oh44O844Or44Ki44OJ44Os44K5XCIgb25DaGFuZ2U9e29uQ2hhbmdlTWFpbH0vPlxuICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLlkb3poYxcIiBvbkNoYW5nZT17b25jaGFuZ2VUaXRsZX0vPlxuICAgICAgPGlucHV0IG5hbWU9XCJjb250ZW50XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuips+e0sFwiIG9uQ2hhbmdlPXtvbmNoYW5nZUNvbnRlbnR9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwicXVlc3Rpb25lclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLos6rllY/ogIVcIiBvbkNoYW5nZT17b25jaGFuZ2VRdWVzdGlvbmVyfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cInRpbWVTdGFtcFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmipXnqL/mmYLplpNcIiBvbkNoYW5nZT17b25jaGFuZ2VUaW1lU3RhbXB9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwiYm9va21hcmtcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi44GE44GE44GtXCIgb25DaGFuZ2U9e29uY2hhbmdlQm9va21hcmt9Lz5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbn0+5oqV56i/PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMT5IZWxsbyBDb2RlU2FuZGJveDwvaDE+XG4gICAgICA8aDI+U3RhcnQgZWRpdGluZyB0byBzZWUgc29tZSBtYWdpYyBoYXBwZW4hPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIj5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPk5ld3M8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXREb2MiLCJkYiIsIlBhZ2UyIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwicXVlc3Rpb25lciIsInNldFF1ZXN0aW9uZXIiLCJ0aW1lU3RhbXAiLCJzZXRUaW1lU3RhbXAiLCJib29rbWFyayIsInNldEJvb2ttYXJrIiwib25jaGFuZ2VUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uY2hhbmdlQ29udGVudCIsIm9uY2hhbmdlUXVlc3Rpb25lciIsIm9uY2hhbmdlVGltZVN0YW1wIiwib25jaGFuZ2VCb29rbWFyayIsImhhbmRsZUNsaWNrQWRkRmllbGRCdXR0b24iLCJ1c2VyRGF0YVJlZiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkNoYW5nZU5hbWUiLCJvbkNoYW5nZU1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJoMiIsInBvc2l0aW9uIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});