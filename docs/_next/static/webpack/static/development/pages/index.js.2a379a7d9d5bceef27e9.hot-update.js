webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! topojson-client */ \"./node_modules/topojson-client/src/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Atlas = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_8___default.a();\n\nvar Globetrotter = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Globetrotter, _ChartComponent);\n\n  var _super = _createSuper(Globetrotter);\n\n  function Globetrotter() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Globetrotter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      location: false,\n      border_stroke_color: '#2f353f',\n      outer_stroke_color: 'rgba(255, 255, 255, 0.75)',\n      stroke_width_countries: 0.5,\n      stroke_width_sphere: 1.2,\n      geo: false,\n      highlight_color: '#fce587',\n      base_color: 'rgba(255, 255, 255, 0.2)',\n      vertical_tilt: 15,\n      margin: 10,\n      duration: 750,\n      enable_dot: true,\n      dot_radius: 2.5,\n      disputed: true,\n      region: false,\n      area_threshold: 10,\n      disputed_dasharray: [5, 5]\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Globetrotter, [{\n    key: \"draw\",\n    value: function draw() {\n      var props = this.props();\n      var node = this.selection().node();\n      var sphere = {\n        type: 'Sphere'\n      };\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var countries = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.gadm);\n      var borders = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.gadm, function (a, b) {\n        return a !== b;\n      });\n      var disputed = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"mesh\"](props.geo, props.geo.objects.disputed);\n      var land = topojson_client__WEBPACK_IMPORTED_MODULE_7__[\"feature\"](props.geo, props.geo.objects.land);\n      var projection = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);\n      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);\n      var x = canvas.attr('centroid-x');\n      var y = canvas.attr('centroid-y');\n      var p1 = [-x, props.vertical_tilt - y];\n\n      if (x && y) {\n        projection.rotate(p1);\n      }\n\n      var context = canvas.node().getContext('2d');\n      var path = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoPath(projection, context);\n      var p2 = [];\n      var location;\n      var country;\n\n      if (Array.isArray(props.location) && props.location.length == 2) {\n        p2[0] = props.location[0];\n        p2[1] = props.location[1];\n      } else {\n        var l = Atlas.getCountry(props.location);\n\n        if (l) {\n          location = l.isoAlpha3;\n        } else {\n          location = 'NA';\n        }\n      }\n\n      if (location === 'NA' && p2.length == 0) {\n        p2 = p1;\n      } else if (p2.length != 2) {\n        country = countries.features.filter(function (d) {\n          return d.properties.GID_0 === location;\n        })[0];\n        p2 = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].geoCentroid(country);\n      }\n\n      render();\n\n      function render() {\n        if (p1[0] !== p2[0] && p1[1] !== p2[1]) {\n          var area = path.area(country);\n          var r = _utils_d3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);\n          canvas.transition().duration(props.duration).tween('rotate', function () {\n            return function (t) {\n              projection.rotate(r(t));\n              var centroidPro = projection(p2);\n              context.clearRect(0, 0, width, width);\n              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n              if (props.enable_dot && area < props.area_threshold) {\n                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.fillStyle = props.highlight_color, context.fill();\n              } else if (country) {\n                context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();\n              }\n\n              if (props.disputed) {\n                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              }\n\n              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n            };\n          });\n        } else {\n          context.clearRect(0, 0, width, width);\n          context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();\n\n          if (props.disputed) {\n            context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          }\n\n          context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();\n          context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();\n        }\n      }\n\n      ;\n      canvas.attr('centroid-x', p2[0]);\n      canvas.attr('centroid-y', p2[1]);\n      return this;\n    }\n  }]);\n\n  return Globetrotter;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Globetrotter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiQXRsYXMiLCJBdGxhc01ldGFkYXRhQ2xpZW50IiwiR2xvYmV0cm90dGVyIiwibG9jYXRpb24iLCJib3JkZXJfc3Ryb2tlX2NvbG9yIiwib3V0ZXJfc3Ryb2tlX2NvbG9yIiwic3Ryb2tlX3dpZHRoX2NvdW50cmllcyIsInN0cm9rZV93aWR0aF9zcGhlcmUiLCJnZW8iLCJoaWdobGlnaHRfY29sb3IiLCJiYXNlX2NvbG9yIiwidmVydGljYWxfdGlsdCIsIm1hcmdpbiIsImR1cmF0aW9uIiwiZW5hYmxlX2RvdCIsImRvdF9yYWRpdXMiLCJkaXNwdXRlZCIsInJlZ2lvbiIsImFyZWFfdGhyZXNob2xkIiwiZGlzcHV0ZWRfZGFzaGFycmF5IiwicHJvcHMiLCJub2RlIiwic2VsZWN0aW9uIiwic3BoZXJlIiwidHlwZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJvYmplY3RzIiwiZ2FkbSIsImJvcmRlcnMiLCJhIiwiYiIsImxhbmQiLCJwcm9qZWN0aW9uIiwiZDMiLCJnZW9PcnRob2dyYXBoaWMiLCJmaXRFeHRlbnQiLCJjYW52YXMiLCJhcHBlbmRTZWxlY3QiLCJhdHRyIiwieCIsInkiLCJwMSIsInJvdGF0ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicGF0aCIsImdlb1BhdGgiLCJwMiIsImNvdW50cnkiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJsIiwiZ2V0Q291bnRyeSIsImlzb0FscGhhMyIsImZlYXR1cmVzIiwiZmlsdGVyIiwiZCIsInByb3BlcnRpZXMiLCJHSURfMCIsImdlb0NlbnRyb2lkIiwicmVuZGVyIiwiYXJlYSIsInIiLCJpbnRlcnBvbGF0ZSIsInRyYW5zaXRpb24iLCJ0d2VlbiIsInQiLCJjZW50cm9pZFBybyIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJhcmMiLCJNYXRoIiwiUEkiLCJzZXRMaW5lRGFzaCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEtBQUssR0FBRyxJQUFJQyw4RUFBSixFQUFkOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLGNBQVEsRUFBRSxLQURHO0FBRWJDLHlCQUFtQixFQUFFLFNBRlI7QUFHYkMsd0JBQWtCLEVBQUUsMkJBSFA7QUFJYkMsNEJBQXNCLEVBQUUsR0FKWDtBQUtiQyx5QkFBbUIsRUFBRSxHQUxSO0FBTWJDLFNBQUcsRUFBRSxLQU5RO0FBT2JDLHFCQUFlLEVBQUUsU0FQSjtBQVFiQyxnQkFBVSxFQUFFLDBCQVJDO0FBU2JDLG1CQUFhLEVBQUUsRUFURjtBQVViQyxZQUFNLEVBQUUsRUFWSztBQVdiQyxjQUFRLEVBQUUsR0FYRztBQVliQyxnQkFBVSxFQUFFLElBWkM7QUFhYkMsZ0JBQVUsRUFBRSxHQWJDO0FBY2JDLGNBQVEsRUFBRSxJQWRHO0FBZWJDLFlBQU0sRUFBRSxLQWZLO0FBZ0JiQyxvQkFBYyxFQUFFLEVBaEJIO0FBaUJiQyx3QkFBa0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBakJQLEs7Ozs7Ozs7MkJBb0JSO0FBQ0wsVUFBTUMsS0FBSyxHQUFHLEtBQUtBLEtBQUwsRUFBZDtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLQyxTQUFMLEdBQWlCRCxJQUFqQixFQUFiO0FBQ0EsVUFBTUUsTUFBTSxHQUFHO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BQWY7O0FBSEssa0NBSWFILElBQUksQ0FBQ0kscUJBQUwsRUFKYjtBQUFBLFVBSUdDLEtBSkgseUJBSUdBLEtBSkg7O0FBS0wsVUFBTUMsU0FBUyxHQUFHQyx1REFBQSxDQUFpQlIsS0FBSyxDQUFDWixHQUF2QixFQUE0QlksS0FBSyxDQUFDWixHQUFOLENB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LE1BQVIsRUFBdkw7QUFDRDs7QUFDRHBDLGlCQUFPLENBQUMyQixTQUFSLElBQXFCekIsSUFBSSxDQUFDakIsT0FBRCxDQUF6QixFQUFvQ2UsT0FBTyxDQUFDaUMsV0FBUixDQUFvQixFQUFwQixDQUFwQyxFQUE2RGpDLE9BQU8sQ0FBQ2tDLFdBQVIsR0FBc0I1RCxLQUFLLENBQUNoQixtQkFBekYsRUFBOEcwQyxPQUFPLENBQUNtQyxTQUFSLEdBQW9CN0QsS0FBSyxDQUFDZCxzQkFBeEksRUFBZ0t3QyxPQUFPLENBQUNvQyxNQUFSLEVBQWhLO0FBQ0FwQyxpQkFBTyxDQUFDMkIsU0FBUixJQUFxQnpCLElBQUksQ0FBQ3pCLE1BQUQsQ0FBekIsRUFBbUN1QixPQUFPLENBQUNrQyxXQUFSLEdBQXNCNUQsS0FBSyxDQUFDZixrQkFBL0QsRUFBbUZ5QyxPQUFPLENBQUNtQyxTQUFSLEdBQW9CN0QsS0FBSyxDQUFDYixtQkFBN0csRUFBa0l1QyxPQUFPLENBQUNvQyxNQUFSLEVBQWxJO0FBQ0Q7QUFDRjs7QUFBQTtBQUVEM0MsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFDQVgsWUFBTSxDQUFDRSxJQUFQLENBQVksWUFBWixFQUEwQlMsRUFBRSxDQUFDLENBQUQsQ0FBNUI7QUFFQSxhQUFPLElBQVA7QUFDRDs7OztFQTdHd0JpQyw0RDs7QUFnSFpqRiwyRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0b3BvanNvbiBmcm9tICd0b3BvanNvbi1jbGllbnQnO1xuXG5pbXBvcnQgQXRsYXNNZXRhZGF0YUNsaWVudCBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9ncmFwaGljcy1hdGxhcy1jbGllbnQnO1xuaW1wb3J0IENoYXJ0Q29tcG9uZW50IGZyb20gJy4vYmFzZS9DaGFydENvbXBvbmVudCc7XG5pbXBvcnQgZDMgZnJvbSAnLi91dGlscy9kMyc7XG5jb25zdCBBdGxhcyA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIEdsb2JldHJvdHRlciBleHRlbmRzIENoYXJ0Q29tcG9uZW50IHtcbiAgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvY2F0aW9uOiBmYWxzZSxcbiAgICBib3JkZXJfc3Ryb2tlX2NvbG9yOiAnIzJmMzUzZicsXG4gICAgb3V0ZXJfc3Ryb2tlX2NvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KScsXG4gICAgc3Ryb2tlX3dpZHRoX2NvdW50cmllczogMC41LFxuICAgIHN0cm9rZV93aWR0aF9zcGhlcmU6IDEuMixcbiAgICBnZW86IGZhbHNlLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGJhc2VfY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgIHZlcnRpY2FsX3RpbHQ6IDE1LFxuICAgIG1hcmdpbjogMTAsXG4gICAgZHVyYXRpb246IDc1MCxcbiAgICBlbmFibGVfZG90OiB0cnVlLFxuICAgIGRvdF9yYWRpdXM6IDIuNSxcbiAgICBkaXNwdXRlZDogdHJ1ZSxcbiAgICByZWdpb246IGZhbHNlLFxuICAgIGFyZWFfdGhyZXNob2xkOiAxMCxcbiAgICBkaXNwdXRlZF9kYXNoYXJyYXk6IFs1LCA1XSxcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IHNwaGVyZSA9IHsgdHlwZTogJ1NwaGVyZScgfTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5nYWRtKTtcbiAgICBjb25zdCBib3JkZXJzID0gdG9wb2pzb24ubWVzaChwcm9wcy5nZW8sIHByb3BzLmdlby5vYmplY3RzLmdhZG0sIChhLCBiKSA9PiBhICE9PSBiKTtcbiAgICBjb25zdCBkaXNwdXRlZCA9IHRvcG9qc29uLm1lc2gocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5kaXNwdXRlZCk7XG4gICAgY29uc3QgbGFuZCA9IHRvcG9qc29uLmZlYXR1cmUocHJvcHMuZ2VvLCBwcm9wcy5nZW8ub2JqZWN0cy5sYW5kKTtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvT3J0aG9ncmFwaGljKCkuZml0RXh0ZW50KFtbMTAsIDEwXSwgW3dpZHRoIC0gMTAsIHdpZHRoIC0gMTBdXSwgc3BoZXJlKTtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLnNlbGVjdGlvbigpLmFwcGVuZFNlbGVjdCgnY2FudmFzJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHdpZHRoKTtcblxuICAgIGNvbnN0IHggPSBjYW52YXMuYXR0cignY2VudHJvaWQteCcpO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuYXR0cignY2VudHJvaWQteScpO1xuICAgIGNvbnN0IHAxID0gWy14LCBwcm9wcy52ZXJ0aWNhbF90aWx0IC0geV07XG5cbiAgICBpZiAoeCAmJiB5KSB7XG4gICAgICBwcm9qZWN0aW9uLnJvdGF0ZShwMSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHAyID0gW107IGxldCBsb2NhdGlvbjsgbGV0IGNvdW50cnk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMubG9jYXRpb24pICYmIHByb3BzLmxvY2F0aW9uLmxlbmd0aCA9PSAyKSB7XG4gICAgICBwMlswXSA9IHByb3BzLmxvY2F0aW9uWzBdO1xuICAgICAgcDJbMV0gPSBwcm9wcy5sb2NhdGlvblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbCA9IEF0bGFzLmdldENvdW50cnkocHJvcHMubG9jYXRpb24pO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgbG9jYXRpb24gPSBsLmlzb0FscGhhMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gJ05BJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24gPT09ICdOQScgJiYgcDIubGVuZ3RoID09IDApIHtcbiAgICAgIHAyID0gcDE7XG4gICAgfSBlbHNlIGlmIChwMi5sZW5ndGggIT0gMikge1xuICAgICAgY291bnRyeSA9IGNvdW50cmllcy5mZWF0dXJlcy5maWx0ZXIoZCA9PiBkLnByb3BlcnRpZXMuR0lEXzAgPT09IGxvY2F0aW9uKVswXTtcbiAgICAgIHAyID0gZDMuZ2VvQ2VudHJvaWQoY291bnRyeSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCk7XG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHAxWzBdICE9PSBwMlswXSAmJiBwMVsxXSAhPT0gcDJbMV0pIHtcbiAgICAgICAgY29uc3QgYXJlYSA9IHBhdGguYXJlYShjb3VudHJ5KVxuICAgICAgICBjb25zdCByID0gZDMuaW50ZXJwb2xhdGUocHJvamVjdGlvbi5yb3RhdGUoKSwgWy1wMlswXSwgcHJvcHMudmVydGljYWxfdGlsdCAtIHAyWzFdXSk7XG4gICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24ocHJvcHMuZHVyYXRpb24pXG4gICAgICAgICAgLnR3ZWVuKCdyb3RhdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgIHByb2plY3Rpb24ucm90YXRlKHIodCkpO1xuICAgICAgICAgICAgICBjb25zdCBjZW50cm9pZFBybyA9IHByb2plY3Rpb24ocDIpO1xuICAgICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGxhbmQpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHByb3BzLmVuYWJsZV9kb3QgJiYgYXJlYTxwcm9wcy5hcmVhX3RocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIGNvbnRleHQuYXJjKGNlbnRyb2lkUHJvWzBdLCBjZW50cm9pZFByb1sxXSwgcHJvcHMuZG90X3JhZGl1cywgMCwgMiAqIE1hdGguUEkpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmhpZ2hsaWdodF9jb2xvciwgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRyeSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoY291bnRyeSksIGNvbnRleHQuZmlsbFN0eWxlID0gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yLCBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGRpc3B1dGVkKSwgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoYm9yZGVycyksIGNvbnRleHQuc2V0TGluZURhc2goW10pLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKHNwaGVyZSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZSwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgd2lkdGgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGxhbmQpLCBjb250ZXh0LmZpbGxTdHlsZSA9IHByb3BzLmJhc2VfY29sb3IsIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICBpZiAocHJvcHMuZGlzcHV0ZWQpIHtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKGRpc3B1dGVkKSwgY29udGV4dC5zZXRMaW5lRGFzaChwcm9wcy5kaXNwdXRlZF9kYXNoYXJyYXkpLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCksIHBhdGgoYm9yZGVycyksIGNvbnRleHQuc2V0TGluZURhc2goW10pLCBjb250ZXh0LnN0cm9rZVN0eWxlID0gcHJvcHMuYm9yZGVyX3N0cm9rZV9jb2xvciwgY29udGV4dC5saW5lV2lkdGggPSBwcm9wcy5zdHJva2Vfd2lkdGhfY291bnRyaWVzLCBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpLCBwYXRoKHNwaGVyZSksIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBwcm9wcy5vdXRlcl9zdHJva2VfY29sb3IsIGNvbnRleHQubGluZVdpZHRoID0gcHJvcHMuc3Ryb2tlX3dpZHRoX3NwaGVyZSwgY29udGV4dC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXgnLCBwMlswXSk7XG4gICAgY2FudmFzLmF0dHIoJ2NlbnRyb2lkLXknLCBwMlsxXSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHbG9iZXRyb3R0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})