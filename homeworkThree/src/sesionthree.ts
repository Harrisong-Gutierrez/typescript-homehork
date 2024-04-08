import { Models } from "./utils/models";
import { Utilities } from "./utils/utilities";




// Descripción:
// Crea una clase genérica DataStore<T> que funcione como un almacén de datos genéricos. Implementa métodos para agregar (addItem), obtener (getItem) y eliminar (removeItem) elementos del almacén.
// Tareas:

// Define la clase DataStore<T> con un método para agregar elementos de tipo T.
// Implementa un método para obtener un elemento dado su índice.
// Añade un método para eliminar un elemento del almacén.

// Desafíos Adicionales:

// Implementa una restricción de tipo para asegurar que solo se puedan agregar elementos que tengan una propiedad específica.
// Crea una instancia de DataStore<T> con diferentes tipos de datos (por ejemplo, números, cadenas, objetos).






interface Item {
    id: number | string | object;
}

class DataStore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        if (item !== null && typeof item === 'object' && 'id' in item) {
            this.items.push(item);
        } else {
            console.error("El elemento no tiene la propiedad 'id'.");
        }
    }

    getItem(index: number): T | undefined {
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }
}


const dataStore = new DataStore<Item>();


dataStore.addItem({ id: 1 });
dataStore.addItem({ id: "abc" });
dataStore.addItem({ id: { mame: "harrisong", age: 26 } });
console.log(dataStore)

const numberStore = new DataStore<number>();

numberStore.addItem(1);
console.log(numberStore.getItem(0));

const stringStore = new DataStore<string>();

stringStore.addItem("Harrisong");
console.log(stringStore.getItem(0));

const objectStore = new DataStore<{ id: string | number, name: string }>();

objectStore.addItem({ id: 1, name: "Object 1" });
objectStore.addItem({ id: 10, name: "Object 2" });
console.log(objectStore.getItem(0));
objectStore.removeItem(0);




// Descripción:
// Desarrolla una clase genérica OrderManager<T> para gestionar órdenes de productos en un sistema de comercio electrónico. La clase debe permitir agregar órdenes, obtener detalles de una orden específica y calcular el total de ventas.
// Tareas:

// Implementa la clase OrderManager<T> con métodos para agregar órdenes, obtener detalles de una orden y calcular el total de ventas.
// Crea instancias de OrderManager<T> para manejar diferentes tipos de órdenes (por ejemplo, órdenes de productos físicos, órdenes digitales).

// Desafíos Adicionales:

// Añade funcionalidades para aplicar descuentos a las órdenes y calcular el total con descuento.
// Implementa una interfaz para definir la estructura de las órdenes y asegurar la coherencia en los datos.

interface physicalOrder {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

interface digitalOrder {
    id: number;
    product: string;
    price: number;
    quantity: number;
    key: number;
}


class OrderManager<T extends physicalOrder | digitalOrder> {
    private orders: T[] = [];

    addOrder(order: T): void {
        this.orders.push(order);
    }

    getOrderDetails(orderId: number): T | undefined {
        return this.orders.find(order => order.id === orderId);
    }

    calculateTotalSales(): number {
        return this.orders.reduce((total, order) => total + (order.price * order.quantity), 0);
    }

    applyDiscount(discountPercentage: number): number {
        const totalSales = this.calculateTotalSales();
        const discountedAmount = totalSales * (discountPercentage / 100);
        return totalSales - discountedAmount;
    }
}

const physicalOrderManager = new OrderManager<physicalOrder>();
const digitalOrderManager = new OrderManager<digitalOrder>();


physicalOrderManager.addOrder({ id: 1, product: "Laptop", price: 1000, quantity: 2 });
physicalOrderManager.addOrder({ id: 2, product: "Smartphone", price: 800, quantity: 3 });
console.log(physicalOrderManager)

digitalOrderManager.addOrder({ id: 1, product: "Ebook", price: 20, quantity: 5, key: 45634 });
digitalOrderManager.addOrder({ id: 2, product: "Software", price: 50, quantity: 2, key: 1998 });
console.log(digitalOrderManager)

console.log(physicalOrderManager.calculateTotalSales());
console.log(digitalOrderManager.calculateTotalSales());

console.log(physicalOrderManager.applyDiscount(10));
console.log(digitalOrderManager.applyDiscount(20));






// Descripción:
// Crea un proyecto TypeScript que utilice espacios de nombres para organizar el código en módulos relacionados. Por ejemplo, puedes tener un espacio de nombres Utilities que contenga funciones genéricas de utilidad, y otro espacio de nombres Models que defina clases genéricas para modelos de datos.
// Tareas:

// Define un espacio de nombres Utilities con funciones genéricas como clamp para limitar un valor dentro de un rango y shuffle para mezclar un array.
// Crea un espacio de nombres Models que contenga una clase genérica Item<T> para representar elementos genéricos con propiedades como nombre, precio, etc.
// Utiliza las funciones y clases definidas en los espacios de nombres en tu proyecto principal.

// Desafíos Adicionales:

// Organiza los archivos TypeScript en carpetas correspondientes a cada espacio de nombres para una estructura más clara.
// Implementa una función de utilidad en el espacio de nombres Utilities para calcular el promedio de un array de números genéricos.








const value = Utilities.clamp(10, 0, 5);
console.log(value);

const array = [1, 2, 3, 4, 5];
const shuffledArray = Utilities.shuffle(array);
console.log(shuffledArray);

const item = new Models.Items("Product", 20, { description: "This is a product" });
console.log(item);