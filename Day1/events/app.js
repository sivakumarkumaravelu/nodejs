const events=require('events'); //Built in events, core module. Event JS loaded from node_modules of local user

//Level 1: Simple event
//Load event modules
//Raise event based on condition

let myEmitter=new events.EventEmitter();

myEmitter.on('greet',(msg)=>{
    console.log(msg);
})

myEmitter.emit('greet','Welcome to the Node world')

//Level 2: Even inheritance, attaching events to my instances
let util=require('util'); // util builtin module for inheritng events

let Person=function(name){
    this.name=name
}
//Event Inheritance
util.inherits(Person,events.EventEmitter);

let p1=new Person('Siva');
let p2=new Person('Kumar');
let p3=new Person('Kumaravelu');

// wireup event listeners
let people=[p1,p2,p3]
people.forEach((person)=>{
    person.on('speak',(msg)=>{
        console.log(person.name+' said '+msg)
    });
});

p1.emit('speak','Hi dudes! How r u people');
p2.emit('speak','I am fine')
p3.emit('speak','i am hungry... give me some food please')

//TODO check if we can attach with class itself instead of instance.


