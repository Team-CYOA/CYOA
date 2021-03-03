function createChar() {

    const newCharBTN = document.querySelector("#createChar");

    newCharBTN.addEventListener("click", ()=> {
        const audio = new Audio("/assets/sounds/gameStart.wav");
        audio.play();
        

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
        selectedChar.classList.add("encounterText");
        selectedChar.innerText = "Selected... " + name
        charArea.appendChild(selectedChar)
        // next adventure routed button
        const nextAdventure = document.createElement("button");
        nextAdventure.classList.add("encounterText");
        nextAdventure.innerHTML = `<a href="/encounters/1/${charId}">Continue Adventure...</a>`
        
        charArea.appendChild(nextAdventure)

    })
}

createChar()


function startGameSound(element) {
    
}