
//first method --change in same array
var a=[1,2,3,4,5]
for(let i=0;i<5;i++)
{
    
    a[i]=a[i]*a[i];
}
//second method
console.log(a);
var arr=[1,2,3,4,5]
var square=arr.map(x=>x*x)
console.log("square is",square)
//third mrthod -- change in different array
var a=[1,2,3,4,5]
var s=[]
for(let i=0;i<a.length;i++)
{
    
    s[i]=a[i]*a[i];
}
console.log(a)
console.log(s)

//using for each loop

var input=[1,2,3,4,5]
input.forEach(num=>{
    console.log("array values are",num)
})


var input=[1,2,3,4,5]
input.forEach((num,index)=>{
    console.log("array values are",num,index)
    })
    


var input=[1,2,3,4,5]
input.forEach((num,index)=>{
    return input[index]=num*num
    
})
console.log("array values are",input)

var input1=[1,2,3,4,5]
var output=input1.map(num=> {
    return num*num
})
console.log("array value are",output)
//var input=[1,20,48,2,4,6,484,5]
//var evenoutput=[20,48,2,4,6,484]
// var input2=[1,20,48,2,4,6,484,5]
// var input3=[];
// for (let i=0;i<input2.length;i++){
      if(i%2==0){
//        return i ;}
//     }
//     console.log("evenoutput is",input3[i])



// var output
// input2.foreach((value1,index){

// })
var input2=[1,20,48,2,4,6,484,5]

var output1 = input2.filter(ele=>{
    return ele%2===0
})
console.log("output is",output1)
