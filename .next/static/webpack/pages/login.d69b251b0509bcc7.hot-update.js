"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Login = function() {\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_5__.app);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(auth), 1), user = ref[0];\n    var isLoggedIn = !!user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();\n    var handleLogin = function() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.browserSessionPersistence).then(function() {\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithRedirect)(auth, provider);\n        });\n        router.push(\"/\");\n    };\n    // const { user } = useAuthContext()\n    // const isLoggedIn = !!user\n    // const router = useRouter()\n    // const auth = getAuth(app)\n    // const [email, setEmail] = useState(\"\")\n    // const [password, setPassword] = useState(\"\")\n    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    //   e.preventDefault()\n    //   await setPersistence(auth, browserSessionPersistence)\n    //   .then(() => {\n    //     return signInWithEmailAndPassword(auth, email, password);\n    //   })\n    //   .catch((error) => {\n    //     const errorCode = error.code;\n    //     const errorMessage = error.message;\n    //   });\n    //   router.push(\"/\")\n    // }\n    // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {\n    //   setEmail(e.currentTarget.value)\n    // }\n    // const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {\n    //   setPassword(e.currentTarget.value)\n    // }\n    var handleClose = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_tmizu_Desktop_info_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return router.push(\"/\");\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleClose() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Snackbar, {\n                open: isLoggedIn,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                },\n                autoHideDuration: 3000,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Alert, {\n                    onClose: handleClose,\n                    severity: \"warning\",\n                    children: \"すでにログインしています\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            }, \"top\" + \"center\", false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Snackbar, {\n                open: !isLoggedIn,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                },\n                autoHideDuration: 3000,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Alert, {\n                    severity: \"warning\",\n                    children: \"ログインしてください\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this)\n            }, \"top\" + \"center\", false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"ログイン\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                variant: \"outlined\",\n                onClick: handleLogin,\n                children: \"ログイン\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Login, \"jWE7Q3tLOfdFb5gKagwjY4G79Sk=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgSW5wdXRMYWJlbCwgU25hY2tiYXIsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgc2lnbkluV2l0aFJlZGlyZWN0LCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgZ2V0SWRUb2tlbiwgc2V0UGVyc2lzdGVuY2UsIGJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvQXV0aENvbnRleHRcIlxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG4gIGNvbnN0IFsgdXNlciBdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIXVzZXJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgIHNldFBlcnNpc3RlbmNlKGF1dGgsIGJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICBcbiAgICAgIHJldHVybiBzaWduSW5XaXRoUmVkaXJlY3QoYXV0aCwgcHJvdmlkZXIpO1xuICAgIH0pXG4gICAgcm91dGVyLnB1c2goJy8nKTtcbiAgfVxuICAvLyBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KClcbiAgLy8gY29uc3QgaXNMb2dnZWRJbiA9ICEhdXNlclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAvLyBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG4gIC8vIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgLy8gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICBhd2FpdCBzZXRQZXJzaXN0ZW5jZShhdXRoLCBicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlKVxuICAvLyAgIC50aGVuKCgpID0+IHtcbiAgICAgXG4gIC8vICAgICByZXR1cm4gc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcbiAgLy8gICB9KVxuICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIFxuICAvLyAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gIC8vICAgfSk7XG4gICAgXG4gIC8vICAgcm91dGVyLnB1c2goXCIvXCIpXG4gIC8vIH1cbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlRW1haWwgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgLy8gICBzZXRFbWFpbChlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIC8vIH1cbiAgLy8gY29uc3QgaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgLy8gICBzZXRQYXNzd29yZChlLmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gIC8vIH1cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcm91dGVyLnB1c2goXCIvXCIpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXtpc0xvZ2dlZElufVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MzAwMH1cbiAgICAgICAga2V5PXtcInRvcFwiICsgXCJjZW50ZXJcIn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAg44GZ44Gn44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44GZXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1NuYWNrYmFyPiBcbiAgICAgIDxTbmFja2JhclxuICAgICAgICBvcGVuPXshaXNMb2dnZWRJbn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIGtleT17XCJ0b3BcIiArIFwiY2VudGVyXCJ9XG4gICAgICA+XG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cIndhcm5pbmdcIj7jg63jgrDjgqTjg7PjgZfjgabjgY/jgaDjgZXjgYQ8L0FsZXJ0PlxuICAgICAgPC9TbmFja2Jhcj5cblxuICAgICAgPGgyPuODreOCsOOCpOODszwvaDI+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkFsZXJ0IiwiQnV0dG9uIiwiU25hY2tiYXIiLCJnZXRBdXRoIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2V0UGVyc2lzdGVuY2UiLCJicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwiYXBwIiwidXNlQXV0aFN0YXRlIiwiTG9naW4iLCJhdXRoIiwidXNlciIsImlzTG9nZ2VkSW4iLCJyb3V0ZXIiLCJwcm92aWRlciIsImhhbmRsZUxvZ2luIiwidGhlbiIsInB1c2giLCJoYW5kbGVDbG9zZSIsImRpdiIsIm9wZW4iLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsInNldmVyaXR5IiwiaDIiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});