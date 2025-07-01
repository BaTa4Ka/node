'use strict'
const http = require('http') // Import http module

const PORT = 1234 // Server port

// Server setup
const server = http.createServer((req,res) => {
    console.log('Request recieved')

    res.setHeader('Content-Type', 'text/plain')

    if(req.url === '/') {
        res.end('This is node.js server')
    } else if (req.url === '/about') {
        res.end('This server made by someone')
    } else {
        res.statusCode = 404
        res.end('Not found')
    }
    
})

// Server hosting
server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`)
})

// Error handling
server.on('error', (err) => {
  console.error('Server error:', err);
});
