const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
  },
  createdDate: {
    type: Date,
  },
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;
