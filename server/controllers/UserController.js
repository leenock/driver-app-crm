const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');

const saltRounds = 10;

app.use(express.json());




// Create User Endpoint
const registerUser = async (req, res) => {
    const { email, phoneNumber, city, password } = req.body;
    try {
      // Check if email already exists
      const existingUser = await prisma.User.findUnique({
        where: {
          email: email,
        },
      });
  
      if (existingUser) {
        return res.status(400).json({ msg: 'Email already exists' });
      }
      
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create the user
      const newUser = await prisma.User.create({
        data: {
          email,
          phoneNumber,
          city: {
            connectOrCreate: {
              where: { name: city },
              create: { name: city },
            },
          },
          password: hashedPassword,
        },
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  

/////////User Sign up/////////

 const createProduct = async (req, res) => {
  const { name, price } = req.body
  try {
      const product = await prisma.product.create({
          data: {
              name: name,
              price: price,
          },
      })
      res.status(201).json(product)
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}
 const getProducts = async (req, res) => {
  try {
      const response = await prisma.product.findMany()
      res.status(200).json(response)
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }
}

 const getProductById = async (req, res) => {
  try {
      const response = await prisma.product.findUnique({
          where: {
              id: Number(req.params.id),
          },
      })
      res.status(200).json(response)
  } catch (error) {
      res.status(404).json({ msg: error.message })
  }
}
module.exports = {
  registerUser,
  getProducts,
  getProductById,
  createProduct,
};