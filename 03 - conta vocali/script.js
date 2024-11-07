/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function letter(vocals) {
    let count = 0;
    for (let i = 0; i < vocals.length; i++) {
        if (vocals[i] === `a` || vocals[i] === `e` || vocals[i] === `i` || vocals[i] === `o` || vocals[i] === `u`) {
            count++;
        }
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letter(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)