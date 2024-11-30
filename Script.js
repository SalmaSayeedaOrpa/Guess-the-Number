
const userInput = document.querySelector('.input-num');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submitbtn');
const reStartBtn = document.querySelector('.start')
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const allGuessesArray = [];

function a() {
  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInputValue = userInput.value;
    if (userInputValue < randomNumber) {
      result.innerHTML = "Too low!";
    }
    else if (userInputValue > randomNumber) {
      result.innerHTML = "Too high!";
    }
    else {
      result.innerHTML = "You got it! Congratulations!!!";
      reStartBtn.disabled = false;
      submitBtn.disabled = true;
    }
    form.reset();
    allGuessesArray.push(userInputValue);
    allGuesses.innerHTML = 'Your guesses: ' + allGuessesArray.join(' , ');
  })
}
a();

reStartBtn.addEventListener('click', () => {
  reStartBtn.disabled = true;
  submitBtn.disabled = false;
  let randomNumber = Math.round(Math.random() * 100);
  result.innerHTML = null;
  allGuesses.innerHTML = ' ';
})