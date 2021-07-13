/*
1. You can use await with any function which returns a promise. The function you're awaiting doesn't need to be async necessarily.
2. You should use async functions when you want to use the await keyword inside that function. If you're not gonna be using 
the await keyword inside a function then you don't need to make that function async.
// The code after the await will be executed after the promise that you are awaiting finished.
3. async functions by default return a promise. That is the reason that you're able to await async functions.


// The await keyword causes the JavaScript runtime to pause your code on this line, 
not allowing further code to execute in the meantime until the async function call has returned its result 
- very useful if subsequent code relies on that result!
*/

// .get(async (req, res, next) => {
//   try {
//     const getAccountPromise = AccountsService.getById(req.app.get("db"), 123);
//     const getAddressPromise = AddressesService.getById(
//       req.app.get("db"),
//       123
//     );
//     // once these 2 promises resolve
//     const account = await getAccountPromise;
//     const address = await getAddressPromise;
//     res.json({
//       account,
//       address,
//     });
//   } catch (err) {
//     next(err);
//   }
//   AccountsService.getById(req.app.get("db"), 123)
//     .then((accounts) => {
//       AddressesService.getById(req.app.get("db"), 123)
//         .then((address) => {
//           res.json(accounts + address)
//         })
//       res.json(accounts.map(AccountsService.serializeAccount));
//     })
// })

// THIS IS STILL ON :) - feel free to save/not save files as needed - Uzair
// .get(async (req, res, next) => {
//   const accountsPromise = AccountsService.getAllAccounts();
//   const addressesPromise = AddressesService.getAllAddresses();
//   const addresses = await addressesPromise;
//   const accounts = await accountsPromise;
//   const accountsWithAddresses = accounts.map((account) => {
//     const address = addresses.find(
//       (address) => address.account_id === account.id
//     );
//     return {
//       account,
//       address,
//     };
//   }); // [{account: {id: 1}, address: {account_id: 1}}, {account: {}, address: undefined}, ...]
// })

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

async function hello() {
  return "Hello";
}
hello().then((value) => console.log(value));

// With Await
async function hello() {
  let greeting = await Promise.resolve("Hello");
  return greeting;
}

hello().then((value) => console.log(value));

/* ERROR HANDLING with try... catch*/

// You can use a synchronous try...catch structure with async/await. This example expands on the first version of the code we showed above:

// async function myFetch() {
//   try {
//     let response = await fetch("coffee.jpg");

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     let myBlob = await response.blob();
//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement("img");
//     image.src = objectURL;
//     document.body.appendChild(image);
//   } catch (e) {
//     console.log(e);
//   }
// }

// myFetch();
