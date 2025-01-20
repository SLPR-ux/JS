//avec math.PI ecrire un objet litteral representant un cercle avec rayon, diametre, aire, perimetre

let cercle = {
    rayon: 5,
    diametre: function() {
        return 2 * this.rayon;
    },
    aire: function() {
        return Math.PI * Math.pow(this.rayon, 2);
    },
    perimetre: function() {
        return 2 * Math.PI * this.rayon;
    }
};

console.log('Rayon : ' + cercle.rayon);

console.log('Diametre : ' + cercle.diametre());

console.log('Aire : ' + cercle.aire());

console.log('Perimetre : ' + cercle.perimetre());
