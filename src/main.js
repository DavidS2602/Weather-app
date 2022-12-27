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
                    let data = Response.data
                    let temp = Math.round(data.main.temp)//Para quitar el redondeo
                    temperature.textContent = `${temp} °C`

                    let description = data.weather[0].description
                    weather_description.textContent = description.toUpperCase()

                    let loc = data.name
                    location.textContent = loc

                    let wind = data.wind.speed
                    velocity_wind.textContent = `Vel. Viento ${wind} m/s`

                    console.log(data)

                    //Animated Icons.
                    switch (data.weather[0].main) {
                        case 'Clear':
                            animatedIcon.src = '../animated/day.svg'
                            break;
                        case 'Clouds':
                            animatedIcon.src = '../animated/cloudy-day-1.svg'
                            break;
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
                        case 'Atmosphere':
                            animatedIcon.src = '../animated/weather.svg'
                            break;
                        default:
                            animatedIcon.src = '../animated/cloudy-day-1.svg'
                            break;
                    }
                })
        })
    }
})


