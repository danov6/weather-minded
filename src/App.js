import React from 'react';
import './App.css';
import axios from 'axios';
import Day from './components/Day'

class App extends React.Component{

  state = {
    city: '',
    weather: [],
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
    axios.post('http://localhost:3001/',{
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
  }

  renderForecast = (weather) => {
    if(weather.length === 0){
      return <div></div>
    }else{
      return <Day weather={weather} />
    }
  }

  render(){

    let contents = this.state.isLoading
            ? <p><em>Loading...</em></p>
            : this.renderForecast(this.state.weather);

    return(
    <div>
      <h1>
        <center>What city you want the weather for chief?</center>
      </h1>
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

export default App;
