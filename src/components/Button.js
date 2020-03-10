import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const button = props => {
  const {
    name, width, color, clicked,
  } = props;

  const styles = {
    width,
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
  width: PropTypes.string,
  color: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

button.defaultProps = {
  width: '25%',
  color: 'orange',
};

export default button;
