const express = require('express')
var bodyParser = require('body-parser')
const app = express()

const port = process.env.PORT || 3010

app.use(express.static(__dirname))
app.use(bodyParser.json())

var messages = [
    {name: "John", message: "Hello from Sydney"}, 
    {name: "Rose", message: "Nice to see you"}
]

app.get('/messages', (req, res) => {
    //res.send("Hello World from server by John")
    res.send(messages)
})
app.post('/messages', (req, res) => {
    console.log(req.body)
    messages.push(req.body);
    res.sendStatus(200);
})

var server = app.listen(port, () => {
    console.log('Server is listening on port', port)
})

