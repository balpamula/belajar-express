require('dotenv').config()
const PORT = process.env.PORT || 5000
const HOST = 'localhost'

const express = require('express')

const usersRoutes = require('./routes/users.js')
const middlewareLogRequest = require('./middleware/logs.js')

const app = express()

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`)
})

app.use(middlewareLogRequest)
app.use(express.json())

app.use('/users', usersRoutes)
