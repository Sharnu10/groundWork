import * as express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
  res.end('server running');
});

// get weather data from openweathermap, this should not be used for commercial purpose.
async function getData(url, res) {
  try {
    const weatherRes = await axios.get(url);

    res.json({
      weatherData: weatherRes.data,
    });
    return weatherRes?.data;
  } catch (error) {
    console.log(`error: `, error);
  }
}

router.get('/api/weather/:city', (req, res) => {
  const city = req.params.city;
  const apiKey = '5af8cb893e1e9d5a529fc3355de4d576';

  //   const url = `http://api.weatherapi.com/v1/current.json?key=${city}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  getData(url, res);
});

export { router as weatherApp };
