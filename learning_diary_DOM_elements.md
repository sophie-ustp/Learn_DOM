__what is the "document" variable in javascript?__

You usually don't declare the document variable yourself, the browser creates the document for each webpage

It is part of the DOM, which lets Javascript inspect and change the page. 

The whole point of this is, that html defines the structure and javascript changes it dynamically. -> The user of the website can add items without having access to the original html file!

__what can I do with the "document" variable?__

Document lets JavaScript read and change the page's content and structure 
-> you can change the heading1, heading2, text Content, etc. 

__How can I access the list "myList" in the html file?__


let myList = document.getElementById("myList");

- document: refers to the HTML document.
- getElementById("myList"): finds the element with the ID myList.
- myList: is the variable, which stores the HTML element 

__How can I change myList?__

you could add, change, replace or remove an item/the list:

JavaScript uses the DOM to manipulate the HTML elements, therefore changing something like myList looks like this:

__add an item:__

let myList = document.getElementById("myList");

let newItem = document.createElement("li");
newItem.textContent = "Grapes";

myList.appendChild(newItem);

__change an item:__

myList.children[0].textContent = "Strawberry";

__replace the list:__

myList.innerHTML = `
  <li>Strawberry</li>
  <li>Mango</li>
  <li>Pineapple</li>
`;

__remove an item:__
myList.children[1].remove();

