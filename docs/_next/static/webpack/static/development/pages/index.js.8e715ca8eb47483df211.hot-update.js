webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (this._timer) this._timer.stop();\n\n      if (props.spin) {\n        this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].timer(function (elapsed) {\n          projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n          render();\n        }, 100);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var country;\n      var merged;\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1];\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        country = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area, endPath;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(countries);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImJvcmRlcnMiLCJhIiwiYiIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInAxIiwicm90YXRlIiwiX3RpbWVyIiwic3RvcCIsInRpbWVyIiwiZWxhcHNlZCIsInJlbmRlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJtZXJnZWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImFyZWEiLCJlbmRQYXRoIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMseUJBQW1CLEVBQUUsU0FEUjtBQUViQyx3QkFBa0IsRUFBRSwwQkFGUDtBQUdiQyw0QkFBc0IsRUFBRSxHQUhYO0FBSWJDLHlCQUFtQixFQUFFLEdBSlI7QUFLYkMscUJBQWUsRUFBRSxTQUxKO0FBTWJDLGdCQUFVLEVBQUUsMEJBTkM7QUFPYkMsbUJBQWEsRUFBRSxFQVBGO0FBUWJDLFlBQU0sRUFBRSxFQVJLO0FBU2JDLGNBQVEsRUFBRSxHQVRHO0FBVWJDLGdCQUFVLEVBQUUsSUFWQztBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsY0FBUSxFQUFFLElBWkc7QUFhYkMsb0JBQWMsRUFBRSxFQWJIO0FBY2JDLHdCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FkUDtBQWViQyxzQkFBZ0IsRUFBRTtBQUNoQkMsaUJBQVMsRUFBRSxXQURLO0FBRWhCQywwQkFBa0IsRUFBRSxvQkFGSjtBQUdoQkMsWUFBSSxFQUFFO0FBSFUsT0FmTDtBQW9CYkMsVUFBSSxFQUFFLEtBcEJPO0FBcUJiQyxxQkFB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QXlLWmhHLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcblxuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBzdHJva2Vfd2lkdGhfY291bnRyaWVzOiAwLjUsXG4gICAgc3Ryb2tlX3dpZHRoX3NwaGVyZTogMC4xLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgYXJlYV90aHJlc2hvbGQ6IDEwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgY291bnRyeUlkR2V0dGVyOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IHRvcG9sb2d5ID0gdGhpcy50b3BvanNvbigpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbigpO1xuICAgIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmNvdW50cmllc107XG4gICAgY29uc3QgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuZGlzcHV0ZWRCb3VuZGFyaWVzXTtcbiAgICBjb25zdCBsYW5kRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMubGFuZF07XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMsIChhLCBiKSA9PiBhICE9PSBiKTtcbiAgICBjb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzKTtcbiAgICBjb25zdCBsYW5kID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgbGFuZEZlYXR1cmVzKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl90aW1lcikgdGhpcy5fdGltZXIuc3RvcCgpO1xuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICB0aGlzLl90aW1lciA9IGQzLnRpbWVyKGZ1bmN0aW9uKGVsYXBzZWQpIHtcbiAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUoWzAuMDIgKiBlbGFwc2VkLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV0pO1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBjb3VudHJ5OyBsZXQgbWVyZ2VkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxvY2F0aW9uKSAmJiBsb2NhdGlvbi5sZW5ndGggPT09IDIpIHtcbiAgICAgIHAyWzBdID0gbG9jYXRpb25bMF07XG4gICAgICBwMlsxXSA9IGxvY2F0aW9uWzFdO1xuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSBBdGxhcy5nZXRSZWdpb24obG9jYXRpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMyk7XG4gICAgICBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQobWVyZ2VkKTtcbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0U3VicmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgbWVyZ2VkID0gdG9wb2pzb24ubWVyZ2UodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykpKSk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKG1lcmdlZCk7XG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgeyBpc29BbHBoYTMgfSA9IEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pO1xuICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSA9PT0gaXNvQWxwaGEzKVswXTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgfVxuXG4gICAgbGV0IGFyZWEsIGVuZFBhdGg7XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAocDFbMF0gIT09IHAyWzBdICYmIHAxWzFdICE9PSBwMlsxXSAmJiAocDJbMF0gJiYgcDJbMV0pKSB7XG4gICAgICAgIGVuZFBhdGggPSBkMy5nZW9QYXRoKGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSkucm90YXRlKFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBhcmVhID0gZW5kUGF0aC5hcmVhKGNvdW50cnkpO1xuICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHByb3BzLmR1cmF0aW9uKVxuICAgICAgICAgIC50d2Vlbigncm90YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyKHQpKTtcbiAgICAgICAgICAgICAgY29uc3QgY2VudHJvaWRQcm8gPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgcGF0aChsYW5kKTtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgaWYgKG1lcmdlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChtZXJnZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjb3VudHJ5ICYmIGFyZWEgPiBwcm9wcy5hcmVhX3RocmVzaG9sZCkgfHwgKCFwcm9wcy5lbmFibGVfZG90KSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgoZGlzcHV0ZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGJvcmRlcnMpOyBjb250ZXh0LnNldExpbmVEYXNoKFtdKTsgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7IGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllczsgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QgJiYgYXJlYSA8IHByb3BzLmFyZWFfdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhjZW50cm9pZFByb1swXSwgY2VudHJvaWRQcm9bMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKGNvdW50cmllcyk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IHBhdGgoZGlzcHV0ZWQpO1xuICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KTtcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKGJvcmRlcnMpO1xuICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtdKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aChzcGhlcmUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmU7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC14JywgcDJbMF0pO1xuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC15JywgcDJbMV0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmV0cm90dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})