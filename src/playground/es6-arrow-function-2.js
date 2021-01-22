

const add = function (a, b) {
    return a + b; 
}; 

console.log(add(57, 1)); 

const user = { 
    name: 'Renata',
    cities: ['Cerknica', 'Ljubljana', 'Amsterdam'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived(); 

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
};

console.log(multiplier.multiply()); 