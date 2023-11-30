const dbPool = require('../config/database')

const getAllUsers = () => {
  const query = 'SELECT * FROM users'

  return dbPool.execute(query)
}

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?'
  return dbPool.execute(query, [id])
}

const createNewUser = (body) => {
  const query = `INSERT INTO users (name, email, address) 
                 VALUES (?, ?, ?)`
  const bodyData = [body.name, body.email, body.address]

  return dbPool.execute(query, bodyData)
}

const updateUser = (body, id) => {
  const query = `UPDATE users 
                 SET name=?, email=?, address=? 
                 WHERE id=?`
  const bodyData = [body.name, body.email, body.address, id]

  return dbPool.execute(query, bodyData)
}

const deleteUser = (id) => {
  const query = `DELETE FROM users WHERE id=${id}`

  return dbPool.execute(query)
}

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser
}
