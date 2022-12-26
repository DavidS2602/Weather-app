const api = axios.create({
    baseUrl: 'https://api.weatherstack.com/',
    params: {
        'api_key': API_KEY,
    },
})
//Header
const countryTitle = document.querySelector('#Country-section');

//Main
const status_weather = document.querySelector('"status-weather')
const status_logo = document.querySelector('.status-logo')
const temperature_data = document.querySelector('.temperature-data')
const weather_data = document.querySelector('weather-data')

//footer
const Future_temperature_section = document.querySelector('#Future-temperature-section')
const temperature_section = document.querySelector('.temperature-section')
const temperature_day = document.querySelector('.temperature-day')