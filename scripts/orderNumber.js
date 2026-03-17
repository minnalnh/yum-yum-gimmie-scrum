const randomCode = {
  data: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
};

const localArray = [];

function orderNumber(){
    let check = JSON.parse(localStorage.getItem("orderNumbers"));
    if(!check){
        for (let i = 0; i < 11; i++){
            const test = Math.floor(Math.random() * randomCode.data.length);
            let result = randomCode.data[test];
            let orderNumber = JSON.parse(localStorage.getItem('orderNumbers')) || [];
            orderNumber.push(result);
            localStorage.setItem('orderNumbers', JSON.stringify(orderNumber));
        }
        let getData = JSON.parse(localStorage.getItem("orderNumbers"));
        console.log(getData)

        document.querySelector('.orderStatus__description').innerText = "#" + getData.join("");
        } else {
            let getData = JSON.parse(localStorage.getItem("orderNumbers"));
            document.querySelector('.orderStatus__description').innerText = "#" + getData.join("");
    }
} 

orderNumber();


