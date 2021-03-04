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
            const charArea = document.getElementById("characterSelectContainer")
            charArea.innerHTML = ''
            // new html
            charArea.innerHTML = `
                <div class="columns">
                <div class="column is-four-fifths charSelect"><h1 class="encounterText"> Selected... ${charName} </h1></div>
                </div>

                <div class="columns">
                <a href="/encounters/${encId}/${charId}" ><div id="nextAdventure" class="column is-four-fifths charSelect"><button class="button is-medium is-full-length is-fullwidth is-hovered is-rounded charButton" >Continue Adventure...</button></a></div>
                </div>
            `

            // add onclick sound
            const nextAdventure = document.getElementById("nextAdventure")
            startGameSound(nextAdventure)
        }
    }
}

function startGameSound(element) {
    var audio = new Audio("/assets/sounds/gameStart.wav");

    element.onclick = function() {
        audio.play();
    }
}

function hoverOverButtons(){
    $(".charButton").hover(function(){
        console.log("test")
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
      });
}

// initializes on page load
hoverOverButtons()
selectedChar();