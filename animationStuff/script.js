let i = 0;
let text = "Hello world! I am alive and hungry, please let me have some of your tasty earth food Ive heard so much about.";
let speed = 275;

function typeWriter(button) {
  // console.log(button.id);
  
   if(i < text.length) {
       document.getElementById("demo").innerHTML += text.charAt(i);
       i++;
       setTimeout(typeWriter, speed);
   }
}