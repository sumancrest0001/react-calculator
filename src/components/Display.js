import React from 'react';
import PropTypes from 'prop-types';
import classes from './Display.module.css';

const Display = props => {
  const { output } = props;
  const result = output || '0';
  return (
    <div className={classes.Display}>
      {result}
    </div>
  );
};

Display.propTypes = {
  output: PropTypes.string.isRequired,
};


export default Display;
