const express = require('express')

const UserController = require('../controller/users.js')
const { userValidator, runValidaton } = require('../validations/users.js')

const router = express.Router()

// GET ALL
router.get('/', UserController.getAllUsers)

// GET by ID
router.get('/:id', UserController.getUserByID)

// CREATE - POST
router.post('/', userValidator, runValidaton, UserController.createNewUser)

// UPDATE - PATCH
router.patch('/:id', UserController.updateUser)

// DELETE - DELETE
router.delete('/:id', UserController.deleteUser)

module.exports = router
