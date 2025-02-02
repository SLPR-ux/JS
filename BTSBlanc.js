function tri(tableau) {
    for(let M = 0; M <= tableau.length; M++) {
        for(let R = 0 ; R < tableau.length; R++) {
            let K = 0;
            let i = R;
            if(tableau[i] > tableau[i + 1]) {
                K = tableau[i];
                tableau[i] = tableau[i + 1];
                tableau[i + 1] = K;
            }
        }
    }
    let tableau_triee = tableau;
    return tableau_triee;
}

let tableau = [16,189,4,23,48,5,6,2,13,98,4,2,16,6,4,89,3,9,11,2001];

console.log(tri(tableau));