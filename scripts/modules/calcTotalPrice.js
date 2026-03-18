export function calcTotalPrice(fullOrder) {
    // fick hjälp av AI
    if(!fullOrder || fullOrder.length === 0) return 0;

    return fullOrder.reduce((sum, order) => {
        const price = Number(order.price) || 0;
        const quantity = Number(order.quantity) || 0;

        return sum + price * quantity;
    }, 0);
}

// min lösning
/*
export function calcTotalPrice(fullOrder) {
    const priceArr = [];
    let sum = 0;
    let priceTimesQuantity = 0;
    
    for(let order of fullOrder) {
        priceTimesQuantity = order.price * order.quantity;
        priceArr.push(priceTimesQuantity);
    }
    
    for(let i = 0; i < priceArr.length; i++) {
        sum += priceArr[i];    
    }
    return sum;
}
*/