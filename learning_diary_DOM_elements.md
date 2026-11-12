# canvas
Canvas similar to the "real-life" canvas -> you can paint something on it 

 -> put into the html.file: <canvas id="myCanvas" width="100" height="100"></canvas>

 parameters you can change through java.script: (a lot, but here are some examples)

 1. width 
 2. height 
 3. style 

*How to?* 

-> in javascript file:

__Aufrufen mit:__ let canvas = document.getElementById("myCanvas"); 

hier wird es mit einer Variable aufgerufen (let Variable), aber kann auch durch eine Konstante aufgerufen werden. 
wichtig ist "document.getElementById("....");

__dann beliebige Parameter ändern durch Punktnotation__

Beispiele: 

canvas.width = 400;
canvas.height = 300;
canvas.style.backgroundColor = "lightblue";

# form 

= Formular –> wird verwendet, um Informationen vom Benutzer zu sammeln. Zb. die Email-Adresse, den Vornamen, etc,. 

in HTML sieht das dann ungefähr so aus:

<form id="myForm" action="/submit" method="post">
  <input type="text" name="username" required>
  <input type="email" name="email">
  <button type="submit">Send</button>
</form>

Das Formular enthält zwei Eingabefelder und einen Button. Wenn man diesen betätigt, werden die Daten abgeschickt. 

–––––––––––– Wie greife ich in Javascript auf das Formular zu? ––––––––––––––––

const form = document.getElementById("myForm");

Hier als Konstante aufgerufen und der Struktur mit document.getElementbyId("---");

–––––––––––– Welche Parameter können verändert werden? ––––––––––-

in JavaScript kann man folgende Parameter verändern:
1. action 
2. method 
3. name 
4. id 
5. elements 
6. length 

(und noch mehr)


Properties beschreiben den Zustand oder die Einstellungen eines Formulars. 
Methods führen Aktionen aus, und 
Events ermöglichen es JavaScript, auf bestimmte Ereignisse zu reagieren.


# button 

Ein Button ist ein klickbares Element. Wenn man drauf klickt, passiert im besten Fall etwas. 

in HTML:
<button type="button" id="submitBtn">Submit</button>

in Javascript: 

const button = document.getElementById("myButton");

console.log(button.textContent); // zeigt: "Klick mich"
button.textContent = "Angeklickt!";
button.disabled = false;


–––––––––––– Welche Parameter können verändert werden? ––––––––––-

1. textContent
2. type 
3. disabled
4. value
5. name 
6. title 
7. style 
...


# input 

Bei input handelt es sich um ein Eingabefeld. Und je nach "type" kann es sich um eine Checkbox handeln oder ein Radio-Button sein 

in HTML: 
<input type="radio" id="sizeSmall" name="size" value="small">


–––––––––––– Welche Parameter können verändert werden? ––––––––––-

1. value 
2. type 
3. id 
4. name 
5. placeholder 
6. checked
7. disabled 
8. required 
...




# div 






# table 








# ul 






# select/option 


