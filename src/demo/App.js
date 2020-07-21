import Chart from './Chart';
import Header from './furniture/Header';
import React from 'react';

const App = () => (
  <>
    <Header />
    <article className='container-fluid'>
      <Chart />
    </article>
  </>
);

export default App;
