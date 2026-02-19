// const items = document.getElementById("item-list").getElementsByClassName("item");

// for (const item of items){
//     item.addEventListener("click", function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("item")) {
      event.target.parentNode.removeChild(event.target);
    }
  });
//add a new item
document.getElementById("btn-add-item").addEventListener("click", function () {
  //create a new list item
  const ol = document.getElementById("item-list");

  //new item
const li = document.createElement("li");
li.classList.add("item");
li.innerText = "My Name Is Afjal Hossain - New Item";
    
//append the new item to the list
ol.appendChild(li);
});

