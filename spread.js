let a=[1,2,3,4,5];
let b=[6,7,8];
let c= a+b;
console.log(c)
//make a deep copy
let d=[...a,...b];
console.log(d)
b.push(12)
console.log("d is",d,b)
//search this array contain 2
// for loop
// for each 
// whilemap
// Array.find
// indexOf-position
// include
// lastindex
let f=[1,2,3]
console.log(f.includes(5))