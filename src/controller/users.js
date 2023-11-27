const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers()

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

const createNewUser = async (req, res) => {
  console.log(req.body)
  const { body } = req
  try {
    await UsersModel.createNewUser(body)

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
  try {
    await UsersModel.updateUser(body, id)

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

  try {
    await UsersModel.deleteUser(id)
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
  createNewUser,
  updateUser,
  deleteUser
}
