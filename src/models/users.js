const dbPool = require('../config/database')
const bcrypt = require('bcrypt')

const getAllUsers = () => {
  const query = 'SELECT * FROM users'

  return dbPool.execute(query)
}

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id=?'
  return dbPool.execute(query, [id])
}

const findEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email=?'
  return dbPool.execute(query, [email])
}

const createNewUser = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, 10)
  const query = `INSERT INTO users (name, email, password) 
                 VALUES (?, ?, ?)`
  const bodyData = [body.name, body.email, hashedPassword]

  return dbPool.execute(query, bodyData)
}

const updateUser = (body, id) => {
  const query = `UPDATE users 
                 SET name=?, email=?, password=? 
                 WHERE id=?`
  const bodyData = [body.name, body.email, body.password, id]

  return dbPool.execute(query, bodyData)
}

const deleteUser = (id) => {
  const query = `DELETE FROM users WHERE id=${id}`

  return dbPool.execute(query)
}

module.exports = {
  getAllUsers,
  getUserById,
  findEmail,
  createNewUser,
  updateUser,
  deleteUser
}
