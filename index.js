// // AUFGABE TEIL-1
// function calcLength(name){

//     console.log("Der Name ist folgende Zeichen lang: ", name.length)

// }

// // AUFABE TEIL-2
// calcLength("John");
// calcLength("Bob");


// AUFGABE MIT RETURN LÖSEN
function calcLength(name){
    return  "Der Name ist folgende Zeichen lang: " + name.length;
}

let person1  =calcLength("Sara");
console.log(person1);
let person2 =calcLength("Helena");
console.log(person2);
