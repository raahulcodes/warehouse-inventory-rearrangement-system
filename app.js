
// making the inventory array
let inventory = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer",
    "Scanner"
];
let inventoryNew = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew1 = [...inventory];                               //using the spread parameter to create copy of array


// 1. Replacing the last two products with the first two products
console.log(inventoryNew.copyWithin(4, 0, 2));                  //Using the copyWithin() method to print the updated list

// 2. Copying the last three products to the begining of the inventory
console.log(inventoryNew1.copyWithin(0, 3, 6));
