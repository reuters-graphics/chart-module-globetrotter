webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/base/ChartComponent.js":
/*!****************************************!*\
  !*** ./src/lib/base/ChartComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _errorClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorClasses */ \"./src/lib/base/errorClasses.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function () {\n  function ChartComponent(selector) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultProps\", {});\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultData\", []);\n\n    this.selection(selector);\n  }\n  /**\n   * Getter/setter for DOM node chart is drawn into\n   * @param  {String or Element} selector\n   */\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"selection\",\n    value: function selection(selector) {\n      if (!selector) return this._selection;\n\n      if (!(selector instanceof Element) && typeof selector !== 'string') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorSelectorType\"](this.constructor.name);\n      }\n\n      this._selection = _utils_d3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].select(selector);\n      return this;\n    }\n    /**\n     * Default props\n     * @type {Object}\n     */\n\n  }, {\n    key: \"props\",\n\n    /**\n     * Getter/setter for props object\n     * @param  {Object} obj props\n     */\n    value: function props(obj) {\n      if (!obj) return this._props || this.defaultProps;\n\n      if (!(obj instanceof Object)) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorPropsType\"](this.constructor.name);\n      }\n\n      this._props = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(this._props || this.defaultProps, obj);\n      return this;\n    }\n    /**\n     * Default data\n     * @type {Array}\n     */\n\n  }, {\n    key: \"location\",\n\n    /**\n     * Getter/setter for chart location\n     * @param  {Array} arr data\n     */\n    value: function location(arrStringOrNull) {\n      var overrideCentroid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      if (arrStringOrNull === undefined) return this._location === null ? null : this._location || 'singapore';\n      this._overrideCentroid = overrideCentroid;\n\n      if (!(arrStringOrNull instanceof Array) && !(typeof arrStringOrNull === 'string') && arrStringOrNull !== null) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorLocationType\"](this.constructor.name);\n      }\n\n      this._location = arrStringOrNull;\n      return this;\n    }\n    /**\n     * Getter/setter for chart topojson\n     * @param  {Object} obj topology\n     */\n\n  }, {\n    key: \"topojson\",\n    value: function topojson(obj) {\n      if (!obj) return this._topojson || {};\n\n      if (typeof obj !== 'object') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorTopojsonType\"](this.constructor.name);\n      }\n\n      this._topojson = obj;\n      return this;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorDrawMethodUndefined\"](this.constructor.name);\n    }\n  }]);\n\n  return ChartComponent;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Jhc2UvQ2hhcnRDb21wb25lbnQuanM/YzlmNCJdLCJuYW1lcyI6WyJDaGFydENvbXBvbmVudCIsInNlbGVjdG9yIiwic2VsZWN0aW9uIiwiX3NlbGVjdGlvbiIsIkVsZW1lbnQiLCJFcnJvclNlbGVjdG9yVHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImQzIiwic2VsZWN0Iiwib2JqIiwiX3Byb3BzIiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiRXJyb3JQcm9wc1R5cGUiLCJtZXJnZSIsImFyclN0cmluZ09yTnVsbCIsIm92ZXJyaWRlQ2VudHJvaWQiLCJ1bmRlZmluZWQiLCJfbG9jYXRpb24iLCJfb3ZlcnJpZGVDZW50cm9pZCIsIkFycmF5IiwiRXJyb3JMb2NhdGlvblR5cGUiLCJfdG9wb2pzb24iLCJFcnJvclRvcG9qc29uVHlwZSIsIkVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7O0lBRU1BLGM7QUFDSiwwQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLG9IQXVCUCxFQXZCTzs7QUFBQSxtSEE0Q1IsRUE1Q1E7O0FBQ3BCLFNBQUtDLFNBQUwsQ0FBZUQsUUFBZjtBQUNEO0FBRUQ7Ozs7Ozs7OzhCQUlVQSxRLEVBQVU7QUFDbEIsVUFBSSxDQUFDQSxRQUFMLEVBQWUsT0FBTyxLQUFLRSxVQUFaOztBQUVmLFVBQUksRUFBRUYsUUFBUSxZQUFZRyxPQUF0QixLQUFrQyxPQUFPSCxRQUFQLEtBQW9CLFFBQTFELEVBQW9FO0FBQ2xFLGNBQU0sSUFBSUksK0RBQUosQ0FBc0IsS0FBS0MsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUtKLFVBQUwsR0FBa0JLLGlEQUFFLENBQUNDLE1BQUgsQ0FBVVIsUUFBVixDQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTUE7Ozs7MEJBSU1TLEcsRUFBSztBQUNULFVBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sS0FBS0MsTUFBTCxJQUFlLEtBQUtDLFlBQTNCOztBQUVWLFVBQUksRUFBRUYsR0FBRyxZQUFZRyxNQUFqQixDQUFKLEVBQThCO0FBQzVCLGNBQU0sSUFBSUMsNERBQUosQ0FBbUIsS0FBS1IsV0FBTCxDQUFpQkMsSUFBcEMsQ0FBTjtBQUNEOztBQUVELFdBQUtJLE1BQUwsR0FBY0ksbURBQUssQ0FBQyxLQUFLSixNQUFMLElBQWUsS0FBS0MsWUFBckIsRUFBbUNGLEdBQW5DLENBQW5CO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQTs7Ozs2QkFJU00sZSxFQUEwQztBQUFBLFVBQXpCQyxnQkFBeUIsdUVBQU4sSUFBTTtBQUNqRCxVQUFJRCxlQUFlLEtBQUtFLFNBQXhCLEVBQW1DLE9BQU8sS0FBS0MsU0FBTCxLQUFtQixJQUFuQixHQUEwQixJQUExQixHQUFpQyxLQUFLQSxTQUFMLElBQWtCLFdBQTFEO0FBRW5DLFdBQUtDLGlCQUFMLEdBQXlCSCxnQkFBekI7O0FBRUEsVUFDRSxFQUFFRCxlQUFlLFlBQVlLLEtBQTdCLEtBQ0EsRUFBRSxPQUFPTCxlQUFQLEtBQTJCLFFBQTdCLENBREEsSUFFQUEsZUFBZSxLQUFLLElBSHRCLEVBSUU7QUFDQSxjQUFNLElBQUlNLCtEQUFKLENBQXNCLEtBQUtoQixXQUFMLENBQWlCQyxJQUF2QyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS1ksU0FBTCxHQUFpQkgsZUFBakI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OzZCQUlTTixHLEVBQUs7QUFDWixVQUFJLENBQUNBLEdBQUwsRUFBVSxPQUFPLEtBQUthLFNBQUwsSUFBa0IsRUFBekI7O0FBQ1YsVUFBSSxPQUFPYixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0IsY0FBTSxJQUFJYywrREFBSixDQUFzQixLQUFLbEIsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUtnQixTQUFMLEdBQWlCYixHQUFqQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBRU07QUFDTCxZQUFNLElBQUllLHNFQUFKLENBQTZCLEtBQUtuQixXQUFMLENBQWlCQyxJQUE5QyxDQUFOO0FBQ0Q7Ozs7OztBQUdZUCw2RUFBZiIsImZpbGUiOiIuL3NyYy9saWIvYmFzZS9DaGFydENvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCxcbiAgRXJyb3JMb2NhdGlvblR5cGUsXG4gIEVycm9yUHJvcHNUeXBlLFxuICBFcnJvclNlbGVjdG9yVHlwZSxcbiAgRXJyb3JUb3BvanNvblR5cGVcbn0gZnJvbSAnLi9lcnJvckNsYXNzZXMnO1xuXG5pbXBvcnQgZDMgZnJvbSAnLi4vdXRpbHMvZDMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyL3NldHRlciBmb3IgRE9NIG5vZGUgY2hhcnQgaXMgZHJhd24gaW50b1xuICAgKiBAcGFyYW0gIHtTdHJpbmcgb3IgRWxlbWVudH0gc2VsZWN0b3JcbiAgICovXG4gIHNlbGVjdGlvbihzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IpIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG5cbiAgICBpZiAoIShzZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvclNlbGVjdG9yVHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IGQzLnNlbGVjdChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBwcm9wc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgZGVmYXVsdFByb3BzID0ge31cblxuICAvKipcbiAgICogR2V0dGVyL3NldHRlciBmb3IgcHJvcHMgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gb2JqIHByb3BzXG4gICAqL1xuICBwcm9wcyhvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIHRoaXMuX3Byb3BzIHx8IHRoaXMuZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKCEob2JqIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yUHJvcHNUeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJvcHMgPSBtZXJnZSh0aGlzLl9wcm9wcyB8fCB0aGlzLmRlZmF1bHRQcm9wcywgb2JqKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRhdGFcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgZGVmYXVsdERhdGEgPSBbXVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBjaGFydCBsb2NhdGlvblxuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyIGRhdGFcbiAgICovXG4gIGxvY2F0aW9uKGFyclN0cmluZ09yTnVsbCwgb3ZlcnJpZGVDZW50cm9pZCA9IG51bGwpIHtcbiAgICBpZiAoYXJyU3RyaW5nT3JOdWxsID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLl9sb2NhdGlvbiA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9sb2NhdGlvbiB8fCAnc2luZ2Fwb3JlJztcblxuICAgIHRoaXMuX292ZXJyaWRlQ2VudHJvaWQgPSBvdmVycmlkZUNlbnRyb2lkO1xuXG4gICAgaWYgKFxuICAgICAgIShhcnJTdHJpbmdPck51bGwgaW5zdGFuY2VvZiBBcnJheSkgJiZcbiAgICAgICEodHlwZW9mIGFyclN0cmluZ09yTnVsbCA9PT0gJ3N0cmluZycpICYmXG4gICAgICBhcnJTdHJpbmdPck51bGwgIT09IG51bGxcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvckxvY2F0aW9uVHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX2xvY2F0aW9uID0gYXJyU3RyaW5nT3JOdWxsO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHRlci9zZXR0ZXIgZm9yIGNoYXJ0IHRvcG9qc29uXG4gICAqIEBwYXJhbSAge09iamVjdH0gb2JqIHRvcG9sb2d5XG4gICAqL1xuICB0b3BvanNvbihvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIHRoaXMuX3RvcG9qc29uIHx8IHt9O1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yVG9wb2pzb25UeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdG9wb2pzb24gPSBvYmo7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRocm93IG5ldyBFcnJvckRyYXdNZXRob2RVbmRlZmluZWQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/base/ChartComponent.js\n");

/***/ })

})