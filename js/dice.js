function roll() {
  var randomNumber = getNumber();
  return randomNumber;
}

//Prints dice roll to the page

function printNumber(number) {
  var diceDiv = document.getElementById("dice");
  if (number > 8) {
    diceDiv.style.color = "red";
  } else {
    diceDiv.style.color = "blue";
  }
  diceDiv.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = roll();
  printNumber(result);
};

function getNumber() {
  var sides = parseInt(document.getElementById("sides").value);
  var num = Math.floor(Math.random() * sides) + 1;

  var count = 1;

  while (count > 0) {
    alert("You are awesome!");
    count--;
  }

  return num;
}

function test() {
  console.log(getNumber());
}
