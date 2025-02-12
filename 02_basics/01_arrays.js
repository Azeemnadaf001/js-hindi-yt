// arrays

const array1 = [1, 2, 3, 4, 5];

// console.log(array1[1]);

const array = new Array(1, 23, 22, 32);

// array methods

// array1.push(6);
// array1.push(7);
// array1.pop();
// array1.unshift(0);
// array1.unshift(1);
// array1.shift();
// const newArr = array1.join();

// console.log(array1);
// console.log(newArr);

//slice and splice

const myArr1 = [1, 2, 3, 4, 5];

console.log(myArr1.slice(0, 2)); // doesnt manipulate the main array and doesnt include the range

console.log(myArr1);

const myArr2 = [1, 2, 3, 4, 5];

console.log(myArr2.splice(0, 4)); // does manipulate  the main array and includes the range ,  one more thing about splice is : in the parameter of splice, the first one is starting index and the second parameter is length of the splice(not the ending index) !

console.log(myArr2);
