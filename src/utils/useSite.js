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

function useSite(lat, lon) {
  const [site, setSite] = useState(null);
  const latLon = useGeoLocation();

  useEffect(() => {
    if (latLon) fetchAPI(...latLon);
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    try {
      const endpoint = `/address?key=${API_KEY_ADDRESS}&point=${lon},${lat}&service=address&request=getAddress&type=parcel`;
      const response = await callAPI.get(endpoint);
      const data = await storeAddress(response.data.response.result[0].structure.level4L);
      console.log("Vworld API conection successed");
      setSite(data);
    } catch (err) {
      console.log(err);
      console.log("Vworld API conection failed");
      const data = await getAddress();
      setSite(data);
    }
  };

  return site;
}

export default useSite;
