let alphabetArr = [];
let words = ['word'];
let guessWord = [];

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
      element.innerHTML += `<div class="wordKB" id="${alphabetArr[i]}">`+`<p>${alphabetArr[i]}</p>`+`</div>`;
   }
}
keyboardAlphabet();
console.log(parseInt(Math.random()*10));
console.log(words[0].length);

// --- Guess words ---
let dash = () => {
   let element = document.getElementById('dashPara');
   for (let i = 0; i < words[0].length; i++) {
      element.innerText += `-`;
   }
}
dash();