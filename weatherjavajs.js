const apiKey = "939e4656739f10062bbd72376e6b3ec1";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon");
    const temperature = document.querySelector(".tem");
    const cityName = document.querySelector(".city");
    const humidity = document.querySelector(".humidity");
    const wind = document.querySelector(".wind");

    async function checkWeather(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} km/h`;

      
        const weather = data.weather[0].main;
        switch (weather) {
          case "Clouds":
            weatherIcon.src = "weatherAppImg/clouds.png";
            break;
          case "Clear":
            weatherIcon.src = "weatherAppImg/clear.png";
            break;
          case "Rain":
            weatherIcon.src = "weatherAppImg/rain.png";
            break;
          case "Drizzle":
            weatherIcon.src = "weatherAppImg/drizzle.png";
            break;
          case "Mist":
            weatherIcon.src = "weatherAppImg/mist.png";
            break;
          default:
            weatherIcon.src = "weatherAppImg/weather.png";
        }
      } catch (error) {
        alert(error.message);
      }
    }

    searchBtn.addEventListener("click", () => {
      const city = searchBox.value.trim();
      if (city) {
        checkWeather(city);
      }
    });

 
    checkWeather("Bhopal");