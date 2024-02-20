// Import required modules
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

// loading the custom env variables
dotenv.config();

// importing the router for the page routes
const router = require("./modules/Products/router");

// Set up Express app
const app = express();
const port = process.env.PORT || "8888";

// defining the views directory for the root source
app.set("views", path.join(__dirname, "views"));
// defining the template engine as pug
app.set("view engine", "pug");
// setup public folder
app.use(express.static(path.join(__dirname, "public")));

// using the router
app.use(router);

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
