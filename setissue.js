console.log("start")
setTimeout(function a(){
    console.log("callback");
},3000);
console.log("end");
let startDate= new Date().getTime();
let endDate= startDate;
//added 10 sec timer
while(endDate<startDate+10000){
    endDate=new Date().getTime();
}
console.log("while expires")
