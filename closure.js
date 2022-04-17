//child function parent k variable ko asscess ker pa rha h
 function name1(paramas){
    var a=12;
    var b=23;
    function child( ){
        console.log("value of a and b is",a,b)
    }
    child();
}
name1();
//console.log("var is",a)
