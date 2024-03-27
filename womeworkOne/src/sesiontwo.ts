// Propiedades opcionales:
// a. Crea una interfaz "User" con propiedades obligatorias como "name" y "surname", y una propiedad opcional como "email".
// b. Define una función que acepte un objeto que cumpla con la interfaz "User" y muestre un mensaje personalizado según si el "email" está presente o no.
// c. Crea dos instancias de objetos "User", una con "email" y otra sin "email", y pásalas a la función definida para verificar su comportamiento.


interface User {
    name: string;
    surname: string;
    email?: string;
}

function checkEmail(user: User) {
    if (user.email) {
        console.log(`El usuario ${user.name} ${user.surname} tiene un correo electrónico.`);
    } else {
        console.log(`El usuario ${user.name} ${user.surname} no tiene correo electrónico.`);
    }
}

const user1: User = { name: 'Juan', surname: 'Pérez', email: 'juanper@gmail.com' };
const user2: User = { name: 'María', surname: 'García' };

checkEmail(user1);
checkEmail(user2);



// Definición de contratos para clases:
// a. Crea una interfaz "Animal" con métodos como "eat" y "sleep".
// b. Implementa la interfaz "Animal" en clases como "Dog" y "Cat", definiendo cómo se comportan los métodos en cada caso.
// c. Crea instancias de "Dog" y "Cat" y llama a sus métodos para verificar que cumplan con el contrato de la interfaz.


// interface Animal {
//     eat(): void;
//     sleep(): void;
// }

// class Dog implements Animal {
//     eat() {
//         console.log("The dog is sliping.");
//     }
//     sleep() {
//         console.log("The dog is sliping.");
//     }
// }
// class Cat implements Animal {
//     eat() {
//         console.log("The cat is sliping.");
//     }
//     sleep() {
//         console.log("The cat is sliping.");
//     }
// }

// const dog = new Dog();
// const cat = new Cat();
// dog.eat();
// cat.sleep();


// Extensión de interfaces:
// a. Crea una interfaz base "Employee" con propiedades como "name" y "surname".
// b. Extiende la interfaz "Employee" en dos nuevas interfaces, "Developer" y "Designer", añadiendo propiedades específicas para cada tipo de empleado.
// c. Crea objetos de tipo "Developer" y "Designer" y accede a sus propiedades para verificar la extensión de la interfaz.

interface Employee {
    name: string;
    surname: string;
}

interface Developer extends Employee {
    programmingLanguage: string;
}
interface Designer extends Employee {
    designTool: string;
}

const developer: Developer = {
    name: 'Carlos', surname: 'González', programmingLanguage: 'JavaScript',
    work: function (task: string): void {
        throw new Error("Function not implemented.");
    }
};
const designer: Designer = {
    name: 'Ana', surname: 'López', designTool: 'Figma',
    work: function (task: string): void {
        throw new Error("Function not implemented.");
    }
};
console.log(developer);
console.log(designer);


// Interfaces con propiedades de solo lectura:
// a. Crea una interfaz "Book" con propiedades de solo lectura como "title" y "author".
// b. Define una función que acepte un objeto que cumpla con la interfaz "Book" y lo muestre por consola.
// c. Intenta modificar las propiedades de solo lectura de un objeto "Book" después de su creación para verificar que sean inmutables.



interface Book {
    readonly title: string;
    readonly author: string;
}

function displayBook(book: Book) {
    console.log(`Título: ${book.title}, Autor: ${book.author}`);
}

const book: Book = { title: 'El principito', author: 'Antoine de Saint-Exupéry' };
displayBook(book);


// Interfaces para funciones:
// a. Crea una interfaz "Calculator" con un método "sum" que acepte dos números y devuelva su suma.
// b. Implementa la interfaz "Calculator" en una función y prueba su funcionamiento llamándola con diferentes números.
// c. Define otra función que acepte un objeto que cumpla con la interfaz "Calculator" y use su método "sum" para realizar una operación.


interface Calculator {
    sum(num1: number, num2: number): number;
}

const calculator: Calculator = {
    sum(num1, num2) {
        return num1 + num2;
    }
};

console.log(calculator.sum(5, 3));

function operate(calc: Calculator, num1: number, num2: number) {
    console.log(`Resultado: ${calc.sum(num1, num2)}`);
}
operate(calculator, 10, 20);


// Interfaces indexables:
// a. Crea una interfaz "Dictionary" que permita acceder a sus elementos mediante claves de tipo string y devuelva valores de tipo string.
// b. Implementa la interfaz "Dictionary" en una clase y agrega métodos para añadir elementos, obtener un elemento por clave y mostrar todos los elementos del diccionario.
// c. Crea una instancia del diccionario, añade elementos y prueba los métodos de acceso y visualización.





