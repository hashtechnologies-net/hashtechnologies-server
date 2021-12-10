const Job = require("../Models/Job");
const Jobs = require("../Models/Jobs");

const mongoose = require("mongoose");

module.exports = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await Jobs.find();
      res
        .json({
          status: 200,
          data: jobs,
        })
        .status(200);
    } catch (error) {
      console.log(error);
    }
  },
  addJob: async (req, res) => {
    /**
     * @dev get all inputs from client side
     */
    const {
      title,
      category,
      location,
      employment_type,
      years_of_experience,
      team_lead,
      what_we_are_looking,
      responsibilities,
      skills,
      recommended,
    } = req.body;

    /**
     * @dev generate id since MONGODB is non relational we make same id to relate on another
     */
    const _id = new mongoose.Types.ObjectId();

    /**
     * @dev check if all fields are filled
     */
    if (
      title &&
      category &&
      location &&
      employment_type &&
      years_of_experience &&
      team_lead &&
      what_we_are_looking &&
      responsibilities &&
      skills &&
      recommended
    ) {
      try {
        /**
         * @dev write to DB
         */
        await Jobs.create({
          _id,
          title,
          category,
        });

        res.status(200).json({
          message: "Job added successfully",
          status: 200,
        });

        await Job.create({
          _id,
          title,
          short_details: {
            employment_type,
            years_of_experience,
            team_lead,
            location,
          },
          what_we_are_looking,
          responsibilities,
          skills,
          recommended,
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  updateJob: async (req, res) => {
    /**
     * @dev get all inputs from client side
     */
    const {
      _id,
      title,
      category,
      location,
      employment_type,
      years_of_experience,
      team_lead,
      what_we_are_looking,
      responsibilities,
      skills,
      recommended,
    } = req.body;

    /**
     * @dev at least one field must be updated
     */
    if (
      title ||
      category ||
      location ||
      employment_type ||
      years_of_experience ||
      team_lead ||
      what_we_are_looking ||
      responsibilities ||
      skills ||
      recommended
    ) {
      try {
        /**
         * @dev update to DB
         */
        await Jobs.findByIdAndUpdate(_id, {
          _id,
          title,
          category,
        });

        res.status(200).json({
          message: "Job updated successfully",
          status: 200,
        });

        await Job.findByIdAndUpdate(_id, {
          _id,
          title,
          short_details: {
            employment_type,
            years_of_experience,
            team_lead,
            location,
          },
          what_we_are_looking,
          responsibilities,
          skills,
          recommended,
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  deleteJob: async (req, res) => {
    const { _id } = req.body;
    try {
      await Jobs.findByIdAndDelete({ _id });
      res.status(200).json({
        message: "Job deleted successfully",
        status: 200,
      });
      await Job.findByIdAndDelete({ _id });
    } catch (error) {
      console.log(error);
    }
  },
};
