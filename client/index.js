import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import Switch from './components/switch';

class App extends Component {

  render() {
    return (
      <div>
        <Title />
        <Switch />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
