export const characterTools = {
    startGameSound: (element) => {
        var audio = new Audio("/assets/sounds/gameStart.wav");
    
        element.onclick = function() {
            audio.play();
        }
    },
    hoverOverButtons: () => {
        $(".charButton").hover(function(){
            $(this).css("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "white");
          });
    },
    hoverOverNextAdventure: (button) => {
        $(`#${button}`).hover(function(){
            $(this).css("background-color", "red");
            }, function(){
            $(this).css("background-color", "white");
          });
    }
}

