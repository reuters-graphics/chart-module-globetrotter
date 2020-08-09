webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeatures: {\n        countries: 'countries',\n        disputedBoundaries: 'disputedBoundaries',\n        land: 'land'\n      },\n      spin: false,\n      countryIdGetter: function countryIdGetter(properties) {\n        return properties.isoAlpha3;\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var location = this.location();\n      var countriesFeatures = topology.objects[props.topojsonFeatures.countries];\n      var disputedBoundariesFeatures = topology.objects[props.topojsonFeatures.disputedBoundaries];\n      var landFeatures = topology.objects[props.topojsonFeatures.land];\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, countriesFeatures);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, countriesFeatures, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, disputedBoundariesFeatures);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, landFeatures);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      if (this._timer && !props.spin) {\n        this._timer.stop();\n\n        this._timer = null;\n      }\n\n      if (props.spin) {\n        if (!this._timer) {\n          this._timer = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interval(function (elapsed) {\n            projection.rotate([0.02 * elapsed, props.vertical_tilt - y]);\n            render();\n            canvas.attr('centroid-x', 0.02 * elapsed);\n            canvas.attr('centroid-y', props.vertical_tilt - y);\n          }, 750);\n        }\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var country;\n      var merged; // Lat/Lon\n\n      if (Array.isArray(location) && location.length === 2) {\n        p2[0] = location[0];\n        p2[1] = location[1]; // Region\n      } else if (Atlas.getRegion(location)) {\n        var countryList = Atlas.getRegion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged); // Sub-region\n      } else if (Atlas.getSubregion(location)) {\n        var _countryList = Atlas.getSubregion(location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](topology, countriesFeatures.geometries.filter(function (d) {\n          return _countryList.includes(props.countryIdGetter(d.properties));\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged); // Country\n      } else if (Atlas.getCountry(location)) {\n        var _Atlas$getCountry = Atlas.getCountry(location),\n            isoAlpha3 = _Atlas$getCountry.isoAlpha3;\n\n        country = countries.features.filter(function (d) {\n          return props.countryIdGetter(d.properties) === isoAlpha3;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area, endPath;\n      render();\n\n      function render() {\n        console.log('renders');\n\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              console.log('ROTATES');\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          console.log('FILLS UP');\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(countries);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInRvcG9qc29uRmVhdHVyZXMiLCJjb3VudHJpZXMiLCJkaXNwdXRlZEJvdW5kYXJpZXMiLCJsYW5kIiwic3BpbiIsImNvdW50cnlJZEdldHRlciIsInByb3BlcnRpZXMiLCJpc29BbHBoYTMiLCJwcm9wcyIsInRvcG9sb2d5IiwidG9wb2pzb24iLCJsb2NhdGlvbiIsImNvdW50cmllc0ZlYXR1cmVzIiwib2JqZWN0cyIsImRpc3B1dGVkQm91bmRhcmllc0ZlYXR1cmVzIiwibGFuZEZlYXR1cmVzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImJvcmRlcnMiLCJhIiwiYiIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInAxIiwicm90YXRlIiwiX3RpbWVyIiwic3RvcCIsImludGVydmFsIiwiZWxhcHNlZCIsInJlbmRlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJtZXJnZWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJnZXRSZWdpb24iLCJjb3VudHJ5TGlzdCIsIm1hcCIsImQiLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZW9DZW50cm9pZCIsImdldFN1YnJlZ2lvbiIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImFyZWEiLCJlbmRQYXRoIiwiY29uc29sZSIsImxvZyIsInIiLCJpbnRlcnBvbGF0ZSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjZW50cm9pZFBybyIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiYXJjIiwiTWF0aCIsIlBJIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQyw4RUFBSixFQUFkOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLHlCQUFtQixFQUFFLFNBRFI7QUFFYkMsd0JBQWtCLEVBQUUsMEJBRlA7QUFHYkMsNEJBQXNCLEVBQUUsR0FIWDtBQUliQyx5QkFBbUIsRUFBRSxHQUpSO0FBS2JDLHFCQUFlLEVBQUUsU0FMSjtBQU1iQyxnQkFBVSxFQUFFLDBCQU5DO0FBT2JDLG1CQUFhLEVBQUUsRUFQRjtBQVFiQyxZQUFNLEVBQUUsRUFSSztBQVNiQyxjQUFRLEVBQUUsR0FURztBQVViQyxnQkFBVSxFQUFFLElBVkM7QUFXYkMsZ0JBQVUsRUFBRSxDQVhDO0FBWWJDLGNBQVEsRUFBRSxJQVpHO0FBYWJDLG9CQUFjLEVBQUUsRUFiSDtBQWNiQyx3QkFBa0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBZFA7QUFlYkMsc0JBQWdCLEVBQUU7QUFDaEJDLGlCQUFTLEVBQUUsV0FESztBQUVoQkMsMEJBQWtCLEVBQUUsb0JBRko7QUFHaEJDLFlBQUksRUFBRTtBQUhVLE9BZkw7QUFvQmJDLFVBQUksRUFB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QUNwQixzQkFBMUI7QUFDQXFELGlCQUFPLENBQUNzQyxNQUFSO0FBQ0F0QyxpQkFBTyxDQUFDZ0MsU0FBUjtBQUNBOUIsY0FBSSxDQUFDekIsTUFBRCxDQUFKO0FBQ0F1QixpQkFBTyxDQUFDb0MsV0FBUixHQUFzQnJFLEtBQUssQ0FBQ3JCLGtCQUE1QjtBQUNBc0QsaUJBQU8sQ0FBQ3FDLFNBQVIsR0FBb0J0RSxLQUFLLENBQUNuQixtQkFBMUI7QUFDQW9ELGlCQUFPLENBQUNzQyxNQUFSO0FBQ0Q7QUFDRjs7QUFBQTtBQUVEbEQsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQmMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFDQWhCLFlBQU0sQ0FBQ0UsSUFBUCxDQUFZLFlBQVosRUFBMEJjLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFwTHdCc0MsNEQ7O0FBdUxabEcsMkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcblxuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBhcmVhX3RocmVzaG9sZDogMTAsXG4gICAgZGlzcHV0ZWRfZGFzaGFycmF5OiBbNSwgNV0sXG4gICAgdG9wb2pzb25GZWF0dXJlczoge1xuICAgICAgY291bnRyaWVzOiAnY291bnRyaWVzJyxcbiAgICAgIGRpc3B1dGVkQm91bmRhcmllczogJ2Rpc3B1dGVkQm91bmRhcmllcycsXG4gICAgICBsYW5kOiAnbGFuZCcsXG4gICAgfSxcbiAgICBzcGluOiBmYWxzZSxcbiAgICBjb3VudHJ5SWRHZXR0ZXI6IChwcm9wZXJ0aWVzKSA9PiBwcm9wZXJ0aWVzLmlzb0FscGhhMyxcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3QgdG9wb2xvZ3kgPSB0aGlzLnRvcG9qc29uKCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uKCk7XG4gICAgY29uc3QgY291bnRyaWVzRmVhdHVyZXMgPSB0b3BvbG9neS5vYmplY3RzW3Byb3BzLnRvcG9qc29uRmVhdHVyZXMuY291bnRyaWVzXTtcbiAgICBjb25zdCBkaXNwdXRlZEJvdW5kYXJpZXNGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5kaXNwdXRlZEJvdW5kYXJpZXNdO1xuICAgIGNvbnN0IGxhbmRGZWF0dXJlcyA9IHRvcG9sb2d5Lm9iamVjdHNbcHJvcHMudG9wb2pzb25GZWF0dXJlcy5sYW5kXTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMpO1xuICAgIGNvbnN0IGJvcmRlcnMgPSB0b3BvanNvbi5tZXNoKHRvcG9sb2d5LCBjb3VudHJpZXNGZWF0dXJlcywgKGEsIGIpID0+IGEgIT09IGIpO1xuICAgIGNvbnN0IGRpc3B1dGVkID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgZGlzcHV0ZWRCb3VuZGFyaWVzRmVhdHVyZXMpO1xuICAgIGNvbnN0IGxhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHRvcG9sb2d5LCBsYW5kRmVhdHVyZXMpO1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG4gICAgY29uc3QgcDEgPSBbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKHAxKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RpbWVyICYmICFwcm9wcy5zcGluKSB7XG4gICAgICB0aGlzLl90aW1lci5zdG9wKCk7XG4gICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmIChwcm9wcy5zcGluKSB7XG4gICAgICBpZiAoIXRoaXMuX3RpbWVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gZDMuaW50ZXJ2YWwoKGVsYXBzZWQpID0+IHtcbiAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShbMC4wMiAqIGVsYXBzZWQsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XSk7XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCAwLjAyICogZWxhcHNlZCk7XG4gICAgICAgICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geSk7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBjb3VudHJ5OyBsZXQgbWVyZ2VkO1xuICAgIC8vIExhdC9Mb25cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhdGlvbikgJiYgbG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICBwMlswXSA9IGxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBsb2NhdGlvblsxXTtcbiAgICAvLyBSZWdpb25cbiAgICB9IGVsc2UgaWYgKEF0bGFzLmdldFJlZ2lvbihsb2NhdGlvbikpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gQXRsYXMuZ2V0UmVnaW9uKGxvY2F0aW9uKS5jb3VudHJpZXMubWFwKGQgPT4gZC5pc29BbHBoYTMpO1xuICAgICAgbWVyZ2VkID0gdG9wb2pzb24ubWVyZ2UodG9wb2xvZ3ksIGNvdW50cmllc0ZlYXR1cmVzLmdlb21ldHJpZXMuZmlsdGVyKGQgPT4gY291bnRyeUxpc3QuaW5jbHVkZXMocHJvcHMuY291bnRyeUlkR2V0dGVyKGQucHJvcGVydGllcykpKSk7XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKG1lcmdlZCk7XG4gICAgLy8gU3ViLXJlZ2lvblxuICAgIH0gZWxzZSBpZiAoQXRsYXMuZ2V0U3VicmVnaW9uKGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSBBdGxhcy5nZXRTdWJyZWdpb24obG9jYXRpb24pLmNvdW50cmllcy5tYXAoZCA9PiBkLmlzb0FscGhhMyk7XG4gICAgICBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh0b3BvbG9neSwgY291bnRyaWVzRmVhdHVyZXMuZ2VvbWV0cmllcy5maWx0ZXIoZCA9PiBjb3VudHJ5TGlzdC5pbmNsdWRlcyhwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSkpKTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQobWVyZ2VkKTtcbiAgICAvLyBDb3VudHJ5XG4gICAgfSBlbHNlIGlmIChBdGxhcy5nZXRDb3VudHJ5KGxvY2F0aW9uKSkge1xuICAgICAgY29uc3QgeyBpc29BbHBoYTMgfSA9IEF0bGFzLmdldENvdW50cnkobG9jYXRpb24pO1xuICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBwcm9wcy5jb3VudHJ5SWRHZXR0ZXIoZC5wcm9wZXJ0aWVzKSA9PT0gaXNvQWxwaGEzKVswXTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgfVxuXG4gICAgbGV0IGFyZWEsIGVuZFBhdGg7XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBjb25zb2xlLmxvZygncmVuZGVycycpO1xuICAgICAgaWYgKHAxWzBdICE9PSBwMlswXSAmJiBwMVsxXSAhPT0gcDJbMV0gJiYgKHAyWzBdICYmIHAyWzFdKSkge1xuICAgICAgICBlbmRQYXRoID0gZDMuZ2VvUGF0aChkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpLnJvdGF0ZShbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHIgPSBkMy5pbnRlcnBvbGF0ZShwcm9qZWN0aW9uLnJvdGF0ZSgpLCBbLXAyWzBdLCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0gcDJbMV1dKTtcbiAgICAgICAgYXJlYSA9IGVuZFBhdGguYXJlYShjb3VudHJ5KTtcbiAgICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihwcm9wcy5kdXJhdGlvbilcbiAgICAgICAgICAudHdlZW4oJ3JvdGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocih0KSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdST1RBVEVTJyk7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbnRyb2lkUHJvID0gcHJvamVjdGlvbihwMik7XG4gICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgIHBhdGgobGFuZCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvcjtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIGlmIChtZXJnZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgobWVyZ2VkKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY291bnRyeSAmJiBhcmVhID4gcHJvcHMuYXJlYV90aHJlc2hvbGQpIHx8ICghcHJvcHMuZW5hYmxlX2RvdCkpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgoY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBwYXRoKGRpc3B1dGVkKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTsgcGF0aChib3JkZXJzKTsgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7IGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yOyBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7IGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5lbmFibGVfZG90ICYmIGFyZWEgPCBwcm9wcy5hcmVhX3RocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMoY2VudHJvaWRQcm9bMF0sIGNlbnRyb2lkUHJvWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLmRvdF9yYWRpdXMgLSAyO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgcGF0aChzcGhlcmUpO1xuICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmU7XG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZJTExTIFVQJyk7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoY291bnRyaWVzKTtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTsgcGF0aChkaXNwdXRlZCk7XG4gICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcztcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoYm9yZGVycyk7XG4gICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})