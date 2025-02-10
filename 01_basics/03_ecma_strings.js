// let str = "Hello";  // A simple string
// console.log(str.length);  // Output: 5 (each letter is a 16-bit unit)

// let emoji = "😊";
// console.log(emoji.length);  // Output: 2 (because it's stored as a "surrogate pair")

//--------------------------------------------


// let str = "A😊B";
// console.log(str.length);  // Output: 3 (A = 1 unit, 😊 = 2 units, B = 1 unit)
// console.log(str[1]);  // Output: "�" (JavaScript sees part of the emoji)



// ----------------------------------------------------------------

// let text = "Hello, world! Hello again!";
// console.log(text.lastIndexOf("Hello"));  // Output: 14 (last occurrence)

// let text = "Java Script";
// console.log(text.substring(0, 4));  // Output: "Java"
// console.log(text.substring(5, 11)); // Output: "Script"


// let first = "Ahlan"
// let second = " wa sahlan"
// let result = first + "" + second // concatenation of strings

// console.log(first.indexOf("",1))
// console.log(result)