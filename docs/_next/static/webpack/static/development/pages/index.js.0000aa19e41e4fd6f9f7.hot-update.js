webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _topo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topo.js */ \"./src/lib/topo.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.5)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 0.1,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      location: {\n        value: false,\n        type: 'country'\n      },\n      // Other types are point and region\n      area_threshold: 10,\n      disputed_dasharray: [5, 5],\n      topojsonFeature: 'countries'\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var topology = this.topojson();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](topology, props.topojsonFeature);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](topology, topology.objects.countries, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.disputed);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location.value) && props.location.value.length === 2 && props.location.type === 'point') {\n        p2[0] = props.location.value[0];\n        p2[1] = props.location.value[1];\n      } else if (props.location.type === 'region') {\n        var countryList = Atlas.getRegion(props.location.value).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n\n        var _merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.gadm.geometries.filter(function (d) {\n          return Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"indexOf\"])(countryList, d.properties.GID_0) > -1;\n        }));\n\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(_merged);\n      } else if (props.location.type === 'country') {\n        var l = Atlas.getCountry(props.location.value);\n\n        if (l) {\n          location = l.isoAlpha3;\n          country = countries.features.filter(function (d) {\n            return d.properties.GID_0 === location;\n          })[0];\n          p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n        } else {\n          location = 'NA';\n\n          if (p2.length === 0) {\n            p2 = p1;\n          }\n        }\n      }\n\n      var area, endPath, merged;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath();\n              path(land);\n              context.fillStyle = props.base_color;\n              context.fill();\n\n              if (merged) {\n                context.beginPath();\n                path(merged);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath();\n                path(country);\n                context.fillStyle = props.highlight_color;\n                context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath();\n                path(disputed);\n                context.setLineDash(props.disputed_dasharray);\n                context.strokeStyle = props.border_stroke_color;\n                context.lineWidth = props.stroke_width_countries;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(borders);\n              context.setLineDash([]);\n              context.strokeStyle = props.border_stroke_color;\n              context.lineWidth = props.stroke_width_countries;\n              context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath();\n                context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI);\n                context.strokeStyle = props.highlight_color;\n                context.lineWidth = props.dot_radius - 2;\n                context.stroke();\n              }\n\n              context.beginPath();\n              path(sphere);\n              context.strokeStyle = props.outer_stroke_color;\n              context.lineWidth = props.stroke_width_sphere;\n              context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath();\n          path(land);\n          context.fillStyle = props.base_color;\n          context.fill();\n\n          if (props.disputed) {\n            context.beginPath();\n            path(disputed);\n            context.setLineDash(props.disputed_dasharray);\n            context.strokeStyle = props.border_stroke_color;\n            context.lineWidth = props.stroke_width_countries;\n            context.stroke();\n          }\n\n          context.beginPath();\n          path(borders);\n          context.setLineDash([]);\n          context.strokeStyle = props.border_stroke_color;\n          context.lineWidth = props.stroke_width_countries;\n          context.stroke();\n          context.beginPath();\n          path(sphere);\n          context.strokeStyle = props.outer_stroke_color;\n          context.lineWidth = props.stroke_width_sphere;\n          context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwidG9wb2pzb25GZWF0dXJlIiwicHJvcHMiLCJ0b3BvbG9neSIsInRvcG9qc29uIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiY291bnRyaWVzIiwiYm9yZGVycyIsIm9iamVjdHMiLCJhIiwiYiIsIndvcmxkIiwibGFuZCIsInByb2plY3Rpb24iLCJkMyIsImdlb09ydGhvZ3JhcGhpYyIsImZpdEV4dGVudCIsImNhbnZhcyIsImFwcGVuZFNlbGVjdCIsImF0dHIiLCJ4IiwieSIsInAxIiwicm90YXRlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJwYXRoIiwiZ2VvUGF0aCIsInAyIiwiY291bnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImNvdW50cnlMaXN0IiwiZ2V0UmVnaW9uIiwibWFwIiwiZCIsImlzb0FscGhhMyIsIm1lcmdlZCIsImdhZG0iLCJnZW9tZXRyaWVzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInByb3BlcnRpZXMiLCJHSURfMCIsImdlb0NlbnRyb2lkIiwibCIsImdldENvdW50cnkiLCJmZWF0dXJlcyIsImFyZWEiLCJlbmRQYXRoIiwicmVuZGVyIiwiciIsImludGVycG9sYXRlIiwidHJhbnNpdGlvbiIsInR3ZWVuIiwidCIsImNlbnRyb2lkUHJvIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInNldExpbmVEYXNoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJhcmMiLCJNYXRoIiwiUEkiLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxJQUFJQyw4RUFBSixFQUFkOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLHlCQUFtQixFQUFFLFNBRFI7QUFFYkMsd0JBQWtCLEVBQUUsMEJBRlA7QUFHYkMsNEJBQXNCLEVBQUUsR0FIWDtBQUliQyx5QkFBbUIsRUFBRSxHQUpSO0FBS2JDLHFCQUFlLEVBQUUsU0FMSjtBQU1iQyxnQkFBVSxFQUFFLDBCQU5DO0FBT2JDLG1CQUFhLEVBQUUsRUFQRjtBQVFiQyxZQUFNLEVBQUUsRUFSSztBQVNiQyxjQUFRLEVBQUUsR0FURztBQVViQyxnQkFBVSxFQUFFLElBVkM7QUFXYkMsZ0JBQVUsRUFBRSxDQVhDO0FBWWJDLGNBQVEsRUFBRSxJQVpHO0FBYWJDLGNBQVEsRUFBRTtBQUFFQyxhQUFLLEVBQUUsS0FBVDtBQUFnQkMsWUFBSSxFQUFFO0FBQXRCLE9BYkc7QUFhZ0M7QUFDN0NDLG9CQUFjLEVBQUUsRUFkSDtBQWViQyx3QkFBa0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBZlA7QUFnQmJDLHFCQUFlLEVBQUU7QUFoQkosSzs7Ozs7OzsyQkFtQlI7QUFDTCxVQUFNQyxLQUFLLEdBQUcsS0FBS0EsS0FBTCxFQUFkO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFFBQUwsRUFBakI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjtBQUNB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QVgsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQTFKd0J5Qyw0RDs7QUE2SloxRiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5pbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB3b3JsZCBmcm9tICcuL3RvcG8uanMnO1xuXG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcl9zdHJva2VfY29sb3I6ICcjMmYzNTNmJyxcbiAgICBvdXRlcl9zdHJva2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknLFxuICAgIHN0cm9rZV93aWR0aF9jb3VudHJpZXM6IDAuNSxcbiAgICBzdHJva2Vfd2lkdGhfc3BoZXJlOiAwLjEsXG4gICAgaGlnaGxpZ2h0X2NvbG9yOiAnI2ZjZTU4NycsXG4gICAgYmFzZV9jb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgdmVydGljYWxfdGlsdDogMTUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBkdXJhdGlvbjogNzUwLFxuICAgIGVuYWJsZV9kb3Q6IHRydWUsXG4gICAgZG90X3JhZGl1czogNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICBsb2NhdGlvbjogeyB2YWx1ZTogZmFsc2UsIHR5cGU6ICdjb3VudHJ5JyB9LCAvLyBPdGhlciB0eXBlcyBhcmUgcG9pbnQgYW5kIHJlZ2lvblxuICAgIGFyZWFfdGhyZXNob2xkOiAxMCxcbiAgICBkaXNwdXRlZF9kYXNoYXJyYXk6IFs1LCA1XSxcbiAgICB0b3BvanNvbkZlYXR1cmU6ICdjb3VudHJpZXMnLFxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCB0b3BvbG9neSA9IHRoaXMudG9wb2pzb24oKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh0b3BvbG9neSwgcHJvcHMudG9wb2pzb25GZWF0dXJlKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaCh0b3BvbG9neSwgdG9wb2xvZ3kub2JqZWN0cy5jb3VudHJpZXMsIChhLCBiKSA9PiBhICE9PSBiKTtcbiAgICBjb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2god29ybGQsIHdvcmxkLm9iamVjdHMuZGlzcHV0ZWQpO1xuICAgIGNvbnN0IGxhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmxhbmQpO1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSBkMy5nZW9PcnRob2dyYXBoaWMoKS5maXRFeHRlbnQoW1sxMCwgMTBdLCBbd2lkdGggLSAxMCwgd2lkdGggLSAxMF1dLCBzcGhlcmUpO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuc2VsZWN0aW9uKCkuYXBwZW5kU2VsZWN0KCdjYW52YXMnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0Jywgd2lkdGgpO1xuXG4gICAgY29uc3QgeCA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC14Jyk7XG4gICAgY29uc3QgeSA9IGNhbnZhcy5hdHRyKCdjZW50cm9pZC15Jyk7XG4gICAgY29uc3QgcDEgPSBbLXgsIHByb3BzLnZlcnRpY2FsX3RpbHQgLSB5XTtcblxuICAgIGlmICh4ICYmIHkpIHtcbiAgICAgIHByb2plY3Rpb24ucm90YXRlKHAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLm5vZGUoKS5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgocHJvamVjdGlvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgcDIgPSBbXTsgbGV0IGxvY2F0aW9uOyBsZXQgY291bnRyeTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcy5sb2NhdGlvbi52YWx1ZSkgJiYgcHJvcHMubG9jYXRpb24udmFsdWUubGVuZ3RoID09PSAyICYmIHByb3BzLmxvY2F0aW9uLnR5cGUgPT09ICdwb2ludCcpIHtcbiAgICAgIHAyWzBdID0gcHJvcHMubG9jYXRpb24udmFsdWVbMF07XG4gICAgICBwMlsxXSA9IHByb3BzLmxvY2F0aW9uLnZhbHVlWzFdO1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb24udHlwZSA9PT0gJ3JlZ2lvbicpIHtcbiAgICAgIGNvbnN0IGNvdW50cnlMaXN0ID0gKEF0bGFzLmdldFJlZ2lvbihwcm9wcy5sb2NhdGlvbi52YWx1ZSkuY291bnRyaWVzKS5tYXAoZCA9PiBkLmlzb0FscGhhMyk7XG4gICAgICBjb25zdCBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtLmdlb21ldHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGluZGV4T2YoY291bnRyeUxpc3QsIGQucHJvcGVydGllcy5HSURfMCkgPiAtMTsgfSkpO1xuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChtZXJnZWQpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb24udHlwZSA9PT0gJ2NvdW50cnknKSB7XG4gICAgICBjb25zdCBsID0gQXRsYXMuZ2V0Q291bnRyeShwcm9wcy5sb2NhdGlvbi52YWx1ZSk7XG4gICAgICBpZiAobCkge1xuICAgICAgICBsb2NhdGlvbiA9IGwuaXNvQWxwaGEzO1xuICAgICAgICBjb3VudHJ5ID0gY291bnRyaWVzLmZlYXR1cmVzLmZpbHRlcihkID0+IGQucHJvcGVydGllcy5HSURfMCA9PT0gbG9jYXRpb24pWzBdO1xuICAgICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSAnTkEnO1xuICAgICAgICBpZiAocDIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcDIgPSBwMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhcmVhLCBlbmRQYXRoLCBtZXJnZWQ7XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAocDFbMF0gIT09IHAyWzBdICYmIHAxWzFdICE9PSBwMlsxXSAmJiAocDJbMF0gJiYgcDJbMV0pKSB7XG4gICAgICAgIGVuZFBhdGggPSBkMy5nZW9QYXRoKGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSkucm90YXRlKFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBhcmVhID0gZW5kUGF0aC5hcmVhKGNvdW50cnkpO1xuICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHByb3BzLmR1cmF0aW9uKVxuICAgICAgICAgIC50d2Vlbigncm90YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyKHQpKTtcbiAgICAgICAgICAgICAgY29uc3QgY2VudHJvaWRQcm8gPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgcGF0aChsYW5kKTtcbiAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yO1xuICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgaWYgKG1lcmdlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChtZXJnZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjb3VudHJ5ICYmIGFyZWEgPiBwcm9wcy5hcmVhX3RocmVzaG9sZCkgfHwgKCFwcm9wcy5lbmFibGVfZG90KSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgcGF0aChjb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHBhdGgoZGlzcHV0ZWQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGJvcmRlcnMpOyBjb250ZXh0LnNldExpbmVEYXNoKFtdKTsgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7IGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllczsgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QgJiYgYXJlYSA8IHByb3BzLmFyZWFfdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhjZW50cm9pZFByb1swXSwgY2VudHJvaWRQcm9bMV0sIHByb3BzLmRvdF9yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuZG90X3JhZGl1cyAtIDI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICBwYXRoKHNwaGVyZSk7XG4gICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZTtcbiAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBwYXRoKGxhbmQpO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpOyBwYXRoKGRpc3B1dGVkKTtcbiAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSk7XG4gICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3I7XG4gICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzO1xuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgcGF0aChib3JkZXJzKTtcbiAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXM7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHBhdGgoc3BoZXJlKTtcbiAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvcjtcbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteScsIHAyWzFdKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})