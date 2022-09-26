// async-await==it make easier to work with promises
// function makeOrder(coffee){
//     return new Promise((resolve,reject)=>{
//         console.log("making request for a "+coffee);
//         if(coffee=="Black coffee"){
//             resolve("here is your cofee, Have a nice day");
//         }
//         else{
//             reject("Sorry, we serve black cofee only");
//         }
//     })
// }
// function processOrder(order){
//     return new Promise((resolve,reject)=>{
//         console.log("processing order")
//         resolve("extra information"+ order);
//     })
// }
// makeOrder("Black coffee").then(order=>{
//     console.log("order has been received");
//     return processOrder(order);
// }).then(processOrder=>{
//     console.log(processOrder)
// }).catch(error =>{
//     console.log(error);
// })



function makeOrder(coffee){
    return new Promise((resolve,reject)=>{
        console.log("making request for a "+coffee);
        if(coffee=="Black coffee"){
            resolve("here is your cofee, Have a nice day");
        }
        else{
            reject("Sorry, we serve black cofee only");
        }
    })
}
function processOrder(order){
    return new Promise((resolve,reject)=>{
        console.log("processing order")
        resolve("extra information "+ order);
    })
}
async function func1(){
    var order = await makeOrder("Black coffee")
    console.log("order has been received")
    var processedOrder = await processOrder(order)
    console.log(processedOrder);
}
func1();