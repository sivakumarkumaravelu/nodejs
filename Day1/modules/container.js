var greet = function(msg){
    return "Hi "+msg;
}

var add=function(x,y){
    return `x+y=${x+y}`;
}

const PI=3.142

/* Level 1
//bad practise
module.exports=greet;
module.exports=add;
module.exports=PI;
*/

module.exports={
    greet:greet,
    add:add,
    PI:PI
}

/* Level 2 */
//instance function.

function DBUtil(constr) {
    this.constr=constr;
    this.connect=()=>{
        console.log(`Connected to database with ${this.constr}`);
    }
}

//Closure - Private scope only. returned properties or methods are only accessible. Utility functions.
const Util=((args)=>{
    var Square=(x)=>{
        Log(`${x} is passed to square`);
        return  x*x;
    }
    var Log=(msg)=>{
        console.log(msg)
    }
    return {
        Square:Square,
    }
})

module.exports={
    greet:greet,
    add:add,
    PI,PI,
    DBCon:DBUtil,
    Utility:Util
}