'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var topojson = require('topojson-client');
var AtlasMetadataClient = _interopDefault(require('@reuters-graphics/graphics-atlas-client'));
var flatten = _interopDefault(require('lodash/flatten'));
var d3 = require('d3');
var merge = _interopDefault(require('lodash/merge'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var atlas = new AtlasMetadataClient();
var isCoordinateLocation = function isCoordinateLocation(location) {
  if (Array.isArray(location) && location.length === 2 && !isNaN(location[0]) && !isNaN(location[1])) return true;
  return false;
};

var getAtlasEntity = function getAtlasEntity(location) {
  if (atlas.getRegion(location)) return atlas.getRegion(location).countries;
  if (atlas.getSubregion(location)) return atlas.getSubregion(location).countries;
  if (atlas.getCountry(location)) return [atlas.getCountry(location)];
  return [];
};

var getCountryList = function getCountryList(location) {
  if (Array.isArray(location)) return flatten(location.map(function (l) {
    return getAtlasEntity(l);
  }));
  return getAtlasEntity(location);
};

var getLocationCountries = function getLocationCountries(location) {
  var countryList = getCountryList(location);
  return countryList.map(function (d) {
    return d.isoAlpha3;
  });
};

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorTopojsonType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorTopojsonType, _ChartError4);

  var _super5 = _createSuper(ErrorTopojsonType);

  function ErrorTopojsonType() {
    var _this5;

    _classCallCheck(this, ErrorTopojsonType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " topojson should be an Object"));

    return _this5;
  }

  return ErrorTopojsonType;
}(ChartError);
var ErrorLocationType = /*#__PURE__*/function (_ChartError5) {
  _inherits(ErrorLocationType, _ChartError5);

  var _super6 = _createSuper(ErrorLocationType);

  function ErrorLocationType() {
    var _this6;

    _classCallCheck(this, ErrorLocationType);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this6), "message", "".concat(_this6.constructorName, " location should be an Array of lat/lon coordinates or a valid region or country ID"));

    return _this6;
  }

  return ErrorLocationType;
}(ChartError);

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


