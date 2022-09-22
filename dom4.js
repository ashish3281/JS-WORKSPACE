// dom traversing method 
// traversing downward (1 query selector method   2 children property)
 function OneS(){
    //downward traversing
    var x=document.querySelector(".container");//parent node
   // var y=x.querySelector(".right");//child node
//    var y=x.children;
//     console.log(y);//childre of y element
//     console.log(x.children);//children of x element
//     console.log(x.children[4]);//child at fourth position


// console.log(x.firstChild);
// console.log(x.firstElementChild);
// console.log(x.lastChild);
// console.log(x.lastElementChild);
// console.log(x.childElementCount);


// console.log(x.parentElement);

//we can access sibiling of a specific element
var x=document.querySelector(".center");
console.log(x.nextElementSibling);
console.log(x.previousElementSibling);
 }