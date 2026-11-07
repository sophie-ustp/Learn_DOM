-- what is the "document" variable in javascript? --

You usually don't declare the document variable yourself, the browser creates the document for each webpage

It is part of the DOM, which lets Javascript inspect and change the page. 

The whole point of this is, that html defines the structure and javascript changes it dynamically. -> The user of the website can add items without having access to the original html file!

-- what can I do with the "document" variable? --

Document lets JavaScript read and change the page's content and structure 
-> you can change the heading1, heading2, text Content, etc. 

-- How can I access the list "myList" in the html file?--


let myList = document.getElementById("myList");

- document: refers to the HTML document.
- getElementById("myList"): finds the element with the ID myList.
- myList: is the variable, which stores the HTML element 

-- How can I change myList?

you could add, change, replace or remove an item/the list:

JavaScript uses the DOM to manipulate the HTML elements, therefore changing something like myList looks like this:

add an item:

let myList = document.getElementById("myList");

let newItem = document.createElement("li");
newItem.textContent = "Grapes";

myList.appendChild(newItem);

change an item:

myList.children[0].textContent = "Strawberry";

replace the list:

myList.innerHTML = `
  <li>Strawberry</li>
  <li>Mango</li>
  <li>Pineapple</li>
`;

remove an item:
myList.children[1].remove();

