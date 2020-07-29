webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/demo/Chart.js":
/*!***************************!*\
  !*** ./src/demo/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/chart.js */ \"./src/lib/chart.js\");\n/* harmony import */ var _furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./furniture/ChartContainer */ \"./src/demo/furniture/ChartContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reuters-graphics/style-color/dist/categorical */ \"./node_modules/@reuters-graphics/style-color/dist/categorical/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _world_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./world.json */ \"./src/demo/world.json\");\nvar _world_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./world.json */ \"./src/demo/world.json\", 1);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/u6068973/Documents/work/coronavirus/tracker-news-app/spinning-globe/src/demo/Chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar ChartComponent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ChartComponent, _React$Component);\n\n  var _super = _createSuper(ChartComponent);\n\n  function ChartComponent() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ChartComponent);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      width: '',\n      location: {\n        value: [139.6503, 35.6762],\n        type: 'point'\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chartContainer\", react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"chart\", new _lib_chart_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resize\", lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(function () {\n      _this.chart.draw();\n    }, 250));\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ChartComponent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      // Use our chart module.\n      this.chart.selection(this.chartContainer.current).props({\n        fill: _reuters_graphics_style_color_dist_categorical__WEBPACK_IMPORTED_MODULE_10__[\"base\"].blue.hex,\n        geo: _world_json__WEBPACK_IMPORTED_MODULE_12__\n      }).draw(); // Use it again.\n\n      setTimeout(function () {\n        _this2.chart.props({\n          geo: _world_json__WEBPACK_IMPORTED_MODULE_12__,\n          location: 'africa',\n          location_type: 'region'\n        }).draw();\n      }, 2500); // Add a listener to resize chart with the window.\n\n      window.addEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Remove listener if the component is removed, too.\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      // Update the chart with the component.\n      // Can change data or props here, whatever...\n      this.chart.selection(this.chartContainer.current).props({\n        location: this.state.location,\n        geo: _world_json__WEBPACK_IMPORTED_MODULE_12__\n      }).draw();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var width = this.state.width;\n      return __jsx(_furniture_ChartContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        width: width,\n        setWidth: function setWidth(width) {\n          return _this3.setState({\n            width: width\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        id: \"chart\",\n        ref: this.chartContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }\n      }, __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'HKG',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }\n      }, \"Hong Kong\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'USA',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }\n      }, \"USA\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'DE',\n              type: 'country'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }\n      }, \"Germany\"), __jsx(\"button\", {\n        onClick: function onClick() {\n          return _this3.setState({\n            location: {\n              value: 'europe',\n              type: 'region'\n            }\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }\n      }, \"Asia\")));\n    }\n  }]);\n\n  return ChartComponent;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartComponent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DaGFydC5qcz8zMjA2Il0sIm5hbWVzIjpbIkNoYXJ0Q29tcG9uZW50Iiwid2lkdGgiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiQ2hhcnQiLCJkZWJvdW5jZSIsImNoYXJ0IiwiZHJhdyIsInNlbGVjdGlvbiIsImNoYXJ0Q29udGFpbmVyIiwiY3VycmVudCIsInByb3BzIiwiZmlsbCIsImJhc2UiLCJibHVlIiwiaGV4IiwiZ2VvIiwiZ2VvRGF0YSIsInNldFRpbWVvdXQiLCJsb2NhdGlvbl90eXBlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxjOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLFdBQUssRUFBRSxFQUREO0FBRU5DLGNBQVEsRUFBRTtBQUFDQyxhQUFLLEVBQUMsQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUFQO0FBQTRCQyxZQUFJLEVBQUU7QUFBbEM7QUFGSixLOzt5TkFLU0MsNENBQUssQ0FBQ0MsU0FBTixFOztnTkFHVCxJQUFJQyxxREFBSixFOztpTkFHQ0MsdURBQVEsQ0FBQyxZQUFNO0FBQUUsWUFBS0MsS0FBTCxDQUFXQyxJQUFYO0FBQW9CLEtBQTdCLEVBQStCLEdBQS9CLEM7Ozs7Ozs7d0NBRUc7QUFBQTs7QUFDbEI7QUFDQSxXQUFLRCxLQUFMLENBQ0dFLFNBREgsQ0FDYSxLQUFLQyxjQUFMLENBQW9CQyxPQURqQyxFQUVHQyxLQUZILENBRVM7QUFBRUMsWUFBSSxFQUFFQyxvRkFBSSxDQUFDQyxJQUFMLENBQVVDLEdBQWxCO0FBQ0hDLFdBQUcsRUFBRUMseUNBQU9BO0FBRFQsT0FGVCxFQUlHVixJQUpILEdBRmtCLENBUWxCOztBQUNBVyxnQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJLENBQUNaLEtBQUwsQ0FDR0ssS0FESCxDQUNTO0FBQ0xLLGFBQUcsRUFBRUMseUNBREE7QUFFTGxCLGtCQUFRLEVBQUUsUUFGTDtBQUdMb0IsdUJBQWEsRUFBQztBQUhULFNBRFQsRUFNR1osSUFOSDtBQU9ELE9BUlMsRUFRUCxJQVJPLENBQVYsQ0FUa0IsQ0FtQmxCOztBQUNBYSxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtDLE1BQXZDO0FBQ0Q7OzsyQ0FFc0I7QUFDckI7QUFDQUYsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLRCxNQUExQztBQUNEOzs7eUNBRW9CO0FBQ25CO0FBQ0E7QUFDQSxXQUFLaEIsS0FBTCxDQUNHRSxTQURILENBQ2EsS0FBS0MsY0FBTCxDQUFvQkMsT0FEakMsRUFFR0MsS0FGSCxDQUVTO0FBQUVaLGdCQUFRLEVBQUUsS0FBS3lCLEtBQUwsQ0FBV3pCLFFBQXZCO0FBQ1BpQixXQUFHLEVBQUVDLHlDQUFPQTtBQURMLE9BRlQsRUFJR1YsSUFKSDtBQUtEOzs7NkJBRVE7QUFBQTs7QUFBQSxVQUNDVCxLQURELEdBQ1csS0FBSzBCLEtBRGhCLENBQ0MxQixLQUREO0FBRVAsYUFDRSxNQUFDLGlFQUFEO0FBQWdCLGFBQUssRUFBRUEsS0FBdkI7QUFBOEIsZ0JBQVEsRUFBRSxrQkFBQ0EsS0FBRDtBQUFBLGlCQUFXLE1BQUksQ0FBQzJCLFFBQUwsQ0FBYztBQUFFM0IsaUJBQUssRUFBTEE7QUFBRixXQUFkLENBQVg7QUFBQSxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxVQUFFLEVBQUMsT0FBUjtBQUFnQixXQUFHLEVBQUUsS0FBS1csY0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDZ0IsUUFBTCxDQUFjO0FBQUUxQixvQkFBUSxFQUFDO0FBQUNDLG1CQUFLLEVBQUMsS0FBUDtBQUFjQyxrQkFBSSxFQUFFO0FBQXBCO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBS0U7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUN3QixRQUFMLENBQWM7QUFBRTFCLG9CQUFRLEVBQUM7QUFBQ0MsbUJBQUssRUFBQyxLQUFQO0FBQWNDLGtCQUFJLEVBQUU7QUFBcEI7QUFBWCxXQUFkLENBQU47QUFBQSxTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixFQVNFO0FBQ0UsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDd0IsUUFBTCxDQUFjO0FBQUUxQixvQkFBUSxFQUFDO0FBQUNDLG1CQUFLLEVBQUMsSUFBUDtBQUFhQyxrQkFBSSxFQUFFO0FBQW5CO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLEVBYUU7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUN3QixRQUFMLENBQWM7QUFBRTFCLG9CQUFRLEVBQUM7QUFBQ0MsbUJBQUssRUFBQyxRQUFQO0FBQWlCQyxrQkFBSSxFQUFFO0FBQXZCO0FBQVgsV0FBZCxDQUFOO0FBQUEsU0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLENBSEYsQ0FERjtBQXlCRDs7OztFQS9FMEJDLDRDQUFLLENBQUN3QixTOztBQWtGcEI3Qiw2RUFBZiIsImZpbGUiOiIuL3NyYy9kZW1vL0NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJy4uL2xpYi9jaGFydC5qcyc7XG5pbXBvcnQgQ2hhcnRDb250YWluZXIgZnJvbSAnLi9mdXJuaXR1cmUvQ2hhcnRDb250YWluZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9zdHlsZS1jb2xvci9kaXN0L2NhdGVnb3JpY2FsJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IGdlb0RhdGEgZnJvbSAnLi93b3JsZC5qc29uJ1xuXG5jbGFzcyBDaGFydENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHdpZHRoOiAnJyxcbiAgICBsb2NhdGlvbjoge3ZhbHVlOlsxMzkuNjUwMywgMzUuNjc2Ml0sIHR5cGU6ICdwb2ludCd9XG4gIH07XG5cbiAgY2hhcnRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBJbnN0YW50aWF0ZSBhbmQgYWRkIG91ciBjaGFydCBjbGFzcyB0byB0aGlzIGNvbXBvbmVudC5cbiAgY2hhcnQgPSBuZXcgQ2hhcnQoKTtcblxuICAvLyBBIHJlc2l6ZSBmdW5jdGlvbiB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICByZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7IHRoaXMuY2hhcnQuZHJhdygpOyB9LCAyNTApO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBvdXIgY2hhcnQgbW9kdWxlLlxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLnByb3BzKHsgZmlsbDogYmFzZS5ibHVlLmhleCxcbiAgICAgICAgICBnZW86IGdlb0RhdGEgfSlcbiAgICAgIC5kcmF3KCk7XG5cbiAgICAvLyBVc2UgaXQgYWdhaW4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0XG4gICAgICAgIC5wcm9wcyh7XG4gICAgICAgICAgZ2VvOiBnZW9EYXRhLCBcbiAgICAgICAgICBsb2NhdGlvbjogJ2FmcmljYScsIFxuICAgICAgICAgIGxvY2F0aW9uX3R5cGU6J3JlZ2lvbidcbiAgICAgICAgfSlcbiAgICAgICAgLmRyYXcoKTtcbiAgICB9LCAyNTAwKTtcblxuICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIHJlc2l6ZSBjaGFydCB3aXRoIHRoZSB3aW5kb3cuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBsaXN0ZW5lciBpZiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRvby5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgY2hhcnQgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIC8vIENhbiBjaGFuZ2UgZGF0YSBvciBwcm9wcyBoZXJlLCB3aGF0ZXZlci4uLlxuICAgIHRoaXMuY2hhcnRcbiAgICAgIC5zZWxlY3Rpb24odGhpcy5jaGFydENvbnRhaW5lci5jdXJyZW50KVxuICAgICAgLnByb3BzKHsgbG9jYXRpb246IHRoaXMuc3RhdGUubG9jYXRpb24gLFxuICAgICAgZ2VvOiBnZW9EYXRhfSlcbiAgICAgIC5kcmF3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPENoYXJ0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0gc2V0V2lkdGg9eyh3aWR0aCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHdpZHRoIH0pfT5cbiAgICAgICAgey8qIFRoaXMgaXMgb3VyIGNoYXJ0IGNvbnRhaW5lciDwn5GHICovfVxuICAgICAgICA8ZGl2IGlkPSdjaGFydCcgcmVmPXt0aGlzLmNoYXJ0Q29udGFpbmVyfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjp7dmFsdWU6J0hLRycsIHR5cGU6ICdjb3VudHJ5J30gfSl9XG4gICAgICAgICAgPkhvbmcgS29uZ1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjp7dmFsdWU6J1VTQScsIHR5cGU6ICdjb3VudHJ5J30gfSl9XG4gICAgICAgICAgPlVTQVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjp7dmFsdWU6J0RFJywgdHlwZTogJ2NvdW50cnknfSB9KX1cbiAgICAgICAgICA+R2VybWFueVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsb2NhdGlvbjp7dmFsdWU6J2V1cm9wZScsIHR5cGU6ICdyZWdpb24nfSB9KX1cbiAgICAgICAgICA+QXNpYVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2hhcnRDb250YWluZXI+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0Q29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/demo/Chart.js\n");

/***/ })

})