import React from 'react';

class Hours extends React.Component {
    render(){
        const forecasts = {
            "partly cloudy": "https://media.giphy.com/media/VMVpwj0jtCEYo/giphy.gif",
            "cloudy": "https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif",
            "sunny": "https://media.giphy.com/media/3o6ozgD5lrJfGZQgiQ/giphy.gif",
            "clouds": "https://media.giphy.com/media/uOuiK4F5zZkZ2/giphy.gif",
            "rain": "https://media.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif",
            "clear": "https://media.giphy.com/media/3o6ozgD5lrJfGZQgiQ/giphy.gif",
            "mist": "https://media.giphy.com/media/dz6Nrk35xWP3q/giphy.gif"
        };

        let hours = this.props.hourly;

        return (
            <div>
                <table className="day">
                    <tbody>
                        <tr>
                            <td><img src={forecasts[hours[0].weather[0].main.toLowerCase()]} alt={hours[0].weather[0].main.toLowerCase()} style={{maxWidth: 100, margin: '4% 0%'}} /></td>
                            <td><img src={forecasts[hours[1].weather[0].main.toLowerCase()]} alt={hours[1].weather[0].main.toLowerCase()} style={{maxWidth: 100, margin: '4% 0%'}} /></td>
                            <td><img src={forecasts[hours[2].weather[0].main.toLowerCase()]} alt={hours[2].weather[0].main.toLowerCase()} style={{maxWidth: 100, margin: '4% 0%'}} /></td>
                            <td><img src={forecasts[hours[3].weather[0].main.toLowerCase()]} alt={hours[3].weather[0].main.toLowerCase()} style={{maxWidth: 100, margin: '4% 0%'}} /></td>
                            <td><img src={forecasts[hours[4].weather[0].main.toLowerCase()]} alt={hours[4].weather[0].main.toLowerCase()} style={{maxWidth: 100, margin: '4% 0%'}} /></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{hours[0].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[1].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[2].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[3].dt_txt.split(' ')[1]}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[4].dt_txt.split(' ')[1]}</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{Math.round(hours[0].main.temp/4)}&deg;F</h3></td>
                            <td><h3 style={{margin: '0%'}}>{Math.round(hours[1].main.temp/4)}&deg;F</h3></td>
                            <td><h3 style={{margin: '0%'}}>{Math.round(hours[2].main.temp/4)}&deg;F</h3></td>
                            <td><h3 style={{margin: '0%'}}>{Math.round(hours[3].main.temp/4)}&deg;F</h3></td>
                            <td><h3 style={{margin: '0%'}}>{Math.round(hours[4].main.temp/4)}&deg;F</h3></td>
                        </tr>
                        <tr>
                            <td><h3 style={{margin: '0%'}}>{hours[0].weather[0].main}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[1].weather[0].main}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[2].weather[0].main}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[3].weather[0].main}</h3></td>
                            <td><h3 style={{margin: '0%'}}>{hours[4].weather[0].main}</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Hours;
