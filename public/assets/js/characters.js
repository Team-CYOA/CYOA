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
    })
}

createChar()