//adding proprties to an existing object

/*
 1- adding property   => object.newProperty = value
 2- Removing property => delete object.property  =>after removing an property and try to access the property it will output undefined


*/
const newProp = "level";
const person = {
  "first name": "hadeel",
  [newProp]: "setting property dynamically",
  lastName: "Shahin",
  age: 24,
  greet: function () {
    alert("Welcome");
  },
};

//adding
person.isAdmin = "yes";

console.log(person["first name"]);
delete person.age;
console.log(person);
console.log(person["level"]);
//////important
const propKey = "field 12";
const person1 = {
  [propKey]: "Max",
};
console.log(person1["field 12"]);
//dynamic property access
//setting proprties dynamically
delete person1["field 12"];
console.log(person1["field 12"]);

let y;
console.log(y);


