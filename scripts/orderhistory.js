import { getElement } from "./utils/domUtils.js";

const showOrder = getElement(".btn"); 

showOrder.addEventListener("click", (e) => {
    const ikonM = e.target.closest("showOrder");
    
        window.location.href ="profile.html"
        console.log("klick");
        
    return;
})