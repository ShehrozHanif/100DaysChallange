let promise1 = new Promise((resolve, rejcted) => {
    setTimeout(() => {
        resolve("Promise 1 reolve");
    }, 1000);
});
let promise2 = new Promise((reolve, rejcted) => {
    setTimeout(() => {
        reolve("Promise 2 resolve");
    }, 1500);
});
let promise3 = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("Promise 3 resolve");
    }, 2000);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
export {};
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve) => {
//   setTimeout(resolve, 100,"IMI");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values); // Outputs: [3, 42, "IMI"]
// });
