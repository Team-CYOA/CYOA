// this is for charSelector

function selectedChar() {
    const slectCharEls = document.getElementsByClassName("charSelect");


    for (let i = 0; i < slectCharEls.length; i++) {
        
        slectCharEls[i].onclick = function() {
            // get values
            const charId = this.id;
            const encId = this.getAttribute('value');
            const charName = this.innerText
            console.log("value", encId)
            // kill all buttons and header
            const charArea = document.getElementById("renderedChars")
            charArea.innerHTML = ''
            // new header
            const selectedChar = document.createElement("h1");
            selectedChar.innerText = "Selected... " + charName
            charArea.appendChild(selectedChar)
            // next adventure routed button
            const nextAdventure = document.createElement("button");
            nextAdventure.innerHTML = `<a href="/encounters/${encId}/${charId}">Continue Adventure...</a>`
            // add onclick sound
            startGameSound(nextAdventure)
            // send to DOM
            charArea.appendChild(nextAdventure)
        }
    }
}

selectedChar();

function startGameSound(element) {
    var audio = new Audio("/assets/sounds/gameStart.wav");

    element.onclick = function() {
        audio.play();
    }
}