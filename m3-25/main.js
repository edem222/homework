// Задание 1

for (let i = 0; i <= 20; i++) {
    if (i % 4 == 0) {
        continue;
    }
    console.log(i)
}

// Задание 2

let num = +prompt("Введите число");
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial)

// Задание 3

for (let c = 0; c <= 8; c++) {
    let row = "";
    for (let s = 0; s <= 8; s++) {
        if ((c + s) % 2 === 0) {
            row += '#';
        } else {
            row += ' ';
        }
    }
    console.log(row)
}