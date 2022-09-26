 //meta character in js

//  let regex= /welcome/;
//  let str1= "welcome to our youtube channel and welcome back";
//  let output= regex.test(str1);
//  console.log(output);

 // output is true because you know the word you find that but if you do not know the full word so what to do
 //meta character are the character with special meaning
//  let regex= /we.come/;
//  let str1= "welcome to our youtube channel and welcome back";
//  let output= regex.exec(str1);
//  console.log(output);

// let regex= /w*e/;
// let str1= "welcome to our youtube channel and welcome back";
// let output= regex.test(str1);
// console.log(output);

//^ carrot character==this character return the whole string start with w
// let regex= /^welcome/;
// let str1= "welcome to our youtube channel and welcome back";
// let output= regex.test(str1);
// console.log(output);
//if we remove first character welcome and check it it give false because now the string start with to


// $ character ==this character check the string end with a specific word
// let regex= /welcome$/;
// let str1= "welcome to our youtube channel and welcome back";
// let output= regex.test(str1);
// console.log(output);//false

//? these character are optional but we can not put another word optional cahracter is ce
// let regex= /welc?ome?/;
// let str1= "welome to our youtube channel and back";
// let output= regex.test(str1);
// console.log(output);//true

let regex= /welc?ome?/;
let str1= "welbome to our youtube channel and back";
let output= regex.test(str1);
console.log(output);//false