//! Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
function sum(a, b) {
	return a + b;
}
console.log(sum(10, 5));

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
const sumTwoNumbers = function (a, b) {
	return a + b;
};

console.log(sumTwoNumbers(20, 8));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
const sumAandB = (a, b) => a + b;
console.log(sumAandB(8, 2));
