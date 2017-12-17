const fs = require('fs')

//Level 1: Read and write files. This is synchronous
//blocking code with file
/*
let readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt',readMe);
*/

//error - rejected state, data - resolved state
/*fs.readFile('readMe.txt','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }
    //write now
    fs.writeFile('writeMe.txt',data,()=>console.log('Done writing'));
    //delete file
    fs.unlink('writeMe.txt',(err)=>{
        if(err){
            console.log(err);
            console.log("file is deleted")
        }
    })
})
console.log('doing some work...')
*/
//Level 2: Creating and Removing directories

fs.mkdir('test',()=>{
    fs.readFile('readMe.txt','utf8',(err,data)=>{
        fs.writeFile('./test/writeMe.txt',data,(err)=>{
            if(err)  console.log(err);
            console.log('Done writing into file')
        })
    })
})

//remove the directory
fs.unlink('./test/writeMe.txt',()=>{
    fs.rmdir('test',()=>{console.log('Directory is removed')})
})