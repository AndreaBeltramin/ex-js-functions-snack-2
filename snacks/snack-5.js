//! Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const stampaOgniSecondo = (messaggio) => {
	return setInterval(() => console.log(messaggio), 1000);
};

const idIntervallo = stampaOgniSecondo("ciao a tutti!");

setTimeout(() => {
	clearInterval(idIntervallo);
	console.log("Timer fermato!");
}, 5000);
