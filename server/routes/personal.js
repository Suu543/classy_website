const express = require("express");
const router = express.Router();

const { savePersonalInfo } = require("../controllers/personal.js");

router.post("/personal", saveUserInfo);

module.exports = router;
