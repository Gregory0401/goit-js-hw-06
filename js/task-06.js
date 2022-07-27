const textInput = document.querySelector("#validation-input");

textInput.onblur = function () {
    const textInputLen = textInput.value.length;
    if (textInputLen === 6) {
        this.classList.remove("invalid");
        this.classList.add("valid");
    } else {
        this.classList.remove("valid");
        this.classList.add("invalid");
    }
};