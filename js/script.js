// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue ({
    el : '#root',
    data : {
        saluto: "",
        messaggio: "Il tuo prossimo viaggio è qui...",
        immagine:  ""
    },
    methods : {
        mare: function () {
             this.immagine = "mare"
        },
        montagna: function () {
            this.immagine = "montagna"
        },
        // function (saluto) {
        //     var d = new Date();
        //     var h = d.getHours(); 
        //     if (h < 12 || h > 3) {
        //         this.saluto = "Buongiorno!"
        //     } else if (h > 12 && h < 17) {
        //         this.saluto = "Buon pomeriggio!"
        //     } else {
        //         this.saluto = "Buonasera!"
        //     }
        // } 
    }
});



