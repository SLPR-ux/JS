function abs(x) {
    if (x < 0) {
        return -x;
    } else {
        return x;
    }
}

let nombrep = 50;
let nombren = -62;
let nombrenul = 0;

console.log("La valeur absolue de " + nombrep + " est " + abs(nombrep));
console.log("La valeur absolue de " + nombren + " est " + abs(nombren));
console.log("La valeur absolue de " + nombrenul + " est " + abs(nombrenul));