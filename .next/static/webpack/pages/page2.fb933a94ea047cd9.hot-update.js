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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n//Appbar position stickyのテスト\n//後で置き換え\n\n\nvar _this = undefined;\n\n\n\nvar Page2 = function() {\n    var handleClickAddFieldButton = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userDataRef;\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        userDataRef = collection(db, \"users\") //mydataRefにdbのmydataコレクションを指定\n                        ;\n                        _ctx.next = 3;\n                        return setDoc(doc(userDataRef, \"postDoc\"), {\n                            0: {\n                                title: title,\n                                content: content,\n                                questioner: questioner,\n                                timeStamp: timeStamp,\n                                bookmark: bookmark\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClickAddFieldButton() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Hello CodeSandbox\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Start editing to see some magic happen!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AppBar, {\n                    position: \"sticky\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                variant: \"h6\",\n                                children: \"News\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                color: \"inherit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\page2.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = Page2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page2);\nvar _c;\n$RefreshReg$(_c, \"Page2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYWdlMi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNEJBQTRCO0FBQzVCLFFBQVE7QUFFUjs7OztBQUMwQjtBQUMwQztBQUVwRSxJQUFNSyxLQUFLLEdBQWEsV0FBTTtJQUM1QixJQUFNQyx5QkFBeUI7bUJBQUcsNk9BQVc7Z0JBQ3JDQyxXQUFXOzs7O3dCQUFYQSxXQUFXLEdBQUdDLFVBQVUsQ0FBQ0MsRUFBRSxFQUFFLE9BQU8sQ0FBQywrQkFBOEI7d0JBQTlCOzsrQkFDckNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDSixXQUFXLEVBQUMsU0FBUyxDQUFDLEVBQUM7QUFDdEMsNkJBQUMsRUFBQztnQ0FDQUssS0FBSyxFQUFDQSxLQUFLO2dDQUNYQyxPQUFPLEVBQUNBLE9BQU87Z0NBQ2ZDLFVBQVUsRUFBQ0EsVUFBVTtnQ0FDckJDLFNBQVMsRUFBQ0EsU0FBUztnQ0FDbkJDLFFBQVEsRUFBQ0EsUUFBUTs2QkFDbEI7eUJBRUYsQ0FBQzs7Ozs7O1NBQ0g7d0JBWktWLHlCQUF5Qjs7O09BWTlCO0lBQ0QscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7OzBCQUNsQiw4REFBQ0MsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O3FCQUFLOzBCQUMxQiw4REFBQ0MsSUFBRTswQkFBQyx5Q0FBdUM7Ozs7O3FCQUFLOzBCQUNoRCw4REFBQ0gsS0FBRzswQkFDRiw0RUFBQ2hCLGlEQUFNO29CQUFDb0IsUUFBUSxFQUFDLFFBQVE7OEJBQ3ZCLDRFQUFDbkIsa0RBQU87OzBDQUNOLDhEQUFDQyxxREFBVTtnQ0FBQ21CLE9BQU8sRUFBQyxJQUFJOzBDQUFDLE1BQUk7Ozs7O3FDQUFhOzBDQUMxQyw4REFBQ2xCLGlEQUFNO2dDQUFDbUIsS0FBSyxFQUFDLFNBQVM7MENBQUMsT0FBSzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDOUI7Ozs7O3lCQUNIOzs7OztxQkFFTDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBN0JLbEIsS0FBQUEsS0FBSztBQStCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhZ2UyLnRzeD9jMmM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vQXBwYmFyIHBvc2l0aW9uIHN0aWNreeOBruODhuOCueODiFxuLy/lvozjgafnva7jgY3mj5vjgYhcblxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcHBCYXIsIFRvb2xiYXIsIFR5cG9ncmFwaHksIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5jb25zdCBQYWdlMjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrQWRkRmllbGRCdXR0b24gPSBhc3luYygpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YVJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIikvL215ZGF0YVJlZuOBq2Ri44GubXlkYXRh44Kz44Os44Kv44K344On44Oz44KS5oyH5a6aXG4gICAgYXdhaXQgc2V0RG9jKGRvYyh1c2VyRGF0YVJlZixcInBvc3REb2NcIiksey8vc2V0ZG9j44Gu56ys5LqM5byV5pWw44GM44OJ44Kt44Ol44Oh44Oz44OI5ZCN44CB56ys5LiJ44Gv5YWl44KM44Gf44GE44OH44O844K/XG4gICAgICAwOntcbiAgICAgICAgdGl0bGU6dGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6Y29udGVudCxcbiAgICAgICAgcXVlc3Rpb25lcjpxdWVzdGlvbmVyLFxuICAgICAgICB0aW1lU3RhbXA6dGltZVN0YW1wLFxuICAgICAgICBib29rbWFyazpib29rbWFyayxcbiAgICAgIH0sXG4gIFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGgxPkhlbGxvIENvZGVTYW5kYm94PC9oMT5cbiAgICAgIDxoMj5TdGFydCBlZGl0aW5nIHRvIHNlZSBzb21lIG1hZ2ljIGhhcHBlbiE8L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0aWNreVwiPlxuICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TmV3czwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlMjsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIlBhZ2UyIiwiaGFuZGxlQ2xpY2tBZGRGaWVsZEJ1dHRvbiIsInVzZXJEYXRhUmVmIiwiY29sbGVjdGlvbiIsImRiIiwic2V0RG9jIiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwicXVlc3Rpb25lciIsInRpbWVTdGFtcCIsImJvb2ttYXJrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsInBvc2l0aW9uIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/page2.tsx\n"));

/***/ })

});