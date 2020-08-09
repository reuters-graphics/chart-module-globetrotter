webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      location: {\n        value: false,\n        type: 'country'\n      },\n      // Other types are point and region\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures); // const land = topojson.merge(topology, countriesFeatures.geometries);\n\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var country;\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1];\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        var _merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countries.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(_merged);\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        country = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area, endPath, merged;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(countries);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwidG9wb2pzb25GZWF0dXJlcyIsImNvdW50cmllcyIsImRpc3B1dGVkQm91bmRhcmllcyIsImxhbmQiLCJjb3VudHJ5SWRHZXR0ZXIiLCJwcm9wZXJ0aWVzIiwiaXNvQWxwaGEzIiwicHJvcHMiLCJ0b3BvbG9neSIsInRvcG9qc29uIiwiY291bnRyaWVzRmVhdHVyZXMiLCJvYmplY3RzIiwiZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMiLCJsYW5kRmVhdHVyZXMiLCJub2RlIiwic2VsZWN0aW9uIiwic3BoZXJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJib3JkZXJzIiwiYSIsImIiLCJwcm9qZWN0aW9uIiwiZDMiLCJnZW9PcnRob2dyYXBoaWMiLCJmaXRFeHRlbnQiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJtZXJnZWQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImFyZWEiLCJlbmRQYXRoIiwicmVuZGVyIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMseUJBQW1CLEVBQUUsU0FEUjtBQUViQyx3QkFBa0IsRUFBRSwwQkFGUDtBQUdiQyw0QkFBc0IsRUFBRSxHQUhYO0FBSWJDLHlCQUFtQixFQUFFLEdBSlI7QUFLYkMscUJBQWUsRUFBRSxTQUxKO0FBTWJDLGdCQUFVLEVBQUUsMEJBTkM7QUFPYkMsbUJBQWEsRUFBRSxFQVBGO0FBUWJDLFlBQU0sRUFBRSxFQVJLO0FBU2JDLGNBQVEsRUFBRSxHQVRHO0FBVWJDLGdCQUFVLEVBQUUsSUFWQztBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsY0FBUSxFQUFFLElBWkc7QUFhYkMsY0FBUSxFQUFFO0FBQUVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFJLEVBQUU7QUFBdEIsT0FiRztBQWFnQztBQUM3Q0Msb0JBQWMsRUFBRSxFQWRIO0FBZWJDLHdCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FmUDtBQWdCYkMsc0JBQWdCLEVBQUU7QUFDaEJDLGlCQUFTLEVBQUUsV0FESztBQUVoQkMsMEJBQWtCLEVBQUUsb0JBRko7QUFHaEJDLFlBQUksRUFBRTtBQUhVLE9BaEJMO0FBcUJiQyxx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QU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosRUFBMEJTLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBQ0FYLFlBQU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosRUFBMEJTLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUE1SndCb0MsNEQ7O0FBK0paM0YsMkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBsb2NhdGlvbjogeyB2YWx1ZTogZmFsc2UsIHR5cGU6ICdjb3VudHJ5JyB9LCAvLyBPdGhlciB0eXBlcyBhcmUgcG9pbnQgYW5kIHJlZ2lvblxuICAgIGFyZWFfdGhyZXNob2xkOiAxMCxcbiAgICBkaXNwdXRlZF9kYXNoYXJyYXk6IFs1LCA1XSxcbiAgICB0b3BvanNvbkZlYXR1cmVzOiB7XG4gICAgICBjb3VudHJpZXM6ICdjb3VudHJpZXMnLFxuICAgICAgZGlzcHV0ZWRCb3VuZGFyaWVzOiAnZGlzcHV0ZWRCb3VuZGFyaWVzJyxcbiAgICAgIGxhbmQ6ICdsYW5kJyxcbiAgICB9LFxuICAgIGNvdW50cnlJZEdldHRlcjogKHByb3BlcnRpZXMpID0+IHByb3BlcnRpZXMuaXNvQWxwaGEzLFxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCB0b3BvbG9neSA9IHRoaXMudG9wb2pzb24oKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24oKTtcbiAgICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5jb3VudHJpZXNdO1xuICAgIGNvbnN0IGRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmRpc3B1dGVkQm91bmRhcmllc107XG4gICAgY29uc3QgbGFuZEZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmxhbmRdO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBzcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH07XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcyk7XG4gICAgY29uc3QgYm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHRvcG9sb2d5LCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyk7XG4gICAgY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUodG9wb2xvZ3ksIGxhbmRGZWF0dXJlcyk7XG4gICAgLy8gY29uc3QgbGFuZCA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcy5nZW9tZXRyaWVzKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBjb3VudHJ5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxvY2F0aW9uKSAmJiBsb2NhdGlvbi5sZW5ndGggPT09IDIpIHtcbiAgICAgIHAyWzBdID0gbG9jYXRpb25bMF07XG4gICAgICBwMlsxXSA9IGxvY2F0aW9uWzFdO1xuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSBBdGxhcy5nZXRSZWdpb24obG9jYXRpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMyk7XG4gICAgICBjb25zdCBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykpKSk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKG1lcmdlZCk7XG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgeyBpc29BbHBoYTMgfSA9IEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pO1xuICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSA9PT0gaXNvQWxwaGEzKVswXTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgfVxuXG4gICAgbGV0IGFyZWEsIGVuZFBhdGgsIG1lcmdlZDtcblxuICAgIHJlbmRlcigpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChwMVswXSAhPT0gcDJbMF0gJiYgcDFbMV0gIT09IHAyWzFdICYmIChwMlswXSAmJiBwMlsxXSkpIHtcbiAgICAgICAgZW5kUGF0aCA9IGQzLmdlb1BhdGgoZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKS5yb3RhdGUoWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSksIGNvbnRleHQpO1xuICAgICAgICBjb25zdCByID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSk7XG4gICAgICAgIGFyZWEgPSBlbmRQYXRoLmFyZWEoY291bnRyeSk7XG4gICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocDIpO1xuICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBwYXRoKGxhbmQpO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICBpZiAobWVyZ2VkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKG1lcmdlZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNvdW50cnkgJiYgYXJlYSA+IHByb3BzLmFyZWFfdGhyZXNob2xkKSB8fCAoIXByb3BzLmVuYWJsZV9kb3QpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKGNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChkaXNwdXRlZCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7IHBhdGgoYm9yZGVycyk7IGNvbnRleHQuc2V0TGluZURhc2goW10pOyBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjsgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzOyBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICBpZiAocHJvcHMuZW5hYmxlX2RvdCAmJiBhcmVhIDwgcHJvcHMuYXJlYV90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJjKGNlbnRyb2lkUHJvWzBdLCBjZW50cm9pZFByb1sxXSwgcHJvcHMuZG90X3JhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5kb3RfcmFkaXVzIC0gMjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgIHBhdGgoc3BoZXJlKTtcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlO1xuICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoY291bnRyaWVzKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTsgcGF0aChkaXNwdXRlZCk7XG4gICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoYm9yZGVycyk7XG4gICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})