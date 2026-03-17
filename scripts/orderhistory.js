import { getElement } from "./utils/domUtils.js";



//gjorde en knapp först, men kryss ser nog bättre ut, för varukorgen behövs inte här.
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


const orders = JSON.parse(localStorage.getItem("orderInformations")) || [];

orders.forEach(order => {
    const orderSection = document.createElement("section");
    const orderProdukt = document.createElement("section");

    orderSection.classList.add ("order") ;
    orderProdukt.classList.add ("order__innehåll");

    const textDate = document.createElement("p")
    const textOrderNummer = document.createElement("p")

    textDate.innerText = `Datum:  ${order.date}`;
    textOrderNummer.classList.add ("order__description");
    textOrderNummer.innerText = `Ordernummer:  ${order.orderNumbers}`;
    textDate.classList.add ("order__date");

    orderSection.appendChild(textDate);
    orderProdukt.appendChild(textOrderNummer);

    order.food.forEach(food => {
    const textOrder = document.createElement("p")
    const textPrice = document.createElement("p")
    const textAntal = document.createElement("p")
    

    textOrder.classList.add ("order__produktNamn");
    textPrice.classList.add ("order__pris");
    textAntal.classList.add ("order__antal");
    
    
    textOrder.innerText = food.name;
    textPrice.innerText = `Pris:  ${food.price}`;
    textAntal.innerText = `Antal:  ${food.quantity}`;
    

    
    
    orderProdukt.appendChild(textOrder);
    orderProdukt.appendChild(textPrice);

    
    orderSection.appendChild(textAntal)
    
    orderSection.appendChild(orderProdukt);

    
    })
    document.querySelector(".orderContainer").appendChild(orderSection);
})





///gammla namn på klasser mm
// const orders = JSON.parse(localStorage.getItem("orderInformations")) || [];

// orders.forEach(order => {
//     const orderSection = document.createElement("section");
//     const orderProdukt = document.createElement("section");

//     orderSection.classList.add ("card") ;
//     orderProdukt.classList.add ("card__produkt");

//     const textDate = document.createElement("p")
//     const textOrderNummer = document.createElement("p")

//     textDate.innerText = `Datum:  ${order.date}`;
//     textOrderNummer.classList.add ("card__description");
//     textOrderNummer.innerText = `Ordernummer:  ${order.orderNumbers}`;
//     textDate.classList.add ("card__date");

//     orderSection.appendChild(textDate);
//     orderProdukt.appendChild(textOrderNummer);

//     order.food.forEach(food => {
//     const textOrder = document.createElement("p")
//     const textPrice = document.createElement("p")
//     const textAntal = document.createElement("p")
    

//     textOrder.classList.add ("card__info");
//     textPrice.classList.add ("card__sek");
//     textAntal.classList.add ("card__antal");
    
    
//     textOrder.innerText = `Order:  ${food.name}`;
//     textPrice.innerText = `Pris:  ${food.price}`;
//     textAntal.innerText = `Antal:  ${food.quantity}`;
    

    
    
//     orderProdukt.appendChild(textOrder);
//     orderProdukt.appendChild(textPrice);

    
//     orderSection.appendChild(textAntal)
    
//     orderSection.appendChild(orderProdukt);

    
//     })
//     document.querySelector(".orderContainer").appendChild(orderSection);
// })