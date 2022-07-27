const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", onChangeFontStyleInput);

function onChangeFontStyleInput(e) {
  text.style.fontSize = e.currentTarget.value + "px";
};
