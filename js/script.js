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
//dichiaro variabili globali
const timer = document.querySelector('countdown');
const numbersList = document.getElementById('numbers');

//funzione generatrice 5 numeri causuali 
/**
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

let myNumbers = getTotRandomNumbers(1, 100, 100).sort();
console.log(myNumbers)

