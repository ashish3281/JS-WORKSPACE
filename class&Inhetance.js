// class student{
//     constructor(name,age,roll){
//     this.name=name;
//     this.age=age;
//     this.roll=roll;
// }
// //syntax
// Org(){
//     return ("i am "+this.name+" from haryana");
// }
// dob(){
//     return("the date of birth of"+this.name+"is"+this.age);
// }
// }
// var ashish=new student("ashish",21,1212);
// console.log(ashish);
// console.log(ashish.Org());

//static method
// class student{
//     constructor(name,age,roll){
//     this.name=name;
//     this.age=age;
//     this.roll=roll;
// }
// //syntax
// Org(){
//     return ("i am "+this.name+" from haryana");
// }
// dob(){
//     return("the date of birth of"+this.name+"is"+this.age);
// }
// static add(a,b){
//     return a+b;
// }
// }
// var ashish=new student("ashish",21,1212);
// console.log(ashish);
// console.log(ashish.Org());


//how inheritance work with classes
class student{
        constructor(name,age,roll){
        this.name=name;
        this.age=age;
        this.roll=roll;
    }
    //syntax
    Org(){
        return ("i am "+this.name+" from haryana");
    }
    dob(){
        return("the date of birth of"+this.name+"is"+this.age);
    }
    //static
    static add(a,b){
        return a+b;
    }
}
    //inherit
    class student1 extends student{
    constructor(name,age,roll,language,section){
        super(name,age,roll);
        this.language=language;
        this.section=section;
    }
    }
    var rahul=new student1("rahul",32,2,"js","a");
    console.log(rahul);
    console.log(rahul.Org());
    console.log(rahul.dob());
    console.log(student1.add(56,2));
    