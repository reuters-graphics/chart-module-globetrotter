import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
const topojson = require('topojson');
const world = require('./topo.json');
const countries = topojson.feature(world, world.objects.gadm).features;
const borders = topojson.mesh(world, world.objects.gadm, (a, b) => a !== b);
const disputed = topojson.mesh(world, world.objects.disputed);
const land = topojson.feature(world, world.objects.land);

class Globetrotter extends ChartComponent {
  defaultProps = {
    stroke: '#aaa',
    strokeWidth: 1,
    fill: 'steelblue',
    location: 'USA',
    stroke_color: 'rgba(255, 255, 255, 0.75)',
    stroke_width_countries: 0.5,
    stroke_width_sphere: 1.2,
    highlight_color: '#fce587',
    base_color: 'rgba(255, 255, 255, 0.2)',
    vertical_tilt: 15,
    margin: 10,
    duration: 300,
    enable_dot: true,
    dot_radius: 2.5,
    disputed: true,
  }

  draw() {
    const props = this.props();
    const node = this.selection().node();
    const sphere = { type: 'Sphere' };
    const { width } = node.getBoundingClientRect();

    const projection = d3.geoOrthographic().fitExtent([[10, 10], [width - 10, width - 10]], sphere);

    var canvas = this.selection().appendSelect('canvas')
      .attr('width', width)
      .attr('height', width);

    const x = canvas.attr('centroid-x');
    const y = canvas.attr('centroid-y');

    if (x && y) {
      projection.rotate([-x, props.vertical_tilt - y])
    }
    var context = canvas.node().getContext('2d');

    var path = d3.geoPath(projection, context);

    render();
    function render() {
      const country = countries.filter(d => d.properties.GID_0 === props.location)[0];
      const p = d3.geoCentroid(country);
      const r = d3.interpolate(projection.rotate(), [-p[0], props.vertical_tilt-p[1]]);

      canvas.attr('centroid-x', p[0]);
      canvas.attr('centroid-y', p[1]);
      d3.transition()
        .duration(props.duration)
        .tween('rotate', function() {
          return function(t) {
            projection.rotate(r(t));
            const centroidPro = projection(p)
            context.clearRect(0, 0, width, width);
            context.beginPath(), path(land), context.fillStyle = props.base_color, context.fill();  
            context.beginPath(), path(country), context.fillStyle = props.highlight_color, context.fill();
            if (props.enable_dot){
              context.beginPath(), context.arc(centroidPro[0], centroidPro[1], props.dot_radius, 0, 2 * Math.PI), context.fillStyle = props.highlight_color, context.fill();  
            }
            if (props.disputed){
              context.beginPath(), path(disputed), context.setLineDash([5,5]),context.strokeStyle = props.stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
            }
            context.beginPath(), path(borders), context.setLineDash([]), context.strokeStyle = props.stroke_color, context.lineWidth = props.stroke_width_countries, context.stroke();
            context.beginPath(), path(sphere), context.strokeStyle = props.stroke_color, context.lineWidth = props.stroke_width_sphere, context.stroke();
          };
        });
    };

    return this;
  }
}

export default Globetrotter;
