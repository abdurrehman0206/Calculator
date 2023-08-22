let numbers = [];
let operators = [];

// screen = document.getElementById("screen");
buffer = document.getElementById("buffer");
res = document.getElementById("res");
function isNum(num) {
  return !isNaN(num);
}
function isOperator(operator) {
  return (
    operator === "+" || operator === "-" || operator === "X" || operator === "/"
  );
}
const display = (value) => {
  if (isNum(value)) {
    buffer.innerHTML += value;
  } else if (isOperator(value)) {
    numbers.push(buffer.innerHTML);
    buffer.innerHTML = "";
    if (numbers.length === 2 && operators.length === 1) {
        if (operators[0] === "+") {
            res.innerHTML = Number(numbers[0]) + Number(numbers[1]);
        } else if (operators[0] === "-") {
            res.innerHTML = Number(numbers[0]) - Number(numbers[1]);
        } else if (operators[0] === "X") {
            res.innerHTML = Number(numbers[0]) * Number(numbers[1]);
        } else if (operators[0] === "/") {
            res.innerHTML = Number(numbers[0]) / Number(numbers[1]);
        }
        numbers = [];
        numbers.push(res.innerHTML);
        operators = [];
        operators.push(value);
    } else {
      
      operators.push(value);

      res.innerHTML = numbers;
    }
  }

  console.log(numbers.length, operators.length);

  //till function keys are presses build the numbers inputted into the steam
  if (value === "=") {
    stream.push(Number(buffer.innerHTML));
    buffer.innerHTML = "";
    res.innerHTML = stream;
  }
};

document.querySelectorAll(".key").forEach((Element) => {
  Element.addEventListener("click", () => {
    display(Element.innerHTML);
  });
});
