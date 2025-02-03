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
            this.empruntable = false;
        } else {
            console.log("Le livre n'est pas disponible");
        }
    },
    
    rendre: function() {
        if (!this.empruntable) {
            console.log("Le livre a été rendu");
        } else {
            console.log("Le livre était déja disponible");
        }
        this.empruntable = true;
    }

}

livre.afficher();
console.log(livre.estLong());
console.log(livre.emprunter());
console.log(livre.emprunter());//doit retourner le livre n'est pas disponible
console.log(livre.rendre());