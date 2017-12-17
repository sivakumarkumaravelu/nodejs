const net = require('net');
let sockets = [];
let port = 8000;
let guestId = 0;

//This create server will create a listener.
var server = net.createServer((socket)=>{
    //Increment
    guestId++;
    socket.nickname = 'Guest' + guestId;
    var clientName = socket.nickname;
    sockets.push(socket);

    //Log it to the server output
    console.log(clientName+' joined this chat');

    //Welcome user to the socket.
    socket.write('Welcome to telnet chat!\n');

    //Broad cast to others excluding this socket
    broadcast(clientName, clientName+'joined this chat\n');

    socket.on('data', (data)=>{
        var message = clientName + '>' +data.toString();
        broadcast(clientName, message);

        //Log it to the server output
        process.stdout.write(message);
    });

    //When client leaves
    socket.on('end', ()=>{
        var message = clientName+' left this chat\n';
        proces.stdout.write(message);
        //Remove client from socket array
        removeSocket(socket);
        //Notify all clients
        broadcast(clientName, message);
    });

    //When socket gets errors
    socket.on('error', (error)=>{
        console.log('Socket got problems: ', error.message);
    });

     //Broadcast to others, excluding the senders.
     function broadcast(from, message){
        //If there are no sockets, then dont broad cast any messages
        if(socket.length===0){
            process.stdout.write('Everyone has left the chat');
            return;
        }

        sockets.forEach((socket,index,array)=>{
            //Dont send any messages to the sender
            if(socket.nickname===from) return;
            socket.write(message);
        });    
    }

 //Remove disconnected client from sockets array

 function removeSocket(socket){
    sockets.splice(sockets.indexOf(socket),1);
}

});


//Listening for any problems with the server
server.on('error', (error)=>{
    console.log('So we got problems!', error.message)

});

//Listen for a port to telnet to
//then in the terminal just run telnet localhost 8080
server.listen(port,()=>{
    console.log("Server listening at "+port)
});