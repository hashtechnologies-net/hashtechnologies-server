const express = require("express");
const JobsRouter = express.Router();

const { addJob, getAllJobs, updateJob, deleteJob } = require("../Controllers/Jobs");

JobsRouter
.get("/jobs", getAllJobs)
  .post("/add-job", addJob)
  .patch("/update-job", updateJob)
  .delete("/delete-job", deleteJob);

module.exports = JobsRouter;
