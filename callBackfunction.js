// function abc(call){

// }


// function one(){
//     console.log("function 1");
// }
// function two(){
//     console.log("function 2");
// }
// setTimeout(one,2000);
// two();


// function one(){
//     setTimeout(function(){
//         console.log("function 1");},3000)
//     }
// function two(){
//     console.log("function 2")
// };
// one();
// two();

// setTimeout(one,2000);
// two();

function person(friend,person2){
    setTimeout(function(){
    console.log("my friend name is"+friend);
   person2();},3000,);
}
function person2(){
    console.log("my name is ashish");
}
person("goyal",person2);
