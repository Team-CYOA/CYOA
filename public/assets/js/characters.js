function createChar() {

    const testButton = document.querySelector("#testbutton");

    testButton.addEventListener("click", ()=> {
    $.ajax({
        url: `/api/characters`,
        method: "POST"
    }).then(function(){    
    
    
    
        console.log("Clicked!")
    })


    });
}

createChar()