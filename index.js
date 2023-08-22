let stream = [];
// screen = document.getElementById("screen");
buffer = document.getElementById("buffer");
res = document.getElementById("res");
function isNum(num){
    return!isNaN(num);
}
function isOperator(operator){
    return operator === "+" || operator === "-" || operator === "X" || operator === "/";
}
const display = (value) => {
    if(isNum(value)){
        buffer.innerHTML += value;
    }
    else if(isOperator(value)){
        if(stream.length > 3){
            
        }
        stream.push(buffer.innerHTML);
        stream.push(value);
        buffer.innerHTML = "";
        res.innerHTML = stream;
    }
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

