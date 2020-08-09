webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"_drawSphere\",\n    value: function _drawSphere() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path({\n        type: 'Sphere'\n      });\n\n      this._context.strokeStyle = props.outer_stroke_color;\n      this._context.lineWidth = props.stroke_width_sphere;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawLand\",\n    value: function _drawLand() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._land);\n\n      this._context.fillStyle = props.base_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawBorders\",\n    value: function _drawBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._borders);\n\n      this._context.setLineDash([]);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawDisputedBorders\",\n    value: function _drawDisputedBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._disputedBorders);\n\n      this._context.setLineDash(props.disputed_dasharray);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawHighlightedArea\",\n    value: function _drawHighlightedArea(highlightArea) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(highlightArea);\n\n      this._context.fillStyle = props.highlight_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawMarker\",\n    value: function _drawMarker(projectedCentroid) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._context.arc(projectedCentroid[0], projectedCentroid[1], props.dot_radius, 0, 2 * Math.PI);\n\n      this._context.strokeStyle = props.highlight_color;\n      this._context.lineWidth = props.dot_radius - 2;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      this._borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      this._disputedBorders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      this._land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (this._timer && !props.spin) {\n        this._timer.stop();\n\n        this._timer = null;\n      }\n\n      if (props.spin) {\n        if (!this._timer) {\n          this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interval(function (elapsed) {\n            projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n            render();\n            canvas.attr('centroid-x', 0.02 * elapsed);\n            canvas.attr('centroid-y', props.vertical_tilt - y);\n          }, 750);\n        }\n      }\n\n      var context = canvas.node().getContext('2d');\n      this._context = context;\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      this._path = path;\n      var p2 = [];\n      var highlightArea; // Lat/Lon\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1]; // Region\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Sub-region\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Country\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        highlightArea = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea);\n      } else {\n        p2 = [0, 0];\n      }\n\n      var render = function render() {\n        var endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n        var interpolator = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n        var highlightAreaSize = endPath.area(highlightArea);\n        canvas.transition().duration(props.duration).tween('rotate', function () {\n          return function (t) {\n            projection.rotate(interpolator(t));\n            var projectedCentroid = projection(p2);\n            console.log(projection.invert(projectedCentroid));\n            var geoAngle = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoDistance(p2, [-projection.rotate()[0], projection.rotate()[1]]);\n            console.log('angle', geoAngle);\n            context.clearRect(0, 0, width, width);\n\n            _this2._drawLand();\n\n            if (highlightAreaSize >= props.area_threshold || !props.enable_dot) {\n              _this2._drawHighlightedArea(highlightArea);\n            }\n\n            if (props.disputed) {\n              _this2._drawDisputedBorders();\n            }\n\n            _this2._drawBorders();\n\n            if (props.enable_dot && highlightAreaSize < props.area_threshold) {\n              _this2._drawMarker(projectedCentroid);\n            }\n\n            _this2._drawSphere();\n          };\n        });\n      };\n\n      render();\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsIl9jb250ZXh0IiwiYmVnaW5QYXRoIiwiX3BhdGgiLCJ0eXBlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJfbGFuZCIsImZpbGxTdHlsZSIsImZpbGwiLCJfYm9yZGVycyIsInNldExpbmVEYXNoIiwiX2Rpc3B1dGVkQm9yZGVycyIsImhpZ2hsaWdodEFyZWEiLCJwcm9qZWN0ZWRDZW50cm9pZCIsImFyYyIsIk1hdGgiLCJQSSIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiYSIsImIiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsIl90aW1lciIsInN0b3AiLCJpbnRlcnZhbCIsImVsYXBzZWQiLCJyZW5kZXIiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInBhdGgiLCJnZW9QYXRoIiwicDIiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImVuZFBhdGgiLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZSIsImhpZ2hsaWdodEFyZWFTaXplIiwiYXJlYSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjb25zb2xlIiwibG9nIiwiaW52ZXJ0IiwiZ2VvQW5nbGUiLCJnZW9EaXN0YW5jZSIsImNsZWFyUmVjdCIsIl9kcmF3TGFuZCIsIl9kcmF3SGlnaGxpZ2h0ZWRBcmVhIiwiX2RyYXdEaXNwdXRlZEJvcmRlcnMiLCJfZHJhd0JvcmRlcnMiLCJfZHJhd01hcmtlciIsIl9kcmF3U3BoZXJlIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQyw4RUFBSixFQUFkOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLHlCQUFtQixFQUFFLFNBRFI7QUFFYkMsd0JBQWtCLEVBQUUsMEJBRlA7QUFHYkMsNEJBQXNCLEVBQUUsR0FIWDtBQUliQyx5QkFBbUIsRUFBRSxHQUpSO0FBS2JDLHFCQUFlLEVBQUUsU0FMSjtBQU1iQyxnQkFBVSxFQUFFLDBCQU5DO0FBT2JDLG1CQUFhLEVBQUUsRUFQRjtBQVFiQyxZQUFNLEVBQUUsRUFSSztBQVNiQyxjQUFRLEVBQUUsR0FURztBQVViQyxnQkFBVSxFQUFFLElBVkM7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dkUsaUJBQWpCO0FBQ0Q7O0FBRUQsa0JBQUksQ0FBQ3dFLFdBQUw7QUFDRCxXQTNCRDtBQTRCRCxTQS9CSDtBQWdDRCxPQXpDRDs7QUEyQ0F2QyxZQUFNO0FBRU5YLFlBQU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosRUFBMEJjLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBQ0FoQixZQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLEVBQTBCYyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBek13Qm1DLDREOztBQTRNWi9HLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcblxuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBzdHJva2Vfd2lkdGhfY291bnRyaWVzOiAwLjUsXG4gICAgc3Ryb2tlX3dpZHRoX3NwaGVyZTogMC4xLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgYXJlYV90aHJlc2hvbGQ6IDEwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgY291bnRyeUlkR2V0dGVyOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBfZHJhd1NwaGVyZSgpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICB0aGlzLl9jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX3BhdGgoeyB0eXBlOiAnU3BoZXJlJyB9KTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdMYW5kKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aCh0aGlzLl9sYW5kKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgdGhpcy5fY29udGV4dC5maWxsKCk7XG4gIH1cblxuICBfZHJhd0JvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2JvcmRlcnMpO1xuICAgIHRoaXMuX2NvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdEaXNwdXRlZEJvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2Rpc3B1dGVkQm9yZGVycyk7XG4gICAgdGhpcy5fY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdIaWdobGlnaHRlZEFyZWEoaGlnaGxpZ2h0QXJlYSkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aChoaWdobGlnaHRBcmVhKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIF9kcmF3TWFya2VyKHByb2plY3RlZENlbnRyb2lkKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jb250ZXh0LmFyYyhwcm9qZWN0ZWRDZW50cm9pZFswXSwgcHJvamVjdGVkQ2VudHJvaWRbMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3QgdG9wb2xvZ3kgPSB0aGlzLnRvcG9qc29uKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uKCk7XG4gICAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuY291bnRyaWVzXTtcbiAgICBjb25zdCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5kaXNwdXRlZEJvdW5kYXJpZXNdO1xuICAgIGNvbnN0IGxhbmRGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5sYW5kXTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMpO1xuXG4gICAgdGhpcy5fYm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgdGhpcy5fZGlzcHV0ZWRCb3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMpO1xuICAgIHRoaXMuX2xhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBsYW5kRmVhdHVyZXMpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG4gICAgY29uc3QgcDEgPSBbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKHAxKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVyICYmICFwcm9wcy5zcGluKSB7XG4gICAgICB0aGlzLl90aW1lci5zdG9wKCk7XG4gICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICBpZiAoIXRoaXMuX3RpbWVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gZDMuaW50ZXJ2YWwoKGVsYXBzZWQpID0+IHtcbiAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbMC4wMiAqIGVsYXBzZWQsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XSk7XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCAwLjAyICogZWxhcHNlZCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geSk7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBoaWdobGlnaHRBcmVhO1xuICAgIC8vIExhdC9Mb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICAvLyBSZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgaGlnaGxpZ2h0QXJlYSA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcy5nZW9tZXRyaWVzLmZpbHRlcihkID0+IGNvdW50cnlMaXN0LmluY2x1ZGVzKHByb3BzLmNvdW50cnlJZEdldHRlcihkLnByb3BlcnRpZXMpKSkpO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChoaWdobGlnaHRBcmVhKTtcbiAgICAvLyBTdWItcmVnaW9uXG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRTdWJyZWdpb24obG9jYXRpb24pKSB7XG4gICAgICBjb25zdCBjb3VudHJ5TGlzdCA9IEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEzKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoaGlnaGxpZ2h0QXJlYSk7XG4gICAgLy8gQ291bnRyeVxuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IHsgaXNvQWxwaGEzIH0gPSBBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSBjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gcHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykgPT09IGlzb0FscGhhMylbMF07XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMiA9IFswLCAwXTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlbmRQYXRoID0gZDMuZ2VvUGF0aChcbiAgICAgICAgZDMuZ2VvT3J0aG9ncmFwaGljKClcbiAgICAgICAgICAuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKVxuICAgICAgICAgIC5yb3RhdGUoWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSksXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0b3IgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKTtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodEFyZWFTaXplID0gZW5kUGF0aC5hcmVhKGhpZ2hsaWdodEFyZWEpO1xuICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgIC50d2Vlbigncm90YXRlJywgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiAodCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoaW50ZXJwb2xhdG9yKHQpKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkQ2VudHJvaWQgPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3Rpb24uaW52ZXJ0KHByb2plY3RlZENlbnRyb2lkKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdlb0FuZ2xlID0gZDMuZ2VvRGlzdGFuY2UocDIsIFstcHJvamVjdGlvbi5yb3RhdGUoKVswXSwgcHJvamVjdGlvbi5yb3RhdGUoKVsxXV0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuZ2xlJywgZ2VvQW5nbGUpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuXG4gICAgICAgICAgICB0aGlzLl9kcmF3TGFuZCgpO1xuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0QXJlYVNpemUgPj0gcHJvcHMuYXJlYV90aHJlc2hvbGQgfHwgIXByb3BzLmVuYWJsZV9kb3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHJhd0hpZ2hsaWdodGVkQXJlYShoaWdobGlnaHRBcmVhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RyYXdEaXNwdXRlZEJvcmRlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RyYXdCb3JkZXJzKCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5lbmFibGVfZG90ICYmIGhpZ2hsaWdodEFyZWFTaXplIDwgcHJvcHMuYXJlYV90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZHJhd01hcmtlcihwcm9qZWN0ZWRDZW50cm9pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2RyYXdTcGhlcmUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCk7XG5cbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteScsIHAyWzFdKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})