
//function expression is first order
//function ko variable me assign kerte ho is called first order function//
const foo=function(){
    console.log("foobar")
}
foo();//invoke

function returnHello(){
    return "Hello,";
}
 function greeting(helloMessage,name){
     console.log(helloMessage(),name);
 }
 greeting(returnHello,"ashish");

function hey(){
    return "how are you ?";
}
function answer(firstFunction,reply){
    console.log(firstFunction()+reply);
}
answer(hey,"fine");
//hey is my callback function



//high order function
//a function that return a function

function sayHello(){
    return function(){
        console.log("hello!");
    }
}
sayHello()();

const Hello =function(){
    return function(){
        console.log("hello");
    }
}
const myfunc =Hello();

myfunc();
