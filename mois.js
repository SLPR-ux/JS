let nbrmois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre'];
function mois(i) {
    if (i >= 0 && i <= 12) {
        return nbrmois[i-1];
    } else {
        return 'mois invalide';
    }
}



console.log(mois(12)); //decembre