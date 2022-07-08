const express = require('express')
const singerController = require('../controllers/singerController')
const validator = require('express-joi-validation').createValidator({})
const bodySchema = require('../validations/singerBodyValidator')

const router = (Singer) => {
  const singerRouter = express.Router()

  const { getAllSinger, getSingerById, postSinger, putSingerById, deleteSingerById } = singerController(Singer)

  singerRouter
    .route('/singer')
    .get(getAllSinger)
    .post(validator.body(bodySchema), postSinger)

  singerRouter
    .route('/singer/:id')
    .get(getSingerById)
    .put(validator.body(bodySchema), putSingerById)
    .delete(deleteSingerById)

  return singerRouter
}
module.exports = router
