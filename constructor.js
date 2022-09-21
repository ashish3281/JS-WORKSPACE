//creating a object of object literals method
//var obj_name=new Object();//empty object
var rect2 =new Object();
rect2.length=5;
rect2.width=10;
rect2.getarea=function(){
    return this.length*this.width;
};
rect2.getperimeter=function(){
    return 2*this.length+2*this.width;
};
console.log(rect2.getarea());
console.log(rect2.getperimeter());

//when we have more than one class(multiple instances of an object)
function rect3(length,width){
    this.length=length;
    this.width=width;
    this.getarea=function(){
        return length*width;
    }
    this.getperimeter=function(){
        return 2*length+2*width;
    }
}
var r1=new rect3(5,10);
console.log(r1.getarea());
console.log(r1.getperimeter());