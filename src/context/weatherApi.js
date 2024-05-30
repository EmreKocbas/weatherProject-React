import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
const WeatherApi = createContext();
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity]=useState(localStorage.getItem('city'))
  const apiKey = '1a43188390ff60a1afe298f234854319';

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data.list);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, [city, apiKey]);

  const findMinMaxTemperatures = () => {
    if (!weatherData) return []; // Eğer hava verisi yoksa boş bir dizi döndür
    const minMaxTemperatures = [];
    for (let i = 0; i < weatherData.length; i += 8) {
      const dailyTemperatures = weatherData.slice(i, i + 8).map(forecast => forecast.main.temp);
      const minTemp = Math.min(...dailyTemperatures);
      const maxTemp = Math.max(...dailyTemperatures);
      const date=weatherData[i].dt_txt
      const weather=weatherData[i].weather[0].main
      const temp=weatherData[i].main.temp
      minMaxTemperatures.push({ minTemp, maxTemp, date, weather,temp});
    }
    
    return minMaxTemperatures;
  };

  const minMaxTemperatures = findMinMaxTemperatures();
  

  const values = {
    weatherData,
    setWeatherData,
    city,
    setCity,
    minMaxTemperatures
  };

  return <WeatherApi.Provider value={values}>{children}</WeatherApi.Provider>;
}

export default WeatherApi;
