const mongoose = require("mongoose");
const TokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

const TokenModel = mongoose.model("token", TokenSchema);
module.exports = TokenModel;
