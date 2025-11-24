// Задание 1

let n1 = +prompt();
let n2 = +prompt();
let n3 = +prompt();

function calculateFinalPrice(price, discount, tax) {
    return price - discount + price * tax
}

console.log(calculateFinalPrice(n1, n2, n3));

// Задание 2

let n4 = prompt();
let n5 = prompt();

function checkAccess(name, password) {
    if (name === "admin" &&  password === "123456") {
        console.log("Доступ разрешен")
    } else {
        console.log("Доступ запрещен")
    }
}

console.log(checkAccess(n4, n5));

// Задание 3

let n6 = +prompt();

function getTimeOfDay(num) {
    if (num >= 0 && num <= 5) {
        console.log("Ночь")
    } else if (num >= 6 && num <= 11) {
        console.log("Утро")
    } else if (num >= 12 && num <= 17) {
        console.log("День")
    } else if (num >= 18 && num <= 23) {
        console.log("Вечер")
    } else {
        console.log("Некорректное время")
    }
}

console.log(getTimeOfDay(n6))

// Задание 4

let n7 = +prompt();
let n8 = +prompt();

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i);
            break;
        } else {
            console.log("Чётных чисел нет");
        }
    }
}

console.log(findFirstEven(n7, n8))