import React, { Component } from 'react';
import axios from 'axios';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = { isRedOn: true };
    this.state = { isOrangeOn: true };
    this.state = { isGreenOn: true };
    this.state = { isBlueOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');
    let stateSelector = button.getAttribute('data-color');

    this.setState(prevState => ({
      isRedOn: !prevState.isRedOn
    }));

    axios.get(`http://192.168.0.42:8080/leds/0${ledIndex}`).then(({ data })=> {
      	console.log(data);
      })
      .catch((err)=> {})
  }

  render() {
    return (
      <ul>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="0" data-color="Red">
            Red:
            {this.state.isRedOn ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="1" data-color="Orange">
            Orange
            {this.state.isOrangeOn ? 'ON' : 'OFF'}
            </button>
        </li>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="2" data-color="Green">
            Green
            {this.state.isGreenOn ? 'ON' : 'OFF'}
            </button>
        </li>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="3" data-color="Blue">
            Blue
            {this.state.isBlueOn ? 'ON' : 'OFF'}
            </button>
        </li>
      </ul>
    )
  }
}

export default Switch;
