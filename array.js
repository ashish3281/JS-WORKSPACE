const car=["saab","volvo","bmw"];

const person=[];
person[0]="name";
person[1]="lastname";
person[2]="branch";
person[3]="number";
console.log(person);
console.log(typeof(person));
console.log(person.length);
person.push("eyecolor");
console.log(person);
person[person.length]="roll";
console.log(person);
//difference between array and a object
//array use numbered index
//object use named index person["name"]="ashish"
console.log(person.toString());//convert array to a string
console.log(person.join("*"));//join element into a string
person.pop();
console.log(person);
person.shift();//remove first element
console.log(person);
person.unshift("name");//add element at zero index
person[0]="ashish";

const arr1=["ashsih","goyal"];
const arr2=["123132","cst"];
const arr3=["black","206010"];
console.log(arr1.concat(arr2,arr3));
//splice(position where new element add,how many element removed, new element to be add)
//slice(start,end-1)
console.log(person.sort());
console.log(Math.max(23,45,22));
const arr5=["12","33","656"];
console.log(Math.min(arr5));//nan
console.log(Math.min(23,45,67));
 xy=[20,1,2,3,8,10,4,5,6]
xy.sort(
    function(a,b){
        return a-b;
    }
)
console.log(xy);
ab=[9,1,2,3,8,0,4,5,6];
console.log(ab.sort());
// it give wrong answer when you put two digit number
var x=[122,2,4353,5,35,4,3,53,6]
x.sort()
console.log(x)
x.shift()
console.log(x);
let txt="";
function myfunction(value,index,array){
    txt +=value +" ";
}


const number=[45,3,4,16,25];
number.forEach(myfunction);
console.log(number);
const number2=number.map(multiply);
function multiply(value,index,array){
    return value*2;
}
console.log(number2);

let sum=number.reduce(totalsum);
function totalsum(total,value,index,array){
    return total+value;
}
console.log(sum);

let ollover18=number.every(age);
function age(value,index,array){
    return value>18;
}
 let z=number.indexOf(45) +1;
 console.log(z);

 const numbers=[4,9,16,25,29];
 let first=numbers.find(element);
 function element(value,index,array){
    return value>18;
 }
 console.log(first);

 const numbers1=[4,9,16,25,29];
 let firstindex=numbers1.findIndex(element1);
 function element1(value,index,array){
    return value>18;
 }
 console.log(firstindex);