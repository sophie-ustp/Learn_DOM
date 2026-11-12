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


/* Button ändern */

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const color = formData.get("color");
  const name = formData.get("name");
  const size = formData.get("size") || "Not selected";
  const agreed = form.elements.agree.checked ? "Yes" : "No";

  alert(
    `Your information:\nColor: ${color}\nName: ${name}\nSize: ${size}\nAgreed: ${agreed}`
  );
});

/* Input ändern */
const nameInput = document.getElementById("name");
nameInput.placeholder = "Enter your name";
nameInput.required = true;

/* Div ändern */

const myDiv = document.getElementById("myDiv");

myDiv.textContent = "Hello! This is a div";
myDiv.style.backgroundColor = "pink";
myDiv.classList.add("highlight");