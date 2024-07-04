const userText = document.getElementById('textarea');
let totalChar = document.getElementById('total-character');
let remainingChar = document.getElementById('remaining-character');
let selectTextBtn = document.getElementById('btn');

let userChar = 0;
const updateCounter = () => {
    userChar = userText.value.length;
    totalChar.innerText = userChar;
    remainingChar.innerText = 150 - userChar;
}

userText.addEventListener("keyup", updateCounter);

// Copy Clip-board

let userTextSelect = () => {
    userText.select();
    userText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(userText.value);
}

selectTextBtn.addEventListener("click", userTextSelect);