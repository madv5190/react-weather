import React,{Component} from "react";
//import SunnyIcon from "../css/images/sunnyIcon.png"
import OpenWeather from "../components/OpenWeatherApp";
//import CloudyIcon from "../css/images/cloudyIcon.png"


class WeatherForecast extends Component{
    constructor(){
        super();
        this.state={
            searchValue:"",
            sendValueToOpenWeather:""
        }
        this.changeText = this.changeText.bind(this);
        this.sendValue = this.sendValue.bind(this);
    }

    changeText(event) {
       this.setState({
           searchValue : event.target.value
       })
      }
    
      sendValue(){
          if(this.state.searchValue)
          this.setState({
            sendValueToOpenWeather : this.state.searchValue
        })
          
      }
    render(){
    return(
        <div>
            <h1>Enter city name</h1>
            <div className="container">
            <div className="col-sm-6">
                <input type="text" placeholder="Your city name" onChange={this.changeText.bind(this)} value={this.state.searchValue}/>   
                <button type="button" className="btn btn-primary" onClick={this.sendValue}>Search</button>
            </div> 
            </div> 
             {this.state.sendValueToOpenWeather ? <OpenWeather cityName = {this.state.sendValueToOpenWeather}/> : null}           
    </div>

    );
    }
};

export default WeatherForecast;