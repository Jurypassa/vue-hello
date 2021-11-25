// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const root = new Vue({
    el: "#root",
    data: {
        messaggio: "Ciao a tutti",
        immagine: "https://source.unsplash.com/random",
    }
});