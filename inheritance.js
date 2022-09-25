
// const employee={
//     post :function(){
//         return "a software developer";
//     },
//     changename :function(name){
//     this.name=name;
//     }
// };
//syntx1
// var e1=Object.create(employee);
// e1.name="kaushal";
// e1.role="writer";
// e1.changename("ram");
// console.log(e1);

//syntx2
// var e1=Object.create(employee,{
//     name:{value:"ashish"},
//     role:{value:"programmer"},
// })
// e1.changename("goyal");
// console.log(e1);


//prototypal inheritance
function employee(name,id,salary){
    this.name=name;
    this.id=id;
    this.salary=salary;
}
employee.prototype.post=function(){
    return (this.name+" "+"is a content creater");
}
var ashish=new employee("ashish",22232,100000);
console.log(ashish);
console.log(ashish.post());

function programmer(name,id,salary,language){
    //inherit three property from employee
    employee.call(this,name,id,salary);
    this.language=language;
}
var arun=new programmer("arun",22,20000,"js");


//console.log(arun.post()) it give an error arun.post() is not a function
programmer.prototype=Object.create(employee.prototype);
programmer.prototype.constructor=programmer;
console.log(arun);
console.log(arun.post());