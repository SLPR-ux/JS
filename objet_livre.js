let livre = {
    titre: "Les misérables",
    auteur: "Georges Cézanne",
    nbPages: 225,
    empruntable: true,
    
    afficher: function() {
        console.log("Titre : " + this.titre);
        console.log("Auteur : " + this.auteur);
        console.log("Nombre de pages : " + this.nbPages);
    },
    
    estLong: function() {
        return this.nbPages > 300;
    },
    
    emprunter: function() {
        if (this.empruntable) {
            console.log("Le livre a été emprunté");
        } else {
            console.log("Le livre ne peut pas être emprunté");
        }
    },
    
    rendre: function() {
        if (this.empruntable) {
            console.log("Le livre a été rendu");
        } else {
            console.log("Le livre n'a pas été rendu");
        }
    }

}

livre.afficher();
console.log(livre.estLong());
console.log(livre.emprunter());
console.log(livre.rendre());