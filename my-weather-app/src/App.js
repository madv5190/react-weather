import React, { Component } from 'react';
import WeatherForecast from "../src/components/MyWeather"

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherForecast />
      </div>
    );
  }
}

export default App;
