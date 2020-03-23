import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Aux from './Aux';
import calculate from '../logic/calculate';
import classes from './App.module.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      operation: null,
      next: null,
      isCalculated: false,
    };
  }

  handleClick = buttonName => {
    const output = calculate(this.state, buttonName);
    this.setState(output);
  }

  render() {
    return (
      <Aux>
        <div className={classes.title}>Magical Calculator</div>
        <div className={classes.App}>
          <Helmet bodyAttributes={{ style: 'background-color : #c9f0eb' }} />
          <Display
            // eslint-disable-next-line react/destructuring-assignment
            output={this.state}
          />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </Aux>
    );
  }
}

export default App;
