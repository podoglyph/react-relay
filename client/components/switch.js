import React, { Component } from 'react';
import axios from 'axios';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedOn: false,
      isAmberOn: false,
      isGreenOn: false,
      isBlueOn: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.downLeds = this.downLeds.bind(this);
    this.upLeds = this.upLeds.bind(this);
  }

  handleClick(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');
    let stateSelector = button.getAttribute('data-color');
    let key = `is${stateSelector}On`;

    axios.get(`http://192.168.0.42:8888/leds/${ledIndex}`)
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

    axios.get(`http://192.168.0.42:8888/leds/${ledIndex}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          isRedOn: false,
          isAmberOn: false,
          isGreenOn: false,
          isBlueOn: false
        });
      })
      .catch((err)=> {})
  }

  upLeds(event) {
    let button = event.target;
    let ledIndex = button.getAttribute('data-led');

    axios.get(`http://192.168.0.42:8888/leds/${ledIndex}`)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          isRedOn: true,
          isAmberOn: true,
          isGreenOn: true,
          isBlueOn: true
        });
      })
      .catch((err)=> {})
  }

  render() {
    return (
      <div className="container">
        <div className="row row-toggle">
          <div className="col-lg-6 col-lg-offset-3">
            <div className="led-indicator col-md-3">
              <button onClick={this.handleClick} className="led-button" id="red" data-led="0" data-color="Red">
                {this.state.isRedOn ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="led-indicator col-md-3">
              <button onClick={this.handleClick} className="led-button" id="amber" data-led="1" data-color="Amber">
                {this.state.isAmberOn ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="led-indicator col-md-3">
              <button onClick={this.handleClick} className="led-button" id="green" data-led="2" data-color="Green">
                {this.state.isGreenOn ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="led-indicator col-md-3">
              <button onClick={this.handleClick} className="led-button" id="blue" data-led="3" data-color="Blue">
                {this.state.isBlueOn ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>

        <div className="row row-onoff">
          <div className="col-md-12">
            <div className="led-indicator col-md-6">
              <button onClick={this.downLeds} className="led-button led-reset" data-led="6">
                Reset
              </button>
            </div>
            <div className="led-indicator col-md-6">
              <button onClick={this.upLeds} className="led-button led-allon" data-led="5">
                All On
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Switch;
