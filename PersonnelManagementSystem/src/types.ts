export interface Employee {
    name: string;
    age: number;
}

export interface Manager extends Employee {
    department: string;
}

export interface Intern extends Employee {
    project: string;
}

export class EmployeeManager {
    employees: Employee[] = [];

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }
}
