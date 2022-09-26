// function employee(){
//     var empid=document.getElementById("eid").value;
//   var check=/[DE]253[10-99]/
//   if((check.test(empid)))
//   {
//     alert("valid employee id")
//   }
//   else{
//     alert("Invalid employee id");
//   }
// }

//D25311  E25361

//short hand character class
// var regex=/321/
// var str1="user phone number is 9996045728";
// var output=regex.exec(str1);
// console.log(output);

// var regex=/604/
// var str1="user phone number is 9996045728";
// var output=regex.exec(str1);
// console.log(output);

// var regex=/\d604/
// var str1="user phone number is 9996045728";
// var output=regex.exec(str1);
// console.log(output);

// var regex=/\d604/
// var str1="user phone number is 9996a045728";
// var output=regex.exec(str1);
// console.log(output);//null

var regex=/\d+321/
var str1="user phone number is 9876543210";
var output=regex.exec(str1);
console.log(output);//return whole number

