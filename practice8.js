// Пример объекта со свойствами
const person = {
    name: 'Alexandr',
    age: 19
};

// Пример пустого объекта
let empty_object = {};

// Пример встроенного объекта Массив
let sample_arr = new Array(1, 2, 3);

console.log("Создание объекта с помощью литеральной нотации");
console.log(person.name); 
person.age = 20;
console.log(person.age); 
console.log(sample_arr);

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log(`Hello! My name is ${this.name} and my age is ${this.age} years old.`);
};

Person.prototype.determineCategory = function() {
    if (this.age < 18 && this.age > 0) {
        console.log("Child");
    } else if (this.age >= 18 && this.age < 65) {
        console.log("Adult");
    } else if (this.age >= 65 && this.age < 120) {
        console.log("Senior");
    } else {
        console.log("Invalid age");
    }
};

const person1 = new Person('Kolya', 16);
const person2 = new Person('Oly', 30);

console.log("\nЗадание 2");
person1.introduce();
person1.determineCategory();

person2.introduce();
person2.determineCategory();

console.log("\nЗадание 3");
Array.prototype.average = function() {
    if (this.length === 0) {
        return 0;
    }

    let sum = this.reduce(function(total, currentValue) {
        return total + currentValue;
    }, 0);

    return sum / this.length;
};

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.average()); 