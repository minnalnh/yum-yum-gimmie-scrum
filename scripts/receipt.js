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