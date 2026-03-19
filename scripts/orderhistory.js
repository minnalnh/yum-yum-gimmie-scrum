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
    const orderSection = document.createElement("ul");
    const orderInfo = document.createElement("div");
    // const orderInnehåll = document.createElement("section");

    orderSection.classList.add ("order") ;
    orderInfo.classList.add ("order__info") ;
    // orderInnehåll.classList.add ("order__innehåll");

    const textDate = document.createElement("p")
    const textOrderNummer = document.createElement("p")

    textDate.innerText = `Datum:  ${order.date}`;
    textOrderNummer.classList.add ("order__nummer");
    textOrderNummer.innerText = ` ${order.orderNumbers}`;
    textDate.classList.add ("order__date");

    orderInfo.appendChild(textOrderNummer);
    orderInfo.appendChild(textDate);
    orderSection.appendChild(orderInfo);

    

    order.food.forEach(food => {
    const orderProdukt = document.createElement("li");
    const orderItem = document.createElement("div");

    orderProdukt.classList.add ("order__produkt");
    orderItem.classList.add ("order__item");

    const nameOrder = document.createElement("span")
    const textPrice = document.createElement("span")
    const textAntal = document.createElement("span")
    textDate.innerText = new Date(order.date).toLocaleDateString()

    nameOrder.classList.add ("order__produktNamn");
    textPrice.classList.add ("order__pris");
    textAntal.classList.add ("order__antal");
    
    
    nameOrder.innerText = food.name;
    textPrice.innerText = ` ${food.price} sek`;
    textAntal.innerText = `Antal:  ${food.quantity}`;
    

    
    
    orderItem.appendChild(nameOrder);
    orderItem.appendChild(textPrice);
    
    
    orderProdukt.appendChild(orderItem)
    orderSection.appendChild(orderProdukt);
    orderProdukt.appendChild(textAntal)

    
    
    })
    document.querySelector(".order__container").appendChild(orderSection);
})




//kod innan ändring av ev tredje loop
// const orders = JSON.parse(localStorage.getItem("orderInformations")) || [];

// orders.forEach(order => {
//     const orderSection = document.createElement("section");
//     const orderProdukt = document.createElement("section");

//     orderSection.classList.add ("order") ;
//     orderProdukt.classList.add ("order__innehåll");

//     const textDate = document.createElement("p")
//     const textOrderNummer = document.createElement("p")

//     textDate.innerText = `Datum:  ${order.date}`;
//     textOrderNummer.classList.add ("order__description");
//     textOrderNummer.innerText = `Ordernummer:  ${order.orderNumbers}`;
//     textDate.classList.add ("order__date");

//     orderSection.appendChild(textDate);
//     orderSection.appendChild(textOrderNummer);

//     order.food.forEach(food => {
//     const textOrder = document.createElement("p")
//     const textPrice = document.createElement("p")
//     const textAntal = document.createElement("p")
    

//     textOrder.classList.add ("order__produktNamn");
//     textPrice.classList.add ("order__pris");
//     textAntal.classList.add ("order__antal");
    
    
//     textOrder.innerText = food.name;
//     textPrice.innerText = `Pris:  ${food.price}`;
//     textAntal.innerText = `Antal:  ${food.quantity}`;
    

    
    
//     orderProdukt.appendChild(textOrder);
//     orderProdukt.appendChild(textPrice);
//     orderProdukt.appendChild(textAntal)
    
//     orderSection.appendChild(orderProdukt);

    
//     })
//     document.querySelector(".orderContainer").appendChild(orderSection);
// })