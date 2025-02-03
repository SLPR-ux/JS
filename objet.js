//Créer un objet compte (compte bancaire) avec les propriétés:Client,Numero, Solde et les méthodes afficher : affiche toutes les propriétés du comptecrediter : ajoute un montant au soldedebiter  : enlève un montant au solde

let compte = {
    client: "John Doe",
    numero: "123456789",
    solde: 0,
    afficher: function() {
        console.log("Client : " + this.client);
        console.log("Numero : " + this.numero);
        console.log("Solde : " + this.solde);
    },
    crediter: function(montant) {
        this.solde += montant;
        console.log("Montant crédité avec succès : " + montant);
        this.afficher();
    },
    debiter: function(montant) {
        if (this.solde >= montant) {
            this.solde -= montant;
            console.log("Montant débité avec succès : " + montant);
            this.afficher();
        } else {
            console.log("Erreur : solde insuffisant");
        }
    }
}