const test = sessionStorage.getItem("activeUser")
const admin = JSON.parse(test)
const fullOrder1 = localStorage.getItem("orderInformations")
const fullOrder = JSON.parse(fullOrder1)

console.log(fullOrder)


function areYouAdmin(){

    if(admin === null){
        console.log('Ej inloggad!')
        return
    }

    if(admin.role === "admin"){
        const adminRolePage = document.querySelectorAll('.nav__item');
        console.log('Du är en admin nu syns orderhistoriken i nav-menyn!')

        adminRolePage.forEach(element => {
            element.classList.remove('d-none');
        });
                
        } 
            
        else {
            console.log("Ej administratör!")
        }
}

areYouAdmin()

const orders = document.querySelector('.admin__orders');

orders.textContent = "Totalt " + fullOrder.length + " Ordrar gjorda!"

const menuHeader = document.querySelector('.admin__orderList');
function renderWonton(fullOrder) {
    let menuHtml__wonton = '';

for (let i = 0; i < fullOrder.length; i++) {
        // 1. Skapa en tom sträng för att samla all mat i just denna order
        let foodItemsHtml = '';

        // 2. Den inre loopen: Gå igenom mat-arrayen för den aktuella ordern
        for (let j = 0; j < fullOrder[i].food.length; j++) {
            foodItemsHtml += `
                    <span class="admin__order">${fullOrder[i].food[j].name}</span>
                    <p class="admin__order--quantity">${fullOrder[i].food[j].quantity} stycken</p>
            `;
        }

        // 3. Bygg ihop hela order-kortet och stoppa in mat-strängen i mitten
        menuHtml__wonton += `
            <article class="admin__card" data-id="${fullOrder[i].id}"> 
                <div class="admin__cardHeader">
                    <p>OrderNumber: #${fullOrder[i].orderNumbers}</p>
                    <span>${fullOrder[i].date.slice(0, 10)}</span> 
                </div>
                <div class="admin__order--items">
                    ${foodItemsHtml}
                </div>
            </article>
        `;
    }

    menuHeader.innerHTML = menuHtml__wonton;

}

renderWonton(fullOrder);