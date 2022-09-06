# Javascript-Refreshment
Belajar explantion of the sub topics, understand var, let, const, values, and references


# CONST & LET

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

# Arrow Functions =>

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

# forEach — iterates the function on each element of the array.

cars.forEach((car, index)=> console.log(index, car))
//output
0 Hyundai
1 Tata
2 Toyota


© Copyright - Ivan Alrasyid
