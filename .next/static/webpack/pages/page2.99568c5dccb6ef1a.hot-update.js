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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Page2 = function() {\n    _s();\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var onchangeQuestioner = function(e) {\n        setQuestioner(e.target.value);\n    };\n    var onchangeTimeStamp = function(e) {\n        setTimeStamp(e.target.value);\n    };\n    var onchangeBookmark = function(e) {\n        setBookmark(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(userDataRef, \"postDoc\"), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: questioner,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"投稿\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"name\",\n                        type: \"text\",\n                        placeholder: \"氏名\",\n                        onChange: onChangeName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"mail\",\n                        type: \"text\",\n                        placeholder: \"メールアドレス\",\n                        onChange: onChangeMail\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"title\",\n                        type: \"text\",\n                        placeholder: \"命題\",\n                        onChange: onchangeTitle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        name: \"content\",\n                        type: \"text\",\n                        placeholder: \"詳細\",\n                        onChange: onchangeContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello CodeSandbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Start editing to see some magic happen!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                    position: \"sticky\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"h6\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                color: \"inherit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBQyxTQUFTO3dCQUFDQyxRQUFRLEVBQUVFLFlBQVk7Ozs7OzZCQUFHO2tDQUM5RSw4REFBQ04sT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE9BQU87d0JBQUNDLElBQUksRUFBQyxNQUFNO3dCQUFDQyxXQUFXLEVBQUMsSUFBSTt3QkFBQ0MsUUFBUSxFQUFFakIsYUFBYTs7Ozs7NkJBQUc7a0NBQzNFLDhEQUFDYSxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsU0FBUzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLFdBQVcsRUFBQyxJQUFJO3dCQUFDQyxRQUFRLEVBQUViLGVBQWU7Ozs7OzZCQUFHOzs7Ozs7cUJBRXpFOzBCQUNOLDhEQUFDZ0IsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ0MsSUFBRTswQkFBQyx5Q0FBdUM7Ozs7O3FCQUFLOzBCQUNoRCw4REFBQ1gsS0FBRzswQkFDRiw0RUFBQzdCLGlEQUFNO29CQUFDeUMsUUFBUSxFQUFDLFFBQVE7OEJBQ3ZCLDRFQUFDeEMsa0RBQU87OzBDQUNOLDhEQUFDQyxxREFBVTtnQ0FBQ3dDLE9BQU8sRUFBQyxJQUFJOzBDQUFDLE1BQUk7Ozs7O3FDQUFhOzBDQUMxQyw4REFBQ3ZDLGlEQUFNO2dDQUFDd0MsS0FBSyxFQUFDLFNBQVM7MENBQUMsT0FBSzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDOUI7Ozs7O3lCQUNIOzs7OztxQkFFTDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBekRLbkMsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMkRYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZTIudHN4P2MyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BcHBiYXIgcG9zaXRpb24gc3RpY2t544Gu44OG44K544OIXG4vL+W+jOOBp+e9ruOBjeaPm+OBiFxuXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IGRiIGZyb20gXCIuL2ZpcmViYXNlXCJcblxuY29uc3QgUGFnZTI6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKS8vXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3F1ZXN0aW9uZXIsIHNldFF1ZXN0aW9uZXJdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RpbWVTdGFtcCwgc2V0VGltZVN0YW1wXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtib29rbWFyaywgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgb25jaGFuZ2VUaXRsZSA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICB9KVxuICBjb25zdCBvbmNoYW5nZUNvbnRlbnQgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSlcbn0pXG5jb25zdCBvbmNoYW5nZVF1ZXN0aW9uZXIgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gIHNldFF1ZXN0aW9uZXIoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VUaW1lU3RhbXAgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gIHNldFRpbWVTdGFtcChlLnRhcmdldC52YWx1ZSlcbn0pXG5jb25zdCBvbmNoYW5nZUJvb2ttYXJrID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRCb29rbWFyayhlLnRhcmdldC52YWx1ZSlcbn0pXG4gIGNvbnN0IGhhbmRsZUNsaWNrQWRkRmllbGRCdXR0b24gPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YVJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIikvL215ZGF0YVJlZuOBq2Ri44GubXlkYXRh44Kz44Os44Kv44K344On44Oz44KS5oyH5a6aXG4gICAgYXdhaXQgc2V0RG9jKGRvYyh1c2VyRGF0YVJlZixcInBvc3REb2NcIiksey8vc2V0ZG9j44Gu56ys5LqM5byV5pWw44GM44OJ44Kt44Ol44Oh44Oz44OI5ZCN44CB56ys5LiJ44Gv5YWl44KM44Gf44GE44OH44O844K/XG4gICAgICAwOntcbiAgICAgICAgdGl0bGU6dGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6Y29udGVudCxcbiAgICAgICAgcXVlc3Rpb25lcjpxdWVzdGlvbmVyLFxuICAgICAgICB0aW1lU3RhbXA6dGltZVN0YW1wLFxuICAgICAgICBib29rbWFyazpib29rbWFyayxcbiAgICAgIH0sXG4gIFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbD7mipXnqL88L2xhYmVsPlxuICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuawj+WQjVwiIG9uQ2hhbmdlPXtvbkNoYW5nZU5hbWV9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwibWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrlcIiBvbkNoYW5nZT17b25DaGFuZ2VNYWlsfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuWRvemhjFwiIG9uQ2hhbmdlPXtvbmNoYW5nZVRpdGxlfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cImNvbnRlbnRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6Kmz57SwXCIgb25DaGFuZ2U9e29uY2hhbmdlQ29udGVudH0vPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMT5IZWxsbyBDb2RlU2FuZGJveDwvaDE+XG4gICAgICA8aDI+U3RhcnQgZWRpdGluZyB0byBzZWUgc29tZSBtYWdpYyBoYXBwZW4hPC9oMj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGlja3lcIj5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPk5ld3M8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXREb2MiLCJkYiIsIlBhZ2UyIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwicXVlc3Rpb25lciIsInNldFF1ZXN0aW9uZXIiLCJ0aW1lU3RhbXAiLCJzZXRUaW1lU3RhbXAiLCJib29rbWFyayIsInNldEJvb2ttYXJrIiwib25jaGFuZ2VUaXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uY2hhbmdlQ29udGVudCIsIm9uY2hhbmdlUXVlc3Rpb25lciIsIm9uY2hhbmdlVGltZVN0YW1wIiwib25jaGFuZ2VCb29rbWFyayIsImhhbmRsZUNsaWNrQWRkRmllbGRCdXR0b24iLCJ1c2VyRGF0YVJlZiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkNoYW5nZU5hbWUiLCJvbkNoYW5nZU1haWwiLCJoMSIsImgyIiwicG9zaXRpb24iLCJ2YXJpYW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});