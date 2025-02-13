// object constructor
// singleton

// object literals

const mySym = Symbol("key1");

const gmailAcc = {
  name: "Azeem",
  age: 18,
  [mySym]: "myKey1",
  email: "azeeem@gmail.com",
  isLoggedIn: true,
};

// console.log(gmailAcc.age);

// console.log(gmailAcc.email);

// console.log(gmailAcc.name);

// console.log(gmailAcc.isLoggedIn);

// console.log(gmailAcc["name"]);
// console.log(gmailAcc[mySym]);

// gmailAcc.name = "Abdul Azeem";

// Object.freeze(gmailAcc);

// gmailAcc.name = "Abdul Azeem Nadaf";

gmailAcc.greeting = function () {
  console.log(
    `Hello ${this.name} this is to confirm your password of your email ${this.email} has been reset, Thank You !`
  );
};

console.log(gmailAcc.greeting());

// console.log(gmailAcc);
