//directly input function
(function print(){
    console.log("this is demo function");
})()
//call by function--the function which is passed an argument
//high order function--function k ander function  as argument call ho
function call(params){
    console.log("hello")

}
function high(b,name){
    console.log(b()+name)
}
high(call,ashish)