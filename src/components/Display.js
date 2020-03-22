import React from 'react';
import PropTypes from 'prop-types';
import classes from './Display.module.css';

const Display = props => {
  // eslint-disable-next-line react/destructuring-assignment
  const { total, next } = props.output;
  return (
    <div className={classes.Display}>
      {next || total}
    </div>
  );
};

Display.propTypes = {
  output: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default Display;
