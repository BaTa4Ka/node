'use strict'
const { setTimeout, setInterval, setImmediate } = require('timers') // Import timers module

let time = 10 // Initial time in seconds

// Countdown
setInterval(() => {
    time--
    console.log(time)
}, 1000)

// Exit upon finish
setTimeout(() => {
    console.log('Exiting')
    process.exit(0)
}, time*1000+500)

// Initial message
setImmediate(() => {
    console.log('This process will be exited in', time,'seconds')
    console.log(time)
})