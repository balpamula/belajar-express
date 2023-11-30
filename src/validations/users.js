const { body, validationResult } = require('express-validator')

const userValidator = [
  body('name')
    .notEmpty()
    .withMessage('Nama tidak boleh kosong'),
  body('email')
    .notEmpty()
    .withMessage('Email tidak boleh kosong')
    .isEmail()
    .withMessage('Email tidak valid'),
  body('address')
    .notEmpty()
    .withMessage('Alamat tidak boleh kosong')
]

const runValidaton = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Bad Request',
      errors: errors.array().map(error => error.msg)
    })
  }
  next()
}

module.exports = {
  userValidator,
  runValidaton
}
