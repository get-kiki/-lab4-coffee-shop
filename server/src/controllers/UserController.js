const { User } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  // ===============================
  // get all users
  // ===============================
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The users information was incorrect'
      })
    }
  },

  // ===============================
  // create user (ADMIN)
  // ===============================
  async create (req, res) {
    try {
      // 👉 ถ้า admin สร้าง user ใหม่
      // 👉 ให้ hash password ด้วย (เพื่อความปลอดภัย)
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10)
      }

      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: err.message
      })
    }
  },

  // ===============================
  // update user
  // ===============================
  async put (req, res) {
    try {
      // 👉 ถ้ามีการแก้ password
      if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10)
      }

      await User.update(req.body, {
        where: {
          id: req.params.userId
        }
      })

      res.send(req.body)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'Update user incorrect'
      })
    }
  },

  // ===============================
  // delete user
  // ===============================
  async remove (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The user information was incorrect'
        })
      }

      await user.destroy()
      res.send(user)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  },

  // ===============================
  // get user by id
  // ===============================
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'The user information was incorrect'
      })
    }
  }
}
