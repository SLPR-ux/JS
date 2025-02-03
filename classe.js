class livre {
    constructor(titre, auteur , nbPages, empruntable) {
        this.titre = titre;
        this.auteur = auteur;
        this.nbPages = nbPages;
        this.empruntable = empruntable;
    }

    afficher() {
        console.log("Titre : " + this.titre);
        console.log("Auteur : " + this.auteur);
        console.log("Nombre de pages : " + this.nbPages);
        console.log("Disponible? : " + this.empruntable);
    }

}

let l1 = new Livre("La Cité des neiges", "Victor Hugo", 182, true);

let l2 = new Livre("1984", "George Orwell", 328, false);

let l3 = new Livre("Pride and Prejudice", "Jane Austen", 196, true);


l1.afficher();
l2.afficher();
l3.afficher();