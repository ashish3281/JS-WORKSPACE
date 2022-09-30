//destructuring is used in js for assigement task it allow us to use  to unpack 
//those values from an array or properties from an object into different variables

// let student1,student2,student3;
// [student1,student2,student3]=["ravi","ashish","swati","varun","rahul"]
// console.log(student1)
// console.log(student2)
// console.log(student3)
//only first three name are getting

// let student1,student2,student3;
// [student1,student2,...student3]=["ravi","ashish","swati","varun","rahul"]
// console.log(student1)
// console.log(student2)
// console.log(student3)
//last three values are in the student3

// let student1,student2,student3;
// [student1,student2,...student3]=["ravi","ashish","swati","varun","rahul"]
// console.log(student1)
// console.log(student2)
// console.log(student3[1])
//get the values of student3 first index 


// const colour =["red","black","green","pink","brown"];
// [mercedes,Bmw,honda,...hyundai]=colour;
// console.log(mercedes)
// console.log(Bmw)
// console.log(honda)
// console.log(hyundai)
//js does no allow assigement the value to any other element 
//rest element must be last element

//swap using destructor
// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

const car={
    manufacture:"mereceds",
    colour:"black",
    model:2020,
    wheels:function(){
        console.log("all wheels");
    }
}
const {manufacture,colour,model,wheels}=car;
console.log(manufacture)