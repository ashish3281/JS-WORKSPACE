class car{
   constructor(brand)//parametrised constructor
   {
       this.car=brand
   }
   present(){
      return "car name is" + this.car
   }
}
class  ModelName extends car{
    constructor(brand,model){
        super(brand);//this.model=model
    }
    display(){
        return this.present() + "car" +this.model
    }
}
let carName=new ModelName("maruti","swift");
console.log(carName.display())

/////////////////////////////////////////////////////////////////////////////////ashish goyal
// class Person{
//     constructor(name){
        
        //     this.name=name;
        //     this.lastname="test";
        // }
        // greeting(){
        //     // console.log("the name is",this.name,"lastname" ,this.lastname);
        //     //templete literal(`)
        //     console.log(`the name is ${this.name} lastname ${this.lastname`});
        // }
    // class student extends Person{}
    // let str1=new student('ss');
    // str1.greeting(); call constructor use super keyword 
        

// ///////////////////////////////////////////////////////////////////////////////
function Person(name,class1,age){
    this.name=name,
    this.class1=class1,
    this.age=age
}
//to add anothor properties in function
Person.prototype.marks = 12;
var p1=new Person("raj",10,20)
console.log(p1,p1.marks)
//////////////////////////////////////////////////////////////////////////////////////


