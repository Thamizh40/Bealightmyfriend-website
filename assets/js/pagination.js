var li = document.getElementById("paginated-list").getElementsByClassName("card");
var paginationNumber = document.getElementById("pagination-numbers");
var display = 6;
var count = 1;
var buttonCount = Math.ceil(li.length / display);

for (let i = 1; i <= buttonCount; i++) {
  var button = document.createElement("button");
  button.innerHTML = i;
  paginationNumber.appendChild(button);
}

document.getElementById("next-button").addEventListener("click", next);
document.getElementById("prev-button").addEventListener("click", prev);
document.getElementById("prev-button").setAttribute("disabled", true);

function main(pageNum) {
  var nextPage = display * pageNum;
  var prevPage = display * (pageNum - 1);
  for (let i = 0; i < li.length; i++) {
    li[i].style.display = "none";
    if (i < nextPage && i >= prevPage) {
      li[i].style.display = "block";
    }
  }

}

//-------------------------------------------------//

main(1);

var buttonNumbers = paginationNumber.getElementsByTagName("button");
for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i].addEventListener("click", buttonClick);
}

buttonNumbers[count - 1].classList.add("active");

function buttonClick() {
  buttonNumbers[count - 1].classList.remove("active");
  if (this.innerHTML == buttonCount) {
    document.getElementById("next-button").setAttribute("disabled", true);
    document.getElementById("prev-button").removeAttribute("disabled");
  }
  else if (this.innerHTML == 1) {
    document.getElementById("prev-button").setAttribute("disabled", true);
    document.getElementById("next-button").removeAttribute("disabled");
  }
  else {
    document.getElementById("next-button").removeAttribute("disabled");
    document.getElementById("prev-button").removeAttribute("disabled");
  }
  count = this.innerHTML;
  main(count);
  this.classList.add("active;")
}

function next() {
  document.getElementById("prev-button").removeAttribute("disabled");
  if (count !== buttonCount) {
    buttonNumbers[count - 1].classList.remove("active");
    buttonNumbers[count].classList.add("active");
    count++;
  }
  if (count === buttonCount) {
    document.getElementById("next-button").setAttribute("disabled", true);
  }
  main(count);
}

function prev() {
  buttonNumbers[count - 1].classList.remove("active");
  buttonNumbers[count - 2].classList.add("active");
  document.getElementById("next-button").removeAttribute("disabled");
  if (count !== 1) {
    count--;
  }
  if (count === 1) {
    document.getElementById("prev-button").setAttribute("disabled", true);
  }
  main(count);
}

