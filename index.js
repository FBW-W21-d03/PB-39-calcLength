

console.log("-------------------------");
console.log("javascript-calcLength");
//aufgabe teil 1
function calcLength(name){
    console.log("Der Name ist folgende Zeichen lang: ", name.length)
}


calcLength('John');
calcLength('Bob');

console.log("-----------NEU--------------");
console.log("VERWENDE RETURN STATEMENT IN DER FUNKTION");



function calcLength(name) {
    return "Der Name ist folgende Zeichen lang: " + name.length;
    }
    
    let person1 = calcLength("John");
    let person2 = calcLength("Bob");
    let person3 = calcLength("Mr. Schnibbeldibbel");
    let person4 = calcLength("Mrs Bogart");
    console.log(person1);
    console.log(person2);
    console.log(person3);
    console.log(person4);