import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';

class ChartComponent extends React.Component {
  state = {
    width: '',
    location: [139.6503, 35.6762],
  };

  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    // Use our chart module.
    this.chart
      .selection(this.chartContainer.current)
      .props({ fill: base.blue.hex })
      .draw();

    // Use it again.
    setTimeout(() => {
      this.chart
        .props({ location: this.state.location })
        .draw();
    }, 2500);

    // setTimeout(() => {
    //   this.chart
    //     .props({ location: 'HKG' })
    //     .draw();
    // }, 5000);

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
    this.chart
      .selection(this.chartContainer.current)
      .props({ location: this.state.location })
      .draw();
  }

  render() {
    const { width } = this.state;
    console.log('state', this.state.location);
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart' ref={this.chartContainer} />
        <div>
          <button
            onClick={() => this.setState({ location: 'HKG' })}
          >Hong Kong
          </button>
          <button
            onClick={() => this.setState({ location: 'USA' })}
          >USA
          </button>
          <button
            onClick={() => this.setState({ location: 'DE' })}
          >Germany
          </button>
        </div>
      </ChartContainer>

    );
  }
}

export default ChartComponent;
