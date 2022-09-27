var arr=["bmw","audi","mercdes","honda"]
// console.log(arr)
// console.log(arr.length);

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i of arr){
//     console.log(i);
// }
 function cars(values){
    let index=0;
return{
    next:function(){
        if(index<values.length)
            return{
            value: values[index++],
            done: false
            
        }
        else{
          return{
            done:true
          }
        }
    }
}
 }
 var newcars=cars(arr);
 console.log(newcars.next())
 console.log(newcars.next().value)
 console.log(newcars.next().value)
 console.log(newcars.next().value)
 console.log(newcars.next())//end of the array
 console.log(newcars.next().value)
