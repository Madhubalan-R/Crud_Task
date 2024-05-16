
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/getalluser', UserController.getAllUsers);
router.get('/getuserid', UserController.getUserById);
router.post('/createuser', UserController.createUser);
router.put('/update', UserController.updateUser);
router.delete('/delete', UserController.deleteUser);

module.exports = router;
