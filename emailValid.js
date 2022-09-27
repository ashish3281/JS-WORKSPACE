function validate(){
    var email=document.getElementById("mail").value;
    var regex=/^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
    if(email.trim()==""){
        alert("please enter a valid email id ");
    }
    else if((regex.test(email))){
        alert("email submitted succesfully");
    }
    else{
        alert("wrong email id");
    }
}
//ashishgoyal3281@gmail.com
// name  
//@ symbol
//domain name -gmail
// Number
// Special Character 
// an email may be an underscore
//@ and . is complsury  in gmail
//+ operator is used to add many as many character eg- beuhbfqefcjeobveeqphbe
//     /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})/
//    ([a-z A-Z 0-9 \. _]+)-its for name .name contain uppercase,lowercase number and special character .+is used as many as you want
//    ([a-z A-Z]+)  after @ it is domain name it contains only upper and lower letter
//    ([a-z A-Z]{2,6})  after dot it is extension com it contain letter of only 2 to 6 range
//    we are adding the carrot character and the dollor char for starting must from name and ending must be extension

// if email id is ashish112,3@gmail.co.in
//so we add another option
// (.[a-z]{2,6})?
//question  is here optional meta character

