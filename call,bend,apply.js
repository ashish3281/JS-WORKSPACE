//call ,apply,bind
const obj={
    name:"set",
    class:12,
    info:function(){
        console.log("name",this.name,this.class)
        return this.name +" "+this.class;
    }
}
const student2={
    name:"student2",
    class:11
}
obj.info()
obj.info.call(student2);
//call---merge any data in one object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//bend
const obj2={
    name:"ffe",
    info:function(age,marks,marks1,marks2){
        console.log("name",this.name,this.class,age,marks,marks1,marks2)
        return this.name+this.class+age+marks
    }
}
const student3={
    name:"student3",
    class:12
}
obj2.info.apply(student3,[1,2,3,4])//using bend
//in bend we use array