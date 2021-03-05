
import { createImg } from "./modules/charImages.js"


const creditsImgAreas = document.getElementsByClassName("creditName");

for (let i = 0; i < creditsImgAreas.length; i++) {

    createImg(creditsImgAreas[i])
}