//store unique value
const set1 = new Set();
set1.add(1)
set1.add(2)
set1.add(1)
console.log("set value are",set1)
const obj1={////reference store
    a:1,
    b:2
}
set1.add(obj1)
set1.add({a:1,//value store --so its two times print
b:2})
console.log("set values are",set1)
const ashish={
    city:"hissar",
    rollno:206010,
    phoneno:213242343434

}
console.log(Object.keys(ashish));
console.log(ashish.rollno)