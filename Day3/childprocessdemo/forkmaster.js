var cp = require('child_process');
var child = cp.fork(__dirname+'/forkchild.js'); //running module on child process

child.on('message', (msg)=>{
    console.log('Output from child',msg);
});

child.send('Send bulk mail to all');

child.on('error',(err)=>{
    console.log(err.code);
});

//fired when child is closed
child.on('close',()=>{
    console.log('child closed');
});