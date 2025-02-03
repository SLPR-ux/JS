class cercle {
    constructor(rayon){
        this.rayon = rayon;
    }
    diametre(){
        return 2 * this.rayon;
    }
    aire(){
        return Math.PI * Math.pow(this.rayon, 2);
    }
    perimetre(){
        return 2 * Math.PI * this.rayon;
    }
}

let cercle1 = new cercle(5);

console.log('Diametre :', cercle1.diametre());

console.log('Aire :', cercle1.aire());

console.log('Perimetre :', cercle1.perimetre());
