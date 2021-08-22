import { useState, } from "react";
import Geolocation from '@react-native-community/geolocation';
// import axios from 'axios';

function useLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLogitude] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        setLatitude(latitude);
        setLogitude(longitude);
      },
      error => { console.log(error.code, error.message); },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }

  // getLocation();

  // const [address, setAddress] = useState([]);

  // const API_URL = 'http://api.vworld.kr/req/address';
  // const API_KEY = '18C657E2-D781-3799-8626-496EDE6DCF70';
  // axios.get(API_URL, {
  //   params: {
  //     key: API_KEY,
  //     service: 'address',
  //     request: 'GetAddress',
  //     // point: `${longitude},${latitude}`,
  //     point: '126.91438,37.481503',
  //     type: 'parcel',
  //   }
  // })
  //   .then(response => {
  //     setAddress(response.data.response.result);
  //   })
  //   .catch(console.warn)
}

export default useLocation;
