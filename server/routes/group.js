const express = require("express");
const router = express.Router();

const { saveGroupInfo } = require("../controllers/group.js");

router.post("/group", saveGroupInfo);

module.exports = router;
