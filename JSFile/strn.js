let name="Krutika salotagi";
let surname='Krutika\tAlure';//escape character is used
let HusbandN=`          DATTA ALURE      `;
console.log(name);
console.log(surname.length);
console.log(HusbandN[5]);

//using template literals
let item={pen:10,color:"black"};
let output=`Total pen are ${item.pen} and color of pen is ${item.color}.`;
console.log(output);

//escape character
console.log("Krutika\nSalotagi");
console.log("Krutika\tAlure");
console.log("krutika\fDatta");
console.log("Krutika\bAlure\bSalotagi");
console.log("Krutika");
console.log(name.toUpperCase());
console.log(HusbandN.toLowerCase());
console.log(HusbandN.trim()); //this method remove all the white spaces from string and it is only remove starting and ending spaces.
console.log(name.slice(3,9));

let animal="Lion";
let animal1="tiger";
console.log(animal.concat(animal1));    

let letter="I love Art";
console.log(letter.replace("Art","watching movies"));

let hello="krutika alure";
console.log(hello.charAt(4));