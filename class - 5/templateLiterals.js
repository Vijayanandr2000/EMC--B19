let name = "vijay";
let age = 23;
let place = "chennai";

let data =
  "My Name is" +
  " " +
  name +
  "\n" +
  "My Age is " +
  age +
  "\n" +
  "My Place is " +
  place +
  ".";

let data1 = `My Name is ${name}
My Age is ${age}
My Place is ${place === "chennai" && "ch"}.`;

console.log(data);
console.log("-----");
console.log(data1);
