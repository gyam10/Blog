const mongoose = require("mongoose");

const Connection = async () => {
  const dbUrl = "mongodb://localhost:27017/blog";
  // const dbUrl = `mongodb+srv://${username}:${password}@cluster0.lls5sy9.mongodb.net/blog?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dbUrl, { useNewUrlPraser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
export default Connection;
