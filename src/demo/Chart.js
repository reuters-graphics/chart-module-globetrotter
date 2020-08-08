import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import LocationOptions from './LocationOptions';
import React from 'react';
import SpinOptions from './SpinOptions';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';

class ChartComponent extends React.Component {
  state = {
    width: 'mobile',
    location: ['singapore'],
    spin: false,
    spinSpeed: 5000,
  };

  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    fetch('https://cdn.jsdelivr.net/npm/@reuters-graphics/graphics-atlas-client@0.3.5/topojson/custom/world.json')
      .then(r => r.json())
      .then(topojson => {
        // Use our chart module.
        this.chart
          .selection(this.chartContainer.current)
          .topojson(topojson)
          .props({ fill: base.blue.hex })
          .draw();
      });

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    const { spin, spinSpeed } = this.state;
    this.chart
      .props({ spin, spinSpeed })
      .location(...this.state.location)
      .draw();
  }

  render() {
    const { width, spin, spinSpeed } = this.state;
    return (
      <div>
        <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
          {/* This is our chart container 👇 */}
          <div id='chart' ref={this.chartContainer} />
        </ChartContainer>
        <div className='chart-options'>
          <LocationOptions setState={(state) => this.setState(state)} />
          <SpinOptions
            spin={spin}
            setSpin={() => this.setState(prevState => ({ spin: !prevState.spin }))}
            spinSpeed={spinSpeed}
            setSpinSpeed={(spinSpeed) => this.setState({ spinSpeed })}
          />
        </div>
      </div>

    );
  }
}

export default ChartComponent;
