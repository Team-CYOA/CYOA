function createChar() {

    const newCharBTN = document.querySelector("#createChar");

    newCharBTN.addEventListener("click", ()=> {
        
        const newCharInput = document.querySelector("#charName");
        const newCharName = newCharInput.value;

        $.ajax({
            url: `/api/characters/${newCharName}`,
            method: "POST"
        }).then(function(){ 
            console.log("Clicked!")
        })
    });
}

createChar()
