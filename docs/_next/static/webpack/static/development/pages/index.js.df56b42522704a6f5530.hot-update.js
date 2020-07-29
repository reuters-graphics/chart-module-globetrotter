webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      location: false,\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      geo: false,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 2.5,\n      disputed: true,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.countries);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.countries, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputedBoundaries);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location) && props.location.length == 2) {\n        p2[0] = props.location[0];\n        p2[1] = props.location[1];\n      } else {\n        var l = Atlas.getCountry(props.location);\n\n        if (l) {\n          location = l.isoAlpha3;\n        } else {\n          location = 'NA';\n        }\n      }\n\n      if (location === 'NA' && p2.length == 0) {\n        p2 = p1;\n      } else if (p2.length != 2) {\n        country = countries.features.filter(function (d) {\n          return d.properties.isoAlpha3 === location;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1]) {\n          // console.log(path.area(country))\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (country) {\n                context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.enable_dot) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              context.beginPath(), path(borders), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke(); // if (props.disputed) {\n              //   context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              // }\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill(); // if (props.disputed) {\n          //   context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          // }\n\n          context.beginPath(), path(borders), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwibG9jYXRpb24iLCJib3JkZXJfc3Ryb2tlX2NvbG9yIiwib3V0ZXJfc3Ryb2tlX2NvbG9yIiwic3Ryb2tlX3dpZHRoX2NvdW50cmllcyIsInN0cm9rZV93aWR0aF9zcGhlcmUiLCJnZW8iLCJoaWdobGlnaHRfY29sb3IiLCJiYXNlX2NvbG9yIiwidmVydGljYWxfdGlsdCIsIm1hcmdpbiIsImR1cmF0aW9uIiwiZW5hYmxlX2RvdCIsImRvdF9yYWRpdXMiLCJkaXNwdXRlZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsImJvcmRlcnMiLCJhIiwiYiIsImRpc3B1dGVkQm91bmRhcmllcyIsImxhbmQiLCJwcm9qZWN0aW9uIiwiZDMiLCJnZW9PcnRob2dyYXBoaWMiLCJmaXRFeHRlbnQiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsIiwiZ2V0Q291bnRyeSIsImlzb0FscGhhMyIsImZlYXR1cmVzIiwiZmlsdGVyIiwiZCIsInByb3BlcnRpZXMiLCJnZW9DZW50cm9pZCIsInJlbmRlciIsInIiLCJpbnRlcnBvbGF0ZSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjZW50cm9pZFBybyIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2VT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QW9CLGlCQUFPLENBQUN5QixTQUFSLElBQXFCdkIsSUFBSSxDQUFDZCxJQUFELENBQXpCLEVBQWlDWSxPQUFPLENBQUMwQixTQUFSLEdBQW9CcEQsS0FBSyxDQUFDUixVQUEzRCxFQUF1RWtDLE9BQU8sQ0FBQzJCLElBQVIsRUFBdkUsQ0FGSyxDQUdMO0FBQ0E7QUFDQTs7QUFDQTNCLGlCQUFPLENBQUN5QixTQUFSLElBQXFCdkIsSUFBSSxDQUFDbEIsT0FBRCxDQUF6QixFQUFvQ2dCLE9BQU8sQ0FBQytCLFdBQVIsR0FBc0J6RCxLQUFLLENBQUNkLG1CQUFoRSxFQUFxRndDLE9BQU8sQ0FBQ2dDLFNBQVIsR0FBb0IxRCxLQUFLLENBQUNaLHNCQUEvRyxFQUF1SXNDLE9BQU8sQ0FBQ2lDLE1BQVIsRUFBdkk7QUFDQWpDLGlCQUFPLENBQUN5QixTQUFSLElBQXFCdkIsSUFBSSxDQUFDekIsTUFBRCxDQUF6QixFQUFtQ3VCLE9BQU8sQ0FBQytCLFdBQVIsR0FBc0J6RCxLQUFLLENBQUNiLGtCQUEvRCxFQUFtRnVDLE9BQU8sQ0FBQ2dDLFNBQVIsR0FBb0IxRCxLQUFLLENBQUNYLG1CQUE3RyxFQUFrSXFDLE9BQU8sQ0FBQ2lDLE1BQVIsRUFBbEk7QUFDRDtBQUNGOztBQUFBO0FBRUR4QyxZQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLEVBQTBCUyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUNBWCxZQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLEVBQTBCUyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBM0d3QjhCLDREOztBQThHWjVFLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmNvbnN0IEF0bGFzID0gbmV3IEF0bGFzTWV0YWRhdGFDbGllbnQoKTtcblxuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2NhdGlvbjogZmFsc2UsXG4gICAgYm9yZGVyX3N0cm9rZV9jb2xvcjogJyMyZjM1M2YnLFxuICAgIG91dGVyX3N0cm9rZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAxLjIsXG4gICAgZ2VvOiBmYWxzZSxcbiAgICBoaWdobGlnaHRfY29sb3I6ICcjZmNlNTg3JyxcbiAgICBiYXNlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICB2ZXJ0aWNhbF90aWx0OiAxNSxcbiAgICBtYXJnaW46IDEwLFxuICAgIGR1cmF0aW9uOiA3NTAsXG4gICAgZW5hYmxlX2RvdDogdHJ1ZSxcbiAgICBkb3RfcmFkaXVzOiAyLjUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgZGlzcHV0ZWRfZGFzaGFycmF5OiBbNSwgNV0sXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBzcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH07XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMuY291bnRyaWVzKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmNvdW50cmllcywgKGEsIGIpID0+IGEgIT09IGIpO1xuICAgIGNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmRpc3B1dGVkQm91bmRhcmllcyk7XG4gICAgY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5sYW5kKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBsb2NhdGlvbjsgbGV0IGNvdW50cnk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMubG9jYXRpb24pICYmIHByb3BzLmxvY2F0aW9uLmxlbmd0aCA9PSAyKSB7XG4gICAgICBwMlswXSA9IHByb3BzLmxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBwcm9wcy5sb2NhdGlvblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbCA9IEF0bGFzLmdldENvdW50cnkocHJvcHMubG9jYXRpb24pO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgbG9jYXRpb24gPSBsLmlzb0FscGhhMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gJ05BJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24gPT09ICdOQScgJiYgcDIubGVuZ3RoID09IDApIHtcbiAgICAgIHAyID0gcDE7XG4gICAgfSBlbHNlIGlmIChwMi5sZW5ndGggIT0gMikge1xuICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBkLnByb3BlcnRpZXMuaXNvQWxwaGEzID09PSBsb2NhdGlvbilbMF07XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChwMVswXSAhPT0gcDJbMF0gJiYgcDFbMV0gIT09IHAyWzFdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdGguYXJlYShjb3VudHJ5KSlcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHByb3BzLmR1cmF0aW9uKVxuICAgICAgICAgIC50d2Vlbigncm90YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyKHQpKTtcbiAgICAgICAgICAgICAgY29uc3QgY2VudHJvaWRQcm8gPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGNvdW50cnkpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBjb250ZXh0LmFyYyhjZW50cm9pZFByb1swXSwgY2VudHJvaWRQcm9bMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoYm9yZGVycyksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoc3BoZXJlKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAvLyBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICAgICAgLy8gICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGRpc3B1dGVkKSwgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgLy8gaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgIC8vICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGJvcmRlcnMpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKHNwaGVyZSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZSwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})