import { getElement } from "./utils/domUtils.js";

// const showOrder = getElement(".btn"); 

// showOrder.addEventListener("click", (e) => {
//     const ikonM = e.target.closest("showOrder");
    
//         window.location.href ="profile.html"
//         console.log("klick");
        
//     return;
// })

const iconClose = getElement(".header__icon--close"); 

iconClose.addEventListener("click", (e) => {
    const ikonC = e.target.closest("iconClose");
    
        window.location.href ="profile.html"
        console.log("klick");
        
})