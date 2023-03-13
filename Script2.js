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
  // todo clear error
  document.getElementById('error').innerHTML = ''
  let guess = document.getElementById("inp").value
  console.log(guess)

  // let numberOfGuess = 1;
  let numberAsString = String(generatedNumber)
  if (guess == null || guess == "") {
    addDivWithMassege("error", "Ти не ввів число.")
    return;
  }
  if (!compareLenghts((guess + "").length, (generatedNumber + "").length)) {
    return;
  }
  // 
  // 

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
    // addDivWithMassege("diw",guess + " ," + numberOfMatches + " ," + numberOfPresent + " ," +  numberOfWrong  )
    const resultId = "result" + numberOfGuess;
    // addDivWithMassege(resultId, '');
    //diw
    document.getElementById('diw')
    var div = document.createElement("div")
    div.id = resultId
    //'diw'
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
    // const element = array[i];
    
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
  // let guess = alert("Вгадай число! Підсказка " + (num + "").length + " цифр у числі")
  // while ((num + "").length != (guess + "").length) {
  //   if ((num + "").length < (guess + "").length) {
  //     guess = alert("Ти ввів забагато цифр");
  //   }
  //   else {
  //     guess = alert("Ти ввів замало цифр");
  //   }
  //   if (guess == null) {
  //     return
  // }
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


// let numberAsString = String(generatedNumber)
function uniqueIndexes(max, qty) {
  const retVal = [];
  while (retVal.length < qty) {
    const idx = Math.floor(Math.random() * max);
    //qty=6;max=10
    // [7,5,3,]
    if (retVal.indexOf(idx) === -1) retVal.push(idx);
  }
  return retVal;
}

// while ((num + "").length !=  (gue + "").length){
//   if ((num + "").length <  (gue + "").length){
//      gue = prompt ("Число дуже довге");
//   }

// }

// function uniqueIndexes(max, qty) {
//     const retVal = {};
//     while (qty > 0) {
//       const idx = Math.floor(Math.random() * max);
//       if (retVal[idx] === undefined) {
//         //{123:123,
//         //345:345,
//         //567:567,789:789,654:654}
//         retVal[idx] = idx;
//         qty--;
//       }
//     }
//     return Object.values(retVal);
//     //[123654,345,5674,78978,654014]
//     //[2,3,8,0,9,1]
//   }



// while (guess != number) {
//   let numberOfMatches = 0;
//   let numberOfPresent = 0;
//   for (var i = 0; i < guess.length; i++) {

//     if (guess[i] == numberAsString[i]) {
//       numberOfMatches++;
//     } else if (numberAsString.includes(guess[i])) {
//       numberOfPresent++;
//     }
//     console.log(guess[i])
//     console.log(numberAsString.includes(guess[i]))
//   };
//   console.log(numberOfMatches)
  // let moreOrLess = "Мало"
  // if (guess > number) {
  //   moreOrLess = "Багато"
  // }
  // let moreOrLess = (guess > number) ? "Багато" : "Мало";
  // guess = alert(moreOrLess + ". Не вгадали ❌. В числі " + "Співпало: " + numberOfMatches + " цифри.\n" + "не на своїх місцях " + numberOfPresent);
  // // numberOfGuess = numberOfGuess + 1;




//   alert("Ви вгадали! Дуже добре! 💰 Вам понадобилось " + numberOfGuess + " спроб.")
// }

// runScript();
// //[5,8,6,3,4,1,0,9,2,7]
// //[0,1,2,3,4,5,6,7,8,9]