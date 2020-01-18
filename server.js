const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const axios = require('axios');

const API_KEY = "5c5d57566fba5fb93fb1322045ed97f3";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {weather: null, error: null});
});

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`

    axios.post(url)
    .then(function(response){
        let weather = response.data;
        if(weather.main == undefined){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
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
                img: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                message: weather.weather[0].main
            };
            res.render('index', {weather: data, error: null});
        }
    })
    .catch(function(error){
        console.log(error);
        res.render('index', {weather: null, error: error});
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});