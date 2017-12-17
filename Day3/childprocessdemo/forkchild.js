//Event raised when master sends data to child
process.on('message',(msg)=>{
    console.log('Parent said :'+msg);

    //Do complex logic here.
    for (let i = 0; i < 1000000; i++) {
        var j = j+30000;
    }

    process.send("Process request...Send bulk mails to 10000 customers")
    process.disconnect();

});

