// function func1(){
//     var x= document.getElementsByClassName("cls1");
//     x[0].style.fontStyle="italic";
//     x[1].style.color="Blue";
//     x[2].style.fontWeight="Bolder";
// }

function func1(){
        var x= document.getElementsByClassName("cls1");
        for(var i=0;i<x.length;i++){
            x[i].style.backgroundColor="yellow";
        }
}
//when you want to work with single element so use id element
//you want to work with more than one element so we use either classNameMethod or use TagNameMethod
