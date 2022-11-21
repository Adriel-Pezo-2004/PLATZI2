function gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array){
    for(let value of array) {
        yield value;
    }
}


const i = iterate(['Adriel','Francesco', 'Rafael', 'Juan']);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);