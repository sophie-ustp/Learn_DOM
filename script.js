// add a new Item 

let myList = document.getElementById("myList");

let newItem = document.createElement("li");
newItem.textContent = "Item 4";

myList.appendChild(newItem);

// change an Item 

myList.children[1].textContent = "Strawberry";

// replace the List

//myList.innerHTML = `
//  <li>Strawberry</li>
//  <li>Mango</li>
//  <li>Pineapple</li>
//`;
