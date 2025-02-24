//! Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, avvio, stop) {
	//avvio il timer ad intervalli regolari
	const timer = setInterval(() => {
		console.log(messaggio);
	}, avvio);

	//imposto il timeout del timer dopo un certo tempo
	setTimeout(() => {
		clearInterval(timer);
		console.log("timer fermato!");
	}, stop);
}

eseguiEferma("ciao!", 1000, 5000);
