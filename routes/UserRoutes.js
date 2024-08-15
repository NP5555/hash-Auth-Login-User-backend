// routes/userRoutes.js
const express = require('express');
// const { getUsers } = require('../controllers/userController');
const router = express.Router();
const { getUsers, addUser, loginUser } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);
router.post('/users/login', loginUser);

module.exports = router;
