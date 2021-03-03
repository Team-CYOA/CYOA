function createImg(text) {
    const myText = text

    let myColorCodes = []

    for (let i = 0; i < myText.length; i++) {
        
        myColorCodes.push(myText.charCodeAt(i))

    }


    const colorWrapper = document.createElement("div");
    
    let myDivArr = [];

    for (let i = 0; i < 16; i++) {
        let colorBlock = document.createElement("div");

        myDivArr.push(colorBlock); 
        colorBlock.setAttribute("style", "height:20px; width:20px;");
        let a = (Math.floor(i / (myColorCodes.length/16))) * 10
        let b = (Math.floor(i * (myColorCodes.length/16))) * 20
        let c = (Math.floor(i ^ (myColorCodes.length/16))) * 50
        let d = Math.round(a * b * c) 
        d = (Math.round(parseFloat(('0.' + String(d).substring(0, 3)))))
        colorBlock.style.backgroundColor = 'rgba(' + a + ',' + b + ',' + c + ',' + d + ')';
        colorWrapper.appendChild(colorBlock)
    }
    const colorWrapperRev = colorWrapper.cloneNode();
    colorWrapper.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap;");
    colorWrapperRev.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap-reverse;");

    return [colorWrapper, colorWrapperRev]

}

export { createImg }