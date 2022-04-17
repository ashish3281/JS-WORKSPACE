////////////////////////////////////////////////////////////////////////////////////
function square(n){
    var square;
     square=n*n;
     return square;
}
 var a=[1,2,3,4,5]
for(let i =0;i<5;i++)
console.log(square(a[i]));
///////////////////////////////////////////////////////////////////////////////
function division_of_five(number){
    var division_of_five;
    division_of_five=number%5==0;
    return division_of_five;
}
console.log(division_of_five(55))
//////////////////////////////////////////////////////////////////////////////
var mobile={
    name:"apple",
    price:23242,
    ram:"8gb",
    storage:"128gb",
    reviws:["user1 good","user2 excelent"]
}
console.log("object values are",mobile);
console.log("object values are",mobile.price);
console.log("object value are",mobile.ram);
console.log("keys of the object:",Object.keys(mobile));
console.log("values of the object:",Object.values(mobile));


///////////////////////////////////////////////////////////////////////////////
function largest_number(myarray){
    var max = 0;
    for ( let i=0;i<myarray.length;i++){
        if(myarray[i]>max){
            max = myarray[i];
        }
    }
return max;
}

myarray=[2,3,434,55,56,7,67]
console.log("largst number in array",largest_number(myarray));
/////////////////////////////////////////////////////////////////////////////////////

///reverse in array 
var input=[12,13,45,67]

for(i=input.length-1;i>=0;i--)
{
    console.log(input[i])
}

const reverse=(array)=>{
    let reverseArrayToReturn = [];
    for(let i=array.length-1;i>=0;i--){
       
        reverseArrayToReturn[array.length-1-i] = array[i];
    }
    return reverseArrayToReturn;
}
var inputArray=[1,2,3,4,5];
console.log(reverse(inputArray))
////////////////////////////////////////////////////////////////////////////////////////////

//str+=str.charAt(i)
reverseString=(str)=>{
    let reverseStringToReturn=''
    for(let i=str.length-1;i>=0;i--){
        reverseStringToReturn+=str.charAt(i);
    }
    return reverseStringToReturn;
}
var inputString="student";
console.log(reverseString(inputString))