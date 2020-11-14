import React, { useEffect, useState } from "react";
import config, { api } from "../config";
import axios from "axios";

const Forecast = () => {
  const [location, setLocation] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition((position) =>
      setCoordinates(position.coords.latitude + "," + position.coords.longitude)
    );
    const currentLocation = await axios.get(api.locationByCoordinates, {
      params: {
        apikey: config.apikey,
        q: coordinates,
      },
    });
    if (currentLocation.data) {
      setLocation({
        name: currentLocation.data.EnglishName,
        key: currentLocation.data.Key,
        timezone: currentLocation.data.TimeZone,
      });
    }
  }, []);

  useEffect(async () => {
    if (location && location.name) {
      const forecastResponse = await axios.get(
        api.fiveDayForecast + location.key,
        {
          params: {
            apikey: config.apikey,
          },
        }
      );
      if (forecastResponse && forecastResponse.data) {
        setForecast(forecastResponse.data);
      }
    }
  }, location);

  return (
    <div>
      {location ? <span>{location.name}</span> : <span>Weather App!</span>}
    </div>
  );
};

export default Forecast;
