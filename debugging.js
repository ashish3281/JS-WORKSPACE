// function add(){
//     var no1=document.getElementById("n1").value;
//     var no2=document.getElementById("n2").value;
//     var no3=no1+no2;
//     alert("the sum is "+no3);// 10 20 result-1020
// }
// for debugging that use parseInt
function add(){
    var no1=parseInt(document.getElementById("n1").value);
    var no2=parseInt(document.getElementById("n2").value);
    var no3=no1+no2;
   // alert("the sum is "+no3);// 10 20 result-30
    //console.log("the sum of two number is:" parseInt(no1+no2));
    console.log("the sum of two number is:" +parseInt(no1+no2));

}