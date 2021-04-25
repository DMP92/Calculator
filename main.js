let button = document.querySelector(`button[data-key="${keyCode}"]`);

button.addEventListener('keypress', buttonPress);

function buttonPress(e) {
    let button = querySelector(`.button[data-key="${e.keyCode}"]`);
    button.classList.add("button:hover");
}
