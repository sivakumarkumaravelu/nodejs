let a = 0;
function init(){
    a =1;
}
function incr(){
    a = a+1;
}
debugger;
init();
console.log('a before: %d', a);
incr();

console.log('a after: %d', a);

for (let index = 0; index < 5; index++) {
    console.log(index);    
}