let express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.send('Hello Node.js Server!')
});

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
});

// get user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
})
// get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งาน')
})
// get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})
let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});