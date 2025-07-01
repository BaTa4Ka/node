'use strict'
const arg = process.argv[2] // Storing cli argument as variable

// Handling abscence of argument
if(!arg) { 
    console.log('Please provide an argument')
    process.exit(1)
}

console.log("Comand line argument is:", arg) // Printing message with stored argument 