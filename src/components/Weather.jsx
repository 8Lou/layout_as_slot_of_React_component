import React, { useState, useEffect } from 'react';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = '115e71d4a35aed17363a951f82f3d4b6'; // API-ключ от OpenWeatherMap
        // const city = 'Obninsk';

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных о погоде:', error);
            });
    }, [city]);

    if (!weatherData) {
        return <div>Загрузка...</div>;
    }

    if (!weatherData.main || !weatherData.weather) {
        return <div>Данные о погоде недоступны</div>;
    }

    const { main, weather } = weatherData;
    const temperature = main.temp;
    const weatherDescription = weather[0].description;

    return (
        <div>
            <h2>Погода в {city}</h2>
            <p>Температура: {temperature}°C</p>
            <p>Погодные условия: {weatherDescription}</p>
        </div>
    );
};

export default Weather;