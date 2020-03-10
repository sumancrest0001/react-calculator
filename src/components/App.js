import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Aux from './Aux';
import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '30',
    };
  }

  render() {
    return (
      <Aux>
        <div className={classes.title}>Magical Calculator</div>
        <div className={classes.App}>
          <Helmet bodyAttributes={{ style: 'background-color : #c9f0eb' }} />
          <Display
            // eslint-disable-next-line react/destructuring-assignment
            output={this.state.total}
          />
          <ButtonPanel />
        </div>
      </Aux>
    );
  }
}

export default App;
