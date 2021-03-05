function createImg(refNode) {
    const myText = refNode.innerText

    let myColorCodes = []

    for (let i = 0; i < myText.length; i++) {
        
        myColorCodes.push(myText.charCodeAt(i))

    }

    // here, find out if i > myColorCodes.length: this lets us know not to call an index > length of that array
    let j = Math.floor((16 / myColorCodes.length))
    // extend array
    const colorCodes = colorCodeArrExtendor(myColorCodes, j)
    const colorWrapperTR = document.createElement("div");
    
    for (let i = 0; i < 16; i++) {

        let colorBlock = document.createElement("div");

        
        // we need math to figure out of the char code in myColorCodes is > 255, which is the limit for RGBA. Similar to above:
        // rounddown ( colorCode / 255 ) < will give us a number of 255s to sub from the code so that it essentially wraps around 255


        colorBlock.setAttribute("style", "height:20px; width:20px;");
        let r = colorCodes[i] * (i + 1) * 0.1
        let g = colorCodes[i + 1] * (i + 2) * 0.1
        let b = colorCodes[i + 2] * (i + 3)  * 0.1

        // opacity, 1 or 0, a "random" but predictable manner, just see if a controlled "random" val is odd/even
        let a = Math.floor(r * g * b) % 2

        colorBlock.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        
        colorWrapperTR.appendChild(colorBlock)
    }


    //create duplicates
    colorWrapperTR.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap;");
    const colorWrapperBL = colorWrapperTR.cloneNode(true)
    const colorWrapperBR = colorWrapperTR.cloneNode(true)
    reverseChildren(colorWrapperBR)
    const colorWrapperTL = colorWrapperBR.cloneNode(true)
    colorWrapperBL.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap-reverse;");
    colorWrapperTL.setAttribute("style", "height:80px; width:80px;display: flex;flex-wrap: wrap-reverse;");
    // create housing & append
    const wrapperWrapper = document.createElement("div");
    wrapperWrapper.appendChild(colorWrapperTL)
    wrapperWrapper.appendChild(colorWrapperTR)
    wrapperWrapper.appendChild(colorWrapperBL)
    wrapperWrapper.appendChild(colorWrapperBR)

    
    wrapperWrapper.setAttribute("style", "background-color: black;height:160px; width:160px;display: flex;flex-wrap: wrap-reverse;margin-left: auto;margin-right: auto;");
    wrapperWrapper.classList.add("charImgWrapper");

    refNode.appendChild(wrapperWrapper)
}

function reverseChildren(parent) {
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
}

function colorCodeArrExtendor(arr, factor) {
    for (let i = 0; i < factor; i++) {
        
        arr = arr.concat(arr);
        
    }

    return arr
}

export { createImg }