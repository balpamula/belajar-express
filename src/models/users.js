const dbPool = require('../config/database')

const getAllUsers = () => {
  const query = 'SELECT * FROM users'

  return dbPool.execute(query)
}

const createNewUser = (body) => {
  const query = `INSERT INTO users (name, email, address) 
                 VALUES ('${body.name}', '${body.email}', '${body.address}')`

  return dbPool.execute(query)
}

const updateUser = (body, id) => {
  const query = `UPDATE users 
                 SET name='${body.name}', email='${body.email}', address='${body.address}' 
                 WHERE id=${id}`

  return dbPool.execute(query)
}

const deleteUser = (id) => {
  const query = `DELETE FROM users WHERE id=${id}`

  return dbPool.execute(query)
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}
