import Geolocation from '@react-native-community/geolocation';
import { useState, useEffect } from "react";

export default function useGeoLocation(lat, lon) {
  const [latLon, setLatLon] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLatLon([position.coords.latitude, position.coords.longitude]);
        console.log(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return latLon;
}
