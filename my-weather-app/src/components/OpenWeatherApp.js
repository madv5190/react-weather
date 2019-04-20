import React, { Component } from "react";
import SunnyIcon from "../css/images/sunnyIcon.png"
import CloudyIcon from "../css/images/cloudyIcon.png"

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
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.props.cityName + '&appid=77ad1345ec7cafe86bb848ed03bb9a57')
                .then(response => response.json())
                .then(body => this.setState({ weatherData: body.weather })).catch(error => {
                    this.setState({
                        error: "Error fetching Weather Data from the Server"
                    })
                });
        }
    };

    render() {
        return (
            <div>
                {this.state.weatherData ? this.state.weatherData.map(
                    (value, index) =>
                    <div>
                        <p key={index}>{<img src={'http://openweathermap.org/img/w/' + value.icon + '.png'} alt="Sunny" />}</p>
                        <label>{value.description}</label>
                        </div>
                ) : this.state.error ? alert(this.state.error) : null}

            </div>
        );
    }
}

