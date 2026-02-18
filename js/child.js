//document.createElement("h1").innerText="Hello World";


//create element and set innerText or innerHTML
const newChild=document.createElement("h1");
newChild.innerText = "New Born footballer here"; 

// find the parent where yopu will add the child
const playersList= document.getElementById("player-list");

//append the child to the parent 
playersList.appendChild(newChild);