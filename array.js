// var price=[1,2,3,4,5,6,7];

// price.push(10);
// console.log(price);
// var price2= ["else1","else2"]
// price2.pop();
// console.log(price2)

// var price3=[1,2,3,4]
// var price4=[5,6,7]
// var arr3 =price3.concat(price4);
// console.log(arr3)
// var joinedArray=price.join(' & ')
// console.log("joined array is",joinedArray)
// console.log("sliced arr is",price.slice(1))
// var ash = [1,2,3]
// var ash1 = [4,5,6]
// var ash2 = ash.concat(ash1);
// console.log(ash2)
// console.log("split array is",ash2.join(" "));
// a=[1,2,3,4,5,6,7]
//  b=a.slice(1,3);
// console.log(a,b);
// nos=[1,2,3,4,5,6,8,7,9]
// nos.splice(2,3)//(starting,remove three element)
// console.log("after splice is",nos)
// console.log("reverse the array",nos.reverse())
// console.log(nos)//modify original array
// console.log("aryan");
// console.log("sorted array is",nos.sort())
// var char=["a","r","b"]
// char.sort();
// console.log("sorted data is ",char)
// price2=[1,2,3,4,5,6,7,8,9];
// var spliceddata=price2.splice(3,2);
// console.log("spliced arr is ",price2);
// //splice(index,(remove/insert),count of removal,else ,else1,else2,----n)
// var splicedata=price2.splice(22,333,44,55,55)
// console.log("combine array",splicedata);
// var price3=[2,3,4,5]
// var price3=[6,7,8,9]
// price3.splice(0,5,11,12,13)
// console.log("after splice is",price3)
// price3=[2,3,4,6,7,8]
// var price6=[1,2,3,4,5,6,7,8,9,10]
// price6.splice(0,10,11,12,13,14)
// console.log("after splice is",price6);
 var chat=['f','t','a']
 chat.sort();
 console.log("sorted array is",chat)
// var chat=['fddsd','tdw','a']
// chat.sort();
// console.log("sorted array is",chat)
// xy=[20,1,2,3,8,10,4,5,6]
// xy.sort(
//     function(a,b){
//         return a-b;
//     }
// )
// xy.sort((a,b)=>a-b)//arrow function
// console.log("value is",xy)


var nos=[1,2,3,4];
nos.sort(
   function(a){
       return a*a;
   } )
   console.log(nos);
var a=[1,2,3,4,5,6,7,8]
// var b=[9,10]
// var c=a.concat(b)
// console.log(c)
// var d=[1,2,3,4,5,6]
//  var f=d.slice(1,3)
// console.log(f)
// var k="ashish"
// var j=k.slice(2,3)
// console.log(j)
// var x=[1,2,3,4,5,6,7,8,9]
// var y=x.splice(2,4)
// console.log(y)
// price2=[1,2,3,4,5,6,7,8,9];
// var splicedata=price2.splice(3,2);
// console.log(splicedata)
// var x=[1,2,3,4]
// x.splice(0,2)
// console.log(x)
// price2=[1,2,3,4,5,6,7,8,9];
// price2.splice(3,2);
//  console.log(price2)
//input{1,2,3,4,}
//output[5,6,7,8,9
// var x=[1,2,3,4]
// x.splice(0,3,5,6,7,8)
// console.log(x)
var x=[122,2,4353,5,35,4,3,53,6]
x.sort()
console.log(x)
x.shift()
console.log(x)