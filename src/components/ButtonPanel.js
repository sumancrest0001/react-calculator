import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import classes from './ButtonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = ButtonName => { clickHandler(ButtonName); };
  const operators = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '+'], ['1', '2', '3', '-'], ['0', '.', '=']];
  const symbols = ['+', '-', 'X', '÷', '='];
  const renderButton = operators.map(ele => (
    <div
      key={ele}
      className={classes.calcRow}
    >
      {ele.map(item => (
        <Button
          key={item}
          clickHandler={handleClick}
          color={symbols.includes(item) ? 'orange' : '#ebe8e8'}
          name={item}
          wide={item === '0'}
        />
      ))}
    </div>
  ));
  return (
    <div className={classes.ButtonPanel}>
      {renderButton}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
