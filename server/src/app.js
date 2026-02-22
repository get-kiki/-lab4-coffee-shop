const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')   // ✅ เพิ่ม

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ===============================
// เปิด Static Folder (แก้ให้ถูก path)
// ===============================
app.use(
  '/assets',
  express.static(path.join(__dirname, '../public'))
)

require('./routes')(app)

require('./userPassport')

const config = require('./config/config')

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`)
})
