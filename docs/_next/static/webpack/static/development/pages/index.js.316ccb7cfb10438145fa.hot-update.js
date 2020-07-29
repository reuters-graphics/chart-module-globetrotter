webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _topo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topo.js */ \"./src/lib/topo.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      location: {\n        value: false,\n        type: 'country'\n      },\n      // Other types are point and region\n      area_threshold: 10,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.gadm);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.gadm, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.disputed);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location.value) && props.location.value.length == 2 && props.location.type == 'point') {\n        p2[0] = props.location.value[0];\n        p2[1] = props.location.value[1];\n      } else if (props.location.type == 'region') {\n        var countryList = Atlas.getRegion(props.location.value).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](_topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _topo_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"].objects.gadm.geometries.filter(function (d) {\n          return Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"indexOf\"])(countryList, d.properties.GID_0) > -1;\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (props.location.type == 'country') {\n        var l = Atlas.getCountry(props.location.value);\n\n        if (l) {\n          location = l.isoAlpha3;\n          country = countries.features.filter(function (d) {\n            return d.properties.GID_0 === location;\n          })[0];\n          p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n        } else {\n          location = 'NA';\n\n          if (p2.length == 0) {\n            p2 = p1;\n          }\n        }\n      }\n\n      var area, endPath, merged;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1] && p2[0] && p2[1]) {\n          console.log('gibb');\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (merged) {\n                context.beginPath(), path(merged), context.fillStyle = props.highlight_color, context.fill();\n              } else if (country && area > props.area_threshold || !props.enable_dot) {\n                context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.strokeStyle = props.highlight_color, context.lineWidth = props.dot_radius - 2, context.stroke();\n              }\n\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else if (!p2[0] || !p2[1]) {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJsb2NhdGlvbiIsInZhbHVlIiwidHlwZSIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwic3BoZXJlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjb3VudHJpZXMiLCJ0b3BvanNvbiIsIndvcmxkIiwib2JqZWN0cyIsImdhZG0iLCJib3JkZXJzIiwiYSIsImIiLCJsYW5kIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiY2FudmFzIiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsIngiLCJ5IiwicDEiLCJyb3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInBhdGgiLCJnZW9QYXRoIiwicDIiLCJjb3VudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY291bnRyeUxpc3QiLCJnZXRSZWdpb24iLCJtYXAiLCJkIiwiaXNvQWxwaGEzIiwibWVyZ2VkIiwiZ2VvbWV0cmllcyIsImZpbHRlciIsImluZGV4T2YiLCJwcm9wZXJ0aWVzIiwiR0lEXzAiLCJnZW9DZW50cm9pZCIsImwiLCJnZXRDb3VudHJ5IiwiZmVhdHVyZXMiLCJhcmVhIiwiZW5kUGF0aCIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJyIiwiaW50ZXJwb2xhdGUiLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJ0IiwiY2VudHJvaWRQcm8iLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwic2V0TGluZURhc2giLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImFyYyIsIk1hdGgiLCJQSSIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMseUJBQW1CLEVBQUUsU0FEUjtBQUViQyx3QkFBa0IsRUFBRSwyQkFGUDtBQUdiQyw0QkFBc0IsRUFBRSxHQUhYO0FBSWJDLHlCQUFtQixFQUFFLEdBSlI7QUFLYkMscUJBQWUsRUFBRSxTQUxKO0FBTWJDLGdCQUFVLEVBQUUsMEJBTkM7QUFPYkMsbUJBQWEsRUFBRSxFQVBGO0FBUWJDLFlBQU0sRUFBRSxFQVJLO0FBU2JDLGNBQVEsRUFBRSxHQVRHO0FBVWJDLGdCQUFVLEVBQUUsSUFWQztBQVdiQyxnQkFBVSxFQUFFLENBWEM7QUFZYkMsY0FBUSxFQUFFLElBWkc7QUFhYkMsY0FBUSxFQUFFO0FBQUVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFJLEVBQUU7QUFBdEIsT0FiRztBQWFnQztBQUM3Q0Msb0JBQWMsRUFBRSxFQWRIO0FBZWJDLHdCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFmUCxLOzs7Ozs7OzJCQWtCUjtBQUNMLFVBQU1DLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjtBQUNBLFVBQU1FLE1BQU0sR0FBRztBQUFFTixZQUFJLEVBQUU7QUFBUixPQUFmOztBQUhLLGtDQUlhSSxJQUFJLENBQUNHLHFCQUFMLEVB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bkUsS0FBSyxDQUFDZCxtQkFBN0csRUFBa0l3QyxPQUFPLENBQUMwQyxNQUFSLEVBQWxJO0FBQ0Q7QUFDRjs7QUFBQTtBQUVEakQsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFDQVgsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQW5Id0IwQyw0RDs7QUFzSFoxRiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IHtpbmRleE9mfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgd29ybGQgZnJvbSAnLi90b3BvLmpzJ1xuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Ryb2tlX3dpZHRoX2NvdW50cmllczogMC41LFxuICAgIHN0cm9rZV93aWR0aF9zcGhlcmU6IDEuMixcbiAgICBoaWdobGlnaHRfY29sb3I6ICcjZmNlNTg3JyxcbiAgICBiYXNlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICB2ZXJ0aWNhbF90aWx0OiAxNSxcbiAgICBtYXJnaW46IDEwLFxuICAgIGR1cmF0aW9uOiA3NTAsXG4gICAgZW5hYmxlX2RvdDogdHJ1ZSxcbiAgICBkb3RfcmFkaXVzOiA1LFxuICAgIGRpc3B1dGVkOiB0cnVlLFxuICAgIGxvY2F0aW9uOiB7IHZhbHVlOiBmYWxzZSwgdHlwZTogJ2NvdW50cnknIH0sIC8vIE90aGVyIHR5cGVzIGFyZSBwb2ludCBhbmQgcmVnaW9uXG4gICAgYXJlYV90aHJlc2hvbGQ6IDEwLFxuICAgIGRpc3B1dGVkX2Rhc2hhcnJheTogWzUsIDVdLFxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3Qgc3BoZXJlID0geyB0eXBlOiAnU3BoZXJlJyB9O1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtLCAoYSwgYikgPT4gYSAhPT0gYik7XG4gICAgY29uc3QgZGlzcHV0ZWQgPSB0b3BvanNvbi5tZXNoKHdvcmxkLCB3b3JsZC5vYmplY3RzLmRpc3B1dGVkKTtcbiAgICBjb25zdCBsYW5kID0gdG9wb2pzb24uZmVhdHVyZSh3b3JsZCwgd29ybGQub2JqZWN0cy5sYW5kKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBsb2NhdGlvbjsgbGV0IGNvdW50cnk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMubG9jYXRpb24udmFsdWUpICYmIHByb3BzLmxvY2F0aW9uLnZhbHVlLmxlbmd0aCA9PSAyICYmIHByb3BzLmxvY2F0aW9uLnR5cGU9PSdwb2ludCcpIHtcbiAgICAgIHAyWzBdID0gcHJvcHMubG9jYXRpb24udmFsdWVbMF07XG4gICAgICBwMlsxXSA9IHByb3BzLmxvY2F0aW9uLnZhbHVlWzFdO1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb24udHlwZT09J3JlZ2lvbicpe1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSAoQXRsYXMuZ2V0UmVnaW9uKHByb3BzLmxvY2F0aW9uLnZhbHVlKS5jb3VudHJpZXMpLm1hcChkPT5kLmlzb0FscGhhMyk7XG4gICAgICBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZSh3b3JsZCwgd29ybGQub2JqZWN0cy5nYWRtLmdlb21ldHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGluZGV4T2YoY291bnRyeUxpc3QsZC5wcm9wZXJ0aWVzLkdJRF8wKT4tMSB9KSlcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQobWVyZ2VkKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmxvY2F0aW9uLnR5cGU9PSdjb3VudHJ5Jyl7XG4gICAgICBjb25zdCBsID0gQXRsYXMuZ2V0Q291bnRyeShwcm9wcy5sb2NhdGlvbi52YWx1ZSk7XG4gICAgICBpZiAobCkge1xuICAgICAgICBsb2NhdGlvbiA9IGwuaXNvQWxwaGEzO1xuICAgICAgICBjb3VudHJ5ID0gY291bnRyaWVzLmZlYXR1cmVzLmZpbHRlcihkID0+IGQucHJvcGVydGllcy5HSURfMCA9PT0gbG9jYXRpb24pWzBdO1xuICAgICAgICBwMiA9IGQzLmdlb0NlbnRyb2lkKGNvdW50cnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24gPSAnTkEnO1xuICAgICAgICBpZiAocDIubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgcDIgPSBwMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhcmVhLCBlbmRQYXRoLCBtZXJnZWQ7XG5cbiAgICByZW5kZXIoKTtcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAocDFbMF0gIT09IHAyWzBdICYmIHAxWzFdICE9PSBwMlsxXSAmJiAocDJbMF0gJiYgcDJbMV0pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnaWJiJylcbiAgICAgICAgZW5kUGF0aCA9IGQzLmdlb1BhdGgoZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKS5yb3RhdGUoWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSksIGNvbnRleHQpO1xuICAgICAgICBjb25zdCByID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSk7XG4gICAgICAgIGFyZWEgPSBlbmRQYXRoLmFyZWEoY291bnRyeSk7XG4gICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocDIpO1xuICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGxhbmQpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICBpZiAobWVyZ2VkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChtZXJnZWQpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGNvdW50cnkgJiYgYXJlYSA+IHByb3BzLmFyZWFfdGhyZXNob2xkKSB8fCAoIXByb3BzLmVuYWJsZV9kb3QpKSB7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGNvdW50cnkpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGJvcmRlcnMpLCBjb250ZXh0LnNldExpbmVEYXNoKFtdKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgIGlmIChwcm9wcy5lbmFibGVfZG90ICYmIGFyZWEgPCBwcm9wcy5hcmVhX3RocmVzaG9sZCl7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgY29udGV4dC5hcmMoY2VudHJvaWRQcm9bMF0sIGNlbnRyb2lkUHJvWzFdLCBwcm9wcy5kb3RfcmFkaXVzLCAwLCAyICogTWF0aC5QSSksICBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLmRvdF9yYWRpdXMtMiwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKHNwaGVyZSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZSwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFwMlswXSB8fCAhcDJbMV0pIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGJvcmRlcnMpLCBjb250ZXh0LnNldExpbmVEYXNoKFtdKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChzcGhlcmUpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmUsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC14JywgcDJbMF0pO1xuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC15JywgcDJbMV0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmV0cm90dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})