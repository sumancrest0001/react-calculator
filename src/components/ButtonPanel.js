import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import classes from './ButtonPanel.module.css';

const ButtonPanel = ({ click }) => {
  return (
    <div className={classes.ButtonPanel}>
      <div className={classes.calcRow}>
        <Button
          clicked={click}
          color="#ebe8e8"
          name="AC"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="+/-"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="%"
        />
        <Button
          clicked={click}
          name="÷"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clicked={click}
          color="#ebe8e8"
          name="7"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="8"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="9"
        />
        <Button
          clicked={click}
          name="X"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clicked={click}
          color="#ebe8e8"
          name="4"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="5"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="6"
        />
        <Button
          clicked={click}
          name="+"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clicked={click}
          color="#ebe8e8"
          name="1"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="2"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="3"
        />
        <Button
          clicked={click}
          name="-"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          clicked={click}
          color="#ebe8e8"
          wide
          name="0"
        />
        <Button
          clicked={click}
          color="#ebe8e8"
          name="."
        />
        <Button
          clicked={click}
          name="="
        />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  click: PropTypes.func.isRequired,
};

export default ButtonPanel;
