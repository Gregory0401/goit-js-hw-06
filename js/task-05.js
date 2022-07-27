const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultVal = "Anonymous";


textInput.addEventListener("input", (e) => {
    output.textContent = e.currentTarget.value;
    if (output.textContent === "") {
        output.textContent = defaultVal;
    }
});

