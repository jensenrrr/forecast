import axios from "axios";

const config = {
  apikey: "",
};

export const api = {
  locationByCoordinates:
    "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
  fiveDayForecast:
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/",
};

export default config;
