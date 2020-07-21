![](badge.svg)

# Developing chart modules

A chart module is simply a chart that can be easily used in multiple contexts.

In our case, chart modules should follow four rules:

1. Chart modules should be written as a JavaScript class.

2. Chart modules should be able to be configured (and re-configured!) with the data and properties that determine how the chart is drawn.

3. Chart modules should have a single `draw` function that can be called multiple times and will always produce the same chart elements as long as the same data and properties are used. I.e., chart modules must be **idempotent**.

4. Chart modules should respond to the dimensions of their container (at least the width!).

### Rule 1: Chart module classes

Chart modules are written as JavaScript classes. That let's us create an instance of that class and customize it with different data or properties for every chart we want to make (great for small multiples!).

First, let's look at how we want to _use_ our chart modules:

```javascript
// Create a new instance of our chart
const newChart = new MyChart();

// ... pass that chart some configuration:
newChart
  .selection('#chart') // ... the element the chart should be drawn into
  .data([ /* ... */ ]) // ... the data for the chart
  .props({ /* ... */ }) // ... and any other visual properties we want to customize

// And finally, draw that chart with the data and config we've given it.
newChart.draw();
```

You can write your chart module class any way you want, but as a shortcut you can extend a base class that's included in the template:

```javascript
import ChartComponent from './base/ChartComponent';

class MyChart extends ChartComponent {
  // your chart stuff ...
}

export default MyChart;
```

### Rule #2: Config with getters/setters

The base class adds some basic getter/setter methods to help you set and access configuration options and provide defaults.

```javascript
class MyChart extends ChartComponent {
  defaultData = someData;

  defaultProps = {
    lineStroke: 'blue',
    // etc...
  }

  draw() {
    // Your chart code here...
  }
};
```

Now when someone uses your chart, it will be configured with the `defaultData` and `defaultProps` you setup, but if they want to _change_ those options, they can use the built-in **_setters_**.

```javascript
newChart
  .data(myNewData)
  .props({ lineStroke: 'red' });
```

Inside your chart module's `draw` method, you'll use the built-in **_getters_** to access those configured data and props.

```javascript
class MyChart extends ChartComponent {

  draw() {
    const data = this.data();
    const { lineStroke } = this.props();
    // Draw your chart with the configured data and props...
  }
};
```

You can add additional getter/setters in your chart class if you need them. For example, here's how you might write one to allow your chart to be passed some topojson.

```javascript
class MyChart extends ChartComponent {

  // ...

  // Some default topojson
  defaultGeoData = [ /* ... */ ];

  // Our getter/setter
  geoData(arr) {
    if (!arr) return this._geoData || this.defaultGeoData;

    this._geoData = arr;
    return this;
  }

  draw() {
    // Use the getter to access the data
    const topojson = this.geoData();

    //...
  }
};
```

Now, your users can customize the geoData passed to your chart.

```javascript
newChart.geoData([ /* ... */]);
```


### Rule #3: Idempotent charts

"Idempotence" is a fancy word that means that the same operation produces the same result no matter how many times it's called.

In terms of your chart module, it's a very important concept to make your chart reliable in whatever context it's used in.

For example, given the same data and props, your chart should intelligently draw or redraw only those elements that are new or changed.

```javascript
// First time your chart is drawn, it should produce all the elements
newChart
  .props(myProps)
  .data(myData)
  .draw();

// A second time, called with the *same* data and props,
// the chart shouldn't create, redraw or change any new
// elements, because they're already there!
newChart
  .props(myProps)
  .data(myData)
  .draw();

// NEW data is passed to the chart, so the chart should
// redraw the elements that have changed.
newChart
  .data(newData)
  .draw();
```

If you've used D3 before, you've already created idempotent chart elements by using D3's [general update pattern](https://observablehq.com/@d3/general-update-pattern).

Consider this code:

