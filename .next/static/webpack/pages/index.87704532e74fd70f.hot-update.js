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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ \"./components/post.tsx\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function() {\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n    var handleLogout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(auth);\n                    case 2:\n                        _ctx.next = 4;\n                        return router.push(\"/login\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                (ref = auth.currentUser) === null || ref === void 0 ? void 0 : ref.email,\n                                \"でログイン中\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            onClick: handleLogout,\n                            children: \"ログアウト\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNzQztBQUVOO0FBQ2dCO0FBQ1Q7QUFDRDtBQUNRO0FBRTlDLElBQU1PLElBQUksR0FBYSxXQUFNO1FBZ0JuQkMsR0FBZ0I7O0lBZHhCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNSSxJQUFJLEdBQUdOLHNEQUFPLENBQUNELDBDQUFHLENBQUM7SUFDekIsSUFBTVMsWUFBWTttQkFBRyw2T0FBWTs7Ozs7K0JBQ3pCUCxzREFBTyxDQUFDSyxJQUFJLENBQUM7OzsrQkFDYkMsTUFBTSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7U0FDNUI7d0JBSEtELFlBQVk7OztPQUdqQjtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO2tCQUNGLDRFQUFDTixzREFBTTs7OEJBQ1AsOERBQUNNLEtBQUc7OEJBQ0YsNEVBQUNaLHdEQUFJOzs7OzZCQUFHOzs7Ozt5QkFDSjs4QkFDTiw4REFBQ1ksS0FBRzs7c0NBQ0osOERBQUNDLEdBQUM7O2dDQUFFTCxDQUFBQSxHQUFnQixHQUFoQkEsSUFBSSxDQUFDTSxXQUFXLGNBQWhCTixHQUFnQixXQUFPLEdBQXZCQSxLQUFBQSxDQUF1QixHQUF2QkEsR0FBZ0IsQ0FBRU8sS0FBSztnQ0FBQyxRQUFNOzs7Ozs7aUNBQUk7c0NBQ3BDLDhEQUFDVixpREFBTTs0QkFBQ1csSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxVQUFVOzRCQUFDQyxPQUFPLEVBQUVSLFlBQVk7c0NBQUUsT0FFOUQ7Ozs7O2lDQUFTOzs7Ozs7eUJBQ1A7Ozs7OztpQkFDRzs7Ozs7YUFDTCxDQUNOO0NBQ0g7R0F4QktILElBQUk7O1FBRU9ILGtEQUFTOzs7QUFGcEJHLEtBQUFBLElBQUk7QUEwQlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RcIjtcblxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2lnbk91dChhdXRoKVxuICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFBvc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxwPnthdXRoLmN1cnJlbnRVc2VyPy5lbWFpbH3jgafjg63jgrDjgqTjg7PkuK08L3A+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XG4gICAgICAgICAgICDjg63jgrDjgqLjgqbjg4hcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlBvc3QiLCJhcHAiLCJnZXRBdXRoIiwic2lnbk91dCIsInVzZVJvdXRlciIsIkJ1dHRvbiIsIkxheW91dCIsIkhvbWUiLCJhdXRoIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsImRpdiIsInAiLCJjdXJyZW50VXNlciIsImVtYWlsIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});