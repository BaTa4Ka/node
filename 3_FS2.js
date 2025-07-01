'use strict'
const fs = require('fs').promises // Import file system module

// Async function to read file
async function readFile() {
    try {
        const data = await fs.readFile('data.txt','utf8') // Save data to the data variable after reading is finished
        console.log('Data from the file data.txt:', data) // Printing data from the data.txt file
    } catch (err) { // Error handling
        console.log('Error:',err)
    }
}

readFile() // Run function