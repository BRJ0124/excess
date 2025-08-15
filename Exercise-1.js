/// var to store my name
var name = "Jennie";
name = "Jennie";
console.log("Name: " + name);

/// variable to store myy name, into words not number
let age = "Nineteen"; 
console.log("Age: " + age);

/// const ang value then reassigned and obserbahan kung naay error
const PI = 3.1416;
console.log("PI: " + PI);
// PI = 3.14;

/// naka boolean variable kung less than 25 true otherwise false
age = 19; 
let isStudent;
if (age <= 25) { 
    isStudent = true; 
} else { 
    isStudent = false; 
}
console.log(isStudent);

/// object person with nested properties
const person = {
    Name: "Josh", 
    Age: 20,
    Hobby: "Badminton",
    City: "Davao",
    }

    console.log(person.Name);
    console.log(person.Age);
    person.Age = 20;
    console.log(person.Hobby);
    console.log(person.City);

    /// array colors containing at least 5 color names (include at least one repeated value)
    const colors = ["pink", "orange", "blue", "Yellow", "Yellow"];
    console.log(colors);

    /// filtering and counting huhu
let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filtered = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 == 0 && num > 20) {
        filtered.push(num);
        count++;
    }

}

console.log("Found " + count + " numbers: [" + filtered + "]");