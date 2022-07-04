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
piazzare alert e prompt alla fine con gap, affinchè non avremo problemi di tempistiche con questi; 
*/

/**funzione generatrice numeri causuali
 * 
 * @param {number} min valore minimo del numero
 * @param {number} max valore massimo del numero
 * @param {number} total totale dei numeri da generare
 * @returns {number} total randomics numbers
 */
function getTotRandomNumbers(min, max, total) {
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
    //stampo nel DOM i secondi
    timer.innerText = seconds;
    //decremento
    --seconds
    //fermo la funzione allo scadere del countdown
    if (seconds === 0) {
        clearInterval(countDown);
        timer.classList.add('hidden')
    }
}
//dichiaro variabili globali
const timer = document.getElementById('countdown');
const numbersList = document.getElementById('numbers');
//timer 30 secondi
let seconds = 30;

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
    numbersList.append(listItems);
    console.log(listItems)
}

//stampo in console i trenta secondi che decrementeranno 1000ms alla volta
const countDown = setInterval(myInterval, 100)