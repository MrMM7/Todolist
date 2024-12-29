let $ = document;

let btn = $.getElementById("btn");
let input = $.getElementById("inputBox");
let list = $.getElementById("list");
btn.addEventListener("click", function () {
  let newLiElem = $.createElement("li");
  newLiElem.innerHTML = input.value;
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
  if (input.value) {
    list.append(newLiElem);
    newLiElem.append(newCheckboxElem);
    newLiElem.append(newBtnElem);
  }
  input.value = "";
});
