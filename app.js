let $ = document;

let btn = $.getElementById("btn");
let input = $.getElementById("inputBox");
let list = $.getElementById("list");
let btn2 = $.getElementById("btn2");
let body = $.body;

// Functions
function addTodo() {
  let newLiElem = $.createElement("li");
  let inputValue = input.value.trim();
  newLiElem.innerHTML = inputValue;
  newLiElem.style.fontSize = "20px";
  newLiElem.style.listStyle = "none";
  let newBtnElem = $.createElement("button");
  newBtnElem.innerHTML = "Delete";
  newBtnElem.style.marginLeft = "10px";
  let newCheckboxElem = $.createElement("input");
  newCheckboxElem.type = "checkbox";
  newCheckboxElem.style.float = "left";
  newCheckboxElem.style.marginRight = "10px";
  newCheckboxElem.style.marginTop = "6px";
  newBtnElem.addEventListener("click", function () {
    newLiElem.remove();
  });
  newCheckboxElem.addEventListener("click", function () {
    if (newLiElem.style.textDecoration === "line-through") {
      newLiElem.style.textDecoration = "none";
    } else {
      newLiElem.style.textDecoration = "line-through";
    }
  });
  if (inputValue) {
    list.append(newLiElem);
    newLiElem.append(newCheckboxElem);
    newLiElem.append(newBtnElem);
  }
}
function clearAll() {
  list.innerHTML = "";
}

btn2.addEventListener("click", clearAll);
btn.addEventListener("click", addTodo);

// Add Todo using Enter
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
    input.value = "";
  }
});

// Auto Focus on input when Typing
body.addEventListener("keydown", function () {
  input.focus(input);
});
