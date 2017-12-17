var net = require('net');

var client = new net.Socket();
client.connect(8000, '127.0.0.1', ()=>{
    console.log('Connected')
    client.write('Hello, server! I am Sivakumar \n');
});

process.stdin.setEncoding('utf8');

console.log("Type your text and press enter to terminate line (Cntrl+ C to stop):");

client.on('data',(data)=>{
    console.log('Received: '+data)
})

process.stdin.on('readable',()=>{
    var chunk = process.stdin.read();
    if(chunk!=null){
        client.write(chunk);
    }
})

client.on('close',()=>{
    console.log('client closed')
})