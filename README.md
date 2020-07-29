![](./badge.svg)

# Globetrotter

### Install

```
$ yarn add @reuters-graphics/chart-module-globetrotter
```

### Use

```javascript
import Globetrotter from '@reuters-graphics/chart-module-globetrotter';

const myChart = new Globetrotter();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .props({
    // Pass name, slug or code of the country/region you want to highlight,
    // or pass coordinates if you want to highlight a point
    // Pass the type of location
    location: { value: false, type: 'country' }, // Other types are point and region
    
    // Colour of the country borders
    border_stroke_color: '#2f353f',

    // Colour of the sphere
    outer_stroke_color: 'rgba(255, 255, 255, 0.75)',

    // Stroke width for the country borders
    stroke_width_countries: 0.5,

    // Stroke width for the sphere
    stroke_width_sphere: 1.2,

    // Colour you want to highlight in the globe
    highlight_color: '#fce587',

    // Colour for landmass
    base_color: 'rgba(255, 255, 255, 0.2)',

    // If you want to have a vertical tilt. Set 15 by default
    vertical_tilt: 15,

    // Margin in the box
    margin: 10,

    // duration of the transition
    duration: 750,

    // For smaller landmass if you want to have a dot to highlight
    enable_dot: true,

    // Dot radius for lat,lng highlights
    dot_radius: 5,

    // Area threshold below which you want to show dot marker and not area
    area_threshold: 10,

    // If you want to show disputed borders with a dotted line
    // True by default
    disputed: true, 

    // Dasharray for the disputed border lines
    disputed_dasharray: [5,5],

  })
  .draw();

// You can call any method again to update the chart.
myChart
  .props({
    location: 'india'
  })
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$Globetrotter-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$Globetrotter-container: '#chart';

@import '~@reuters-graphics/chart-module-globetrotter/scss/main';
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
