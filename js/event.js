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
