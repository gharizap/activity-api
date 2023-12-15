const express = require("express");
const getActivities = require("../controller/getActivities");
const createActivities = require("../controller/createActivities");
const verifyToken = require("../middleware/verifyToken");
const updateActivitiesId = require("../controller/updateActivitiesById");
const getActivitiesById = require("../controller/getActivitiesById")
const deleteActivitiesById = require("../controller/deleteActivitiesById");

const router = express.Router();

router.get("/activities", verifyToken, getActivities);
router.get("/activities/:id", verifyToken, getActivitiesById);
router.post("/activities", verifyToken, createActivities);
router.put("/activities/:id", verifyToken, updateActivitiesId);
router.delete("/activities/:id", verifyToken, deleteActivitiesById);

module.exports = router;
