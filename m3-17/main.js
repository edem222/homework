// // Задание 1

let num1 = +prompt("Введите число");

if (num1%2===0) {
    console.log("Число четное")
} else if (num1%2===1){
    console.log("Число нечетное")
} else {
    console.log("Введенное значение не число")
}

// // Задание 2

let age1 = +prompt("Введите ваш возраст");

let discount = age1 < 18 ? "10%" : (age <= 65 ? "20%" : "30%");

console.log(discount)

switch (true) {
    case (age1 < 18):
        discount = "10%";
        break;   
    case (age1 >= 18 && age1 <= 65):
        discount = "20%";
        break;    
    case (age1 > 65):
        discount = "30%";  
        break;    
    default:
        discount = "0%";
        break;
}

console.log(discount)

// // Задание 3

let username = prompt("Ваше имя?");
let password = prompt("Пароль");

if ((username === "admin" || username === "user") && password === "123456") {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}

// Задание 4

let weight = +prompt("Введите вес");
let deliveryType = prompt("Тип доставки(Стандарт, Экспресс, Премиум)")

let pricePerWeight;
let deliveryRates;
let finalPrice;

pricePerWeight = weight < 1 ? 5 : (weight < 5 ? 10 : 15);

switch (deliveryType) {
    case "Стандарт":
        deliveryRates = 1;
        break;
    case "Экспресс":
        deliveryRates = 1.5;
        break;
    case "Премиум":
        deliveryRates = 2;
        break;
}

finalPrice = deliveryRates * pricePerWeight;

console.log(`Итоговая стоимость доставки: ${finalPrice}$`)