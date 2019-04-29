let alphabetArr = [];

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