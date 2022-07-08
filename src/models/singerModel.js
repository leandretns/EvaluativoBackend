const mongoose = require('mongoose')

const { Schema } = mongoose

const singerModel = new Schema(
  {
    nickName: { type: String, required: true, minLength: 3, maxLength: 30 },
    genre: { type: String, required: true, minLength: 3, maxLength: 30 },
    nationality: { type: String, required: true, maxLength: 30 },
    age: { type: Number, required: true },
    songs: { type: String, required: true, minLength: 3, maxLength: 30 }
  }
)

module.exports = mongoose.model('Singer', singerModel)
