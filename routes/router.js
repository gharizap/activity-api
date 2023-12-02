const express = require("express");
const getActivities = require("../controller/getActivities");

const router = express.Router();

router.get("/activities", getActivities);

module.exports = router;
