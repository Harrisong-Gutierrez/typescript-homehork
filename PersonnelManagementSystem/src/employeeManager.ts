import { Employee, Role } from './types';
import { validateName } from './decorators';

export class EmployeeManager {
    employees: Role[] = [];

    @validateName
    addEmployee(employee: Role) {
        this.employees.push(employee);
    }
}
