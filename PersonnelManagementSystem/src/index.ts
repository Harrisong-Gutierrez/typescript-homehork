// import { EmployeeManager, loadEmployees } from './employees';
// import { EmployeeWithSalary } from './types';


// const manager = new EmployeeManager();


// const employeeWithSalary: EmployeeWithSalary = {
//     name: 'Juan Gutierrez',
//     age: 30,
//     salary: 50000
// };


// manager.addEmployee(employeeWithSalary);

// console.log(manager.calculateTotalSalary());


// loadEmployees().then(() => {
//     console.log(manager.employees);
// });

import { EmployeeManager, loadEmployees } from './fileManager';
import { EmployeeWithSalary } from './types';

const manager = new EmployeeManager();

const employeeWithSalary: EmployeeWithSalary = {
    name: 'Juan Gutierrez',
    age: 30,
    salary: 50000
};

manager.addEmployee(employeeWithSalary);

console.log(manager.calculateTotalSalary());

loadEmployees().then(() => {
    console.log(manager.employees);
});
