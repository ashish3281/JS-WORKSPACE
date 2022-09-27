// function f1(){
//     console.log("hell")

//     f1();
//     Syntx error


// function f2(){
//     console.log("sdf");
// }
// f1();//reference error because here we make f2 function and at calling time we call wrong function name

// function makeOrder(){
//     console.log("here is your black cofee, enjoy your day")
// }
// try{
//     makeOrder();
//     processorder();//error there is no process order function
// }catch(error){
//     console.log("sorry an error occured in your code");
// }


// function makeOrder(){
//     console.log("here is your black cofee, enjoy your day")
// }
// try{
//     makeOrder();
//     processorder();//error there is no process order function
// }catch(error){
//     console.log("sorry an error occured in your code");
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }

//finaly 
// function makeOrder(){
//         console.log("here is your black cofee, enjoy your day")
//     }
//     try{
//         makeOrder();
//         processorder();//error there is no process order function
//     }catch(error){
//         console.log("sorry an error occured in your code");
//     }
//     finally{
//         console.log("this block will execute .No matter what!")
//     }

//through keyword
var a=9;
if(a<10){
    throw new Error("this is a customisable error");
}
else{
    console.log("working fine");
    
}