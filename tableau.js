let etudiant = "Pierre";
let etudiants = ["Jean", "Marc", "Marie", "Lucas", "Julie"];



console.log('L etudiant: ' + etudiant);

console.log('Les etudiants sont: ' + etudiants);

console.log('Le nombre d\'etudiants est: ' + etudiants.length);

console.log('Le premier etudiant: ' + etudiants[0]);

console.log('Le dernier etudiant: ' + etudiants[etudiants.length - 1]);

for (let i = 0; i < etudiants.length; i++) {
    console.log('Etudiant ' + (i + 1) + ': ' + etudiants[i]);
}

etudiants.push("Cacarotte");

console.log('Les etudiants apres l\'ajout de Cacarotte sont: ' + etudiants);

etudiants.pop('Cacarotte');

console.log('Les etudiants apres la suppression de Cacarotte sont: ' + etudiants);

etudiants.unshift("Lucas");

console.log('Les etudiants apres l\'ajout de Lucas en tete sont: ' + etudiants);

etudiants.shift();

console.log('Les etudiants apres la suppression de Lucas en tete sont: ' + etudiants);

