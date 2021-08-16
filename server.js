const express = require('express')

const app = express()
app.use(express.static(__dirname))

const port = process.env.PORT || 3010

//app.listen(3010)

//console.log('I am listening')
var server = app.listen(port, () => {
    console.log('Server is listening on port', port)
})

