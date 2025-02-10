class Animal {

    constructor(name) {
        this.name = name;
    }

    nbPattes(n) {
        this.nbPattes = n;
    }

    couleur(c) {
        this.couleur = c;
    }

    speak() {
        console.log(this.name + " fait du bruit");
    }

    afficher() {
        console.log("Je suis un " + this.name + " et j'ai " + this.nbPattes + " pattes");
    }
}

class Chien extends Animal {
    nbPattes = 4;
    speak() {
        console.log(this.name + " aboie");
    }

}

class Chat extends Animal {
    constructor(name) {
        super("chat qui s'appelle " + name);
    }
    nbPattes = 4;
    speak() {
        console.log(this.name + " miaule");
    }

}

class Oiseau extends Animal {
    nbPattes = 2;
    speak() {
        console.log(this.name + " pioupiou");
    }

}

let medor = new Animal('Medor');
medor.nbPattes(4);
medor.speak();
medor.afficher();

let rex = new Chien('rex');
rex.speak();
rex.afficher();

let felix = new Chat('felix');
felix.speak();
felix.afficher();

let titi = new Oiseau('titi');
titi.speak();
titi.afficher();