const promise = new Promise(function(resolve, reject) {
    resolve(`Good job!`)
});

// How a promise works 
const cows = 12;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    } else{
        reject("We don't have that number of cows on the farm")
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));