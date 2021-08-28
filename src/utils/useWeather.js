import { useState, useEffect } from 'react';
import axios from 'axios';
import { storeApi, getApi } from './storeApi';
import useGeoLocation from './useGeoLocation';

const API_KEY = '54730e6b67983486d63e8814845b9341';
const locale = 'kr';

// fetch api with axios
const API_URL = 'https://api.openweathermap.org/data/2.5';

const callAPI = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null);
  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) fetchAPI(...latLon);
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    try {
      const endpoint = `/forecast?units=metric&lat=${lat}&lon=${lon}&lang=${locale}&appid=${API_KEY}`;
      const response = await callAPI.get(endpoint);
      const data = await storeApi(filterData(response.data));
      console.log("API conection successed");
      setWeather(data);
      console.log(data);
    } catch (err) {
      console.log("API conection failed");
      const data = await getApi();
      setWeather(data);
    }
  };

  return weather;
}

const filterData = (rawData) => {
  return {
    id: rawData.city.id,
    name: rawData.city.name,
    country: rawData.city.country,
    timezone: rawData.city.timezone,
    coord: {
      lat: rawData.city.coord.lat,
      lon: rawData.city.coord.lon,
    },
    list: rawData.list,
  };
};

export default useWeather;
