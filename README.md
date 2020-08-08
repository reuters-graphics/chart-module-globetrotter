![](./badge.svg)

# Globetrotter

A spinning locator globe module.

[See the demo.](https://reuters-graphics.github.io/chart-module-globetrotter/)

### Install

```
$ yarn add @reuters-graphics/chart-module-globetrotter
```

### Use

```javascript
import Globetrotter from '@reuters-graphics/chart-module-globetrotter';

const myGlobe = new Globetrotter();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myGlobe
  // Pass a selector string to the chart's selection method.
  .selection('#chart')
  // Pass your topojson
  .topojson(worldTopojson)
  // Set up display properties
  .props({
    margins: 10,

    // Continuously rotate the globe
    spin: false,
    // How many milliseconds it should take the globe to do one full rotation
    spinSpeed: 3000,
    // How quickly to rotate the globe between points (when not continuously spinning)
    spinToSpeed: 750,

    borders: {
      strokeColor: '#2f353f',
      strokeWidth: 0.5,
      disputedBorders: {
        // Add disputed boundaries to map
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
      // Replace the country shape with a marker when size of shape is too small
      replaceSmallPolygons: true,
      // The threshold in square pixels
      replacementThreshold: 100,
      strokeColor: '#fce587',
      fillColor: '#fce587',
      radius: 10,
      strokeWidth: 2,
      // One of 'double-ring', 'ring' or 'dot'
      type: 'double-ring',
    },
    topology: {
      // Getters to get topojson features objects
      getCountryFeatures: (topology) => topology.objects.countries,
      getDisputedBorderFeatures: (topology) => topology.objects.disputedBoundaries,
      getLandFeatures: (topology) => topology.objects.land,
      // Getter for isoAlpha3 code from GeoJSON object properties
      getIsoAlpha3Property: (properties) => properties.isoAlpha3,
    },
  })
  // Pass a location
  .location('Singapore')
  .draw();

// You can call any method again to update the chart.
myGlobe
  .location('india')
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myGlobe.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$Globetrotter-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$Globetrotter-container: '#chart';

@import '~@reuters-graphics/chart-module-globetrotter/scss/main';
```

### Location options

You can pass any string which can be used with [graphics-atlas-client's] `getRegion`, `getSubregion` or `getCountry` methods to the charts location method.

```javascript
myGlobe.location('europe');
myGlobe.location('Southeastern Asia');
myGlobe.location('DE');
myGlobe.location('IRL');
myGlobe.location('new-zealand');
```

You can also pass an array of location strings.

```javascript
myGlobe.location(['brazil', 'russia', 'China', 'IN']);
```

You may pass a lat/lon coordinate.

```javascript
myGlobe.location([15.555, 50.222])
```

You can pass a second parameter as a lat/lon coordinate to override the globe's automatic zoom.

```javascript
myGlobe.location('Europe', [13.404954, 52.520008]);
```


## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
