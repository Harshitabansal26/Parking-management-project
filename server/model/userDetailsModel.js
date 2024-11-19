const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
    
    vehicle_type: {
        type: Number,
        required: [true, "Please add the vehicle type"]
    },
    
    vehicle_number: {
        type: String,
        required: [true, "Please add your vehicle number"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("userDetails", userDetailsSchema);