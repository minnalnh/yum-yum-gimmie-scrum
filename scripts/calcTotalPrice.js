export function calcTotalPrice(fullOrder) {
    // fick hjälp av AI
    return fullOrder.reduce((sum, order) => sum + order.price * order.quantity, 0);
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