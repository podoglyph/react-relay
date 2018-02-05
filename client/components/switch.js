import React, { Component } from 'react';
import axios from 'axios';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = { isRedOn: false };
    this.state = { isOrangeOn: false };
    this.state = { isGreenOn: false };
    this.state = { isBlueOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');
    let stateSelector = button.getAttribute('data-color');
    let key = `is${stateSelector}On`;

    axios.get(`http://192.168.0.42:8080/leds/${ledIndex}`)
      .then(({ data })=> {
      	console.log(data.on);
        this.setState({
          [key]: data.on
        });
      })
      .catch((err)=> {})
  }

  downLeds(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');

    axios.get(`http://192.168.0.42:8080/leds/${ledIndex}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err)=> {})
  }

  upLeds(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');

    axios.get(`http://192.168.0.42:8080/leds/${ledIndex}`)
      .then(({ data }) => {
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
            Orange:
            {this.state.isOrangeOn ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="2" data-color="Green">
            Green:
            {this.state.isGreenOn ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <button onClick={this.handleClick} className="led-button" data-led="3" data-color="Blue">
            Blue:
            {this.state.isBlueOn ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <button onClick={this.downLeds} className="led-button" data-led="6">
            Reset
          </button>
        </li>
        <li>
          <button onClick={this.upLeds} className="led-button" data-led="5">
            All On
          </button>
        </li>

      </ul>
    )
  }
}

export default Switch;
