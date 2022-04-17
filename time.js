console.log("1")
console.log("2")
setTimeout(()=>{
    console.log("3")
},2000)
//set interval is used to print the repeat 1000 time 
// var a=setInterval(()=>{
//     console.log("repeat")
// },1000)
// clearInterval(a);
//control+c is used to end the code
var interval=setInterval(()=>{
    console.log("repeat")
},500)
setTimeout(function(){
    console.log("4")
    clearInterval(interval);
},3000)