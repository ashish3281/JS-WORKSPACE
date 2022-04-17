var name1="prepbytes";
console.log("name is",name1);
console.log("length is", name1.length)
console.log("char at position  ",name1[1]);
console.log("char at position",name1.charAt(1));
//static string
console.log("char at position  ","prepbytes"[1]);
console.log("char at position","prepbytes".charAt(10));
//data type
var a="num";//string
var num=2;//integer
var bool =true;//boolean
var aa=null;//null
var novalue;
console.log("value of novalue",novalue);


//shadow
let number=10;
number *=2;
console.log(number)

function displayDouble(){
let number1=3;
number1 *=2;
console.log(number1);
}
displayDouble();

//concatenate
var one=10;
var two=20;
console.log("c is ",c=one+two);

var a="first_name";
var b="second_name";
console.log("conat result is",a+b);
console.log("hello")


//ascii table --a=97,b=98  according to table
var string1='a';
var string2='b';
if(string1>string2){
    console.log("a is greater than b")
}
else if(string1<string2){
    console.log("b is greater than a")
}
else{
    console.log("error")
}

//charcter by charcter compare(a=a,a<b string 2 is greaTER not go to third)
var string1='aaz';
var string2='abb';
if(string1>string2){
    console.log("1 is greater than 2")
}
else if(string1<string2){
    console.log("2 is greater than 1")
}
else{
    console.log("error")
}

var string1='a';
var string2='ab';
if(string1>string2){
    console.log("1 is greater than 2")
}
else if(string1<string2){
    console.log("2 is greater than 1")
}
else{
    console.log("error")
}

// var x="ahgjh"
// var y="ss"
// var x=name1.replace()