# Javascript-Refreshment
Belajar explantion of the sub topics, understand var, let, const, values, and references


CONST & LET
You can not reassign const, but if you want, you can use ‘let’ keyword for reassignment.

// example of let
let name = 'Ramu';
name = 'Shamu';
console.log(name);
// output
Shamu
// example of const
const name = 'Ramu';
name = 'Shamu';
console.log(name);
// output
error: Assignment to constant variable
Note:- Same applies to objects & arrays too, if you using const to create an object, you can not reassign that object again. Although you can change the values of the parameters inside the object.

Arrow Functions =>
// Old way to write JS functions
function sayHello(name){
   console.log('Hello '+name);
}
sayHello('Ashwani')
//output
Hello Ashwani
/**
* @param {*} name
* ES6 way
*/
const sayHi = (name) => console.log('Hi '+ name);
// or without braces, if passing single parameter
const sayHi2 = name => console.log('Hi '+ name);
// or using Template literals
const sayHi3 = name => console.log(`Hi ${name}`);
sayHi('World')
sayHi2('ES6')
sayHi3('JS')
//output
Hi World
Hi ES6
Hi JS
let’s make a dummy array

const cars = ['Hyundai', 'Tata', 'Toyota'];
forEach — iterates the function on each element of the array.
cars.forEach((car, index)=> console.log(index, car))
//output
0 Hyundai
1 Tata
2 Toyota
map — pretty much same as forEach, but returns the data in a single variable.
const fruits = ['Apples', 'Bananas', 'Grapes'];
const fruit = fruits.map(fruit => fruit.slice(0,-1).toUpperCase());
console.log(fruit);
filter — filter the data, checks the condition on each element of the array
const people = [
  {id: 1, age: 20},
  {id: 2, age: 30},
  {id: 3, age: 40},
  {id: 4, age: 50},
]
// lets filter the people with age less than 41
const filtered_data = people.filter(person => person.age < 41 );
console.log(filtered_data);
// output is a new array with filtered data
[ 
  { id: 1, age: 20 }, 
  { id: 2, age: 30 }, 
  { id: 3, age: 40 } 
]
Spread Operator …
— just takes the copy of the given array and can insert more elements at the end of the array.

const arr = [1,2,3];
const arr2 = [...arr, 4, 5];
console.log(arr2);
//output is
[ 1, 2, 3, 4, 5 ]
DeStructuring
— this means you can take the values of an object in a variable, and directly use that variable, let’s say you have a vue or react component.

// Destructuring
const user = {
   name: 'Ashwani Garg',
   address:{
      pocket:'D 12',
      city: 'Rohini'
   },
   hobbies: ['movies','music']
}
console.log(user.name);
//  let's destructure the object
const { name, hobbies, address } = user;
const { pocket, city } = address;
console.log(address);
console.log(pocket);
console.log(hobbies[1]);
//output
Ashwani Garg
{ pocket: 'D 12', city: 'Rohini' }
D 12
music


# ENJOY CODE
