//Readable stream - allow node js to read data from a stream
//Writable Streat - allows node js to write data to a strem
//Duplex - can read and write to a stream

const http=require('http')
const fs=require('fs')

//Level 1: Readable streams

let myReadStream = fs.createReadStream(__dirname+'/bigdata.txt');

//To see actual data add utf8 and run
//let myReadStream = fs.createReadStream(__dirname+'/bigdata.txt','utf8');

myReadStream.on('data', (chunk)=>{
    console.log('New chunk received!');
    console.log(chunk);
    //run above code node stream.js and observe chunk is received with data.
})

myReadStream.on('end', ()=>{console.log('End of streaming!')})
myReadStream.on('close',()=>{console.log('Closing the stream!')})

//Level 2: Writable streams
let myReadStream=fs.createReadStream(__dirname+'/bigdata.txt','utf8');
let myWriteStream=fs.createWriteStream(__dirname+'/WriteMe.txt');

myReadStream.on('data',(chunk)=>{
    console.log('New chunk received!');
    myWriteStream.write(chunk);
})