console.log("Задание 1");

let person = {
    name: "Adam",
    age: 19,
};

for (let i in person) {
    console.log(`${i} ${person[i]}`)
};

console.log("Задание 2");

let obj = {};

function isEmpty(object) {
    for (let i in object) {
        console.log(false);
    }
    console.log(true);
};

isEmpty(obj);

console.log("Задание 3");

const task = {
    title: "str",
    description: "str",
    isComleted: true,
};
function cloneAndModify(object, modifications) {
    return {
        ...object,
        ...modifications
    };
};

let modifications = {
    num: 123,
    str: 123,
    bool: 123
};

const modifiedTask = cloneAndModify(task, modifications);

for (let i in modifiedTask) {
    console.log(`${i}: ${modifiedTask[i]}`)
};

console.log("Задание 4");

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод',
};

function callAllMethods(object1) {
    for (let i in object1) {
        if (typeof object1[i] == "function") {
            console.log(object1[i]());
        }
    }
};

callAllMethods(myObject);