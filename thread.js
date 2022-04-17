//single thread vs multiple thread
//synchronous vs asynchronous
//js is always synchronous and single thread
console.log("1")
console.log("2")
setTimeout(()=>{
    console.log('5')
},1000)
setTimeout(()=>{
    console.log('6')
},1000)
setTimeout(()=>{
    console.log('7')
},1000)
console.log("3");
console.log("4")
//output is 12345 why print 5 in last 
//always code run top to bottom (line by line)then this type of promming is called synchronus
// code does not print line by line this type of code is called asynchronous
//single thread --at one time only one code is run-1,2,3,4--print line by line
//multiple thread--at one time multiple code execute--5,6,7
//answer is--first it goes to synchronous part then it goes to asynchronous part
//but its main nature is synchronous
//5,6,7 print parallel
//event loop--follow  single and muli thread + (synchronous )
//thread pool--all task are asynchronous +  run multithreaded code
//js depend upon c and c++ language
//first event loop execute then go to thread pool
//event loop depend on stack(first in first out)
//in synchronous no time to take execute the code
console.log("1");
setTimeout(()=>{
    console.log("2")
},1000);
console.log("3")
//out put is--1 3 undefined 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var i=1
// var interval=setInterval(()=>{
//     for(i=0;i<=60;i++)
//     console.log(i)
//     clearInterval(interval)
// },6000)
//////////////////////////////////////////////////////////////////////////////////////
var i=1;
var interval=setInterval(()=>{
    console.log(i)
    i++;
    if(i==61){
        clearInterval(interval)
    }
},100);

    
