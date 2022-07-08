const bcrypt = require('bcrypt')
const httpStatus = require('../helpers/httpStatus')

const singerController = (Singer) => {
  const getAllSinger = async (req, res, next) => {
    try {
      const { query } = req

      const response = await Singer.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postSinger = async (req, res, next) => {
    try {
      const { body } = req

      const encryptedPassword = await bcrypt.hash(body.password, 10)

      const encryptedData = {
        ...body,
        password: encryptedPassword
      }

      const singer = await new Singer(encryptedData)

      await singer.save()

      return res.status(httpStatus.CREATED).json(singer)
    } catch (err) {
      next(err)
    }
  }

  const putSingerById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Singer.find({
        _id: params.id
      })

      if (checkData === null) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send('No data found with the provided ID.')
      }

      const encryptedPassword = await bcrypt.hash(body.password, 10)

      await Singer.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            password: encryptedPassword,
            email: body.email,
            address: body.address,
            phone: body.phone
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getSingerById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await Singer.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteSingerById = async (req, res, next) => {
    try {
      const { params } = req

      await Singer.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllSinger,
    getSingerById,
    postSinger,
    putSingerById,
    deleteSingerById
  }
}

module.exports = singerController
