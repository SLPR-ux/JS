class livre {
    constructor() {
        this.titre = "God Of War: The Ghost of Sparta";
        this.auteur = "Zeusonith de Odin";
        this.nbPages = 710;
        this.empruntable = true;
    }

    afficher() {
        console.log("Titre : " + this.titre);
        console.log("Auteur : " + this.auteur);
        console.log("Nombre de pages : " + this.nbPages);
        console.log("Disponible? : " + this.empruntable);
    }

}

let l1 = new livre();
let l2 = new livre();
let l3 = new livre();
let l4 = new livre();
let l5 = new livre();

l1.afficher();
l2.afficher();
l3.afficher();