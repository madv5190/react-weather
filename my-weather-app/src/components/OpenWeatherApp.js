import React,{Component} from "react";
import SunnyIcon from "../css/images/sunnyIcon.png"
import CloudyIcon from "../css/images/cloudyIcon.png"

export default class OpenWeather extends Component{
    constructor(props){
        super(props);
        this.state ={
            weatherData: [], 
            error:""
        };
    }
    componentDidMount(){
        if(this.props.cityName)
        {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.props.cityName +',uk&appid=77ad1345ec7cafe86bb848ed03bb9a57')
        .then(response => response.json())
        .then(body => this.setState({weatherData:body.weather})).catch(error => {
this.setState({
    error : "Error fetching Weather Data from the Server"
})
        });
        }
    };

//     getWeatherIcon(icon)
//     {
//     //    let iconData= $.getJSON("http://openweathermap.org/img/w/"+icon+".png")
//     //    if(iconData!=null)
// {

// }
//     }
    render(){
        return(
          <div>
          {this.state.weatherData ? this.state.weatherData.map(
            (value,index)=>
               <p key={index}>{value.main==="Clear" ? <img src={CloudyIcon} alt="Sunny"/> : <img src={SunnyIcon} alt="Cloudy"/>}</p>                 
          ):this.state.error?alert(this.state.error):null}
          
         </div>
         );
        }         
}

