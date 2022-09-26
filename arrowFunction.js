function func1(a,b){
    return a+b;
}
console.log(func1(3,4));

function func2(){
    console.log("welcome to simple code");
}
func2();

//arrow function
var arrow1=(a,b) =>{
    return a+b;
}
console.log(arrow1(4,6));

var arrow1=(a,b) =>a+b;
console.log(arrow1(1,2));

var arrow2=() =>{
    console.log("welcome to simple code");
}
arrow2();

var arrow3 =newname => {
    console.log("hey there ! "+newname);
}
arrow3("ashish");