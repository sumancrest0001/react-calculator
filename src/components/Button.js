import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const button = (
  {
    name, wide, color, clickHandler,
  },
) => {
  const size = wide ? '50%' : '25%';
  const styles = {
    width: size,
    backgroundColor: color,
  };
  return (
    <button
      type="button"
      onClick={() => clickHandler(name)}
      className={classes.Button}
      style={styles}
    >
      {name}
    </button>
  );
};

button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default button;
