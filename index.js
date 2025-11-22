import express from "express";
import axios from "axios";
import bodyParser from "body-parser";




const app = express();
const API_KEY = "76264e51cc4b97d8a0f744c4fece8cc5";
const port = 3000;



app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    res.render("index.ejs", {
        temp: null,
        feelsLike: null,
        condition: null,
        error: null,
        aqi: null,
    });
})

app.post("/get-city", async (req, res) => {

    const city = req.body.cityName;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        const weatherRes = await axios.get(weatherURL);
        const weatherData = weatherRes.data;
        const temp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const condition = weatherData.weather.main;
         const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;


        const aqiRes = await axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        const aqi = aqiRes.data.list[0].main.aqi;


        res.render("index.ejs", { city, temp, feelsLike, condition, error: null, aqi });

    } catch (error) {
        res.render("index.ejs", {
            city: null,
            condition: null,
            temp: null,
            feelsLike: null,
            aqi: null,
            error: "City not found"
        });
    }
})

app.listen(port, (req, res) => {
    console.log(`server runing on port ${port}`);
})
