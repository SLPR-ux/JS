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
    static surface(rayon){
        return Math.PI * Math.pow(rayon, 2);
    }
    static volume(rayon, hauteur){
        return (1/3) * Math.PI * Math.pow(rayon, 3) * hauteur;
    }
}

let cercle1 = new cercle(5);

console.log('Diametre :', cercle1.diametre());

console.log('Aire :', cercle1.aire());

console.log('Perimetre :', cercle1.perimetre());

console.log('Surface du cercle 5 :', cercle.surface(5));

console.log('Volume du cercle 5 :', cercle.volume(5, 10));
