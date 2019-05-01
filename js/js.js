let alphabetArr = []; // All alphabets in keyboard are stored here..
let words = ['volvolo']; // all words in hngman 
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
      element.innerHTML += `<div class="wordKB" id="${alphabetArr[i]}" onclick='readKeyKB("${alphabetArr[i]}")' >`+`<p>${alphabetArr[i]}</p>`+`</div>`;
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
   // search + filter + repeat
   let pos = temp2.indexOf(temp);
   if (pos != -1) {
      correct(pos,temp);
      let pos1 = temp2.indexOf(temp,pos+1);
      if(pos1 != -1){
         correct(pos1,temp);
         let pos2 = temp2.indexOf(temp,pos1+1);
         if(pos2 != -1){
            correct(pos2,temp);
         }
      }
   }else if(pos|| pos1 || pos2 === -1){
      incorrect(temp);
   }
}
   
// --- read key from on-screen keyboard ---
let readKeyKB = (letter)=> {
   letter = letter.toLowerCase();
   let temp2= words[0];
   let pos = temp2.indexOf(letter);
   if (pos != -1) {
      correct(pos,letter);
      let pos1 = temp2.indexOf(letter,pos+1);
      if(pos1 != -1){
         correct(pos1,letter);
         let pos2 = temp2.indexOf(letter,pos1+1);
         if(pos2 != -1){
            correct(pos2,letter);
         }
      }
   }else if(pos||pos1||pos2 === -1){
      incorrect(letter);
   }
}

// // --- correct alphabet ---- 
let correct = (pos,temp)=> {
   let i=0;
   guessWord = guessWord.map((value,index)=> {
      if( pos === index){
         return temp;
      }else{
         return value;
      }
   })
   let tempForGuessWord = guessWord.join(" ");
   document.getElementById('dashPara').innerHTML = tempForGuessWord;
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
   }else if(mistakeArr.length> 7){
      console.log();
      //to be added ----> modal
   }
}

// // --- change color of letters used ---
// let guessedWord = (letter) =>{
//    document.getElementById(`${letter}`).setAttribute("class", "colorLetter");
      // <!--; guessedWord("${alphabetArr[i]}");-->
// }

//-- some consoles ---
// console.log(parseInt(Math.random()*10));
// console.log(words[0].length);
// console.log(count);

