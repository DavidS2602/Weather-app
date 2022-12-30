window.addEventListener('load', () => {
    let lon
    let lat
    let temperature = document.getElementById('temperature')
    let weather_description = document.getElementById('weather-description')
    let location = document.getElementById('country')
    let animatedIcon = document.getElementById('animated-logo')
    let velocity_wind = document.getElementById('velocity-wind')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude
            lat = position.coords.latitude

            let api_key = API_KEY
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

            axios
            .get(url)
            .then(Response => {
                const data = Response.data
                temperature.textContent = `Temperatura ${Math.round(data.main.temp)}°C`
                console.log(data)

                weather_description.textContent = `${data.weather[0].description}`
                location.textContent = data.name

                velocity_wind.textContent = `Vel. del viento ${data.wind.speed}m/s`

                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                        animatedIcon.src = '../animated/thunder.svg'
                        break;
                    case 'Drizzle':
                        animatedIcon.src = '../animated/rainy-2.svg'
                        break;
                    case 'Rain':
                        animatedIcon.src = '../animated/rainy-7.svg'
                        break;
                    case 'Snow':
                        animatedIcon.src = '../animated/snowy-6.svg'
                        break;
                    case 'Clear':
                        animatedIcon.src = '../animated/day.svg'
                        break;
                    case 'Atmosphere':
                        animatedIcon.src = '../animated/weather.svg'
                        break;
                    case 'Clouds':
                        animatedIcon.src = '../animated/cloudy-day-1.svg'
                        break;
                    default:
                        animatedIcon.src = 'animated/cloudy-day-1.svg '
                    }
                })
        })
    }
})


