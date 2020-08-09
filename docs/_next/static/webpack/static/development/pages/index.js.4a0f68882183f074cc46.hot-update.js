webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var _LocationOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LocationOptions */ \"./src/demo/LocationOptions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _SpinOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SpinOptions */ \"./src/demo/SpinOptions.js\");\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/jmac/Scripts/chart-module-globetrotter/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      width: 'mobile',\n      location: ['singapore'],\n      spin: false,\n      spinSpeed: 3000\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_11___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_14___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('https://cdn.jsdelivr.net/npm/@reuters-graphics/graphics-atlas-client@0.3.5/topojson/custom/world.json').then(function (r) {\n        return r.json();\n      }).then(function (topojson) {\n        // Use our chart module.\n        _this2.chart.selection(_this2.chartContainer.current).topojson(topojson).props({\n          fill: _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_13__[\"base\"].blue.hex\n        }).draw();\n      }); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      var _this$chart$props;\n\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      var _this$state = this.state,\n          spin = _this$state.spin,\n          spinSpeed = _this$state.spinSpeed;\n\n      (_this$chart$props = this.chart.props({\n        spin: spin,\n        spinSpeed: spinSpeed\n      })).location.apply(_this$chart$props, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.state.location)).draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state2 = this.state,\n          width = _this$state2.width,\n          spin = _this$state2.spin,\n          spinSpeed = _this$state2.spinSpeed;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 7\n        }\n      }, __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }\n      })), __jsx(\"div\", {\n        className: \"chart-options\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 9\n        }\n      }, __jsx(_LocationOptions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        setState: function setState(state) {\n          return _this3.setState(state);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }\n      }), __jsx(_SpinOptions__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n        spin: spin,\n        setSpin: function setSpin() {\n          return _this3.setState(function (prevState) {\n            return {\n              spin: !prevState.spin\n            };\n          });\n        },\n        spinSpeed: spinSpeed,\n        setSpinSpeed: function setSpinSpeed(spinSpeed) {\n          return _this3.setState({\n            spinSpeed: spinSpeed\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      })));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJsb2NhdGlvbiIsInNwaW4iLCJzcGluU3BlZWQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIkNoYXJ0IiwiZGVib3VuY2UiLCJjaGFydCIsImRyYXciLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsInRvcG9qc29uIiwic2VsZWN0aW9uIiwiY2hhcnRDb250YWluZXIiLCJjdXJyZW50IiwicHJvcHMiLCJmaWxsIiwiYmFzZSIsImJsdWUiLCJoZXgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFdBQUssRUFBRSxRQUREO0FBRU5DLGNBQVEsRUFBRSxDQUFDLFdBQUQsQ0FGSjtBQUdOQyxVQUFJLEVBQUUsS0FIQTtBQUlOQyxlQUFTLEVBQUU7QUFKTCxLOzt5TkFPU0MsNkNBQUssQ0FBQ0MsU0FBTixFOztnTkFHVCxJQUFJQyxxREFBSixFOztpTkFHQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQUUsWUFBS0MsS0FBTCxDQUFXQyxJQUFYO0FBQW9CLEtBQTdCLEVBQStCLEdBQS9CLEM7Ozs7Ozs7d0NBRUc7QUFBQTs7QUFDbEJDLFdBQUssQ0FBQyx1R0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEVBQUo7QUFBQSxPQURULEVBRUdGLElBRkgsQ0FFUSxVQUFBRyxRQUFRLEVBQUk7QUFDaEI7QUFDQSxjQUFJLENBQUNOLEtBQUwsQ0FDR08sU0FESCxDQUNhLE1BQUksQ0FBQ0MsY0FBTCxDQUFvQkMsT0FEakMsRUFFR0gsUUFGSCxDQUVZQSxRQUZaLEVBR0dJLEtBSEgsQ0FHUztBQUFFQyxjQUFJLEVBQUVDLG9GQUFJLENBQUNDLElBQUwsQ0FBVUM7QUFBbEIsU0FIVCxFQUlHYixJQUpIO0FBS0QsT0FUSCxFQURrQixDQVlsQjs7QUFDQWMsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxNQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCO0FBQ0FGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS0QsTUFBMUM7QUFDRDs7O3lDQUVvQjtBQUFBOztBQUNuQjtBQUNBO0FBRm1CLHdCQUdTLEtBQUtFLEtBSGQ7QUFBQSxVQUdYekIsSUFIVyxlQUdYQSxJQUhXO0FBQUEsVUFHTEMsU0FISyxlQUdMQSxTQUhLOztBQUluQixnQ0FBS0ssS0FBTCxDQUNHVSxLQURILENBQ1M7QUFBRWhCLFlBQUksRUFBSkEsSUFBRjtBQUFRQyxpQkFBUyxFQUFUQTtBQUFSLE9BRFQsR0FFR0YsUUFGSCx1SEFFZSxLQUFLMEIsS0FBTCxDQUFXMUIsUUFGMUIsR0FHR1EsSUFISDtBQUlEOzs7NkJBRVE7QUFBQTs7QUFBQSx5QkFDNEIsS0FBS2tCLEtBRGpDO0FBQUEsVUFDQzNCLEtBREQsZ0JBQ0NBLEtBREQ7QUFBQSxVQUNRRSxJQURSLGdCQUNRQSxJQURSO0FBQUEsVUFDY0MsU0FEZCxnQkFDY0EsU0FEZDtBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsaUVBQUQ7QUFBZ0IsYUFBSyxFQUFFSCxLQUF2QjtBQUE4QixnQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDNEIsUUFBTCxDQUFjO0FBQUU1QixpQkFBSyxFQUFMQTtBQUFGLFdBQWQsQ0FBWDtBQUFBLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFRTtBQUFLLFVBQUUsRUFBQyxPQUFSO0FBQWdCLFdBQUcsRUFBRSxLQUFLZ0IsY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsRUFLRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx5REFBRDtBQUFpQixnQkFBUSxFQUFFLGtCQUFDVyxLQUFEO0FBQUEsaUJBQVcsTUFBSSxDQUFDQyxRQUFMLENBQWNELEtBQWQsQ0FBWDtBQUFBLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMscURBQUQ7QUFDRSxZQUFJLEVBQUV6QixJQURSO0FBRUUsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDMEIsUUFBTCxDQUFjLFVBQUFDLFNBQVM7QUFBQSxtQkFBSztBQUFFM0Isa0JBQUksRUFBRSxDQUFDMkIsU0FBUyxDQUFDM0I7QUFBbkIsYUFBTDtBQUFBLFdBQXZCLENBQU47QUFBQSxTQUZYO0FBR0UsaUJBQVMsRUFBRUMsU0FIYjtBQUlFLG9CQUFZLEVBQUUsc0JBQUNBLFNBQUQ7QUFBQSxpQkFBZSxNQUFJLENBQUN5QixRQUFMLENBQWM7QUFBRXpCLHFCQUFTLEVBQVRBO0FBQUYsV0FBZCxDQUFmO0FBQUEsU0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBTEYsQ0FERjtBQWtCRDs7OztFQW5FMEJDLDZDQUFLLENBQUMwQixTOztBQXNFcEIvQiw2RUFBZiIsImZpbGUiOiIuL3NyYy9kZW1vL0NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJy4uL2xpYi9jaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9mdXJuaXR1cmUvQ2hhcnRDb250YWluZXInO1xuaW1wb3J0IExvY2F0aW9uT3B0aW9ucyBmcm9tICcuL0xvY2F0aW9uT3B0aW9ucyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5PcHRpb25zIGZyb20gJy4vU3Bpbk9wdGlvbnMnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL3N0eWxlLWNvbG9yL2Rpc3QvY2F0ZWdvcmljYWwnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmNsYXNzIENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgd2lkdGg6ICdtb2JpbGUnLFxuICAgIGxvY2F0aW9uOiBbJ3NpbmdhcG9yZSddLFxuICAgIHNwaW46IGZhbHNlLFxuICAgIHNwaW5TcGVlZDogMzAwMCxcbiAgfTtcblxuICBjaGFydENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIC8vIEluc3RhbnRpYXRlIGFuZCBhZGQgb3VyIGNoYXJ0IGNsYXNzIHRvIHRoaXMgY29tcG9uZW50LlxuICBjaGFydCA9IG5ldyBDaGFydCgpO1xuXG4gIC8vIEEgcmVzaXplIGZ1bmN0aW9uIHRvIHJlZHJhdyB0aGUgY2hhcnQuXG4gIHJlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHsgdGhpcy5jaGFydC5kcmF3KCk7IH0sIDI1MCk7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50QDAuMy41L3RvcG9qc29uL2N1c3RvbS93b3JsZC5qc29uJylcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbih0b3BvanNvbiA9PiB7XG4gICAgICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgICAgICB0aGlzLmNoYXJ0XG4gICAgICAgICAgLnNlbGVjdGlvbih0aGlzLmNoYXJ0Q29udGFpbmVyLmN1cnJlbnQpXG4gICAgICAgICAgLnRvcG9qc29uKHRvcG9qc29uKVxuICAgICAgICAgIC5wcm9wcyh7IGZpbGw6IGJhc2UuYmx1ZS5oZXggfSlcbiAgICAgICAgICAuZHJhdygpO1xuICAgICAgfSk7XG5cbiAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byByZXNpemUgY2hhcnQgd2l0aCB0aGUgd2luZG93LlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXIgaWYgdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0b28uXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgdGhlIGNoYXJ0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICAvLyBDYW4gY2hhbmdlIGRhdGEgb3IgcHJvcHMgaGVyZSwgd2hhdGV2ZXIuLi5cbiAgICBjb25zdCB7IHNwaW4sIHNwaW5TcGVlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLmNoYXJ0XG4gICAgICAucHJvcHMoeyBzcGluLCBzcGluU3BlZWQgfSlcbiAgICAgIC5sb2NhdGlvbiguLi50aGlzLnN0YXRlLmxvY2F0aW9uKVxuICAgICAgLmRyYXcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBzcGluLCBzcGluU3BlZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDaGFydENvbnRhaW5lciB3aWR0aD17d2lkdGh9IHNldFdpZHRoPXsod2lkdGgpID0+IHRoaXMuc2V0U3RhdGUoeyB3aWR0aCB9KX0+XG4gICAgICAgICAgey8qIFRoaXMgaXMgb3VyIGNoYXJ0IGNvbnRhaW5lciDwn5GHICovfVxuICAgICAgICAgIDxkaXYgaWQ9J2NoYXJ0JyByZWY9e3RoaXMuY2hhcnRDb250YWluZXJ9IC8+XG4gICAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydC1vcHRpb25zJz5cbiAgICAgICAgICA8TG9jYXRpb25PcHRpb25zIHNldFN0YXRlPXsoc3RhdGUpID0+IHRoaXMuc2V0U3RhdGUoc3RhdGUpfSAvPlxuICAgICAgICAgIDxTcGluT3B0aW9uc1xuICAgICAgICAgICAgc3Bpbj17c3Bpbn1cbiAgICAgICAgICAgIHNldFNwaW49eygpID0+IHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7IHNwaW46ICFwcmV2U3RhdGUuc3BpbiB9KSl9XG4gICAgICAgICAgICBzcGluU3BlZWQ9e3NwaW5TcGVlZH1cbiAgICAgICAgICAgIHNldFNwaW5TcGVlZD17KHNwaW5TcGVlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNwaW5TcGVlZCB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydENvbXBvbmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})