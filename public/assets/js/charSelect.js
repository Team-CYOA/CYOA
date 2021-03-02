// this is for charSelector

function selectedChar() {
    const slectCharEls = document.getElementsByClassName("charSelect");
    console.log(slectCharEls)

    for (let i = 0; i < slectCharEls.length; i++) {
        
        slectCharEls[i].onclick = function() {
            const charId = this.id;
            const encId = this.value;
            const charName = this.innerText
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
            
            charArea.appendChild(nextAdventure)
        }
    }
}

selectedChar()