// //operator
// var x=6;
// var y=8;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

// var z=5;
// console.log("increment",++z);
// console.log("decrement",--z);
 
// //assigment operator
// var a=10;
// var b=5;
// var c=a;
// console.log(c);
// //string operator
// var string1="ashish";
// var string2="goyal";
// console.log(string1+" "+string2);
// var string3="welcome";
// string3+=" "+"welcome";
// console.log(string3);
// //we can style the html document with js
// document.getElementById("demo").style.display="block";
// var x=5;
// var y=8;
// var z=x+y;

// const price1=2;
// const price2=4;
// const Total=price1+price2;
//  let x="vivov"+1+7;
// //vivov17 
// let x=1+7+"vivo";
// let x;
// //undefined
// x=5;
// //number
// x="ashish";
// //string
// const cars=['saab','volvo'];

// let x=myfunction(4,4);
// function myfunction(a,b){
//     return a*b;
// }
// function toCelisus(fahrenheit){
//     return (5/9)*(fahrenheit-32)
// }

// const car={
//     type:"fiat",
//     model:"373",
//     color:"white"

// }
const person={
    name:"ashish",
    lastname:"goyal",
    roll:"206010",
    age:"21",
    eyeColor:"black",
    fullName:function(){
        return this.name+" "+this.lastname;
    }
}
console.log(person.name);
console.log(person.fullName());

const car={
    name:"swift",
    model:"1212",
    launch:"2022",
    fullDetail:function(){
        return this.name+" "+this.model;
    }
}
console.log(car.model);
console.log(car.fullDetail());