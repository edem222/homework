myObject = {
    name: "Adam",
    age: 19,
    sayHello() {
        return `Hello ${this.name}`; 
    }
}

console.log(myObject.sayHello());

adminUssers = 0;

arrayUssers = [
    {
        name: "Adam",
        age: 19,
        status: "Admin"
    },
    {
        name: "Mikail",
        age: 20,
        status: "User"
    },
    {
        name: "Edem",
        age: 21,
        status: "Top G"
    },
    {
        name: "Solomon",
        age: 22,
        status: "Admin"
    }
]

for (let i = 0; i < arrayUssers.length; i++) {
    if (arrayUssers[i].status != "Admin") {
        adminUssers += 1;
    }
}

console.log(adminUssers)