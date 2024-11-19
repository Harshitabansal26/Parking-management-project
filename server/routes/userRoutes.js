const express = require("express");
const router = express.Router();
const { jwtAuthMiddleware } = require("../middleware/jwtMiddleware");

// import  {jwtAuthMiddleware} from "../middleware/jwtMiddleware";

const {
    registerUser,
    loginUser,
    getUsers,
    getUserById
} = require("../controllers/userController");

router.post("/", registerUser); 

router.post("/login",jwtAuthMiddleware, loginUser); 

router.get("/", getUsers); 

router.get("/:id", getUserById); 

module.exports = router;