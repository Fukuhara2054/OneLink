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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase */ \"./pages/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Login = function() {\n    _s();\n    var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_4__.app);\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(auth), 1), user = ref[0];\n    // const isLoggedIn = !!user\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const [error, setError] = useState('');\n    var provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    var handleLogin = function() {\n        // e.preventDefault()\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.setPersistence)(auth, firebase_auth__WEBPACK_IMPORTED_MODULE_3__.browserSessionPersistence).then(function() {\n            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithRedirect)(auth, provider);\n        });\n        router.push(\"/\");\n    };\n    // const { user } = useAuthContext()\n    // const isLoggedIn = !!user\n    // const router = useRouter()\n    // const auth = getAuth(app)\n    // const [email, setEmail] = useState(\"\")\n    // const [password, setPassword] = useState(\"\")\n    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {\n    //   e.preventDefault()\n    //   await setPersistence(auth, browserSessionPersistence)\n    //   .then(() => {\n    //     return signInWithEmailAndPassword(auth, email, password);\n    //   })\n    //   .catch((error) => {\n    //     const errorCode = error.code;\n    //     const errorMessage = error.message;\n    //   });\n    //   router.push(\"/\")\n    // }\n    // const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {\n    //   setEmail(e.currentTarget.value)\n    // }\n    // const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {\n    //   setPassword(e.currentTarget.value)\n    // }\n    // const handleClose = async () => {\n    //   await router.push(\"/\")\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Snackbar, {\n                open: isLoggedIn,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                },\n                autoHideDuration: 3000,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Alert, {\n                    onClose: handleClose,\n                    severity: \"warning\",\n                    children: \"すでにログインしています\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this)\n            }, \"top\" + \"center\", false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Snackbar, {\n                open: !isLoggedIn,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                },\n                autoHideDuration: 3000,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Alert, {\n                    severity: \"warning\",\n                    children: \"ログインしてください\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, \"top\" + \"center\", false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"ログイン\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 82,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                variant: \"outlined\",\n                onClick: handleLogin,\n                children: \"ログイン\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tmizu\\\\Desktop\\\\info\\\\pages\\\\login.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this);\n};\n_s(Login, \"jWE7Q3tLOfdFb5gKagwjY4G79Sk=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBdUM7QUFDQTtBQUNZO0FBRTJCO0FBRWlGO0FBRS9IO0FBQ3NCO0FBRXRELElBQU1ZLEtBQUssR0FBRyxXQUFNOztJQUNsQixJQUFNQyxJQUFJLEdBQUdQLHNEQUFPLENBQUNJLDBDQUFHLENBQUM7SUFDekIsSUFBaUJDLEdBQWtCLG9GQUFsQkEsdUVBQVksQ0FBQ0UsSUFBSSxDQUFDLE1BQTNCQyxJQUFJLEdBQUtILEdBQWtCLEdBQXZCO0lBQ1osNEJBQTRCO0lBQzVCLElBQU1JLE1BQU0sR0FBR2Qsc0RBQVMsRUFBRTtJQUMxQiwwQ0FBMEM7SUFDMUMsSUFBTWUsUUFBUSxHQUFHLElBQUlkLDZEQUFrQixFQUFFO0lBQ3pDLElBQU1lLFdBQVcsR0FBRyxXQUFNO1FBQ3hCLHFCQUFxQjtRQUNyQlQsNkRBQWMsQ0FBQ0ssSUFBSSxFQUFFSixvRUFBeUIsQ0FBQyxDQUM5Q1MsSUFBSSxDQUFDLFdBQU07WUFFVixPQUFPWCxpRUFBa0IsQ0FBQ00sSUFBSSxFQUFFRyxRQUFRLENBQUMsQ0FBQztTQUMzQyxDQUFDO1FBQ0ZELE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0Qsb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QywrQ0FBK0M7SUFDL0Msd0VBQXdFO0lBQ3hFLHVCQUF1QjtJQUN2QiwwREFBMEQ7SUFDMUQsa0JBQWtCO0lBRWxCLGdFQUFnRTtJQUNoRSxPQUFPO0lBQ1Asd0JBQXdCO0lBRXhCLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsUUFBUTtJQUVSLHFCQUFxQjtJQUNyQixJQUFJO0lBQ0osMEVBQTBFO0lBQzFFLG9DQUFvQztJQUNwQyxJQUFJO0lBQ0osNkVBQTZFO0lBQzdFLHVDQUF1QztJQUN2QyxJQUFJO0lBQ0osb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQixJQUFJO0lBRUoscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUVGLDhEQUFDZixtREFBUTtnQkFDUGdCLElBQUksRUFBRUMsVUFBVTtnQkFDaEJDLFlBQVksRUFBRTtvQkFBRUMsUUFBUSxFQUFFLEtBQUs7b0JBQUVDLFVBQVUsRUFBRSxRQUFRO2lCQUFFO2dCQUN2REMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFFdEJDLE9BQU8sRUFBRUMsV0FBVzswQkFFcEIsNEVBQUN6QixnREFBSztvQkFBQ3dCLE9BQU8sRUFBRUMsV0FBVztvQkFBRUMsUUFBUSxFQUFDLFNBQVM7OEJBQUMsY0FFaEQ7Ozs7O3lCQUFRO2VBTEgsS0FBSyxHQUFHLFFBQVE7Ozs7cUJBTVo7MEJBQ1gsOERBQUN4QixtREFBUTtnQkFDUGdCLElBQUksRUFBRSxDQUFDQyxVQUFVO2dCQUNqQkMsWUFBWSxFQUFFO29CQUFFQyxRQUFRLEVBQUUsS0FBSztvQkFBRUMsVUFBVSxFQUFFLFFBQVE7aUJBQUU7Z0JBQ3ZEQyxnQkFBZ0IsRUFBRSxJQUFJOzBCQUd0Qiw0RUFBQ3ZCLGdEQUFLO29CQUFDMEIsUUFBUSxFQUFDLFNBQVM7OEJBQUMsWUFBVTs7Ozs7eUJBQVE7ZUFGdkMsS0FBSyxHQUFHLFFBQVE7Ozs7cUJBR1o7MEJBRWpCLDhEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Ozs7O3FCQUFLOzBCQUdILDhEQUFDMUIsaURBQU07Z0JBQUMyQixPQUFPLEVBQUMsVUFBVTtnQkFBQ0MsT0FBTyxFQUFFZixXQUFXOzBCQUFFLE1BRW5EOzs7OztxQkFBUzs7Ozs7O2FBRVAsQ0FDUDtDQUNGO0dBL0VLTCxLQUFLOztRQUVRRCxtRUFBWTtRQUVkVixrREFBUzs7O0FBSnBCVyxLQUFBQSxLQUFLO0FBa0ZYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgSW5wdXRMYWJlbCwgU25hY2tiYXIsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgc2lnbkluV2l0aFJlZGlyZWN0LCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgZ2V0SWRUb2tlbiwgc2V0UGVyc2lzdGVuY2UsIGJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQvQXV0aENvbnRleHRcIlxuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnXG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApXG4gIGNvbnN0IFsgdXNlciBdID0gdXNlQXV0aFN0YXRlKGF1dGgpXG4gIC8vIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIXVzZXJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRQZXJzaXN0ZW5jZShhdXRoLCBicm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgXG4gICAgICByZXR1cm4gc2lnbkluV2l0aFJlZGlyZWN0KGF1dGgsIHByb3ZpZGVyKTtcbiAgICB9KVxuICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gIH1cbiAgLy8gY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoQ29udGV4dCgpXG4gIC8vIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIXVzZXJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuICAvLyBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIC8vICAgYXdhaXQgc2V0UGVyc2lzdGVuY2UoYXV0aCwgYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSlcbiAgLy8gICAudGhlbigoKSA9PiB7XG4gICAgIFxuICAvLyAgICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gIC8vICAgfSlcbiAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBcbiAgLy8gICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gIC8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAvLyAgIH0pO1xuICAgIFxuICAvLyAgIHJvdXRlci5wdXNoKFwiL1wiKVxuICAvLyB9XG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZUVtYWlsID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gIC8vICAgc2V0RW1haWwoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAvLyB9XG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gIC8vICAgc2V0UGFzc3dvcmQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAvLyB9XG4gIC8vIGNvbnN0IGhhbmRsZUNsb3NlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgXG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17aXNMb2dnZWRJbn1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIGtleT17XCJ0b3BcIiArIFwiY2VudGVyXCJ9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgICAgICAgIOOBmeOBp+OBq+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBmVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9TbmFja2Jhcj4gXG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17IWlzTG9nZ2VkSW59XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICBrZXk9e1widG9wXCIgKyBcImNlbnRlclwifVxuICAgICAgPlxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+44Ot44Kw44Kk44Oz44GX44Gm44GP44Gg44GV44GEPC9BbGVydD5cbiAgICAgIDwvU25hY2tiYXI+XG5cbjxoMj7jg63jgrDjgqTjg7M8L2gyPlxuICAgICAgXG4gICAgICBcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgICDjg63jgrDjgqTjg7NcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiQWxlcnQiLCJCdXR0b24iLCJTbmFja2JhciIsImdldEF1dGgiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzZXRQZXJzaXN0ZW5jZSIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJhcHAiLCJ1c2VBdXRoU3RhdGUiLCJMb2dpbiIsImF1dGgiLCJ1c2VyIiwicm91dGVyIiwicHJvdmlkZXIiLCJoYW5kbGVMb2dpbiIsInRoZW4iLCJwdXNoIiwiZGl2Iiwib3BlbiIsImlzTG9nZ2VkSW4iLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsImhhbmRsZUNsb3NlIiwic2V2ZXJpdHkiLCJoMiIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});