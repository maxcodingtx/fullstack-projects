const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/", async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    const API_KEY = process.env.WEATHER_API_KEY;
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

module.exports = router;
