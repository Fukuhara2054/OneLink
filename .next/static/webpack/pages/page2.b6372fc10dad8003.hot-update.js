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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Page2 = function() {\n    _s();\n    var ref //\n     = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), title = ref[0], setTitle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), content = ref1[0], setContent = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), questioner = ref2[0], setQuestioner = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), timeStamp = ref3[0], setTimeStamp = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), bookmark = ref4[0], setBookmark = ref4[1];\n    var onchangeTitle = function(e) {\n        setTitle(e.target.value);\n    };\n    var onchangeContent = function(e) {\n        setContent(e.target.value);\n    };\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDataRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(userDataRef, \"postDoc\"), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: questioner,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello CodeSandbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Start editing to see some magic happen!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                    position: \"sticky\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                variant: \"h6\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                color: \"inherit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Page2, \"WOtazc53U0O0Y1KXZP4QT9oxHYU=\");\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0QkFBNEI7QUFDNUIsUUFBUTtBQUVSOzs7OztBQUNtRDtBQUNpQjtBQUNQO0FBQ2xDO0FBRTNCLElBQU1VLEtBQUssR0FBYSxXQUFNOztJQUM1QixJQUEwQlQsR0FBWSxHQUFFO09BQWRBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CVSxLQUFLLEdBQWNWLEdBQVksR0FBMUIsRUFBRVcsUUFBUSxHQUFJWCxHQUFZLEdBQWhCO0lBQ3BCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DWSxPQUFPLEdBQWdCWixJQUFZLEdBQTVCLEVBQUVhLFVBQVUsR0FBSWIsSUFBWSxHQUFoQjtJQUMxQixJQUFvQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6Q2MsVUFBVSxHQUFtQmQsSUFBWSxHQUEvQixFQUFFZSxhQUFhLEdBQUlmLElBQVksR0FBaEI7SUFDaEMsSUFBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNnQixTQUFTLEdBQWtCaEIsSUFBWSxHQUE5QixFQUFFaUIsWUFBWSxHQUFJakIsSUFBWSxHQUFoQjtJQUM5QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFyQ2tCLFFBQVEsR0FBaUJsQixJQUFZLEdBQTdCLEVBQUVtQixXQUFXLEdBQUluQixJQUFZLEdBQWhCO0lBQzVCLElBQU1vQixhQUFhLEdBQUksU0FBQ0MsQ0FBa0QsRUFBSztRQUM3RVYsUUFBUSxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0tBQzNCO0lBQ0QsSUFBTUMsZUFBZSxHQUFJLFNBQUNILENBQWtELEVBQUs7UUFDL0VSLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztLQUM3QjtJQUNDLElBQU1FLHlCQUF5QjttQkFBRyw2T0FBVztnQkFDckNDLFdBQVc7Ozs7d0JBQVhBLFdBQVcsR0FBR3JCLDhEQUFVLENBQUNHLGlEQUFFLEVBQUUsT0FBTyxDQUFDLCtCQUE4Qjt3QkFBOUI7OytCQUNyQ0QsMERBQU0sQ0FBQ0QsdURBQUcsQ0FBQ29CLFdBQVcsRUFBQyxTQUFTLENBQUMsRUFBQztBQUN0Qyw2QkFBQyxFQUFDO2dDQUNBaEIsS0FBSyxFQUFDQSxLQUFLO2dDQUNYRSxPQUFPLEVBQUNBLE9BQU87Z0NBQ2ZFLFVBQVUsRUFBQ0EsVUFBVTtnQ0FDckJFLFNBQVMsRUFBQ0EsU0FBUztnQ0FDbkJFLFFBQVEsRUFBQ0EsUUFBUTs2QkFDbEI7eUJBRUYsQ0FBQzs7Ozs7O1NBQ0g7d0JBWktPLHlCQUF5Qjs7O09BWTlCO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7OzBCQUNsQiw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ0MsSUFBRTswQkFBQyx5Q0FBdUM7Ozs7O3FCQUFLOzBCQUNoRCw4REFBQ0gsS0FBRzswQkFDRiw0RUFBQzFCLGlEQUFNO29CQUFDOEIsUUFBUSxFQUFDLFFBQVE7OEJBQ3ZCLDRFQUFDN0Isa0RBQU87OzBDQUNOLDhEQUFDQyxxREFBVTtnQ0FBQzZCLE9BQU8sRUFBQyxJQUFJOzBDQUFDLE1BQUk7Ozs7O3FDQUFhOzBDQUMxQyw4REFBQzVCLGlEQUFNO2dDQUFDNkIsS0FBSyxFQUFDLFNBQVM7MENBQUMsT0FBSzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDOUI7Ozs7O3lCQUNIOzs7OztxQkFFTDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBeENLeEIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBMENYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZTIudHN4P2MyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9BcHBiYXIgcG9zaXRpb24gc3RpY2t544Gu44OG44K544OIXG4vL+W+jOOBp+e9ruOBjeaPm+OBiFxuXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4vZmlyZWJhc2VcIlxuXG5jb25zdCBQYWdlMjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpLy9cbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcXVlc3Rpb25lciwgc2V0UXVlc3Rpb25lcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbdGltZVN0YW1wLCBzZXRUaW1lU3RhbXBdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2Jvb2ttYXJrLCBzZXRCb29rbWFya10gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBvbmNoYW5nZVRpdGxlID0gKChlOiB7IHRhcmdldDogeyB2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPjsgfTsgfSkgPT4ge1xuICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpXG4gIH0pXG4gIGNvbnN0IG9uY2hhbmdlQ29udGVudCA9ICgoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHtcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKVxufSlcbiAgY29uc3QgaGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbiA9IGFzeW5jKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1c2Vyc1wiKS8vbXlkYXRhUmVm44GrZGLjga5teWRhdGHjgrPjg6zjgq/jgrfjg6fjg7PjgpLmjIflrppcbiAgICBhd2FpdCBzZXREb2MoZG9jKHVzZXJEYXRhUmVmLFwicG9zdERvY1wiKSx7Ly9zZXRkb2Pjga7nrKzkuozlvJXmlbDjgYzjg4njgq3jg6Xjg6Hjg7Pjg4jlkI3jgIHnrKzkuInjga/lhaXjgozjgZ/jgYTjg4fjg7zjgr9cbiAgICAgIDA6e1xuICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgY29udGVudDpjb250ZW50LFxuICAgICAgICBxdWVzdGlvbmVyOnF1ZXN0aW9uZXIsXG4gICAgICAgIHRpbWVTdGFtcDp0aW1lU3RhbXAsXG4gICAgICAgIGJvb2ttYXJrOmJvb2ttYXJrLFxuICAgICAgfSxcbiAgXG4gICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8aDE+SGVsbG8gQ29kZVNhbmRib3g8L2gxPlxuICAgICAgPGgyPlN0YXJ0IGVkaXRpbmcgdG8gc2VlIHNvbWUgbWFnaWMgaGFwcGVuITwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RpY2t5XCI+XG4gICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5OZXdzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2UyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0RG9jIiwiZGIiLCJQYWdlMiIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInF1ZXN0aW9uZXIiLCJzZXRRdWVzdGlvbmVyIiwidGltZVN0YW1wIiwic2V0VGltZVN0YW1wIiwiYm9va21hcmsiLCJzZXRCb29rbWFyayIsIm9uY2hhbmdlVGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbmNoYW5nZUNvbnRlbnQiLCJoYW5kbGVDbGlja0FkZEZpZWxkQnV0dG9uIiwidXNlckRhdGFSZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwicG9zaXRpb24iLCJ2YXJpYW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});