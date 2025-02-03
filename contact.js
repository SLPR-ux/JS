class contact {
    constructor(Nom, Prenom, Datedenaissance, sexe, Adresse, CodePostal, ville, Telephone, Email) {
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Datedenaissance = Datedenaissance;
        this.Sexe = sexe;
        this.Adresse = Adresse;
        this.CodePostal = CodePostal;
        this.ville = ville;
        this.Telephone = Telephone;
        this.Email = Email;
    }
    toString() {
        console.log(`Nom : ${this.Nom}, Prenom : ${this.Prenom}, Datedenaissance : ${this.Datedenaissance}, Sexe : ${this.Sexe}, Adresse : ${this.Adresse}, Code Postal : ${this.CodePostal}, Ville : ${this.ville}, Téléphone : ${this.Telephone}, Email : ${this.Email}`);
        }
    //fonction mail pour envoyer un mail
    mail() {
        console.log(`Envoyer un mail à ${this.Email} avec le sujet "Contactez-nous"`);
    }

    //Créer une collection (tableau) de 10 contacts, basés sur la classe "Contact"
    static creerCollection() {
        let collection = [];
        for (let i = 0; i < 10; i++) {
            let contact = new Contact(`Nom ${i}`, `Prenom ${i}`, "1990-01-01", `Sexe ${i % 2}`, `Adresse ${i}`, "CodePostal ${i}", `Ville ${i}`, `0123456789${i % 10}`, `email${i}@example.com`);
            collection.push(contact);
        }
        return collection;
    }
