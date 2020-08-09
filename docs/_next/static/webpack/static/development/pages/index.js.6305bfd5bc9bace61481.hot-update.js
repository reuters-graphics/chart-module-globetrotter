webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _topo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topo.js */ \"./src/lib/topo.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      location: {\n        value: false,\n        type: 'country'\n      },\n      // Other types are point and region\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location.value) && props.location.value.length === 2 && props.location.type === 'point') {\n        p2[0] = props.location.value[0];\n        p2[1] = props.location.value[1];\n      } else if (props.location.type === 'region') {\n        var countryList = Atlas.getRegion(props.location.value).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        var _merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countries.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(_merged);\n      } else if (props.location.type === 'country') {\n        var l = Atlas.getCountry(props.location.value);\n\n        if (l) {\n          location = l.isoAlpha3;\n          country = countries.features.filter(function (d) {\n            return props.countryIdGetter(d.properties) === location;\n          })[0];\n          p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n        } else {\n          location = 'NA';\n\n          if (p2.length === 0) {\n            p2 = p1;\n          }\n        }\n      }\n\n      var area, endPath, merged;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(land);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwidG9wb2pzb25GZWF0dXJlcyIsImNvdW50cmllcyIsImRpc3B1dGVkQm91bmRhcmllcyIsImxhbmQiLCJjb3VudHJ5SWRHZXR0ZXIiLCJwcm9wZXJ0aWVzIiwiaXNvQWxwaGEzIiwicHJvcHMiLCJ0b3BvbG9neSIsInRvcG9qc29uIiwiY291bnRyaWVzRmVhdHVyZXMiLCJvYmplY3RzIiwiZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMiLCJsYW5kRmVhdHVyZXMiLCJub2RlIiwic2VsZWN0aW9uIiwic3BoZXJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJib3JkZXJzIiwiYSIsImIiLCJwcm9qZWN0aW9uIiwiZDMiLCJnZW9PcnRob2dyYXBoaWMiLCJmaXRFeHRlbnQiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJjb3VudHJ5TGlzdCIsImdldFJlZ2lvbiIsIm1hcCIsImQiLCJtZXJnZWQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImwiLCJnZXRDb3VudHJ5IiwiZmVhdHVyZXMiLCJhcmVhIiwiZW5kUGF0aCIsInJlbmRlciIsInIiLCJpbnRlcnBvbGF0ZSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjZW50cm9pZFBybyIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiYXJjIiwiTWF0aCIsIlBJIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyx5QkFBbUIsRUFBRSxTQURSO0FBRWJDLHdCQUFrQixFQUFFLDBCQUZQO0FBR2JDLDRCQUFzQixFQUFFLEdBSFg7QUFJYkMseUJBQW1CLEVBQUUsR0FKUjtBQUtiQyxxQkFBZSxFQUFFLFNBTEo7QUFNYkMsZ0JBQVUsRUFBRSwwQkFOQztBQU9iQyxtQkFBYSxFQUFFLEVBUEY7QUFRYkMsWUFBTSxFQUFFLEVBUks7QUFTYkMsY0FBUSxFQUFFLEdBVEc7QUFVYkMsZ0JBQVUsRUFBRSxJQVZDO0FBV2JDLGdCQUFVLEVBQUUsQ0FYQztBQVliQyxjQUFRLEVBQUUsSUFaRztBQWFiQyxjQUFRLEVBQUU7QUFBRUMsYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLFlBQUksRUFBRTtBQUF0QixPQWJHO0FBYWdDO0FBQzdDQyxvQkFBYyxFQUFFLEVBZEg7QUFlYkMsd0JBQWtCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQWZQO0FBZ0JiQyxzQkFBZ0IsRUFBRTtBQUNoQkMsaUJBQVMsRUFBRSxXQURLO0FBRWhCQywwQkFBa0IsRUFBRSxvQkFGSjtBQUdoQkMsWUFBSSxFQUFFO0FBSFUsT0FoQkw7QUFxQmJDLHFCQUFlLEVBQUUseUJBQUNDLFVBQUQ7QUFBQSxlQUFnQkEsVUFBVSxDQUFDQyxTQUEzQjtBQUFBO0FBckJKLEs7Ozs7Ozs7MkJBd0JSO0FBQ0wsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxRQUFMLEVBQWpCO0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkosS0FBSyxDQUFDUCxnQkFBTixDQUF1QkMsU0FBeEMsQ0FBMUI7QUFDQSxVQUFNVywwQkFBMEIsR0FBR0osUUFBUSxDQUFDRyxPQUFULENBQWlCSixLQUFLLENBQUNQLGdCQUFOLENBQXVCRSxrQkFBeEMsQ0FBbkM7QUFDQSxVQUFNVyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkosS0FBSyxDQUFDUCxnQkFBTixDQUF1QkcsSUFBeEMsQ0FBckI7QUFDQSxVQUFNVyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjtBQUNBLFVBQU1FLE1BQU0sR0FBRztBQUFFbkIsWUFBSSxFQUFFO0FBQVIsT0FBZjs7QUFQSyxrQ0FRYWlCLElBQUksQ0FBQ0cscUJBQUwsRUFSYjtBQUFBLFVBUUdDLEtBUkgseUJBUUdBLEtBUkg7O0FBU0wsVUFBTWpCLFNBQVMsR0FBR1EsdURBQUEsQ0FBaUJELFFBQWpCLEVBQTJCRSxpQkFBM0IsQ0FBbEI7QUFDQSxVQUFNUyxPQUFPLEdBQUdWLG9EQUFBLENBQWNELFFBQWQsRUFBd0JFLGlCQUF4QixFQUEyQyxVQUFDVSxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEtBQUtDLENBQWhCO0FBQUEsT0FBM0MsQ0FBaEI7QUFDQSxVQUFNM0IsUUFBUSxHQUFHZSxvREFBQSxDQUFjRCxRQUFkLEVBQXdCSSwwQkFBeEIsQ0FBakI7QUFDQSxVQUFNVCxJQUFJLEdBQUdNLHVEQUFBLENBQWlCRCxRQUFqQixFQUEyQkssWUFBM0IsQ0FBYjtBQUNBLFVBQU1TLFVBQVUsR0FBR0Msa0RBQUUsQ0FBQ0MsZUFBSCxHQUFxQkMsU0FBckIsQ0FBK0IsQ0FBQyxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQUQsRUFBVyxDQUFDUCxLQUFLLEdBQUcsRUFBVCxFQUFhQSxLQUFLLEdBQUcsRUFBckIsQ0FBWCxDQUEvQixFQUFxRUYsTUFBckUsQ0FBbkI7QUFFQSxVQUFJVSxNQUFNLEdBQUcsS0FBS1gsU0FBTCxHQUFpQlksWUFBakIsQ0FBOEIsUUFBOUIsRUFDVkMsSUFEVSxDQUNMLE9BREssRUFDSVYsS0FESixFQUVWVSxJQUZVLENBRUwsUUFGSyxFQUVLVixLQUZMLENBQWI7QUFJQSxVQUFNVyxDQUFDLEdBQUdILE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosQ0FBVjtBQUNBLFVBQU1FLENBQUMsR0FBR0osTUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixDQUFWO0FBQ0EsVUFBTUcsRUFBRSxHQUFHLENBQUMsQ0FBQ0YsQ0FBRixFQUFLdEIsS0FBSyxDQUFDbEIsYUFBTixHQUFzQnlDLENBQTNCLENBQVg7O0FBRUEsVUFBSUQsQ0FBQyxJQUFJQyxDQUFULEVBQVk7QUFDVlIsa0JBQVUsQ0FBQ1UsTUFBWCxDQUFrQkQsRUFBbEI7QUFDRDs7QUFFRCxVQUFNRSxPQUFPLEdBQUdQLE1BQU0sQ0FBQ1osSUFBUCxHQUFjb0IsVUFBZCxDQUF5QixJQUF6QixDQUFoQjtBQUVBLFVBQU1DLElBQUksR0FBR1osa0RBQUUsQ0FBQ2EsT0FBSCxDQUFXZCxVQUFYLEVBQXVCVyxPQUF2QixDQUFiO0FBRUEsVUFBSUksRUFBRSxHQUFHLEVBQVQ7QUFBYSxVQUFJMUMsUUFBSjtBQUFjLFVBQUkyQyxPQUFKOztBQUMzQixVQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2pDLEtBQUssQ0FBQ1osUUFBTixDQUFlQyxLQUE3QixLQUF1Q1csS0FBSyxDQUFDWixRQUFOLENBQWVDLEtBQWYsQ0FBcUI2QyxNQUFyQixLQUFnQyxDQUF2RSxJQUE0RWxDLEtBQUssQ0FBQ1osUUFBTixDQUFlRSxJQUFmLEtBQXdCLE9BQXhHLEVBQWlIO0FBQy9Hd0MsVUFBRSxDQUFDLENBQUQsQ0FBRixHQUFROUIsS0FBSyxDQUFDWixRQUFOLENBQWVDLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBUjtBQUNBeUMsVUFBRSxDQUFDLENBQUQsQ0FBRixHQUFROUIsS0FBSyxDQUFDWixRQUFOLENBQWVDLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBUjtBQUNELE9BSEQsTUFHTyxJQUFJVyxLQUFLLENBQUNaLFFBQU4sQ0FBZUUsSUFBZixLQUF3QixRQUE1QixFQUFzQztBQUMzQyxZQUFNNkMsV0FBVyxHQUFJOUQsS0FBSyxDQUFDK0QsU0FBTixDQUFnQnBDLEtBQUssQ0FBQ1osUUFBTixDQUFlQyxLQUEvQixFQUFzQ0ssU0FBdkMsQ0FBa0QyQyxHQUFsRCxDQUFzRCxVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3ZDLFNBQU47QUFBQSxTQUF2RCxDQUFwQjs7QUFDQSxZQUFNd0MsT0FBTSxHQUFHckMscURBQUEsQ0FBZUQsUUFBZixFQUF5QlAsU0FBUyxDQUFDOEMsVUFBVixDQUFxQkMsTUFBckIsQ0FBNEIsVUFBQUgsQ0FBQztBQUFBLGlCQUFJSCxXQUFXLENBQUNPLFFBQVosQ0FBcUIxQyxLQUFLLENBQUNILGVBQU4sQ0FBc0J5QyxDQUFDLENBQUN4QyxVQUF4QixDQUFyQixDQUFKO0FBQUEsU0FBN0IsQ0FBekIsQ0FBZjs7QUFDQWdDLFVBQUUsR0FBR2Qsa0RBQUUsQ0FBQzJCLFdBQUgsQ0FBZUosT0FBZixDQUFMO0FBQ0QsT0FKTSxNQUlBLElBQUl2QyxLQUFLLENBQUNaLFFBQU4sQ0FBZUUsSUFBZixLQUF3QixTQUE1QixFQUF1QztBQUM1QyxZQUFNc0QsQ0FBQyxHQUFHdkUsS0FBSyxDQUFDd0UsVUFBTixDQUFpQjdDLEtBQUssQ0FBQ1osUUFBTixDQUFlQyxLQUFoQyxDQUFWOztBQUNBLFlBQUl1RCxDQUFKLEVBQU87QUFDTHhELGtCQUFRLEdBQUd3RCxDQUFDLENBQUM3QyxTQUFiO0FBQ0FnQyxpQkFBTyxHQUFHckMsU0FBUyxDQUFDb0QsUUFBVixDQUFtQkwsTUFBbkIsQ0FBMEIsVUFBQUgsQ0FBQztBQUFBLG1CQUFJdEMsS0FBSyxDQUFDSCxlQUFOLENBQXNCeUMsQ0FBQyxDQUFDeEMsVUFBeEIsTUFBd0NWLFFBQTVDO0FBQUEsV0FBM0IsRUFBaUYsQ0FBakYsQ0FBVjtBQUNBMEMsWUFBRSxHQUFHZCxrREFBRSxDQUFDMkIsV0FBSCxDQUFlWixPQUFmLENBQUw7QUFDRCxTQUpELE1BSU87QUFDTDNDLGtCQUFRLEdBQUcsSUFBWDs7QUFDQSxjQUFJMEMsRUFBRSxDQUFDSSxNQUFILEtBQWMsQ0FBbEIsRUFBcUI7QUFDbkJKLGNBQUUsR0FBR04sRUFBTDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxVQUFJdUIsSUFBSixFQUFVQyxPQUFWLEVBQW1CVCxNQUFuQjtBQUVBVSxZQUFNOztBQUNOLGVBQVNBLE1BQVQsR0FBa0I7QUFDaEIsWUFBSXpCLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVU0sRUFBRSxDQUFDLENBQUQsQ0FBWixJQUFtQk4sRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVTSxFQUFFLENBQUMsQ0FBRCxDQUEvQixJQUF1Q0EsRUFBRSxDQUFDLENBQUQsQ0FBRixJQUFTQSxFQUFFLENBQUMsQ0FBRCxDQUF0RCxFQUE0RDtBQUMxRGtCLGlCQUFPLEdBQUdoQyxrREFBRSxDQUFDYSxPQUFILENBQVdiLGtEQUFFLENBQUNDLGVBQUgsR0FBcUJDLFNBQXJCLENBQStCLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFELEVBQVcsQ0FBQ1AsS0FBSyxHQUFHLEVBQVQsRUFBYUEsS0FBSyxHQUFHLEVBQXJCLENBQVgsQ0FBL0IsRUFBcUVGLE1BQXJFLEVBQTZFZ0IsTUFBN0UsQ0FBb0YsQ0FBQyxDQUFDSyxFQUFFLENBQUMsQ0FBRCxDQUFKLEVBQVM5QixLQUFLLENBQUNsQixhQUFOLEdBQXNCZ0QsRUFBRSxDQUFDLENBQUQsQ0FBakMsQ0FBcEYsQ0FBWCxFQUF1SUosT0FBdkksQ0FBVjtBQUNBLGNBQU13QixDQUFDLEdBQUdsQyxrREFBRSxDQUFDbUMsV0FBSCxDQUFlcEMsVUFBVSxDQUFDVSxNQUFYLEVBQWYsRUFBb0MsQ0FBQyxDQUFDSyxFQUFFLENBQUMsQ0FBRCxDQUFKLEVBQVM5QixLQUFLLENBQUNsQixhQUFOLEdBQXNCZ0QsRUFBRSxDQUFDLENBQUQsQ0FBakMsQ0FBcEMsQ0FBVjtBQUNBaUIsY0FBSSxHQUFHQyxPQUFPLENBQUNELElBQVIsQ0FBYWhCLE9BQWIsQ0FBUDtBQUNBWixnQkFBTSxDQUFDaUMsVUFBUCxHQUNHcEUsUUFESCxDQUNZZ0IsS0FBSyxDQUFDaEIsUUFEbEIsRUFFR3FFLEtBRkgsQ0FFUyxRQUZULEVBRW1CLFlBQVc7QUFDMUIsbUJBQU8sVUFBU0MsQ0FBVCxFQUFZO0FBQ2pCdkMsd0JBQVUsQ0FBQ1UsTUFBWCxDQUFrQnlCLENBQUMsQ0FBQ0ksQ0FBRCxDQUFuQjtBQUNBLGtCQUFNQyxXQUFXLEdBQUd4QyxVQUFVLENBQUNlLEVBQUQsQ0FBOUI7QUFDQUoscUJBQU8sQ0FBQzhCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0I3QyxLQUF4QixFQUErQkEsS0FBL0I7QUFDQWUscUJBQU8sQ0FBQytCLFNBQVI7QUFDQTdCLGtCQUFJLENBQUNoQyxJQUFELENBQUo7QUFDQThCLHFCQUFPLENBQUNnQyxTQUFSLEdBQW9CMUQsS0FBSyxDQUFDbkIsVUFBMUI7QUFDQTZDLHFCQUFPLENBQUNpQyxJQUFSOztBQUNBLGtCQUFJcEIsTUFBSixFQUFZO0FBQ1ZiLHVCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixvQkFBSSxDQUFDVyxNQUFELENBQUo7QUFDQWIsdUJBQU8sQ0FBQ2dDLFNBQVIsR0FBb0IxRCxLQUFLLENBQUNwQixlQUExQjtBQUNBOEMsdUJBQU8sQ0FBQ2lDLElBQVI7QUFDRCxlQUxELE1BS08sSUFBSzVCLE9BQU8sSUFBSWdCLElBQUksR0FBRy9DLEtBQUssQ0FBQ1QsY0FBekIsSUFBNkMsQ0FBQ1MsS0FBSyxDQUFDZixVQUF4RCxFQUFxRTtBQUMxRXlDLHVCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixvQkFBSSxDQUFDRyxPQUFELENBQUo7QUFDQUwsdUJBQU8sQ0FBQ2dDLFNBQVIsR0FBb0IxRCxLQUFLLENBQUNwQixlQUExQjtBQUNBOEMsdUJBQU8sQ0FBQ2lDLElBQVI7QUFDRDs7QUFDRCxrQkFBSTNELEtBQUssQ0FBQ2IsUUFBVixFQUFvQjtBQUNsQnVDLHVCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixvQkFBSSxDQUFDekMsUUFBRCxDQUFKO0FBQ0F1Qyx1QkFBTyxDQUFDa0MsV0FBUixDQUFvQjVELEtBQUssQ0FBQ1Isa0JBQTFCO0FBQ0FrQyx1QkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3hCLG1CQUE1QjtBQUNBa0QsdUJBQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUN0QixzQkFBMUI7QUFDQWdELHVCQUFPLENBQUNxQyxNQUFSO0FBQ0Q7O0FBQ0RyQyxxQkFBTyxDQUFDK0IsU0FBUjtBQUFxQjdCLGtCQUFJLENBQUNoQixPQUFELENBQUo7QUFBZWMscUJBQU8sQ0FBQ2tDLFdBQVIsQ0FBb0IsRUFBcEI7QUFBeUJsQyxxQkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3hCLG1CQUE1QjtBQUFpRGtELHFCQUFPLENBQUNvQyxTQUFSLEdBQW9COUQsS0FBSyxDQUFDdEIsc0JBQTFCO0FBQWtEZ0QscUJBQU8sQ0FBQ3FDLE1BQVI7O0FBQ2hLLGtCQUFJL0QsS0FBSyxDQUFDZixVQUFOLElBQW9COEQsSUFBSSxHQUFHL0MsS0FBSyxDQUFDVCxjQUFyQyxFQUFxRDtBQUNuRG1DLHVCQUFPLENBQUMrQixTQUFSO0FBQ0EvQix1QkFBTyxDQUFDc0MsR0FBUixDQUFZVCxXQUFXLENBQUMsQ0FBRCxDQUF2QixFQUE0QkEsV0FBVyxDQUFDLENBQUQsQ0FBdkMsRUFBNEN2RCxLQUFLLENBQUNkLFVBQWxELEVBQThELENBQTlELEVBQWlFLElBQUkrRSxJQUFJLENBQUNDLEVBQTFFO0FBQ0F4Qyx1QkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3BCLGVBQTVCO0FBQ0E4Qyx1QkFBTyxDQUFDb0MsU0FBUixHQUFvQjlELEtBQUssQ0FBQ2QsVUFBTixHQUFtQixDQUF2QztBQUNBd0MsdUJBQU8sQ0FBQ3FDLE1BQVI7QUFDRDs7QUFDRHJDLHFCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixrQkFBSSxDQUFDbkIsTUFBRCxDQUFKO0FBQ0FpQixxQkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3ZCLGtCQUE1QjtBQUNBaUQscUJBQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUNyQixtQkFBMUI7QUFDQStDLHFCQUFPLENBQUNxQyxNQUFSO0FBQ0QsYUF4Q0Q7QUF5Q0QsV0E1Q0g7QUE2Q0QsU0FqREQsTUFpRE87QUFDTHJDLGlCQUFPLENBQUM4QixTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCN0MsS0FBeEIsRUFBK0JBLEtBQS9CO0FBQ0FlLGlCQUFPLENBQUMrQixTQUFSO0FBQ0E3QixjQUFJLENBQUNoQyxJQUFELENBQUo7QUFDQThCLGlCQUFPLENBQUNnQyxTQUFSLEdBQW9CMUQsS0FBSyxDQUFDbkIsVUFBMUI7QUFDQTZDLGlCQUFPLENBQUNpQyxJQUFSOztBQUNBLGNBQUkzRCxLQUFLLENBQUNiLFFBQVYsRUFBb0I7QUFDbEJ1QyxtQkFBTyxDQUFDK0IsU0FBUjtBQUFxQjdCLGdCQUFJLENBQUN6QyxRQUFELENBQUo7QUFDckJ1QyxtQkFBTyxDQUFDa0MsV0FBUixDQUFvQjVELEtBQUssQ0FBQ1Isa0JBQTFCO0FBQ0FrQyxtQkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3hCLG1CQUE1QjtBQUNBa0QsbUJBQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUN0QixzQkFBMUI7QUFDQWdELG1CQUFPLENBQUNxQyxNQUFSO0FBQ0Q7O0FBQ0RyQyxpQkFBTyxDQUFDK0IsU0FBUjtBQUNBN0IsY0FBSSxDQUFDaEIsT0FBRCxDQUFKO0FBQ0FjLGlCQUFPLENBQUNrQyxXQUFSLENBQW9CLEVBQXBCO0FBQ0FsQyxpQkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3hCLG1CQUE1QjtBQUNBa0QsaUJBQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUN0QixzQkFBMUI7QUFDQWdELGlCQUFPLENBQUNxQyxNQUFSO0FBQ0FyQyxpQkFBTyxDQUFDK0IsU0FBUjtBQUNBN0IsY0FBSSxDQUFDbkIsTUFBRCxDQUFKO0FBQ0FpQixpQkFBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ3ZCLGtCQUE1QjtBQUNBaUQsaUJBQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUNyQixtQkFBMUI7QUFDQStDLGlCQUFPLENBQUNxQyxNQUFSO0FBQ0Q7QUFDRjs7QUFBQTtBQUVENUMsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFDQVgsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQWxLd0JxQyw0RDs7QUFxS1o1RiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB3b3JsZCBmcm9tICcuL3RvcG8uanMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBsb2NhdGlvbjogeyB2YWx1ZTogZmFsc2UsIHR5cGU6ICdjb3VudHJ5JyB9LCAvLyBPdGhlciB0eXBlcyBhcmUgcG9pbnQgYW5kIHJlZ2lvblxuICAgIGFyZWFfdGhyZXNob2xkOiAxMCxcbiAgICBkaXNwdXRlZF9kYXNoYXJyYXk6IFs1LCA1XSxcbiAgICB0b3BvanNvbkZlYXR1cmVzOiB7XG4gICAgICBjb3VudHJpZXM6ICdjb3VudHJpZXMnLFxuICAgICAgZGlzcHV0ZWRCb3VuZGFyaWVzOiAnZGlzcHV0ZWRCb3VuZGFyaWVzJyxcbiAgICAgIGxhbmQ6ICdsYW5kJyxcbiAgICB9LFxuICAgIGNvdW50cnlJZEdldHRlcjogKHByb3BlcnRpZXMpID0+IHByb3BlcnRpZXMuaXNvQWxwaGEzLFxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCB0b3BvbG9neSA9IHRoaXMudG9wb2pzb24oKTtcbiAgICBjb25zdCBjb3VudHJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5jb3VudHJpZXNdO1xuICAgIGNvbnN0IGRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmRpc3B1dGVkQm91bmRhcmllc107XG4gICAgY29uc3QgbGFuZEZlYXR1cmVzID0gdG9wb2xvZ3kub2JqZWN0c1twcm9wcy50b3BvanNvbkZlYXR1cmVzLmxhbmRdO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBzcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH07XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcyk7XG4gICAgY29uc3QgYm9yZGVycyA9IHRvcG9qc29uLm1lc2godG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHRvcG9sb2d5LCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyk7XG4gICAgY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUodG9wb2xvZ3ksIGxhbmRGZWF0dXJlcyk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5zZWxlY3Rpb24oKS5hcHBlbmRTZWxlY3QoJ2NhbnZhcycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB3aWR0aCk7XG5cbiAgICBjb25zdCB4ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnKTtcbiAgICBjb25zdCB5ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknKTtcbiAgICBjb25zdCBwMSA9IFsteCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldO1xuXG4gICAgaWYgKHggJiYgeSkge1xuICAgICAgcHJvamVjdGlvbi5yb3RhdGUocDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMubm9kZSgpLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uLCBjb250ZXh0KTtcblxuICAgIGxldCBwMiA9IFtdOyBsZXQgbG9jYXRpb247IGxldCBjb3VudHJ5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmxvY2F0aW9uLnZhbHVlKSAmJiBwcm9wcy5sb2NhdGlvbi52YWx1ZS5sZW5ndGggPT09IDIgJiYgcHJvcHMubG9jYXRpb24udHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgcDJbMF0gPSBwcm9wcy5sb2NhdGlvbi52YWx1ZVswXTtcbiAgICAgIHAyWzFdID0gcHJvcHMubG9jYXRpb24udmFsdWVbMV07XG4gICAgfSBlbHNlIGlmIChwcm9wcy5sb2NhdGlvbi50eXBlID09PSAncmVnaW9uJykge1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSAoQXRsYXMuZ2V0UmVnaW9uKHByb3BzLmxvY2F0aW9uLnZhbHVlKS5jb3VudHJpZXMpLm1hcChkID0+IGQuaXNvQWxwaGEzKTtcbiAgICAgIGNvbnN0IG1lcmdlZCA9IHRvcG9qc29uLm1lcmdlKHRvcG9sb2d5LCBjb3VudHJpZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQobWVyZ2VkKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmxvY2F0aW9uLnR5cGUgPT09ICdjb3VudHJ5Jykge1xuICAgICAgY29uc3QgbCA9IEF0bGFzLmdldENvdW50cnkocHJvcHMubG9jYXRpb24udmFsdWUpO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgbG9jYXRpb24gPSBsLmlzb0FscGhhMztcbiAgICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSA9PT0gbG9jYXRpb24pWzBdO1xuICAgICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSAnTkEnO1xuICAgICAgICBpZiAocDIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcDIgPSBwMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhcmVhLCBlbmRQYXRoLCBtZXJnZWQ7XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAocDFbMF0gIT09IHAyWzBdICYmIHAxWzFdICE9PSBwMlsxXSAmJiAocDJbMF0gJiYgcDJbMV0pKSB7XG4gICAgICAgIGVuZFBhdGggPSBkMy5nZW9QYXRoKGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSkucm90YXRlKFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBhcmVhID0gZW5kUGF0aC5hcmVhKGNvdW50cnkpO1xuICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHByb3BzLmR1cmF0aW9uKVxuICAgICAgICAgIC50d2Vlbigncm90YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyKHQpKTtcbiAgICAgICAgICAgICAgY29uc3QgY2VudHJvaWRQcm8gPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgcGF0aChsYW5kKTtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgaWYgKG1lcmdlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChtZXJnZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjb3VudHJ5ICYmIGFyZWEgPiBwcm9wcy5hcmVhX3RocmVzaG9sZCkgfHwgKCFwcm9wcy5lbmFibGVfZG90KSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgoZGlzcHV0ZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGJvcmRlcnMpOyBjb250ZXh0LnNldExpbmVEYXNoKFtdKTsgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7IGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllczsgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QgJiYgYXJlYSA8IHByb3BzLmFyZWFfdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhjZW50cm9pZFByb1swXSwgY2VudHJvaWRQcm9bMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKGxhbmQpO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGRpc3B1dGVkKTtcbiAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSk7XG4gICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aChib3JkZXJzKTtcbiAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoc3BoZXJlKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteScsIHAyWzFdKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})