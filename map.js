//map and Map
//array store related data
//map store any data item
const map1 =new Map()
map1.set('name','saitm');
map1.set('age',20);
console.log("value of name",map1.get('name')," and size of map1 is",map1.size);
map1.delete('age')
console.log("after deleting value of map1 is",map1.size)
 
// var input2=[1,20,48,2,4,6,484,5]
//  for (let i=0;i<input2.length;i++){
//     if(i%2==0){
//        return input2[i] ;
//     }
       
//           console.log("evenoutput is",input2[i])
// }


// use of has
console.log("array ha age",map1.has("age"))


        