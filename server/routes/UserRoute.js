const express = require('express');
const {loginUser , registerdriver,getuser,getuserById } = require('../controllers/UserController');

const router = express.Router();

router.post('/login', loginUser);
router.get('/drivers', getuser);
router.get('/drivers/:id', getuserById);
router.post('/drivers', registerdriver);


module.exports = router;
