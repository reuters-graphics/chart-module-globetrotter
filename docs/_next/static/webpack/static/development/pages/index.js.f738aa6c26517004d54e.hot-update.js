webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 100,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      getIsoAlpha3: function getIsoAlpha3(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"_drawSphere\",\n    value: function _drawSphere() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path({\n        type: 'Sphere'\n      });\n\n      this._context.strokeStyle = props.outer_stroke_color;\n      this._context.lineWidth = props.stroke_width_sphere;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawLand\",\n    value: function _drawLand() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._land);\n\n      this._context.fillStyle = props.base_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawBorders\",\n    value: function _drawBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._borders);\n\n      this._context.setLineDash([]);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawDisputedBorders\",\n    value: function _drawDisputedBorders() {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(this._disputedBorders);\n\n      this._context.setLineDash(props.disputed_dasharray);\n\n      this._context.strokeStyle = props.border_stroke_color;\n      this._context.lineWidth = props.stroke_width_countries;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"_drawHighlightedArea\",\n    value: function _drawHighlightedArea(highlightArea) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._path(highlightArea);\n\n      this._context.fillStyle = props.highlight_color;\n\n      this._context.fill();\n    }\n  }, {\n    key: \"_drawMarker\",\n    value: function _drawMarker(projectedCentroid) {\n      var props = this.props();\n\n      this._context.beginPath();\n\n      this._context.arc(projectedCentroid[0], projectedCentroid[1], props.dot_radius, 0, 2 * Math.PI);\n\n      this._context.strokeStyle = props.highlight_color;\n      this._context.lineWidth = props.dot_radius - 2;\n\n      this._context.stroke();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      this._borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      this._disputedBorders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      this._land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n      if (x && y) projection.rotate(p1);\n      this._context = canvas.node().getContext('2d');\n      this._path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, this._context);\n      var p2 = [];\n      var highlightArea; // Lat/Lon\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1]; // Region\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        var filteredFeatures = countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.getIsoAlpha3(d.properties));\n        });\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, filteredFeatures);\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Sub-region\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        var _filteredFeatures = countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.getIsoAlpha3(d.properties));\n        });\n\n        highlightArea = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, _filteredFeatures);\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea); // Country\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        highlightArea = countries.features.find(function (d) {\n          return props.getIsoAlpha3(d.properties) === isoAlpha3;\n        });\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(highlightArea);\n      } else {\n        p2 = [0, 0];\n      }\n\n      var geoPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), this._context);\n      var highlightAreaSize = geoPath.area(highlightArea);\n      var showMarker = highlightAreaSize < props.area_threshold && props.enable_dot;\n\n      var drawMap = function drawMap(projectedCentroid) {\n        _this2._context.clearRect(0, 0, width, width);\n\n        _this2._drawLand();\n\n        if (!showMarker) _this2._drawHighlightedArea(highlightArea);\n        if (props.disputed) _this2._drawDisputedBorders();\n\n        _this2._drawBorders();\n\n        if (showMarker) {\n          var geoAngle = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoDistance(p2, [-projection.rotate()[0], projection.rotate()[1]]); // Check if the marker is behind the globe\n\n          if (geoAngle < 1.57079632679490) {\n            _this2._drawMarker(projectedCentroid);\n          }\n        }\n\n        _this2._drawSphere();\n      };\n\n      var rotateToPoint = function rotateToPoint() {\n        var interpolator = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n        canvas.transition().duration(props.duration).tween('rotate', function () {\n          return function (t) {\n            projection.rotate(interpolator(t));\n            var projectedCentroid = projection(p2);\n            drawMap(projectedCentroid);\n          };\n        });\n        canvas.attr('centroid-x', p2[0]);\n        canvas.attr('centroid-y', p2[1]);\n      };\n\n      var rotate = function rotate(elapsed) {\n        projection.rotate([0.15 * elapsed, props.vertical_tilt - p2[1]]);\n        var projectedCentroid = projection(p2);\n        drawMap(projectedCentroid);\n      };\n\n      if (!props.spin) {\n        if (this._timer) {\n          this._timer.stop();\n\n          this._timer = null;\n        }\n\n        rotateToPoint();\n      } else {\n        if (!this._timer) {\n          this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interval(function (elapsed) {\n            rotate(elapsed);\n          }, 750);\n        }\n      }\n\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImdldElzb0FscGhhMyIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsIl9jb250ZXh0IiwiYmVnaW5QYXRoIiwiX3BhdGgiLCJ0eXBlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJfbGFuZCIsImZpbGxTdHlsZSIsImZpbGwiLCJfYm9yZGVycyIsInNldExpbmVEYXNoIiwiX2Rpc3B1dGVkQm9yZGVycyIsImhpZ2hsaWdodEFyZWEiLCJwcm9qZWN0ZWRDZW50cm9pZCIsImFyYyIsIk1hdGgiLCJQSSIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiYSIsImIiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImdldENvbnRleHQiLCJnZW9QYXRoIiwicDIiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJmaWx0ZXJlZEZlYXR1cmVzIiwiZ2VvbWV0cmllcyIsImZpbHRlciIsImluY2x1ZGVzIiwiZ2VvQ2VudHJvaWQiLCJnZXRTdWJyZWdpb24iLCJnZXRDb3VudHJ5IiwiZmVhdHVyZXMiLCJmaW5kIiwiaGlnaGxpZ2h0QXJlYVNpemUiLCJhcmVhIiwic2hvd01hcmtlciIsImRyYXdNYXAiLCJjbGVhclJlY3QiLCJfZHJhd0xhbmQiLCJfZHJhd0hpZ2hsaWdodGVkQXJlYSIsIl9kcmF3RGlzcHV0ZWRCb3JkZXJzIiwiX2RyYXdCb3JkZXJzIiwiZ2VvQW5nbGUiLCJnZW9EaXN0YW5jZSIsIl9kcmF3TWFya2VyIiwiX2RyYXdTcGhlcmUiLCJyb3RhdGVUb1BvaW50IiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGUiLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJ0IiwiZWxhcHNlZCIsIl90aW1lciIsInN0b3AiLCJpbnRlcnZhbCIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyx5QkFBbUIsRUFBRSxTQURSO0FBRWJDLHdCQUFrQixFQUFFLDBCQUZQO0FBR2JDLDRCQUFzQixFQUFFLEdBSFg7QUFJYkMseUJBQW1CLEVBQUUsR0FKUjtBQUtiQyxxQkFBZSxFQUFFLFNBTEo7QUFNYkMsZ0JBQVUsRUFBRSwwQkFOQztBQU9iQyxtQkFBYSxFQUFFLEVBUEY7QUFRYkMsWUFBTSxFQUFFLEVBUks7QUFTYkMsY0FBUSxFQUFFLEdBVEc7QUFVYkMsZ0JBQVUsRUFBRSxJQVZD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QUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUNEUCxxQkFBYTtBQUNkLE9BTkQsTUFNTztBQUNMLFlBQUksQ0FBQyxLQUFLTyxNQUFWLEVBQWtCO0FBQ2hCLGVBQUtBLE1BQUwsR0FBY25ELGtEQUFFLENBQUNxRCxRQUFILENBQVksVUFBQ0gsT0FBRCxFQUFhO0FBQ3JDdkMsa0JBQU0sQ0FBQ3VDLE9BQUQsQ0FBTjtBQUNELFdBRmEsRUFFWCxHQUZXLENBQWQ7QUFHRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7O0VBek13QkksNEQ7O0FBNE1aN0csMkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBhcmVhX3RocmVzaG9sZDogMTAwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgZ2V0SXNvQWxwaGEzOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBfZHJhd1NwaGVyZSgpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICB0aGlzLl9jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuX3BhdGgoeyB0eXBlOiAnU3BoZXJlJyB9KTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdMYW5kKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aCh0aGlzLl9sYW5kKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgdGhpcy5fY29udGV4dC5maWxsKCk7XG4gIH1cblxuICBfZHJhd0JvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2JvcmRlcnMpO1xuICAgIHRoaXMuX2NvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdEaXNwdXRlZEJvcmRlcnMoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9wYXRoKHRoaXMuX2Rpc3B1dGVkQm9yZGVycyk7XG4gICAgdGhpcy5fY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgX2RyYXdIaWdobGlnaHRlZEFyZWEoaGlnaGxpZ2h0QXJlYSkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5fcGF0aChoaWdobGlnaHRBcmVhKTtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICB0aGlzLl9jb250ZXh0LmZpbGwoKTtcbiAgfVxuXG4gIF9kcmF3TWFya2VyKHByb2plY3RlZENlbnRyb2lkKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgdGhpcy5fY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLl9jb250ZXh0LmFyYyhwcm9qZWN0ZWRDZW50cm9pZFswXSwgcHJvamVjdGVkQ2VudHJvaWRbMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgIHRoaXMuX2NvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgdGhpcy5fY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3QgdG9wb2xvZ3kgPSB0aGlzLnRvcG9qc29uKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uKCk7XG4gICAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuY291bnRyaWVzXTtcbiAgICBjb25zdCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5kaXNwdXRlZEJvdW5kYXJpZXNdO1xuICAgIGNvbnN0IGxhbmRGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5sYW5kXTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMpO1xuXG4gICAgdGhpcy5fYm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgdGhpcy5fZGlzcHV0ZWRCb3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMpO1xuICAgIHRoaXMuX2xhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBsYW5kRmVhdHVyZXMpO1xuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5zZWxlY3Rpb24oKS5hcHBlbmRTZWxlY3QoJ2NhbnZhcycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB3aWR0aCk7XG5cbiAgICBjb25zdCB4ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnKTtcbiAgICBjb25zdCB5ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknKTtcbiAgICBjb25zdCBwMSA9IFsteCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldO1xuXG4gICAgaWYgKHggJiYgeSkgcHJvamVjdGlvbi5yb3RhdGUocDEpO1xuXG4gICAgdGhpcy5fY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLl9wYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uLCB0aGlzLl9jb250ZXh0KTtcblxuICAgIGxldCBwMiA9IFtdO1xuICAgIGxldCBoaWdobGlnaHRBcmVhO1xuICAgIC8vIExhdC9Mb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICAvLyBSZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgY29uc3QgZmlsdGVyZWRGZWF0dXJlcyA9IGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuZ2V0SXNvQWxwaGEzKGQucHJvcGVydGllcykpKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgZmlsdGVyZWRGZWF0dXJlcyk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIC8vIFN1Yi1yZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0U3VicmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgY29uc3QgZmlsdGVyZWRGZWF0dXJlcyA9IGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuZ2V0SXNvQWxwaGEzKGQucHJvcGVydGllcykpKTtcbiAgICAgIGhpZ2hsaWdodEFyZWEgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgZmlsdGVyZWRGZWF0dXJlcyk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGhpZ2hsaWdodEFyZWEpO1xuICAgIC8vIENvdW50cnlcbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pKSB7XG4gICAgICBjb25zdCB7IGlzb0FscGhhMyB9ID0gQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbik7XG4gICAgICBoaWdobGlnaHRBcmVhID0gY291bnRyaWVzLmZlYXR1cmVzLmZpbmQoZCA9PiBwcm9wcy5nZXRJc29BbHBoYTMoZC5wcm9wZXJ0aWVzKSA9PT0gaXNvQWxwaGEzKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoaGlnaGxpZ2h0QXJlYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyID0gWzAsIDBdO1xuICAgIH1cblxuICAgIGNvbnN0IGdlb1BhdGggPSBkMy5nZW9QYXRoKFxuICAgICAgZDMuZ2VvT3J0aG9ncmFwaGljKClcbiAgICAgICAgLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSlcbiAgICAgICAgLnJvdGF0ZShbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKSxcbiAgICAgIHRoaXMuX2NvbnRleHRcbiAgICApO1xuICAgIGNvbnN0IGhpZ2hsaWdodEFyZWFTaXplID0gZ2VvUGF0aC5hcmVhKGhpZ2hsaWdodEFyZWEpO1xuICAgIGNvbnN0IHNob3dNYXJrZXIgPSBoaWdobGlnaHRBcmVhU2l6ZSA8IHByb3BzLmFyZWFfdGhyZXNob2xkICYmIHByb3BzLmVuYWJsZV9kb3Q7XG5cbiAgICBjb25zdCBkcmF3TWFwID0gKHByb2plY3RlZENlbnRyb2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgdGhpcy5fZHJhd0xhbmQoKTtcblxuICAgICAgaWYgKCFzaG93TWFya2VyKSB0aGlzLl9kcmF3SGlnaGxpZ2h0ZWRBcmVhKGhpZ2hsaWdodEFyZWEpO1xuXG4gICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHRoaXMuX2RyYXdEaXNwdXRlZEJvcmRlcnMoKTtcbiAgICAgIHRoaXMuX2RyYXdCb3JkZXJzKCk7XG5cbiAgICAgIGlmIChzaG93TWFya2VyKSB7XG4gICAgICAgIGNvbnN0IGdlb0FuZ2xlID0gZDMuZ2VvRGlzdGFuY2UocDIsIFstcHJvamVjdGlvbi5yb3RhdGUoKVswXSwgcHJvamVjdGlvbi5yb3RhdGUoKVsxXV0pO1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWFya2VyIGlzIGJlaGluZCB0aGUgZ2xvYmVcbiAgICAgICAgaWYgKGdlb0FuZ2xlIDwgMS41NzA3OTYzMjY3OTQ5MCkge1xuICAgICAgICAgIHRoaXMuX2RyYXdNYXJrZXIocHJvamVjdGVkQ2VudHJvaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RyYXdTcGhlcmUoKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm90YXRlVG9Qb2ludCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgIC50d2Vlbigncm90YXRlJywgKCkgPT5cbiAgICAgICAgICAodCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoaW50ZXJwb2xhdG9yKHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZENlbnRyb2lkID0gcHJvamVjdGlvbihwMik7XG4gICAgICAgICAgICBkcmF3TWFwKHByb2plY3RlZENlbnRyb2lkKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC15JywgcDJbMV0pO1xuICAgIH07XG5cbiAgICBjb25zdCByb3RhdGUgPSAoZWxhcHNlZCkgPT4ge1xuICAgICAgcHJvamVjdGlvbi5yb3RhdGUoWzAuMTUgKiBlbGFwc2VkLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKTtcbiAgICAgIGNvbnN0IHByb2plY3RlZENlbnRyb2lkID0gcHJvamVjdGlvbihwMik7XG4gICAgICBkcmF3TWFwKHByb2plY3RlZENlbnRyb2lkKTtcbiAgICB9O1xuXG4gICAgaWYgKCFwcm9wcy5zcGluKSB7XG4gICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgdGhpcy5fdGltZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICByb3RhdGVUb1BvaW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fdGltZXIpIHtcbiAgICAgICAgdGhpcy5fdGltZXIgPSBkMy5pbnRlcnZhbCgoZWxhcHNlZCkgPT4ge1xuICAgICAgICAgIHJvdGF0ZShlbGFwc2VkKTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})