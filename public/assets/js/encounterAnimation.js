const premEl = document.getElementById('demo');
const premiseText = premEl.innerText;
let i = 0;
const speed = 20;
let newText = '';
function typeWriter(text) {
  if (i < premiseText.length) {
    premEl.innerHTML += premiseText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById('btnContainer').classList.remove('hideButton');
  }
}
function getText(text) {
  console.log(text);
  premEl.innerText = '';
  typeWriter(text);
}
getText(premiseText);

const conseqEl = document.getElementById('consequence');
function consequenceTypeWriter(text) {
  if (i < newText.length) {
    conseqEl.innerHTML += newText.charAt(i);
    i++;
    setTimeout(consequenceTypeWriter, speed);
  }
}
function consequenceText(text) {
  console.log(text);
  premEl.innerText = '';
  newText = text;
  i = 0;
  consequenceTypeWriter(text);
}

// setTimeout(() => {
//   document.getElementById('btnContainer').classList.remove('hideButton');
// }, 5000);
