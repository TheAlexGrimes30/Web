function sumOfArrayElements(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function sumOfModules(arr){

    return arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
}

function countnegativeOddNumbers(arr){
    
    let count = 0;

    for (let i = 0; i < arr.length; i++){

        if (arr[i] < 0 && arr[i] % 2 != 0){

            count++;
        }
    }

    return count;
}
let array = [1, 2, 3, 4, 5];
let array_module = [-10, -3, "a", 0, 10];

console.log("Задание №1 сумма элементов последовательности: ", sumOfArrayElements(array));
console.log("Задание №7 сумма модулей: ", sumOfModules(array_module));
console.log("Задание №24 количество отрицательных нечётных чисел в последовательности", countnegativeOddNumbers(array_module));
console.log(1 / 0);