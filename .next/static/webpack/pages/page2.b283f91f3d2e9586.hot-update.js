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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Page2 = function() {\n    _s();\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var onchangeQuestioner = function(e) {\n        setQuestioner(e.target.value);\n    };\n    var onchangeTimeStamp = function(e) {\n        setTimeStamp(e.target.value);\n    };\n    var onchangeBookmark = function(e) {\n        setBookmark(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(userDataRef), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: questioner,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    children: \"投稿\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    type: \"text\",\n                    placeholder: \"命題\",\n                    onChange: onchangeTitle\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    name: \"content\",\n                    type: \"text\",\n                    placeholder: \"詳細\",\n                    onChange: onchangeContent\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    name: \"questioner\",\n                    type: \"text\",\n                    placeholder: \"質問者\",\n                    onChange: onchangeQuestioner\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    name: \"timeStamp\",\n                    type: \"text\",\n                    placeholder: \"投稿時間\",\n                    onChange: onchangeTimeStamp\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    name: \"bookmark\",\n                    type: \"text\",\n                    placeholder: \"いいね\",\n                    onChange: onchangeBookmark\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: handleClickAddFieldButton,\n                    children: \"投稿\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUViLGVBQWU7Ozs7O3lCQUFHOzhCQUMvRSw4REFBQ1MsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFlBQVk7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxXQUFXLEVBQUMsS0FBSztvQkFBQ0MsUUFBUSxFQUFFWixrQkFBa0I7Ozs7O3lCQUFHOzhCQUN0Riw4REFBQ1EsT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFdBQVc7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxXQUFXLEVBQUMsTUFBTTtvQkFBQ0MsUUFBUSxFQUFFWCxpQkFBaUI7Ozs7O3lCQUFHOzhCQUNyRiw4REFBQ08sT0FBSztvQkFBQ0MsSUFBSSxFQUFDLFVBQVU7b0JBQUNDLElBQUksRUFBQyxNQUFNO29CQUFDQyxXQUFXLEVBQUMsS0FBSztvQkFBQ0MsUUFBUSxFQUFFVixnQkFBZ0I7Ozs7O3lCQUFHOzhCQUNsRiw4REFBQ1csUUFBTTtvQkFBQ0MsT0FBTyxFQUFFWCx5QkFBeUI7OEJBQUUsSUFBRTs7Ozs7eUJBQVM7Ozs7OztpQkFDakQ7Ozs7O2FBWUYsQ0FDUDtDQUNGO0dBM0RLbkIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBNkRYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZTIudHN4P2MyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BcHBiYXIgcG9zaXRpb24gc3RpY2t544Gu44OG44K544OIXG4vL+W+jOOBp+e9ruOBjeaPm+OBiFxuXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgc2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IGRiIGZyb20gXCIuL2ZpcmViYXNlXCJcblxuY29uc3QgUGFnZTI6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKS8vXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3F1ZXN0aW9uZXIsIHNldFF1ZXN0aW9uZXJdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3RpbWVTdGFtcCwgc2V0VGltZVN0YW1wXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtib29rbWFyaywgc2V0Qm9va21hcmtdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qgb25jaGFuZ2VUaXRsZSA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICB9KVxuICBjb25zdCBvbmNoYW5nZUNvbnRlbnQgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSlcbn0pXG5jb25zdCBvbmNoYW5nZVF1ZXN0aW9uZXIgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gIHNldFF1ZXN0aW9uZXIoZS50YXJnZXQudmFsdWUpXG59KVxuY29uc3Qgb25jaGFuZ2VUaW1lU3RhbXAgPSAoKGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+OyB9OyB9KSA9PiB7XG4gIHNldFRpbWVTdGFtcChlLnRhcmdldC52YWx1ZSlcbn0pXG5jb25zdCBvbmNoYW5nZUJvb2ttYXJrID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICBzZXRCb29rbWFyayhlLnRhcmdldC52YWx1ZSlcbn0pXG4gIGNvbnN0IGhhbmRsZUNsaWNrQWRkRmllbGRCdXR0b24gPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YVJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIikvL215ZGF0YVJlZuOBq2Ri44GubXlkYXRh44Kz44Os44Kv44K344On44Oz44KS5oyH5a6aXG4gICAgYXdhaXQgc2V0RG9jKGRvYyh1c2VyRGF0YVJlZiwgKSx7Ly9zZXRkb2Pjga7nrKzkuozlvJXmlbDjgYzjg4njgq3jg6Xjg6Hjg7Pjg4jlkI3jgIHnrKzkuInjga/lhaXjgozjgZ/jgYTjg4fjg7zjgr9cbiAgICAgIDA6e1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgY29udGVudDpjb250ZW50LFxuICAgICAgICBxdWVzdGlvbmVyOnF1ZXN0aW9uZXIsXG4gICAgICAgIHRpbWVTdGFtcDp0aW1lU3RhbXAsXG4gICAgICAgIGJvb2ttYXJrOmJvb2ttYXJrLFxuICAgICAgfSxcbiAgXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2PlxuICAgICAgPGxhYmVsPuaKleeovzwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5ZG96aGMXCIgb25DaGFuZ2U9e29uY2hhbmdlVGl0bGV9Lz5cbiAgICAgIDxpbnB1dCBuYW1lPVwiY29udGVudFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLoqbPntLBcIiBvbkNoYW5nZT17b25jaGFuZ2VDb250ZW50fS8+XG4gICAgICA8aW5wdXQgbmFtZT1cInF1ZXN0aW9uZXJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6LOq5ZWP6ICFXCIgb25DaGFuZ2U9e29uY2hhbmdlUXVlc3Rpb25lcn0vPlxuICAgICAgPGlucHV0IG5hbWU9XCJ0aW1lU3RhbXBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi5oqV56i/5pmC6ZaTXCIgb25DaGFuZ2U9e29uY2hhbmdlVGltZVN0YW1wfS8+XG4gICAgICA8aW5wdXQgbmFtZT1cImJvb2ttYXJrXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuOBhOOBhOOBrVwiIG9uQ2hhbmdlPXtvbmNoYW5nZUJvb2ttYXJrfS8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQWRkRmllbGRCdXR0b259PuaKleeovzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGgxPkhlbGxvIENvZGVTYW5kYm94PC9oMT5cbiAgICAgIDxoMj5TdGFydCBlZGl0aW5nIHRvIHNlZSBzb21lIG1hZ2ljIGhhcHBlbiE8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TmV3czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPiAqL31cbiAgICAgIFxuICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29sbGVjdGlvbiIsImRvYyIsInNldERvYyIsImRiIiwiUGFnZTIiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJxdWVzdGlvbmVyIiwic2V0UXVlc3Rpb25lciIsInRpbWVTdGFtcCIsInNldFRpbWVTdGFtcCIsImJvb2ttYXJrIiwic2V0Qm9va21hcmsiLCJvbmNoYW5nZVRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25jaGFuZ2VDb250ZW50Iiwib25jaGFuZ2VRdWVzdGlvbmVyIiwib25jaGFuZ2VUaW1lU3RhbXAiLCJvbmNoYW5nZUJvb2ttYXJrIiwiaGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbiIsInVzZXJEYXRhUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});