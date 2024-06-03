const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require('express');
const app = express();


app.use(express.json());

const registeruser = async (req, res) => {
    const { email, phoneNumber, city, password } = req.body;
    try {
      const registeruser = await prisma.registeruser.create({
        data: {
          email: email,
          phoneNumber: phoneNumber,
          city: city,
          password: password,
        },
      });
      res.status(201).json(registeruser);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};

const getuser = async (req, res) => {
    try {
        const response = await prisma.registeruser.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
  }
  
   const getuserById = async (req, res) => {
    try {
        const response = await prisma.registeruser.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
  }

  
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
  registeruser,
  getuser,
  getuserById,
  getProducts,
  getProductById,
  createProduct,
};