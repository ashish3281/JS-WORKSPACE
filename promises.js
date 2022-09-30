//promises -promises is an object
//pending -it is the in which the system work on the promises


//var prom=new Promise(function(resolve,reject){
//     var drive=true;
//     if(drive){
//         resolve("yes");
//     }
//     else{
//         reject("no");
//     }
// });
// prom.then(function(resolve){//then is method for resolve function
// console.log(resolve+" the user knows how to drive");
// })
// prom.catch(function(reject){//catch is a method for reject function
// console.log(reject+" the user does not know the drive");
// })


//dependences in promises
var functions =function(){
    return new Promise(function(resolve,reject){
        resolve("learn more");
    });
};
var callback=function(message){
    return new Promise(function(resolve,reject){
        resolve(message +" learnt callback functions");
    });
};
var promises=function(message){
    return new Promise(function(resolve,reject){
        resolve(message +" good to go for promises in javascript");
    });
};
functions().then(function(result){
    return callback(result);
}).then(function(result){
    return promises(result);
}).then(function(result){
    console.log("good to go : " + result);
})