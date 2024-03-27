"use strict";
// *************************************************************************************************************
// **** El calculo debe estar dentro de una funcion.//done
// Números y operaciones matemáticas: Crea una función que tome dos números como parámetros y devuelva su suma.
let firstnum = 2;
let secondnum = 3;
const sumTwoNum = (a, b) => {
    return a + b;
};
console.log(sumTwoNum(firstnum, secondnum));
// Cadenas y concatenación: Escribe una función que tome dos cadenas y las concatene en una sola cadena.
let firstName = "Harrisong ";
let lastName = " Gutierrez";
const fullName = (a, b) => {
    return `${a}${b}`;
};
console.log(fullName(firstName, lastName));
// Booleanos y lógica: Implementa una función que determine si un número es par o impar y devuelva un booleano.
const esPar = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(esPar(4));
console.log(esPar(5));
// Arrays y manipulación: Crea una función que tome un array de números y devuelva la suma de todos los elementos.
let numArr = [1, 2, 3, 4, 5];
const sumArr = (num) => {
    let total = num.reduce((a, b) => a + b, 0);
    return total;
};
console.log(sumArr(numArr));
function calcDistanceFromOrigin(coordinates) {
    const [x, y] = coordinates;
    return Math.sqrt(x * 2 + y * 2);
}
const point = [3, 4];
const distance = calcDistanceFromOrigin(point);
console.log("the distance from origin is ", distance);
// *************************************************************************************************************
// ****** La linea "const result: string = parameter.toString();" no es necesario, el typeof debe ser aplicado a parameter y la funcion debe retornar un string.
// Escribe una función que tome un parámetro de tipo any y devuelva su tipo como cadena.
// const changetoString = (parameter: any) => {
//     const result: string = parameter.toString();
//     return typeof result
// }
const changetoString = (parameter) => {
    return typeof parameter.toString();
};
console.log(changetoString(3));
console.log(changetoString(true));
console.log(changetoString(Boolean));
// Void en funciones: Define una función que no devuelva ningún valor (void) pero imprima un mensaje en la consola.
function printMenssange() {
    console.log("this is an example");
}
printMenssange();
// Tipado de parámetros y retorno: Implementa una función que tome un nombre (cadena) y una edad (número) como parámetros y devuelva un objeto con estos datos.
let nombre = "Harrisong";
let edad = 26;
const returnObject = (name, age) => {
    let obj = {};
    obj["name"] = name;
    obj["age"] = age;
    return obj;
};
console.log(returnObject(nombre, edad));
// Funciones flecha: Convierte una función normal que calcule el cuadrado de un número en una función flecha.
function calculateNormal(numero) {
    return numero * numero;
}
const calculateArrow = (numero) => numero * numero;
console.log(calculateNormal(9));
console.log(calculateArrow(9));
// Funciones anidadas: Crea una función externa que reciba un número y devuelva una función interna que multiplique ese número por un valor dado.
const externalFunc = (num) => {
    const internalFunc = () => {
        let givenNumber = 10;
        return givenNumber * num;
    };
    return internalFunc();
};
console.log(externalFunc(10));
