// backend/server.js
const express = require('express')
const cors = require('cors')

// load environment variables from .env files
require("dotenv").config();

// declare the express app
const app = express()
// setting the port 
const port = process.env.APP_PORT || 4000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('connection established!!')
})
// listening for request
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})