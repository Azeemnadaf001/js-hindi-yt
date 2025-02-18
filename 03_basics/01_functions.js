function myName() {
  console.log("A");
  console.log("z");
  console.log("e");
  console.log("e");
  console.log("m");
}
// myName();

// function addTwoNums(num1, num2) {
//   //   let result = num1 + num2;
//   //   return result;
//   //   console.log(num1 + num2);
//   return Number(num1) + Number(num2);
// }

// const result = addTwoNums(8, "a");

// console.log("result is : ", result);

// function login_id(id) {
//   if (!id) {
//     return `please enter a login id`;
//   }
//   return `${id} just logged in`;
// }

// console.log(login_id("Azeem.mantiqh"));

// function calcCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calcCartPrice(2, 4, 6, 6, 6, 4, 3, 34));
// const instaUser = {
//   name: "Abdulazeem",
//   pass: 1234,
// };

// function name(anyObject) {
//   console.log(
//     `my name on insta is ${anyObject.name} and its password is ${anyObject.pass}`
//   );
// }

// name({
//   name: "azeem",
//   pass: "1223",
// });

const newArray = [100, 200, 300, 40, 500];

function returnAnyArray(getArray) {
  return getArray[0];
}

console.log(returnAnyArray([200, 300, 400]));
