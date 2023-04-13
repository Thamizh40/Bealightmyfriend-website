// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name == "") {
      alert("Please enter your name");
      return false;
    }
  
    if (email == "") {
      alert("Please enter your email address");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    if (message == "") {
      alert("Please enter a message");
      return false;
    }
  
    return true;
  }
  