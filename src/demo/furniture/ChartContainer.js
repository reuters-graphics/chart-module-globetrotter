import { faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Container = (props) => {
  const { setWidth, width } = props;

  return (
    <>
      <section className={`graphic borderless ${width}`}>
        {props.children}
      </section>
      <div className='size-options'>
        <div>
          <FontAwesomeIcon icon={faDesktop} fixedWidth />
          <button
            className={width === 'fluid' ? 'active' : ''}
            onClick={() => setWidth('fluid')}
          />
          <button
            className={width === 'widest' ? 'active' : ''}
            onClick={() => setWidth('widest')}
          />
          <button
            className={width === 'wider' ? 'active' : ''}
            onClick={() => setWidth('wider')}
          />
          <button
            className={width === 'wide' ? 'active' : ''}
            onClick={() => setWidth('wide')}
          />
          <button
            className={width === '' ? 'active' : ''}
            onClick={() => setWidth('')}
          />
          <button
            className={width === 'mobile' ? 'active' : ''}
            onClick={() => setWidth('mobile')}
          />
          <FontAwesomeIcon icon={faMobileAlt} fixedWidth />
        </div>
      </div>
    </>
  );
};

export default Container;
