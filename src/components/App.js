import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '30',
    };
  }

  render() {
    return (
      <div className="classes.App">
        <Display
          // eslint-disable-next-line react/destructuring-assignment
          output={this.state.total}
        />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
