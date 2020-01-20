import React from 'react';

class Day extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.weather.img} style={{maxWidth: 300}} />
                <table className="day">
                    <tbody>
                        <tr>
                            <td><h2>{this.props.weather.city}</h2></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{this.props.weather.message}</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>Current: {this.props.weather.temp.now}&deg;F</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>Hi: {this.props.weather.temp.max}&deg;F</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>Low: {this.props.weather.temp.min}&deg;F</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Day;