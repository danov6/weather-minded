const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const API_KEY = "5c5d57566fba5fb93fb1322045ed97f3";

const forecasts = {
    "partly cloudy": "https://media.giphy.com/media/VMVpwj0jtCEYo/giphy.gif",
    "cloudy": "https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif",
    "sunny": "https://media.giphy.com/media/3o6ozgD5lrJfGZQgiQ/giphy.gif",
    "clouds": "https://media.giphy.com/media/uOuiK4F5zZkZ2/giphy.gif",
    "rain": "https://media.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif",
    "clear": "https://media.giphy.com/media/3o6ozgD5lrJfGZQgiQ/giphy.gif",
    "mist": "https://media.giphy.com/media/dz6Nrk35xWP3q/giphy.gif"
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send({weather: null, error: null});
});

app.post('/', function (req, res) {
    console.log('------------------------------It works--------------------------------')
    let city = req.body.city;
    console.log(req.body)
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

    axios.post(url)
    .then(function(response){
        let weather = response.data;
        if(weather.main == undefined){
            res.send({weather: null, error: 'Error, please try again'});
        } else {
            
            //DATA PACKAGE
            let data = {
                city: weather.name,
                temp: {
                    now: Math.round(weather.main.temp),
                    min: Math.round(weather.main.temp_min),
                    max: Math.round(weather.main.temp_max)
                },
                wind: {
                    speed: weather.wind.speed
                },
                img: forecasts[weather.weather[0].main.toLowerCase()],
                message: weather.weather[0].main
            };
            res.send({weather: data, error: null});
        }
    })
    .catch(function(error){
        console.log(error);
        res.send({weather: null, error: error});
    });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});