import { useState, useEffect } from 'react';
import { API_KEY_WEATHER, API_LOCALE_WEATHER, API_URL_WEATHER } from "@env";
import axios from 'axios';
import { storeWeather, getWeather } from './storeWeather';
import useGeoLocation from './useGeoLocation';

// fetch api with axios
const callAPI = axios.create({
  baseURL: API_URL_WEATHER,
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
      const endpoint = `/forecast?units=metric&lat=${lat}&lon=${lon}&lang=${API_LOCALE_WEATHER}&appid=${API_KEY_WEATHER}`;
      const response = await callAPI.get(endpoint);
      const data = await storeWeather(filterData(response.data));
      console.log("Open Weather API conection successed");
      setWeather(data);
    } catch (err) {
      console.log("Open Weather API conection failed");
      const data = await getWeather();
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
