import { characterTools } from './modules/characterTools.js'
// this is for charSelector

import { createImg } from "./charImages.js"

function selectedChar() {
    const slectCharEls = document.getElementsByClassName("charSelect");

    for (let i = 0; i < slectCharEls.length; i++) {
        const charImagesArr = createImg(slectCharEls[i].innerText)
        slectCharEls[i].appendChild(charImagesArr)

        slectCharEls[i].onclick = function() {
            // get values
            const charId = this.id;
            const encId = this.getAttribute('value');
            const charName = this.innerText
            
            console.log("value", encId)
            // kill all buttons and header
            const charArea = document.getElementById("characterSelectContainer")
            charArea.innerHTML = ''
            // new html
            charArea.innerHTML = `
                <div class="columns">
                <div class="column is-four-fifths charSelect"><h1 class="encounterText"> Selected... ${charName} </h1></div>
                </div>

                <div class="columns">
                <a href="/encounters/${encId}/${charId}" ><div class="column is-four-fifths charSelect"><button id="nextAdventure" class="button is-medium is-full-length is-fullwidth is-hovered is-rounded charButton" >Continue Adventure...</button></a></div>
                </div>
            `

            // add onclick sound
            const nextAdventure = document.getElementById("nextAdventure")
            characterTools.hoverOverNextAdventure("nextAdventure")
            characterTools.startGameSound(nextAdventure)
        }
    }
}

// initializes on page load
characterTools.hoverOverButtons()
selectedChar();