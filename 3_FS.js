'use strict'
const fs = require('fs') // Import file system module

// Async file read
fs.readFile('data.txt', 'utf8', (err,data) => {
    // Error handling
    if (err) {
        console.log("Error:", err)
        return
    }
    console.log("Data:", data) // Printing data from the data.txt file
})