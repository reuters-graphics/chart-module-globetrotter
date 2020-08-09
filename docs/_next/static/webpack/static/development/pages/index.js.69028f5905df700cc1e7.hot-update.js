webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 100,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      getIsoAlpha3: function getIsoAlpha3(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rotation\", [0, 0]);\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"_drawSphere\",\n    value: function _drawSphere() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path({\n        type: 'Sphere'\n      });\n\n      this._context.strokeStyle = props.outer_stroke_color;\n      this._context.lineWidth = props.stroke_width_sphere;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawLand\",\n    value: function _drawLand() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._land);\n\n      this._context.fillStyle = props.base_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawBorders\",\n    value: function _drawBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._borders);\n\n      this._context.setLineDash([]);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawDisputedBorders\",\n    value: function _drawDisputedBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._disputedBorders);\n\n      this._context.setLineDash(props.disputed_dasharray);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawHighlightedArea\",\n    value: function _drawHighlightedArea(highlightArea) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(highlightArea);\n\n      this._context.fillStyle = props.highlight_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawMarker\",\n    value: function _drawMarker(projectedCentroid) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._context.arc(projectedCentroid[0], projectedCentroid[1], props.dot_radius, 0, 2 * Math.PI);\n\n      this._context.strokeStyle = props.highlight_color;\n      this._context.lineWidth = props.dot_radius - 2;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      this._borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      this._disputedBorders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      this._land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      projection.rotate(this._rotation);\n      this._context = canvas.node().getContext('2d');\n      this._path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, this._context);\n      var p2 = [];\n      var highlightArea; // Lat/Lon\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1]; // Region\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        var filteredFeatures = countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.getIsoAlpha3(d.properties));\n        });\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, filteredFeatures);\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Sub-region\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        var _filteredFeatures = countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.getIsoAlpha3(d.properties));\n        });\n\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, _filteredFeatures);\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Country\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        highlightArea = countries.features.find(function (d) {\n          return props.getIsoAlpha3(d.properties) === isoAlpha3;\n        });\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea);\n      } else {\n        p2 = [0, 0];\n      }\n\n      var geoPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), this._context);\n      var highlightAreaSize = geoPath.area(highlightArea);\n      var showMarker = highlightAreaSize < props.area_threshold && props.enable_dot;\n\n      var drawMap = function drawMap(projectedCentroid) {\n        _this2._context.clearRect(0, 0, width, width);\n\n        _this2._drawLand();\n\n        if (!showMarker) _this2._drawHighlightedArea(highlightArea);\n        if (props.disputed) _this2._drawDisputedBorders();\n\n        _this2._drawBorders();\n\n        if (showMarker) {\n          var geoAngle = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoDistance(p2, [-projection.rotate()[0], projection.rotate()[1]]); // Check if the marker is behind the globe\n\n          if (geoAngle < 1.57079632679490) {\n            _this2._drawMarker(projectedCentroid);\n          }\n        }\n\n        _this2._drawSphere();\n      };\n\n      var rotateToPoint = function rotateToPoint() {\n        var interpolator = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n        canvas.transition().duration(props.duration).tween('rotate', function () {\n          return function (t) {\n            projection.rotate(interpolator(t));\n            var projectedCentroid = projection(p2);\n            drawMap(projectedCentroid);\n            _this2._rotation = projection.rotate();\n          };\n        });\n      };\n\n      var rotate = function rotate(elapsed) {\n        projection.rotate([_this2._rotation[0] - 10, props.vertical_tilt - p2[1]]);\n        var projectedCentroid = projection(p2);\n        drawMap(projectedCentroid);\n        _this2._rotation = projection.rotate();\n      };\n\n      var resetTimer = function resetTimer() {\n        _this2._timer.stop();\n\n        _this2._timer = null;\n      };\n\n      if (!props.spin) {\n        if (this._timer) resetTimer();\n        rotateToPoint();\n      } else {\n        if (this._timer) resetTimer(); // rotateToPoint();\n\n        this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].timer(function (elapsed) {\n          rotate(elapsed);\n        });\n      }\n\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImdldElzb0FscGhhMyIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsIl9jb250ZXh0IiwiYmVnaW5QYXRoIiwiX3BhdGgiLCJ0eXBlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJfbGFuZCIsImZpbGxTdHlsZSIsImZpbGwiLCJfYm9yZGVycyIsInNldExpbmVEYXNoIiwiX2Rpc3B1dGVkQm9yZGVycyIsImhpZ2hsaWdodEFyZWEiLCJwcm9qZWN0ZWRDZW50cm9pZCIsImFyYyIsIk1hdGgiLCJQSSIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiYSIsImIiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwicm90YXRlIiwiX3JvdGF0aW9uIiwiZ2V0Q29udGV4dCIsImdlb1BhdGgiLCJwMiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImdldFJlZ2lvbiIsImNvdW50cnlMaXN0IiwibWFwIiwiZCIsImZpbHRlcmVkRmVhdHVyZXMiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImZpbmQiLCJoaWdobGlnaHRBcmVhU2l6ZSIsImFyZWEiLCJzaG93TWFya2VyIiwiZHJhd01hcCIsImNsZWFyUmVjdCIsIl9kcmF3TGFuZCIsIl9kcmF3SGlnaGxpZ2h0ZWRBcmVhIiwiX2RyYXdEaXNwdXRlZEJvcmRlcnMiLCJfZHJhd0JvcmRlcnMiLCJnZW9BbmdsZSIsImdlb0Rpc3RhbmNlIiwiX2RyYXdNYXJrZXIiLCJfZHJhd1NwaGVyZSIsInJvdGF0ZVRvUG9pbnQiLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJlbGFwc2VkIiwicmVzZXRUaW1lciIsIl90aW1lciIsInN0b3AiLCJ0aW1lciIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyx5QkFBbUIsRUFBRSxTQURSO0FBRWJDLHdCQUFrQixFQUFFLDBCQUZQO0FBR2JDLDRCQUFzQixFQUFFLEdBSFg7QUFJYkMseUJBQW1CLEVBQUUsR0FKUjtBQUtiQyxxQkFBZSxFQUFFLFNBTEo7QUFNYkMsZ0JBQVUsRUFBRSwwQkFOQztBQU9iQyxtQkFBYSxFQUFFLEVBUEY7QUFRYkMsWUFBTSxFQUFFLEVBUks7QUFTYkMsY0FBUSxFQUFFLEdBVEc7QUFVYkMsZ0JBQVUs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QUNBLGFBQUtDLE1BQUwsR0FBY2xELGtEQUFFLENBQUNvRCxLQUFILENBQVMsVUFBQ0osT0FBRCxFQUFhO0FBQ2xDeEMsZ0JBQU0sQ0FBQ3dDLE9BQUQsQ0FBTjtBQUNELFNBRmEsQ0FBZDtBQUdEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7O0VBek13QkssNEQ7O0FBNE1aNUcsMkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBhcmVhX3RocmVzaG9sZDogMTAwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgZ2V0SXNvQWxwaGEzOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBfcm90YXRpb24gPSBbMCwgMF07XG5cbiAgX2RyYXdTcGhlcmUoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHsgdHlwZTogJ1NwaGVyZScgfSk7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmU7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIF9kcmF3TGFuZCgpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICB0aGlzLl9jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX3BhdGgodGhpcy5fbGFuZCk7XG4gICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQuZmlsbCgpO1xuICB9XG5cbiAgX2RyYXdCb3JkZXJzKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aCh0aGlzLl9ib3JkZXJzKTtcbiAgICB0aGlzLl9jb250ZXh0LnNldExpbmVEYXNoKFtdKTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIF9kcmF3RGlzcHV0ZWRCb3JkZXJzKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aCh0aGlzLl9kaXNwdXRlZEJvcmRlcnMpO1xuICAgIHRoaXMuX2NvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIF9kcmF3SGlnaGxpZ2h0ZWRBcmVhKGhpZ2hsaWdodEFyZWEpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICB0aGlzLl9jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX3BhdGgoaGlnaGxpZ2h0QXJlYSk7XG4gICAgdGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgdGhpcy5fY29udGV4dC5maWxsKCk7XG4gIH1cblxuICBfZHJhd01hcmtlcihwcm9qZWN0ZWRDZW50cm9pZCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fY29udGV4dC5hcmMocHJvamVjdGVkQ2VudHJvaWRbMF0sIHByb2plY3RlZENlbnRyb2lkWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLmRvdF9yYWRpdXMgLSAyO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IHRvcG9sb2d5ID0gdGhpcy50b3BvanNvbigpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbigpO1xuICAgIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmNvdW50cmllc107XG4gICAgY29uc3QgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuZGlzcHV0ZWRCb3VuZGFyaWVzXTtcbiAgICBjb25zdCBsYW5kRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMubGFuZF07XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzKTtcblxuICAgIHRoaXMuX2JvcmRlcnMgPSB0b3BvanNvbi5tZXNoKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcywgKGEsIGIpID0+IGEgIT09IGIpO1xuICAgIHRoaXMuX2Rpc3B1dGVkQm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzKTtcbiAgICB0aGlzLl9sYW5kID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgbGFuZEZlYXR1cmVzKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgcHJvamVjdGlvbi5yb3RhdGUodGhpcy5fcm90YXRpb24pO1xuXG4gICAgdGhpcy5fY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLl9wYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uLCB0aGlzLl9jb250ZXh0KTtcblxuICAgIGxldCBwMiA9IFtdO1xuICAgIGxldCBoaWdobGlnaHRBcmVhO1xuICAgIC8vIExhdC9Mb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICAvLyBSZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgY29uc3QgZmlsdGVyZWRGZWF0dXJlcyA9IGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuZ2V0SXNvQWxwaGEzKGQucHJvcGVydGllcykpKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgZmlsdGVyZWRGZWF0dXJlcyk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIC8vIFN1Yi1yZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0U3VicmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgY29uc3QgZmlsdGVyZWRGZWF0dXJlcyA9IGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuZ2V0SXNvQWxwaGEzKGQucHJvcGVydGllcykpKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgZmlsdGVyZWRGZWF0dXJlcyk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIC8vIENvdW50cnlcbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pKSB7XG4gICAgICBjb25zdCB7IGlzb0FscGhhMyB9ID0gQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbik7XG4gICAgICBoaWdobGlnaHRBcmVhID0gY291bnRyaWVzLmZlYXR1cmVzLmZpbmQoZCA9PiBwcm9wcy5nZXRJc29BbHBoYTMoZC5wcm9wZXJ0aWVzKSA9PT0gaXNvQWxwaGEzKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoaGlnaGxpZ2h0QXJlYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyID0gWzAsIDBdO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb1BhdGggPSBkMy5nZW9QYXRoKFxuICAgICAgZDMuZ2VvT3J0aG9ncmFwaGljKClcbiAgICAgICAgLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSlcbiAgICAgICAgLnJvdGF0ZShbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKSxcbiAgICAgIHRoaXMuX2NvbnRleHRcbiAgICApO1xuICAgIGNvbnN0IGhpZ2hsaWdodEFyZWFTaXplID0gZ2VvUGF0aC5hcmVhKGhpZ2hsaWdodEFyZWEpO1xuICAgIGNvbnN0IHNob3dNYXJrZXIgPSBoaWdobGlnaHRBcmVhU2l6ZSA8IHByb3BzLmFyZWFfdGhyZXNob2xkICYmIHByb3BzLmVuYWJsZV9kb3Q7XG5cbiAgICBjb25zdCBkcmF3TWFwID0gKHByb2plY3RlZENlbnRyb2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgdGhpcy5fZHJhd0xhbmQoKTtcblxuICAgICAgaWYgKCFzaG93TWFya2VyKSB0aGlzLl9kcmF3SGlnaGxpZ2h0ZWRBcmVhKGhpZ2hsaWdodEFyZWEpO1xuXG4gICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHRoaXMuX2RyYXdEaXNwdXRlZEJvcmRlcnMoKTtcbiAgICAgIHRoaXMuX2RyYXdCb3JkZXJzKCk7XG5cbiAgICAgIGlmIChzaG93TWFya2VyKSB7XG4gICAgICAgIGNvbnN0IGdlb0FuZ2xlID0gZDMuZ2VvRGlzdGFuY2UocDIsIFstcHJvamVjdGlvbi5yb3RhdGUoKVswXSwgcHJvamVjdGlvbi5yb3RhdGUoKVsxXV0pO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWFya2VyIGlzIGJlaGluZCB0aGUgZ2xvYmVcbiAgICAgICAgaWYgKGdlb0FuZ2xlIDwgMS41NzA3OTYzMjY3OTQ5MCkge1xuICAgICAgICAgIHRoaXMuX2RyYXdNYXJrZXIocHJvamVjdGVkQ2VudHJvaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RyYXdTcGhlcmUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm90YXRlVG9Qb2ludCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgIC50d2Vlbigncm90YXRlJywgKCkgPT5cbiAgICAgICAgICAodCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoaW50ZXJwb2xhdG9yKHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZENlbnRyb2lkID0gcHJvamVjdGlvbihwMik7XG4gICAgICAgICAgICBkcmF3TWFwKHByb2plY3RlZENlbnRyb2lkKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcHJvamVjdGlvbi5yb3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvdGF0ZSA9IChlbGFwc2VkKSA9PiB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbdGhpcy5fcm90YXRpb25bMF0gLSAxMCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSk7XG4gICAgICBjb25zdCBwcm9qZWN0ZWRDZW50cm9pZCA9IHByb2plY3Rpb24ocDIpO1xuICAgICAgZHJhd01hcChwcm9qZWN0ZWRDZW50cm9pZCk7XG4gICAgICB0aGlzLl9yb3RhdGlvbiA9IHByb2plY3Rpb24ucm90YXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0VGltZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLl90aW1lci5zdG9wKCk7XG4gICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgfTtcblxuICAgIGlmICghcHJvcHMuc3Bpbikge1xuICAgICAgaWYgKHRoaXMuX3RpbWVyKSByZXNldFRpbWVyKCk7XG4gICAgICByb3RhdGVUb1BvaW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikgcmVzZXRUaW1lcigpO1xuICAgICAgLy8gcm90YXRlVG9Qb2ludCgpO1xuICAgICAgdGhpcy5fdGltZXIgPSBkMy50aW1lcigoZWxhcHNlZCkgPT4ge1xuICAgICAgICByb3RhdGUoZWxhcHNlZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})