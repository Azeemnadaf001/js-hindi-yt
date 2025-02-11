// stack (primitive)   heap(non-primitive)

let myName = "AbdulAzeem";

let myFullName = myName;

// console.log(myFullName);

myFullName = "AbdulAzeem_Nadaf";

// console.log(myFullName);
// console.log(myName);

// heap

let myGoogleAccountDetails1 = {
  name: "Abdulazeem",
  pass: 1234,
  email: "abdulazeem@google.com",
};

// console.log(myGoogleAccountDetails1);

let myGoogleAccountDetails2 = myGoogleAccountDetails1;

console.log(myGoogleAccountDetails2);

myGoogleAccountDetails2.pass = 12345678;

console.log(myGoogleAccountDetails2);
console.log(myGoogleAccountDetails1);
