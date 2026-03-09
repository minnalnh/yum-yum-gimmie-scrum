import { fetchFood } from "./modules/api.js";

const menuHeader = document.querySelector('.menu');

const food = await fetchFood();
console.log(food);


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

function howMany(){
}

   const menuHtml__wonton = `
    <article class="menu__card"> 
        <p class="menu__cardHeader">${food.items[0].name} ....................... 99kr</p>
        <p class="menu__cardIngredients">${food.items[0].ingredients}</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[1].name} ....................... 99kr</p>
        <p class="menu__cardIngredients">${food.items[1].ingredients}</p> 
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[2].name} ................. 99kr</p>
        <p class="menu__cardIngredients">${food.items[2].ingredients}</p> 
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[3].name} .............................. 99kr</p>
        <p class="menu__cardIngredients">${food.items[3].ingredients}</p> 
    </article>
`;

document.querySelector('.menuHeaders__button--test').addEventListener('click', () =>{
    menuHeader.innerHTML = menuHtml__wonton;
})

    const menuHtml__drinks = `
    <article> 
        <p class="menu__cardHeader">${food.items[11].name} .................... 99kr</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[12].name} ............... 99kr</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[13].name} .............. 99kr</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[14].name} ..................... 99kr</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[15].name} .............. 99kr</p>
    </article>
    <article> 
        <p class="menu__cardHeader">${food.items[16].name} ....... 99kr</p>
    </article>
`;

document.querySelector('.menuHeaders__button--test2').addEventListener('click', () =>{

    menuHeader.innerHTML = menuHtml__drinks;
})



// const menuHtml = `
//     <article> 
//         <h1>${food.items[0].name} ................... 99kr</h1> 
//         <h2> </h2> 
//     </article>
//     <p>asdasd</p>
//     <p>asdasd</p>
//     <p>asdasd</p>
// `;

// menuHeader.innerHTML = menuHtml;