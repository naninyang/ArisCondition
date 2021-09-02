import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL_ADDRESS, API_KEY_ADDRESS } from "@env";
import { storeAddress, getAddress } from './storeAddress';
import useGeoLocation from './useGeoLocation';

// fetch api with axios
const callAPI = axios.create({
  baseURL: API_URL_ADDRESS,
  timeout: 1000,
});

function useAddress(lat, lon) {
  const [address, setAddress] = useState(null);
  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) fetchAPI(...latLon);
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    try {
      const endpoint = `/address?service=address&key=${API_KEY_ADDRESS}&request=getAddress&point=${lon},${lat}&type=parcel`;
      const response = await callAPI.get(endpoint);
      const data = await storeAddress(filterData(response.data));
      console.log("Vworld API conection successed");
      setAddress(data);
    } catch (err) {
      console.log(err);
      console.log("Vworld API conection failed");
      const data = await getAddress();
      setAddress(data);
    }
  };

  return address;
}

const filterData = (rawData) => {
  return {
    structure: {
      level1: rawData.response.result[0].structure.level1,
      level4L: rawData.response.result[0].structure.level4L,
    },
  };
};

export default useAddress;
