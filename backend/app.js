const express = require("express");
const app = express();
const Connection = require("./config/mongo.config");
// const cors = require("cors");
const routes = require("./routes/route");
const myEvent = require("./app/events/events");

app.use((req, res, next) => {
  req.myEvent = myEvent;
  next();
});

// Cors call
// app.use(cors());

// express.json() => application/json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// multipart/form-data
app.use("/assets", express.static(process.cwd() + "/uploads"));
app.use("/public", express.static(process.cwd() + "/public"));

// http://localhost:4040/api/v1/
app.use("/api/v1/", routes);
//app.use(routes)

app.use((req, res, next) => {
  next({
    status: 404,
    msg: "Not found",
  });
});
// error page handling
app.use((error, req, res, next) => {
  console.log("Err: ", error);
  let status = error.status || 500;
  let msg = error.msg || "Server Errror";

  res.status(status).json({
    result: null,
    msg: msg,
    status: false,
  });
});

app.listen(4040, "localhost", (err) => {
  if (err) {
    console.error("APP: ", err);
    console.log("Error listening to port 4040//");
  } else {
    console.log("Server is listening to port 4040//");
    console.log("Press CTRL+C to end server");
  }
});

Connection();
