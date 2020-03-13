import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const button = props => {
  const {
    name, width, color, clicked,
  } = props;

  const styles = {
    width: size,
    backgroundColor: color,
  };
  return (
    <button
      type="button"
      onClick={() => { clicked(name); }}
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
  clicked: PropTypes.func.isRequired,
};

button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default button;
