//! Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(10, 5, somma));
console.log(eseguiOperazione(10, 5, moltiplicazione));
console.log(eseguiOperazione(10, 5, divisione));
