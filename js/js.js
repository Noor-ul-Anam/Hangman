let alphabetArr = []; // All alphabets in keyboard are stored here..
let words = ['bracken']; // all words in hngman 
let guessWord = [];// the word guessed
let count;
let wrongGuess;

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
      element.innerHTML += `<div class="wordKB"  id="${alphabetArr[i]}">`+`<p>${alphabetArr[i]}</p>`+`</div>`;
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
   let temp2= words[0];
   let pos = temp2.indexOf(temp);
   if (pos === -1) {
         // incorrect();
      }else{
         correct(pos,temp);
   }
}
console.log(guessWord);

// // --- correct alphabet ---- 
let correct = (pos,temp)=> {
   console.log(temp);
   console.log(pos);
   let i=0;
   console.log(guessWord[i]);
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

// // --- Incorrect alphabet ---- 
// let incorrect= ()=> {
//    if (wrongGuess === 0) {
//       document.getElementById('one').setAttribute("visibility", "visible");  
//    }else if (wrongGuess === 1) {
//       document.getElementById('two').setAttribute("display", "inline-block");  
//    }
// }

// // --counter confusion for number of dashes ---
// let setCounter = () =>{
//    guessWord[0] === "" ? count=0:count++;
//    console.log(count);
// }
// setCounter();


//-- some consoles ---
// console.log(parseInt(Math.random()*10));
// console.log(words[0].length);
// console.log(count);

