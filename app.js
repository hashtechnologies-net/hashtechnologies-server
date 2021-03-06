const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

/** @dev apply to all requests & log api requests => morgan */
app.use(morgan("dev"));

mongoose.connect(
  process.env.MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    /**
     * @param error on databse connection
     */
    if (err) return console.log(err);
    else console.log("Database Connected => Hash Technologies");
  }
);

/**
 * @dev Routers
 */
const OurWorksRouter = require("./Routes/OurWorks.routes");
const JobsRouter = require("./Routes/Jobs.routes");

app
  .use("/api/v1", OurWorksRouter)
  .use("/api/v1", JobsRouter)
  /**
   * @dev 404 API request
   */
  .use((req, res) => {
    res.status(404).json({ msg: "API not found!" });
  });

module.exports = app;
