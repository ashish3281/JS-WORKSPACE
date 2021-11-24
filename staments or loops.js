var a=2;
var b=3;
if(a==2 || b==5){
    console.log("in if statement");
}
if(a==5){
    console.log("a is equal");
}
else{
    console.log("a is not equal");
}
if(a==5){
    console.log("a is equal");
}
else if(b==4){
    console.log("a is not equal");
}
else{
    console.log("no match");
}
var a=5;
console.log("ternary operator",a==5?"yes":"no");
//condition? value1:value2 (terneray operator)
var commaop =(2,3,4)
console.log("comma",commaop);
var comma1 =(a++,a)
console.log("comma",comma1)
//a=5,a++ =5,a=6
var month="feb";
switch(month){
    case "jan": console.log("month is jan");
        airmonth =1;
        break;
    case "feb":
            console.log("month is feb");
            break;
    case "march":
                console.log("month is march");
                break;
    default : console.log("default console");
        break;
}
for(let i=0;i<6;i++){
    console.log("iteration number",i);     
}
var arr=[1,2,3,4]
for(var i in arr){
    console.log("array",i);
}
for(let i=8;i>0;i--){
    for(let j=1;j<2;j++){
    console.log("iteration number i",i);
    console.log("iteration number j",j);     
}
}
var name1= ["web development", "mobile application" ,"teach markiting"];
for(let i of name1){
    console.log("array value is ",i);
}
for(let i in name1){
    console.log("array value is ",i);
}
// for in use read index keys
// for of use to read value
function fetchData(){
    console.log("data fetched");
}
fetchData();
function add(a,b){
    var c=a+b;
    console.log("add is ",c);
}
add(2,3);
function priceCalculator(no,price){
    console.log("total bill",no*price);
}
priceCalculator(5,59);
var i,j;
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        console.log("*");
    }
    console.log("<br/>")
}
var j=1;
while(j<10){
    console.log("j value is ",j)
    j++;
}
var k=15;
while(k>0){
    console.log("k variable",k);
    k=k-3;
}
//var d=5
//while(d<0){
//    console.log("d is variable",d);
//}
var d=5;
do{
    console.log("initial iteration");
    d--;
}while(d<0)

for(let i=0;i<10;i++){
    if (i==3){continue;}
    console.log("i is",i);
}

var arr=[];
var isExit=false;
console.log("old isExit",isExit)
for(let i=0;i<10;i++){
    if(i===3){
        isExit =true;
        break;
    }
}
console.log("updated isExit",isExit)
