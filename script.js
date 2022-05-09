const inputWriteLetter = document.querySelector('#carta-texto');
const btnSubmitLetter = document.querySelector("#criar-carta")
const pShowLetter = document.querySelector('#carta-gerada');
const pCounterWord = document.querySelector('#carta-contador');


btnSubmitLetter.addEventListener('click', cleanLetter);

///////////////////////////////////////
// 
function cleanLetter() {
  pShowLetter.innerText = '';
    verifyWriteLetter();
    changeStyleWord();
    counterWord()
}

///////////////////////////////////////
// Create tag span, each tag must have a word
function createLetter() {
  pShowLetter.innerText = '';
  let letter = inputWriteLetter.value;
  let letterSeparate = letter.split(' ');

  let classStyle = ['magazine1', 'magazine2', 'newspaper']
  let classSize = ['medium', 'big', 'reallybig']
  let classRotation = ['rotateleft', 'rotateright']
  let classInclination = ['skewleft', 'skewright']

  let classStyleSize = classStyle.length
  let classSizeSize = classSize.length
  let SizeclassRotation = classRotation.length
  let classInclinationSize = classInclination.length
  
  for (let index = 0; index < letterSeparate.length; index += 1) {
    let createSpan = document.createElement('span');
    pShowLetter.appendChild(createSpan);
    createSpan.innerText = letterSeparate[index];

    createSpan.classList.add(classStyle[Math.floor(Math.random() * classStyleSize)]);
    createSpan.classList.add(classSize[Math.floor(Math.random() * classSizeSize)]);
    createSpan.classList.add(classRotation[Math.floor(Math.random() * SizeclassRotation)]);
    createSpan.classList.add(classInclination[Math.floor(Math.random() * classInclinationSize)]);
  }
}

///////////////////////////////////////
// 
function verifyWriteLetter() {
  let letter = inputWriteLetter.value;
  // let letterSeparate = letter.split(' ');
  // || letter == (letterSeparate.length * ' ')
  // if (letter === '' || letter == (letterSeparate.length * ' ')) {
  if (letter.trim().length === 0) {
    pShowLetter.innerText = 'por favor, digite o conteúdo da carta.';
  } else {
    createLetter();
  }
}

///////////////////////////////////////
// 

function changeStyleWord() {
  let spamWord = pShowLetter.children;
  let classStyle = ['magazine1', 'magazine2', 'newspaper']
  let classSize = ['medium', 'big', 'reallybig']
  let classRotation = ['rotateleft', 'rotateright']
  let classInclination = ['skewleft', 'skewright']

  let classStyleSize = classStyle.length
  let classSizeSize = classSize.length
  let SizeclassRotation = classRotation.length
  let classInclinationSize = classInclination.length

  for (let index = 0; index < spamWord.length; index += 1) {

    spamWord[index].addEventListener('click', (event) => {
      event.target.className = '';
      event.target.classList.add(classStyle[Math.floor(Math.random() * classStyleSize)]);
      event.target.classList.add(classSize[Math.floor(Math.random() * classSizeSize)]);
      event.target.classList.add(classRotation[Math.floor(Math.random() * SizeclassRotation)]);
      event.target.classList.add(classInclination[Math.floor(Math.random() * classInclinationSize)]);
    })
  }
}

///////////////////////////////////////
// 
function counterWord() {
  let spamWord = pShowLetter.children;
  let counterWord = spamWord.length;
  pCounterWord.innerText = counterWord;
}