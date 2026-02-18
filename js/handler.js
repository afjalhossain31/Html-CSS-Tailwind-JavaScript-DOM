document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("Button clicked");
    const pageTitle = document.getElementById("page-title");
    pageTitle.innerText = "Updated Successfully!";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  const userInfoEl = document.getElementById("user-info");
  userInfoEl.innerText = "User logged in successfully!";
});

//set event listener
document.getElementById("btn-update").addEventListener("click", function () {
  console.log("Update Button clicked!");
  //get the text from input field
  const nameInput = document.getElementById("input-name");
  console.log(nameInput);

  const name = nameInput.value;
  console.log("name:", name);

  //set the name
  const nameP = document.getElementById("name");
  nameP.innerText = name;
});

// document.getElementById("btn-login").addEventListener("click", function () {
//   const email = prompt("Enter your email:");
//   const password = prompt("Enter your password:");

//   if (email === "admin@example.com" && password === "admin123") {
//     alert("Login successful!");
//   } else {
//     alert("Invalid email or password!");
//   }
// });
