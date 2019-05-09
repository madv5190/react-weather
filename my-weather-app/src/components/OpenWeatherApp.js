import React, { Component } from "react";

export default class OpenWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      error: ""
    };
  }
  componentDidMount() {
    if (this.props.cityName) {
      let url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.props.cityName +
        "&appid=xxxxxx";

      fetch(url)
        .then(response => {
          if (!response.ok)
            throw new Error("Error fetching Weather Data from the Server");
          else return response.json();
        })
        .then(body => this.setState({ weatherData: body.weather }))
        .catch(error => {
          this.setState({
            error: error
          });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.weatherData
          ? this.state.weatherData.map((value, index) => (
              <div key={index}>
                <p>The Current weather is:</p>
                <p>
                  {
                    <img
                      src={
                        "http://openweathermap.org/img/w/" + value.icon + ".png"
                      }
                      alt="Sunny"
                    />
                  }
                </p>
                <label>{value.description}</label>
              </div>
            ))
          : this.state.error
          ? alert(this.state.error)
          : null}
      </div>
    );
  }
}
