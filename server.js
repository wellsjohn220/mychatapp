const express = require('express')

const app = express()
app.use(express.static(__dirname))

const port = process.env.PORT || 3010

var messages = [
    {name: "John", message: "Hello from Sydney"}, 
    {name: "Jane", message: "How are you"},
    {name: "Rose", message: "Nice to see you"}
]

app.get('/messages', (req, res) => {
    //res.send("Hello World from server by John")
    res.send(messages)
})

var server = app.listen(port, () => {
    console.log('Server is listening on port', port)
})

