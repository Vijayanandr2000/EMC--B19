let arr = [1, 2, 3];
let a = [4, 5, 6];

a.push(...arr);
a = [...arr, ...a];

console.log(a);

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let [c, d, ...e] = b;

console.log(c, d, e);
