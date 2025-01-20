let i = 10;
let j = 20;

function test() {
    i = 40;
    let j = 50;
    for (let k = 0; k < 10; k++) {
        console.log('k = ' + k);
        let j = 60;

    }
    console.log('i = ' + i);
    console.log('j = '+j);

}

console.log('i = ' + i);
console.log('j = '+j);
test();