function getRandomLetter() {
    const randomChars = 'abcdefghijklmnopqrstuvwxyz';
    const result = [];
    for ( let i = 0; i < 5; i++ ) {
        result.push(randomChars.charAt(Math.floor(Math.random() * randomChars.length)));
    }
    return result;
}
let randomLettersArray = getRandomLetter()

const slct = document.querySelector("#select");

const opt1 = document.createElement("option"),
      opt2 = document.createElement("option"),
      opt3 = document.createElement("option"),
      opt4 = document.createElement("option"),
      opt5 = document.createElement("option");

opt1.value = `randomLettersArray[0]`;
opt1.text = `Option: Value ${randomLettersArray[0]}`;
opt2.value = `randomLettersArray[1]`;
opt2.text = `Option: Value ${randomLettersArray[1]}`;
opt3.value = `randomLettersArray[2]`;
opt3.text = `Option: Value ${randomLettersArray[2]}`;
opt4.value = `randomLettersArray[3]`;
opt4.text = `Option: Value ${randomLettersArray[3]}`;
opt5.value = `randomLettersArray[4]`;
opt5.text = `Option: Value ${randomLettersArray[4]}`;

slct.add(opt1, null);
slct.add(opt2, null);
slct.add(opt3, null);
slct.add(opt4, null);
slct.add(opt5, null);

function showStuff() {
    fetch("/get/list.json")
        .then(response => response.json())
        .then(data => {
           console.log(data)
        });
}

showStuff()

















