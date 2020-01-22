import React from 'react';

class Hours extends React.Component {
    render(){
        let hours = this.props.hourly;
        return (
            <div>
                <table className="day">
                    <tbody>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{hours[0].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[1].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[2].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[3].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[4].dt_txt.split(' ')[1]}</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{hours[0].main.temp}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[1].main.temp}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[2].main.temp}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[3].main.temp}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[4].main.temp}</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{hours[0].weather[0].description}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[1].weather[0].description}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[2].weather[0].description}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[3].weather[0].description}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[4].weather[0].description}</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Hours;