import React, { Component } from "react";
//import "../css/OpenWeather.css";
import OpenWeather from "../components/OpenWeatherApp";
//import CloudyIcon from "../css/images/cloudyIcon.png"


class WeatherForecast extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            sendValueToOpenWeather: ""
        }
        this.changeText = this.changeText.bind(this);
        this.sendValue = this.sendValue.bind(this);
    }

    changeText(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    sendValue() {
        if (this.state.searchValue)
            this.setState({
                sendValueToOpenWeather: this.state.searchValue
            })

    }
    render() {
        return (
            <div>
<form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" placeholder="Your city name" onChange={this.changeText.bind(this)} value={this.state.searchValue} className="form-control"/>
                    
                </div>
                <button type="button" className="btn btn-primary mb-2" onClick={this.sendValue}>Search</button>
                </form>
                {this.state.sendValueToOpenWeather ? <OpenWeather cityName={this.state.sendValueToOpenWeather} /> : null}
            </div>

        );
    }
};

export default WeatherForecast;