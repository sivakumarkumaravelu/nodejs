const http=require('http')
const fs=require('fs')

var server=http.createServer((request,response)=>{
    console.log('Sending big file to browser with performance!')

    let myReadStrem=fs.createReadStream(__dirname+'/bigdata.txt','utf8');
    myReadStrem.pipe(response);
});

server.listen(3000,'127.0.0.1');
console.log('Webserver is running.... Use htpp://localhost:3000');
