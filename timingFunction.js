// var message =()=>alert("welcome to webpage");
// function start(){
//     setTimeout(message,2000);
// }


//anonomus function in js 
//anonomus function is a function without a name we offer to use an argument of another function
// function start(){
//     setTimeout(function(){
//         alert("welcome back");
//     },2000)
// }

//clear timeout method
// var id=0;
// var message =()=>alert("welcome to webpage");
// function start(){
//    id= setTimeout(message,5000);
// }
// function stop(){
//     clearTimeout(id);
// }

var id=0;
var message =()=>alert("welcome to webpage");
function start(){
   id= setInterval(message,5000);
}
function stop(){
    clearTimeout(id);
}