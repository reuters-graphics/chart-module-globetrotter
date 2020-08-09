webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (props.spin) {\n        _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].timer(function (elapsed) {\n          projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n        });\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var country;\n      var merged;\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1];\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        country = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area, endPath;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(countries);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImJvcmRlcnMiLCJhIiwiYiIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInAxIiwicm90YXRlIiwidGltZXIiLCJlbGFwc2VkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJwYXRoIiwiZ2VvUGF0aCIsInAyIiwiY291bnRyeSIsIm1lcmdlZCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImdldFJlZ2lvbiIsImNvdW50cnlMaXN0IiwibWFwIiwiZCIsImdlb21ldHJpZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImdlb0NlbnRyb2lkIiwiZ2V0U3VicmVnaW9uIiwiZ2V0Q291bnRyeSIsImZlYXR1cmVzIiwiYXJlYSIsImVuZFBhdGgiLCJyZW5kZXIiLCJyIiwiaW50ZXJwb2xhdGUiLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJ0IiwiY2VudHJvaWRQcm8iLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwic2V0TGluZURhc2giLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImFyYyIsIk1hdGgiLCJQSSIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyx5QkFBbUIsRUFBRSxTQURSO0FBRWJDLHdCQUFrQixFQUFFLDBCQUZQO0FBR2JDLDRCQUFzQixFQUFFLEdBSFg7QUFJYkMseUJBQW1CLEVBQUUsR0FKUjtBQUtiQyxxQkFBZSxFQUFFLFNBTEo7QUFNYkMsZ0JBQVUsRUFBRSwwQkFOQztBQU9iQyxtQkFBYSxFQUFFLEVBUEY7QUFRYkMsWUFBTSxFQUFFLEVBUks7QUFTYkMsY0FBUSxFQUFFLEdBVEc7QUFVYkMsZ0JBQVUsRUFBRSxJQVZDO0FBV2JDLGdCQUFVLEVBQUUsQ0FYQztBQVliQyxjQUFRLEVBQUUsSUFaRztBQWFiQyxvQkFBYyxFQUFFLEVBYkg7QUFjYkMsd0JBQWtCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQWRQO0FBZWJDLHNCQUFnQixFQUFFO0FBQ2hCQyxpQkFBUyxFQUFFLFdBREs7QUFFaEJDLDBCQUFrQixFQUFFLG9CQUZKO0FBR2hCQyxZQUFJLEVBQUU7QUFIVSxPQWZMO0FBb0JiQyxVQUFJLEVBQUUsS0FwQk87QUFxQmJDLHFCQUFlLEVBQUUseUJBQUNDLFVB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SSxDQUFDM0MsUUFBRCxDQUFKO0FBQ3JCeUMsbUJBQU8sQ0FBQ2tDLFdBQVIsQ0FBb0JoRSxLQUFLLENBQUNULGtCQUExQjtBQUNBdUMsbUJBQU8sQ0FBQ21DLFdBQVIsR0FBc0JqRSxLQUFLLENBQUN0QixtQkFBNUI7QUFDQW9ELG1CQUFPLENBQUNvQyxTQUFSLEdBQW9CbEUsS0FBSyxDQUFDcEIsc0JBQTFCO0FBQ0FrRCxtQkFBTyxDQUFDcUMsTUFBUjtBQUNEOztBQUNEckMsaUJBQU8sQ0FBQytCLFNBQVI7QUFDQTdCLGNBQUksQ0FBQ2xCLE9BQUQsQ0FBSjtBQUNBZ0IsaUJBQU8sQ0FBQ2tDLFdBQVIsQ0FBb0IsRUFBcEI7QUFDQWxDLGlCQUFPLENBQUNtQyxXQUFSLEdBQXNCakUsS0FBSyxDQUFDdEIsbUJBQTVCO0FBQ0FvRCxpQkFBTyxDQUFDb0MsU0FBUixHQUFvQmxFLEtBQUssQ0FBQ3BCLHNCQUExQjtBQUNBa0QsaUJBQU8sQ0FBQ3FDLE1BQVI7QUFDQXJDLGlCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixjQUFJLENBQUN0QixNQUFELENBQUo7QUFDQW9CLGlCQUFPLENBQUNtQyxXQUFSLEdBQXNCakUsS0FBSyxDQUFDckIsa0JBQTVCO0FBQ0FtRCxpQkFBTyxDQUFDb0MsU0FBUixHQUFvQmxFLEtBQUssQ0FBQ25CLG1CQUExQjtBQUNBaUQsaUJBQU8sQ0FBQ3FDLE1BQVI7QUFDRDtBQUNGOztBQUFBO0FBRUQ5QyxZQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLEVBQTBCVyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUNBYixZQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLEVBQTBCVyxFQUFFLENBQUMsQ0FBRCxDQUE1QjtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7O0VBcEt3QnFDLDREOztBQXVLWjlGLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHRvcG9qc29uIGZyb20gJ3RvcG9qc29uLWNsaWVudCc7XG5cbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcblxuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBzdHJva2Vfd2lkdGhfY291bnRyaWVzOiAwLjUsXG4gICAgc3Ryb2tlX3dpZHRoX3NwaGVyZTogMC4xLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgYXJlYV90aHJlc2hvbGQ6IDEwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICAgIHRvcG9qc29uRmVhdHVyZXM6IHtcbiAgICAgIGNvdW50cmllczogJ2NvdW50cmllcycsXG4gICAgICBkaXNwdXRlZEJvdW5kYXJpZXM6ICdkaXNwdXRlZEJvdW5kYXJpZXMnLFxuICAgICAgbGFuZDogJ2xhbmQnLFxuICAgIH0sXG4gICAgc3BpbjogZmFsc2UsXG4gICAgY291bnRyeUlkR2V0dGVyOiAocHJvcGVydGllcykgPT4gcHJvcGVydGllcy5pc29BbHBoYTMsXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IHRvcG9sb2d5ID0gdGhpcy50b3BvanNvbigpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbigpO1xuICAgIGNvbnN0IGNvdW50cmllc0ZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmNvdW50cmllc107XG4gICAgY29uc3QgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuZGlzcHV0ZWRCb3VuZGFyaWVzXTtcbiAgICBjb25zdCBsYW5kRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMubGFuZF07XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMsIChhLCBiKSA9PiBhICE9PSBiKTtcbiAgICBjb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzKTtcbiAgICBjb25zdCBsYW5kID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgbGFuZEZlYXR1cmVzKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICBkMy50aW1lcihmdW5jdGlvbihlbGFwc2VkKSB7XG4gICAgICAgIHByb2plY3Rpb24ucm90YXRlKFswLjAyICogZWxhcHNlZCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMubm9kZSgpLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uLCBjb250ZXh0KTtcblxuICAgIGxldCBwMiA9IFtdOyBsZXQgY291bnRyeTsgbGV0IG1lcmdlZDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgbWVyZ2VkID0gdG9wb2pzb24ubWVyZ2UodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykpKSk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKG1lcmdlZCk7XG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRTdWJyZWdpb24obG9jYXRpb24pKSB7XG4gICAgICBjb25zdCBjb3VudHJ5TGlzdCA9IEF0bGFzLmdldFN1YnJlZ2lvbihsb2NhdGlvbikuY291bnRyaWVzLm1hcChkID0+IGQuaXNvQWxwaGEzKTtcbiAgICAgIG1lcmdlZCA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcy5nZW9tZXRyaWVzLmZpbHRlcihkID0+IGNvdW50cnlMaXN0LmluY2x1ZGVzKHByb3BzLmNvdW50cnlJZEdldHRlcihkLnByb3BlcnRpZXMpKSkpO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChtZXJnZWQpO1xuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0Q291bnRyeShsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IHsgaXNvQWxwaGEzIH0gPSBBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKTtcbiAgICAgIGNvdW50cnkgPSBjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gcHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykgPT09IGlzb0FscGhhMylbMF07XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgIH1cblxuICAgIGxldCBhcmVhLCBlbmRQYXRoO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHAxWzBdICE9PSBwMlswXSAmJiBwMVsxXSAhPT0gcDJbMV0gJiYgKHAyWzBdICYmIHAyWzFdKSkge1xuICAgICAgICBlbmRQYXRoID0gZDMuZ2VvUGF0aChkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpLnJvdGF0ZShbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHIgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKTtcbiAgICAgICAgYXJlYSA9IGVuZFBhdGguYXJlYShjb3VudHJ5KTtcbiAgICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihwcm9wcy5kdXJhdGlvbilcbiAgICAgICAgICAudHdlZW4oJ3JvdGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocih0KSk7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbnRyb2lkUHJvID0gcHJvamVjdGlvbihwMik7XG4gICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgIHBhdGgobGFuZCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvcjtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIGlmIChtZXJnZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgobWVyZ2VkKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY291bnRyeSAmJiBhcmVhID4gcHJvcHMuYXJlYV90aHJlc2hvbGQpIHx8ICghcHJvcHMuZW5hYmxlX2RvdCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgoY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKGRpc3B1dGVkKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTsgcGF0aChib3JkZXJzKTsgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7IGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yOyBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7IGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5lbmFibGVfZG90ICYmIGFyZWEgPCBwcm9wcy5hcmVhX3RocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMoY2VudHJvaWRQcm9bMF0sIGNlbnRyb2lkUHJvWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLmRvdF9yYWRpdXMgLSAyO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgcGF0aChzcGhlcmUpO1xuICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmU7XG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aChjb3VudHJpZXMpO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGRpc3B1dGVkKTtcbiAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSk7XG4gICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aChib3JkZXJzKTtcbiAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoc3BoZXJlKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteScsIHAyWzFdKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})