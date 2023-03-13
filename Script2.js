let generatedNumber;
let numberOfGuess = 1;

function addDivWithMassege(id, message) {

  var elem = document.createElement("div");
  elem.append(message)
  document.getElementById(id).appendChild(elem)
  return elem;
}

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  generatedNumber = generateNumber();
  let btn = document.getElementById("btn")
  btn.addEventListener("click", runScript);
}

function runScript(event) {
  event.preventDefault()
  document.getElementById('error').innerHTML = ''
  let guess = document.getElementById("inp").value
  console.log(guess)

  let numberAsString = String(generatedNumber)
  if (guess == null || guess == "") {
    addDivWithMassege("error", "Ти не ввів число.")
    return;
  }
  if (!compareLenghts((guess + "").length, (generatedNumber + "").length)) {
    return;
  }

  if (guess != generatedNumber) {
    numberOfGuess++;
    let numberOfMatches = 0;
    let numberOfPresent = 0;
    if (numberOfGuess > 10) {
      addDivWithMassege("diw", "Ви програли 😵. Число було " + generatedNumber)
      document.getElementById("btn").disabled = "true"
      return
    }

    for (var i = 0; i < guess.length; i++) {

      if (guess[i] == numberAsString[i]) {
        numberOfMatches++;
      } else if (numberAsString.includes(guess[i])) {
        numberOfPresent++;
      }
      console.log(guess[i])
      console.log(numberAsString.includes(guess[i]))
    };
    let numberOfWrong = (generatedNumber + "").length - numberOfPresent - numberOfMatches;
    const resultId = "result" + numberOfGuess;
    document.getElementById('diw')
    var div = document.createElement("div")
    div.id = resultId
    document.getElementById('diw').appendChild(div)
    const numberElem = addDivWithMassege(resultId, guess );
    numberElem.className = "number"
    addPictograms(resultId, numberOfWrong, "wrong")
    addPictograms(resultId, numberOfPresent, "true")
    addPictograms(resultId, numberOfMatches, "clean")
    
    var clear = document.createElement("div")
    clear.className = "clear";
    document.getElementById(resultId).appendChild(clear)
    
  } else {
    addDivWithMassege("diw", "Ви вгадали! Дуже добре! 💰 Вам понадобилось " + numberOfGuess + " спроб. ")
    document.getElementById("btn").disabled = "true"
  }
}
function addPictograms(parentId, count, picClass){
  for (let i = 0; i < count; i++) {
    
    var pic = document.createElement("div")
    pic.className = picClass;
    document.getElementById(parentId).appendChild(pic)
}
}

function generateNumber() {
  let max = 10

  let qty = 6
  const genArr = uniqueIndexes(max, qty)
  let number = genArr.join('')

  console.log(number)
  return number
}

function compareLenghts(guessLength, generatedLength) {

  if (generatedLength != guessLength) {
    if (generatedLength < guessLength) {
      addDivWithMassege("error", "Ти ввів забагато цифр ")
    }
    else {
      addDivWithMassege("error", "Ти ввів замало цифр ")
    }
    return false;
  }
  return true;
}

function uniqueIndexes(max, qty) {
  const retVal = [];
  while (retVal.length < qty) {
    const idx = Math.floor(Math.random() * max);
    if (retVal.indexOf(idx) === -1) retVal.push(idx);
  }
  return retVal;
}
