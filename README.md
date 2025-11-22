⛅ Weather App

A simple and elegant weather application built using Node.js, Express, EJS, and the OpenWeatherMap API.

📝 About the Project

The Weather App allows users to search for any city and instantly view real-time:
✔️ Temperature
✔️ Feels-like Temperature
✔️ Weather Condition
✔️ Air Quality Index (AQI)
✔️ Adaptive background based on weather

This project helped me practice working with REST APIs, server-side rendering, and clean UI design while building a useful application.

🚀 Features

🌍 Search weather by city name

🌡 Real-time temperature & feels-like data

🌤 Shows current weather condition

🏭 Air Quality Index (AQI) with level explanation

🎨 Dynamic background based on weather (Clear, Clouds, Rain, etc.)

⚠️ Error handling for invalid cities

📱 Responsive UI design

🛠️ Tech Stack

Frontend:

EJS

HTML5

CSS3

Bootstrap

Backend:

Node.js

Express.js

Axios

Body-Parser

API:

OpenWeatherMap API (Weather + Air Pollution)

▶️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/Kunalsingh8542/Weather-App

2️⃣ Install dependencies
npm install

3️⃣ Add your API key

Inside index.js, replace your API key here:

const API_KEY = "YOUR_API_KEY";

4️⃣ Start the server
node index.js

5️⃣ Open in browser
http://localhost:3000



📊 AQI Levels Guide
AQI	Meaning	Health Impact
1  : Good	Air quality is considered satisfactory
2	 : Fair	Acceptable, some pollutants may be moderate
3	 : Moderate	May cause breathing discomfort
4	 : Poor	Unhealthy for sensitive groups
5	 : Very Poor	Serious health effects, avoid going outside
