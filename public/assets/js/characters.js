function createChar() {

    const newCharBTN = document.querySelector("#newChar");

    newCharBTN.addEventListener("click", ()=> {
        $.ajax({
            url: `/api/characters`,
            method: "POST"
        }).then(function(){ 
            console.log("Clicked!")
        })
    });
}

createChar()

function allChars() {

    const allCharsBTN = document.querySelector("#allChars");

    allCharsBTN.addEventListener("click", ()=> {
        $.ajax({
            url: `/api/characters`,
            method: "GET"
        }).then(function(){ 
            console.log("Clicked!")
        })
    });
}

createChar()