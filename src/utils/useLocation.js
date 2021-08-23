import { useState, } from "react";
import Geolocation from '@react-native-community/geolocation';

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
}

export default useLocation;
