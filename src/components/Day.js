import React from 'react';

class Day extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.weather.img} style={{maxWidth: 300, margin: '4% 0%'}} alt={this.props.weather.message} />
                <table className="day">
                    <tbody>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{this.props.weather.message}</h3></td>
                        </tr>
                        <tr>
                            <td><h1 style={{margin: '0%'}}>{this.props.weather.temp.now}&deg;F</h1></td>
                        </tr>
                        <tr>
                            <td><div style={{margin: '0%'}}><b>{this.props.weather.temp.max}&deg;F</b> / {this.props.weather.temp.min}&deg;F</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Day;