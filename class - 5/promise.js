function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(2);
      resolve("success");
    }, 1000 * 5);
  });
}

console.log(1);
delay()
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log(3);
  })
  .catch((err) => {
    console.log("err", err);
  });

// async function solve(){
//     try{
//         console.log(1)

//         const data = await delay()

//         console.log(3, data)
//     }catch(error){
//          console.log(4, error)
//     }
// }

// solve()
