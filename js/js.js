let alphabetArr = []; // All alphabets in keyboard are stored here..
let words = ['volvo' , 'mercedes', 'every' , 'mehran', 'city', 'honda', 'land-cruiser','sedan', 'ferrari', 'lamborghini'] ; // all words in hngman 
let guessWord = [];// the word guessed
let mistakeArr = []; // mistaken letters stored here .. limit =7
// ctrl+h -> find and replace

let randomNumber;
let prevRandomNum;
// -- generates a random number and save it in the variable
let generateRndNum = () =>{
   prevRandomNum = randomNumber;
   randomNumber= parseInt(Math.random()*(words.length));
}
generateRndNum();
console.log(randomNumber);

let currentWord = words[randomNumber]; // array of current word
console.log(currentWord);

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

// -- converting from array to string ----
let arrayToString = (arrArg) => {
   let string= arrArg.join(" "); // array to string
   return string;
}

// --- Initializing guess array --- 
let guessArrMap = () => {
   guessWord = stringToArr(words);
   currentWord =guessWord;
   console.log(guessWord);
   guessWord = guessWord.map(() => {
      return '-';
   })
   let tempForGuessWord = arrayToString(guessWord);
   console.log(tempForGuessWord);
   document.getElementById('dashPara').innerHTML = tempForGuessWord;
}
guessArrMap();

// --- function to fetch next word
let nextWord = (randomNumber) => {
   guessArrMap();
   closeModal();
   for (let i = 65; i < 91; i++) {
      temp = String.fromCharCode(i);
      let temp2= document.getElementById(`${temp}`);
      temp2.style.backgroundColor = '#3d2a12';
   }
   generateRndNum();
}

// --- marking keys pressed ---- 
let keyPressed =(letter) => {
   letter = letter.toUpperCase();
   document.getElementById(`${letter}`).style.backgroundColor = '#2c2c68';
   
   // create another function to alert when same letter is pressed again..
}

// --- read key from keyboard ---
let readKey = (event) => {
   let temp = event.key;
   if(event.which> 96 && event.which<123){
      keyPressed(temp);
      let temp2 = words[randomNumber];
      // search + filter + repeat
      let pos = temp2.indexOf(temp);
      let pos2= guessWord.indexOf(temp); // checking for the letter in guess array, so if it exists then it won't be pushed in the array again
      //checking if guess array is equal to words array
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
         return false; // thsi happens if same key is pressed again
      }
      // console.log('jjjjjj');
   }else{
      return false;
   }
  
}


// --- read key from on-screen keyboard ---
let readKeyKB = (letter) => {
   letter = letter.toLowerCase();
   keyPressed(letter);
   let temp2 = words[randomNumber];
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
      return false; // thsi happens if same key is pressed again
   }
}

// -- if currentWord array is empty/filter if not ---
let checkWordStatus = (temp) => {
   for (let i = 0; i < guessWord.length; i++) {
      let a = '-';
      let temp = guessWord.indexOf(a,i);   
      if (temp === -1) {
         modalAppear('You win!');
      }   
   }
}

// --- correct alphabet ---- 
let correct = (pos, temp) => {
   guessWord = guessWord.map((value, index) => {
      if (pos === index) {
         return temp;
      } else {
         return value;
      }
   })
   let tempForGuessWord = arrayToString(guessWord); 
   document.getElementById('dashPara').innerHTML = tempForGuessWord; // guess word array printed into paragraph
   // -- modal apperad with we win ---
   checkWordStatus(temp);
   // generateRndNum();
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
            modalAppear("Let's try again!");
            break;
         }
   }
}
// ---- modal functions ----
let modalAppear = (temp) => {
   document.getElementById('headingModal').innerHTML = temp;
   document.getElementById('modal').style.transform = 'scale(1)';
   document.getElementById('overlay').style.display = 'initial';
 
 }
 let closeModal = () => {
   document.getElementById('overlay').style.display = 'none';
   document.getElementById('modal').style.transform = 'scale(0)';
 }


//-- some consoles ---
// console.log(words[randomNumber].length);
// console.log(words[randomNumber]);
// console.log(count);

