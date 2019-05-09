import React, { Component } from "react";
import OpenWeather from "../components/OpenWeatherApp";

class WeatherForecast extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ""
    };

    this.sendValue = this.sendValue.bind(this);
  }

  sendValue() {
    if (this.input.value)
      this.setState({
        searchValue: this.input.value
      });
  }
  render() {
    return (
      <div className="user">
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              placeholder="Your city name"
              ref={userInput => (this.input = userInput)}
              className="form-control"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mb-2"
            onClick={this.sendValue}
          >
            Search
          </button>
        </form>
        {this.state.searchValue ? (
          <OpenWeather cityName={this.state.searchValue} />
        ) : null}
      </div>
    );
  }
}

export default WeatherForecast;
