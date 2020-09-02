import * as topojson from 'topojson-client';

import { getLocationCountries, isCoordinateLocation } from './utils/parseLocation';

import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';

class Globetrotter extends ChartComponent {
  defaultProps = {
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
        dasharray: [5, 5],
      },
    },
    globe: {
      strokeColor: 'rgba(255, 255, 255, 0.5)',
      strokeWidth: 0.1,
      landFill: 'rgba(255, 255, 255, 0.2)',
      highlightFill: '#fce587',
      verticalAxisTilt: 15,
    },
    marker: {
      replaceSmallPolygons: true,
      replacementThreshold: 100,
      strokeColor: '#fce587',
      fillColor: '#fce587',
      radius: 10,
      strokeWidth: 2,
      type: 'double-ring',
    },
    topology: {
      getCountryFeatures: (topology) => topology.objects.countries,
      getIsoAlpha3Property: (properties) => properties.isoAlpha3,
      getDisputedBorderFeatures: (topology) => topology.objects.disputedBoundaries,
      getLandFeatures: (topology) => topology.objects.land,
    },
  }

  _rotation = [0, 0];

  _drawSphere() {
    const { globe } = this.props();
    this._context.beginPath();
    this._path({ type: 'Sphere' });
    this._context.strokeStyle = globe.strokeColor;
    this._context.lineWidth = globe.strokeWidth;
    this._context.stroke();
  }

  _drawLand() {
    const { globe } = this.props();
    this._context.beginPath();
    this._path(this._land);
    this._context.fillStyle = globe.landFill;
    this._context.fill();
  }

  _drawBorders() {
    const { borders } = this.props();
    this._context.beginPath();
    this._path(this._borders);
    this._context.setLineDash([]);
    this._context.strokeStyle = borders.strokeColor;
    this._context.lineWidth = borders.strokeWidth;
    this._context.stroke();

    if (borders.disputedBorders.show) this._drawDisputedBorders();
  }

  _drawDisputedBorders() {
    const { borders } = this.props();
    const { disputedBorders } = borders;
    this._context.beginPath();
    this._path(this._disputedBorders);
    this._context.setLineDash(disputedBorders.dasharray);
    this._context.strokeStyle = disputedBorders.strokeColor;
    this._context.lineWidth = disputedBorders.strokeWidth;
    this._context.stroke();
    this._context.setLineDash([]);
  }

  _drawHighlightedArea(highlightArea) {
    const { globe } = this.props();
    this._context.beginPath();
    this._path(highlightArea);
    this._context.fillStyle = globe.highlightFill;
    this._context.fill();
  }

  _drawMarker(projectedCentroid) {
    const { marker } = this.props();
    if (this.location() === null) return;
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

  draw() {
    const props = this.props();
    const topology = this.topojson();
    if (!topology) return this;
    const location = this.location();
    const countriesFeatures = props.topology.getCountryFeatures(topology);
    const disputedBoundariesFeatures = props.topology.getDisputedBorderFeatures(topology);
    const landFeatures = props.topology.getLandFeatures(topology);
    const node = this.selection().node();
    const sphere = { type: 'Sphere' };
    const { width } = node.getBoundingClientRect();
    const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);

    this._borders = topojson.mesh(topology, countriesFeatures, (a, b) => a !== b);
    this._disputedBorders = topojson.mesh(topology, disputedBoundariesFeatures);
    this._land = topojson.feature(topology, landFeatures);

    const canvas = this.selection().appendSelect('canvas')
      .attr('width', width)
      .attr('height', width);

    projection.rotate(this._rotation);

    this._context = canvas.node().getContext('2d');
    this._path = d3.geoPath(projection, this._context);

    let destination = [];
    let highlightArea;
    // Lat/Lon
    if (isCoordinateLocation(location)) {
      destination[0] = location[0];
      destination[1] = location[1];
    } else {
      const countryList = getLocationCountries(location);
      if (countryList.length > 0) {
        const filteredFeatures = countriesFeatures.geometries.filter(d =>
          countryList
            .includes(props.topology.getIsoAlpha3Property(d.properties))
        );
        highlightArea = topojson.merge(topology, filteredFeatures);
        destination = d3.geoCentroid(highlightArea);
        if (
          destination.includes(NaN) &&
          'centroid' in filteredFeatures[0].properties &&
          !filteredFeatures[0].properties.centroid.includes(null)
        ) destination = filteredFeatures[0].properties.centroid;
      } else {
        destination = [0, 0];
      }
    }

    if (this._overrideCentroid) destination = this._overrideCentroid;

    const geoPath = d3.geoPath(
      d3.geoOrthographic()
        .fitExtent([[10, 10], [width - 10, width - 10]], sphere)
        .rotate([-destination[0], props.globe.verticalAxisTilt - destination[1]]),
      this._context
    );
    const highlightAreaSize = geoPath.area(highlightArea);
    const showMarker = (
      highlightAreaSize < props.marker.replacementThreshold &&
      props.marker.replaceSmallPolygons
    );

    const drawMap = (projectedCentroid) => {
      this._context.clearRect(0, 0, width, width);
      this._drawLand();

      if (!showMarker) this._drawHighlightedArea(highlightArea);

      this._drawBorders();

      if (showMarker) {
        const geoAngle = d3.geoDistance(destination, [-projection.rotate()[0], projection.rotate()[1]]);
        // Check if the marker is behind the globe
        if (geoAngle < 1.57079632679490) {
          this._drawMarker(projectedCentroid);
        }
      }

      this._drawSphere();
    };

    const rotateToPoint = () => {
      const interpolator = d3.interpolate(projection.rotate(), [-destination[0], props.globe.verticalAxisTilt - destination[1]]);
      canvas.transition()
        .duration(props.spinToSpeed)
        .tween('rotate', () =>
          (t) => {
            projection.rotate(interpolator(t));
            const projectedCentroid = projection(destination);
            drawMap(projectedCentroid);
            this._rotation = projection.rotate();
          }
        );
    };

    let lastElapsed = 0;
    const rotate = (elapsed, phiInterpolator) => {
      const scale = d3.scaleLinear()
        .domain([0, props.spinSpeed])
        .range([0, 360]);
      const step = scale(elapsed - lastElapsed);

      const phi = phiInterpolator(Math.min(elapsed / props.spinToSpeed, 1));
      projection.rotate([this._rotation[0] + step, phi]);
      const projectedCentroid = projection(destination);
      drawMap(projectedCentroid);
      this._rotation = projection.rotate();
      lastElapsed = elapsed;
    };

    const resetTimer = () => {
      this._timer.stop();
      this._timer = null;
    };

    if (!props.spin) {
      if (this._timer) resetTimer();
      rotateToPoint();
    } else {
      if (this._timer) resetTimer();
      const phiInterpolator = d3.interpolate(this._rotation[1], props.globe.verticalAxisTilt - destination[1]);
      this._timer = d3.timer((elapsed) => {
        if (!props.spin) {
          resetTimer();
          return;
        }
        rotate(elapsed, phiInterpolator);
      });
    }

    return this;
  }
}

export default Globetrotter;
