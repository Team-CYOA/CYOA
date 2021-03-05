export const characterTools = {
    startGameSound: (element) => {
        var audio = new Audio("/assets/sounds/gameStart.wav");
    
        element.onclick = function() {
            audio.play();
        }
    },
    hoverOverButtons: () => {
        $(".charButton").hover(function(){
                this.parentNode.getElementsByClassName("charImgWrapper")[0].setAttribute("style", "background-color: white;height:160px; width:160px;display: flex;flex-wrap: wrap-reverse;");
                $(this).css("background-color", "yellow");
            }, function(){
                this.parentNode.getElementsByClassName("charImgWrapper")[0].setAttribute("style", "background-color: black;height:160px; width:160px;display: flex;flex-wrap: wrap-reverse;");
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


