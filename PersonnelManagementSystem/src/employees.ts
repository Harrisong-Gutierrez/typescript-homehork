import { promises as fsPromises } from 'fs';
import { Role } from './types';
import { EmployeeManager } from './employeeManager';


export async function loadEmployees(): Promise<void> {
    try {
        const data = await fsPromises.readFile('./src/database.json', 'utf-8');
        const employeesData = JSON.parse(data).employees;

        const manager = new EmployeeManager();

        employeesData.forEach((employeeData: Role) => {
            manager.addEmployee(employeeData);
        });

        console.log(manager.employees);
    } catch (error) {
        console.error('Error al leer el archivo database.json:', error);
    }
}

export { EmployeeManager };

