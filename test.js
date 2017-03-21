const mytracker = require('tracker.js')

mytracker.start()

setTimeout(function() {
	mytracker.stop()
}, 2000)