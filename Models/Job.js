const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JobSchema = new Schema({
  _id: ObjectId,
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  short_details: {
    employment_type: {
      type: String,
      required: [true, "Employment Type is required"],
    },
    years_of_experience: {
      type: String,
      required: [true, "Experience text is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    team_lead: {
      type: String,
      required: [true, "Team Lead text is required"],
    },
  },
  what_we_are_looking: {
    type: String,
    required: [true, "looking for is required"],
  },
  responsibilities: {
    type: Array,
    required: [true, "Responsibilities is required"],
  },
  skills: {
    type: Array,
    required: [true, "Skills is required"],
  },
  recommended: {
    type: Array,
    required: [true, "Recommended is required"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("job_detail", JobSchema);
