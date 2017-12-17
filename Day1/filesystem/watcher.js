const fs = require('fs'); 
fs.watch('points.txt', 
	(event)=> { 
		console.log(`File 'points.txt' just changed! with event- ${event}`);
	 }); 

console.log("Now watching target.txt for changes...");
