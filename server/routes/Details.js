
const express = require("express");
const { registerVehicle } = require("../controllers/DetailsController");

const router = express.Router();

router.post("/register", registerVehicle);

module.exports = router;
