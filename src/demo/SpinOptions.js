import React from 'react';
import Toggle from 'react-toggle';

const SpinOptions = (props) => {
  const { spin, spinSpeed } = props;
  return (
    <div className='spin-options'>
      <label>
        <span>Spin</span>
        <Toggle
          defaultChecked={spin}
          icons={false}
          onChange={props.setSpin}
        />
      </label>
      <br />
      {props.spin && (
        <label>
          <span>Speed</span>
          <Toggle
            defaultChecked={spinSpeed === 3000}
            icons={false}
            onChange={() => {
              if (spinSpeed === 5000) props.setSpinSpeed(3000);
              if (spinSpeed === 3000) props.setSpinSpeed(5000);
            }}
          />
        </label>
      )}
    </div>
  );
};

export default SpinOptions;
