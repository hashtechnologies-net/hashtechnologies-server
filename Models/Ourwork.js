const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OurworkSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    highlight: {
        type: String,
        required: [true, 'Highlight text is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    link: {
        type: String,
        required: [true, 'Link text is required']
    },
    created_at: {
        type: Date,
        default: Date.now(),
      },
});

module.exports = mongoose.model("our_work", OurworkSchema);