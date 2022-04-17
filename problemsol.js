//method-1
const findmaxarray= (findmax)=>{
    let maxelement = findmax[0]; 
    for(let i=1;i<=findmax.length;i++){
        if(findmax[i]>maxelement){
            maxelement = findmax[i];
            
        }
    }
    return maxelement;
}
const findmax=[1,2,3,344,6,767]

console.log(findmaxarray(findmax))
//method-2
console.log(Math.max(...findmax),'finding max through math library');//...are speed operator
///////////////////////////////////////////////////////////////////////////////////////////
const squareofarrayelement=(array)=>{
    let squareofarrayelement=[];
    for(let i=0;i<array.length;i++){
        squareofarrayelement[i]=array[i]*array[i];
    }
    return squareofarrayelement;
}
const findsquare=[1,2,3,45,5]
console.log(squareofarrayelement(findsquare))