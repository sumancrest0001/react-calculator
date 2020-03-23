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
  /* return (
    <div className={classes.ButtonPanel}>
      <div className={classes.calcRow}>
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="AC"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="+/-"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="%"
        />
        <Button
          clickHandler={handleClick}
          name="÷"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="7"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="8"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="9"
        />
        <Button
          clickHandler={handleClick}
          name="X"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="4"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="5"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="6"
        />
        <Button
          clickHandler={handleClick}
          name="+"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="1"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="2"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="3"
        />
        <Button
          clickHandler={handleClick}
          name="-"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          wide
          name="0"
        />
        <Button
          clickHandler={handleClick}
          color="#ebe8e8"
          name="."
        />
        <Button
          clickHandler={handleClick}
          name="="
        />
      </div>
    </div>
  ); */
};


ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
