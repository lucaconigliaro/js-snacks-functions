/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(name, letter) {
    const initials = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i].startsWith(letter)) {
            initials.push(name[i]);
        }
    }
    return initials
}

// Invoca la funzione qui e stampa il risultato in console
const result = getInitials(names, `A`);
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]