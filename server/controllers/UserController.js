// hashing passwords
const bcrypt = require("bcryptjs");
//  library used for creating and verifying JSON Web Tokens (JWT).
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const {
  validateEmail,
  validatePhoneNumber,
} = require("../utils/validations/validation.js");

const prisma = new PrismaClient();
const express = require("express");
const app = express();
app.use(express.json());

//............. Login module ...........//
const loginUser = async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    // Log the request data for debugging
    console.log("Login attempt:", { phoneNumber });

    // Check if user exists
    const user = await prisma.registeruser.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ msg: "Invalid phone number" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ msg: "Invalid  password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

//......... create driver account module .........///

const registerdriver = async (req, res) => {
  const { email, phoneNumber, city, password } = req.body;
  // Validate email format
  if (!validateEmail(email)) {
    return res.status(400).json({ msg: "Invalid email format" });
  }
  // Validate phone number format
  if (!validatePhoneNumber(phoneNumber)) {
    return res.status(400).json({
      msg: "Phone number must contain only numbers and be 13 characters long",
    });
  }
  try {
    // Check if email already exists
    const existingEmail = await prisma.registeruser.findUnique({
      where: { email: email },
    });
    if (existingEmail) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    // Check if phone number already exists
    const existingPhoneNumber = await prisma.registeruser.findUnique({
      where: { phoneNumber: phoneNumber },
    });
    if (existingPhoneNumber) {
      return res.status(400).json({ msg: "Phone number already exists" });
    }
    // Generate salt
    const salt = bcrypt.genSaltSync(10);
    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create user with hashed password
    const newUser = await prisma.registeruser.create({
      data: {
        email: email,
        phoneNumber: phoneNumber,
        city: city,
        password: hashedPassword,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getuser = async (req, res) => {
  try {
    const response = await prisma.registeruser.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getuserById = async (req, res) => {
  try {
    const response = await prisma.registeruser.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = {
  loginUser,
  registerdriver,
  getuser,
  getuserById,
};
