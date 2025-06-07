// let arr = [1,2,3,4,5] //[5,10,15,20,25]
// let ans = []

// for(let i = 0 ; i < arr.length ; i++){
//     let data = arr[i]
//     console.log(data, i, arr)
//     ans[i] = data * 5
// }
// console.log(ans)

// let data = arr.forEach((data, i, a)=>{
//     console.log(data, i, a)
//     return
// })
// let data1 = arr.map((data, i, a)=>{
//     // console.log(data, i, a)
//     return data * 5
// })
// console.log("data1", data1)

let arr = [1, 2, 3, 4, 5, 10, 44, 23, 55]; // arr.sum() => 15

Array.prototype.sum = function (sum = 0) {
  // let sum = 0
  for (let i = 0; i < this.length; i++) {
    sum = sum + this[i];
  }
  return sum;
};
console.log(arr.sum(777));
