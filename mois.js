function mois(i) {

    let nbrmois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre'];
    if (i>=0 && i<=nbrmois.length) {
        return (nbrmois[i-1]);
    } else {
        return "Erreur : le mois n'existe pas";
    }
    
}


console.log(mois(15)); //decembre