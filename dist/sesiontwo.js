"use strict";
// Propiedades opcionales:
// a. Crea una interfaz "User" con propiedades obligatorias como "name" y "surname", y una propiedad opcional como "email".
// b. Define una función que acepte un objeto que cumpla con la interfaz "User" y muestre un mensaje personalizado según si el "email" está presente o no.
// c. Crea dos instancias de objetos "User", una con "email" y otra sin "email", y pásalas a la función definida para verificar su comportamiento.
function checkEmail(user) {
    if (user.email) {
        console.log(`El usuario ${user.name} ${user.surname} tiene un correo electrónico.`);
    }
    else {
        console.log(`El usuario ${user.name} ${user.surname} no tiene correo electrónico.`);
    }
}
const user1 = { name: 'Juan', surname: 'Pérez', email: 'juanper@gmail.com' };
const user2 = { name: 'María', surname: 'García' };
checkEmail(user1);
checkEmail(user2);
const developer = {
    name: 'Carlos', surname: 'González', programmingLanguage: 'JavaScript',
    work: function (task) {
        throw new Error("Function not implemented.");
    }
};
const designer = {
    name: 'Ana', surname: 'López', designTool: 'Figma',
    work: function (task) {
        throw new Error("Function not implemented.");
    }
};
console.log(developer);
console.log(designer);
function displayBook(book) {
    console.log(`Título: ${book.title}, Autor: ${book.author}`);
}
const book = { title: 'El principito', author: 'Antoine de Saint-Exupéry' };
displayBook(book);
const calculator = {
    sum(num1, num2) {
        return num1 + num2;
    }
};
console.log(calculator.sum(5, 3));
function operate(calc, num1, num2) {
    console.log(`Resultado: ${calc.sum(num1, num2)}`);
}
operate(calculator, 10, 20);
function displayUser(user) {
    console.log(`Nombre: ${user.name}, Email: ${user.email}`);
}
function displayAdmin(user) {
    console.log(`Nombre: ${user.name}, Role: ${user.role}`);
}
const adminUser1 = {
    name: 'Admin',
    email: 'admin@example.com',
    permissions: ['read', 'write'],
    role: 'admin'
};
const adminUser2 = {
    name: 'SuperAdmin',
    email: 'superadmin@example.com',
    permissions: ['read', 'write', 'delete'],
    role: 'superadmin'
};
displayUser(adminUser1);
displayAdmin(adminUser2);
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        return this.items[index];
    }
    displayAll() {
        console.log(this.items);
    }
}
const numberContainer = new ArrayCollection();
numberContainer.add(1);
numberContainer.add(2);
numberContainer.displayAll();
const stringContainer = new ArrayCollection();
stringContainer.add('hello');
stringContainer.add('world');
stringContainer.displayAll();
// Modelado de objetos:
// a. Crea una clase "Car" con propiedades como "brand", "model" y "price".
// b. Define métodos para mostrar información detallada del coche y calcular el precio de venta con impuestos.
// c. Crea instancias de la clase "Car" y utiliza sus métodos para obtener información y precios de diferentes modelos.
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    getDetails() {
        return `Marca: ${this.brand}, Modelo: ${this.model}, Precio: $${this.price}`;
    }
    calculatePriceWithTax(taxRate) {
        const totalPrice = this.price * (1 + taxRate / 100);
        return totalPrice;
    }
}
const car1 = new Car('Toyota', 'Corolla', 20000);
const car2 = new Car('Honda', 'Civic', 25000);
console.log(car1.getDetails());
console.log(car2.calculatePriceWithTax(10));
// Abstracción de datos:
// a. Crea una clase abstracta "Shape" con métodos abstractos para calcular el área y el perímetro.
// b. Implementa la clase abstracta en clases concretas como "Circle" y "Rectangle", definiendo cómo se calculan sus áreas y perímetros.
// c. Crea objetos de las clases concretas y llama a los métodos para calcular áreas y perímetros de diferentes figuras.
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.calculateArea());
console.log(rectangle.calculatePerimeter());
// Encapsulación:
// a. Crea una clase "BankAccount" con propiedades privadas como "balance" y métodos públicos para depositar y retirar dinero.
// b. Implementa la encapsulación utilizando métodos públicos para acceder y modificar el saldo de la cuenta.
// c. Crea una instancia de "BankAccount" y realiza operaciones de depósito y retiro para probar la encapsulación.
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Fondos insuficientes.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(500);
console.log(account.getBalance());
// Herencia:
// a. Crea una clase base "Animal" con propiedades y métodos como "name" y "eat".
// b. Crea clases hijas como "Dog" y "Cat" que hereden de "Animal" y añadan funcionalidades específicas como "bark" y "purr".
// c. Crea instancias de las clases hijas y prueba sus métodos heredados y propios.
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} está comiendo.`);
    }
}
class Dogs extends Animal {
    bark() {
        console.log(`${this.name} está ladrando.`);
    }
}
class Cats extends Animal {
    purr() {
        console.log(`${this.name} está ronroneando.`);
    }
}
const dogs = new Dogs('Bobby');
dogs.eat();
dogs.bark();
const cats = new Cats('Luna');
cats.eat();
cats.purr();
class Developer {
    work(task) {
        console.log(`Desarrollando ${task}`);
    }
}
class Designer {
    work(task) {
        console.log(`Diseñando ${task}`);
    }
}
function assignTask(employee, task) {
    employee.work(task);
}
const developers = new Developer();
const designers = new Designer();
assignTask(developers, "una nueva función");
assignTask(designers, "un nuevo diseño");
// Composición:
// a. Crea una clase "Engine" con métodos como "start" y "stop".
// b. Utiliza la clase "Engine" como una propiedad de la clase "Car" para representar el motor del coche.
// c. Crea un objeto "Car" con un motor específico y llama a sus métodos para controlar el funcionamiento del coche.
class Engine {
    start() {
        console.log("Motor arrancado.");
    }
    stop() {
        console.log("Motor detenido.");
    }
}
class Cars {
    constructor(engine) {
        this.engine = engine;
    }
    startCar() {
        this.engine.start();
    }
    stopCar() {
        this.engine.stop();
    }
}
const carEngine = new Engine();
const car = new Cars(carEngine);
car.startCar();
car.stopCar();
// Patrones de diseño:
// a. Implementa el patrón Singleton en una clase "Logger" para gestionar registros de eventos de forma única.
// b. Utiliza el patrón Factory Method para crear instancias de diferentes tipos de vehículos en una fábrica de vehículos.
// c. Aplica el patrón Observer para notificar a diferentes clases cuando se produzca un cambio en un objeto de datos.
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
Logger.instance = null;
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2);
// Componentes reutilizables:
// a. Crea una clase "Button" con propiedades y métodos para representar un botón en una interfaz de usuario.
// b. Utiliza la clase "Button" en múltiples lugares de una aplicación para mostrar botones reutilizables con diferentes estilos y funciones.
// c. Modifica la clase "Button" para agregar nuevas funcionalidades y asegúrate de que los cambios se reflejen en todos los botones utilizados en la aplicación.
// class Button {
//     constructor(private text: string, private onClick: () => void) { }
//     render() {
//         const button = document.createElement('button');
//         button.textContent = this.text;
//         button.addEventListener('click', this.onClick);
//         return button;
//     }
// }
// const button1 = new Button('Botón 1', () => {
//     console.log('Click en Botón 1');
// });
// const button2 = new Button('Botón 2', () => {
//     console.log('Click en Botón 2');
// });
// const button3 = new Button('Botón 3', () => {
//     console.log('Click en Botón 3');
// });
// const container = document.getElementById('buttons-container');
// container?.appendChild(button1.render());
// container?.appendChild(button2.render());
// container?.appendChild(button3.render());
// class EnhancedButton extends Button {
//     constructor(text: string, onClick: () => void, private style: string) {
//         super(text, onClick);
//     }
//     render() {
//         const button = super.render() as HTMLButtonElement;
//         button.classList.add(this.style);
//         return button;
//     }
// }
// const styledButton = new EnhancedButton('Botón Estilizado', () => {
//     console.log('Click en Botón Estilizado');
// }, 'styled-button');
// const styledContainer = document.getElementById('styled-button-container');
// styledContainer?.appendChild(styledButton.render());
