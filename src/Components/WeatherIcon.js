import React from "react";

import Sunny from "../PNG/danieledesantis-weather-icons-sunny.png";
import DayTStrom from "../PNG/danieledesantis-weather-icons-stormy.png";
import NightTStrom from "../PNG/danieledesantis-weather-icons-night-stormy.png";
import Night from "../PNG/danieledesantis-weather-icons-night-clear.png";
import CloudyDay from "../PNG/danieledesantis-weather-icons-cloudy.png";

const getIcon = (number) => {
  if (number <= 5) {
    return Sunny;
  } else if (number >= 15 && number <= 17) {
    return DayTStrom;
  } else if (number >= 33 && number <= 37) {
    return Night;
  } else if (number >= 41 && number <= 42) {
    return NightTStrom;
  } else {
    return CloudyDay;
  }
};

const WeatherIcon = ({ number }) => {
  return (
    <img
      src={getIcon(number)}
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        marginTop: 20,
      }}
    />
  );
};

export default WeatherIcon;
