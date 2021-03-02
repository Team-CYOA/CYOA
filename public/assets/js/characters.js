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
    }).then(function(){ 
        console.log("Clicked!")
        
        // now set up the "goto adventure" view
        const charName = name
       
        $.ajax({
            url: `/api/characters/`,
            method: "GET"
        }).then(function(res){
            
            console.log(res)
            const charArr = [...res].reverse()
            // get values
            const charId = (charArr.find(o => o.name === name)).id

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
            
            charArea.appendChild(nextAdventure)
        })


    })
}

createChar()
