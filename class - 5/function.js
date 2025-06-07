// Synatx
// function fn_name(argumnet){}
// fn_name()
console.log("vijay", sum(2, 1));
function sum(a, b, c) {
  console.log(c);
  return a + b;
}
// let c = sum(2,1)
console.log(sum(2, 1));

console.log("vijay1", sum1(2, 1));

const sum1 = (a, b) => {
  return a + b;
};
console.log(sum1(2, 1));

const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(2, 1));
