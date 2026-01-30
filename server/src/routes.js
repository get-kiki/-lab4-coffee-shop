// src/routes.js

const CoffeeController = require('./controllers/CoffeeController')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {

    // ===============================
    // Users Routes
    // ===============================
    app.get('/users', UserController.index)   // ดูผู้ใช้ทั้งหมด
    app.get('/user/:userId', UserController.show) // ดูผู้ใช้รายคน
    app.post('/user', UserController.create)  // เพิ่มผู้ใช้
    app.put('/user/:userId', UserController.put) // แก้ไขผู้ใช้
    app.delete('/user/:userId', UserController.remove) // ลบผู้ใช้


    // ===============================
    // Coffee Routes
    // ===============================
    app.get('/coffees', CoffeeController.index)        // ดูเมนูทั้งหมด
    app.post('/coffee', CoffeeController.create)       // เพิ่มเมนู
    app.put('/coffee/:coffeeId', CoffeeController.put) // แก้ไขเมนู
    app.delete('/coffee/:coffeeId', CoffeeController.remove) // ลบเมนู
    app.get('/coffee/:coffeeId', CoffeeController.show) // ดูเมนูรายตัว

    // ===============================
    // login Routes
    // ===============================
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
}
