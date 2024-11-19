const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");
const multer = require('multer');
const { GridFsStorage } = require("multer-gridfs-storage");
// const upload = multer({ dest : 'uploads/'})
const mongoose = require("mongoose");
const doctorsDetails = require("./routes/doctorDetails");
const Profie = require("./model/Profile")
const app = express();
app.use(express.static("public"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const users = [
    { name: "fsadsh", age: 20 },
    { name: "fasd", age: 19 },
    { name: "gsh", age: 20 },
];

const port = 3000 || 5000;
const dotenv = require("dotenv");
dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("working");
})
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.get("/home", (req, res) => {
    res.render("home", {
        username: " Upload your files here",
        posts: " time pass"
    })
})
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users,
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

//   const upload = multer({ storage: storage })
const upload = multer({ storage: storage });
app.post("/profile", upload.single("avatar"), async function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    let { title } = req.body;
    let { path } = req.file;
    let newProfie = new Profie({ title: title, image: path });
    await newProfie.save();
    res.render("profile", { image: path });
});
app.get("/profile", async (req, res) => {
    let allblog = await Profie.find();
    res.render("profile", { profile: allblog })
})

//register route
app.use("/api/register", require("./routes/userRoutes"));
app.use("/api/doctors", doctorsDetails);
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})