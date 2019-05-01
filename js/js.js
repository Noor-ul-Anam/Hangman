let alphabetArr = []; // All alphabets in keyboard are stored here..
let words = ['bracken']; // all words in hngman 
let guessWord = [];// the word guessed
let mistakeArr = []; // mistaken letters stored here .. limit =5

// ---- Keyboard ----
let keyboardAlphabet= () => {
   let element = document.getElementById('keyboard');
   // element.innerHTML = '';
   let countForAscii = 65;
   for (let i = 0; i < 26; i++) {
      let alphabet = () => {
         alphabetArr.push(String.fromCharCode(countForAscii));
         countForAscii++;
      }
      alphabet();
      element.innerHTML += `<div class="wordKB" id="${alphabetArr[i]}" onclick='readKeyKB("${alphabetArr[i]}")'>`+`<p>${alphabetArr[i]}</p>`+`</div>`;
   }
}
keyboardAlphabet();

// --- Convert from string to array ---
let stringToArr = (arrArg) =>{
   let arr = arrArg[0].split("");
   return arr;
}

// --- Initializing guess array --- 
let guessArrMap=() => {
   guessWord= stringToArr(words);
   guessWord = guessWord.map(() => {
      return '-';
   })
   let tempForGuessWord = guessWord.join(" ");
   document.getElementById('dashPara').innerHTML += tempForGuessWord;
}
guessArrMap();

// --- read key from keyboard ---
let readKey = (event)=> {
   let temp = event.key;
   // console.log(temp);
   // temp= String.fromCharCode(temp);
   // console.log(temp);
   let temp2= words[0];
   let pos = temp2.indexOf(temp);
   if (pos === -1) {
         incorrect(temp);
      }else{
         correct(pos,temp);
   }
}
console.log(guessWord);

// --- read key from on-screen keyboard ---
let readKeyKB = (letter)=> {
   letter = letter.toLowerCase();
   let temp2= words[0];
   console.log(temp2);
   console.log(letter);
   let pos = temp2.indexOf(letter);
   console.log(pos);
   if (pos === -1) {
         incorrect(letter);
      }else{
         correct(pos,letter);
   }
}

// // --- correct alphabet ---- 
let correct = (pos,temp)=> {
   // console.log(temp);
   // console.log(pos);
   let i=0;
   // console.log(guessWord[i]);
   guessWord = guessWord.map((value,index)=> {
      if( pos === index){
         // console.log(index);
         return temp;
      }else{
         // console.log(--i);
         return value;
      }
   })
   let tempForGuessWord = guessWord.join(" ");
   document.getElementById('dashPara').innerHTML = tempForGuessWord;
   // console.log(guessWord);
}

// --- Incorrect alphabet ---- 
let incorrect= (temp)=> {
   mistakeArr.push(temp);
   // console.log(mistakeArr.length);
   if (mistakeArr.length === 1) {
      document.getElementById('one').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 2) {
      document.getElementById('two').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 3) {
      document.getElementById('three').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 4) {
      document.getElementById('four').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 5) {
      document.getElementById('five').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 6) {
      document.getElementById('six').setAttribute("class", "visible");  
   }else if (mistakeArr.length === 7) {
      document.getElementById('seven').setAttribute("class", "visible");  
   }else{
      //to be added ----> modal
   }
}

//-- some consoles ---
// console.log(parseInt(Math.random()*10));
// console.log(words[0].length);
// console.log(count);

