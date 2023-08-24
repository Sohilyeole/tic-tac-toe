let boxes = document.querySelectorAll(".boxes");
let z = 0; // for first  X then O then X

boxes.forEach((el) => {
  el.addEventListener("click", () => {
    let text = el.querySelector("p");
    if (text.innerText == "") {
      // avoid double click
      var id = el.getAttribute("id");
      if (z == 0) {
        text.innerText = "X";

        z = 1;
      } else if (z == 1) {
        text.innerText = "O";
        z = 0;
      }

      check(text.innerText, id);
    }
  });
});

let obj = {}; ///creating object
let data = 0; //checking result for 5 sucessive turn only
let result = 0; //for wining and los
function check(el, x) {
  data++;

  obj[x] = el;

  if (data >= 5) {
    if (obj[1] == obj[4] && obj[7] == obj[1] && obj[1] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(-11vw,18vw)rotate(90deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("1").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("4").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("7").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[3] == obj[6] && obj[9] == obj[3] && obj[3] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(11vw,18vw)rotate(90deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("3").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("6").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("9").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[1] == obj[2] && obj[3] == obj[1] && obj[1] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,7vw)rotate(0deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("1").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("2").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("3").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[7] == obj[8] && obj[9] == obj[7] && obj[7] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,29vw)rotate(0deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("7").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("8").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("9").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[1] == obj[5] && obj[9] == obj[1] && obj[1] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,18.7vw)rotate(45deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("1").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("5").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("9").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[3] == obj[5] && obj[7] == obj[3] && obj[3] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,18.7vw)rotate(135deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("3").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("5").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("7").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[2] == obj[5] && obj[8] == obj[2] && obj[2] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,18vw)rotate(90deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("2").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("5").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("8").style.backgroundColor = "rgb(9, 60, 9)";
    } else if (obj[4] == obj[5] && obj[6] == obj[4] && obj[4] != undefined) {
      result = 1;
      document.getElementById("line").style.transform =
        "translate(0vw,18vw)rotate(0deg)";

      document.getElementById("line").style.backgroundColor = "green";

      document.getElementById("6").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("4").style.backgroundColor = "rgb(9, 60, 9)";
      document.getElementById("5").style.backgroundColor = "rgb(9, 60, 9)";
    }
  }
  if (result == 1) {
    z = 2;
    document.getElementById("main").style.backgroundColor = "green";
    setTimeout(() => {
      location.reload();
    }, 10000);
  } else if (data == 9) {
    document.getElementById("main").style.backgroundColor = "red";
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
}
