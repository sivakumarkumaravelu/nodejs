const stuff=require('./container'); //Custom module starting with ./
console.log(stuff.greet('Siva'));
console.log(stuff.add(10,20));
console.log(stuff.PI);

//Working with Instance function

var con = new stuff.DBCon("http://localhost:master");
con.connect();

//working with closure
console.log(stuff.Utility().Square(10));