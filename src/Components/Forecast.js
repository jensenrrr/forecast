import React, { useEffect, useState } from "react";
import Header from "./Header";
import DailyForecast from "./DailyForecast";
import config, { api } from "../config";
import axios from "axios";

const Forecast = () => {
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchCurrentLocation() {
      await navigator.geolocation.getCurrentPosition(async (position) => {
        const currentLocation = await axios.get(api.locationByCoordinates, {
          params: {
            apikey: config.apikey,
            q: position.coords.latitude + "," + position.coords.longitude,
          },
        });
        if (currentLocation.data) {
          setLocation({
            name: currentLocation.data.EnglishName,
            key: currentLocation.data.Key,
            timezone: currentLocation.data.TimeZone,
          });
        }
      });
    }
    fetchCurrentLocation();
  }, []);

  useEffect(() => {
    if (location && location.name) {
      async function fetchForecast() {
        const forecastResponse = await axios.get(
          api.fiveDayForecast + location.key,
          {
            params: {
              apikey: config.apikey,
              details: true,
            },
          }
        );
        if (forecastResponse && forecastResponse.data) {
          setForecast(forecastResponse.data);
        }
      }
      fetchForecast();
    }
  }, [location]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FFFFE0",
        flexWrap: "wrap",
      }}
    >
      <Header
        style={{ width: "100%" }}
        location={location}
        forecast={forecast}
      />
      <div
        style={{
          display: "flex",
          marginTop: "5%",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {forecast
          ? forecast.DailyForecasts.map((dailyForecast) => (
              <DailyForecast forecast={dailyForecast} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Forecast;
