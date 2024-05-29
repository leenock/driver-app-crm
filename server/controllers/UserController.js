const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
  getProducts,
  getProductById,
  createProduct,
};