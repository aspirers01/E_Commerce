const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use("/api/v1/auth", require("./Routes/UserRoutes"));
app.use("/api/v1/address", require("./Routes/AddressRoutes"));
app.use("/api/v1/product", require("./Routes/ProductRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow);
});
