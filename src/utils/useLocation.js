import { useState, useEffect } from "react";
import axios from "axios";
import { storeLocation, getLocation } from "./storeApi";
import useGeoLocation from "./useGeoLocation";

const API_KEY = "18C657E2-D781-3799-8626-496EDE6DCF70";

// fetch api with axios
const url = "https://api.vworld.kr/req/address";

const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});

export default function useLocation(lat, lon) {
  const [location, setLocation] = useState(null);
  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) fetchAPI(...latLon);
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    try {
      const endpoint = `?service=address&type=both&request=getAddress&key=${API_KEY}&point=${lon},${lat}`;
      const res = await callAPI.get(endpoint);
      const data = await storeLocation(filterData(res.data));
      console.log("API conection successed");
      setLocation(data);
    } catch (err) {
      console.log("API conection failed");
      const data = await getLocation();
    }
  };

  return location;
}

const filterData = (rawData) => {
  return {
    structure: {
      level1: rawData.response.result.structure.level1,
      level2: rawData.response.result.structure.level4L,
    },
  };
};
