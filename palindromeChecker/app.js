let input = document.querySelector("#text-input");
let checkBtn = document.querySelector("#check-btn");
let result = document.querySelector("#result");

checkBtn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  let inputText = input.value;
  let cleanText = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverseString = cleanText.split("").reverse().join("");
  if (!inputText) {
    window.alert("Please input a value");
  } else {
    if (reverseString === cleanText) {
      result.innerText = `${inputText} is a palindrome`;
    } else {
      result.innerText = `${inputText} is not a palindrome`;
    }
  }
}
