import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const button = props => {
  const { name, wide, color } = props;
  const size = wide ? '50%' : '25%';
  const styles = {
    width: size,
    backgroundColor: color,
  };
  return (
    <button type="button" className={classes.Button} style={styles}>{name}</button>
  );
};

button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default button;
