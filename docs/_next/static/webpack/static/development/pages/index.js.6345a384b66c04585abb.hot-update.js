webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (props.spin) {\n        _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].timer(function (elapsed) {\n          console.log('FIRES');\n          projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n          render();\n        });\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var country;\n      var merged;\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1];\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        country = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area, endPath;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(countries);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImJvcmRlcnMiLCJhIiwiYiIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInAxIiwicm90YXRlIiwidGltZXIiLCJlbGFwc2VkIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJtZXJnZWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImFyZWEiLCJlbmRQYXRoIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMseUJBQW1CLEVBQUUsU0FEUjtBQUViQyx3QkFBa0IsRUFBRSwwQkFGUDtBQUdiQyw0QkFBc0IsRUFBRSxHQUhYO0FBSWJDLHlCQUFtQixFQUFFLEdBSlI7QUFLYkMscUJBQWUsRUFBRSxTQUxKO0FBTWJDLGdCQUFVLEVBQUUsMEJBTkM7QUFPYkMsbUJBQWEsRUFBRSxFQVBGO0FBUWJDLFlBQU0sRUFBRSxFQVJLO0FBU2JDLGNBQVEsRUFBRSxHQVRHO0FBVWJDLGdCQUFVLEVBQUUsSUFWQztBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsY0FBUSxFQUFFLElBWkc7QUFhYkMsb0JBQWMsRUFBRSxFQWJIO0FBY2JDLHdCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FkUDtBQWViQyxzQkFBZ0IsRUFBRTtBQUNoQkMsaUJBQVMsRUFBRSxXQURLO0FBRWhCQywwQkFBa0IsRUFBRSxvQkFGSjtBQUdoQkMsWUFBSSxFQUFFO0FBSFUsT0FmTDtBQW9CYkMsVUFBSSxFQUFFLEtBcEJPO0FBcUJiQyxxQkFB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBhcmVhX3RocmVzaG9sZDogMTAsXG4gICAgZGlzcHV0ZWRfZGFzaGFycmF5OiBbNSwgNV0sXG4gICAgdG9wb2pzb25GZWF0dXJlczoge1xuICAgICAgY291bnRyaWVzOiAnY291bnRyaWVzJyxcbiAgICAgIGRpc3B1dGVkQm91bmRhcmllczogJ2Rpc3B1dGVkQm91bmRhcmllcycsXG4gICAgICBsYW5kOiAnbGFuZCcsXG4gICAgfSxcbiAgICBzcGluOiBmYWxzZSxcbiAgICBjb3VudHJ5SWRHZXR0ZXI6IChwcm9wZXJ0aWVzKSA9PiBwcm9wZXJ0aWVzLmlzb0FscGhhMyxcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3QgdG9wb2xvZ3kgPSB0aGlzLnRvcG9qc29uKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uKCk7XG4gICAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuY291bnRyaWVzXTtcbiAgICBjb25zdCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5kaXNwdXRlZEJvdW5kYXJpZXNdO1xuICAgIGNvbnN0IGxhbmRGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5sYW5kXTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMpO1xuICAgIGNvbnN0IGJvcmRlcnMgPSB0b3BvanNvbi5tZXNoKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcywgKGEsIGIpID0+IGEgIT09IGIpO1xuICAgIGNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMpO1xuICAgIGNvbnN0IGxhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBsYW5kRmVhdHVyZXMpO1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG4gICAgY29uc3QgcDEgPSBbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKHAxKTtcbiAgICB9XG4gICAgaWYgKHByb3BzLnNwaW4pIHtcbiAgICAgIGQzLnRpbWVyKGZ1bmN0aW9uKGVsYXBzZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZJUkVTJyk7XG4gICAgICAgIHByb2plY3Rpb24ucm90YXRlKFswLjAyICogZWxhcHNlZCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldKTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLm5vZGUoKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgocHJvamVjdGlvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgcDIgPSBbXTsgbGV0IGNvdW50cnk7IGxldCBtZXJnZWQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobG9jYXRpb24pICYmIGxvY2F0aW9uLmxlbmd0aCA9PT0gMikge1xuICAgICAgcDJbMF0gPSBsb2NhdGlvblswXTtcbiAgICAgIHAyWzFdID0gbG9jYXRpb25bMV07XG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRSZWdpb24obG9jYXRpb24pKSB7XG4gICAgICBjb25zdCBjb3VudHJ5TGlzdCA9IEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEzKTtcbiAgICAgIG1lcmdlZCA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcy5nZW9tZXRyaWVzLmZpbHRlcihkID0+IGNvdW50cnlMaXN0LmluY2x1ZGVzKHByb3BzLmNvdW50cnlJZEdldHRlcihkLnByb3BlcnRpZXMpKSkpO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChtZXJnZWQpO1xuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0U3VicmVnaW9uKGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSBBdGxhcy5nZXRTdWJyZWdpb24obG9jYXRpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMyk7XG4gICAgICBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQobWVyZ2VkKTtcbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pKSB7XG4gICAgICBjb25zdCB7IGlzb0FscGhhMyB9ID0gQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbik7XG4gICAgICBjb3VudHJ5ID0gY291bnRyaWVzLmZlYXR1cmVzLmZpbHRlcihkID0+IHByb3BzLmNvdW50cnlJZEdldHRlcihkLnByb3BlcnRpZXMpID09PSBpc29BbHBoYTMpWzBdO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChjb3VudHJ5KTtcbiAgICB9XG5cbiAgICBsZXQgYXJlYSwgZW5kUGF0aDtcblxuICAgIHJlbmRlcigpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChwMVswXSAhPT0gcDJbMF0gJiYgcDFbMV0gIT09IHAyWzFdICYmIChwMlswXSAmJiBwMlsxXSkpIHtcbiAgICAgICAgZW5kUGF0aCA9IGQzLmdlb1BhdGgoZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKS5yb3RhdGUoWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSksIGNvbnRleHQpO1xuICAgICAgICBjb25zdCByID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSk7XG4gICAgICAgIGFyZWEgPSBlbmRQYXRoLmFyZWEoY291bnRyeSk7XG4gICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocDIpO1xuICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBwYXRoKGxhbmQpO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICBpZiAobWVyZ2VkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKG1lcmdlZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNvdW50cnkgJiYgYXJlYSA+IHByb3BzLmFyZWFfdGhyZXNob2xkKSB8fCAoIXByb3BzLmVuYWJsZV9kb3QpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKGNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChkaXNwdXRlZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IHBhdGgoYm9yZGVycyk7IGNvbnRleHQuc2V0TGluZURhc2goW10pOyBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjsgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzOyBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICBpZiAocHJvcHMuZW5hYmxlX2RvdCAmJiBhcmVhIDwgcHJvcHMuYXJlYV90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJjKGNlbnRyb2lkUHJvWzBdLCBjZW50cm9pZFByb1sxXSwgcHJvcHMuZG90X3JhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5kb3RfcmFkaXVzIC0gMjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgIHBhdGgoc3BoZXJlKTtcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlO1xuICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoY291bnRyaWVzKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTsgcGF0aChkaXNwdXRlZCk7XG4gICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoYm9yZGVycyk7XG4gICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})