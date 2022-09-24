// function Fun2(){
//     var x = document.getElementsByTagName("div");
//     x[0].style.fontFamily ="courier New";
//     x[1].style.color="blue";
//     x[2].style.fontStyle="italic";
//     x[3].style.backgroundColor="Red";
// }


function Fun2(){
    var x = document.getElementsByTagName("div");
    for(var i=0;i<x.length;i++){
        x[i].style.backgroundColor="Yellow";
    }
}