// interface Dictionary {
//     [key: string]: string;
// }


// class StringDictionary implements Dictionary {
//     private data: Dictionary = {};
//     add(key: string, value: string) {
//         this.data[key] = value;
//     }
//     get(key: string): string {
//         return this.data[key];
//     }
//     showAll() {
//         console.log(this.data);
//     }
// }


// const dict = new StringDictionary();
// dict.add('apple', 'manzana');
// dict.add('banana', 'plátano');
// dict.showAll(); 
// console.log(dict.get('apple')); 



// Interfaces para tipos híbridos:
// a. Crea una interfaz "AdminUser" que combine propiedades de un usuario regular como "name" y "email" con propiedades de un administrador como "permissions" y "role".
// b. Define funciones que acepten objetos que cumplan con la interfaz "AdminUser" y muestren información combinada de usuario y administrador.
// c. Crea instancias de objetos que cumplan con la interfaz "AdminUser" y pasa los objetos a las funciones definidas para comprobar su comportamiento.


interface AdminUser {
    name: string;
    email: string;
    permissions: string[];
    role: string;
}

function displayUser(user: AdminUser) {
    console.log(`Nombre: ${user.name}, Email: ${user.email}`);
}
function displayAdmin(user: AdminUser) {
    console.log(`Nombre: ${user.name}, Role: ${user.role}`);
}

const adminUser1: AdminUser = {
    name: 'Admin',
    email: 'admin@example.com',
    permissions: ['read', 'write'],
    role: 'admin'
};
const adminUser2: AdminUser = {
    name: 'SuperAdmin',
    email: 'superadmin@example.com',
    permissions: ['read', 'write', 'delete'],
    role: 'superadmin'
};
displayUser(adminUser1);
displayAdmin(adminUser2);


// Interfaces genéricas:
// a. Crea una interfaz genérica "Container" que pueda contener un tipo de dato específico.
// b. Implementa la interfaz "Container" en una clase y agrega métodos para añadir elementos, obtener un elemento por índice y mostrar todos los elementos.
// c. Crea instancias del contenedor para diferentes tipos de datos (números, strings, objetos) y prueba los métodos de la clase.


interface Container<T> {
    add(item: T): void;
    get(index: number): T;
    displayAll(): void;
}

class ArrayCollection<T> implements Container<T> {
    private items: T[] = [];
    add(item: T) {
        this.items.push(item);
    }
    get(index: number): T {
        return this.items[index];
    }
    displayAll() {
        console.log(this.items);
    }
}

const numberContainer: Container<number> = new ArrayCollection<number>();
numberContainer.add(1);
numberContainer.add(2);
numberContainer.displayAll();
const stringContainer: Container<string> = new ArrayCollection<string>();
stringContainer.add('hello');
stringContainer.add('world');
stringContainer.displayAll();


// Modelado de objetos:
// a. Crea una clase "Car" con propiedades como "brand", "model" y "price".
// b. Define métodos para mostrar información detallada del coche y calcular el precio de venta con impuestos.
// c. Crea instancias de la clase "Car" y utiliza sus métodos para obtener información y precios de diferentes modelos.



class Car {
    constructor(public brand: string, public model: string, public price: number) { }
    getDetails() {
        return `Marca: ${this.brand}, Modelo: ${this.model}, Precio: $${this.price}`;
    }
    calculatePriceWithTax(taxRate: number) {
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



abstract class Shape {
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}


class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
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
    private balance: number = 0;
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
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
    constructor(public name: string) { }
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


// Polimorfismo:
// a. Define una interfaz "Employee" con un método "work" que acepte un parámetro de tipo "Task".
// b. Implementa la interfaz en clases como "Developer" y "Designer", cada una realizando tareas específicas en su método "work".
// c. Crea objetos de las clases y pásalos como parámetros a la función "work" para demostrar el polimorfismo.

interface Employee {
    work(task: string): void;
}

class Developer implements Employee {
    work(task: string) {
        console.log(`Desarrollando ${task}`);
    }
}
class Designer implements Employee {
    work(task: string) {
        console.log(`Diseñando ${task}`);
    }
}

function assignTask(employee: Employee, task: string) {
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
    private engine: Engine;
    constructor(engine: Engine) {
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
    private static instance: Logger | null = null;
    private constructor() { }
    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message: string) {
        console.log(message);
    }
}

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


