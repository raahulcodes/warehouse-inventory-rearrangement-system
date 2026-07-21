
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
let inventoryNew2 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew3 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew4 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew5 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew6 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew7 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew8 = [...inventory];                               //using the spread parameter to create copy of array
let inventoryNew9 = [...inventory];                               //using the spread parameter to create copy of array


// 1. Replacing the last two products with the first two products
console.log(inventoryNew.copyWithin(4, 0, 2));                  //Using the copyWithin() method to print the updated list

// 2. Copying the last three products to the begining of the inventory
console.log(inventoryNew1.copyWithin(0, 3, 6));

// 3.Duplicating mouse and keyboard over the other remaining elements of array
console.log(inventoryNew2.copyWithin(3, 1, 3));

// 4. Copying the first four products to 3rd position
console.log(inventoryNew3.copyWithin(2, 0, 4));

// 5. Replacing the last two products with the products starting from index 2
console.log(inventoryNew4.copyWithin(2, 4, 6));

// 6. Overwriting the elements ta index 1-3 to beginning of inventory
console.log(inventoryNew5.copyWithin(0, 1, 4));

// 7. Reorganizing Stock by copying all the elements after keyboard to beginning
console.log(inventoryNew6.copyWithin(0, 3, 6));

// 8. Duplicating first three inventory to last three positions
console.log(inventoryNew7.copyWithin(3, 0, 3));

// 9. printing the inventory while performing the required method
console.log(inventoryNew8.copyWithin(3, 0, 3));

// 10. using copyWithing() one call to achieve the desired inventory
console.log(inventoryNew9.copyWithin(0, 3, 6));
