import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import classes from './ButtonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = ButtonName => { clickHandler(ButtonName); };

  return (
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
  );
};


ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
