const passwordText = document.querySelector(".password__text");
const copyIcon = document.querySelector(".password__copy i");
const rangeInput = document.querySelector(".password__range input");
const sliderNumber = document.querySelector(".password__range span");
const generateButton = document.querySelector(".password__btn");

let allCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

//this function will be called on, page reload, generateButton clicked & rangeInput slide
const generatePassword = () => {
  let newPassword = "";

  //for loop will run till rangeInput value
  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }
  passwordText.textContent = newPassword; //replace icon
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordText.textContent);
  copyIcon.classList.replace("fa-copy", "fa-check");
});

generatePassword();
generateButton.addEventListener("click", generatePassword);
