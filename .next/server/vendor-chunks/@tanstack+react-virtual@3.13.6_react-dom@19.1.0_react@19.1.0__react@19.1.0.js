"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@tanstack+react-virtual@3.13.6_react-dom@19.1.0_react@19.1.0__react@19.1.0";
exports.ids = ["vendor-chunks/@tanstack+react-virtual@3.13.6_react-dom@19.1.0_react@19.1.0__react@19.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@tanstack+react-virtual@3.13.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@tanstack/react-virtual/dist/esm/index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tanstack+react-virtual@3.13.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@tanstack/react-virtual/dist/esm/index.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Virtualizer: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.Virtualizer),\n/* harmony export */   approxEqual: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.approxEqual),\n/* harmony export */   debounce: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.debounce),\n/* harmony export */   defaultKeyExtractor: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.defaultKeyExtractor),\n/* harmony export */   defaultRangeExtractor: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.defaultRangeExtractor),\n/* harmony export */   elementScroll: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.elementScroll),\n/* harmony export */   measureElement: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.measureElement),\n/* harmony export */   memo: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.memo),\n/* harmony export */   notUndefined: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.notUndefined),\n/* harmony export */   observeElementOffset: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementOffset),\n/* harmony export */   observeElementRect: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementRect),\n/* harmony export */   observeWindowOffset: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowOffset),\n/* harmony export */   observeWindowRect: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowRect),\n/* harmony export */   useVirtualizer: () => (/* binding */ useVirtualizer),\n/* harmony export */   useWindowVirtualizer: () => (/* binding */ useWindowVirtualizer),\n/* harmony export */   windowScroll: () => (/* reexport safe */ _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.windowScroll)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/virtual-core */ \"(ssr)/./node_modules/.pnpm/@tanstack+virtual-core@3.13.6/node_modules/@tanstack/virtual-core/dist/esm/index.js\");\n\n\n\n\nconst useIsomorphicLayoutEffect = typeof document !== \"undefined\" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\nfunction useVirtualizerBase(options) {\n  const rerender = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(() => ({}), {})[1];\n  const resolvedOptions = {\n    ...options,\n    onChange: (instance2, sync) => {\n      var _a;\n      if (sync) {\n        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(rerender);\n      } else {\n        rerender();\n      }\n      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);\n    }\n  };\n  const [instance] = react__WEBPACK_IMPORTED_MODULE_0__.useState(\n    () => new _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.Virtualizer(resolvedOptions)\n  );\n  instance.setOptions(resolvedOptions);\n  useIsomorphicLayoutEffect(() => {\n    return instance._didMount();\n  }, []);\n  useIsomorphicLayoutEffect(() => {\n    return instance._willUpdate();\n  });\n  return instance;\n}\nfunction useVirtualizer(options) {\n  return useVirtualizerBase({\n    observeElementRect: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementRect,\n    observeElementOffset: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeElementOffset,\n    scrollToFn: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.elementScroll,\n    ...options\n  });\n}\nfunction useWindowVirtualizer(options) {\n  return useVirtualizerBase({\n    getScrollElement: () => typeof document !== \"undefined\" ? window : null,\n    observeElementRect: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowRect,\n    observeElementOffset: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.observeWindowOffset,\n    scrollToFn: _tanstack_virtual_core__WEBPACK_IMPORTED_MODULE_2__.windowScroll,\n    initialOffset: () => typeof document !== \"undefined\" ? window.scrollY : 0,\n    ...options\n  });\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXZpcnR1YWxAMy4xMy42X3JlYWN0LWRvbUAxOS4xLjBfcmVhY3RAMTkuMS4wX19yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC12aXJ0dWFsL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTztBQUM4SDtBQUM3SDtBQUN2QyxvRUFBb0Usa0RBQXFCLEdBQUcsNENBQWU7QUFDM0c7QUFDQSxtQkFBbUIsNkNBQWdCLFVBQVUsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUztBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBYztBQUNuQyxjQUFjLCtEQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLGdCQUFnQixpRUFBYTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBaUI7QUFDekMsMEJBQTBCLHVFQUFtQjtBQUM3QyxnQkFBZ0IsZ0VBQVk7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUlFO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL3BhZ2FpOC93d3cvcGFja2FnZXMvZGFydG8tZG9jcy9ub2RlX21vZHVsZXMvLnBucG0vQHRhbnN0YWNrK3JlYWN0LXZpcnR1YWxAMy4xMy42X3JlYWN0LWRvbUAxOS4xLjBfcmVhY3RAMTkuMS4wX19yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL0B0YW5zdGFjay9yZWFjdC12aXJ0dWFsL2Rpc3QvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmx1c2hTeW5jIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgVmlydHVhbGl6ZXIsIGVsZW1lbnRTY3JvbGwsIG9ic2VydmVFbGVtZW50T2Zmc2V0LCBvYnNlcnZlRWxlbWVudFJlY3QsIHdpbmRvd1Njcm9sbCwgb2JzZXJ2ZVdpbmRvd09mZnNldCwgb2JzZXJ2ZVdpbmRvd1JlY3QgfSBmcm9tIFwiQHRhbnN0YWNrL3ZpcnR1YWwtY29yZVwiO1xuZXhwb3J0ICogZnJvbSBcIkB0YW5zdGFjay92aXJ0dWFsLWNvcmVcIjtcbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG5mdW5jdGlvbiB1c2VWaXJ0dWFsaXplckJhc2Uob3B0aW9ucykge1xuICBjb25zdCByZXJlbmRlciA9IFJlYWN0LnVzZVJlZHVjZXIoKCkgPT4gKHt9KSwge30pWzFdO1xuICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBvbkNoYW5nZTogKGluc3RhbmNlMiwgc3luYykgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgZmx1c2hTeW5jKHJlcmVuZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgICB9XG4gICAgICAoX2EgPSBvcHRpb25zLm9uQ2hhbmdlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCBpbnN0YW5jZTIsIHN5bmMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW2luc3RhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgICgpID0+IG5ldyBWaXJ0dWFsaXplcihyZXNvbHZlZE9wdGlvbnMpXG4gICk7XG4gIGluc3RhbmNlLnNldE9wdGlvbnMocmVzb2x2ZWRPcHRpb25zKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGluc3RhbmNlLl9kaWRNb3VudCgpO1xuICB9LCBbXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBpbnN0YW5jZS5fd2lsbFVwZGF0ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gdXNlVmlydHVhbGl6ZXIob3B0aW9ucykge1xuICByZXR1cm4gdXNlVmlydHVhbGl6ZXJCYXNlKHtcbiAgICBvYnNlcnZlRWxlbWVudFJlY3QsXG4gICAgb2JzZXJ2ZUVsZW1lbnRPZmZzZXQsXG4gICAgc2Nyb2xsVG9GbjogZWxlbWVudFNjcm9sbCxcbiAgICAuLi5vcHRpb25zXG4gIH0pO1xufVxuZnVuY3Rpb24gdXNlV2luZG93VmlydHVhbGl6ZXIob3B0aW9ucykge1xuICByZXR1cm4gdXNlVmlydHVhbGl6ZXJCYXNlKHtcbiAgICBnZXRTY3JvbGxFbGVtZW50OiAoKSA9PiB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiBudWxsLFxuICAgIG9ic2VydmVFbGVtZW50UmVjdDogb2JzZXJ2ZVdpbmRvd1JlY3QsXG4gICAgb2JzZXJ2ZUVsZW1lbnRPZmZzZXQ6IG9ic2VydmVXaW5kb3dPZmZzZXQsXG4gICAgc2Nyb2xsVG9Gbjogd2luZG93U2Nyb2xsLFxuICAgIGluaXRpYWxPZmZzZXQ6ICgpID0+IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5zY3JvbGxZIDogMCxcbiAgICAuLi5vcHRpb25zXG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgdXNlVmlydHVhbGl6ZXIsXG4gIHVzZVdpbmRvd1ZpcnR1YWxpemVyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@tanstack+react-virtual@3.13.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@tanstack/react-virtual/dist/esm/index.js\n");

/***/ })

};
;