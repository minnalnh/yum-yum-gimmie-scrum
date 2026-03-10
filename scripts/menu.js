import { fetchFood } from "./modules/api.js";

const menuHeader = document.querySelector('.menu');
const localArray = []
const food = await fetchFood();
console.log(food);

    function renderWonton(food) {
    let menuHtml__wonton = ""; 

    for (let i = 0; i < 5; i++) {
        menuHtml__wonton += `
        <article class="menu__card" data-id="${food.items[i].id}"> 
            <p class="menu__cardHeader">
                <span>${food.items[i].name}</span> 
                <span class="test">99kr</span>
            </p>
            <p class="menu__cardIngredients">
                ${food.items[i].ingredients}
            </p>
            <section class="menu__cardHidden menu__cardHidden${food.items[i].id} d-none"> 
                <button class="menu__cardDelete">-</button> 
                <p class="menu__cardQuantity">0</p> 
                <button class="menu__cardAdd">+</button> 
                <button type="button" class="menu__cardBuy__button"> 
                    Lägg till i varukorg 
                </button>
            </section>
        </article>
        `;
    }

    menuHeader.innerHTML = menuHtml__wonton;
}

renderWonton(food);

function renderDrinks(food){
    
    let menuHtml__drinks = "";
    for( let i = 11; i < 17; i++){
    
        menuHtml__drinks += `
        <article class="menu__card" data-id="${food.items[i].id}"> 
            <p class="menu__cardHeader">
                <span>${food.items[i].name}</span> 
                <span class="test">99kr</span>
            </p>
            <section class="menu__cardHidden menu__cardHidden${i + 1} d-none"> 
                <button class="menu__cardDelete">
                    -
                </button> 
                <p class="menu__cardQuantity">
                    0
                </p> 
                <button class="menu__cardAdd">
                    +
                </button> 
                <button class="menu__cardBuy__button"> 
                    Lägg till i varukorg 
                </button>
            </section>
        </article>
        `;
}
menuHeader.innerHTML = menuHtml__drinks;
}
/*Funktion för att få knapparna att lysa med en ram runt sig vilket meny val du är inne på*/
function activeButton(event){
    const buttons = document.querySelectorAll('.menuHeaders__button');

    for (const button of buttons) {
         button.classList.remove('menuHeaders__button--active');
    }

   event.target.classList.add('menuHeaders__button--active')
}

const buttons = document.querySelectorAll('.menuHeaders__button');

for( const button of buttons){
    button.addEventListener('click', activeButton);
}

document.querySelector('.menuHeaders__button--test').addEventListener('click', () =>{
    renderWonton(food);
})

document.querySelector('.menuHeaders__button--test2').addEventListener('click', () =>{
    renderDrinks(food)
})

const test = document.querySelector('.menu');

console.log(test)


// document.querySelector('.menu').addEventListener('click', (event) => {
//     if (!event.target.dataset.id) return; 

//         let test = document.querySelectorAll('.menu__cardHidden')
//         test.forEach(card => {
//             card.classList.add('d-none');
//         });
//         const id = event.target.dataset.id
//         document.querySelector('.menu__cardHidden'+id).classList.remove('d-none')
//     }
// )

