console.log("Event JS Connected");
// option 2 dor click event handler
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3 for event handler
const btnBlue = document.getElementById("btn-blue");
// console.log(btnBlue);
btnBlue.onclick = function () {
  document.body.style.backgroundColor = "blue";
};

// option 4 : different version of event handler

const btnMakePurple = document.getElementById("btn-purple");
// btnMakePurple.onclick =btnMakePurple;

btnMakePurple.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

// option 5: addEventListener

//getElementById().addEventListener('event type',handler)
document
  .getElementById("btn-green")
  .addEventListener("click", function makeGreen() {
    // console.log('Green button clicked');
    document.body.style.backgroundColor = "green";
  });

document
  .getElementById("btn-orange")
  .addEventListener("click", function makeOrange() {
    // console.log('Green button clicked');
    document.body.style.backgroundColor = "orange";
  });

  
