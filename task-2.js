// External JavaScript

console.log("Hello from External JavaScript!");

// Task 2: Variables
let name = "Vinay Kumar";
let age = 22;
let city = "Hyderabad";

// Update one variable (change city)
city = "Bangalore";

// Display values in console
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Display values on webpage
document.getElementById("variables").innerHTML = `
  <strong>Variable Details:</strong><br>
  Name: ${name}<br>
  Age: ${age}<br>
  City: ${city}
`;
