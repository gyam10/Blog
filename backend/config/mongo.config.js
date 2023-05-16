const mongoose = require("mongoose");

const Connection = async (username, password) => {
  // const dbUrl = "mongodb://127.0.0.1:27017/blog";

  const dbUrl =
    "mongodb+srv://test:test123@cluster0.lls5sy9.mongodb.net/blog?retryWrites=true&w=majority";
  try {
    await mongoose.connect(dbUrl, { useNewUrlPraser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
module.exports = Connection;

// const mongoose = require("mongoose");

// mongoose.connect(
//   dbUrl,
//   {
//     autoCreate: true,
//     autoIndex: true,
//   },
//   (err) => {
//     if (err) {
//       console.error("Mongo connection errro: " + err);
//     } else {
//       console.log("Db Connected successfully.");
//     }
//   }
// );
