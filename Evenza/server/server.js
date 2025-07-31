const express = require("express");
const bodyParser = require("body-parser");

const eventRoutes = require("./routes/events.route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
  const message = error.message || "Something went wrong.";
  res.status(error.status || 500).json({
    success: false,
    message,
  });
});


app.listen(3000);