const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();
app.use(express.json());

const registerdriver = async (req, res) => {
  const { email, phoneNumber, city, password } = req.body;
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Invalid email format" });
  }
  // Validate phone number format (numbers only and 13 characters long)
  const phoneRegex = /^\d{13}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res
      .status(400)
      .json({
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
  registerdriver,
  getuser,
  getuserById,
};
