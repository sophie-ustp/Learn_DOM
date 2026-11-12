// add a new Item 

let myList = document.getElementById("myList");

let newItem = document.createElement("li");
newItem.textContent = "Item 4";

myList.appendChild(newItem);

// change an Item 

myList.children[1].textContent = "Strawberry";

// replace the List

/* myList.innerHTML = `
  <li>Strawberry</li>
  <li>Mango</li>
  <li>Pineapple</li>
`;

*/

let canvas = document.getElementById("myCanvas");

canvas.width = 400;
canvas.height = 300;
canvas.style.backgroundColor = "lightblue";

let ctx = canvas.getContext("2d");

ctx.fillStyle = "pink";
ctx.fillRect(50, 30, 150, 80); 

/* Formular ändern */

