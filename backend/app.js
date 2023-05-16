const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const cors = require("cors");
require("./config/mongo.config");
// const Connection = require("./config/mongo.config");
const Router = require("./routes/route");
const bodyParser = require("body-parser");

dotenv.config();

// Cors call
// app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

// app.listen(8050, "localhost", (err) => {
//   if (err) {
//     console.error("APP: ", err);
//     console.log("Error listening to port 8050//");
//   } else {
//     console.log("Server is listening to port 8050//");
//     console.log("Press CTRL+C to end server");
//   }
// });

app.listen(process.env.PORT || 80, console.log("server running"));
