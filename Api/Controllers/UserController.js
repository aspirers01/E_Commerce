const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const Order = require("../Model/Order");
const Product = require("../Model/Product");
const crypto = require("crypto");
const nodeMailer = require("nodemailer");
// Send verification email

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please fill all the fields" });
    }
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    // Check if password is correct

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    user.password = undefined;
    return res.status(200).send({
      success: true,
      message: "Login successful",
      user: user,
      token: token,
    });
  } catch (err) {
    console.error(`Error: ${err.message}`.bgRed.white);
    return res
      .status(500)
      .send({ success: false, message: "Server error", error: err.message });
  }
};

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ sucess: false, message: "Please fill all the fields" });
    }

    // Check if user already exists
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res.status(400).json({ message: "User email already exists" });
    }
    // Create new user
    const user = new User({ name, email, password });
    // Save user
    await user.save();
    return res
      .status(200)
      .send({ success: true, message: "registration succesfull please login" });
  } catch (err) {
    console.log("error getting during register", err);
    res
      .status(500)
      .json({ message: "Internal server error registration failed " });
  }
};

module.exports = { registerController, loginController };
