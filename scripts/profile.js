import { getElement } from "./utils/domUtils.js";

const showOrderHi = getElement(".btnOrder"); 

showOrderHi.addEventListener("click", (e) => {
    const ikonM = e.target.closest("showOrderHi");
    
        window.location.href ="orderhistory.html"
        console.log("klick");
        
    return;
})

const changeLogin = getElement(".btnKonto"); 

changeLogin.addEventListener("click", (e) => {
    const ikonM = e.target.closest("changeLogin");
    
        window.location.href ="change-login.html"
        console.log("klick");
        
    return;
})