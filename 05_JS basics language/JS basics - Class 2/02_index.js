console.log("Chaliye Shuru karte Hai");

// object create
// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("drawing rectangle");
//   },
// };

// let rectangle1 = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("drawing rectangle");
//   },
// };

// let rectangle2 = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("drawing rectangle");
//   },
// };

// factory function
// function createRectangle(len, bre) {
//   let rectangle = {
//     length: len,
//     breadth: bre,

//     draw: function () {
//       console.log("drawing rectangle");
//     },
//   };
//   return rectangle;
// }

// let rectangleOj1 = createRectangle(5, 6);
// let rectangle1 = createRectangle(2, 3);
// let rectangle2 = createRectangle(7, 9);

// Camelcase -> numberOfStudents
// constructor function -> pascal Notation -> first letter of every word is Capital -> NumberOfStudents
function Rectangle(len, bre) {
  this.length = len;
  this.breadth = bre;
  this.draw = function () {
    console.log("drawing");
  };
}

Rectangle.length;

// // object creation using constructor function
// let rectangleObject = new Rectangle(4, 6);

// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle = new Function(
//   "length",
//   "breadth",
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function () {
//     console.log("drawing");
//   }`
// );

//object creation using Rectangle
// let rect = new Rectangle(2, 3);

// rect.length;

// console.log(rect);

// rectangle.length;
// rectangle.bredth;

// rectangle.draw
// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = { value: 10 };
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//   a++;
// }

// inc(a);

// console.log(a);

// let a = { value: 10 };

// function inc(a) {
//   a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle = {
  length: 2,
  breadth: 4,
};

// for in loop
// for (let key in rectangle) {
//   // keys are reflected through key variable
//   // values are reflected through rectangle[key]
//   console.log(key, rectangle[key]);
// }

// for of loop
// for (let key of Object.keys(rectangle)) {
//   console.log(key);
// }
// for (let key of Object.entries(rectangle)) {
//   console.log(key);
// }

// if ("length" in rectangle) {
//   console.log("Present");
// } else {
//   console.log("Abesnt");
// }

// object - clone #1
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = {};

// for (let key in src) {
//   dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

// Object clone - #2
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let src2 = { value: 25 };

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// Oject cloning - #3
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = { ...src };

// console.log(dest);

// src.a++;

// console.log(dest);
