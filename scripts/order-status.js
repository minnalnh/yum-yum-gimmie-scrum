import { getElement } from "./utils/domUtils.js";

console.log ("hello från js");



const iconClose = getElement(".header__icon--close"); 

iconClose.addEventListener("click", (e) => {
    const ikonC = e.target.closest("iconClose");
    
        window.location.href ="menu.html"
        console.log("klick");
        
    return;
})

const iconMenu = getElement(".header__icon--menu"); 

iconMenu.addEventListener("click", (e) => {
    const ikonM = e.target.closest("iconMenu");
    
        window.location.href ="nav.html"
        console.log("klick");
        
    return;
})

const showOrder = getElement(".btn"); 

showOrder.addEventListener("click", (e) => {
    const ikonM = e.target.closest("showOrder");
    
        window.location.href ="receipt.html"
        console.log("klick");
        
    return;
})