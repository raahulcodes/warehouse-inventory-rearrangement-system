
// making the inventory array
let inventory = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer",
    "Scanner"
];

// 1. Replacing the last two products with the first two products
let inventoryNew = [...inventory];                               //using the spread parameter to create new array
console.log(inventoryNew.copyWithin(4, 0, 2));                  //Using the copyWithin() method to print the updated list
