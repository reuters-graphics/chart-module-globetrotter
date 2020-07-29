import * as topojson from 'topojson-client';
import AtlasMetadataClient from '@reuters-graphics/graphics-atlas-client';
import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import {indexOf} from 'lodash'
import world from './topo.js'
const Atlas = new AtlasMetadataClient();

class Globetrotter extends ChartComponent {
  defaultProps = {
    border_stroke_color: '#2f353f',
    outer_stroke_color: 'rgba(255, 255, 255, 0.75)',
    stroke_width_countries: 0.5,
    stroke_width_sphere: 1.2,
    highlight_color: '#fce587',
    base_color: 'rgba(255, 255, 255, 0.2)',
    vertical_tilt: 15,
    margin: 10,
    duration: 750,
    enable_dot: true,
    dot_radius: 5,
    disputed: true,
    location: { value: false, type: 'country' }, // Other types are point and region
    area_threshold: 10,
    disputed_dasharray: [5, 5],
  }

  draw() {
    const props = this.props();
    const node = this.selection().node();
    const sphere = { type: 'Sphere' };
    const { width } = node.getBoundingClientRect();
    const countries = topojson.feature(world, world.objects.gadm);
    const borders = topojson.mesh(world, world.objects.gadm, (a, b) => a !== b);
    const disputed = topojson.mesh(world, world.objects.disputed);
    const land = topojson.feature(world, world.objects.land);
    const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);

    var canvas = this.selection().appendSelect('canvas')
      .attr('width', width)
      .attr('height', width);

    const x = canvas.attr('centroid-x');
    const y = canvas.attr('centroid-y');
    const p1 = [-x, props.vertical_tilt - y];

    if (x && y) {
      projection.rotate(p1);
    }

    const context = canvas.node().getContext('2d');

    const path = d3.geoPath(projection, context);

    let p2 = []; let location; let country;
    if (Array.isArray(props.location.value) && props.location.value.length == 2 && props.location.type=='point') {
      p2[0] = props.location.value[0];
      p2[1] = props.location.value[1];
    } else if (props.location.type=='region'){
      const countryList = (Atlas.getRegion(props.location.value).countries).map(d=>d.isoAlpha3);
      merged = topojson.merge(world, world.objects.gadm.geometries.filter(function(d) { return indexOf(countryList,d.properties.GID_0)>-1 }))
      p2 = d3.geoCentroid(merged);
    } else if (props.location.type=='country'){
      const l = Atlas.getCountry(props.location.value);
      if (l) {
        location = l.isoAlpha3;
        country = countries.features.filter(d => d.properties.GID_0 === location)[0];
        p2 = d3.geoCentroid(country);  
      } else {
        location = 'NA';
        if (p2.length==0){
           p2 = p1;
        }
      }
    }

    let area, endPath, merged;

    render();
    function render() {
      if (p1[0] !== p2[0] && p1[1] !== p2[1] && (p2[0] && p2[1])) {
        endPath = d3.geoPath(d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere).rotate([-p2[0], props.vertical_tilt - p2[1]]), context);
        const r = d3.interpolate(projection.rotate(), [-p2[0], props.vertical_tilt - p2[1]]);
        area = endPath.area(country);
        canvas.transition()
          .duration(props.duration)
          .tween('rotate', function() {
            return function(t) {
              projection.rotate(r(t));
              const centroidPro = projection(p2);
              context.clearRect(0, 0, width, width);
              context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();
              if (merged) {
                context.beginPath(), path(merged), context.fillStyle = props.highlight_color, context.fill();
              } else if ((country && area > props.area_threshold) || (!props.enable_dot)) {
                  context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();
              }
              if (props.disputed) {
                context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
              }
              context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
               if (props.enable_dot && area < props.area_threshold){
                context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI),  context.strokeStyle = props.highlight_color, context.lineWidth = props.dot_radius-2, context.stroke();
              }
              context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();
            };
          });
      } else {
        context.clearRect(0, 0, width, width);
        context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();
        if (props.disputed) {
          context.beginPath(), path(disputed), context.setLineDash(props.disputed_dasharray), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
        }
        context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.border_stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
        context.beginPath(), path(sphere), context.strokeStyle = props.outer_stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();
      }
    };

    canvas.attr('centroid-x', p2[0]);
    canvas.attr('centroid-y', p2[1]);

    return this;
  }
}

export default Globetrotter;
