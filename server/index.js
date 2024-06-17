// backend/server.js
const express = require('express')
const cors = require('cors')
const UserRoute = require('./routes/UserRoute.js');

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
});

// Use the routes
app.use('/', UserRoute);

// listening for request
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})