const express = require('express');
const {registerdriver,getuser,getuserById } = require('../controllers/UserController');

const router = express.Router();

router.get('/drivers', getuser);
router.get('/drivers/:id', getuserById);
router.post('/drivers', registerdriver);


module.exports = router;
