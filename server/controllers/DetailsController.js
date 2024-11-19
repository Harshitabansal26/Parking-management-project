// doctorController.js
const asyncHandler = require("express-async-handler");
const DoctorDetails = require("../model/userDetailsModel");

const registerVehicle = asyncHandler(async (req, res) => {
    const { vehicle_type, vehicle_number} = req.body;

    // Validate all required fields
    if (!vehicle_type || !vehicle_number) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if the doctor already exists
    const userExists = await Details.findOne({ vehicle_number });

//    Release the vehicle
    if (userExists) {
        return res.status(400).json({ message: "Vehicle already exists" });
    }

    // Create a new vehicle entry
    const newregister = await Details.create({
        vehicle_type,
        vehicle_number
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor: newregister });
});

module.exports = { registerVehicle };
