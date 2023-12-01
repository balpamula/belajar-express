const usersModel = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers()

    res.status(200).json({
      message: 'GET All Users success',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

const getUserByID = async (req, res) => {
  const { id } = req.params
  const [data] = await usersModel.getUserById(id)

  if (data == '') {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  try {
    res.status(200).json({
      message: 'Data retrieved successfully',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

const createNewUser = async (req, res) => {
  console.log(req.body)
  const { body } = req

  try {
    await usersModel.createNewUser(body)

    res.status(201).json({
      message: 'Create New User success',
      data: req.body
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { body } = req
  const [data] = await usersModel.getUserById(id)

  if (data == '') {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  try {
    await usersModel.updateUser(body, id)

    res.status(200).json({
      message: 'Update User success',
      data: {
        id,
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const [data] = await usersModel.getUserById(id)

  if (data == '') {
    return res.status(404).json({
      message: 'User not found'
    })
  }

  try {
    await usersModel.deleteUser(id)
    res.status(200).json({
      message: 'Delete User success'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error
    })
  }
}

module.exports = {
  getAllUsers,
  getUserByID,
  createNewUser,
  updateUser,
  deleteUser
}
