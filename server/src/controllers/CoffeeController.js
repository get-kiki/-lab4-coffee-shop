const { Coffee } = require('../models')

module.exports = {

  // ===============================
  // ดึงรายการกาแฟทั้งหมด
  // ===============================
  async index (req, res) {
    try {
      const coffees = await Coffee.findAll()
      res.send(coffees)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ===============================
  // ดูรายละเอียดกาแฟ
  // ===============================
  async show (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      res.send(coffee)
    } catch (err) {
      res.status(500).send(err)
    }
  },

  // ===============================
  // เพิ่มเมนูกาแฟใหม่ (รองรับ image)
  // ===============================
  async create (req, res) {
    try {
      const {
        name,
        price,
        type,
        status,
        description,
        image   // ✅ เพิ่มรับ image
      } = req.body

      const coffee = await Coffee.create({
        name,
        price,
        type,
        status,
        description,
        image: image || null  // ✅ บันทึก image ถ้ามี
      })

      res.send(coffee)
    } catch (err) {
      res.status(400).send(err)
    }
  },

  // ===============================
  // แก้ไขข้อมูลกาแฟ (รองรับ image)
  // ===============================
  async update (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      const {
        name,
        price,
        type,
        status,
        description,
        image   // ✅ เพิ่มรับ image
      } = req.body

      await coffee.update({
        name,
        price,
        type,
        status,
        description,
        image: image || coffee.image  // ✅ ถ้าไม่อัปโหลดใหม่ ใช้รูปเดิม
      })

      res.send({ message: 'Coffee updated successfully' })
    } catch (err) {
      res.status(400).send(err)
    }
  },

  // ===============================
  // ลบเมนูกาแฟ
  // ===============================
  async delete (req, res) {
    try {
      const coffee = await Coffee.findByPk(req.params.coffeeId)

      if (!coffee) {
        return res.status(404).send({ message: 'Coffee not found' })
      }

      await coffee.destroy()

      res.send({ message: 'Coffee deleted successfully' })
    } catch (err) {
      res.status(400).send(err)
    }
  }

}
