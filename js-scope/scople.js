// what is a scope in js?
// A scope is a space or environment where variables and functions are declared.

// There are two types of scope in JavaScript:
// 1. Local scope
// 2. Global scope

// JavaScript has function scope: Each function creates a new scope.
// Scope determines the accessibility (visibility) of these variables.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Local JavaScript Variables
// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables have Function scope: They can only be accessed from within the function.



const myCity = "Milan" // Global scope
function myFunction() {
    const myCity = "New York" // Local scope
    console.log(myCity)
}
myFunction() // New York
console.log(myCity) // Milan

console.log("---------------------------------------")

// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.
// A global variable has global scope: All scripts and functions on a web page can access it.


// Scope Pollution
// Scope pollution is when we have too many variables in the global scope.
// Variables that are declared without the var keyword are automatically created in the global scope.
// The global scope can easily be polluted by variables from different scripts.
// Therefore, it is a good practice to keep variables local; whenever possible.


let readLondon  = "portobello road"
let hightWay = "M1"
let stateRoad = "A1"

console.log(`readLondon: ${readLondon}
            \n hightWay: ${hightWay}
            \n stateRoad: ${stateRoad}\n`)

const callMyWay = () => {
  let readLondon = "portobello road";
  let hightWay = "M1";
  let stateRoad = "A1";
  console.log(`I am driving on ${hightWay} and I am going to ${readLondon}`)
}
console.log("callMyWay()")
callMyWay();
console.log("---------------------------------------")

const callWrongWay = () => {
  readLondon = "totenham court road";
  hightWay = "M25";
  stateRoad = "A10";
  console.log(`I am driving on ${hightWay} and I am going to ${readLondon}`)
}
console.log("callWrongWay()")
callWrongWay();


console.log("---------------------------------------\n" )
// how to make a good scoping in js
// 1. Avoid Global Variables
// 2. Local Variables
// 3. Block Scope
// 4. Module Scope
// 5. Practice Clean Coding
// 6. Use Strict Mode
// 7. Avoid Creating Variables in a Loop
// 8. Use Functions to Create Local Scopes
// 9. Use let and const
// 10. Use Immediately Invoked Function Expressions (IIFE)
// 11. Use Modules
// 12. Use Classes
// 13. Use Arrow Functions
// 14. Use Callback Functions

//example of Block Scope
// Variables declared with the let and const keyword can have block scope.
// Variables declared inside a block {} can be accessed from outside the block.

  {
      let x = 2;
      console.log(x); // 2
  }
  //console.log(x); // ReferenceError: x is not defined

  const myFooScooping = () => {
    let x = 2;
    let y = 3;
    console.log(x); //
    console.log(y); //
    if (x === 2) {
        let x = 3;
        console.log(x); // 3
    }
    console.log(x); // 2
  }
  myFooScooping();


//example of Module Scope
// Before ES6, JavaScript had only Global Scope and Function Scope.
// ES6 introduced the let and const keywords which can have Block Scope.
// ES6 also introduced a new scope called the Module Scope.

// create a variable that is inside a module
//let privateVar = "I'm private"; // privateVar is not defined
import { publicVar } from "./module.mjs";
console.log(publicVar); // I'm public
//console.log(privateVar); // ReferenceError: privateVar is not defined
