// Destructing

// let arr = [1,2,3,4]

// // let a = arr[0], b = arr[1], c = arr[2]

// let [a,b,c,d,e] = arr

// console.log(a,b,c,d, e, arr[100])

let obj = {
  name: "vijay",
  age: 23,
  place: "chennai",
  dob: undefined,
};

let { name: fName, age, place, dob = { super: "123" } } = obj;

console.log(age, place, dob, fName);
