// <--***** OOP ES5 *****-->


// function Person() {
//   const firstName = "mahmud";
//   console.log(firstName);
// }

// Person.lastName = "hasan";
// Person.fullname = function () {
//     console.log("mahmud hasan")
// }
// console.log(Person.fullname)
// console.log(Person);

// const firstName = "mahmud"
// console.log(firstName)
// "use strict"

// function Person(firstName, lastName) {
//   //constructor functiond
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.fullName = function(){
//   //     return `${this.firstName} ${this.lastName}`;
//   // }
//   // console.log(this)
// }
// // console.dir(Person)
// Person.prototype.getFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };
// // const newPerson = new Person("Masnun", "hasan");
// // console.log(Person.prototype == newPerson.__proto__)

// // Inheritance
// function NewInfo(firstName, lastName, profession) {
//   Person.call(this, firstName, lastName);
//   this.profession = profession;
// }

// const newProfession = new NewInfo("Mahmud", "Hasan", "Study");
// console.log(newProfession);

// NewInfo.prototype.getAllInfo = function () {
//   return `${this.firstName} ${this.lastName} ${this.profession}`;
// };

// NewInfo.prototype.__proto__ = Person.prototype;
// console.log(NewInfo.prototype.__proto__ = Person.prototype);

// console.log(newProfession.getAllInfo());
// const PersonOne = new Person("mahmud", "hasan");
// const PersonTwo = new Person("mahdi", "hasan");
// console.log(PersonOne);
// console.log(PersonTwo);
// console.log(PersonOne.getFullName());
// console.log(PersonTwo.getFullName());
// PersonOne.getFullName();
// newProfession.getFullName();

// Creating Objects
// const Obj = {
//   init: function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return this;
//   },
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// Obj.init("mahmud", "Hasan");
// const Obj = new Object();
// Obj.firstName = "mahmud"
// Obj.lastName = "hasan"

// const Person = {
//     firstName: "Tahsin",
//     lastName: "hasan"
// }

// const Obj = Object.create(
//   Person,
//   {
//     firstName: {
//       value: "mahdi",
//     },
//     // lastName: {
//     //   value: "hasan",
//     // },
//   }
// );
// console.log(Obj)
// console.log(Obj.firstName);

// <--***** OOP ES6 *****-->
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getAllInfo(){
    return `${this.firstName} ${this.lastName}`;
  }
}

class NewPerson extends Person {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName)
    this.profession = profession
  }
  fullName() {
    return this.firstName + ' ' + this.lastName + ' ' + this.profession
  }
}


const PersonOne = new Person("mahmud", "hasan")
const PersonTwo = new Person("mahdi", "hasan")
const PersonThree = new NewPerson("masnun", "hasan", "study")
console.log(PersonThree.getAllInfo());