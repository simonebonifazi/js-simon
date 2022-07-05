/* Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
/ Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
/ Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
/ Consigli del giorno:
/ * Pensate prima in italiano.
/ * Dividete in piccoli problemi la consegna.
/ * Individuate gli elementi di cui avete bisogno per realizzare il programma.
/ ATTENZIONE:
/ prompt() e alert() vengono sempre eseguiti prima del resto del codice nel loro scope, quindi dovete trovare un escamotage per "tenerli a bada" finchè le altre operazioni siano state svolte. Siete autorizzate a "imbrogliare" un po' e chiedere all'utente i numeri un pochettino dopo :faccia_leggermente_sorridente: 
l'importante è far sparire i numeri allo scadere dei 30 secondi!
*/

/*
in primo luogo creiamo un ul cui aggangiarci poi tramite js
subito dopo, generiamo 5 numeri casuali tramite una funzione
creiamo un timer di trenta secondi che si avvii all'inizio della pagina, perchè no, tramite funzione
piazzare alert e prompt alla fine con gap
affinchè non avremo problemi di tempistiche con questi; 
*/
/***************Funzioni */
/**funzione generatrice numeri causuali
 * 
 * @param {number} min valore minimo del numero
 * @param {number} max valore massimo del numero
 * @param {number} total totale dei numeri da generare
 * @returns {number} total randomics numbers
 */
const getTotRandomNumbers = (min, max, total) => {
    let randomNumber = [];
    let numbers;

    for (let i = min; i <= total; i++) {
        do {

            numbers = (Math.floor(Math.random() * (max + 1 - min) + min));

        } while (randomNumber.includes(numbers))
        randomNumber.push(numbers)
    }
    return randomNumber;
}
/** funzione che imposta il timer a 30 secondi
 * 
 */
const myInterval = () => {
    //decremento
    timer.innerText = --seconds;
    //fermo la funzione allo scadere del countdown
    if (seconds === 0) {
        //fermo allo zero il countdown
        clearInterval(countDown);
        //lo rimuovo dalla grafica
        timer.classList.add('hidden')
        numbersList.classList.remove('d-flex')
        numbersList.classList.add('hidden')
    }
}

/**
 * funzione per ritardare prompt
 */
function promptLag() {

    for (i = 0; i < 5; i++) {
        userAnswer.push(parseInt(prompt(`inserisci qui, il ${i + 1}° numero che hai memorizzato!`)));
    }
    console.log(userAnswer)
    //verifico se ha indovinato e quante, nel caso


}

/**
 * funzione per stabilire quante domande ha indovinato 
 * @param number risposte dell'utente
 * @param number numeri casuali generati dal software
 * @returns numero delle volte in cui sono uguali le due 
 */
function results(userNumbers, cpuNumbers) {
    let result = 0;
    userNumbers = 5
    cpuNumbers = 5
    // per ogni numer dell'array delle risposte che corrisponde ad un numero del gioco, aggiungo un punto
    for (let i = 0; i < userNumbers; i++) {
        for (let j = 0; j < cpuNumbers; j++) {
            if ([i] === [j]) {
                result++
            }
        }
    }
    return alert(result);

}
//******************** variabili globali
const timer = document.getElementById('countdown');
const numbersList = document.getElementById('numbers');
const startGame = document.getElementById('start-game');
const countDown = '';
const delayedQuestion = '';
const gameResults = 0;
//preparao un array per contenere le risposte dell'utente
const userAnswer = [];
//timer 30 secondi
let seconds = 30;

/*********************************event listener al click */
startGame.addEventListener('click', function () {

    //stampo nel DOM i secondi
    timer.innerText = seconds;


    //invoco la funzione
    let myNumbers = getTotRandomNumbers(1, 100, 5);
    console.log(myNumbers)
    //stampo in DOM tramite ciclo for
    for (i = 0; i < myNumbers.length; i++) {
        //creo gli elementi da inserire
        const listItems = document.createElement('li');
        //ci aggiunngo i singoli valori del mio array di numeri casuali
        listItems.append(myNumbers[i]);
        console.log(myNumbers[i])
        //li inserisco nel DOM
        numbersList.appendChild(listItems);
        console.log(listItems)
    }
    //invoco la funzione 
    const countDown = setInterval(myInterval, 100);

    //chiedo i 5 numeri all'utente
    const delayedQuestion = setTimeout(promptLag, 3050);

    //verifico tramite funzione se e quante domande ha indovinato
    // const gameResults = results(myNumbers, userAnswer)
    const delayedResults = setTimeout(results, 4050)
})

