//generaator will do the same task as iterator do 
//generator is easy to handle iterator syntax is complex
// function* generate(){
//     let i=0;
//     yield "bmw";
//     yield "audi";
//     yield "honda";

// }
// let gen =generate()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* generate(){
    let i=0;
    var ar=["bmw","audi","honda"]
    while(i<ar.length){
        yield ar[i];
        i++;
    }
  

}
let gen =generate()
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());