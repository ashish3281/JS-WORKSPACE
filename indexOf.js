var names=["cat","bat","mat","rat","bat"]
for( let i=0;i<names.length;i++){
if (names[i]=="bat")
console.log(i)
}
// ////////////////////////////////////////////////////////////////////
names.forEach((element,index)=>{
console.log("element",element,index)
})
///////////////////////////////////////////////////////////////////
var lengthName=names.length;
for( let i=0;i<lengthName;i++){
    console.log(names[i])
}
////////////////////////////////////////////////////////////////////
console.log(names.indexOf("bat"))
// JSON -it is format ( javascript object notation)
///////////////////////////////////////////////////////////////
var myJSON ='{"a":1,"b":2}';
let obj=JSON.parse(myJSON);
console.log(obj);
