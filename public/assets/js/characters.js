function createChar() {

    const newCharBTN = document.querySelector("#createChar");

    newCharBTN.addEventListener("click", ()=> {
        
        const newCharInput = document.querySelector("#charName");
        const newCharName = newCharInput.value;
        
        ajaxChar(newCharName)
    });
}

function ajaxChar(name) {
    $.ajax({
        url: `/api/characters/${name}`,
        method: "POST"
    }).then(function(data){ 
        console.log("New Char Created!", data)
    
        // get values
        const charId = data.id

        // kill all buttons and header
        const charArea = document.getElementById("characterCreate")
        charArea.innerHTML = ''
        // new header
        const selectedChar = document.createElement("h1");
        selectedChar.innerText = "Selected... " + name
        charArea.appendChild(selectedChar)
        // next adventure routed button
        const nextAdventure = document.createElement("button");
        nextAdventure.innerHTML = `<a href="/encounters/1/${charId}">Continue Adventure...</a>`
        startGameSound(nextAdventure)
        charArea.appendChild(nextAdventure)

    })
}

createChar()


function startGameSound(element) {
    var audio = new Audio("/assets/sounds/gameStart.wav");

    element.onclick = function() {
        audio.play();
    }
}