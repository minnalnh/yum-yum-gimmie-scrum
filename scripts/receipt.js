const test = localStorage.getItem('orderedItems');
const orderList = JSON.parse(test);

console.log(orderList);

orderList.forEach(order => {
    const receipt = document.querySelector('.receipt__list');
    const listItem = document.createElement('li');
    listItem.classList.add('receipt__list-item');
    listItem.innerHTML = `
        <div class="receipt__item">
            <span class="receipt__name">
                ${order.name}
            </span> 
            <span class="receipt__price">
                ${order.price * order.quantity} sek
            </span> 
        </div>
        <span class="receipt__quantity">
                ${order.quantity} stycken
        </span>
        `;
    receipt.appendChild(listItem);  
});

// orderList.forEach(order =>{
//     order.
// })

function CalculateTotalCost(orderList) {
    let addedValue = 0;
    for( let i = 0 ; i < orderList.length; i++){
        let test = orderList[i].price * orderList[i].quantity;
        console.log(test);
        addedValue += test;
        }
        return addedValue;
    }

let addedValue = CalculateTotalCost(orderList)
console.log(addedValue);

let totalCost = document.querySelector('.receipt__total-valueText');
totalCost.textContent = addedValue + " SEK";

let getData = JSON.parse(localStorage.getItem("orderNumbers"));
document.querySelector('.receipt__orderCode').textContent = "#" + getData.join("")


function orderHistoryInfo(){
    const getData = JSON.parse(localStorage.getItem("orderNumbers"));
    const getFood = JSON.parse(localStorage.getItem("orderedItems"));
    console.log(getData, getFood);

    const orderInfo = {
        orderNumbers: getData.join(""),
        food: getFood,
        date: new Date(),
    }

    const orderHistorik = JSON.parse(localStorage.getItem("orderInformations")) || [];

    orderHistorik.push(orderInfo)
    localStorage.setItem('orderInformations', JSON.stringify(orderHistorik));

    localStorage.removeItem("orderNumbers");
    localStorage.removeItem("orderedItems");
    }

orderHistoryInfo()