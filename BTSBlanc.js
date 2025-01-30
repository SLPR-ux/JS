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

let tableau = [10,9,8,7,6,5,4,3,2,1];

console.log(tri(tableau));