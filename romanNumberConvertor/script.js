let inputText = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");
let numerals = {};
let result = "";
function convertToRoman(number) {
  numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (const key in numerals) {
    let value = numerals[key];
    while (number >= value) {
      result += key;
      number -= value;
    }
  }
  return result;
}

convertBtn.addEventListener("click", () => {
  if (!inputText.value) {
    output.innerText = "Please enter a valid number";
  } else if (inputText.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputText.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result = convertToRoman(inputText.value);
    output.innerText = result;
    result = "";
  }
});
