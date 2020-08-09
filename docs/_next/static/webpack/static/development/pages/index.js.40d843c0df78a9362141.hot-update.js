webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/base/ChartComponent.js":
/*!****************************************!*\
  !*** ./src/lib/base/ChartComponent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _errorClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorClasses */ \"./src/lib/base/errorClasses.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/merge */ \"./node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function () {\n  function ChartComponent(selector) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultProps\", {});\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"defaultData\", []);\n\n    this.selection(selector);\n  }\n  /**\n   * Getter/setter for DOM node chart is drawn into\n   * @param  {String or Element} selector\n   */\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"selection\",\n    value: function selection(selector) {\n      if (!selector) return this._selection;\n\n      if (!(selector instanceof Element) && typeof selector !== 'string') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorSelectorType\"](this.constructor.name);\n      }\n\n      this._selection = _utils_d3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].select(selector);\n      return this;\n    }\n    /**\n     * Default props\n     * @type {Object}\n     */\n\n  }, {\n    key: \"props\",\n\n    /**\n     * Getter/setter for props object\n     * @param  {Object} obj props\n     */\n    value: function props(obj) {\n      if (!obj) return this._props || this.defaultProps;\n\n      if (!(obj instanceof Object)) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorPropsType\"](this.constructor.name);\n      }\n\n      this._props = lodash_merge__WEBPACK_IMPORTED_MODULE_5___default()(this._props || this.defaultProps, obj);\n      return this;\n    }\n    /**\n     * Default data\n     * @type {Array}\n     */\n\n  }, {\n    key: \"location\",\n\n    /**\n     * Getter/setter for chart location\n     * @param  {Array} arr data\n     */\n    value: function location(arrOrString) {\n      var overrideCentroid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      if (!arrOrString) return this._location || 'singapore';\n      this._overrideCentroid = overrideCentroid;\n\n      if (!(arrOrString instanceof Array) && !(typeof arrOrString === 'string')) {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorLocationType\"](this.constructor.name);\n      }\n\n      this._location = arrOrString;\n      return this;\n    }\n    /**\n     * Getter/setter for chart topojson\n     * @param  {Object} obj topology\n     */\n\n  }, {\n    key: \"topojson\",\n    value: function topojson(obj) {\n      if (!obj) return this._topojson || {};\n\n      if (typeof obj !== 'object') {\n        throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorTopojsonType\"](this.constructor.name);\n      }\n\n      this._topojson = obj;\n      return this;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      throw new _errorClasses__WEBPACK_IMPORTED_MODULE_3__[\"ErrorDrawMethodUndefined\"](this.constructor.name);\n    }\n  }]);\n\n  return ChartComponent;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2Jhc2UvQ2hhcnRDb21wb25lbnQuanM/YzlmNCJdLCJuYW1lcyI6WyJDaGFydENvbXBvbmVudCIsInNlbGVjdG9yIiwic2VsZWN0aW9uIiwiX3NlbGVjdGlvbiIsIkVsZW1lbnQiLCJFcnJvclNlbGVjdG9yVHlwZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImQzIiwic2VsZWN0Iiwib2JqIiwiX3Byb3BzIiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiRXJyb3JQcm9wc1R5cGUiLCJtZXJnZSIsImFyck9yU3RyaW5nIiwib3ZlcnJpZGVDZW50cm9pZCIsIl9sb2NhdGlvbiIsIl9vdmVycmlkZUNlbnRyb2lkIiwiQXJyYXkiLCJFcnJvckxvY2F0aW9uVHlwZSIsIl90b3BvanNvbiIsIkVycm9yVG9wb2pzb25UeXBlIiwiRXJyb3JEcmF3TWV0aG9kVW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTs7SUFFTUEsYztBQUNKLDBCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEsb0hBdUJQLEVBdkJPOztBQUFBLG1IQTRDUixFQTVDUTs7QUFDcEIsU0FBS0MsU0FBTCxDQUFlRCxRQUFmO0FBQ0Q7QUFFRDs7Ozs7Ozs7OEJBSVVBLFEsRUFBVTtBQUNsQixVQUFJLENBQUNBLFFBQUwsRUFBZSxPQUFPLEtBQUtFLFVBQVo7O0FBRWYsVUFBSSxFQUFFRixRQUFRLFlBQVlHLE9BQXRCLEtBQWtDLE9BQU9ILFFBQVAsS0FBb0IsUUFBMUQsRUFBb0U7QUFDbEUsY0FBTSxJQUFJSSwrREFBSixDQUFzQixLQUFLQyxXQUFMLENBQWlCQyxJQUF2QyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS0osVUFBTCxHQUFrQkssaURBQUUsQ0FBQ0MsTUFBSCxDQUFVUixRQUFWLENBQWxCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQTs7OzswQkFJTVMsRyxFQUFLO0FBQ1QsVUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBTyxLQUFLQyxNQUFMLElBQWUsS0FBS0MsWUFBM0I7O0FBRVYsVUFBSSxFQUFFRixHQUFHLFlBQVlHLE1BQWpCLENBQUosRUFBOEI7QUFDNUIsY0FBTSxJQUFJQyw0REFBSixDQUFtQixLQUFLUixXQUFMLENBQWlCQyxJQUFwQyxDQUFOO0FBQ0Q7O0FBRUQsV0FBS0ksTUFBTCxHQUFjSSxtREFBSyxDQUFDLEtBQUtKLE1BQUwsSUFBZSxLQUFLQyxZQUFyQixFQUFtQ0YsR0FBbkMsQ0FBbkI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1BOzs7OzZCQUlTTSxXLEVBQXNDO0FBQUEsVUFBekJDLGdCQUF5Qix1RUFBTixJQUFNO0FBQzdDLFVBQUksQ0FBQ0QsV0FBTCxFQUFrQixPQUFPLEtBQUtFLFNBQUwsSUFBa0IsV0FBekI7QUFFbEIsV0FBS0MsaUJBQUwsR0FBeUJGLGdCQUF6Qjs7QUFFQSxVQUFJLEVBQUVELFdBQVcsWUFBWUksS0FBekIsS0FBbUMsRUFBRSxPQUFPSixXQUFQLEtBQXVCLFFBQXpCLENBQXZDLEVBQTJFO0FBQ3pFLGNBQU0sSUFBSUssK0RBQUosQ0FBc0IsS0FBS2YsV0FBTCxDQUFpQkMsSUFBdkMsQ0FBTjtBQUNEOztBQUVELFdBQUtXLFNBQUwsR0FBaUJGLFdBQWpCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs2QkFJU04sRyxFQUFLO0FBQ1osVUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBTyxLQUFLWSxTQUFMLElBQWtCLEVBQXpCOztBQUNWLFVBQUksT0FBT1osR0FBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQzNCLGNBQU0sSUFBSWEsK0RBQUosQ0FBc0IsS0FBS2pCLFdBQUwsQ0FBaUJDLElBQXZDLENBQU47QUFDRDs7QUFFRCxXQUFLZSxTQUFMLEdBQWlCWixHQUFqQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7MkJBRU07QUFDTCxZQUFNLElBQUljLHNFQUFKLENBQTZCLEtBQUtsQixXQUFMLENBQWlCQyxJQUE5QyxDQUFOO0FBQ0Q7Ozs7OztBQUdZUCw2RUFBZiIsImZpbGUiOiIuL3NyYy9saWIvYmFzZS9DaGFydENvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVycm9yRHJhd01ldGhvZFVuZGVmaW5lZCxcbiAgRXJyb3JMb2NhdGlvblR5cGUsXG4gIEVycm9yUHJvcHNUeXBlLFxuICBFcnJvclNlbGVjdG9yVHlwZSxcbiAgRXJyb3JUb3BvanNvblR5cGVcbn0gZnJvbSAnLi9lcnJvckNsYXNzZXMnO1xuXG5pbXBvcnQgZDMgZnJvbSAnLi4vdXRpbHMvZDMnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLnNlbGVjdGlvbihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyL3NldHRlciBmb3IgRE9NIG5vZGUgY2hhcnQgaXMgZHJhd24gaW50b1xuICAgKiBAcGFyYW0gIHtTdHJpbmcgb3IgRWxlbWVudH0gc2VsZWN0b3JcbiAgICovXG4gIHNlbGVjdGlvbihzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IpIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG5cbiAgICBpZiAoIShzZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvclNlbGVjdG9yVHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IGQzLnNlbGVjdChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCBwcm9wc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgZGVmYXVsdFByb3BzID0ge31cblxuICAvKipcbiAgICogR2V0dGVyL3NldHRlciBmb3IgcHJvcHMgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gb2JqIHByb3BzXG4gICAqL1xuICBwcm9wcyhvYmopIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIHRoaXMuX3Byb3BzIHx8IHRoaXMuZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKCEob2JqIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yUHJvcHNUeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcHJvcHMgPSBtZXJnZSh0aGlzLl9wcm9wcyB8fCB0aGlzLmRlZmF1bHRQcm9wcywgb2JqKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGRhdGFcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgZGVmYXVsdERhdGEgPSBbXVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBjaGFydCBsb2NhdGlvblxuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyIGRhdGFcbiAgICovXG4gIGxvY2F0aW9uKGFyck9yU3RyaW5nLCBvdmVycmlkZUNlbnRyb2lkID0gbnVsbCkge1xuICAgIGlmICghYXJyT3JTdHJpbmcpIHJldHVybiB0aGlzLl9sb2NhdGlvbiB8fCAnc2luZ2Fwb3JlJztcblxuICAgIHRoaXMuX292ZXJyaWRlQ2VudHJvaWQgPSBvdmVycmlkZUNlbnRyb2lkO1xuXG4gICAgaWYgKCEoYXJyT3JTdHJpbmcgaW5zdGFuY2VvZiBBcnJheSkgJiYgISh0eXBlb2YgYXJyT3JTdHJpbmcgPT09ICdzdHJpbmcnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yTG9jYXRpb25UeXBlKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9jYXRpb24gPSBhcnJPclN0cmluZztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIvc2V0dGVyIGZvciBjaGFydCB0b3BvanNvblxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9iaiB0b3BvbG9neVxuICAgKi9cbiAgdG9wb2pzb24ob2JqKSB7XG4gICAgaWYgKCFvYmopIHJldHVybiB0aGlzLl90b3BvanNvbiB8fCB7fTtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvclRvcG9qc29uVHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3RvcG9qc29uID0gb2JqO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3JEcmF3TWV0aG9kVW5kZWZpbmVkKHRoaXMuY29uc3RydWN0b3IubmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/base/ChartComponent.js\n");

/***/ })

})