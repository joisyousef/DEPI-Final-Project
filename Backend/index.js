const Joi = require("joi");
const path = require("path");
Joi.objectId = require("joi-objectId")(Joi);
const cors = require("cors");
const methodOverride = require("method-override");

const appointment = require("./routes/appointment");
const doctor = require("./routes/doctor");
const users = require("./routes/users");
const auth = require("./routes/auth");
const frontAppointment = require("./routes/frontend/appointent");
const frontDoctors = require("./routes/frontend/doctor");

const blogRoutes = require("./routes/frontend/blogRoutes");
const serviceRoutes = require("./routes/frontend/serviceRoutes");

const express = require("express");
const app = express();
app.use(express.json());

/*****************************************************/
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:root@mern.lqjfrhn.mongodb.net/depi-project?retryWrites=true&w=majority&appName=mern"
  )
  .then(() => {
    console.log("connecting to database");
  })
  .catch((err) => {
    console.error("could not connect to database", err);
  });

/*****************************************************/

//built-in middleware function:
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(methodOverride("_method"));
app.use(cors());
/**************************************************************************************************/

app.use("/appointment", appointment);
app.use("/doctor", doctor);
app.use("/api/login", auth);
app.use("/api/register", users);

/**************************************************************************************************/

// Serve AdminLTE files
app.use(
  "/adminlte",
  express.static(path.join(__dirname, "node_modules", "admin-lte"))
);

// Serve Font Awesome from node_modules
app.use(
  "/fontawesome",
  express.static(
    path.join(__dirname, "node_modules", "@fortawesome", "fontawesome-free")
  )
);

// Set the view engine to EJS
app.set("view engine", "ejs");

// Login route
app.get("/login", (req, res) => {
  res.render("login");
});

// app.get('/appointment/new', (req, res) => {
//  // or fetch the appointment from your database
//   res.render('add_course');
// });

/**************************************************************************************************/

//  API routes
app.use("/api/appointment", frontAppointment);
app.use("/api/doctor", frontDoctors);
app.use("/api/v1", blogRoutes);
app.use("/api/v1", serviceRoutes);
app.use("/api/v1", serviceRoutes);

/**************************************************************************************************/
// Environment Variables:
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});
