import React from 'react';
import Button from './Button';
import classes from './ButtonPanel.module.css';

function ButtonPanel() {
  return (
    <div className={classes.ButtonPanel}>
      <div className={classes.calcRow}>
        <Button
          color="#ebe8e8"
          name="AC"
        />
        <Button
          color="#ebe8e8"
          name="+/-"
        />
        <Button
          color="#ebe8e8"
          name="%"
        />
        <Button
          name="÷"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          color="#ebe8e8"
          name="7"
        />
        <Button
          color="#ebe8e8"
          name="8"
        />
        <Button
          color="#ebe8e8"
          name="9"
        />
        <Button
          name="X"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          color="#ebe8e8"
          name="4"
        />
        <Button
          color="#ebe8e8"
          name="5"
        />
        <Button
          color="#ebe8e8"
          name="6"
        />
        <Button
          name="+"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          color="#ebe8e8"
          name="1"
        />
        <Button
          color="#ebe8e8"
          name="2"
        />
        <Button
          color="#ebe8e8"
          name="3"
        />
        <Button
          name="-"
        />
      </div>
      <div className={classes.calcRow}>
        <Button
          color="#ebe8e8"
          width="50%"
          name="0"
        />
        <Button
          color="#ebe8e8"
          name="."
        />
        <Button
          name="="
        />
      </div>
    </div>
  );
}


export default ButtonPanel;
