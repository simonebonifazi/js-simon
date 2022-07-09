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
const getTotUniqueRandomNumbers = (min, max, total) => {
    const randomNumber = [];

    while (randomNumber.length < total) {
        const numbers = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!randomNumber.includes(numbers)) randomNumber.push(numbers);
    }
    return randomNumber;
}

/**
 * funzione per avviare countdown al click
 */
function myInterval() {

}

//******************** variabili globali
const timer = document.getElementById('countdown');
const numbersList = document.getElementById('numbers');
const startGame = document.getElementById('start-game');
const delayedQuestion = '';
let countDown = '';
let gameResults = 0;
//preparao un array per contenere le risposte dell'utente
const userAnswer = [];
//timer 30 secondi
let seconds = 30;
//preparazione
const min = 1;
const max = 99;
const totalNumbers = 5;


/*********************************event listener al click */
startGame.addEventListener('click', function () {

    //stampo nel DOM i secondi
    timer.innerText = seconds;


    //invoco la funzione
    const myNumbers = getTotUniqueRandomNumbers(min, max, totalNumbers);
    console.log(myNumbers)
    //stampo in DOM tramite ciclo for
    for (i = 0; i < myNumbers.length; i++) {
        //creo gli elementi da inserire
        const listItems = document.createElement('li');
        //ci aggiunngo i singoli valori del mio array di numeri casuali
        listItems.append(myNumbers[i]);
        //li inserisco nel DOM
        numbersList.appendChild(listItems);
    }
    //setto il countdown
    const countDown = setInterval(() => {
        //decremento
        timer.innerText = --seconds;
        //fermo la funzione allo scadere del countdown
        if (seconds === 0) {
            //fermo allo zero il countdown
            clearInterval(countDown);
            //lo rimuovo dalla grafica
            timer.classList.add('hidden')
            numbersList.className = 'hidden'
        }
    }, 100);

    //chiedo i 5 numeri all'utente e li valido
    setTimeout(() => {
        //controllo che risponda 5 volte
        while (userAnswer.length < totalNumbers) {
            userAnswer.push(parseInt(prompt(`inserisci qui, i numeri che hai memorizzato!`)));
        }

        console.log(userAnswer)
        //verifico se ha indovinato e quante, nel caso
        let correctNumbers = [];
        for (let i = 0; i < userAnswer.length; i++) {
            if (myNumbers.includes(userAnswer[i])) correctNumbers.push(userAnswer[i]);
        }
        alert(`Il tuo punteggio è di: ${correctNumbers.length} ; hai indovinato ${correctNumbers}`)
    }, 3050);
})

