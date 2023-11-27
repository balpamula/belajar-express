const express = require('express')

const UserController = require('../controller/users.js')

const router = express.Router()

router.get('/', UserController.getAllUsers)

// CREATE - POST
router.post('/', UserController.createNewUser)

// UPDATE - PATCH
router.patch('/:id', UserController.updateUser)

// DELETE - DELETE
router.delete('/:id', UserController.deleteUser)

module.exports = router
