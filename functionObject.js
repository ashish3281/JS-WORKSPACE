function Mobile(name,price,discount,year){
    this.name=name;
    this.price=price;
    this.discount=discount;
    this.year=year;
    this.displayName=function(){
        return this.name;
    }
}
const mobile1=new Mobile('iphone',13424423,'10%',2020);
const mobile2=new Mobile('iphone',20000000,'10%',2020);
console.log("data is ",mobile1.displayName())
console.log("data is",mobile1.name,mobile2.price)