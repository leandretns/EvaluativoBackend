const Joi = require('joi')

const schema = Joi.object(
  {

    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    grade: Joi.string().required(),
    divition: Joi.string().required(),
    age: Joi.number().integer().min(1).max(50).required(),
    username: Joi.string().min(6).max(16).required(),
    password: Joi.string().required()
  }
)

module.exports = schema
