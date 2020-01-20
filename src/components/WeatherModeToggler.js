import React from 'react';
import { updateForecastMode } from './../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherModeToggler extends React.Component {
    render(){
        if(this.props.weather.length === 0){
            return <div style={{marginTop: '5%'}}></div>
        }else{
            return (
                <div className="btn-group" role="group" aria-label="Basic example" id="mode_toggler">
                    <button type="button" className="btn btn-secondary" onClick={() => {this.props.updateForecastMode('Current')}}>Current</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {this.props.updateForecastMode('Hourly')}}>Hourly</button>
                </div>
            );
        }
    }
}
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      updateForecastMode,
    }, dispatch);
  }

  export default connect(null, mapDispatchToProps)(WeatherModeToggler);