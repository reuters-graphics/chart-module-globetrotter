webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jmac/Scripts/chart-module-globetrotter/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: '',\n      location: {\n        value: [139.6503, 35.6762],\n        type: 'point'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).props({\n        fill: _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__[\"base\"].blue.hex\n      }).draw(); // Use it again.\n\n      setTimeout(function () {\n        _this2.chart.props({\n          location: {\n            value: 'africa',\n            type: 'region'\n          }\n        }).draw();\n      }, 2500); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.selection(this.chartContainer.current).props({\n        location: this.state.location\n      }).draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"options\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 9\n        }\n      }, __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'HKG',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }\n      }, \"Hong Kong\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'USA',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      }, \"USA\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'DE',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, \"Germany\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'europe',\n              type: 'region'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }\n      }, \"Europe\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: [139.6503, 35.6762],\n              type: 'point'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }\n      }, \"Tokyo\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'LBN',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }\n      }, \"Lebanon\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'GIF',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }\n      }, \"Gibberish\")));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ2hhcnQiLCJkZWJvdW5jZSIsImNoYXJ0IiwiZHJhdyIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsInByb3BzIiwiZmlsbCIsImJhc2UiLCJibHVlIiwiaGV4Iiwic2V0VGltZW91dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFdBQUssRUFBRSxFQUREO0FBRU5DLGNBQVEsRUFBRTtBQUFFQyxhQUFLLEVBQUUsQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUFUO0FBQThCQyxZQUFJLEVBQUU7QUFBcEM7QUFGSixLOzt5TkFLU0MsNENBQUssQ0FBQ0MsU0FBTixFOztnTkFHVCxJQUFJQyxxREFBSixFOztpTkFHQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQUUsWUFBS0MsS0FBTCxDQUFXQyxJQUFYO0FBQW9CLEtBQTdCLEVBQStCLEdBQS9CLEM7Ozs7Ozs7d0NBRUc7QUFBQTs7QUFDbEI7QUFDQSxXQUFLRCxLQUFMLENBQ0dFLFNBREgsQ0FDYSxLQUFLQyxjQUFMLENBQW9CQyxPQURqQyxFQUVHQyxLQUZILENBRVM7QUFBRUMsWUFBSSxFQUFFQyxvRkFBSSxDQUFDQyxJQUFMLENBQVVDO0FBQWxCLE9BRlQsRUFHR1IsSUFISCxHQUZrQixDQU9sQjs7QUFDQVMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSSxDQUFDVixLQUFMLENB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LFFBQUwsQ0FBYztBQUFFdkIsb0JBQVEsRUFBRTtBQUFFQyxtQkFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGtCQUFJLEVBQUU7QUFBdEI7QUFBWixXQUFkLENBQU47QUFBQSxTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGLEVBeUJFO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDcUIsUUFBTCxDQUFjO0FBQUV2QixvQkFBUSxFQUFFO0FBQUVDLG1CQUFLLEVBQUUsS0FBVDtBQUFnQkMsa0JBQUksRUFBRTtBQUF0QjtBQUFaLFdBQWQsQ0FBTjtBQUFBLFNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6QkYsQ0FIRixDQURGO0FBcUNEOzs7O0VBdkYwQkMsNENBQUssQ0FBQ3FCLFM7O0FBMEZwQjFCLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2RlbW8vQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSAnLi4vbGliL2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydENvbnRhaW5lciBmcm9tICcuL2Z1cm5pdHVyZS9DaGFydENvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL3N0eWxlLWNvbG9yL2Rpc3QvY2F0ZWdvcmljYWwnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6ICcnLFxuICAgIGxvY2F0aW9uOiB7IHZhbHVlOiBbMTM5LjY1MDMsIDM1LjY3NjJdLCB0eXBlOiAncG9pbnQnIH0sXG4gIH07XG5cbiAgY2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMuY2hhcnQuZHJhdygpOyB9LCAyNTApO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLnByb3BzKHsgZmlsbDogYmFzZS5ibHVlLmhleCB9KVxuICAgICAgLmRyYXcoKTtcblxuICAgIC8vIFVzZSBpdCBhZ2Fpbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRcbiAgICAgICAgLnByb3BzKHtcbiAgICAgICAgICBsb2NhdGlvbjogeyB2YWx1ZTogJ2FmcmljYScsIHR5cGU6ICdyZWdpb24nIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5kcmF3KCk7XG4gICAgfSwgMjUwMCk7XG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byByZXNpemUgY2hhcnQgd2l0aCB0aGUgd2luZG93LlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICB0aGlzLmNoYXJ0XG4gICAgICAuc2VsZWN0aW9uKHRoaXMuY2hhcnRDb250YWluZXIuY3VycmVudClcbiAgICAgIC5wcm9wcyh7IGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uIH0pXG4gICAgICAuZHJhdygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgIHsvKiBUaGlzIGlzIG91ciBjaGFydCBjb250YWluZXIg8J+RhyAqL31cbiAgICAgICAgPGRpdiBpZD0nY2hhcnQnIHJlZj17dGhpcy5jaGFydENvbnRhaW5lcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J29wdGlvbnMnPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjogeyB2YWx1ZTogJ0hLRycsIHR5cGU6ICdjb3VudHJ5JyB9IH0pfVxuICAgICAgICAgID5Ib25nIEtvbmdcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9jYXRpb246IHsgdmFsdWU6ICdVU0EnLCB0eXBlOiAnY291bnRyeScgfSB9KX1cbiAgICAgICAgICA+VVNBXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uOiB7IHZhbHVlOiAnREUnLCB0eXBlOiAnY291bnRyeScgfSB9KX1cbiAgICAgICAgICA+R2VybWFueVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjogeyB2YWx1ZTogJ2V1cm9wZScsIHR5cGU6ICdyZWdpb24nIH0gfSl9XG4gICAgICAgICAgPkV1cm9wZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjogeyB2YWx1ZTogWzEzOS42NTAzLCAzNS42NzYyXSwgdHlwZTogJ3BvaW50JyB9IH0pfVxuICAgICAgICAgID5Ub2t5b1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjogeyB2YWx1ZTogJ0xCTicsIHR5cGU6ICdjb3VudHJ5JyB9IH0pfVxuICAgICAgICAgID5MZWJhbm9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uOiB7IHZhbHVlOiAnR0lGJywgdHlwZTogJ2NvdW50cnknIH0gfSl9XG4gICAgICAgICAgPkdpYmJlcmlzaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})