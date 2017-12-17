console.log("Welcome to Sapient!")
global.company='Siva Infotech';
global.console.log('Welcome to '+company);

console.log(__dirname + '-' + __filename);

//Fat arrow operator

global.setTimeout(() => {
    console.log('Hi! Siva', 2000)
}, 2000);

//Template Literal in ES6

console.log(`Welcome to ${company}`);

// node globaldemo.js