document.querySelector('.menu').addEventListener('click', (event) => {
    const target = event.target;
    const card = target.closest('.menu__card'); // Hitta kortet vi klickade i
    
    if (!card) return; // Om vi klickade helt utanför ett kort, gör inget

    // --- LOGIK FÖR ATT VISA/DÖLJA KORT (Din gamla logik) ---
    if (target.dataset.id) {
        document.querySelectorAll('.menu__cardHidden').forEach(c => c.classList.add('d-none'));
        const id = target.dataset.id;
        document.querySelector('.menu__cardHidden' + id).classList.remove('d-none');
    }

    // --- LOGIK FÖR PLUS-KNAPPEN ---
    if (target.classList.contains('menu__cardAdd')) {
        const quantityEl = card.querySelector('.menu__cardQuantity');
        let currentAmount = parseInt(quantityEl.innerText);
        quantityEl.innerText = currentAmount + 1;
    }

    // --- LOGIK FÖR MINUS-KNAPPEN ---
    if (target.classList.contains('menu__cardDelete')) {
        const quantityEl = card.querySelector('.menu__cardQuantity');
        let currentAmount = parseInt(quantityEl.innerText);
        if (currentAmount > 0) {
            quantityEl.innerText = currentAmount - 1;
        }
    }

    // --- LOGIK FÖR KÖPKNAPPEN (Skapa objektet!) ---
    if (target.classList.contains('menu__cardBuy__button')) {
        const amount = parseInt(card.querySelector('.menu__cardQuantity').innerText);
        
        if (amount > 0) {
            const orderItem = {
                id: card.dataset.id,
                name: card.querySelector('.menu__cardHeader').innerText.split('\n')[0].trim(),
                price: 99, // Du kan hämta detta dynamiskt sen
                quantity: amount
            };
            
            // const localArray = []

            const test = orderItem.name

            console.log(localArray)

            return localArray.push(orderItem);
            console.log("Skickar paket:", localArray);
            // Här kan du anropa funktionen som tar emot objektet!
        }
    }
});


    // const menuHtml__wonton = `
    //     <article class="menu__card" data-id="${food.items[0].id}"> 
    //         <p class="menu__cardHeader">
    //             <span>${food.items[0].name}</span> 
    //             <span class="test">99kr</span>
    //         </p>
    //         <p class="menu__cardIngredients">
    //             ${food.items[0].ingredients}
    //         </p>
    //         <section class="menu__cardHidden menu__cardHidden1 d-none"> 
    //             <button class="menu__cardDelete">
    //                 -
    //             </button> 
    //             <p class="menu__cardQuantity">
    //                 0
    //             </p> 
    //             <button class="menu__cardAdd">
    //                 +
    //             </button> 
    //             <button class="menu__cardBuy__button"> 
    //                 Lägg till i varukorg 
    //             </button>
    //         </section>
    //     </article>
    //     <article class="menu__card" data-id="${food.items[1].id}"> 
    //         <p class="menu__cardHeader">
    //             <span>${food.items[1].name}</span> 
    //             <span class="test">99kr</span>
    //         </p>
    //         <p class="menu__cardIngredients">
    //             ${food.items[1].ingredients}
    //         </p>
    //         <section class="menu__cardHidden menu__cardHidden2 d-none">
    //             <button class="menu__cardDelete">
    //                 -
    //             </button> 
    //             <p class="menu__cardQuantity">
    //                 0
    //             </p> 
    //             <button class="menu__cardAdd">
    //                 +
    //             </button> 
    //             <button class="menu__cardBuy__button"> 
    //                 Lägg till i varukorg 
    //             </button>
    //         </section>
    //     </article>
    //     <article class="menu__card" data-id="${food.items[2].id}"> 
    //         <p class="menu__cardHeader">
    //             <span>${food.items[2].name}</span> 
    //             <span class="test">99kr</span>
    //         </p>
    //         <p class="menu__cardIngredients">
    //             ${food.items[2].ingredients}
    //         </p>
    //         <section class="menu__cardHidden menu__cardHidden3 d-none">
    //             <button class="menu__cardDelete">
    //                 -
    //             </button> 
    //             <p class="menu__cardQuantity">
    //                 0
    //             </p> 
    //             <button class="menu__cardAdd">
    //                 +
    //             </button> 
    //             <button class="menu__cardBuy__button"> 
    //                 Lägg till i varukorg 
    //             </button>
    //         </section>
    //     </article>
    //     <article class="menu__card" data-id="${food.items[3].id}"> 
    //         <p class="menu__cardHeader">
    //             <span>${food.items[3].name}</span> 
    //             <span class="test">99kr</span>
    //         </p>
    //         <p class="menu__cardIngredients">
    //             ${food.items[3].ingredients}
    //         </p>
    //         <section class="menu__cardHidden menu__cardHidden4 d-none"> 
    //         <button class="menu__cardDelete">
    //             -
    //         </button> 
    //         <p class="menu__cardQuantity">
    //             0
    //         </p> 
    //         <button class="menu__cardAdd">
    //             +
    //         </button> 
    //         <button type="button" class="menu__cardBuy__button"> 
    //             Lägg till i varukorg 
    //         </button>
    //         </section>
    //     </article>
    // `;
    // menuHeader.innerHTML = menuHtml__wonton;
// }
