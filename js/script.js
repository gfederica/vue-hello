// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue ({
    el : '#root',
    data : {
        saluto: "",
        messaggio: "Il tuo prossimo viaggio è qui...",
        immagine:  "",
        foto: ""
    },
    created: function () {
        this.creaSaluto();
    },
    methods : {
        mare: function () {
             this.immagine = "mare"
        },
        montagna: function () {
            this.immagine = "montagna"
        },
        fotoRandom : function () {
            const immagini = [
                "https://cdn.getyourguide.com/img/location/54b54f776a795.jpeg/88.jpg",
                "https://www.hotelalgamilano.it/sites/barbara2torri.gisnet.it/files/Hotel_Santa_Barbara_Milano_01t.jpg",
                "https://www.lamadia.com/wp-content/uploads/2021/02/madrid.jpg",
                "https://www.10cose.it/wp-content/uploads/2015/11/vienna.jpg"
            ];
                const randomIndex = Math.floor(Math.random() * immagini.length);
                this.foto = immagini[randomIndex];
        },
        creaSaluto: function () {
            const d = new Date();
            const h = d.getHours(); 
            if (h > 12 || h < 17) {
                this.saluto = "Buon pomeriggio!"
            } else if (h < 12 && h > 03) {
                this.saluto = "Buongiorno!"
            } else {
                this.saluto = "Buonasera!"
            }
        } 
    }
});


