import React from 'react';
import PropTypes from 'prop-types';
import classes from './Display.module.css';

const Display = props => {
  const { total, next } = props.output;
  return (
    <div className={classes.Display}>
      {next || total}
    </div>
  );
};

Display.propTypes = {
  output: PropTypes.object.isRequired,
};


export default Display;
