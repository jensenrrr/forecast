# AccuWeather Forecast

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was made in a day for an interview assesment.

## Set Up

Go to config.js in the root directory and place your AccuWeather api key in the config object.

    const config = {
        apikey: "INSERTKEYHERE",
    };

Run "npm i" in the project directory to install dependencies.

Run "npm start" to start the project in development mode at [http://localhost:3000](http://localhost:3000).

## Credits

Weather Icons are credited to [Daniele De Santis](https://dribbble.com/shots/2191392-Free-weather-flat-icons).

# Design Decisions

## Tools

- React: An extremely popular tool/library for building user interfaces and the frontend technology I'm most familiar with.

- Axios: For HTTP requests.

- MaterialUI: A design system with styling and React components.

## Starting Out

The first steps I took to start this project were to look at the sign up for the AccuWeather API and see what location endpoints it had available, since you need a location before you can get a weather forecast.

Two of the endpoints in particular caught my eye:

- [Geoposition Search:](https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/geoposition/search) If I can find out the user's location I could start displaying the weather as soon as they load onto the application.
- [Autocomplete Search:](https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete) This could be used to create a responsive search that would intelligently get locations from AccuWeather to autocomplete the user's input.

I decided to start out with the Geoposition search for a couple of reasons:

- In my experience, when a user uses a Weather app they want to see the weather forecast for their location over 90% of the time.
- Autocomplete Search would fire out a large number of requests and break my limited trial API limit.

So I ran a search for how to find the a user's location and ran into this from MDN's docs: [Geolocation/getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

I used create-react-app to bootstrap the project, created the Forecast component where I would put most of the app's functionality, and made a config file to hold the AccuWeather api key.

I used the getCurrentPosition endpoint to collect the long/lat of the user after the first render of the application using the useEffect hook and then called AccuWeather's Geoposition search endpoint to get the user's location and location key from AccuWeather.

Now that I have the user's current location I went to call the provided AccuWeather 10 day forecast endpoint provided by the assessment. After setting this up, however, I was getting CORS issue on my call. This seemed odd to me, but I attempted to get it to work by prepending CORS anywhere to the URL [(stackoverflow post)](<[https://stackoverflow.com/questions/41215140/weather-api-request-cors-error](https://stackoverflow.com/questions/41215140/weather-api-request-cors-error)>). This, however, gave me a 401, unauthorized, response. I checked out what endpoints the limited trial has access to and, sure enough, the limited trial only had access to the 5-day weather forecast.

I decided I would have to do the 5-day weather forecast instead and used that endpoint instead. Once that call was working I wrapped up the commit and pushed up my changes.

This took just under 2 hours, including almost a half hour of confusion while I looked into the CORS error.

## Building the Display

I looked around briefly at design systems/frameworks and decided to go with MaterialUI over Bootsrap because I wanted to try something new. This ultimately ended up being a mistake as I didn't take the time to understand it's container system or learn its best practices.

The extent of the plan I had going into this portion of the project was: A header with the location name at the top and 5 cards below it displaying the weather for each day.

I created a **DailyForecast** component for each day in the 5 day forecast and passed down it's corresponding day of forecast information. I used the Card component from MaterialUI to organize the information to display for each day. I knew I wanted Weather Icons to display on the card and searched for free weather icons to use. I realized halfway through this that AccuWeather has their own icons that correlate to each of their Icon ids but I would still have download each of them and map each of them out myself and they still would clash with the style of the display I was building.

I found some free icons (see the credit above) and decided to use the PNG versions of them since I was timeboxing myself and didn't have time to set up the SVGs. I also didn't finish mapping out the results to the icons because of timeboxing.

To finish up the card I put min/max temperature for each day and the probability of precipitation.

It's hard to measure how long I spent on this section since I was on and off my computer, but I would estimate around 5 hours.

In hindsight, such a broad plan and using a design system I was unfamiliar with were mistakes. If I had made a basic wireframe and used Bootstrap I believe I would have managed the work in a more timely and organized fashion. I also would've been able to make the display responsive easier, as I didn't know how to start with that task using MaterialUI.

## Future Work

- CSS design scheme (over largely in-line styling).
- Autocomplete search for locations.
- Show more details about the next 12 hours.
- Theme based on today's weather.
- Make the display responsive to screen size.
- Finish mapping the Icons and dynamically display rain/snow/hail instead of assuming rain on the forecast card.
