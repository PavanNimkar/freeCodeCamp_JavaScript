const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
let results = document.querySelector("#results-div");
let input = document.querySelector("#user-input");

clearBtn.addEventListener("click", () => {
  results.innerText = "";
});

checkBtn.addEventListener("click", () => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if (!input.value) {
    alert("Please provide a phone number");
  } else if (regex.test(input.value)) {
    results.innerText = `Valid US number: ${input.value}`;
  } else {
    results.innerText = `Invalid US number: ${input.value}`;
  }
  input.value = "";
});
