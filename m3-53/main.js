// Задание 1

console.log("Задание 1");

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
];

const user1 = { name: 'Ann', age: 19, isAdmin: false };
const user2 = { name: 'Jack', age: 43, isAdmin: true};

users.push(user1);
users.push(user2);

console.log(users);

// Задание 2

console.log("Задание 2");

function getUserAverageAge(users) {
    let middleAge = 0;
    let counter = 0
    for (let i = 0; i < users.length; i++) {
        middleAge += users[i].age;
        ++counter;
    }
    middleAge /= counter;
    console.log(middleAge);
};

getUserAverageAge(users);

// Задание 3

console.log("Задание 3");

function getAllAdmins(users) {
    const usersAdmins = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin == true) {
            usersAdmins.push(users[i])
        }
    }
    console.log(usersAdmins);
};

getAllAdmins(users);

// Задание 4

console.log("Задание 4");

function first(arr, n) {
    const newUsers = [];
    n = prompt();
    if (n == undefined) {
        n = 1;
    } else {
        +n;
    }
    for (let i = 0; (i < n && i < arr.length); i++) {
        newUsers.push(users[i]);
    }
    console.log(newUsers)
};

first(users);