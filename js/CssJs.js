console.log("connected to the my css file using javascript");

// const section =document.getElementById("players-container");
// id dile # dite hobe r class dile . dite hobe
const sections= document.querySelectorAll("section"); 
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.backgroundColor="lightblue";
    section.style.border="2px solid green";
    section.style.padding="10px";
    section.style.margin="20px";
    section.style.borderRadius="10px";
    section.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)";
    section.style.fontFamily="Arial, sans-serif";
}

// css er modde style add kore just kon section niye kaj korte chai oita dite hobe tahole oi oita kaj korbe
// for( const section of sections){
//     section.classList.add("player-section");}


// document.getElementById("players-container").childNodes[1]
// document.getElementById("players-container").children[0]
//document.getElementById("players-container").childNodes[3].childNodes[1].style.color="red";








