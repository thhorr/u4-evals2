const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const router = express.Router();
const User = require("../models/userModel");
const upload = require("../middlewares/file-upload");

router.post("/", upload.single("profile_pic"), async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profile_pic: req.file.path,
    roles: req.body.roles,
  });

  res.send(user);
});

module.exports = router;
