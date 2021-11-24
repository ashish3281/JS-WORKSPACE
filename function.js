function add(a,b){
    var c=a+b;
    console.log("the addition value is",c)
}
add(5,7);
add(5,10);
add(1,2);

function substract(a,b){
    var c=a-b;
    console.log("the substraction value is",c)
}
substract(5,7);
substract(10,6);
substract(6,2);

function multiply(count,price){
    var total =count*price;
    return total;
   //after return no code exectue
}
var total =multiply(2,7);
console.log("cart price is",total);

//regular function
function mul1(a){
      return a*10;
}
var a=mul1(5)
console.log("output is",a)
//arrow function
var givemul1=(a)=>{
    return a*10;
}
console.log("2nd output",givemul1(2))

// console.log("2nd output",aa(2))
// var aa=(a)=>{
//     return a*10;
// }
//give an error aa is not a function
//to solve this problem


// var a=mul1(5)
// console.log("output is",a)
// function mul1(a){
//     return a*10;
// }
//not give an error

//expression function
// console.log("output is",mul20(4))
// var mul20 = function(a){
//     return a*10;
// }
// mul20();


function name(params){
    var ss="asd"
    console.log("function is called");
}
function name1(){
    var dd="asdf"
    console.log("function is called");
}
console.log("function is called");
if(2==2){
    var block =67;
}
console.log("value of block is ",block);
