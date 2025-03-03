const apiKey="2564e4bcb0096805ef5127ba6db26fd4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector('.search input');
const button = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

button.addEventListener('click', () => {
    checkWeather(search.value);
});


async function checkWeather(city){
    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather-show').style.display = "none";
        return;
    }
    else{
    var data = await response.json();


    document.querySelector('.temp').textContent = data.main.temp + "°C";
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.humidity').textContent = data.main.humidity + "%";
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){  
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display = "none";
}
}

checkWeather();
