//take input from a user through js
// function print(){
//     var x=document.getElementById("username").value;
//     var y=document.getElementById("password").value;
//     alert("the name is :"+x+"\n"+"the password is :"+y);
// }
/////////////////////////////////////////////////////////////////////////
//take password and user name
// function print(){
//         var x=document.getElementById("username").value;
//         var y=document.getElementById("password").value;
//         if(y=="ashish"){
//             alert("login succeasssful");
//         }
//         else{
//             alert("wrong password");
//         }
//         alert("the name is :"+x+"\n"+"the password is :"+y);
//     }
/////////////////////////////////////////////////////////////////////////////
//input for radio button
// function fun1(){
//     var x=document.getElementById("rad1");
//     var y=document.getElementById("rad2");
//     if(x.checked == true){
//         alert("wrong answer the correct option  is :"+y.value);
//     }
//     else if(y.checked ==true){
//         alert("right answer");
//     }
//     else{
//         alert("no option selected");
//     }
// }
////////////////////////////////////////////////////////////////////////////////////
//input with select box
// function  selected(){
//     var x=document.getElementById("one");
//     //alert(x.options[0].value);
//     alert(x.options[x.selectedIndex].value);
// }
function  selected(){
    var x=document.getElementById("one");
  
    if(x.options[x.selectedIndex].value=="brendon eich")
    {
        alert("the answer is correct");
    }
    else
    {
        alert("the answer is wrong");
    }
}