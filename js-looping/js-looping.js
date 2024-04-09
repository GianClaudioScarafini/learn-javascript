// lopping what is that? 
// looping is a way to repeat a block of code multiple times.


const thisIsMyArray = ["Milan", "Raj", "Rajesh", "Rajendra"];

console.log(thisIsMyArray[0]);
console.log(thisIsMyArray[1]);
console.log(thisIsMyArray[2]);
console.log(thisIsMyArray[3]);

console.log("thisIsMyArray");
console.log("--------------------------------- \n");

// this is the wrong way to print the array.

//now lets count 1 to 10 using loop.
for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}

//revers looping same 10 to 0
for(let counter = 10; counter >=0; counter--){
    console.log(counter);
}

//looping over an array
const myArray = ["Milan", "Raj", "Rajesh", "Rajendra"];

for (let i=0; i < myArray.length; i++){
    console.log(`this city is ${myArray[0]}`);
}