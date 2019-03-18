const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");

// Load user profile
const User = require("../../models/User");

// Create router
// @route GET api/profile/test
// @desc Tests profile route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
