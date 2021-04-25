const slct = document.querySelector("#select");
let selLen = slct.options.length;
const a = 6;

function getRandomLetter() {
  const randomChars = "abcdefghijklmnopqrstuvwxyz";
  const result = [];
  for (let i = 0; i < a; i++) {
    let res = "";
    let chars = randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
    if (res !== chars) {
      result.push(chars);
      res = chars;
    }
  }
  return result;
}

function render(array) {
  let div = document.createElement("div");
  div.classList.add("output");
  div.innerText = `${array}`;
  document.body.appendChild(div);
  console.log(array);
}

function nothingToDisplay(array) {
  let div = document.createElement("div");
  div.classList.add("output");
  div.innerText = "Sorry ther is no matched info by your request";
  document.body.appendChild(div);
  console.log(array);
}

let randomLettersArray = getRandomLetter();

slct.addEventListener("change", () => {
  let selectedValue = slct.value;

  let choosenNames;
  const showStuff = async (letter) => {
    const response = await fetch("get/list.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed with HTTP code " + response.status);
        }
        return response;
      })
      .then((result) => result.json())
      .then((data) => {
        const namesArray = [];
        for (let i = 0; i < data.length; i++) {
          namesArray.push(data[i].name.toLowerCase());
        }
        choosenNames = namesArray.filter((name) => name.startsWith(letter));
        console.log(choosenNames);
        if (choosenNames.length !== 0) {
          render(choosenNames);
        } else {
          nothingToDisplay();
        }
      })
      .catch(function () {
        this.dataError = true;
      });
  };
  let dataToshow = showStuff(selectedValue);
});

function addSelects() {
  for (let i = 1; i < a; i++) {
    slct.options[selLen++] = new Option(
      `Option: Value ${randomLettersArray[i]}`,
      `${randomLettersArray[i]}`
    );
  }
}
addSelects();
