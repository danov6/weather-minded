import React from 'react';
import './App.css';
import axios from 'axios';
import Day from './components/Day';
import Hours from './components/Hours';

import {connect} from 'react-redux';
import WeatherModeToggler from './components/WeatherModeToggler';

const mapStateToProps = function (state) {
  return state;
};

class App extends React.Component{

  state = {
    city: '',
    weather: [],
    hourly: [],
    isLoading: false
  };

  _handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  _handleFormSubmit = (e) => {

    this.setState({
      isLoading: true
    });

    e.preventDefault();
    axios.post('http://localhost:3001/day',{
      city: this.state.city
    })
    .then((res) => {
      console.log(res.data);
      this.setState({
        weather: res.data.weather,
        isLoading: false
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false
      });
    });
    axios.post('http://localhost:3001/hour',{
      city: this.state.city
    })
    .then((res) => {
      console.log(res.data);
      this.setState({
        hourly: res.data.weather,
        isLoading: false
      });
    })
    .catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false
      });
    });
  }

  renderForecast = (weather, hourly, mode) => {
    if(weather.length === 0){
      return <div></div>
    }else if(mode === 'Hourly'){
      return <Hours hourly={hourly} /> //<Hours hours={hourly} />
    }else{
      return <Day weather={weather} />
    }
  }

  render(){

    let contents = this.state.isLoading
            ? <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
            : this.renderForecast(this.state.weather,this.state.hourly,this.props.weatherReducer);

    return(
    <div style={{width: '100%', marginTop: '1%'}}>
      <WeatherModeToggler weather={this.state.weather} />
      <h2>
        <center>What city you want the weather for chief?</center>
      </h2>
      <div className="container">
      {contents}
        <fieldset>
          <form onSubmit={this._handleFormSubmit}>
            <input name="city" type="text" className="ghost-input" placeholder="Enter a City" required onChange={this._handleChange} value={this.state.city} />
            <input type="submit" className="ghost-button" value="Get Weather"/>
          </form>
        </fieldset>
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
