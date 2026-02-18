// 1. parent Node
const mainContainer = document.getElementById("main-container");

// 2.create child node
const placeSection = document.createElement("section");



//create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placeSection.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Afjal Hossain's house";

ul.appendChild(li1);
placeSection.appendChild(ul);

const li2 = document.createElement("li");
li2.innerText = "Bangladesh";
ul.appendChild(li2);


// 3. append placeSection to mainContainer
mainContainer.appendChild(placeSection); 


//easier to create element
const booksSection = document.createElement("section");

booksSection.innerHTML = `
    <h1>Books I need to read</h1>
    <ul>
        <li>Computer Graphics</li>
        <li>Mobile Application Development</li>
        <li>Amar Math Pora dorkar</li>
        <li>Biology</li>
    </ul> 
`
mainContainer.appendChild(booksSection);