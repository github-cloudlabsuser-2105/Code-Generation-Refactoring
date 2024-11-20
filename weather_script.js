const express = require('express');
const axios = require('axios');

const app = express();
const API_KEY = '90311a0296cef358b230637f658c3575s';

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description
        };
        res.json(weather);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});