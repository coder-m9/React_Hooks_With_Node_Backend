const express = require("express");

const router = express.Router();
const analyticsController = require("../controller/v1/analytics");

router.get("/usermetrics", analyticsController.getUserStats);

module.exports = router;
