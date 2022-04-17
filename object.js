var arr1=[1,2,3,4];
var mobile={
     name:"apple",
     price:23242,
     unit:"rws",
     reviws:["user1 review","user2 review"],
     subcat:{
         a:"fef",
         b:"ds"
     }
}
// var response={
//     pageData:{
//         backttl:""
//     }
// }

console.log("object values are",mobile)
console.log("object values are",mobile.price)
console.log("object value are",mobile.subcat.b)
console.log("keys of the object:",Object.keys(mobile));//keys are never changed
console.log("values of the object:",Object.values(mobile));//value are changeable

// var mobiledata={
//     image='gergerg',
//     rev:[],
//     imp:{}
// }
var tshirt=[1,2,3,{obj:"do"},{obj2:"while"}]
console.log(tshirt.obj)
var tshirts={
    detail:[{
        name:"apple",
     price:23242,
     unit:"rws"
    },
    {
        name:"vivo",
     price:2324342,
     unit:"rwsff",
    }]
}
console.log(tshirts.detail)

//function
function displayPrice(mrp,discount){
    var finalprice=mrp -discount*mrp;
    return finalprice
}
<price>display</price>