const premEl = document.getElementById('demo');
const premiseText = premEl.innerText;
let i = 0;
const speed = 20;
function typeWriter(text) {

  if (i < premiseText.length) {
    premEl.innerHTML += premiseText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function getText() {
  premEl.innerText = '';
  typeWriter(premiseText);
}
getText();
