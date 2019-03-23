const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const passport = require("passport"); // Main Authentication Module
const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB config
const db = require("./config/keys").mongoURI;
// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected.")) // Success.
  .catch(err => console.log(err.errmsg)); // Error.

// Create route
//app.get("/", (req, res) => res.send("Hello Mumbai!"));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
