const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now()
    const originalname = file.originalname

    cb(null, `${timestamp}-${originalname}`)
  }
})

const upload = multer({ storage })

module.exports = upload
