require('dotenv').config();
const cors = require("cors");
const express = require("express");

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bob123world application." });
});

// * Routes * //
require("./routes/coinmarketcap.routes.js")(app);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
