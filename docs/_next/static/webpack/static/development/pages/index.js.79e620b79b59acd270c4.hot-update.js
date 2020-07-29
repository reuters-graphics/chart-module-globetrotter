webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      geo: false,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 5,\n      disputed: true,\n      location_type: 'country',\n      // Other options are point and region\n      location: false,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.gadm);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.gadm, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputed);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location) && props.location.length == 2 && props.location_type == 'point') {\n        p2[0] = props.location[0];\n        p2[1] = props.location[1];\n      } else if (props.location_type == 'region') {\n        var countryList = Atlas.getRegion(props.location).countries.map(function (d) {\n          return d.isoAlpha3;\n        });\n        merged = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"merge\"](props.geo, props.geo.objects.gadm.geometries.filter(function (d) {\n          return Object(lodash__WEBPACK_IMPORTED_MODULE_11__[\"indexOf\"])(countryList, d.properties.GID_0) > -1;\n        }));\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(merged);\n      } else if (props.location_type == 'country') {\n        var l = Atlas.getCountry(props.location);\n\n        if (l) {\n          location = l.isoAlpha3;\n          country = countries.features.filter(function (d) {\n            return d.properties.GID_0 === location;\n          })[0];\n          p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n        } else {\n          location = 'NA';\n\n          if (p2.length == 0) {\n            p2 = p1;\n          }\n        }\n      }\n\n      var area, endPath, merged;\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1]) {\n          endPath = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(_utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          area = endPath.area(country);\n          console.log(area, country);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (merged) {\n                context.beginPath(), path(merged), context.fillStyle = props.highlight_color, context.fill();\n              } else {\n                if (props.enable_dot && area < props.area_threshold) {\n                  context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.strokeStyle = props.highlight_color, context.lineWidth = props.dot_radius - 2, context.stroke();\n                } else if (country) {\n                  context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n                }\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwiYm9yZGVyX3N0cm9rZV9jb2xvciIsIm91dGVyX3N0cm9rZV9jb2xvciIsInN0cm9rZV93aWR0aF9jb3VudHJpZXMiLCJzdHJva2Vfd2lkdGhfc3BoZXJlIiwiZ2VvIiwiaGlnaGxpZ2h0X2NvbG9yIiwiYmFzZV9jb2xvciIsInZlcnRpY2FsX3RpbHQiLCJtYXJnaW4iLCJkdXJhdGlvbiIsImVuYWJsZV9kb3QiLCJkb3RfcmFkaXVzIiwiZGlzcHV0ZWQiLCJsb2NhdGlvbl90eXBlIiwibG9jYXRpb24iLCJhcmVhX3RocmVzaG9sZCIsImRpc3B1dGVkX2Rhc2hhcnJheSIsInByb3BzIiwibm9kZSIsInNlbGVjdGlvbiIsInNwaGVyZSIsInR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNvdW50cmllcyIsInRvcG9qc29uIiwib2JqZWN0cyIsImdhZG0iLCJib3JkZXJzIiwiYSIsImIiLCJsYW5kIiwicHJvamVjdGlvbiIsImQzIiwiZ2VvT3J0aG9ncmFwaGljIiwiZml0RXh0ZW50IiwiY2FudmFzIiwiYXBwZW5kU2VsZWN0IiwiYXR0ciIsIngiLCJ5IiwicDEiLCJyb3RhdGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInBhdGgiLCJnZW9QYXRoIiwicDIiLCJjb3VudHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY291bnRyeUxpc3QiLCJnZXRSZWdpb24iLCJtYXAiLCJkIiwiaXNvQWxwaGEzIiwibWVyZ2VkIiwiZ2VvbWV0cmllcyIsImZpbHRlciIsImluZGV4T2YiLCJwcm9wZXJ0aWVzIiwiR0lEXzAiLCJnZW9DZW50cm9pZCIsImwiLCJnZXRDb3VudHJ5IiwiZmVhdHVyZXMiLCJhcmVhIiwiZW5kUGF0aCIsInJlbmRlciIsInIiLCJpbnRlcnBvbGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2l0aW9uIiwidHdlZW4iLCJ0IiwiY2VudHJvaWRQcm8iLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJzZXRMaW5lRGFzaCIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLElBQUlDLDhFQUFKLEVBQWQ7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFFYkMseUJBQW1CLEVBQUUsU0FGUjtBQUdiQyx3QkFBa0IsRUFBRSwyQkFIUDtBQUliQyw0QkFBc0IsRUFBRSxHQUpYO0FBS2JDLHlCQUFtQixFQUFFLEdBTFI7QUFNYkMsU0FBRyxFQUFFLEtBTlE7QUFPYkMscUJBQWUsRUFBRSxTQVBKO0FBUWJDLGdCQUFVLEVBQUUsMEJBUkM7QUFTYkMsbUJBQWEsRUFBRSxFQVRGO0FBVWJDLFlBQU0sRUFBRSxFQVZLO0FBV2JDLGNBQVEsRUFBRSxHQVhHO0FBWWJDLGdCQUFVLEVBQUUsSUFaQztBQWFiQyxnQkFBVSxFQUFFLENBYkM7QUFjYkMsY0FBUSxFQUFFLElBZEc7QUFlYkMsbUJBQWEsRUFBRSxTQWZGO0FBZWE7QUFDMUJDLGNBQVEsRUFBRSxLQWhCRztBQWlCYkMsb0JBQWMsRUFBRSxFQWpCSDtBQWtCYkMsd0JBQWtCLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQWxCUCxLOzs7Ozs7OzJCQXFCUjtBQUNMLFVBQU1DLEtBQUssR0FBRyxLQUFLQSxLQUFMLEVBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0MsU0FBTCxHQUFpQkQsSUFBakIsRUFBYjtBQUNBLFVBQU1FLE1BQU0sR0FBRztBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUFmOztBQUhLLGtDQUlhSCxJQUFJLENBQUNJLHFCQUFM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QUFZLFlBQVosRUFBMEJTLEVBQUUsQ0FBQyxDQUFELENBQTVCO0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUF4SHdCMEMsNEQ7O0FBMkhaMUYsMkVBQWYiLCJmaWxlIjoiLi9zcmMvbGliL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24tY2xpZW50JztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5pbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCB7aW5kZXhPZn0gZnJvbSAnbG9kYXNoJ1xuY29uc3QgQXRsYXMgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBHbG9iZXRyb3R0ZXIgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Ryb2tlX3dpZHRoX2NvdW50cmllczogMC41LFxuICAgIHN0cm9rZV93aWR0aF9zcGhlcmU6IDEuMixcbiAgICBnZW86IGZhbHNlLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDUsXG4gICAgZGlzcHV0ZWQ6IHRydWUsXG4gICAgbG9jYXRpb25fdHlwZTogJ2NvdW50cnknLCAvLyBPdGhlciBvcHRpb25zIGFyZSBwb2ludCBhbmQgcmVnaW9uXG4gICAgbG9jYXRpb246IGZhbHNlLFxuICAgIGFyZWFfdGhyZXNob2xkOiAxMCxcbiAgICBkaXNwdXRlZF9kYXNoYXJyYXk6IFs1LCA1XSxcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5nYWRtKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmdhZG0sIChhLCBiKSA9PiBhICE9PSBiKTtcbiAgICBjb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2gocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5kaXNwdXRlZCk7XG4gICAgY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5sYW5kKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBsb2NhdGlvbjsgbGV0IGNvdW50cnk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMubG9jYXRpb24pICYmIHByb3BzLmxvY2F0aW9uLmxlbmd0aCA9PSAyICYmIHByb3BzLmxvY2F0aW9uX3R5cGU9PSdwb2ludCcpIHtcbiAgICAgIHAyWzBdID0gcHJvcHMubG9jYXRpb25bMF07XG4gICAgICBwMlsxXSA9IHByb3BzLmxvY2F0aW9uWzFdO1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb25fdHlwZT09J3JlZ2lvbicpe1xuICAgICAgY29uc3QgY291bnRyeUxpc3QgPSAoQXRsYXMuZ2V0UmVnaW9uKHByb3BzLmxvY2F0aW9uKS5jb3VudHJpZXMpLm1hcChkPT5kLmlzb0FscGhhMyk7XG4gICAgICBtZXJnZWQgPSB0b3BvanNvbi5tZXJnZShwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmdhZG0uZ2VvbWV0cmllcy5maWx0ZXIoZnVuY3Rpb24oZCkgeyByZXR1cm4gaW5kZXhPZihjb3VudHJ5TGlzdCxkLnByb3BlcnRpZXMuR0lEXzApPi0xIH0pKVxuICAgICAgcDIgPSBkMy5nZW9DZW50cm9pZChtZXJnZWQpO1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb25fdHlwZT09J2NvdW50cnknKXtcbiAgICAgIGNvbnN0IGwgPSBBdGxhcy5nZXRDb3VudHJ5KHByb3BzLmxvY2F0aW9uKTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGxvY2F0aW9uID0gbC5pc29BbHBoYTM7XG4gICAgICAgIGNvdW50cnkgPSBjb3VudHJpZXMuZmVhdHVyZXMuZmlsdGVyKGQgPT4gZC5wcm9wZXJ0aWVzLkdJRF8wID09PSBsb2NhdGlvbilbMF07XG4gICAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvbiA9ICdOQSc7XG4gICAgICAgIGlmIChwMi5sZW5ndGg9PTApe1xuICAgICAgICAgICBwMiA9IHAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFyZWEsIGVuZFBhdGgsIG1lcmdlZDtcblxuICAgIHJlbmRlcigpO1xuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmIChwMVswXSAhPT0gcDJbMF0gJiYgcDFbMV0gIT09IHAyWzFdKSB7XG4gICAgICAgIGVuZFBhdGggPSBkMy5nZW9QYXRoKGQzLmdlb09ydGhvZ3JhcGhpYygpLmZpdEV4dGVudChbWzEwLCAxMF0sIFt3aWR0aCAtIDEwLCB3aWR0aCAtIDEwXV0sIHNwaGVyZSkucm90YXRlKFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgciA9IGQzLmludGVycG9sYXRlKHByb2plY3Rpb24ucm90YXRlKCksIFstcDJbMF0sIHByb3BzLnZlcnRpY2FsX3RpbHQgLSBwMlsxXV0pO1xuICAgICAgICBhcmVhID0gZW5kUGF0aC5hcmVhKGNvdW50cnkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcmVhLCBjb3VudHJ5KTtcbiAgICAgICAgY2FudmFzLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihwcm9wcy5kdXJhdGlvbilcbiAgICAgICAgICAudHdlZW4oJ3JvdGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcHJvamVjdGlvbi5yb3RhdGUocih0KSk7XG4gICAgICAgICAgICAgIGNvbnN0IGNlbnRyb2lkUHJvID0gcHJvamVjdGlvbihwMik7XG4gICAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCB3aWR0aCk7XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgobGFuZCksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuYmFzZV9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIGlmIChtZXJnZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKG1lcmdlZCksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuZW5hYmxlX2RvdCAmJiBhcmVhIDwgcHJvcHMuYXJlYV90aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIGNvbnRleHQuYXJjKGNlbnRyb2lkUHJvWzBdLCBjZW50cm9pZFByb1sxXSwgcHJvcHMuZG90X3JhZGl1cywgMCwgMiAqIE1hdGguUEkpLCAgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5kb3RfcmFkaXVzLTIsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGNvdW50cnkpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGJvcmRlcnMpLCBjb250ZXh0LnNldExpbmVEYXNoKFtdKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChzcGhlcmUpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmUsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIHdpZHRoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChsYW5kKSwgY29udGV4dC5maWxsU3R5bGUgPSBwcm9wcy5iYXNlX2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgaWYgKHByb3BzLmRpc3B1dGVkKSB7XG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChkaXNwdXRlZCksIGNvbnRleHQuc2V0TGluZURhc2gocHJvcHMuZGlzcHV0ZWRfZGFzaGFycmF5KSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGJvcmRlcnMpLCBjb250ZXh0LnNldExpbmVEYXNoKFtdKSwgY29udGV4dC5zdHJva2VTdHlsZSA9IHByb3BzLmJvcmRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX2NvdW50cmllcywgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKSwgcGF0aChzcGhlcmUpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMub3V0ZXJfc3Ryb2tlX2NvbG9yLCBjb250ZXh0LmxpbmVXaWR0aCA9IHByb3BzLnN0cm9rZV93aWR0aF9zcGhlcmUsIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC14JywgcDJbMF0pO1xuICAgIGNhbnZhcy5hdHRyKCdjZW50cm9pZC15JywgcDJbMV0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2xvYmV0cm90dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})