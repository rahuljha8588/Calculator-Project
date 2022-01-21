let btn = document.querySelectorAll("button");
let screen = document.getElementById("screen");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var btntext = this.innerHTML;
    showresult(btntext);
  });
}

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    this.classList.add("animate");
    setTimeout(() => {
      this.classList.remove("animate");
    }, 100);
  });
}
var mode = false;
document.querySelector("span").addEventListener("click", function () {
  if (!mode) {
    document.querySelector(".changeCSS").setAttribute("href", "darkmode.css");
    this.innerHTML = 'Lightmode <i class="fas fa-sun"></i>';
    mode = true;
  } else {
    document.querySelector(".changeCSS").setAttribute("href", "lightmode.css");
    this.innerHTML = 'Darkmode <i class="fas fa-moon suncolor"></i>';
    mode = false;
  }
});

function showresult(text) {
  switch (text) {
    case "+":
      screen.value += text;
      break;
    case "-":
      screen.value += text;
      break;
    case "/":
      screen.value += "/";
      break;
    case "X":
      screen.value += "*";
      break;
    case "1":
      screen.value += text;
      break;
    case "2":
      screen.value += text;
      break;
    case "3":
      screen.value += text;
      break;
    case "4":
      screen.value += text;
      break;
    case "5":
      screen.value += text;
      break;
    case "6":
      screen.value += text;
      break;
    case "7":
      screen.value += text;
      break;
    case "8":
      screen.value += text;
      break;
    case "9":
      screen.value += text;
      break;
    case "0":
      screen.value += text;
      break;
    case "C":
      screen.value = "";
      break;
    case ".":
      screen.value += text;
      break;
  }
  if (text == "Enter" || text == "=") {
    screen.value = eval(screen.value);
  }
}

document.addEventListener("keypress", function (event) {
  showresult(event.key);
});
