import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

const Button = props => {
  const { name, width = '25%', color = 'orange' } = props;

  const styles = {
    width: width,
    backgroundColor: color,
  }
  return (
    <button type="button" className={classes.Button} style={styles}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
