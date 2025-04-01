"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-aria+focus@3.20.1_react-dom@19.1.0_react@19.1.0__react@19.1.0";
exports.ids = ["vendor-chunks/@react-aria+focus@3.20.1_react-dom@19.1.0_react@19.1.0__react@19.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-aria+focus@3.20.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/focus/dist/useFocusRing.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-aria+focus@3.20.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/focus/dist/useFocusRing.mjs ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useFocusRing: () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f)\n/* harmony export */ });\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/./node_modules/.pnpm/@react-aria+interactions@3.24.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/interactions/dist/useFocusVisible.mjs\");\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/./node_modules/.pnpm/@react-aria+interactions@3.24.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/interactions/dist/useFocus.mjs\");\n/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/interactions */ \"(ssr)/./node_modules/.pnpm/@react-aria+interactions@3.24.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/interactions/dist/useFocusWithin.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n\n\nfunction $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {\n    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;\n    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        isFocused: false,\n        isFocusVisible: autoFocus || (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.isFocusVisible)()\n    });\n    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.current.isFocused && state.current.isFocusVisible);\n    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);\n    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isFocused)=>{\n        state.current.isFocused = isFocused;\n        setFocused(isFocused);\n        updateState();\n    }, [\n        updateState\n    ]);\n    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.useFocusVisibleListener)((isFocusVisible)=>{\n        state.current.isFocusVisible = isFocusVisible;\n        updateState();\n    }, [], {\n        isTextInput: isTextInput\n    });\n    let { focusProps: focusProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)({\n        isDisabled: within,\n        onFocusChange: onFocusChange\n    });\n    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_3__.useFocusWithin)({\n        isDisabled: !within,\n        onFocusWithinChange: onFocusChange\n    });\n    return {\n        isFocused: isFocused,\n        isFocusVisible: isFocusVisibleState,\n        focusProps: within ? focusWithinProps : focusProps\n    };\n}\n\n\n\n//# sourceMappingURL=useFocusRing.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LWFyaWErZm9jdXNAMy4yMC4xX3JlYWN0LWRvbUAxOS4xLjBfcmVhY3RAMTkuMS4wX19yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL0ByZWFjdC1hcmlhL2ZvY3VzL2Rpc3QvdXNlRm9jdXNSaW5nLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrTjtBQUNwRzs7OztBQUk5Ryw2REFBNkQ7QUFDN0QsVUFBVSx5RUFBeUU7QUFDbkYsb0JBQW9CLHlDQUFhO0FBQ2pDO0FBQ0EseUNBQXlDLG9FQUFxQjtBQUM5RCxLQUFLO0FBQ0wsc0NBQXNDLDJDQUFlO0FBQ3JELHFEQUFxRCwyQ0FBZTtBQUNwRSwwQkFBMEIsOENBQWtCO0FBQzVDLDRCQUE0Qiw4Q0FBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLDZFQUE4QjtBQUN0QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLFVBQVUseUJBQXlCLE1BQU0sOERBQWU7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxVQUFVLHFDQUFxQyxNQUFNLG9FQUFxQjtBQUMxRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR21FO0FBQ25FIiwic291cmNlcyI6WyIvaG9tZS9wYWdhaTgvd3d3L3BhY2thZ2VzL2RhcnRvLWRvY3Mvbm9kZV9tb2R1bGVzLy5wbnBtL0ByZWFjdC1hcmlhK2ZvY3VzQDMuMjAuMV9yZWFjdC1kb21AMTkuMS4wX3JlYWN0QDE5LjEuMF9fcmVhY3RAMTkuMS4wL25vZGVfbW9kdWxlcy9AcmVhY3QtYXJpYS9mb2N1cy9kaXN0L3VzZUZvY3VzUmluZy5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0ZvY3VzVmlzaWJsZSBhcyAkaXNXRTUkaXNGb2N1c1Zpc2libGUsIHVzZUZvY3VzVmlzaWJsZUxpc3RlbmVyIGFzICRpc1dFNSR1c2VGb2N1c1Zpc2libGVMaXN0ZW5lciwgdXNlRm9jdXMgYXMgJGlzV0U1JHVzZUZvY3VzLCB1c2VGb2N1c1dpdGhpbiBhcyAkaXNXRTUkdXNlRm9jdXNXaXRoaW59IGZyb20gXCJAcmVhY3QtYXJpYS9pbnRlcmFjdGlvbnNcIjtcbmltcG9ydCB7dXNlUmVmIGFzICRpc1dFNSR1c2VSZWYsIHVzZVN0YXRlIGFzICRpc1dFNSR1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgYXMgJGlzV0U1JHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uICRmN2RjZWZmYzVhZDc3NjhiJGV4cG9ydCQ0ZTMyOGY2MWM1Mzg2ODdmKHByb3BzID0ge30pIHtcbiAgICBsZXQgeyBhdXRvRm9jdXM6IGF1dG9Gb2N1cyA9IGZhbHNlLCBpc1RleHRJbnB1dDogaXNUZXh0SW5wdXQsIHdpdGhpbjogd2l0aGluIH0gPSBwcm9wcztcbiAgICBsZXQgc3RhdGUgPSAoMCwgJGlzV0U1JHVzZVJlZikoe1xuICAgICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzVmlzaWJsZTogYXV0b0ZvY3VzIHx8ICgwLCAkaXNXRTUkaXNGb2N1c1Zpc2libGUpKClcbiAgICB9KTtcbiAgICBsZXQgW2lzRm9jdXNlZCwgc2V0Rm9jdXNlZF0gPSAoMCwgJGlzV0U1JHVzZVN0YXRlKShmYWxzZSk7XG4gICAgbGV0IFtpc0ZvY3VzVmlzaWJsZVN0YXRlLCBzZXRGb2N1c1Zpc2libGVdID0gKDAsICRpc1dFNSR1c2VTdGF0ZSkoKCk9PnN0YXRlLmN1cnJlbnQuaXNGb2N1c2VkICYmIHN0YXRlLmN1cnJlbnQuaXNGb2N1c1Zpc2libGUpO1xuICAgIGxldCB1cGRhdGVTdGF0ZSA9ICgwLCAkaXNXRTUkdXNlQ2FsbGJhY2spKCgpPT5zZXRGb2N1c1Zpc2libGUoc3RhdGUuY3VycmVudC5pc0ZvY3VzZWQgJiYgc3RhdGUuY3VycmVudC5pc0ZvY3VzVmlzaWJsZSksIFtdKTtcbiAgICBsZXQgb25Gb2N1c0NoYW5nZSA9ICgwLCAkaXNXRTUkdXNlQ2FsbGJhY2spKChpc0ZvY3VzZWQpPT57XG4gICAgICAgIHN0YXRlLmN1cnJlbnQuaXNGb2N1c2VkID0gaXNGb2N1c2VkO1xuICAgICAgICBzZXRGb2N1c2VkKGlzRm9jdXNlZCk7XG4gICAgICAgIHVwZGF0ZVN0YXRlKCk7XG4gICAgfSwgW1xuICAgICAgICB1cGRhdGVTdGF0ZVxuICAgIF0pO1xuICAgICgwLCAkaXNXRTUkdXNlRm9jdXNWaXNpYmxlTGlzdGVuZXIpKChpc0ZvY3VzVmlzaWJsZSk9PntcbiAgICAgICAgc3RhdGUuY3VycmVudC5pc0ZvY3VzVmlzaWJsZSA9IGlzRm9jdXNWaXNpYmxlO1xuICAgICAgICB1cGRhdGVTdGF0ZSgpO1xuICAgIH0sIFtdLCB7XG4gICAgICAgIGlzVGV4dElucHV0OiBpc1RleHRJbnB1dFxuICAgIH0pO1xuICAgIGxldCB7IGZvY3VzUHJvcHM6IGZvY3VzUHJvcHMgfSA9ICgwLCAkaXNXRTUkdXNlRm9jdXMpKHtcbiAgICAgICAgaXNEaXNhYmxlZDogd2l0aGluLFxuICAgICAgICBvbkZvY3VzQ2hhbmdlOiBvbkZvY3VzQ2hhbmdlXG4gICAgfSk7XG4gICAgbGV0IHsgZm9jdXNXaXRoaW5Qcm9wczogZm9jdXNXaXRoaW5Qcm9wcyB9ID0gKDAsICRpc1dFNSR1c2VGb2N1c1dpdGhpbikoe1xuICAgICAgICBpc0Rpc2FibGVkOiAhd2l0aGluLFxuICAgICAgICBvbkZvY3VzV2l0aGluQ2hhbmdlOiBvbkZvY3VzQ2hhbmdlXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWQsXG4gICAgICAgIGlzRm9jdXNWaXNpYmxlOiBpc0ZvY3VzVmlzaWJsZVN0YXRlLFxuICAgICAgICBmb2N1c1Byb3BzOiB3aXRoaW4gPyBmb2N1c1dpdGhpblByb3BzIDogZm9jdXNQcm9wc1xuICAgIH07XG59XG5cblxuZXhwb3J0IHskZjdkY2VmZmM1YWQ3NzY4YiRleHBvcnQkNGUzMjhmNjFjNTM4Njg3ZiBhcyB1c2VGb2N1c1Jpbmd9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlRm9jdXNSaW5nLm1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-aria+focus@3.20.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@react-aria/focus/dist/useFocusRing.mjs\n");

/***/ })

};
;