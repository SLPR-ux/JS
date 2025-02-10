class Contact {
    constructor(Nom, Prenom, DateDeNaissance) {
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.DateDeNaissance = DateDeNaissance;
    }

    afficher() {
        console.log(`Nom : ${this.Nom}, Prenom : ${this.Prenom}, Date de naissance : ${this.DateDeNaissance}`);
    }
}

class Employe extends Contact {
    constructor(Nom, Prenom, DateDeNaissance, Salaire, Anciennete) {
        super(Nom, Prenom, DateDeNaissance);
        this.Salaire = Salaire;
        this.Anciennete = Anciennete;
    }
    
    augmenterSalaire() {
        let pourcentageAugmentation;
        if (this.Anciennete > 10) {
            pourcentageAugmentation = 10;
        } else {
            pourcentageAugmentation = 5;
        }
        this.Salaire += (this.Salaire * pourcentageAugmentation) / 100;
        console.log(`Le salaire de ${this.Nom} ${this.Prenom} est augmenté à ${this.Salaire}`);
        console.log(`L'ancienneté de ${this.Nom} ${this.Prenom} est de ${this.Anciennete} ans`);
        console.log(`Nouveau salaire : ${this.Salaire}`);
        console.log(`Nouvelle ancienneté : ${this.Anciennete + 1} ans`);
    }
    
    afficher() {
        super.afficher();
        console.log(`Salaire : ${this.Salaire}, Anciennete : ${this.Anciennete}`);
    }
}

// Test

let employe1 = new Employe("John", "Doe", "2005/07/31", 5000, 15);
employe1.afficher();
employe1.augmenterSalaire();