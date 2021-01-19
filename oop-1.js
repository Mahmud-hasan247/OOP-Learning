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

function Person(firstName, lastName) {
  //constructor functiond
  this.firstName = firstName;
  this.lastName = lastName;
  // this.fullName = function(){
  //     return `${this.firstName} ${this.lastName}`;
  // }
  // console.log(this)
}
// console.dir(Person)
Person.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};
// const newPerson = new Person("Masnun", "hasan");
// console.log(Person.prototype == newPerson.__proto__)

// Inheritance
function NewInfo(firstName, lastName, profession) {
  Person.call(this, firstName, lastName);
  this.profession = profession;
}

const newProfession = new NewInfo("Mahmud", "Hasan", "Study");
console.log(newProfession);

NewInfo.prototype.getAllInfo = function () {
  return `${this.firstName} ${this.lastName} ${this.profession}`;
};
console.log(newProfession.getAllInfo());

const PersonOne = new Person("mahmud", "hasan");
const PersonTwo = new Person("mahdi", "hasan");
console.log(PersonOne);
console.log(PersonTwo);
console.log(PersonOne.getFullName());
console.log(PersonTwo.getFullName());
PersonOne.getFullName();
