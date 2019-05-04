let alphabetArr = []; // All alphabets in keyboard are stored here..
// categories object
let categories = [
   cars = ['volvo' , 'mercedes', 'every' , 'mehran', 'city', 'honda', 'Land-Cruiser','sedan', 'ferrari', 'lamborghini']
];
// hints object
let hints = {
   //create nested object properties for different categories..
   [0]: 'its a small car', 
   [1]: 'its a small car', 
   [2] : 'its not a car'
}
console.log(cars[0]);
console.log(hints[0]);
console.log(hints[2]);

// let words = ['volvo' , 'mercedes', 'every' , 'mehran', 'city', 'honda', 'Land-Cruiser','sedan', 'ferrari', 'lamborghini'] ; // all words in hngman 
let guessWord = [];// the word guessed
let mistakeArr = []; // mistaken letters stored here .. limit =7
// ctrl+h -> find and replace


let randomNumber= parseInt(Math.random()*10); 
console.log(randomNumber);

// ---- Keyboard ----
let keyboardAlphabet = () => {
   let element = document.getElementById('keyboard');
   // element.innerHTML = '';
   let countForAscii = 65;
   for (let i = 0; i < 26; i++) {
      let alphabet = () => {
         alphabetArr.push(String.fromCharCode(countForAscii));
         countForAscii++;
      }
      alphabet();
      element.innerHTML += `<div class="wordKB" id="${alphabetArr[i]}" onclick='readKeyKB("${alphabetArr[i]}")' >` + `<p  >${alphabetArr[i]}</p>` + `</div>`;
   }
}
keyboardAlphabet();

// --- Convert from string to array ---
let stringToArr = (arrArg) => {
   let arr = arrArg[randomNumber].split("");
   return arr;
}

// --- Initializing guess array --- 
let guessArrMap = () => {
   guessWord = stringToArr(cars);
   console.log(guessWord);
   guessWord = guessWord.map(() => {
      return '-';
   })
   let tempForGuessWord = guessWord.join(" ");
   console.log(tempForGuessWord);
   document.getElementById('dashPara').innerHTML += tempForGuessWord;
}
guessArrMap();

// --- read key from keyboard ---
let readKey = (event) => {
   let temp = event.key;
   if(event> 96 && event<123){
      // -- add code---
   }
   keyPressed(temp);
   let temp2 = cars[randomNumber];
   console.log(temp2);
   // search + filter + repeat
   let pos = temp2.indexOf(temp);
   let pos2= guessWord.indexOf(temp); // checking for the letter in guess array, so if it exists then it won't be pushed in the array again
   if(pos2 === -1){
      if (pos != -1) {
         correct(pos, temp);
         let pos1 = temp2.indexOf(temp, pos + 1);
         if (pos1 != -1) {
            correct(pos1, temp);
            let pos2 = temp2.indexOf(temp, pos1 + 1);
            if (pos2 != -1) {
               correct(pos2, temp);
            }
         }
      } else if (pos || pos1 || pos2 === -1) {
         incorrect(temp);
      }
   }else{
      console.log('duh.'); // thsi happens if same key is pressed again
   }
}

// --- marking keys pressed ---- 
let keyPressed =(letter) => {
   letter = letter.toUpperCase();
   document.getElementById(`${letter}`).style.backgroundColor = '#2c2c68';
   
   // create another function to alert when same letter is pressed again..
}

// --- read key from on-screen keyboard ---
let readKeyKB = (letter) => {
   letter = letter.toLowerCase();
   keyPressed(letter);
   console.log(letter);
   let temp2 = cars[randomNumber];
   let pos = temp2.indexOf(letter);
   let pos2 =  guessWord.indexOf(letter);
   console.log(guessWord);
   if(pos2 === -1){
      if (pos != -1) {
         correct(pos, letter);
         let pos1 = temp2.indexOf(letter, pos + 1);
         if (pos1 != -1) {
            correct(pos1, letter);
            let pos2 = temp2.indexOf(letter, pos1 + 1);
            if (pos2 != -1) {
               correct(pos2, letter);
            }
         }
      } else if (pos || pos1 || pos2 === -1) {
         incorrect(letter);
      }
   }else{
      console.log('duh.'); // thsi happens if same key is pressed again
   }
}

// // --- correct alphabet ---- 
let correct = (pos, temp) => {
   let i = 0;
   guessWord = guessWord.map((value, index) => {
      if (pos === index) {
         return temp;
      } else {
         return value;
      }
   })
   console.log(guessWord);
   let tempForGuessWord = guessWord.join(" ");
   document.getElementById('dashPara').innerHTML = tempForGuessWord;
}

// --- Incorrect alphabet ---- 
let incorrect = (temp) => {
   mistakeArr.push(temp);
   // console.log(mistakeArr.length);
   switch (mistakeArr.length) {
      case 1:
         document.getElementById('one').setAttribute("class", "visible");
         break;
      case 2:
         document.getElementById('two').setAttribute("class", "visible");
         break;
      case 3:
         document.getElementById('three').setAttribute("class", "visible");
         break;
      case 4:
         document.getElementById('four').setAttribute("class", "visible");
         break;
      case 5:
         document.getElementById('five').setAttribute("class", "visible");
         break;
      case 6:
         document.getElementById('six').setAttribute("class", "visible");
         document.getElementById('seven').setAttribute("class", "visible");   
         break;
      case 7:
         document.getElementById('eight').setAttribute("class", "visible");      
         break;
      default:
         if (mistakeArr.length > 7) {
            modalAppear();
            // console.log('blah');
            break;
         }
   }
}
// ---- modal functions ----
let modalAppear = () => {
   document.getElementById('modal').style.transform = 'scale(1)';
   document.getElementById('overlay').style.display = 'initial';
 
 }
 let closeModal = () => {
   document.getElementById('overlay').style.display = 'none';
   document.getElementById('modal').style.transform = 'scale(0)';
 }


//-- some consoles ---
// console.log(cars[randomNumber].length);
// console.log(cars[randomNumber]);
// console.log(count);

