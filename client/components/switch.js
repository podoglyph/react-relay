import React, { Component } from 'react';
import axios from 'axios';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    axios.get('http://192.168.0.42:8080/leds/3').then(({ data })=> {
      	console.log(data);
      })
      .catch((err)=> {})
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Switch;
