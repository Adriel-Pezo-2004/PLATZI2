function calc(num1, num2, sumNum) {
    return callback(num1, num2);
}

console.log(calc(2,2, sum));

setTimeout(function () {
    console.log("Hello JavaScript");
}, 2000)

function greetting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greetting, 2000, 'Adriel');