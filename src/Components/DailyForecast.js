import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import WeatherIcon from "./WeatherIcon";
import rainy from "../PNG/danieledesantis-weather-icons-rainy.png";

const Tempature = ({ descr, temp }) => {
  const color = descr === "Max." ? "#FF5733" : "#33D5FF";
  return (
    <div style={{ flex: "column", marginBottom: 40, marginTop: 20 }}>
      <Typography variant="h5" component="h2">
        {descr} Tempature
      </Typography>
      <br />
      <Typography
        style={{ float: "right", color: color }}
        variant="h7"
        component="h2"
      >
        {temp}°F
      </Typography>
    </div>
  );
};

const DailyForecast = ({ forecast }) => {
  const titleCase = (str) => {
    var splitStr = str.split(" ");
    var titleCaseStrings = [];
    splitStr.forEach((word) => {
      var newWord = word[0].toUpperCase();
      for (var i = 1; i < word.length; i++) {
        newWord += word[i];
      }
      titleCaseStrings.push(newWord);
    });
    return titleCaseStrings.join(" ");
  };

  return (
    <div>
      <Card style={{ minWidth: 300 }}>
        <CardContent>
          <Typography
            style={{
              fontSize: 24,
              textAlign: "center",
              width: 250,
              marginBottom: 10,
            }}
            color="textSecondary"
            gutterBottom
          >
            {titleCase(forecast.Day.IconPhrase)}
          </Typography>
          <Divider />
          <WeatherIcon number={forecast.Day.Icon} />
          <Divider />
          <Tempature descr={"Max."} temp={forecast.Temperature.Maximum.Value} />
          <Divider />
          <Tempature descr={"Min."} temp={forecast.Temperature.Minimum.Value} />
          <Divider />
          <Typography
            style={{ marginTop: 10, marginBottom: 5, textAlign: "center" }}
            variant="h5"
            component="h2"
          >
            Chance of Rain
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <img src={rainy} alt="rain" />
            <Typography style={{ marginTop: 30 }} variant="h7" component="h2">
              {forecast.Day.RainProbability}%
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyForecast;
