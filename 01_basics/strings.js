const myName = "AbdulAzeem";

const myAge = 20;

// console.log(myName +   "is" +   myAge); old method not recommended

// console.log(`hello my name is ${myName} and my age is ${myAge}`); // new method highly recommended // called as string interpolation

const gameName = new String("BGMI");
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLowerCase());

// console.log(gameName[3]);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("M"));

// console.log(gameName.slice(0, 4));

// const newString = "       Azeem       ";

// console.log(newString);
// console.log(newString.trim());

const url = "https://mantiqh%20technologies.com";

console.log(url.replace("%20", " "));
console.log(url.includes("mantiqh"));
