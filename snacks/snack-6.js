//! Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo
// e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const creaContatoreAutomatico = (intervallo) => {
	let contatore = 0;
	return setInterval(() => {
		console.log(contatore);
		contatore++;
	}, intervallo);
};

const idIntervallo = creaContatoreAutomatico(1000);

setTimeout(() => {
	clearInterval(idIntervallo);
	console.log("Contatore fermato!");
}, 5000);
