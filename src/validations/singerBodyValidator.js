const Joi = require('joi')

const schema = Joi.object(
  {
    nickName: { type: String, required: true, minLength: 3, maxLength: 30 },
    genre: { type: String, required: true, minLength: 3, maxLength: 30 },
    nationality: { type: String, required: true, maxLength: 30 },
    age: { type: Number, required: true },
    songs: { type: String, required: true, minLength: 3, maxLength: 30 }
  }
)

module.exports = schema
