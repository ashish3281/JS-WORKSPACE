var arr=[];
var isExit=false;
console.log("old isExit",isExit)
for(let i=0;i<10;i++){
    if(i===3){
        isExit =true;
        break;
    }
}
console.log("updated isExit",isExit)


var arr=[];
var counter=10;
console.log("old isExit",counter)
for(let i=0;i<10;i++){
    if(i===3){
        continue;

    }
    counter =counter+1;
    console.log("i is",i)
}
console.log("updated isExit",counter);

var arr=[];
var counter=10;
console.log("old isExit",counter)
for(let i=0;i<10;i++){
    if(i===3){
        break;

    }
    counter =counter+1;
    console.log("i is",i)
}
console.log("updated isExit",counter);