```javascript
function draw(myData) {
  const cirlces = svg.selectAll('circle')
    .data(myData);

  circles.enter().append('circle');

  circles.attr('fill', 'blue');

  circles.exit();
}
```

If the `draw` function is called twice with the same data, D3 knows not to add new circles for ones already on the page. BUT if the data changes, D3 will add or remove circles to reflect your data.

That means any data-bound elements in your chart are already idempotent, but that leaves out some non-data-bound elements you might be used to writing in your code.

Consider this:

```javascript
function draw(myData) {
  d3.select('div#chart').append('svg');

  // ...
}
```

Now if we call the draw function twice with the same data, the result _won't_ be the same. On the second call, D3 will add a new `svg` element to our div even though there's already one there. We've just broken the rule and our chart function is no longer idempotent.

To help you make non-data-bound elements idempotent, we've added a special helper method to D3 called `appendSelect`.

You can use it like this:

```javascript
import d3 from './utils/d3';

function draw(myData) {
  d3.select('#chart').appendSelect('svg');

  // ...
}
```

Here's what that method does: `appendSelect` will first check if there's already an element within the parent selection (`d3.select(#chart)`) and _only_ append a new one if it doesn't find one there.

If there _is_ one already, `appendSelect` will select it so you can continue chain chaining properties like you normally would in d3.

```javascript
function draw(myData) {
  d3.select('#chart')
    .appendSelect('svg')
    .attr('width', 300) // applied to the svg!
    .attr('height', 300);

  // ...
}
```

You can also use classes to make your selector more specific in case there are multiple elements within the parent selection:

```javascript
d3.select('#chart')
  .appendSelect('g.axis') // will ignore g.circles, etc.
  .transform('translate(300, 0)');
```

**UPSHOT**: Use `appendSelect` with non-data-bound elements in place of d3's normal `append` method to make your chart's draw method idempotent.

**Postscript:** There are many chart _interactions_ you can write in this idempotent style that are beyond the scope of this documentation. Regardless of how you write those in, though, as long as your chart's draw function can be called multiple times and produce the same result, you're good!

### Rule #4: Respond to container dimensions

In general, your chart should respect the boundaries of the container it's used in. At minimum, this means you should check the **width** of your container to determine the size of your chart.

```javascript
class MyChart extends ChartComponent {
  // ...

  draw() {
    // Use the selection getter and then get underlying node
    const node = this.selection().node();

    // Get the dimensions of the node with JS's getBouldingClientRect
    const { width } = node.getBoundingClientRect();

    // Use width in your chart...
  }
};
```

## Finale: using with React

If you've followed these four rules, you'll have created a chart module that can be used (and re-used!) in almost any context and within any framework.

The demo page included with this bluprint is written in React, so let's take a look at how to use you module in that context.

Check out the react component in `src/demo/Chart.js`, which contains a React component to contain your chart, and let's look at the main methods on that component class. (You can read more about these "lifecycle" methods [here](https://reactjs.org/docs/react-component.html#the-component-lifecycle).)

```javascript
class ChartComponent extends React.Component {
  // ...

  componentDidMount() {
    // ...
  }

  componentDidUpdate() {
    // ...
  }

  render() {
    // ...
  }
}
```

Let's break these methods down a little more simply than they're written for now, starting with `render`.

##### `render`

The `render` method draws the elements _around_ your chart. This should at minimum include the div or whatever that will contain your chart.

```javascript
class ChartComponent extends React.Component {
  // ...

  render() {
    return (
      <div id='chart' />
    );
  }
}
```

