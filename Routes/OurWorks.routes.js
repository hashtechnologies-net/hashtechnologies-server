const express = require("express");
const OurWorksRouter = express.Router();

const { addWork, updateWork, deleteWork, getWorks } = require("../Controllers/Ourwork");

OurWorksRouter.get("/ourworks", getWorks)
  .post("/add-work", addWork)
  .patch("/update-work", updateWork)
  .delete("/delete-work", deleteWork);

module.exports = OurWorksRouter;
