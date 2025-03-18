const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const weatherRoutes = require("./routes/weather");
app.use("/weather", weatherRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
