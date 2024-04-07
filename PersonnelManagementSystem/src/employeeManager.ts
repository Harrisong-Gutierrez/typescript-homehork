import { Employee } from './types';
import { validateName } from './decorators';

export class EmployeeManager {
    employees: Employee[] = [];

    @validateName
    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}
