console.log(Boolean(10>8));
//all true value
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-14));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(100+1+3.14));
//all false value
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
let x;
console.log(Boolean(x));
console.log(Boolean(null));
let y=false;
console.log(Boolean(y));
let z=10/"hello"//nan
console.log(Boolean(z));
let voteable=(age<18)? "too young":"old enough";
var age=67;
console.log(voteable);