That HTML-like syntax the render method returns is called [JSX](https://reactjs.org/docs/introducing-jsx.html). We'll skip the details of that syntax for now, but just know you can read it more or less like you would HTML.

##### `componentDidMount`

The `componentDidMount` method is called once the render method has finished and the HTML it returns is on the page. This method is important because it represents the first moment our chart module can access it's container. So we generally use this method to first use our chart module.

```javascript
class ChartComponent extends React.Component {
  componentDidMount() {
    // div#chart is on the page so we can now draw our
    // chart module to draw the chart inside it!
    chart
      .selection('div#chart')
      .data([/* ... */])
      .props({/* ... */})
      .draw();
  }

  render() {
    return (
      <div id='chart' />
    );
  }
}
```

##### `componentDidUpdate`

The `componentDidMount` method is only called once, so we need the `componentDidUpdate` method to redraw our chart when any data is changed.

```javascript
class ChartComponent extends React.Component {
  componentDidMount() {
    // ...
  }

  componentDidUpdate() {
    // Update our chart if some data or props change
    chart
      .data([/* ... */])
      .props({/* ... */})
      .draw();
  }

  render() {
    return (
      <div id='chart' />
    );
  }
}
```

OK, let's add back in some of the extras our simplified example left out.

##### Using the same chart instance across methods

Usually, we'll attach our chart module _to_ our component class so we can re-use it across methods with `this`:

```javascript
class ChartComponent extends React.Component {
  // Attach the chart to the component...
  chart = new MyChart();

  componentDidMount() {
    // And use it with this.chart
    this.chart
      // ...
      .draw();
  }

  componentDidUpdate() {
    this.chart
      // ...
      .draw()
  }

  render() {
    // ...
  }
}
```

##### Handling viewport changes

With the way we've written our idempotent chart module, it's easy to handle viewport changes. We just have to redraw the chart whenever the size of the chart's container may have changed!

To make sure we don't fire too many resize events, we'll debounce this function with `lodash`.



```javascript
import debounce from 'lodash/debounce';

class ChartComponent extends React.Component {
  // ...

  // A resize method on our component redraws our chart
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // ...
    // Attach the resize func to a listener that watches for viewport changes.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener when the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }
}
```

The last method `componentWillUnmount` is new. This gets called right before a component is removed from the page (say, because of a user interaction), so we remove our resize listener here to make sure we're not leaving behind anything no longer are needed.

### Extra credit: Making your chart interactive with React component state

With our chart module and the powerful features of React supports, we can make our chart interactive.

Let's consider a chart module that draws a chart with either a linear or a logarithmic axis, depending on what a user wants to see.

We can use some very basic React component [state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) to tell our chart module which axis the user has selected to see.

First step, we need to make sure the option for a linear or log axis is one of the configuration properties passed to our chart module:

```javascript
// Draws a linear axis...
chart
  .props({ scale: 'linear' })
  .draw();

// Draws a log axis...
chart
  .props({ scale: 'log' })
  .draw();
```

(We'll assume your chart module's `draw` method uses this prop to draw the correct axis.)

Now, we can use state in React to pass which option a user wants to our chart.

```javascript
class ChartComponent extends React.Component {
  // Add a "state" property to our component that includes our default scale
  state = { scale: 'linear' };

  componentDidMount() {
    // Now use that state to pass the option to our chart
    this.chart
      .props({
        scale: this.state.scale,
      })
      .draw();
  }

  componentDidUpdate() {
    // Whenever the component's state changes, i.e., when
    // a user chooses a different scale, we'll redraw
    // our chart!
    this.chart
      .props({ scale: this.state.scale })
      .draw();
  }

  render() {
    // Now we'll add some buttons that can update that
    // state with the built-in 'setState' method whenever
    // a user clicks. That will trigger an update and the
    // 'componentDidMount' method will redraw our chart!
    return (
      <div>
        <div className='options'>
          <button
            onClick={() => this.setState({ scale: 'linear' })}
          >Linear</button>
          <button
            onClick={() => this.setState({ scale: 'log' })}
          >Logarithmic</button>
        </div>
        <div id='chart' />
      </div>
    )
  }
}
```

As long as you've written your module using the 4 Rules, there are a million ways to use the powerful methods in React to interact with your chart.
