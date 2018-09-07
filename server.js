const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '1cb40561162db33b4e063549a3ada067';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {city: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {city: null, error: 'Error, please try again'});
    } else {
      let array = JSON.parse(body)
      if(array.main == undefined){
        res.render('index', {city: null, error: 'Error, please try again'});
      } else {
        //console.log("Session: %j", array);
        let weatherName = city;
        let weatherTempF = `${array.main.temp}`;
        let weatherTempC = ((weatherTempF - 32)*(5/9)).toFixed(2);
        let weatherId = `${array.weather[0].id}`;
        res.render('index', {city: weatherName, tempF: weatherTempF, tempC: weatherTempC, weatherId: weatherId, error: null});
      }
    }
  });
})

app.listen(3000, function () {
  console.log('NodeJS Weather App listening on port 3000')
})
