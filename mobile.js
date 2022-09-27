function val(){
    var mobile=document.getElementById("mobile").value;
    var regx=/^[7-9]\d{9}/
    if(mobile.trim()==""){
        alert("please enter a mobile number");
    }
    else if(regx.test(mobile))
   {
    alert("mobile number submited successfuly");
   }
   else{
    alert("wrong mobile number");
   }
}