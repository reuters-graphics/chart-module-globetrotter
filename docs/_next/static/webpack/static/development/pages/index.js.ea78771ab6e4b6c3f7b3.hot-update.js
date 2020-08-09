webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"_drawSphere\",\n    value: function _drawSphere() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path({\n        type: 'Sphere'\n      });\n\n      this._context.strokeStyle = props.outer_stroke_color;\n      this._context.lineWidth = props.stroke_width_sphere;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawLand\",\n    value: function _drawLand() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._land);\n\n      this._context.fillStyle = props.base_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawBorders\",\n    value: function _drawBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._borders);\n\n      this._context.setLineDash([]);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawDisputedBorders\",\n    value: function _drawDisputedBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._disputedBorders);\n\n      this._context.setLineDash(props.disputed_dasharray);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawHighlightedArea\",\n    value: function _drawHighlightedArea(highlightArea) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(highlightArea);\n\n      this._context.fillStyle = props.highlight_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawMarker\",\n    value: function _drawMarker(projectedCentroid) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._context.arc(projectedCentroid[0], projectedCentroid[1], props.dot_radius, 0, 2 * Math.PI);\n\n      this._context.strokeStyle = props.highlight_color;\n      this._context.lineWidth = props.dot_radius - 2;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      this._borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      this._disputedBorders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      this._land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (this._timer && !props.spin) {\n        this._timer.stop();\n\n        this._timer = null;\n      }\n\n      if (props.spin) {\n        if (!this._timer) {\n          this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interval(function (elapsed) {\n            projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n            render();\n            canvas.attr('centroid-x', 0.02 * elapsed);\n            canvas.attr('centroid-y', props.vertical_tilt - y);\n          }, 750);\n        }\n      }\n\n      var context = canvas.node().getContext('2d');\n      this._context = context;\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      this._path = path;\n      var p2 = [];\n      var highlightArea; // Lat/Lon\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1]; // Region\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Sub-region\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Country\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        highlightArea = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea);\n      } else {\n        p2 = [0, 0];\n      }\n\n      var render = function render() {\n        var endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n        var interpolator = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n        var highlightAreaSize = endPath.area(highlightArea);\n        canvas.transition().duration(props.duration).tween('rotate', function () {\n          return function (t) {\n            projection.rotate(interpolator(t));\n            var projectedCentroid = projection(p2);\n            console.log(projectedCentroid);\n            context.clearRect(0, 0, width, width);\n\n            _this2._drawLand();\n\n            if (highlightAreaSize >= props.area_threshold || !props.enable_dot) {\n              _this2._drawHighlightedArea(highlightArea);\n            }\n\n            if (props.disputed) {\n              _this2._drawDisputedBorders();\n            }\n\n            _this2._drawBorders();\n\n            if (props.enable_dot && highlightAreaSize < props.area_threshold) {\n              _this2._drawMarker(projectedCentroid);\n            }\n\n            _this2._drawSphere();\n          };\n        });\n      };\n\n      render();\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsIl9jb250ZXh0IiwiYmVnaW5QYXRoIiwiX3BhdGgiLCJ0eXBlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJfbGFuZCIsImZpbGxTdHlsZSIsImZpbGwiLCJfYm9yZGVycyIsInNldExpbmVEYXNoIiwiX2Rpc3B1dGVkQm9yZGVycyIsImhpZ2hsaWdodEFyZWEiLCJwcm9qZWN0ZWRDZW50cm9pZCIsImFyYyIsIk1hdGgiLCJQSSIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiYSIsImIiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsIl90aW1lciIsInN0b3AiLCJpbnRlcnZhbCIsImVsYXBzZWQiLCJyZW5kZXIiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInBhdGgiLCJnZW9QYXRoIiwicDIiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImVuZFBhdGgiLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZSIsImhpZ2hsaWdodEFyZWFTaXplIiwiYXJlYSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJSZWN0IiwiX2RyYXdMYW5kIiwiX2RyYXdIaWdobGlnaHRlZEFyZWEiLCJfZHJhd0Rpc3B1dGVkQm9yZGVycyIsIl9kcmF3Qm9yZGVycyIsIl9kcmF3TWFya2VyIiwiX2RyYXdTcGhlcmUiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMseUJBQW1CLEVBQUUsU0FEUjtBQUViQyx3QkFBa0IsRUFBRSwwQkFGUDtBQUdiQyw0QkFBc0IsRUFBRSxHQUhYO0FBSWJDLHlCQUFtQixFQUFFLEdBSlI7QUFLYkMscUJBQWUsRUFBRSxTQUxKO0FBTWJDLGdCQUFVLEVBQUUsMEJBTkM7QUFPYkMsbUJBQWEsRUFBRSxFQVBGO0FBUWJDLFlBQU0sRUFBRSxFQVJLO0FBU2JDLGNBQVEsRUFBRSxHQVRHO0FBVWJDLGdCQUFVLEVBQUUsSUFWQztBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsY0FBUSxF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ZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcblxuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBzdHJva2Vfd2lkdGhfY291bnRyaWVzOiAwLjUsXG4gICAgc3Ryb2tlX3dpZHRoX3NwaGVyZTogMC4xLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgYXJlYV90aHJlc2hvbGQ6IDEwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgY291bnRyeUlkR2V0dGVyOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBfZHJhd1NwaGVyZSgpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICB0aGlzLl9jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX3BhdGgoeyB0eXBlOiAnU3BoZXJlJyB9KTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdMYW5kKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aCh0aGlzLl9sYW5kKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgdGhpcy5fY29udGV4dC5maWxsKCk7XG4gIH1cblxuICBfZHJhd0JvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2JvcmRlcnMpO1xuICAgIHRoaXMuX2NvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdEaXNwdXRlZEJvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2Rpc3B1dGVkQm9yZGVycyk7XG4gICAgdGhpcy5fY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdIaWdobGlnaHRlZEFyZWEoaGlnaGxpZ2h0QXJlYSkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aChoaWdobGlnaHRBcmVhKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIF9kcmF3TWFya2VyKHByb2plY3RlZENlbnRyb2lkKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jb250ZXh0LmFyYyhwcm9qZWN0ZWRDZW50cm9pZFswXSwgcHJvamVjdGVkQ2VudHJvaWRbMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3QgdG9wb2xvZ3kgPSB0aGlzLnRvcG9qc29uKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uKCk7XG4gICAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuY291bnRyaWVzXTtcbiAgICBjb25zdCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5kaXNwdXRlZEJvdW5kYXJpZXNdO1xuICAgIGNvbnN0IGxhbmRGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5sYW5kXTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMpO1xuXG4gICAgdGhpcy5fYm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgdGhpcy5fZGlzcHV0ZWRCb3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMpO1xuICAgIHRoaXMuX2xhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBsYW5kRmVhdHVyZXMpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG4gICAgY29uc3QgcDEgPSBbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKHAxKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVyICYmICFwcm9wcy5zcGluKSB7XG4gICAgICB0aGlzLl90aW1lci5zdG9wKCk7XG4gICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICBpZiAoIXRoaXMuX3RpbWVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gZDMuaW50ZXJ2YWwoKGVsYXBzZWQpID0+IHtcbiAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbMC4wMiAqIGVsYXBzZWQsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XSk7XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCAwLjAyICogZWxhcHNlZCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geSk7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBoaWdobGlnaHRBcmVhO1xuICAgIC8vIExhdC9Mb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICAvLyBSZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgaGlnaGxpZ2h0QXJlYSA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcy5nZW9tZXRyaWVzLmZpbHRlcihkID0+IGNvdW50cnlMaXN0LmluY2x1ZGVzKHByb3BzLmNvdW50cnlJZEdldHRlcihkLnByb3BlcnRpZXMpKSkpO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChoaWdobGlnaHRBcmVhKTtcbiAgICAvLyBTdWItcmVnaW9uXG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRTdWJyZWdpb24obG9jYXRpb24pKSB7XG4gICAgICBjb25zdCBjb3VudHJ5TGlzdCA9IEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEzKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoaGlnaGxpZ2h0QXJlYSk7XG4gICAgLy8gQ291bnRyeVxuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IHsgaXNvQWxwaGEzIH0gPSBBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSBjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gcHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykgPT09IGlzb0FscGhhMylbMF07XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMiA9IFswLCAwXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbmRQYXRoID0gZDMuZ2VvUGF0aChkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpLnJvdGF0ZShbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKSwgY29udGV4dCk7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0b3IgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKTtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodEFyZWFTaXplID0gZW5kUGF0aC5hcmVhKGhpZ2hsaWdodEFyZWEpO1xuICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgIC50d2Vlbigncm90YXRlJywgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAodCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoaW50ZXJwb2xhdG9yKHQpKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkQ2VudHJvaWQgPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RlZENlbnRyb2lkKTtcblxuICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcblxuICAgICAgICAgICAgdGhpcy5fZHJhd0xhbmQoKTtcblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodEFyZWFTaXplID49IHByb3BzLmFyZWFfdGhyZXNob2xkIHx8ICFwcm9wcy5lbmFibGVfZG90KSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RyYXdIaWdobGlnaHRlZEFyZWEoaGlnaGxpZ2h0QXJlYSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgICAgICB0aGlzLl9kcmF3RGlzcHV0ZWRCb3JkZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kcmF3Qm9yZGVycygpO1xuXG4gICAgICAgICAgICBpZiAocHJvcHMuZW5hYmxlX2RvdCAmJiBoaWdobGlnaHRBcmVhU2l6ZSA8IHByb3BzLmFyZWFfdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RyYXdNYXJrZXIocHJvamVjdGVkQ2VudHJvaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9kcmF3U3BoZXJlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpO1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})