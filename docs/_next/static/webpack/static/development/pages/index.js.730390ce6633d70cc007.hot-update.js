webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/base/ChartComponent.js":
/*!****************************************!*\
  !*** ./src/lib/base/ChartComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _errorClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorClasses */ \"./src/lib/base/errorClasses.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function () {\n  function ChartComponent(selector, props, data) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultProps\", {});\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultData\", []);\n\n    this.selection(selector);\n    this.props(props);\n    this.data(data);\n  }\n  /**\n   * Getter/setter for DOM node chart is drawn into\n   * @param  {String or Element} selector\n   */\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"selection\",\n    value: function selection(selector) {\n      if (!selector) return this._selection;\n\n      if (!(selector instanceof Element) && typeof selector !== 'string') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorSelectorType\"](this.constructor.name);\n      }\n\n      this._selection = _utils_d3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].select(selector);\n      return this;\n    }\n    /**\n     * Default props\n     * @type {Object}\n     */\n\n  }, {\n    key: \"props\",\n\n    /**\n     * Getter/setter for props object\n     * @param  {Object} obj props\n     */\n    value: function props(obj) {\n      if (!obj) return this._props || this.defaultProps;\n\n      if (!(obj instanceof Object)) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorPropsType\"](this.constructor.name);\n      }\n\n      this._props = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(this._props || this.defaultProps, obj);\n      return this;\n    }\n    /**\n     * Default data\n     * @type {Array}\n     */\n\n  }, {\n    key: \"data\",\n\n    /**\n     * Getter/setter for chart data\n     * @param  {Array} arr data\n     */\n    value: function data(arr) {\n      if (!arr) return this._data || this.defaultData;\n\n      if (!(arr instanceof Array)) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorDataType\"](this.constructor.name);\n      }\n\n      this._data = arr;\n      return this;\n    }\n    /**\n     * Getter/setter for chart topojson\n     * @param  {Object} obj topology\n     */\n\n  }, {\n    key: \"topojson\",\n    value: function topojson(obj) {\n      if (!obj) return this._topojson || {};\n\n      if (typeof obj !== 'object' || obj === null) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorTopojsonType\"](this.constructor.name);\n      }\n\n      this._topojson = obj;\n      return this;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorDrawMethodUndefined\"](this.constructor.name);\n    }\n  }]);\n\n  return ChartComponent;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Jhc2UvQ2hhcnRDb21wb25lbnQuanM/YzlmNCJdLCJuYW1lcyI6WyJDaGFydENvbXBvbmVudCIsInNlbGVjdG9yIiwicHJvcHMiLCJkYXRhIiwic2VsZWN0aW9uIiwiX3NlbGVjdGlvbiIsIkVsZW1lbnQiLCJFcnJvclNlbGVjdG9yVHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImQzIiwic2VsZWN0Iiwib2JqIiwiX3Byb3BzIiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiRXJyb3JQcm9wc1R5cGUiLCJtZXJnZSIsImFyciIsIl9kYXRhIiwiZGVmYXVsdERhdGEiLCJBcnJheSIsIkVycm9yRGF0YVR5cGUiLCJfdG9wb2pzb24iLCJFcnJvclRvcG9qc29uVHlwZSIsIkVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7O0lBRU1BLGM7QUFDSiwwQkFBWUMsUUFBWixFQUFzQkMsS0FBdEIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQUE7O0FBQUEsb0hBeUJwQixFQXpCb0I7O0FBQUEsbUhBOENyQixFQTlDcUI7O0FBQ2pDLFNBQUtDLFNBQUwsQ0FBZUgsUUFBZjtBQUNBLFNBQUtDLEtBQUwsQ0FBV0EsS0FBWDtBQUNBLFNBQUtDLElBQUwsQ0FBVUEsSUFBVjtBQUNEO0FBRUQ7Ozs7Ozs7OzhCQUlVRixRLEVBQVU7QUFDbEIsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxLQUFLSSxVQUFaOztBQUVmLFVBQUksRUFBRUosUUFBUSxZQUFZSyxPQUF0QixLQUFrQyxPQUFPTCxRQUFQLEtBQW9CLFFBQTFELEVBQW9FO0FBQ2xFLGNBQU0sSUFBSU0sK0RBQUosQ0FBc0IsS0FBS0MsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUtKLFVBQUwsR0FBa0JLLGlEQUFFLENBQUNDLE1BQUgsQ0FBVVYsUUFBVixDQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUE7Ozs7MEJBSU1XLEcsRUFBSztBQUNULFVBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sS0FBS0MsTUFBTCxJQUFlLEtBQUtDLFlBQTNCOztBQUVWLFVBQUksRUFBRUYsR0FBRyxZQUFZRyxNQUFqQixDQUFKLEVBQThCO0FBQzVCLGNBQU0sSUFBSUMsNERBQUosQ0FBbUIsS0FBS1IsV0FBTCxDQUFpQkMsSUFBcEMsQ0FBTjtBQUNEOztBQUVELFdBQUtJLE1BQUwsR0FBY0ksbURBQUssQ0FBQyxLQUFLSixNQUFMLElBQWUsS0FBS0MsWUFBckIsRUFBbUNGLEdBQW5DLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQTs7Ozt5QkFJS00sRyxFQUFLO0FBQ1IsVUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBTyxLQUFLQyxLQUFMLElBQWMsS0FBS0MsV0FBMUI7O0FBRVYsVUFBSSxFQUFFRixHQUFHLFlBQVlHLEtBQWpCLENBQUosRUFBNkI7QUFDM0IsY0FBTSxJQUFJQywyREFBSixDQUFrQixLQUFLZCxXQUFMLENBQWlCQyxJQUFuQyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS1UsS0FBTCxHQUFhRCxHQUFiO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs2QkFJU04sRyxFQUFLO0FBQ1osVUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBTyxLQUFLVyxTQUFMLElBQWtCLEVBQXpCOztBQUVWLFVBQUksT0FBT1gsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLEdBQUcsS0FBSyxJQUF2QyxFQUE2QztBQUMzQyxjQUFNLElBQUlZLCtEQUFKLENBQXNCLEtBQUtoQixXQUFMLENBQWlCQyxJQUF2QyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS2MsU0FBTCxHQUFpQlgsR0FBakI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzJCQUVNO0FBQ0wsWUFBTSxJQUFJYSxzRUFBSixDQUE2QixLQUFLakIsV0FBTCxDQUFpQkMsSUFBOUMsQ0FBTjtBQUNEOzs7Ozs7QUFHWVQsNkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2Jhc2UvQ2hhcnRDb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFcnJvckRhdGFUeXBlLFxuICBFcnJvckRyYXdNZXRob2RVbmRlZmluZWQsXG4gIEVycm9yUHJvcHNUeXBlLFxuICBFcnJvclNlbGVjdG9yVHlwZSxcbiAgRXJyb3JUb3BvanNvblR5cGVcbn0gZnJvbSAnLi9lcnJvckNsYXNzZXMnO1xuXG5pbXBvcnQgZDMgZnJvbSAnLi4vdXRpbHMvZDMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHByb3BzLCBkYXRhKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0b3IpO1xuICAgIHRoaXMucHJvcHMocHJvcHMpO1xuICAgIHRoaXMuZGF0YShkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBET00gbm9kZSBjaGFydCBpcyBkcmF3biBpbnRvXG4gICAqIEBwYXJhbSAge1N0cmluZyBvciBFbGVtZW50fSBzZWxlY3RvclxuICAgKi9cbiAgc2VsZWN0aW9uKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbjtcblxuICAgIGlmICghKHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yU2VsZWN0b3JUeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0aW9uID0gZDMuc2VsZWN0KHNlbGVjdG9yKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IHByb3BzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBkZWZhdWx0UHJvcHMgPSB7fVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBwcm9wcyBvYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvYmogcHJvcHNcbiAgICovXG4gIHByb3BzKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gdGhpcy5fcHJvcHMgfHwgdGhpcy5kZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoIShvYmogaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JQcm9wc1R5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9wcyA9IG1lcmdlKHRoaXMuX3Byb3BzIHx8IHRoaXMuZGVmYXVsdFByb3BzLCBvYmopO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZGF0YVxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBkZWZhdWx0RGF0YSA9IFtdXG5cbiAgLyoqXG4gICAqIEdldHRlci9zZXR0ZXIgZm9yIGNoYXJ0IGRhdGFcbiAgICogQHBhcmFtICB7QXJyYXl9IGFyciBkYXRhXG4gICAqL1xuICBkYXRhKGFycikge1xuICAgIGlmICghYXJyKSByZXR1cm4gdGhpcy5fZGF0YSB8fCB0aGlzLmRlZmF1bHREYXRhO1xuXG4gICAgaWYgKCEoYXJyIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JEYXRhVHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEgPSBhcnI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyL3NldHRlciBmb3IgY2hhcnQgdG9wb2pzb25cbiAgICogQHBhcmFtICB7T2JqZWN0fSBvYmogdG9wb2xvZ3lcbiAgICovXG4gIHRvcG9qc29uKG9iaikge1xuICAgIGlmICghb2JqKSByZXR1cm4gdGhpcy5fdG9wb2pzb24gfHwge307XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3JUb3BvanNvblR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b3BvanNvbiA9IG9iajtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/base/ChartComponent.js\n");

/***/ })

})