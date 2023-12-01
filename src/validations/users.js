const { body, validationResult } = require('express-validator')
const usersModel = require('../models/users')

const userValidator = [
  body('name')
    .notEmpty().withMessage('Nama tidak boleh kosong'),
  body('email')
    .notEmpty().withMessage('Email tidak boleh kosong')
    .isEmail().withMessage('Email tidak valid')
    .custom(async value => {
      const [data] = await usersModel.findEmail(value)
      if (data != '') {
        throw new Error('Email is already used')
      }
    }),
  body('password')
    .notEmpty().withMessage('Password tidak boleh kosong')
    .isLength({ min: 8 }).withMessage('Password minimal harus 8 karakter')
]

const runValidaton = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Bad Request',
      errors: errors.array()
    //   .map(error => error.msg)
    })
  }
  next()
}

module.exports = {
  userValidator,
  runValidaton
}
