webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      location: false,\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      geo: false,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      region: false,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.gadm);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.gadm, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputed);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location) && props.location.length == 2) {\n        p2[0] = props.location[0];\n        p2[1] = props.location[1];\n      } else {\n        var l = Atlas.getCountry(props.location);\n\n        if (l) {\n          location = l.isoAlpha3;\n        } else {\n          location = 'NA';\n        }\n      }\n\n      if (location === 'NA' && p2.length == 0) {\n        p2 = p1;\n      } else if (p2.length != 2) {\n        country = countries.features.filter(function (d) {\n          return d.properties.GID_0 === location;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      var area;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1]) {\n          area = 0;\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = path.area(country);\n          console.log(area, country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.strokeStyle = props.highlight_color, context.lineWidth = props.dot_radius - 2, context.stroke();\n              } else if (country) {\n                context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwibG9jYXRpb24iLCJib3JkZXJfc3Ryb2tlX2NvbG9yIiwib3V0ZXJfc3Ryb2tlX2NvbG9yIiwic3Ryb2tlX3dpZHRoX2NvdW50cmllcyIsInN0cm9rZV93aWR0aF9zcGhlcmUiLCJnZW8iLCJoaWdobGlnaHRfY29sb3IiLCJiYXNlX2NvbG9yIiwidmVydGljYWxfdGlsdCIsIm1hcmdpbiIsImR1cmF0aW9uIiwiZW5hYmxlX2RvdCIsImRvdF9yYWRpdXMiLCJkaXNwdXRlZCIsInJlZ2lvbiIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwic3BoZXJlIiwidHlwZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJvYmplY3RzIiwiZ2FkbSIsImJvcmRlcnMiLCJhIiwiYiIsImxhbmQiLCJwcm9qZWN0aW9uIiwiZDMiLCJnZW9PcnRob2dyYXBoaWMiLCJmaXRFeHRlbnQiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsIiwiZ2V0Q291bnRyeSIsImlzb0FscGhhMyIsImZlYXR1cmVzIiwiZmlsdGVyIiwiZCIsInByb3BlcnRpZXMiLCJHSURfMCIsImdlb0NlbnRyb2lkIiwiYXJlYSIsInJlbmRlciIsInIiLCJpbnRlcnBvbGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJ0IiwiY2VudHJvaWRQcm8iLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJzZXRMaW5lRGFzaCIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUcsSUFBSUMsOEVBQUosRUFBZDs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxjQUFRLEVBQUUsS0FERztBQUViQyx5QkFBbUIsRUFBRSxTQUZSO0FBR2JDLHdCQUFrQixFQUFFLDJCQUhQO0FBSWJDLDRCQUFzQixFQUFFLEdBSlg7QUFLYkMseUJBQW1CLEVBQUUsR0FMUjtBQU1iQyxTQUFHLEVBQUUsS0FOUTtBQU9iQyxxQkFBZSxFQUFFLFNBUEo7QUFRYkMsZ0JBQVUsRUFBRSwwQkFSQztBQVNiQyxtQkFBYSxFQUFFLEVBVEY7QUFVYkMsWUFBTSxFQUFFLEVBVks7QUFXYkMsY0FBUSxFQUFFLEdBWEc7QUFZYkMsZ0JBQVUsRUFBRSxJQVpDO0FBYWJDLGdCQUFVLEVBQUUsQ0FiQztBQWNiQyxjQUFRLEVBQUUsSUFkRztBQWViQyxZQUFNLEVBQUUsS0FmSztBQWdCYkMsb0JBQWMsRUFBRSxFQWhCSDtBQWlCYkMsd0JBQWtCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQWpCUCxLOzs7Ozs7OzJCQW9CUjtBQUNMLFVBQU1DLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjtBQUNBLFVBQU1FLE1BQU0sR0FBRztBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFmOztBQUhLLGtDQUlhSCxJQUFJLENBQUNJLHFCQUFMLEVBSmI7QUFBQSxVQUlHQyxLQUpILHlCQUlHQSxLQUpIOztBQUtMLFVBQU1DLFNBQVMsR0FBR0MsdURBQUEsQ0FBaUJSLEtBQUssQ0FBQ1osR0FBdkIsRUFBNEJZLEtBQUssQ0FBQ1osR0FBTixDQUFVcUIsT0FBVixDQUFrQkMsSUFBOUMsQ0FBbEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdILG9EQUFBLENBQWNSLEtBQUssQ0FBQ1osR0FBcEIsRUFBeUJZLEtBQUssQ0FBQ1osR0FBTixDQUFVcUIsT0FBVixDQUFrQkMsSUFBM0MsRUFBaUQsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxLQUFLQyxDQUFoQjtBQUFBLE9BQWpELENBQWhCO0FBQ0EsVUFBTWpCLFFBQVEsR0FBR1ksb0RBQUEsQ0FBY1IsS0FBSyxDQUFDWixHQUFwQixFQUF5QlksS0FBSyxDQUFDWixHQUFOLENBQVVxQixPQUFWLENBQWtCYixRQUEzQyxDQUFqQjtBQUNBLFVBQU1rQixJQUFJLEdBQUdOLHVEQUFBLENBQWlCUixLQUFLLENBQUNaLEdBQXZCLEVBQTRCWSxLQUFLLENBQUNaLEdBQU4sQ0FBVXFCLE9BQVYsQ0FBa0JLLElBQTlDLENBQWI7QUFDQSxVQUFNQyxVQUFVLEdBQUdDLGtEQUFFLENBQUNDLGVBQUgsR0FBcUJDLFNBQXJCLENBQStCLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFELEVBQVcsQ0FBQ1osS0FBSyxHQUFHLEVBQVQsRUFBYUEsS0FBSyxHQUFHLEVBQXJCLENBQVgsQ0FBL0IsRUFBcUVILE1BQXJFLENBQW5CO0FBRUEsVUFBSWdCLE1BQU0sR0FBRyxLQUFLakIsU0FBTCxHQUFpQmtCLFlBQWpCLENBQThCLFFBQTlCLEVBQ1ZDLElBRFUsQ0FDTCxPQURLLEVBQ0lmLEtBREosRUFFVmUsSUFGVSxDQUVMLFFBRkssRUFFS2YsS0FGTCxDQUFiO0FBSUEsVUFBTWdCLENBQUMsR0FBR0gsTUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixDQUFWO0FBQ0EsVUFBTUUsQ0FBQyxHQUFHSixNQUFNLENBQUNFLElBQVAsQ0FBWSxZQUFaLENBQVY7QUFDQSxVQUFNRyxFQUFFLEdBQUcsQ0FBQyxDQUFDRixDQUFGLEVBQUt0QixLQUFLLENBQUNULGFBQU4sR0FBc0JnQyxDQUEzQixDQUFYOztBQUVBLFVBQUlELENBQUMsSUFBSUMsQ0FBVCxFQUFZO0FBQ1ZSLGtCQUFVLENBQUNVLE1BQVgsQ0FBa0JELEVBQWxCO0FBQ0Q7O0FBRUQsVUFBTUUsT0FBTyxHQUFHUCxNQUFNLENBQUNsQixJQUFQLEdBQWMwQixVQUFkLENBQXlCLElBQXpCLENBQWhCO0FBRUEsVUFBTUMsSUFBSSxHQUFHWixrREFBRSxDQUFDYSxPQUFILENBQVdkLFVBQVgsRUFBdUJXLE9BQXZCLENBQWI7QUFFQSxVQUFJSSxFQUFFLEdBQUcsRUFBVDtBQUFhLFVBQUkvQyxRQUFKO0FBQWMsVUFBSWdELE9BQUo7O0FBQzNCLFVBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjakMsS0FBSyxDQUFDakIsUUFBcEIsS0FBaUNpQixLQUFLLENBQUNqQixRQUFOLENBQWVtRCxNQUFmLElBQXlCLENBQTlELEVBQWlFO0FBQy9ESixVQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVE5QixLQUFLLENBQUNqQixRQUFOLENBQWUsQ0FBZixDQUFSO0FBQ0ErQyxVQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVE5QixLQUFLLENBQUNqQixRQUFOLENBQWUsQ0FBZixDQUFSO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBTW9ELENBQUMsR0FBR3ZELEtBQUssQ0FBQ3dELFVBQU4sQ0FBaUJwQyxLQUFLLENBQUNqQixRQUF2QixDQUFWOztBQUNBLFlBQUlvRCxDQUFKLEVBQU87QUFDTHBELGtCQUFRLEdBQUdvRCxDQUFDLENBQUNFLFNBQWI7QUFDRCxTQUZELE1BRU87QUFDTHRELGtCQUFRLEdBQUcsSUFBWDtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUEsUUFBUSxLQUFLLElBQWIsSUFBcUIrQyxFQUFFLENBQUNJLE1BQUgsSUFBYSxDQUF0QyxFQUF5QztBQUN2Q0osVUFBRSxHQUFHTixFQUFMO0FBQ0QsT0FGRCxNQUVPLElBQUlNLEVBQUUsQ0FBQ0ksTUFBSCxJQUFhLENBQWpCLEVBQW9CO0FBQ3pCSCxlQUFPLEdBQUd4QixTQUFTLENBQUMrQixRQUFWLENBQW1CQyxNQUFuQixDQUEwQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsVUFBRixDQUFhQyxLQUFiLEtBQXVCM0QsUUFBM0I7QUFBQSxTQUEzQixFQUFnRSxDQUFoRSxDQUFWO0FBQ0ErQyxVQUFFLEdBQUdkLGtEQUFFLENBQUMyQixXQUFILENBQWVaLE9BQWYsQ0FBTDtBQUNEOztBQUNELFVBQUlhLElBQUo7QUFDQUMsWUFBTTs7QUFDTixlQUFTQSxNQUFULEdBQWtCO0FBQ2hCLFlBQUlyQixFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVVNLEVBQUUsQ0FBQyxDQUFELENBQVosSUFBbUJOLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVU0sRUFBRSxDQUFDLENBQUQsQ0FBbkMsRUFBd0M7QUFDdENjLGNBQUksR0FBRyxDQUFQO0FBQ0EsY0FBTUUsQ0FBQyxHQUFHOUIsa0RBQUUsQ0FBQytCLFdBQUgsQ0FBZWhDLFVBQVUsQ0FBQ1UsTUFBWCxFQUFmLEVBQW9DLENBQUMsQ0FBQ0ssRUFBRSxDQUFDLENBQUQsQ0FBSixFQUFTOUIsS0FBSyxDQUFDVCxhQUFOLEdBQXNCdUMsRUFBRSxDQUFDLENBQUQsQ0FBakMsQ0FBcEMsQ0FBVjtBQUNBYyxjQUFJLEdBQUdoQixJQUFJLENBQUNnQixJQUFMLENBQVViLE9BQVYsQ0FBUDtBQUNBaUIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWtCYixPQUFsQjtBQUNBWixnQkFBTSxDQUFDK0IsVUFBUCxHQUNHekQsUUFESCxDQUNZTyxLQUFLLENBQUNQLFFBRGxCLEVBRUcwRCxLQUZILENBRVMsUUFGVCxFQUVtQixZQUFXO0FBQzFCLG1CQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQnJDLHdCQUFVLENBQUNVLE1BQVgsQ0FBa0JxQixDQUFDLENBQUNNLENBQUQsQ0FBbkI7QUFDQSxrQkFBTUMsV0FBVyxHQUFHdEMsVUFBVSxDQUFDZSxFQUFELENBQTlCO0FBQ0FKLHFCQUFPLENBQUM0QixTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCaEQsS0FBeEIsRUFBK0JBLEtBQS9CO0FBQ0FvQixxQkFBTyxDQUFDNkIsU0FBUixJQUFxQjNCLElBQUksQ0FBQ2QsSUFBRCxDQUF6QixFQUFpQ1ksT0FBTyxDQUFDOEIsU0FBUixHQUFvQnhELEtBQUssQ0FBQ1YsVUFBM0QsRUFBdUVvQyxPQUFPLENBQUMrQixJQUFSLEVBQXZFOztBQUNBLGtCQUFJekQsS0FBSyxDQUFDTixVQUFOLElBQW9Ca0QsSUFBSSxHQUFHNUMsS0FBSyxDQUFDRixjQUFyQyxFQUFxRDtBQUNuRDRCLHVCQUFPLENBQUM2QixTQUFSLElBQXFCN0IsT0FBTyxDQUFDZ0MsR0FBUixDQUFZTCxXQUFXLENBQUMsQ0FBRCxDQUF2QixFQUE0QkEsV0FBVyxDQUFDLENBQUQsQ0FBdkMsRUFBNENyRCxLQUFLLENBQUNMLFVBQWxELEVBQThELENBQTlELEVBQWlFLElBQUlnRSxJQUFJLENBQUNDLEVBQTFFLENBQXJCLEVBQXFHbEMsT0FBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ1gsZUFBakksRUFBa0pxQyxPQUFPLENBQUNvQyxTQUFSLEdBQW9COUQsS0FBSyxDQUFDTCxVQUFOLEdBQWlCLENBQXZMLEVBQTBMK0IsT0FBTyxDQUFDcUMsTUFBUixFQUExTDtBQUNELGVBRkQsTUFFTyxJQUFJaEMsT0FBSixFQUFhO0FBQ2xCTCx1QkFBTyxDQUFDNkIsU0FBUixJQUFxQjNCLElBQUksQ0FBQ0csT0FBRCxDQUF6QixFQUFvQ0wsT0FBTyxDQUFDOEIsU0FBUixHQUFvQnhELEtBQUssQ0FBQ1gsZUFBOUQsRUFBK0VxQyxPQUFPLENBQUMrQixJQUFSLEVBQS9FO0FBQ0Q7O0FBQ0Qsa0JBQUl6RCxLQUFLLENBQUNKLFFBQVYsRUFBb0I7QUFDbEI4Qix1QkFBTyxDQUFDNkIsU0FBUixJQUFxQjNCLElBQUksQ0FBQ2hDLFFBQUQsQ0FBekIsRUFBcUM4QixPQUFPLENBQUNzQyxXQUFSLENBQW9CaEUsS0FBSyxDQUFDRCxrQkFBMUIsQ0FBckMsRUFBb0YyQixPQUFPLENBQUNtQyxXQUFSLEdBQXNCN0QsS0FBSyxDQUFDaEIsbUJBQWhILEVBQXFJMEMsT0FBTyxDQUFDb0MsU0FBUixHQUFvQjlELEtBQUssQ0FBQ2Qsc0JBQS9KLEVBQXVMd0MsT0FBTyxDQUFDcUMsTUFBUixFQUF2TDtBQUNEOztBQUNEckMscUJBQU8sQ0FBQzZCLFNBQVIsSUFBcUIzQixJQUFJLENBQUNqQixPQUFELENBQXpCLEVBQW9DZSxPQUFPLENBQUNzQyxXQUFSLENBQW9CLEVBQXBCLENBQXBDLEVBQTZEdEMsT0FBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ2hCLG1CQUF6RixFQUE4RzBDLE9BQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUNkLHNCQUF4SSxFQUFnS3dDLE9BQU8sQ0FBQ3FDLE1BQVIsRUFBaEs7QUFDQXJDLHFCQUFPLENBQUM2QixTQUFSLElBQXFCM0IsSUFBSSxDQUFDekIsTUFBRCxDQUF6QixFQUFtQ3VCLE9BQU8sQ0FBQ21DLFdBQVIsR0FBc0I3RCxLQUFLLENBQUNmLGtCQUEvRCxFQUFtRnlDLE9BQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUNiLG1CQUE3RyxFQUFrSXVDLE9BQU8sQ0FBQ3FDLE1BQVIsRUFBbEk7QUFDRCxhQWZEO0FBZ0JELFdBbkJIO0FBb0JELFNBekJELE1BeUJPO0FBQ0xyQyxpQkFBTyxDQUFDNEIsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QmhELEtBQXhCLEVBQStCQSxLQUEvQjtBQUNBb0IsaUJBQU8sQ0FBQzZCLFNBQVIsSUFBcUIzQixJQUFJLENBQUNkLElBQUQsQ0FBekIsRUFBaUNZLE9BQU8sQ0FBQzhCLFNBQVIsR0FBb0J4RCxLQUFLLENBQUNWLFVBQTNELEVBQXVFb0MsT0FBTyxDQUFDK0IsSUFBUixFQUF2RTs7QUFDQSxjQUFJekQsS0FBSyxDQUFDSixRQUFWLEVBQW9CO0FBQ2xCOEIsbUJBQU8sQ0FBQzZCLFNBQVIsSUFBcUIzQixJQUFJLENBQUNoQyxRQUFELENBQXpCLEVBQXFDOEIsT0FBTyxDQUFDc0MsV0FBUixDQUFvQmhFLEtBQUssQ0FBQ0Qsa0JBQTFCLENBQXJDLEVBQW9GMkIsT0FBTyxDQUFDbUMsV0FBUixHQUFzQjdELEtBQUssQ0FBQ2hCLG1CQUFoSCxFQUFxSTBDLE9BQU8sQ0FBQ29DLFNBQVIsR0FBb0I5RCxLQUFLLENBQUNkLHNCQUEvSixFQUF1THdDLE9BQU8sQ0FBQ3FDLE1BQVIsRUFBdkw7QUFDRDs7QUFDRHJDLGlCQUFPLENBQUM2QixTQUFSLElBQXFCM0IsSUFBSSxDQUFDakIsT0FBRCxDQUF6QixFQUFvQ2UsT0FBTyxDQUFDc0MsV0FBUixDQUFvQixFQUFwQixDQUFwQyxFQUE2RHRDLE9BQU8sQ0FBQ21DLFdBQVIsR0FBc0I3RCxLQUFLLENBQUNoQixtQkFBekYsRUFBOEcwQyxPQUFPLENBQUNvQyxTQUFSLEdBQW9COUQsS0FBSyxDQUFDZCxzQkFBeEksRUFBZ0t3QyxPQUFPLENBQUNxQyxNQUFSLEVBQWhLO0FBQ0FyQyxpQkFBTyxDQUFDNkIsU0FBUixJQUFxQjNCLElBQUksQ0FBQ3pCLE1BQUQsQ0FBekIsRUFBbUN1QixPQUFPLENBQUNtQyxXQUFSLEdBQXNCN0QsS0FBSyxDQUFDZixrQkFBL0QsRUFBbUZ5QyxPQUFPLENBQUNvQyxTQUFSLEdBQW9COUQsS0FBSyxDQUFDYixtQkFBN0csRUFBa0l1QyxPQUFPLENBQUNxQyxNQUFSLEVBQWxJO0FBQ0Q7QUFDRjs7QUFBQTtBQUVENUMsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFDQVgsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQTlHd0JtQyw0RDs7QUFpSFpuRiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Ryb2tlX3dpZHRoX2NvdW50cmllczogMC41LFxuICAgIHN0cm9rZV93aWR0aF9zcGhlcmU6IDEuMixcbiAgICBnZW86IGZhbHNlLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgcmVnaW9uOiBmYWxzZSxcbiAgICBhcmVhX3RocmVzaG9sZDogMTAsXG4gICAgZGlzcHV0ZWRfZGFzaGFycmF5OiBbNSwgNV0sXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBzcGhlcmUgPSB7IHR5cGU6ICdTcGhlcmUnIH07XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMuZ2FkbSk7XG4gICAgY29uc3QgYm9yZGVycyA9IHRvcG9qc29uLm1lc2gocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5nYWRtLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMuZGlzcHV0ZWQpO1xuICAgIGNvbnN0IGxhbmQgPSB0b3BvanNvbi5mZWF0dXJlKHByb3BzLmdlbywgcHJvcHMuZ2VvLm9iamVjdHMubGFuZCk7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSk7XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5zZWxlY3Rpb24oKS5hcHBlbmRTZWxlY3QoJ2NhbnZhcycpXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB3aWR0aCk7XG5cbiAgICBjb25zdCB4ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnKTtcbiAgICBjb25zdCB5ID0gY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknKTtcbiAgICBjb25zdCBwMSA9IFsteCwgcHJvcHMudmVydGljYWxfdGlsdCAtIHldO1xuXG4gICAgaWYgKHggJiYgeSkge1xuICAgICAgcHJvamVjdGlvbi5yb3RhdGUocDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMubm9kZSgpLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aChwcm9qZWN0aW9uLCBjb250ZXh0KTtcblxuICAgIGxldCBwMiA9IFtdOyBsZXQgbG9jYXRpb247IGxldCBjb3VudHJ5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmxvY2F0aW9uKSAmJiBwcm9wcy5sb2NhdGlvbi5sZW5ndGggPT0gMikge1xuICAgICAgcDJbMF0gPSBwcm9wcy5sb2NhdGlvblswXTtcbiAgICAgIHAyWzFdID0gcHJvcHMubG9jYXRpb25bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGwgPSBBdGxhcy5nZXRDb3VudHJ5KHByb3BzLmxvY2F0aW9uKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGxvY2F0aW9uID0gbC5pc29BbHBoYTM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9ICdOQSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uID09PSAnTkEnICYmIHAyLmxlbmd0aCA9PSAwKSB7XG4gICAgICBwMiA9IHAxO1xuICAgIH0gZWxzZSBpZiAocDIubGVuZ3RoICE9IDIpIHtcbiAgICAgIGNvdW50cnkgPSBjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gZC5wcm9wZXJ0aWVzLkdJRF8wID09PSBsb2NhdGlvbilbMF07XG4gICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgIH1cbiAgICBsZXQgYXJlYTtcbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAocDFbMF0gIT09IHAyWzBdICYmIHAxWzFdICE9PSBwMlsxXSkge1xuICAgICAgICBhcmVhID0gMDtcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBhcmVhID0gcGF0aC5hcmVhKGNvdW50cnkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcmVhLCBjb3VudHJ5KVxuICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHByb3BzLmR1cmF0aW9uKVxuICAgICAgICAgIC50d2Vlbigncm90YXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICBwcm9qZWN0aW9uLnJvdGF0ZShyKHQpKTtcbiAgICAgICAgICAgICAgY29uc3QgY2VudHJvaWRQcm8gPSBwcm9qZWN0aW9uKHAyKTtcbiAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QgJiYgYXJlYSA8IHByb3BzLmFyZWFfdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgY29udGV4dC5hcmMoY2VudHJvaWRQcm9bMF0sIGNlbnRyb2lkUHJvWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSksICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLmRvdF9yYWRpdXMtMiwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChjb3VudHJ5KSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5oaWdobGlnaHRfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoZGlzcHV0ZWQpLCBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChib3JkZXJzKSwgY29udGV4dC5zZXRMaW5lRGFzaChbXSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoc3BoZXJlKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgobGFuZCksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgIGlmIChwcm9wcy5kaXNwdXRlZCkge1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoZGlzcHV0ZWQpLCBjb250ZXh0LnNldExpbmVEYXNoKHByb3BzLmRpc3B1dGVkX2Rhc2hhcnJheSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChib3JkZXJzKSwgY29udGV4dC5zZXRMaW5lRGFzaChbXSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5ib3JkZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9jb3VudHJpZXMsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoc3BoZXJlKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLm91dGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfc3BoZXJlLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteCcsIHAyWzBdKTtcbiAgICBjYW52YXMuYXR0cignY2VudHJvaWQteScsIHAyWzFdKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JldHJvdHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})