'use strict'
const http = require('http')

const PORT = 1234

const server = http.createServer((req,res) => {
    console.log('Request recieved')
    res.end('This is node.js server')
})


server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

