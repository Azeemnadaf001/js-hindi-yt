// const instaUser = new Object(); // it is  a singleton

const instaUser = {}; // non-singleton object

instaUser.id = "azeemnadaf_001";
instaUser.pass = 12345;
instaUser.name = "Abdul azeem";

// console.log(instaUser);

const regularUser = {
  email: "azeemnadaf@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Abdul Azeem",
      lastName: "Nadaf",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };

const obj2 = { 3: "c", 2: "d" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2);

const users = [
  {
    id: 1,
    email: "azz@hgmail.com",
  },
  {
    id: 1,
    email: "azz@hgmail.com",
  },
  {
    id: 1,
    email: "azz@hgmail.com",
  },
];

// console.log(users[1].email);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));

// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("passs"));

const course = {
  course_name: "js tutorials",
  price: "free",
  course_source: "Youtube",
};

const { course_source: source } = course;

console.log(source);