d3.selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "location",

    /**
     * Getter/setter for chart location
     * @param  {Array} arr data
     */
    value: function location(arrOrString) {
      var overrideCentroid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!arrOrString) return this._location || 'singapore';
      this._overrideCentroid = overrideCentroid;

      if (!(arrOrString instanceof Array) && !(typeof arrOrString === 'string')) {
        throw new ErrorLocationType(this.constructor.name);
      }

      this._location = arrOrString;
      return this;
    }
    /**
     * Getter/setter for chart topojson
     * @param  {Object} obj topology
     */

  }, {
    key: "topojson",
    value: function topojson(obj) {
      if (!obj) return this._topojson || {};

      if (_typeof(obj) !== 'object') {
        throw new ErrorTopojsonType(this.constructor.name);
      }

      this._topojson = obj;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var Globetrotter = /*#__PURE__*/function (_ChartComponent) {
  _inherits(Globetrotter, _ChartComponent);

  var _super = _createSuper(Globetrotter);

  function Globetrotter() {
    var _this;

    _classCallCheck(this, Globetrotter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      margins: 10,
      spin: false,
      spinSpeed: 3000,
      spinToSpeed: 750,
      borders: {
        strokeColor: '#2f353f',
        strokeWidth: 0.5,
        disputedBorders: {
          show: true,
          strokeColor: '#2f353f',
          strokeWidth: 0.5,
          dasharray: [5, 5]
        }
      },
      globe: {
        strokeColor: 'rgba(255, 255, 255, 0.5)',
        strokeWidth: 0.1,
        landFill: 'rgba(255, 255, 255, 0.2)',
        highlightFill: '#fce587',
        verticalAxisTilt: 15
      },
      marker: {
        replaceSmallPolygons: true,
        replacementThreshold: 100,
        strokeColor: '#fce587',
        fillColor: '#fce587',
        radius: 10,
        strokeWidth: 2,
        type: 'double-ring'
      },
      topology: {
        getCountryFeatures: function getCountryFeatures(topology) {
          return topology.objects.countries;
        },
        getIsoAlpha3Property: function getIsoAlpha3Property(properties) {
          return properties.isoAlpha3;
        },
        getDisputedBorderFeatures: function getDisputedBorderFeatures(topology) {
          return topology.objects.disputedBoundaries;
        },
        getLandFeatures: function getLandFeatures(topology) {
          return topology.objects.land;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_rotation", [0, 0]);

    return _this;
  }

  _createClass(Globetrotter, [{
    key: "_drawSphere",
    value: function _drawSphere() {
      var _this$props = this.props(),
          globe = _this$props.globe;

      this._context.beginPath();

      this._path({
        type: 'Sphere'
      });

      this._context.strokeStyle = globe.strokeColor;
      this._context.lineWidth = globe.strokeWidth;

      this._context.stroke();
    }
  }, {
    key: "_drawLand",
    value: function _drawLand() {
      var _this$props2 = this.props(),
          globe = _this$props2.globe;

      this._context.beginPath();

      this._path(this._land);

      this._context.fillStyle = globe.landFill;

      this._context.fill();
    }
  }, {
    key: "_drawBorders",
    value: function _drawBorders() {
      var _this$props3 = this.props(),
          borders = _this$props3.borders;

      this._context.beginPath();

      this._path(this._borders);

      this._context.setLineDash([]);

      this._context.strokeStyle = borders.strokeColor;
      this._context.lineWidth = borders.strokeWidth;

      this._context.stroke();

      if (borders.disputedBorders.show) this._drawDisputedBorders();
    }
  }, {
    key: "_drawDisputedBorders",
    value: function _drawDisputedBorders() {
      var _this$props4 = this.props(),
          borders = _this$props4.borders;

      var disputedBorders = borders.disputedBorders;

      this._context.beginPath();

      this._path(this._disputedBorders);

      this._context.setLineDash(disputedBorders.dasharray);

      this._context.strokeStyle = disputedBorders.strokeColor;
      this._context.lineWidth = disputedBorders.strokeWidth;

      this._context.stroke();

      this._context.setLineDash([]);
    }
  }, {
    key: "_drawHighlightedArea",
    value: function _drawHighlightedArea(highlightArea) {
      var _this$props5 = this.props(),
          globe = _this$props5.globe;

      this._context.beginPath();

      this._path(highlightArea);

      this._context.fillStyle = globe.highlightFill;

      this._context.fill();
    }
  }, {
    key: "_drawMarker",
    value: function _drawMarker(projectedCentroid) {
      var _this$props6 = this.props(),
          marker = _this$props6.marker;

      if (marker.type === 'double-ring') {
        this._context.beginPath();

        this._context.arc(projectedCentroid[0], projectedCentroid[1], marker.radius, 0, 2 * Math.PI);

        this._context.strokeStyle = marker.strokeColor;
        this._context.lineWidth = marker.strokeWidth;

        this._context.stroke();

        this._context.beginPath();

        this._context.arc(projectedCentroid[0], projectedCentroid[1], marker.radius / 2, 0, 2 * Math.PI);

        this._context.strokeStyle = marker.strokeColor;
        this._context.lineWidth = marker.strokeWidth;

        this._context.stroke();
      }

      if (marker.type === 'ring') {
        this._context.beginPath();

        this._context.arc(projectedCentroid[0], projectedCentroid[1], marker.radius, 0, 2 * Math.PI);

        this._context.strokeStyle = marker.strokeColor;
        this._context.lineWidth = marker.strokeWidth;

        this._context.stroke();
      }

      if (marker.type === 'dot') {
        this._context.beginPath();

        this._context.arc(projectedCentroid[0], projectedCentroid[1], marker.radius, 0, 2 * Math.PI);

        this._context.strokeStyle = marker.strokeColor;
        this._context.lineWidth = marker.strokeWidth;
        this._context.fillStyle = marker.fillColor;

        this._context.stroke();

        this._context.fill();
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      var props = this.props();
      var topology = this.topojson();
      if (!topology) return this;
      var location = this.location();
      var countriesFeatures = props.topology.getCountryFeatures(topology);
      var disputedBoundariesFeatures = props.topology.getDisputedBorderFeatures(topology);
      var landFeatures = props.topology.getLandFeatures(topology);
      var node = this.selection().node();
      var sphere = {
        type: 'Sphere'
      };

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);
      this._borders = topojson.mesh(topology, countriesFeatures, function (a, b) {
        return a !== b;
      });
      this._disputedBorders = topojson.mesh(topology, disputedBoundariesFeatures);
      this._land = topojson.feature(topology, landFeatures);
      var canvas = this.selection().appendSelect('canvas').attr('width', width).attr('height', width);
      projection.rotate(this._rotation);
      this._context = canvas.node().getContext('2d');
      this._path = d3.geoPath(projection, this._context);
      var destination = [];
      var highlightArea; // Lat/Lon

      if (isCoordinateLocation(location)) {
        destination[0] = location[0];
        destination[1] = location[1];
      } else {
        var countryList = getLocationCountries(location);

        if (countryList.length > 0) {
          var filteredFeatures = countriesFeatures.geometries.filter(function (d) {
            return countryList.includes(props.topology.getIsoAlpha3Property(d.properties));
          });
          highlightArea = topojson.merge(topology, filteredFeatures);
          destination = d3.geoCentroid(highlightArea);
        } else {
          destination = [0, 0];
        }
      }

      if (this._overrideCentroid) destination = this._overrideCentroid;
      var geoPath = d3.geoPath(d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-destination[0], props.globe.verticalAxisTilt - destination[1]]), this._context);
      var highlightAreaSize = geoPath.area(highlightArea);
      var showMarker = highlightAreaSize < props.marker.replacementThreshold && props.marker.replaceSmallPolygons;

      var drawMap = function drawMap(projectedCentroid) {
        _this2._context.clearRect(0, 0, width, width);

        _this2._drawLand();

        if (!showMarker) _this2._drawHighlightedArea(highlightArea);

        _this2._drawBorders();

        if (showMarker) {
          var geoAngle = d3.geoDistance(destination, [-projection.rotate()[0], projection.rotate()[1]]); // Check if the marker is behind the globe

          if (geoAngle < 1.57079632679490) {
            _this2._drawMarker(projectedCentroid);
          }
        }

        _this2._drawSphere();
      };

      var rotateToPoint = function rotateToPoint() {
        var interpolator = d3.interpolate(projection.rotate(), [-destination[0], props.globe.verticalAxisTilt - destination[1]]);
        canvas.transition().duration(props.spinToSpeed).tween('rotate', function () {
          return function (t) {
            projection.rotate(interpolator(t));
            var projectedCentroid = projection(destination);
            drawMap(projectedCentroid);
            _this2._rotation = projection.rotate();
          };
        });
      };

      var lastElapsed = 0;

      var rotate = function rotate(elapsed, phiInterpolator) {
        var scale = d3.scaleLinear().domain([0, props.spinSpeed]).range([0, 360]);
        var step = scale(elapsed - lastElapsed);
        var phi = phiInterpolator(Math.min(elapsed / props.spinToSpeed, 1));
        projection.rotate([_this2._rotation[0] - step, phi]);
        var projectedCentroid = projection(destination);
        drawMap(projectedCentroid);
        _this2._rotation = projection.rotate();
        lastElapsed = elapsed;
      };

      var resetTimer = function resetTimer() {
        _this2._timer.stop();

        _this2._timer = null;
      };

      if (!props.spin) {
        if (this._timer) resetTimer();
        rotateToPoint();
      } else {
        if (this._timer) resetTimer();
        var phiInterpolator = d3.interpolate(this._rotation[1], props.globe.verticalAxisTilt - destination[1]);
        this._timer = d3.timer(function (elapsed) {
          if (!props.spin) {
            resetTimer();
            return;
          }

          rotate(elapsed, phiInterpolator);
        });
      }

      return this;
    }
  }]);

  return Globetrotter;
}(ChartComponent);

module.exports = Globetrotter;
