const res = document.getElementById("res");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");
document.querySelectorAll(".key").forEach((Element) => {
  Element.addEventListener("click", () => {
    display(Element.value);
  });
});

clearButton.addEventListener("click", () => {
  res.value = "";
});
deleteButton.addEventListener("click", () => {
  res.value = res.value.slice(0, -1);
});

const display = (value) => {
  if (value === "=") {
    const result = eval(res.value);
    res.value = result;
  } else {
    res.value += value;
  }
};
