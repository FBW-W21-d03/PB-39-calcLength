function calcLength (name) {
  
    console.log("Der Name ist folgende Zeichen lang: "+ name.length)

};
calcLength ("John");
calcLength("Bob");
//Return Statement in der Function
function calcLength (name) {
  
    return "Der Name ist folgende Zeichen lang: " + name.length

};
let lenght= calcLength ("John");
let lenght2= calcLength ("Bob");
console.log(lenght);
console.log(lenght2);