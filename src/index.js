require('dotenv').config()
const PORT = process.env.PORT || 5000
const HOST = 'localhost'

const express = require('express')

const usersRoutes = require('./routes/users.js')
const middlewareLogRequest = require('./middleware/logs.js')
const upload = require('./middleware/multer.js')

const app = express()

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`)
})

app.use(middlewareLogRequest)
app.use(express.json())
app.use('/assets', express.static('public/images'))

app.post('/upload', upload.single('images'), (req, res) => {
  res.status(200).json({
    message: 'Upload success'
  })
})

app.use('/users', usersRoutes)
