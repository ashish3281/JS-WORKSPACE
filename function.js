function details(name,lastname,roll,phone,branch){
    this.name=name;
    this.lastname=lastname;
    this.roll=roll;
    this.phone=phone;
    this.branch=branch;
    this .display=function(){
        return this.name;
    }
}
const detail1=new details("ashish","goyal",233,123455,"cst");
console.log(detail1.roll);
console.log(detail1);