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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ \"./components/post.tsx\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function() {\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_3__.app);\n    var handleLogout = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(auth);\n                    case 2:\n                        _ctx.next = 4;\n                        return router.push(\"/login\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleLogout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const [posts, setPosts] = useState([])\n    // useEffect(() => {\n    //   const postData = collection(db, \"posts\")\n    //   getDocs(postData).then((snapShot) => {\n    //     console.log(snapShot.docs.map((doc) => ({ ...doc.data( )})))\n    //     setPosts(snapShot.docs.map((doc) => ({ ...doc.data( )})))\n    //   })\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        (ref = auth.currentUser) === null || ref === void 0 ? void 0 : ref.displayName,\n                        \" でログイン中\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                            type: \"submit\",\n                            variant: \"outlined\",\n                            onClick: handleLogout,\n                            children: \"ログアウト\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this),\n                posts.map(function(post) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: post.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ3NDO0FBQ047QUFDZ0I7QUFDVDtBQUNEO0FBQ1E7QUFFSTtBQUdsRCxJQUFNUSxJQUFJLEdBQWEsV0FBTTtRQXNCckJDLEdBQWdCOztJQXBCdEIsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLElBQU1LLElBQUksR0FBR1Asc0RBQU8sQ0FBQ0QsMENBQUcsQ0FBQztJQUN6QixJQUFNVSxZQUFZO21CQUFHLDZPQUFZOzs7OzsrQkFFekJSLHNEQUFPLENBQUNNLElBQUksQ0FBQzs7OytCQUNiQyxNQUFNLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztTQUM1Qjt3QkFKS0QsWUFBWTs7O09BSWpCO0lBQ0QseUNBQXlDO0lBQ3pDLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsT0FBTztJQUVQLFNBQVM7SUFFVCxxQkFDRSw4REFBQ0wsc0RBQU07a0JBQ1AsNEVBQUNPLEtBQUc7OzhCQUNKLDhEQUFDQyxHQUFDOzt3QkFBRUwsQ0FBQUEsR0FBZ0IsR0FBaEJBLElBQUksQ0FBQ00sV0FBVyxjQUFoQk4sR0FBZ0IsV0FBYSxHQUE3QkEsS0FBQUEsQ0FBNkIsR0FBN0JBLEdBQWdCLENBQUVPLFdBQVc7d0JBQUMsU0FBTzs7Ozs7O3lCQUFJOzhCQUUzQyw4REFBQ0gsS0FBRzs7c0NBQ0YsOERBQUNiLHdEQUFJOzs7O2lDQUFHO3NDQUNSLDhEQUFDSyxpREFBTTs0QkFBQ1ksSUFBSSxFQUFDLFFBQVE7NEJBQUNDLE9BQU8sRUFBQyxVQUFVOzRCQUFDQyxPQUFPLEVBQUVSLFlBQVk7c0NBQUUsT0FFOUQ7Ozs7O2lDQUFTOzs7Ozs7eUJBQ1A7Z0JBQ0xTLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztrQ0FDbkIsOERBQUNULEtBQUc7OzBDQUNGLDhEQUFDVSxJQUFFOzBDQUFFRCxJQUFJLENBQUNFLEtBQUs7Ozs7O3FDQUFNOzBDQUNyQiw4REFBQ1YsR0FBQzswQ0FBRVEsSUFBSSxDQUFDRyxJQUFJOzs7OztxQ0FBSzs7Ozs7OzZCQUNkO2lCQUNQLENBQUM7Ozs7OztpQkFDRTs7Ozs7YUFDRyxDQUNUO0NBQ0g7R0F2Q0tqQixJQUFJOztRQUVPSixrREFBUzs7O0FBRnBCSSxLQUFBQSxJQUFJO0FBeUNWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0XCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi9maXJlYmFzZVwiXG5pbXBvcnQgeyBnZXRBdXRoLCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuL2ZpcmViYXNlXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlcj8uZW1haWwpXG4gICAgYXdhaXQgc2lnbk91dChhdXRoKVxuICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gIH1cbiAgLy8gY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBwb3N0RGF0YSA9IGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIilcbiAgLy8gICBnZXREb2NzKHBvc3REYXRhKS50aGVuKChzbmFwU2hvdCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coc25hcFNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoICl9KSkpXG4gIC8vICAgICBzZXRQb3N0cyhzbmFwU2hvdC5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSggKX0pKSlcbiAgLy8gICB9KVxuXG4gIC8vIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8ZGl2PlxuICAgIDxwPnthdXRoLmN1cnJlbnRVc2VyPy5kaXNwbGF5TmFtZX0g44Gn44Ot44Kw44Kk44Oz5LitPC9wPlxuICAgICAgey8qIDxwPnthdXRoLmN1cnJlbnRVc2VyLmVtYWlsfeOBp+ODreOCsOOCpOODs+S4rTwvcD4gKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8UG9zdCAvPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxuICAgICAgICAgICAg44Ot44Kw44Ki44Km44OIXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57cG9zdC50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUG9zdCIsImFwcCIsImdldEF1dGgiLCJzaWduT3V0IiwidXNlUm91dGVyIiwiQnV0dG9uIiwiTGF5b3V0IiwiUmVhY3QiLCJIb21lIiwiYXV0aCIsInJvdXRlciIsImhhbmRsZUxvZ291dCIsInB1c2giLCJkaXYiLCJwIiwiY3VycmVudFVzZXIiLCJkaXNwbGF5TmFtZSIsInR5cGUiLCJ2YXJpYW50Iiwib25DbGljayIsInBvc3RzIiwibWFwIiwicG9zdCIsImgxIiwidGl0bGUiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});