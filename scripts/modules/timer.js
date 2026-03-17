export function timer(countDown){
    
//fick en del hjälp av ai med denna funktion hade grund conceptet i huvudet men hade ingen aning vad padStart var.
const possibleTimes = [5, 10, 15, 20]; 
const randomMinutes = possibleTimes[Math.floor(Math.random() * possibleTimes.length)];


let totalSeconds = randomMinutes * 60; 


const timerInterval = setInterval(() => {
    

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;


    let displayMinutes = String(minutes).padStart(2, '0');
    let displaySeconds = String(seconds).padStart(2, '0');


    countDown.textContent = `${displayMinutes}:${displaySeconds}`


    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        countDown.textContent = `Vi är framme med maten!`
    } else {

        totalSeconds--;
    }

}, 1000); 

}