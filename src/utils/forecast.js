const request = require("request");

const forecast = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=239c3c5fb52a28ee5792de3e01b52f47`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback(`Unableto connect to weather service!`, undefined);
        } else if (body.cod === "400") {
            callback(`Unable to find location`, undefined);
        } else {
            callback(undefined, `${body.weather[0].description}. It is currently ${body.wind.deg} degrees out, with a temperature of ${(body.main.temp - 273).toFixed(2)} ℃ and a wind speed of ${body.wind.speed} m/s.`);
            console.log(body);
        };
    });
};

module.exports = forecast