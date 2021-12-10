const Ourwork = require("../Models/Ourwork");

/**
 * @dev async functions are used trycatch => error handling
 */
module.exports = {
  /**
   * @dev Function to get all works
   */
  getWorks: async (req, res) => {
    try {
      const data = await Ourwork.find();

      res.status(200).json({
        status: 200,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * @dev Function to add work
   */
  addWork: async (req, res) => {
    const { title, highlight, content, link, image } = req.body;

    /**
     * @dev Every filled is required
     */
    if (title && highlight && content && link && image) {
      try {
        awawork.create({
          title,
          highlight,
          content,
          link,
          image,
        });

        res.status(200).json({
          status: 200,
          message: "Work added successfully",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
  },

  /**
   * @dev Function to update work
   */
  updateWork: async (req, res) => {
    const { title, highlight, content, link, image, _id } = req.body;

    /**
     * @dev at least one field must be updated
     */
    if (title || highlight || content || link || image) {
      try {
        await Ourwork.findByIdAndUpdate(_id, {
          title,
          highlight,
          content,
          link,
          image,
        });

        res.status(200).json({
          status: 200,
          message: "Work updated successfully",
        });
      } catch (error) {
        console.log(error);
      }
    } else
      res.status(400).json({
        status: 400,
        message: "At least one field must be filled",
      });
  },

  /**
   * @dev Function to delete work
   */
  deleteWork: async (req, res) => {
    const { _id } = req.body;
    try {
      if (_id) {
        await Ourwork.findByIdAndDelete(_id);
        res.status(200).json({
          status: 200,
          message: "Work deleted successfully",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
